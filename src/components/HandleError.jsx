export default function HandleError({ error }) {
    if (!error) {
      return null; // If there's no error, don't render anything
    }
  
    return (
      <div>
        <h2>Error Information</h2>
        <p>{error}</p>
      </div>
    );
  }