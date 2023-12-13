import { useState } from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const SERVER = import.meta.env.VITE_SERVER_URL;

function AddBook({ show, handleClose, fetchBooks }) {

  const [formData, setFormData] = useState({
    title: '',
    status: '',
    description: '',
    image_url: 'https://dummyimage.com/600x400/000/fff'
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };


  async function handleSubmit(event) {
    event.preventDefault();
    try {
      console.log('Submitting book data:', formData); 
      const response = await axios.post(`${SERVER}/books`, formData);
      console.log('Server response:', response.data); // Log the server response
      fetchBooks();
      handleClose();
    } catch (error) {
      console.error('Error adding book:', error);
    }
  }

  if (!show) return null;

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Book</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
            <select name="status" value={formData.status} onChange={handleChange}>
            <option value="Available">Available</option>
            <option value="Unavailable">Unavailable</option>
          </select>
          </label>
          <label>
            Image Url:
            <input type="text" name="image_url" value={formData.image_url} onChange={handleChange} />
          </label>
          {/* Add other form elements as necessary */}
          <Button type="submit" className='button'>Add Book</Button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}


export default AddBook;
