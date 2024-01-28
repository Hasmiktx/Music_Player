import { useSelector } from "react-redux"
import { selectCurrentSong, selectIsPlaying, setCurrentIsPlaying, setCurrentSong} from "../features/currentSong/currentSongSlice"
import {BsFillPlayCircleFill, BsFillPauseCircleFill, BsFillSkipStartCircleFill, 
   BsFillSkipEndCircleFill} from 'react-icons/bs';
import secondsToMM from "../utils/secondsToMM";
import { useEffect, useRef, useState } from "react";

 


const Player = ({ handlePlayPause,audio,data}) => {
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
   }, []);   //data
     
       //change current song time by click
    const handleSliderClick=(e)=>{

       const choosenTime=e.nativeEvent.offsetX/sliderRef.current.offsetWidth *currentSong.duration
        setCurrTime(choosenTime);
        audio.currentTime=choosenTime;
    }


    //prev song by changing data index
   const prevSong=()=>{
   let idx= data.findIndex((el)=>el.id===currentSong.id);
      if(idx){
         idx--
     }else{
        idx=data.length-1
   }
    handlePlayPause(currentSong,currentIsPlaying,data[idx])
   }



     //  next    song by changing data index

     const nextSong=()=>{
      let idx= data.findIndex((el)=>el.id===currentSong.id);
      if(idx===data.length-1){
        idx=0
      }else{
        idx++
      }
      handlePlayPause(currentSong,currentIsPlaying,data[idx])

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
                         onClick={prevSong}
                         />
                       <div onClick={()=>handlePlayPause(currentSong,currentIsPlaying,currentSong)}>
                       {
                        currentIsPlaying?
                        <BsFillPauseCircleFill className="btn"/>:
                        <BsFillPlayCircleFill className="btn"/>
                        }
                       </div>
                       <BsFillSkipEndCircleFill className="btn"
                       onClick={nextSong}
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