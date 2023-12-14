import Modal from 'react-bootstrap/Modal';
import CreateBookForm from './CreateBookForm';
import Button from 'react-bootstrap/Button';

export default function CreateBookModal({ onCreate, onClose, show, fetchBooks }) {
  return (
    <Modal show={show} onHide={onClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Create Book</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CreateBookForm onCreate={onCreate} setShowModal={onClose} fetchBooks={fetchBooks}/>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}