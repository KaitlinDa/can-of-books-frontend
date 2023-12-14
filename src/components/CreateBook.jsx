import Button from 'react-bootstrap/Button';
import CreateBookModal from './CreateBookModal';
import { useState } from 'react';

export default function CreateBook({ handleCreate }) {
  const [showModal, setShowModal] = useState(false);

  function handleCreateClick() {
    setShowModal(true);
  }

  function handleClose() {
    setShowModal(false);
  }

  return (
    <>
    <Button onClick={handleCreateClick} className='button' variant='primary'>
      Create Book
    </Button>
    {showModal && (
      <CreateBookModal
        show={showModal}
        onClose={handleClose}
        onCreate={handleCreate}
      />
    )}
  </>
);
}