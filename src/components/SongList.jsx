import React from "react";
import { useDispatch } from "react-redux";
import { createRandomSong } from "../data";
import { addSong } from "../store";

export default function SongList() {
   const dispatch = useDispatch();
  const songsListData = [];

  const handleSongAdd = (song) => {
    const action = addSong(song);
    dispatch(action);
  };
  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Song Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleSongAdd(createRandomSong())}
            className="button is-link"
          >
            + Add Song to Playlist
          </button>
        </div>
      </div>
      {/* <ul>{renderedSongs}</ul> */}
    </div>
  );
}
