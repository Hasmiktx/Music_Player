
import musicData from "../assets/data"




const AddAllButton = ({setData}) => {

    const addAllSongs=()=>{
        setData(musicData);
        console.log("Add All Songs ")
       }
  return (
       <button onClick={addAllSongs} className="submit_btn">AddAllSongs</button>
  )
}

export default AddAllButton