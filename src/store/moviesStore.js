import { createSlice } from "@reduxjs/toolkit";

export const movieSplice = createSlice({
   name: 'movies',
   initialState: [],
   reducers: {
      addMovie(state, action) {
         state.push(action.payload);
      },
      removeMovies(state, action) {
         state.splice(state.indexOf(action.payload), 1);
      }
   }
})

export const { addMovie, removeMovies } = movieSplice.actions;