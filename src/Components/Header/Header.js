import React from "react";
import SearchBox from "./Searchbox/Searchbox";

const Header = ({ searchChange }) => (
  <header>
    <h1>RoboFriends</h1>
    <SearchBox change={searchChange} />
  </header>
);

export default Header;
