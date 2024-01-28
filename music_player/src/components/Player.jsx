import { useSelector } from "react-redux"
import { selectCurrentSong, selectIsPlaying} from "../features/currentSong/currentSongSlice"
import {BsFillPlayCircleFill, BsFillPauseCircleFill, BsFillSkipStartCircleFill, 
   BsFillSkipEndCircleFill} from 'react-icons/bs';
import secondsToMM from "../utils/secondsToMM";
import { useEffect, useRef, useState } from "react";




const Player = ({ handlePlayPause,audio}) => {
  const[currTime,setCurrTime]=useState(0);
  const currentSong=useSelector(selectCurrentSong);
  const currentIsPlaying=useSelector(selectIsPlaying);
   const sliderRef=useRef();
  
   //gived callback to the useEffect,wich set audio current time  to the local state every 1 seconds
  // current time/song duration value for slider width
  useEffect(() => {
       const timeInterval = setInterval(() => {
              setCurrTime(audio.currentTime);
        }, 1000);

    return () => {
      clearInterval(timeInterval);
    };
   }, []);
     
       //change current song time by click
    const handleSliderClick=(e)=>{

       const choosenTime=e.nativeEvent.offsetX/sliderRef.current.offsetWidth *currentSong.duration
        setCurrTime(choosenTime);
        audio.currentTime=choosenTime;
    }


  return (
    < div className="player">
          <div className="timer_div" ref={sliderRef}
           onClick={(e)=>handleSliderClick(e)}> 
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