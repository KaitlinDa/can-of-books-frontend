import { useEffect, useState } from 'react';
import axios from 'axios';
import BestBooks from './BestBooks';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

const SERVER = import.meta.env.VITE_SERVER_URL;

function App() {
  const [books, setBooks] = useState([]);

  useEffect (() => {
    fetchBooks();
  }, []);

async function fetchBooks(status = 'Available') {
let dbURL = `${SERVER}/books`;

if (status) {
  dbURL += `?status=${status}`;
}

try {
  const response = await axios.get(dbURL);
  setBooks(response.data);
} catch (error) {
  console.error(error);
}
}
function handleStatusSubmit(event) {
  event.preventDefault();
  const status = event.target.status.value;
  fetchBooks(status);
}

return (
  <>
        <BrowserRouter>
          <nav>
            <h1>Can of Books</h1>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
          <Routes>
            <Route  exact path="/" element={
              <div>
                <BestBooks books={books} />
                <h2>Filter by status</h2>
                <form onSubmit={handleStatusSubmit}>
                  <input name="status" />
                  <button>ok</button>
                </form>
              </div>
            } />
            <Route path="/about" element={
              <h1>About Page Here</h1>
            } />
          </Routes>
        </BrowserRouter>
      </>
)
}

export default App;
