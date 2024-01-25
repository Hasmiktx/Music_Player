
import musicData from "../assets/data"
const AddAllButton = ({setData}) => {

    const addAllSongs=()=>{
        setData(musicData)
    }
  return (
    <button onClick={addAllSongs}>AddAllSongs</button>
  )
}

export default AddAllButton