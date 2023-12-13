import { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import UpdateBookModal from './UpdateBookModal';

function AllBooks({ books, onUpdate }) {
  return (
    <ListGroup>
      {books.map((book) => (
        <ListGroup.Item key={book._id}>
          <Book book={book} onUpdate={onUpdate} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

function Book({ book, onUpdate }) {
  const [showModal, setShowModal] = useState(false);

  function handleEditClick() {
    setShowModal(true);
  }

  function handleClose() {
    setShowModal(false);
  }

  function handleUpdate(bookToUpdate) {
    setShowModal(false);
    onUpdate(bookToUpdate);
  }

  return (
    <>
      <span onClick={handleEditClick}>
        [Edit]
        <h3>{book.title}</h3>
        <h4>{book.status} </h4>
        <h4>{book.description} </h4>
        <img
          className='d-block w-100'
          src={book.image_url}
          alt={book.title}
          style={{ maxHeight: '200px', objectFit: 'contain' }}
        />
      </span>
      <UpdateBookModal
        show={showModal}
        book={book}
        onClose={handleClose}
        onUpdate={handleUpdate}
      />
    </>
  );
}

export default AllBooks;
