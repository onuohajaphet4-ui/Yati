// import React from 'react'
import React , {useEffect, useState} from 'react'
import axios from 'axios'
import {
  CircularProgress,
} from "@mui/material";
import Footer from '../Component/Footer'
import {FiShoppingCart} from "react-icons/fi"
import {Link} from 'react-router-dom'



const Info = () => {
  const [data, setData] = useState([])
    const [loading , setLoading] = useState(true)

    //Fetch all booking
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

   //delete user 
    const deleteUser = async (_id) =>{

    const confirm = window.confirm('Are you sure want to delete this user?')
    if (!confirm) return;
   
   try {
      await axios.delete (`https://yati-perfume-backend.onrender.com/api/images/delete/${_id}`)
      console.log(data)
      alert ('deleted succesfully')
   } catch (error) {
    console.error(error.message)
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

       <div className="car">
            <img src="https://d2gt4h1eeousrn.cloudfront.net/121245002/header-fcHJMd/DclbFT3-200x200.webp" className='car-img' alt="" />
              <Link to='/cart'> <FiShoppingCart size={28} color='red' style={{marginTop:'15px'}}/>  </Link>
       </div>
       
        <div className="black">
              
          <span >
             Welcome,   Admin  
          </span>
                
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
     <div className="gallery-but">
    
            <button onClick={() => deleteUser(info._id)} >Delete</button>
          </div>
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
