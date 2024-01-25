
import AddAllButton from "./AddAllButton"
import PlayAllButton from "./PlayAllButton"
import musicData from "../assets/data";

const searhFunc=(txt)=>{
   const searchTxt=txt.toLowerCase();
   return musicData.filter((song)=>
   song.title.toLowerCase().includes(searchTxt) || song.artists.toLowerCase().includes(searchTxt)
   )
}

const SearchAndPlay = ({setData}) => {
     
      const handleChange=(e)=>{

        setData(searhFunc(e.target.value));
         
      }
  return (
    <div className="search_wrapper">
        <input type="search" placeholder="search for song name or atrist"
         
         onChange={(e)=>handleChange(e)}
         />
        <AddAllButton setData={setData}/>
        <PlayAllButton/>
    </div>
  )
}

export default SearchAndPlay