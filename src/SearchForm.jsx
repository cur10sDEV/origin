import React from "react";
import SearchIcon from "./search.svg";

const SearchForm = ({ value, onChange, onClick }) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search for movies"
        value={value}
        onChange={onChange}
      />
      <img src={SearchIcon} alt="poster" onClick={onClick} />
    </div>
  );
};

export default SearchForm;
