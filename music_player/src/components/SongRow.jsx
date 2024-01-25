
import {BsFillPlayCircleFill, BsFillPauseCircleFill} from 'react-icons/bs';
import {useSelector } from 'react-redux';
import { selectIsPlaying,selectCurrentSong} from '../features/currentSong/currentSongSlice';
import secondsToMM from '../utils/secondsToMM';


const SongRow = ({current,handlePlayPause}) => { 
    
     const currentIsPlaying = useSelector(selectIsPlaying);
     const currentSong=useSelector(selectCurrentSong);
     const isCurrentTheSame=current.id===currentSong.id;

  return (
     <div className='song_wrapper'>
         <div className='song_title'>
              <div onClick={()=>handlePlayPause(currentSong,currentIsPlaying,current)}>
                  {   isCurrentTheSame&&currentIsPlaying?
                    <BsFillPauseCircleFill className="btn"/> :
                    <BsFillPlayCircleFill className="btn"/>
                  }
             </div>
              <img src={current.preview} alt="" className='song_img'/>
              <div className='song_name_div'>
                    <h3>{current.title}</h3>
                    <p>{current.artists}</p>
             </div>
        </div>
         <p>{secondsToMM(current.duration)}</p>
    </div>
  )
}

export default SongRow