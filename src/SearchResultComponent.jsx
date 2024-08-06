import React from 'react';

function SearchResultComponent({ movies }) {
  return (
    <p className="num-results">
          Found <strong>{movies.length}</strong> results
    </p>
  );
}

export default SearchResultComponent;