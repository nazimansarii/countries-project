import React, { useContext, useEffect, useState } from "react";
import "./CountryDetail.css";
import { Link, useLocation , useParams } from "react-router";
import { ThemeContext } from "../contexts/ThemeContext";

export default function CountryDetail() {

  const countryName = useParams().country;
  const [countryDetail, setCountryDetail] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [isDark] = useContext(ThemeContext)

  const {state} = useLocation();

  const updateDate = (data) => {
    setCountryDetail({
      name: data.name.common,
      flag: data.flags.svg,
      nativeName: Object.values(data.name.nativeName)[0].common,
      population: data.population.toLocaleString("en-IN"),
      region: data.region,
      subRegion: data.subregion,
      capital: data.capital,
      tld: data.tld,
      currencies: Object.values(data.currencies)
        .map((currencies) => currencies.name)
        .join(", "),
      symbol: Object.values(data.currencies).map((symbol) => symbol.symbol),
      languages: Object.values(data.languages).join(", "),
      borders: [],
    });

    if (!data.borders) {
      data.borders = [];
    }

    Promise.all(
      data.borders.map((border) => {
        return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => res.json())
          .then(([countryData]) => countryData.name.common);
      })
    ).then((borders) => {
      setTimeout(() => setCountryDetail((prevState) => ({ ...prevState, borders })))
    });
  };

  useEffect(() => {

    if(state)
    {
      updateDate(state)
      return
    }

    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
       updateDate(data)
      })
      .catch((err) => {
        setNotFound(true);
      });
  }, [countryName]);

  if (notFound) {
    return <div>Country Not Found!</div>;
  }

  return countryDetail === null ? (
    "loding.."
  ) : (
    
    <main className={`container ${isDark? 'dark' : ''}`}>
      <button className="link-tag" onClick={() => history.back()}>
        <i className="fa-solid fa-arrow-left"></i>&nbsp;&nbsp;Back
      </button>
      <div className="country-details">
        <img src={countryDetail.flag} alt="" />
        <div className="details-text">
          <h3 className="country-name">{countryDetail.name}</h3>
          <div className="details-text-container">
            <p className="Native">
              <b>Native Name: </b>
              <span> {countryDetail.nativeName}</span>
            </p>
            <p className="Population">
              <b>Population: </b>
              <span>{countryDetail.population}</span>
            </p>
            <p className="Region">
              <b>Region: </b>
              <span>{countryDetail.region}</span>
            </p>
            <p className="sub">
              <b>Sub Region: </b>
              <span>{countryDetail?.subRegion}</span>
            </p>
            <p className="Capital">
              <b>Capital: </b>
              <span>{countryDetail.capital}</span>
            </p>
            <p className="domain">
              <b>Top Level Domain: </b>
              <span>{countryDetail.tld}</span>
            </p>
            <p className="Currencies">
              <b>Currencies: </b>
              <span>{countryDetail.currencies}</span>&nbsp;
              <span className="symbol">{countryDetail.symbol}</span>
            </p>
            <p className="Languages">
              <b>Languages: </b>
              <span>{countryDetail.languages}</span>
            </p>
          </div>
          {countryDetail.borders.length !== 0 && (
            <div>
              <p className="border-contry">
                <b>Border Countries: </b>
                {countryDetail.borders.map((border) => (
                  <Link key={border} to={`/${border}`}>
                    {border}
                  </Link>
                ))}
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
