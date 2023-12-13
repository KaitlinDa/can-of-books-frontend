import { useEffect, useState } from 'react';
import axios from 'axios';
import BestBooks from './components/BestBooks';
import HandleError from './components/HandleError'
import AddBook from './components/AddBook';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AvailabilityFilter from './components/AvailabilityFilter';

const SERVER = import.meta.env.VITE_SERVER_URL;

function App() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const handleClose = () => setShowForm(false);

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

  function handleStatusSubmit(event) {
    event.preventDefault();
    const selectedStatus = event.target.status.value;
    fetchBooks(selectedStatus);
  }

  const handleOpenForm = () => {
    setShowForm(true);
  };

  return (
    <>
      <BrowserRouter>
        <nav>
          <h1>Can of Books</h1>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
        </nav>
        <button onClick={handleOpenForm}>Add Book</button>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <div>
                <BestBooks books={books} />
                <HandleError error={error} />
                <AvailabilityFilter handleStatusSubmit={handleStatusSubmit} />   
                <AddBook show={showForm} handleClose={handleClose} fetchBooks={fetchBooks} />

              </div>
            }
          />
          <Route
            path='/about'
            element={
              <>
                <h1>About the Developers</h1>
                <p>
                  <a href='https://github.com/rhettchase'>Rhett Chase</a>
                </p>
                <p>
                  <a href='https://github.com/KaitlinDa'>Kaitlin Davis</a>
                </p>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
