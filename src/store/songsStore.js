import { createSlice } from "@reduxjs/toolkit";

export const songSlice = createSlice({
   name: 'songs',
   initialState: [],
   reducers: {
      addSong(state, action) {
         state.push(action.payload);
      },
      removeSong(state, action) {
         state.splice(state.indexOf(action.payload), 1);
      }
   }
})


export const { addSong, removeSong } = songSlice.actions;