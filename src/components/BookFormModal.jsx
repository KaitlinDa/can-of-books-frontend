// BookFormModal.jsx

import { useState } from 'react';
import axios from 'axios';

const SERVER = import.meta.env.VITE_SERVER_URL;

function BookFormModal({ show, handleClose, fetchBooks }) {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    // Add other fields as necessary
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${SERVER}/books`, formData);
      fetchBooks();
      handleClose();
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  if (!show) return null;

  return (
    <div>
      <button onClick={handleClose}>Close</button>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
        </label>
        <label>
          Author:
          <input type="text" name="author" value={formData.author} onChange={handleChange} />
        </label>
        {/* Add other form elements as necessary */}
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default BookFormModal;
