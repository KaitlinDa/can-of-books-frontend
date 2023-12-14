import Modal from 'react-bootstrap/Modal';
import CreateBook from './CreateBook';
import Button from 'react-bootstrap/Button';

export default function CreateBookModal({ onCreate, onClose, show }) {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create Book</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CreateBook onCreate={onCreate} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}