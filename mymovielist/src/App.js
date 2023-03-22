import "./styles/App.module.scss";

function App() {
  return (
    <div className="App">
      <div className="App-Header">
        <h1>MyMovieList</h1>
      </div>
      <div className="App-New">
        <h2>Add New Movie</h2>
      </div>
      <div className="App-Filters">
        <p>All</p>
        <p>To Watch</p>
        <p>Seen</p>
        <p>Dropped</p>
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
