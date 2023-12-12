function BestBooks({ books }) {
  return (
    <>
      {books.length && books.map((book, idx) => (
        <div key={idx}>
          {book.title} is {book.status}
        </div>
      ))}
    </>
  )
}

export default BestBooks;
