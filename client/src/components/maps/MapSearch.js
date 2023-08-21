import React, { useState, useEffect } from "react";

const MapSearch = ({ setSearchQuery, searchQuery }) => {
  const [searchInput, setSearchInput] = useState(searchQuery);

  const handleChange = (event) => {
    setSearchInput(event.currentTarget.value);
  };

  const handleSearch = () => {
    setSearchQuery(searchInput);
  };

  useEffect(() => {
    setSearchInput(searchQuery);
  }, [searchQuery]);

  return (
    <div className="search-container">
      <label htmlFor="search">
        <input
          id="search"
          type="text"
          value={searchInput}
          onChange={handleChange}
          className="search-input"
        />
      </label>

      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default MapSearch;
