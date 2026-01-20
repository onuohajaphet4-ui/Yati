// import React from 'react'
import React , {useEffect, useState} from 'react'
import axios from 'axios'
import './Shop.css'
import {
  CircularProgress,
} from "@mui/material";

import './Gallery.css'


const Info = () => {
  const [data, setData] = useState([])
    const [loading , setLoading] = useState(true)

    //Fetch all booking
    useEffect(() => {
      axios.get("http://localhost:3000/images")
      .then((res) => {
        setData(res.data)
        console.log(res.data)
         setLoading(false)
        

      }).catch((error) => {
         console.error ( "Request failed")
      })
    }, [])

    if (loading) return <CircularProgress  sx={{
     padding : '15% 50%'
}}  /> 
        

   


  return (
    <div className='gallery'>

        <h1>
        YATI CATAGLOG
      </h1> 
        
        
    <div className="gal">
      {data.map((info) => (   
        <div className="gal-card">
     <img   key ={info._id} 
     src={`http://localhost:3000${info.imageUrl}`} 
     alt="" className='vin-im' />
      </div>
      ))}
     
    </div>
      
    </div>
  )
}

export default Info
