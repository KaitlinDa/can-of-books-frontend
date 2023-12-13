import { useState } from 'react';
import axios from 'axios';

const SERVER = import.meta.env.VITE_SERVER_URL;

function AddBook({ show, handleClose, fetchBooks }) {
  const [formData, setFormData] = useState({
    title: '',
    status: '',
    description: '',
    image_url: ''
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
          Description:
          <input type="text" name="description" value={formData.description} onChange={handleChange} />
        </label>
        <label>
          Availability Status:
          <input type="text" name="availability" value={formData.availability} onChange={handleChange} />
        </label>
        <label>
          Image Url
          <input type="text" name="imageUrl" value={formData.image_url} onChange={handleChange} />
        </label>
      
        {/* Add other form elements as necessary */}
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
