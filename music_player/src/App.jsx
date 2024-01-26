
import { useState } from 'react';
import Player from './components/Player';
import SearchAndPlay from './components/SearchAndPlay';
import SongList from './components/SongList';
import MusicUploadForm from './components/MusicUploadForm';
import musicData from './assets/data';
import { useDispatch} from 'react-redux';
import {setCurrentIsPlaying, setCurrentSong } from './features/currentSong/currentSongSlice';



function App() {
  const [data,setData]=useState(musicData);
  const dispatch=useDispatch();


  const audio =new Audio();


     // receive  from the state  currentSong and currIsPlaying,
     // and current- current element from the list,wich will be clicked 
     //the same function  receive  SongRow and Player components

     
  const handlePlayPause=(currentSong,currIsPlaying,current)=>{
       if (currentSong.id !== current.id) {
             //main logic - give the src audio object,
             //and set currentSong and isPlaying to the gloabl state
             dispatch(setCurrentSong(current))
              dispatch(setCurrentIsPlaying(true))
              audio.src = current.src;
              audio.currentTime = 0;
              audio.play();
 
              return;
     }
             //  play/pause
     if (currIsPlaying) {
          audio.pause();
           dispatch(setCurrentIsPlaying(false))
     } else {
         audio.play();
          dispatch(setCurrentIsPlaying(true))
      }
 }
 
  return (
    <>
      <div className='App'>
           <SearchAndPlay data={data} setData={setData}/>
           <SongList data={data} setData={setData} handlePlayPause={handlePlayPause}/>
      </div>
       <MusicUploadForm/>
       <Player  handlePlayPause={handlePlayPause} audio={audio}/>
    </>
  )
}

export default App
