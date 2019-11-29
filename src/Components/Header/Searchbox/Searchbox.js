import React from "react";

const SearchBox = ({ change }) => (
  <div className="pa2">
    <input
      className="pa3 ba b--green bg-lightest-blue"
      type="search"
      name="search"
      placeholder="Search Robots"
      autocomplete="off"
      onChange={change}
    />
  </div>
);

export default SearchBox;
