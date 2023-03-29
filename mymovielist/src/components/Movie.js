import { useState } from "react";
import styles from "../styles/components/Movie.module.scss";

const Movie = ({ name, year, rating, imgUrl, status }) => {
  const [selection, setSelection] = useState("to-watch");
  function removeMovie() {
    return 0;
  }
  return (
    <div className={styles.Movie} id={styles[selection]}>
      <div className={styles.Movie_Title}>{name}</div>
      <select
        onChange={(event) => setSelection(event.target.value)}
        defaultValue={selection}
        className={styles.Movie_Button}
      >
        <option value="to-watch">To Watch</option>
        <option value="seen">Seen</option>
        <option value="dropped">Dropped</option>
      </select>
      <div className={styles.Movie_Info}>
        {"Released " + year} | {"Rated " + rating}{" "}
      </div>
      <img
        className={styles.Movie_Img}
        src={imgUrl}
        alt={"Poster for " + name}
      />
      <button
        className={styles.Movie_Remove}
        onClick={() => {
          removeMovie();
        }}
      >
        Remove from List
      </button>
    </div>
  );
};
export default Movie;
