import React from 'react';
import { useState } from 'react';

function InputComponent() {

    const [query, setQuery] = useState("");

  return (

    <input
          className="search"
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
    />


  );
}

export default InputComponent;