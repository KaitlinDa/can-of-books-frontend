import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export default function AvailabilityFilter({handleStatusSubmit}) {
  const [status, setStatus] = useState('Available');

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleStatusSubmit(status);
  };

  return (
    <Container>
      <h2>Filter by book availability status</h2>
      <form onSubmit={handleSubmit}>
        <select name='status' value={status} onChange={handleChange}>
          <option value='Available'>Available</option>
          <option value='Unavailable'>Unavailable</option>
        </select>
        <Button className='button' type='submit'>
          Submit
        </Button>
      </form>
    </Container>
  );
}