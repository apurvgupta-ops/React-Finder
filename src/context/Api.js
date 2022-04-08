import React, { useState, createContext, useContext } from "react";

const ResultContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const StateContextProvider = ({ children }) => {
  const [isloading, setIsloading] = useState(false);
  const [results, setResults] = useState([]);
  const [searchterm, setSearchterm] = useState("");

  const getResults = async (url) => {
    setIsloading(true);

    const res = await fetch(`${baseUrl}${url}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "google-search3.p.rapidapi.com",
        "x-rapidapi-key": "cd382d2c81msh9f6da52b1c0e184p127de4jsn63ebce89b14e",
      },
    });
    const data = await res.json();
    console.log(data);
    setResults(data);
    setIsloading(false);
  };
  return (
    <ResultContext.Provider
      value={{ getResults, results, searchterm, setSearchterm, isloading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useStateContext = () => useContext(ResultContext);
