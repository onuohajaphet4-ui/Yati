import Footer from '../../Component/Footer'
import {FiShoppingCart} from "react-icons/fi"
import {useNavigate} from "react-router-dom";
import {Link} from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import { FiTrash2 } from "react-icons/fi";
import axios from "axios";

const Custormer = () => {
  const [favorites, setFavorites] = useState([])
  const [loading , setLoading] = useState(false)

   

 const fetchFavorites = async () => {
  try {
    const token = localStorage.getItem("token")

    const res = await fetch("https://yati-perfume-backend.onrender.com/api/favorite", {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })

    const data = await res.json()
    setFavorites(data)


  } catch (error) {
    console.error(error)
  }
}

useEffect(() => {
  fetchFavorites()
  }, [])

  const user = JSON.parse(localStorage.getItem("user"))
  const token = localStorage.getItem("token")
        
  const deleteFav = async (imageId) =>{
   
              const confirm = window.confirm('Are you sure want to delete this image?')
      if (!confirm) return;
      
      try {
         await axios.delete (`https://yati-perfume-backend.onrender.com/api/favorite/${_id}`,{
          headers: {
        "Authorization": `Bearer ${token}`
      }
      })
         
         alert ('deleted succesfully')
      } catch (error) {
       console.error(error)
       alert ('deletion unsuccesfully')
       
      }
     }


     if (loading) return <CircularProgress  sx={{
          margin : '15% 50%', color:'red'
       }}  />
  
  


  return (

    <div>
      <div className="logout">
                 <button
                   onClick={() => window.history.back()}>
                 Back
                 </button>
              </div>
        
              <hr />
        
              <div className="car">
                        <img src="https://d2gt4h1eeousrn.cloudfront.net/121245002/header-fcHJMd/DclbFT3-200x200.webp" className='car-img' alt="" />
                  <Link to='/cart'> <FiShoppingCart size={28} color='red' style={{marginTop:'15px'}}/>  </Link>
              </div>
        
              <div className="black">
               
                    <span >
                      {user ? (
            <span >
              Hi,   <b>{user.names}  </b> 
            </span>
          ) : (
            <span style={{ color: "black", marginLeft: "20px" ,fontSize:'10px'}}>
              Welcome, Guest
            </span>
          )} 
                    </span>
                 
              </div>

        <button onClick={fetchFavorites}  className='eric-b'>Refresh</button>

   
   
  <div className='gallery'>

        <h1>
        YATI CATAGLOG
      </h1> 
        
        
    <div className="gal">
      {favorites.map((fav) => (
     <div className="gal-card">
      <img key={fav._id}  src={fav.imageUrl}alt=""width="200"/>

      <button onClick={() =>  deleteFav(fav._id)} className="boooo">
         <FiTrash2  size={20} color='red' className="cartt-icon" />
        </button>
     </div>

     
     ))} 
    </div>
  </div>

  <Footer/>
 </div>

    

    
  )
}

export default Custormer
