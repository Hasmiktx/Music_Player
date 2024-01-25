
import SongRow from "./SongRow"

const SongList = ({data,handlePlayPause}) => {
  return (
    <div className="song_list_container">{
        data.map(song => {
          return(
            <SongRow key={song.id} current={song} handlePlayPause={handlePlayPause}/>
          )  
        })
        }</div>
  )
}

export default SongList