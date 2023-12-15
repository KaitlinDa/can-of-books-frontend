import Container from 'react-bootstrap/Container';
import { ListGroup } from 'react-bootstrap';

export default function AvailabilityFilter({ handleStatusChange, status }) {

  return (
    <Container>
      <h2>Filter by book availability status</h2>
      <form>
        <select name='status' value={status} onChange={handleStatusChange}>
          <option value='All'>All</option>
          <option value='Available'>Available</option>
          <option value='Unavailable'>Unavailable</option>
        </select>
      </form>
    </Container>
  );
}
