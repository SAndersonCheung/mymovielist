import styles from "../styles/components/MovieList.module.scss";
import Movie from "./Movie";
const MovieList = () => {
  return (
    <div className={styles.Movie_List}>
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
    </div>
  );
};
export default MovieList;
