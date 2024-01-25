import { useState } from "react";
import  ExampleLoading from "./Loading";
 
const MusicUploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
      setSelectedFile(file);
      
  };

  const handleUploadClick = () => {
    if (selectedFile) {
      console.log(`Uploading file: ${selectedFile.name}`);
      
      setUploading(true);

      // Simulate network latency 
      setTimeout(() => {
        console.log(`Upload complete: ${selectedFile.name}`);
        setUploading(false);
      }, 2000);
    }
  };

  return (
    <div className="upload_div">
      <input type="file" accept=".mp3, .wav" onChange={handleFileChange} />
      <p>{selectedFile ? `Selected file: ${selectedFile.name}` : 'No file selected'}</p>
       <button onClick={handleUploadClick} disabled={!selectedFile || uploading}>
        {uploading ? "Uploading..." : 'Upload'}
      </button>
      {uploading&&<ExampleLoading type={"spinningBubbles"} color={"#002395"}/> }
    </div>
  );
};

export default MusicUploadForm;
