import { useState } from "react";
import axios from "axios";
import "./Gallery.css";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (!selected) return;

    setFile(selected);
    setPreview(URL.createObjectURL(selected));
    setMessage("");
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select an image");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      await axios.post("http://localhost:3000/upload", formData);
      setMessage("Upload successful ✅");
    } catch (err) {
      setMessage("Upload failed ❌");
    }
  };

  return (
   <div>
      
      <div className="textss">
         <h1>Gallery Management</h1>

         <p>
          Upload and manage images displayed on the gallery section of the website
         </p>
      </div>


    <div className="page">
      
      <div className="cardd">
        <h2>Upload Gallery Image</h2>
        <p className="sub">Upload 1 image only</p>

        <label className="upload-box">
          <input type="file" accept="image/*" onChange={handleFileChange} />
          <span>Select Image</span>
        </label>

        {preview && (
          <img src={preview} alt="preview" className="preview" />
        )}

        <button onClick={handleUpload} className="cardd-button">Upload</button>

        {message && <p className="message">{message}</p>}
      </div>
    </div>
    </div>
  );
}