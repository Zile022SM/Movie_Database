import React from 'react';
import InputComponent from './InputComponent';
import LogoComponent from './LogoComponent';
import SearchResultComponent from './SearchResultComponent';

function NavBArComponent() {

  return (
    <nav className="nav-bar"> 
        <LogoComponent /> 
        <InputComponent />
        <SearchResultComponent />
    </nav>
  );
  
}

export default NavBArComponent;