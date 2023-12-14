import { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import UpdateBookModal from './UpdateBookModal';
import Button from 'react-bootstrap/Button'

function AllBooks({ books, onUpdate, handleDelete }) {
  return (
 
    <ListGroup>
      {books.map((book) => (
        <ListGroup.Item key={book._id}>
          <Book book={book} onUpdate={onUpdate} handleDelete={handleDelete}/>
        </ListGroup.Item>
      ))}
    </ListGroup>
    
  );
}

function Book({ book, onUpdate, handleDelete }) {
  const [showModal, setShowModal] = useState(false);

  function deleteBook() {
    handleDelete(book)
  }

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
      <Button onClick={handleEditClick} className='button' variant='secondary'> Edit </Button>
      <Button onClick={deleteBook} className='button' variant="danger"> Delete </Button>
        <h3>{book.title}</h3>
        <h4>{book.status} </h4>
        <h4>{book.description} </h4>
        <img
          className='d-block w-100'
          src={book.image_url}
          alt={book.title}
          style={{ maxHeight: '200px', objectFit: 'contain' }}
        />
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
