import React, { useEffect, useState } from "react";
import CountryCart from "./CountryCart";
import SimmerEffect from "./SimmerEffect";

export default function CountryList({ query }) {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountryData(data);
      });
  }, []);

  return countryData.length === 0 ? (
    <SimmerEffect />
  ) : (
    <div className="countries-container">
      {countryData
        .filter(
          (country) =>
            country.name.common.toLowerCase().includes(query) ||
            country.region.toLowerCase().includes(query)
        )
        .map((country) => {
          return (
            <CountryCart
              key={country.name.common}
              name={country.name.common}
              flag={country.flags.svg}
              region={country.region}
              capital={country.capital}
              population={country.population.toLocaleString("en-IN")}
              data={country}
            />
          );
        })}
    </div>
  );
}
