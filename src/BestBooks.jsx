import { Carousel } from 'react-bootstrap';

function BestBooks({ books }) {
  if (books.length === 0) {
    return <div>No books available</div>;
  }

  return (
    <Carousel>
      {books.map((book, idx) => (
        <Carousel.Item key={idx}>
          <img
            className="d-block w-100"
            src={book.imageUrl} 
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
