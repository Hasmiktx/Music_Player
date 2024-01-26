
import AddAllButton from "./AddAllButton"
import PlayAllButton from "./PlayAllButton"
import musicData from "../assets/data";


//  logic for searching  by song name or artist name
const searchFunc=(txt)=>{

        const searchTxt=txt.toLowerCase();
   return     musicData.filter((song)=>
                 song.title.toLowerCase().includes(searchTxt) ||
                 song.artists.toLowerCase().includes(searchTxt)
             )
}

const SearchAndPlay = ({setData}) => {
     
           const handleChange=(e)=>{

            setData(searchFunc(e.target.value));
         
             }
  return (
    <div className="search_wrapper">
           <input  className="search_bar"
                   type="search"
                   placeholder="search song or atrist..."
         
                  onChange={(e)=>handleChange(e)}
           />
         <AddAllButton setData={setData}/>
        <PlayAllButton/>
    </div>
  )
}

export default SearchAndPlay