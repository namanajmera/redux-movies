import { configureStore, createSlice } from '@reduxjs/toolkit';

const songSlice = createSlice({
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

const movieSplice = createSlice({
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

const store = configureStore({
   reducer: {
      songs: songSlice.reducer,
      movies: movieSplice.reducer,
   }
});

// console.log(store.getState());

// store.dispatch(
//    songSlice.actions.addSong(['Naman'])
// );
// console.log(store.getState());

// To get a type of action.
// console.log(songSlice.actions.addSong('Naman'));

// console.log(store.getState());

export { store };
export const { addSong, removeSong } = songSlice.actions;
export const { addMovie, removeMovies } = movieSplice.actions;