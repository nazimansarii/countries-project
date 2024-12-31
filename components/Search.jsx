import React from "react";

export default function Search({ setQuery }) {
  return (
    <div className="search">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        onChange={(e) => {
          setQuery(e.target.value.toLocaleLowerCase());
        }}
        type="text"
        placeholder="Search for a country..."
      />
    </div>
  );
}
