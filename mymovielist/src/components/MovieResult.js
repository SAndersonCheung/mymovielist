import styles from "../styles/components/Movie.module.scss";

const Movie = ({ name, year, rating, imgUrl }) => {
  function addToList() {
    // const toAddMovie = new Movie({
    //   movieName: { name },
    //   movieRating: { rating },
    //   movieYear: { year },
    //   movieImg: { name },
    //   movieStatus: "To Watch",
    // });
    // Server.js stuff
  }
  return (
    <div className={styles.Movie} id={styles.Movie_Result}>
      <div className={styles.Movie_Title}>{name}</div>
      <button type="button" onClick={addToList} className={styles.Movie_Button}>
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
