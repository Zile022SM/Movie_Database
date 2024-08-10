import React from 'react';
import MovieComponent from './MovieComponent';

function MovieListComponent({ movies, onMovieDetail }) {
  return (
    <ul className="list list-movies">
        {movies?.map((movie) => (
            <MovieComponent key={movie.imdbID} movie={movie} onMovieDetail={onMovieDetail} />
        ))}
    </ul>
  );
}

export default MovieListComponent;