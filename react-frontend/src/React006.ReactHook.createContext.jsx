import React, { useState, useEffect, createContext } from "react";

const CountryContext = createContext();

function CountryProvider({ children }) {
  const [data, setData] = useState([]),
    [loading, setLoading] = useState(true),
    [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch("https://restcountries.com/v3.1/all");
        if (!resp.ok) {
          throw new Error("Error fetching data");
        }
        const res = await resp.json();
        setData(res ? res : []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const searchByName = (key) => {
    return key
      ? data.filter((country) =>
          country.name.common.toLowerCase().includes(key.toLowerCase())
        )
      : [];
  };

  return (
    <CountryContext.Provider value={{ data, searchByName }}>
      {loading ? (
        <p style={{ textAlign: "center" }}>Loading...</p>
      ) : error ? (
        <p style={{ textAlign: "center", color: "red" }}>{error}</p>
      ) : (
        children
      )}
    </CountryContext.Provider>
  );
}

export { CountryContext, CountryProvider };
