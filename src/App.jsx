import { useEffect, useState } from "react";
import NavBArComponent from "./NavBArComponent";
import SearchResultComponent from "./SearchResultComponent";
import LogoComponent from "./LogoComponent";
import InputComponent from "./InputComponent";
import "./App.css";
import MainComponent from "./MainComponent";
import BoxComponent from "./BoxComponent";
import MovieListComponent from "./MovieListComponent";
import WatchedListComponent from "./WatchedListComponent";
import WatchedSummaryComponent from "./WatchedSummaryComponent";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import MovieDetails from "./MovieDetails";

const KEY = "a15c47cf";

export default function App() {

  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  function handleMovieDetail(id){
      setSelectedId((selectedId) => (selectedId === id ? null : id));
  }

  function handleAddToWatched(movie){
    setWatched((watched) => [...watched, movie]);
  }

  function handleCloseMovieDetail(){
      setSelectedId(null);
  }

  function handleDeleteFromWatched(id){
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

 useEffect(function() {

  async function fetchMovies() {

    try{
      setIsLoading(true);
      setError("");
      const res = await fetch(`https://www.omdbapi.com/?apikey=${KEY}&s=${query}`);

      if(!res.ok) throw new Error("Something went wrong");

      const data = await res.json();

      if(data.Response === "False") throw new Error("Movie not found");

      setMovies(data.Search);
      console.log(data.Search);
      
      setIsLoading(false);

    }catch(err){
      setError(err.message);
    }finally{
      setIsLoading(false);
    }
  }

  if(query.length < 3){
    setMovies([]);
    setError("");
    return;
  }

  fetchMovies();
 }, [query]);



  return (
    <>

      <NavBArComponent>
        <LogoComponent /> 
        <InputComponent query={query} setQuery={setQuery} />
        <SearchResultComponent movies={movies} />
      </NavBArComponent>

      <MainComponent>
        <BoxComponent>
          {isLoading && <Loader />}
          {!isLoading && !error && <MovieListComponent movies={movies} onMovieDetail={handleMovieDetail}/>}
          {error && <ErrorMessage message={error} />}
        </BoxComponent>

        <BoxComponent>
          { selectedId ? (
              <MovieDetails selectedId={selectedId} setSelectedId={setSelectedId} onCloseMovieDetail={handleCloseMovieDetail} onAddWatched={handleAddToWatched} watched={watched} />
            ):(
              <>
                <WatchedSummaryComponent watched={watched} />
                <WatchedListComponent watched={watched} onMovieDetail={handleMovieDetail} onDeleteFromWatched={handleDeleteFromWatched} />
              </>        
            ) 
          }
        </BoxComponent>
      </MainComponent>

    </>
  );
} 