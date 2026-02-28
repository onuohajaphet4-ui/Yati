import { useEffect ,useState } from "react";
import axios from "axios";
import "./Gallery.css";
import {FiShoppingCart} from "react-icons/fi"
import Footer from '../Component/Footer'
import {Link} from 'react-router-dom'

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
      await axios.post("https://yati-perfume-backend.onrender.com/api/images/image", formData);
      setMessage("Upload successful ✅");
    } catch (err) {
      setMessage("Upload failed ❌");
    }
  };

  const [user , setUser] = useState(null)
        
        useEffect(() => {
          const savedUser  = 
          localStorage.getItem('user')
          if (savedUser){
            setUser(JSON.parse(savedUser))
          }
        }, [])

  return (
   <div>

     <div className="logout">
         <button
           onClick={() => window.history.back()}>
         Back
         </button>
       </div>

       <div className="car">
            <img src="https://d2gt4h1eeousrn.cloudfront.net/121245002/header-fcHJMd/DclbFT3-200x200.webp" className='car-img' alt="" />
              <Link to='/cart'> <FiShoppingCart size={28} color='red' style={{marginTop:'15px'}}/>  </Link>
       </div>
       
        <div className="black">
              
          <span >
             Welcome,   Admin  
          </span>
                
        </div>
      
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

    <Footer />
    </div>
  );
}