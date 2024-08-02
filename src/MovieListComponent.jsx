import React from 'react';
import MovieComponent from './MovieComponent';

function MovieListComponent({ movies }) {
  return (
    <ul className="list">
        {movies?.map((movie) => (
            <MovieComponent key={movie.imdbID} movie={movie} />
        ))}
    </ul>
  );
}

export default MovieListComponent;