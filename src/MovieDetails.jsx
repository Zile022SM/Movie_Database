import React, { useEffect, useState } from 'react';

function MovieDetails({selectedId,onCloseMovieDetail,onAddWatched,watched}) {

  const [details, setDetails] = useState({});

  const {Title: title,Year: year, Poster: poster, Runtime: runtime,imdbRating, Plot: plot,Released:released,Genre:genre,Actors:actors,Director:director} = details;

  const KEY = "a15c47cf";

  function handleAddMovieToWatchedList(){

      const newWatchedMovie = {
        imdbID: selectedId,
        title,
        year,
        poster,
        imdbRating: Number(imdbRating),
        runtime: Number(runtime.split(" ").at(0))
      };

      onAddWatched(newWatchedMovie);
      onCloseMovieDetail();
      
  }

  useEffect(function() {

    async function getMovieDetails(){
        const result = await fetch(`https://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`);

        const data = await result.json();

        setDetails(data);
    }

    getMovieDetails();

  }, [selectedId]);

  useEffect(()=>{
    document.title = `Movie | ${title}`;
  },[title]);

  return (
    <div className='details'>
      <header>
       <button className='btn-back' onClick={onCloseMovieDetail} type='button'>&larr;</button>
        <img src={poster} alt={`${title} poster`} />
        <div className="details-overview">
            <h2>{title}</h2>
            <p>{released}  &bull; {runtime}</p>
            <p>{genre}</p>
            <p><span>⭐️</span> <span>{imdbRating}</span></p>
        </div>
      </header>

      <section>
        <p>
          <em>{plot}</em>
        </p>
        <p>Starring : {actors}</p>
        <p>Directed by {director}</p>
      </section>
  
      <section>
        {
          watched.some((movie) => movie.imdbID === selectedId) ? ('') : (<button className='bg-blue-400 rounded-lg py-4 font-semibold hover:bg-blue-500' onClick={handleAddMovieToWatchedList} type='button'>Add to watchlist</button>)
        }
       
      </section>
    </div>
  );
}

export default MovieDetails;