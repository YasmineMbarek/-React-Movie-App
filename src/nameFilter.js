import React from "react";

const NameFilter = ({ value = "", onChange = () => {} }) => (
  <div className=" NameFilter">
    <input
      className="searchBar"
      type="text"
      value={value}
      onChange={event => {
        onChange(event.target.value);
      }}
    />
  </div>
);

export default NameFilter;