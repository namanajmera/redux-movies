import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createRandomSong } from "../data";
import { addSong, removeSong } from "../store/songsStore";

export default function SongList() {
  const dispatch = useDispatch();

  const songsListData = useSelector((state) => {
    return state.songs;
  });

  const handleSongAdd = (song) => {
    const action = addSong(song);
    dispatch(action);
  };

  const handleSongRemove = (song) => {
    dispatch(removeSong(song));
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
      <ul>
        {songsListData.map((song, index) => {
          return (
            <li key={index}>
              {song}
              <button
                onClick={() => handleSongRemove(song)}
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
