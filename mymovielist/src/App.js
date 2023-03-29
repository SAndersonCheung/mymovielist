import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";
import styles from "./styles/App.module.scss";
import MovieFilters from "./components/MovieFilters";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.App_Header}>
        <h1>MyMovieList</h1>
      </div>
      <div className={styles.App_New}>
        <AddMovie />
      </div>
      <div className={styles.App_Filters}>
        <MovieFilters />
      </div>
      <div className={styles.App_Movies}>
        <MovieList />
      </div>
    </div>
  );
}

export default App;
/* Functionality: 
  - Add new movie with a Category (To Watch, Seen, Dropped)
  - If a movie is Seen, Add Rating ( 1 to 10 )
  - Filter movies by categories
*/
