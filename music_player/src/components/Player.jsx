import { useSelector } from "react-redux"
import { selectCurrentSong, selectIsPlaying} from "../features/currentSong/currentSongSlice"
import {BsFillPlayCircleFill, BsFillPauseCircleFill, BsFillSkipStartCircleFill, 
   BsFillSkipEndCircleFill} from 'react-icons/bs';
import secondsToMM from "../utils/secondsToMM";
import { useEffect, useState } from "react";




const Player = ({ handlePlayPause,audio}) => {
  const[currTime,setCurrTime]=useState(0);
  const currentSong=useSelector(selectCurrentSong);
  const currentIsPlaying=useSelector(selectIsPlaying);
 
  

  useEffect(() => {
       const timeInterval = setInterval(() => {
              setCurrTime(audio.currentTime);
        }, 1000);

    return () => {
      clearInterval(timeInterval);
    };
   }, []);




  return (
    < div className="player">
          <div className="timer_div" >
                <div className="slider"
                  style={{width:`${currTime/currentSong.duration *100}%`}}>  
               </div> 
           </div>
          <div className="player_atributes">
                  <p>{secondsToMM(currTime)}</p>

                 <div className="player_atributes">     
                       <BsFillSkipStartCircleFill className="btn"
                         onClick={()=>console.log("previous song")}
                         />
                       <div onClick={()=>handlePlayPause(currentSong,currentIsPlaying,currentSong)}>
                       {
                        currentIsPlaying?
                        <BsFillPauseCircleFill className="btn"/>:
                        <BsFillPlayCircleFill className="btn"/>
                        }
                       </div>
                       <BsFillSkipEndCircleFill className="btn"
                       onClick={()=>console.log("next song")}
                       />
                 </div>
                   <img className="song_img"src={currentSong.preview} alt="" />
                  <div className="">
                      <h4>{currentSong.title}</h4>
                      <p>{currentSong.artists}</p>
                </div>
           
            
               <p>{currentSong.duration && secondsToMM(currentSong.duration)}</p>

       </div>
  </div>
  )
}

export default Player