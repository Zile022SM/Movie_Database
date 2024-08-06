import React from "react";
import { useState } from "react";
import ListBoxComponent from "./ListBoxComponent";
import WatchedBoxComponent from "./WatchedBoxComponent";

function MainComponent({ children }) {
  return (
    <main className="main">
      {children}
    </main>
  );
}

export default MainComponent;
