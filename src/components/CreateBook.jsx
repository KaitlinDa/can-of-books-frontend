import Button from 'react-bootstrap/Button';
import CreateBookModal from './CreateBookModal';
import { useState } from 'react';

export default function CreateBook({ handleCreate, fetchBooks }) {
  const [showModal, setShowModal] = useState(false);

  function handleCreateClick() {
    setShowModal(true);
  }

  function handleClose() {
    setShowModal(false);
  }

  return (
    <>
      <div>
        <h2>Create a New Book</h2>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjaZbuYjXUTOFB2pL5S_nwKKun9NCiClDCvif7MXBP8A&s" alt="book" />
        <div>
        <Button
          onClick={handleCreateClick}
          className='button'
          variant='primary'
        >
          Create Book!
        </Button>
        </div>
      </div>
      {showModal && (
        <CreateBookModal
          show={showModal}
          onClose={handleClose}
          onCreate={handleCreate}
          fetchBooks={fetchBooks}
        />
      )}
    </>
  );
}
