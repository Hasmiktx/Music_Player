
//  import { useDispatch, useSelector } from "react-redux";
// import { selectCurrentSong,selectIsPlaying, setCurrentIsPlaying, setCurrentSong } from "../features/currentSong/currentSongSlice";
//  const currentSong=useSelector(selectCurrentSong);
//  const currIsPlaying=useSelector(selectIsPlaying);
//  const audio =new Audio();
 
    
  
// const playTime=(song,currentSong,currIsPlaying,current)=>{
    
//    if (currentSong.id !== current.id) {
//     dispatch(setCurrentSong(current))
//     dispatch(setCurrentIsPlaying(true))

//     audio.src = current.src;
//     audio.currentTime = 0;
//     audio.play();

//     return;
//   }
//   if (currIsPlaying) {
//     audio.pause();
//     dispatch(setCurrentIsPlaying(false))
//   } else {
//     audio.play();
//     dispatch(setCurrentIsPlaying(true))
//   }
//    }

//    export default playTime

