import React from "react";
import { useState } from "react";
import WatchedSummaryComponent from "./WatchedSummaryComponent";
import WatchedListComponent from "./WatchedListComponent";

function WatchedBoxComponent({ tempWatchedData, average}){

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
