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
      },
      resetMovies(state,action){
         return [];
      }
   }
})

export const { addMovie, removeMovies, resetMovies } = movieSplice.actions;