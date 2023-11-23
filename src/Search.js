import React from "react";

function Search() {
  return (
    <nav>
      <input
        type="text"
        name="search"
        placeholder="Search..."
        autoComplete="off"
      />
    </nav>
  );
}

export default Search;