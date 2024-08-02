import React from "react";
import { useState } from "react";
import WatchedSummaryComponent from "./WatchedSummaryComponent";
import WatchedListComponent from "./WatchedListComponent";

function WatchedBoxComponent({ tempWatchedData, average}){

  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen2, setIsOpen2] = useState(true);

  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && (
        <>
         
          <WatchedSummaryComponent watched={watched} avgImdbRating={avgImdbRating} avgUserRating={avgUserRating} avgRuntime={avgRuntime} />

          <WatchedListComponent watched={watched} />
        </>
      )}
    </div>
  );
}

export default WatchedBoxComponent;
