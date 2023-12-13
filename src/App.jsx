import { useEffect, useState } from 'react';
import axios from 'axios';
import BestBooks from './components/BestBooks';
import HandleError from './components/HandleError';
import AddBook from './components/AddBook';
import DeleteBook from './components/DeleteBook';
import AvailabilityFilter from './components/AvailabilityFilter';
import About from './components/About';
import Button from 'react-bootstrap/Button';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';

const SERVER = import.meta.env.VITE_SERVER_URL;

export default function App() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [showAddBook, setShowAddBook] = useState(false);
  const [showDeleteBook, setShowDeleteBook] = useState(false);

  useEffect(() => {
    fetchBooks();
  }, []);

  async function fetchBooks(status = 'Available') {
    let dbURL = `${SERVER}/books`;

    if (status) {
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
  
  function handleStatusSubmit(selectedStatus) {
    fetchBooks(selectedStatus);
  }
  
  const handleOpenAddBook = () => {
    setShowAddBook(true);
  };

  const handleOpenDeleteBook = () => {
    setShowDeleteBook(true);
  };

  const handleClose = () => {
    setShowAddBook(false);
    setShowDeleteBook(false);
  };

  return (
    <BrowserRouter>
        <NavBar />
        <Container>
        <Routes>
          <Route
            path='/'
            element={
              <div>
                <BestBooks books={books} />
                <HandleError error={error} />
                <AvailabilityFilter handleStatusSubmit={handleStatusSubmit} />
                {window.location.pathname === '/' && (
                  <>
                    <Button onClick={handleOpenAddBook} className='button'>
                      Add Book
                    </Button>
                    <Button onClick={handleOpenDeleteBook} className='button'>
                      Delete Book
                    </Button>
                  </>
                )}
                {showAddBook && (
                  <AddBook
                    show={showAddBook}
                    handleClose={handleClose}
                    fetchBooks={fetchBooks}
                  />
                )}
                {showDeleteBook && (
                  <DeleteBook
                    show={showDeleteBook}
                    handleClose={handleClose}
                    fetchBooks={fetchBooks}
                  />
                )}
              </div>
            }
          />
          <Route path='/about' element={<About />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}
