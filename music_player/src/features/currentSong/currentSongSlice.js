import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentSong: {},
  isPlaying: false,
  

}

export const currentSongSlice = createSlice({
  name: 'currentData',
  initialState,
  reducers: {
   

    setCurrentSong: (state, action) => {
      console.log( action.payload)
      state.currentSong = action.payload;
    },
    setCurrentIsPlaying:(state, action)=>{
      console.log("isPlaying store", action.payload)

        state.isPlaying = action.payload;
    },
    setTime:(state, action)=>{
        state.time = action.payload;
    }
    
}
})

// Action creators are generated for each case reducer function
export const { setCurrentSong,setCurrentIsPlaying} = currentSongSlice.actions
export const selectCurrentSong= (state) => state.currentSong.currentSong;
export const selectIsPlaying = (state) => state.currentSong.isPlaying;

export const selectAudioRef = (state) => state.currentSong.audioRef;



export default currentSongSlice.reducer