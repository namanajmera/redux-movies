import { configureStore, createSlice } from '@reduxjs/toolkit';

const songSlice = createSlice({
   name: 'songs',
   initialState: [],
   reducers: {
      addSong(state, action) {
         state.push(...action.payload);
      },
      removeSong(state, action) {
         // 
      }
   }
})

const store = configureStore({
   reducer: {
      songs: songSlice.reducer
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
export const { addSong } = songSlice.actions;