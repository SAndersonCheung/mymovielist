import React, { useState, useEffect } from "react";

export const useSearchMovie = ({ searchString }) => {
  const [searchResult, setSearchResult] = useState({});

  useEffect(() => {
    if (searchString.length > 0) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMD_API_KEY}&query=${searchString}`
      )
        .then((res) => res.json())
        .then((json) => setSearchResult(json));
    }
  }, [searchString]);

  return searchResult;
};
