import Modal from "./Modal";
import React, { useState } from "react";
import MovieResult from "./MovieResult";
import { useSearchMovie } from "../hooks/useSearchMovie";

const AddMovie = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchString, setSearchString] = useState("");

  const moviesData = useSearchMovie({ searchString });
  return (
    <>
      <Modal isOpen={isModalOpen}>
        <input
          type="search"
          name="Search"
          onChange={(event) => {
            setSearchString(event.target.value);
          }}
        ></input>
        {moviesData?.results?.length > 0 &&
          moviesData?.results?.map((movie) => (
            <MovieResult
              key={movie.id}
              name={movie.title}
              year={movie.release_date.substring(0, 4)}
              rating={movie.vote_average}
              imgUrl={movie.id}
            />
          ))}
      </Modal>
      <input
        type="button"
        value={isModalOpen ? "Close Movie Adding Modal" : "Add a new Movie"}
        onClick={() => setIsModalOpen(!isModalOpen)}
      ></input>
    </>
  );
};
export default AddMovie;
