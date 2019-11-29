import React from "react";
import SearchBox from "./Searchbox/Searchbox";
import "./Header.css";

const Header = ({ searchChange }) => (
  <header>
    <h1 className="f1">RoboFriends</h1>
    <SearchBox change={searchChange} />
  </header>
);

export default Header;
