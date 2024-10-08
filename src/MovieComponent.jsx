import React from 'react';

function MovieComponent({ movie, onMovieDetail }) {
  return (
    <li key={movie.imdbID} onClick={() => onMovieDetail(movie.imdbID)}>
        <img src={movie.Poster} alt={`${movie.Title} poster`} />
        <h3>{movie.Title}</h3>
        <div>
        <p>
            <span>🗓</span>
            <span>{movie.Year}</span>
        </p>
        </div>
    </li>
  );
}

export default MovieComponent;