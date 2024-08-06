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

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

const KEY = "a15c47cf";

export default function App() {

  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");

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
          {!isLoading && !error && <MovieListComponent movies={movies} />}
          {error && <ErrorMessage message={error} />}
        </BoxComponent>

        <BoxComponent>
          <WatchedSummaryComponent watched={watched} />
          <WatchedListComponent watched={watched} />
        </BoxComponent>
      </MainComponent>

    </>
  );
} 