import React from 'react';

function WatchedMovie({ movie,onMovieDetail,onDeleteFromWatched }) {

  const id = movie.imdbID;

  
  return (
    <div>
      <li key={movie.imdbID} onClick={()=>onMovieDetail(id)}>
            <img src={movie.poster} alt={`${movie.title} poster`} />
            <h3>{movie.title}</h3>
            <div>
                <p>
                <span>⭐️</span>
                <span>{movie.imdbRating}</span>
                </p>
                <p>
                <span>🌟</span>
                <span>{movie.userRating}</span>
                </p>
                <p>
                <span>⏳</span>
                <span>{movie.runtime} min</span>
                </p>

            </div>
      </li>

      <button className='btn-delete' onClick={() => onDeleteFromWatched(id)}>X</button>
    </div>
    
  );
}

export default WatchedMovie;