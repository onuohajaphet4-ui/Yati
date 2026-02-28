import React, { useState} from 'react'
import {
 
  CircularProgress,

} from "@mui/material";
import './Add-pro.css'
import {FiBox,FiFileText, FiDollarSign, FiTag, FiHash, FiStar, FiLayers} from "react-icons/fi"
import axios from "axios";

const Form = ({ imageUrl }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    discription: "",
    category: "",
    stock: "",
    brand: "",
    section:"",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

   const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleProduct = async (e) => {
    e.preventDefault();

    console.log("IMAGE URL IN FORM:", imageUrl); 

    if (!imageUrl) {
      alert("Upload image first");
      return;
    }

    const payload = {
      ...formData,
      imageUrl,
    };

    try {
      await axios.post("https://yati-perfume-backend.onrender.com/api/product", payload);
      alert("Product created ");
    } catch (err) {
      setError("Failed to create product");
    }
  };

  
  return (
    <div className='add-pro'>
        <h2>
           Add Product Details
        </h2>

       <div className="contact-us">
         
           <div className="di">
              <form action="" className='formm' onSubmit={handleProduct}>
                
                <div className="diii">
                  <div className="input-wrapper">
                     <FiBox size={17} color='red' style={{marginTop:'15px', marginRight:'10px'}} className='input-icon'/>
                 <input type="text" name='name'   placeholder='Product Name' required    value={formData.name}
            onChange={handleChange}/> 
                  </div>
                
                   
                  <br /> <br />
                  <div className="input-wrapper">
                     <FiDollarSign size={17} color='red' style={{marginTop:'15px', marginRight:'10px'}} className='input-icon'/>
                 <input type="text" name='price'   placeholder='Product Price' required  value={formData.price}
            onChange={handleChange} /> 
                  </div>
                </div>
                

                

                <div className="diii">
                
                 <div className="input-wrapper">
                     <FiHash size={17} color='red' style={{marginTop:'15px', marginRight:'10px'}} className='input-icon'/>
                 <input type="text" name='category'   placeholder='Product Category' required  value={formData.category} onChange={handleChange}/>
                 </div>
                 <br /> <br />

                 <div className="input-wrapper">
                     <FiTag size={17} color='red' style={{marginTop:'15px', marginRight:'10px'}} className='input-icon'/>
                  <input type="text" name='stock'   placeholder='Product Stock' required value={formData.stock}
            onChange={handleChange}  /> 
                 </div>
                </div>

                <div className="diii">
                
                 <div className="input-wrapper">
                     <FiStar size={17} color='red' style={{marginTop:'15px', marginRight:'10px'}} className='input-icon'/>
                    <input type="text" name='brand'   placeholder='Product Brand' required  value={formData.brand} onChange={handleChange}  />  
                 </div>

                 <br /> <br />
                 
                 <div className="input-wrapper">
                     <FiLayers size={17} color='red' style={{marginTop:'15px', marginRight:'10px'}} className='input-icon'/>
                     <select name="section" id="" value={formData.section} onChange={handleChange} required>
                      <option value="">Select Section</option>
                      <option value="Best-seller">Best Sellers</option>
                      <option value="New-trending">New & Trending</option>
                      <option value="Him">Him</option>
                      <option value="Her">Her</option>
                      <option value="Unisex">Unisex</option>
                      <option value="Premium">Premium</option>
                      
                      
                      
                      </select>  
                 </div>

                </div>

                <div className="vv">
                  <div className="input-wrapper">
                      <FiFileText size={17} color='red' style={{marginTop:'15px', marginRight:'10px'}} className='input-icon'/>
                      <textarea name="discription" id="" placeholder='Describe the product features,creators,and any special characteristics'
                      value={formData.discription}
            onChange={handleChange}></textarea>
                  </div>
                    
                </div>
                
               
                

                <button type='submit' className='cardd-button'>
                  {loading ? (
                             <CircularProgress size={24} sx={{ color: "#fff" }} />
                           ) : (
                             "Create account"
                           )}
                </button>




              </form>
           </div>
        </div>
    </div>
  )
}

export default Form
