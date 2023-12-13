import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export default function AvailabilityFilter({handleStatusSubmit}) {
  return (
    <Container>
      <h2>Filter by book availability status</h2>
      <form onSubmit={handleStatusSubmit}>
        <select name='status' defaultValue='Available'>
          <option value='Available'>Available</option>
          <option value='Unavailable'>Unavailable</option>
        </select>
        <Button className='button'>Submit</Button>
      </form>
    </Container>
  );
}
