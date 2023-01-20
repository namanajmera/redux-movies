import "bulma/css/bulma.css";
import "./App.css";
import MovieList from "./components/MovieList";
import SongList from "./components/SongList";

function App() {
  return (
    <div className="container is-fluid">
      <button className="button is-danger">Reset Both Playlist</button>
      <hr />
      <MovieList />
      <hr />
      <SongList />
    </div>
  );
}

export default App;
