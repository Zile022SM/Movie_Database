import React from "react";
import { useState } from "react";
import ListBoxComponent from "./ListBoxComponent";
import WatchedBoxComponent from "./WatchedBoxComponent";

function MainComponent({ tempMovieData, tempWatchedData, average }) {
  return (
    <main className="main">

      <ListBoxComponent tempMovieData={tempMovieData} />

      <WatchedBoxComponent
        tempWatchedData={tempWatchedData}
        average={average}
      />
      
    </main>
  );
}

export default MainComponent;
