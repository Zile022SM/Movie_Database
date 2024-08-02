import React from 'react';
import { useState } from 'react';
import MovieListComponent from './MovieListComponent';

function ListBoxComponent({ tempMovieData }) {

  const [movies, setMovies] = useState(tempMovieData);
  const [isOpen1, setIsOpen1] = useState(true);

  return (
    <div className="box">
          <button
            className="btn-toggle"
            onClick={() => setIsOpen1((open) => !open)}
          >
            {isOpen1 ? "–" : "+"}
          </button>
          {isOpen1 && <MovieListComponent movies={movies} />}
    </div>
  );
}

export default ListBoxComponent;