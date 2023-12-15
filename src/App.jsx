import { useEffect, useState } from 'react';
import axios from 'axios';
// import BestBooks from './components/BestBooks';
// import HandleError from './components/HandleError';
import CreateBook from './components/CreateBook';
// import AvailabilityFilter from './components/AvailabilityFilter';
import BooksLayout from './components/BooksLayout';
import About from './components/About';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import AllBooks from './components/AllBooks';

const SERVER = import.meta.env.VITE_SERVER_URL;

export default function App() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('Available');
  const [showCreateModal, setShowCreateModal] = useState(false);

  useEffect(() => {
    fetchBooks();

    // Check if the current route is '/create'
    if (window.location.pathname === '/create') {
      setShowCreateModal(true);
    } else {
      setShowCreateModal(false);
    }
  }, [status]);

  async function fetchBooks() {
    let dbURL = `${SERVER}/books`;

    if (status !== 'All') {
      dbURL += `?status=${status}`;
    }

    try {
      const response = await axios.get(dbURL);
      console.log('Fetched books:', response.data); // Log the fetched books
      setBooks(response.data);
      setError(null);
    } catch (error) {
      if (error.response) {
        // The request was made, but the server responded with a status code outside the 2xx range
        const { status } = error.response;
        setError(`Data Error - Status Code: ${status}`);
      } else if (error.request) {
        // The request was made but no response was received
        setError('Fetch Error: No response received');
      } else {
        // Something happened in setting up the request that triggered an Error
        setError('Fetch Error: ' + error.message);
      }
    }
  }

  async function handleBookUpdate(bookToUpdate) {
    const updateUrl = `${SERVER}/books/${bookToUpdate._id}`;

    try {
      await axios.put(updateUrl, bookToUpdate);
      const updatedBooks = books.map((book) =>
        book._id === bookToUpdate._id ? bookToUpdate : book
      );
      setBooks(updatedBooks);
      fetchBooks();
    } catch (error) {
      console.log(error);
    }
  }

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  async function handleDelete(bookToDelete) {
    const deleteUrl = `${SERVER}/books/${bookToDelete._id}`;

    try {
      await axios.delete(deleteUrl);
      const filteredBooks = books.filter(
        (book) => book._id !== bookToDelete._id
      );
      setBooks(filteredBooks);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleCreate(bookInfo) {
    const deleteUrl = `${SERVER}/books`;
    const response = await axios.post(deleteUrl, bookInfo);
    const newBook = response.data;
    setBooks([...books, newBook]);
    setShowCreateModal(false);
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Container>
        <Routes>
        <Route
            path='/'
            element={
              <BooksLayout
                books={books}
                error={error}
                handleStatusChange={handleStatusChange}
                status={status}
                showBestBooks={true} // only show on the '/' path
              />
            }
          />
          <Route path='/about' element={<About />} />
          <Route
            path='/edit'
            element={
              <BooksLayout
                books={books}
                error={error}
                handleStatusChange={handleStatusChange}
                status={status}
              >
                <AllBooks
                  books={books}
                  onUpdate={handleBookUpdate}
                  handleDelete={handleDelete}
                />
              </BooksLayout>
            }
          />
          <Route
            path='/create'
            element={
              <CreateBook
                handleCreate={handleCreate}
                fetchBooks={fetchBooks}
                show={showCreateModal}
                onClose={() => setShowCreateModal(false)}
              />
            }
          />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}
