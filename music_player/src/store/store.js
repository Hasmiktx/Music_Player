import { configureStore } from '@reduxjs/toolkit'
import currentSongReducer from "../features/currentSong/currentSongSlice"
export const store = configureStore({
  reducer: {
    currentSong: currentSongReducer,
  },
})