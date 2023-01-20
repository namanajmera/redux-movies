import { configureStore } from '@reduxjs/toolkit';
import { movieSplice } from './moviesStore';
import { songSlice } from './songsStore';

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