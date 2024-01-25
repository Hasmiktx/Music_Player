import { useSelector } from "react-redux"
import { selectCurrentSong, selectIsPlaying,  selectTime} from "../features/currentSong/currentSongSlice"
import {BsFillPlayCircleFill, BsFillPauseCircleFill, BsFillSkipStartCircleFill,  BsFillSkipEndCircleFill} from 'react-icons/bs';
import secondsToMM from "../utils/secondsToMM";




const Player = ({ handlePlayPause,audio}) => {
  
  const currentSong=useSelector(selectCurrentSong);
  const currentIsPlaying=useSelector(selectIsPlaying);
  // const timerWidth=useSelector(selectTime);
  
console.log(audio.duration,console.log(audio.currentTime))
  return (
    <div className="player">
      <img className="song_img"src={currentSong.preview} alt="" />
      
      
      <div className="">
        <h4>{currentSong.title}</h4>
        <p>{currentSong.artists}</p>
      </div>
      
      <p>{secondsToMM(0)}</p>
      
        <div onClick={()=>handlePlayPause(currentSong,currentIsPlaying,currentSong)}>
          {currentIsPlaying?<BsFillPauseCircleFill/>:<BsFillPlayCircleFill/>}
        </div>
       <div className="next_preview"> 
       <div className="timer_div" >
          <div className="slider" style={{width:`${15}%`}}>  
        
           </div> 
          

          </div>
        
        <div>
        <BsFillSkipStartCircleFill className="btn"/>
        <BsFillSkipEndCircleFill className="btn"/>
        </div>
        </div>
      
        
        <div>
        <p>{secondsToMM(currentSong.duration)}</p>
        
        </div>
    </div>
  )
}

export default Player