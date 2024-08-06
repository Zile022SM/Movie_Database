import React from 'react';
import InputComponent from './InputComponent';
import LogoComponent from './LogoComponent';
import SearchResultComponent from './SearchResultComponent';

function NavBArComponent({ children }) {

  return (
    <nav className="nav-bar"> 
        {children}
    </nav>
  );

}

export default NavBArComponent;