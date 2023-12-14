import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export default function AvailabilityFilter({ handleStatusSubmit, handleStatusChange, status }) {
 
  const handleSubmit = (event) => {
    event.preventDefault();
    handleStatusSubmit(status);
  };

  return (
    <Container>
      <h2>Filter by book availability status</h2>
      <form onSubmit={handleSubmit}>
        <select name='status' value={status} onChange={handleStatusChange}>
          <option value='All'>All</option>
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
