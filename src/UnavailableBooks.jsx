function UnavailableBooks({ books }) {
  
    const unavailableBooks = books.filter(book => book.status === 'Unavailable');
  
    return (
      <div>
        <h2>Unavailable Books</h2>
        <ul>
          {unavailableBooks.map((book, idx) => (
            <li key={idx}>{book.title}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default UnavailableBooks;