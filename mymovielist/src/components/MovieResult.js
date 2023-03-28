import styles from "../styles/components/Movie.module.scss";

const Movie = ({ name, year, rating, imgUrl }) => {
  function addToList() {
    const toAddMovie = new Movie({
      movieName: { name },
      movieRating: { rating },
      movieYear: { year },
      movieImg: { name },
      movieStatus: "To Watch",
    });
  }
  return (
    <div className={styles.Movie}>
      <div className={styles.Movie_Title}>{name}</div>
      <button type="button" onClick={addToList}>
        Add to List
      </button>
      <div className={styles.Movie_Info}>
        {"Released " + year} | {"Rated " + rating}{" "}
      </div>
      <img
        className={styles.Movie_Img}
        src={imgUrl}
        alt={"Poster for " + name}
      />
    </div>
  );
};
export default Movie;
