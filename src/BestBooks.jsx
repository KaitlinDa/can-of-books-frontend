import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure to import Bootstrap CSS


function BestBooks({ books }) {
  if (books.length === 0) {
    return <div>No books available</div>;
  }

  // Filter books based on availability
  const availableBooks = books.filter(book => book.status === 'Available');

  if (availableBooks.length === 0) {
    return <div>No available books</div>;
  }

  return (
    <Carousel>
      {availableBooks.map((book, idx) => (
        <Carousel.Item key={idx}>
          <img
            className="d-block w-100"
            src="https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg"
            alt={book.title}
          />
          <Carousel.Caption>
            <h3>{book.title}</h3>
            <p>Status: {book.status}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default BestBooks;
