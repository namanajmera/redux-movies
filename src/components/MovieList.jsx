import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createRandomMovie } from "../data";
import { addMovie, removeMovies } from "../store/moviesStore";

export default function MovieList() {
  const dispatch = useDispatch();
  const movieListData = useSelector((state) => {
    return state.movies;
  });

  const handleAddMovies = (movie) => {
    dispatch(addMovie(movie));
  };

  const handleRemoveMovie = (movie) => {
    dispatch(removeMovies(movie));
  };
  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Movie Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleAddMovies(createRandomMovie())}
            className="button is-link"
          >
            + Add Movie to Playlist
          </button>
        </div>
      </div>
      <ul>
        {movieListData.map((song, index) => {
          return (
            <li key={index}>
              {song}
              <button
                onClick={() => handleRemoveMovie(song)}
                className="button is-danger"
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
