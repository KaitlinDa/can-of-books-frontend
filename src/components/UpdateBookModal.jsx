import Modal from 'react-bootstrap/Modal';
import UpdateBook from './UpdateBook';
import Button from 'react-bootstrap/Button'

export default function UpdateBookModal( {onUpdate, book, onClose, show }) {
    
    return (
        <Modal show={show} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update {book.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UpdateBook onUpdate={onUpdate} book={book} />
        </Modal.Body>
        <Modal.Footer>
        <Button variant='secondary' onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
      </Modal>  

    );
}