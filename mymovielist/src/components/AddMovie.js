import Modal from "./Modal";
import React, { useState } from "react";
import MovieResult from "./MovieResult";
import { useSearchMovie } from "../hooks/useSearchMovie";
import styles from "../styles/components/Modal.module.scss";

const AddMovie = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchString, setSearchString] = useState("");

  const moviesData = useSearchMovie({ searchString });

  return (
    <>
      <Modal isOpen={isModalOpen}>
        <div className={styles.Modal_Topbar}>
          <input
            type="search"
            name="Search"
            placeholder="Search for movies here"
            onChange={(event) => {
              setSearchString(event.target.value);
            }}
          ></input>
          <button
            className={styles.Modal_Close}
            onClick={() => setIsModalOpen(false)}
          >
            X
          </button>
        </div>
        <div className={styles.Search_List}>
          {moviesData?.results?.length > 0 &&
            moviesData?.results?.map((movie) => (
              <MovieResult
                key={movie.id}
                name={movie.title}
                year={movie.release_date.substring(0, 4)}
                rating={movie.vote_average}
                imgUrl={"https://image.tmdb.org/t/p/w185" + movie.poster_path}
              />
            ))}
        </div>
      </Modal>
      <input
        type="button"
        value={"Add a new Movie"}
        onClick={() => setIsModalOpen(true)}
      ></input>
    </>
  );
};
export default AddMovie;
