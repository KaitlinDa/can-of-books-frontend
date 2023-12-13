import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function UpdateBook({ book, onUpdate }) {
  const [title, setTitle] = useState(book.title);
  const [status, setStatus] = useState(book.status);
  const [description, setDescription] = useState(book.description);
  const [image_url, setImage] = useState(book.image_url);

  const _id = book._id;

  async function handleSubmit(event) {
    event.preventDefault();
    await onUpdate({
      title,
      status,
      description,
      image_url,
      _id,
    });
  }

  function handleChange(event) {
    switch (event.target.id) {
      case 'formTitle':
        setTitle(event.target.value);
        break;
      case 'formStatus':
        setStatus(event.target.value);
        break;
      case 'formDescription':
        setDescription(event.target.value);
        break;
      case 'formImg':
        setImage(event.target.value);
        break;
      default:
        break;
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className='mb-3' controlId='formTitle'>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type='title'
          placeholder='Enter Book Title'
          value={title}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formStatus'>
        <Form.Label>Status</Form.Label>
        <Form.Control
          type='status'
          placeholder='Enter Book Availability Status'
          value={status}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formDescription'>
        <Form.Label>Description</Form.Label>
        <Form.Control
          type='description'
          placeholder='Enter Book Description'
          value={description}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formImage'>
        <Form.Label>Image URL</Form.Label>
        <Form.Control
          type='image_url'
          placeholder='Enter Book Description'
          value={image_url}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Update
      </Button>
    </Form>
  );
}
