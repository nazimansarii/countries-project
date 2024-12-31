import React from "react";
import { Link } from "react-router";

export default function CountryCart({
  name,
  flag,
  population,
  region,
  capital,
  data,
}) {
  return (
    <Link className="countries-content" to={`/${name}`} state={data}>
      <div className="flag-box">
        <img src={flag} alt={flag + `Flag`} />
      </div>
      <div className="countries-text">
        <h3 className="countries-title">{name}</h3>
        <p>
          <b>Population: </b>
          {population}
        </p>
        <p>
          <b>Region: </b>
          {region}
        </p>
        <p>
          <b>Capital: </b>
          {capital}
        </p>
      </div>{" "}
    </Link>
  );
}
