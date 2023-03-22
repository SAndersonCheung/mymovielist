import { useState } from "react";
import styles from "../styles/components/Movie.module.scss";

const movie = {
  name: "The Whale",
  year: "2022",
  rating: "92%",
  imgUrl: "https://upload.wikimedia.org/wikipedia/en/f/f3/TheWhalePoster.jpg",
  status: "To Watch",
};

export default function Movie() {
  const [selection, setSelection] = useState("to-watch");
  return (
    <div className={styles.Movie} id={styles[selection]}>
      <div className={styles.Movie_Title}>{movie.name}</div>
      <select
        onChange={(event) => setSelection(event.target.value)}
        defaultValue={selection}
        className={styles.Movie_Status}
      >
        <option value="to-watch">To Watch</option>
        <option value="seen">Seen</option>
        <option value="dropped">Dropped</option>
      </select>
      <div>
        {"Released " + movie.year} | {"Rated " + movie.rating}{" "}
      </div>
      <img
        className={styles.Movie_Img}
        src={movie.imgUrl}
        alt={"Poster for " + movie.name}
      />
    </div>
  );
}
