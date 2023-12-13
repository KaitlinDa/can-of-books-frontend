import { useState } from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const SERVER = import.meta.env.VITE_SERVER_URL;

function DeleteBook({ show, handleClose, fetchBooks }) {

  const [formData, setFormData] = useState({
    _id: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };


  async function handleSubmit(event) {
    event.preventDefault();
    try {
      console.log('Deleting book data:', formData); 
      const response = await axios.delete(`${SERVER}/books/:${id}`, formData);
      console.log('Server response:', response.data); // Log the server response
      fetchBooks();
      handleClose();
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  }

  if (!show) return null;

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Book</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <label>
            ID:
            <input type="text" name="_id" value={formData._id} onChange={handleChange} />
          </label>
          <Button type="submit">Delete Book</Button>
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

export default DeleteBook