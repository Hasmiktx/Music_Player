import { useState } from "react";

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
      console.log(selectedFile,"file")
      setUploading(true);

      // Simulate network latency with a timeout
      setTimeout(() => {
        console.log(`Upload complete: ${selectedFile.name}`);
        setUploading(false);
      }, 2000);
    }
  };

  return (
    <div>
      <input type="file" accept=".mp3, .wav" onChange={handleFileChange} />
      <p>{selectedFile ? `Selected file: ${selectedFile.name}` : 'No file selected'}</p>
      <button onClick={handleUploadClick} disabled={!selectedFile || uploading}>
        {uploading ? 'Uploading...' : 'Upload'}
      </button>
    </div>
  );
};

export default MusicUploadForm;
