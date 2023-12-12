import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure to import Bootstrap CSS
function UnavailableBooks({ books }) {
  
    const unavailableBooks = books.filter(book => book.status === 'Unavailable');
  
    return (
        <Carousel>
        {unavailableBooks.map((book, idx) => (
          <Carousel.Item key={idx}>
            <img
              className="d-block w-100"
              src={book.image_url}
              alt={book.title}
              style={{ maxHeight: '800px', objectFit: 'contain' }}
            />
             <Carousel.Caption style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: '20px' }}>
              <h3 style={{ color: '#fff' }}>{book.title}</h3>
              <p style={{ color: '#fff' }}>Status: {book.status}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
  
  export default UnavailableBooks;