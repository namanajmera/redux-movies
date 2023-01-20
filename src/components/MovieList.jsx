import React from 'react'

export default function MovieList() {
  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Movie Playlist</h3>
        <div className="buttons">
          <button
            className="button is-link"
          >
            + Add Movie to Playlist
          </button>
        </div>
      </div>
      {/* <ul>{renderedMovies}</ul> */}
    </div>
  );
}
