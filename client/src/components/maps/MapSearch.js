import React, { useState, useEffect } from "react";

const MapSearch = ({ setSearchQuery, searchQuery }) => {
  //   console.log("HEY", placeCategory);
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
    <>
      <label htmlFor="search">
        <input id="search" type="text" value={searchInput} onChange={handleChange} />
      </label>

      <button className="button" onClick={handleSearch}>
        Search
      </button>
    </>
  );
};

export default MapSearch;
