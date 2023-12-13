export default function AvailabilityFilter({handleStatusSubmit}) {
  return (
    <>
      <h2>Filter by book availability status</h2>
      <form onSubmit={handleStatusSubmit}>
        <select name='status' defaultValue='Available'>
          {/* Default value set to 'Available' */}
          <option value='Available'>Available</option>
          <option value='Unavailable'>Unavailable</option>
        </select>
        <button>Submit</button>
      </form>
    </>
  );
}
