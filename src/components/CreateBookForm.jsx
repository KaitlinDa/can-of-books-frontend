import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export default function BookForm({ onCreate, setShowModal, fetchBooks }) {
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    await onCreate({
      title: event.target.formTitle.value,
      status: event.target.formStatus.value,
      description: event.target.formDescription.value,
      image_url: event.target.image_url.value,
    });
    setShowModal(false);
    navigate('/');
    fetchBooks();
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='formTitle'>
          <Form.Label>Title</Form.Label>
          <Form.Control type='text' placeholder='Enter Book Title' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formStatus'>
          <Form.Label>Status</Form.Label>
          <Form.Select name='status'>
            <option value='Available'>Available</option>
            <option value='Unavailable'>Unavailable</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formDescription'>
          <Form.Label>Description</Form.Label>
          <Form.Control type='text' placeholder='Enter book description' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='image_url'>
          <Form.Label>Image Url</Form.Label>
          <Form.Control
            type='text'
            defaultValue='https://picsum.photos/seed/picsum/200/300'
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </>
  );
}
