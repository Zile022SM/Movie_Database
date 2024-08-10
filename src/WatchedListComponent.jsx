import React from 'react';
import WatchedMovie from './WatchedMovie';

function WatchedListComponent({ watched,onMovieDetail,onDeleteFromWatched }) {
  
  return (
    <ul className="list">
        {watched.map((movie) => (
            <WatchedMovie key={movie.imdbID} movie={movie} onMovieDetail={onMovieDetail}onDeleteFromWatched={onDeleteFromWatched} />
        ))}
    </ul>
  );
}

export default WatchedListComponent;