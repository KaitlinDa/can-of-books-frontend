import BestBooks from './BestBooks';
import AvailabilityFilter from './AvailabilityFilter';
import HandleError from './HandleError';

const BooksLayout = ({ children, books, error, handleStatusChange, status, showBestBooks }) => (
  <div>
    <AvailabilityFilter
      handleStatusChange={handleStatusChange}
      status={status}
    />
     {showBestBooks && <BestBooks books={books} />}
    {children}
    <HandleError error={error} />
  </div>
);

export default BooksLayout;