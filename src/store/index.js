import { configureStore, createAction } from '@reduxjs/toolkit';
import { movieSplice } from './slice/moviesStore';
import { songSlice } from './slice/songsStore';

const store = configureStore({
   reducer: {
      songs: songSlice.reducer,
      movies: movieSplice.reducer,
   }
});

export const reset = createAction("app/reset");
// console.log(store.getState());

// store.dispatch(
//    songSlice.actions.addSong(['Naman'])
// );
// console.log(store.getState());

// To get a type of action.
// console.log(songSlice.actions.addSong('Naman'));

// console.log(store.getState());

export { store };