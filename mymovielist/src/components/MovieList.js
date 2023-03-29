import styles from "../styles/components/MovieList.module.scss";
import Movie from "./Movie";
const MovieList = () => {
  return (
    <div className={styles.Movie_List}>
      <Movie />
    </div>
  );
};
export default MovieList;
