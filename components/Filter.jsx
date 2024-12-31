import React from "react";

export default function Filter({ setQuery }) {
  return (
    <select
      className="Filter-by-region"
      onChange={(e) => {
        setQuery(e.target.value.toLowerCase());
      }}
    >
      <option className="theme" value="Filter by region" hidden>
        Filter by region
      </option>
      <option className="theme" value="Africa">
        Africa
      </option>
      <option className="theme" value="Americas">
        Americas
      </option>
      <option className="theme" value="Asia">
        Asia
      </option>
      <option className="theme" value="Europe">
        Europe
      </option>
      <option className="theme" value="Oceania">
        Oceania
      </option>
    </select>
  );
}
