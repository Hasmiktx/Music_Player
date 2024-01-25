
import {BsFillPlayCircleFill, BsFillPauseCircleFill} from 'react-icons/bs';
import {useSelector } from 'react-redux';
import { selectIsPlaying,selectCurrentSong} from '../features/currentSong/currentSongSlice';
import secondsToMM from '../utils/secondsToMM';


const SongRow = ({current,handlePlayPause}) => { 
    
     const currentIsPlaying = useSelector(selectIsPlaying);
     const currentSong=useSelector(selectCurrentSong);
     const isCurrentTheSame=current.id===currentSong.id
    
     
    // const playTime=()=>{
    //   const duration = songRef.current.duration;
    //   const currTime=songRef.current.currentTime;
    //   // console.log(currTime,"curr",duration,"dur")
    //    const progress= currTime/duration *100
    //   dispatch(setTime(progress))
    // }
    
     

    
     
    // useEffect(() => {
    //    if(isPlaying){
    //     songRef.current.play();
    //     dispatch(setCurrentSong(current))
    //   //   dispatch(setAudioRef(songRef.current))
    //     console.log(isPlaying,"inUseEff",currentIsPlaying,"currIs")

    //    } else {
    //     songRef.current.pause();
    //     // songRef.current.currentTime=0;
    //    }
    // }, [isPlaying])

    

  return (
    <div className='song_wrapper'>
       
        <div onClick={()=>handlePlayPause(currentSong,currentIsPlaying,current)}>
          {isCurrentTheSame&&currentIsPlaying?<BsFillPauseCircleFill/>:<BsFillPlayCircleFill/>}
        </div>
     <img src={current.preview} alt="" className='song_img'/>
     <div className='song_name_div'>
        <p >{current.title}</p>
        <p>{current.artists}</p>
     </div>
     
     <p>{secondsToMM(current.duration)}</p>
    </div>
  )
}

export default SongRow