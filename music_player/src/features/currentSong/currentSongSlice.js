import { createSlice } from '@reduxjs/toolkit'
      //   State includes  current song and isPlaying  state
const initialState = {
    currentSong: {},
     isPlaying: false,
  

  }

export const currentSongSlice = createSlice({
      name: 'currentData',
      initialState,
      reducers: {
   

    setCurrentSong: (state, action) => {
         state.currentSong = action.payload;
     },
    setCurrentIsPlaying:(state, action)=>{
          state.isPlaying = action.payload;
    },
   
    
   }
 })

// Action creators are generated for each case reducer function


export const { setCurrentSong,setCurrentIsPlaying} = currentSongSlice.actions
export const selectCurrentSong= (state) => state.currentSong.currentSong;
export const selectIsPlaying = (state) => state.currentSong.isPlaying;





export default currentSongSlice.reducer