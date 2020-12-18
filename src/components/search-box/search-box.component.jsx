import React from "react";
import "./search-bx.styles.css";


const searchBox = ({placeholder, handleChange}) => {
  return (
    <div>
      <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default searchBox;
