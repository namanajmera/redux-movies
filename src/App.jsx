import "bulma/css/bulma.css";
import { useDispatch } from "react-redux";
import "./App.css";
import MovieList from "./components/MovieList";
import SongList from "./components/SongList";
import { resetMovies } from "./store/moviesStore";

function App() {
  const dispatch = useDispatch();
  const handleResetClick = () => {
    dispatch(resetMovies());
  };
  return (
    <div className="container is-fluid">
      <button onClick={handleResetClick} className="button is-danger">
        Reset Both Playlist
      </button>
      <hr />
      <MovieList />
      <hr />
      <SongList />
    </div>
  );
}

export default App;
