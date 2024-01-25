
import { useState } from 'react';
import Player from './components/Player';
import SearchAndPlay from './components/SearchAndPlay';
import SongList from './components/SongList';
import MusicUploadForm from './components/MusicUploadForm';
import musicData from './assets/data';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentSong, selectIsPlaying, setCurrentIsPlaying, setCurrentSong } from './features/currentSong/currentSongSlice';



function App() {
  const [data,setData]=useState(musicData);
  const dispatch=useDispatch();
  // const currentSong=useSelector(selectCurrentSong);
  // const currIsPlaying=useSelector(selectIsPlaying);
  const audio =new Audio();
  const handlePlayPause=(currentSong,currIsPlaying,current)=>{
    
    if (currentSong.id !== current.id) {
     dispatch(setCurrentSong(current))
     dispatch(setCurrentIsPlaying(true))
       console.log(audio,"audio")
       console.log(audio.src,"audio.src")
       console.log(current,"current")
     audio.src = current.src;
     audio.currentTime = 0;
     audio.play();
 
     return;
   }
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