// import React from 'react'
import React , {useEffect, useState} from 'react'
import axios from 'axios'
import './Shop.css'
import {
  CircularProgress,
} from "@mui/material";
import Footer from '../Component/Footer'
import Nav from '../Component/Nav'
import './Gallery.css'
import {FiShoppingCart} from "react-icons/fi"
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom"


const Info = () => {
  const [data, setData] = useState([])
    const [loading , setLoading] = useState(true)
    const navigate = useNavigate()

    //Fetch all gallery
    useEffect(() => {
      axios.get("https://yati-perfume-backend.onrender.com/api/images")
      .then((res) => {
        setData(res.data)
        console.log(res.data)
         setLoading(false)
        

      }).catch((error) => {
         console.error ( "Request failed")
      })
    }, [])

    const handleFavorite = async (imageId) => {
  try {
    const token = localStorage.getItem("token")

    if (!token) {
    alert("Please login to add items to cart")
    navigate("/log")
    return
  }

    const res = await fetch("https://yati-perfume-backend.onrender.com/api/favorite", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({ imageId })
    })

    const data = await res.json()

    if (!res.ok) {
      throw new Error(data.message)
    }

    alert("Added to favorites ")
    console.log(data)

  } catch (error) {
    console.error(error.message)
    alert(error.message)
  }
}

    if (loading) return <CircularProgress  sx={{
     margin : '15% 50%', color:'red'
}}  /> 
        

   


  return (

    <div>
          <div className="ba">
    
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus soluta quas earum necessitatibus asperiores reprehenderit, natus harum cumque nostrum error sunt ab vitae, saepe cum, possimus officiis nobis a magnam.
             <Nav/>
          </div>
    
       
    <div className='gallery'>

        <h1>
        YATI CATAGLOG
      </h1> 
        
        
    <div className="gal">
      {data.map((info) => (   
  <div className="gal-card" key={info._id}>
    <img 
      src={info.imageUrl} 
      alt="" 
      className='vin-im' 
    />

       <button onClick={() => handleFavorite(info._id)} className="boooo">
         ❤️ Add to Favorite
        </button>
      </div>
      ))}

      
     
    </div>
      
    </div>

    <div className="cart">
     <Link to='/cart'>    <FiShoppingCart size={28} color='red'/> </Link>
    </div>


    <Footer/>
    </div>
  )
}

export default Info
