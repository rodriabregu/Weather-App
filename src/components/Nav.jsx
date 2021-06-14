import React from 'react';
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div className={"holis"}>
      {/*  <img src={Logo} alt="holis"/> */}
       <span>Henry Wheater App</span>
       <SearchBar onSearch={onSearch}/>  
    </div>
  );
};

export default Nav;
