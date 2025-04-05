import React, { useState, useRef, useContext } from "react";
import { CountryContext } from "./React006.ReactHook.createContext";

export default function SearchCountry() {
  const { data, searchByName } = useContext(CountryContext);
  const key_name = useRef("");
  const filter = useRef("");

  const [result, setResult] = useState([]);

  const handleSubmit = () => {
    let res = searchByName(key_name.current.value);
    console.log(filter.current.value);
    if (filter.current.value !== "All") {
      res = res.filter((country) =>
        country.continents.includes(filter.current.value)
      );
    }
    // console.log(res[0]);
    setResult(
      res.map((country) => {
        return country.name.common;
      })
    );
  };

  const handleReset = () => {
    key_name.current.value = "";
    filter.current.value = "All";
    handleSubmit();
  };

  return (
    <div>
      <details>
        <summary>List of countries:</summary>
        {data.map((country) => (
          <text>
            {country.name.common}
            <br />
          </text>
        ))}
      </details>

      <div id="search">
        <label htmlFor="key_name">Country's name: </label>
        <input id="key_name" ref={key_name} />
        <label htmlFor="filter">Area : </label>
        <select ref={filter} id="filter">
          <option value={"All"}>All</option>
          <option value={"Asia"}>Asia</option>
          <option value={"Africa"}>Africa</option>
          <option value={"Oceania"}>Oceania</option>
          <option value={"Europe"}>Europe</option>
          <option value={"Americas"}>Americas</option>
        </select>
        <br />
        <button onClick={handleSubmit}>Search</button>
        <button onClick={handleReset}>Reset</button>

        <div id="search-result">
          <details>
            <summary>
              List of countries whose name include "{key_name.current.value}"
            </summary>
            {result.map((item) => (
              <text>
                {item}
                <br />
              </text>
            ))}
          </details>
        </div>
      </div>
    </div>
  );
}
