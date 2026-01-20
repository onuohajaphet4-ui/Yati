// import React from 'react'
import React , {useEffect, useState} from 'react'
import axios from 'axios'
import './Shop.css'


const Info = () => {
  const [data, setData] = useState([])
    const [loading , setLoading] = useState(true)

    //Fetch all booking
    useEffect(() => {
      axios.get("https://classwork-backend-yhli.onrender.com/api/products")
      .then((res) => {
        setData(res.data.products)
        console.log(res.data.products)

      }).catch((error) => {
         console.error (error?.response?.data?.message || "Request failed")
      })
    }, [])
        

   


  return (
    <div className='vin-for'>

      

    
      {data.map((info) => (
        <div key ={info._id} className="vin-card"> 
          
          <div>
              <img src={info.img} alt="" className='vin-im' />
            </div>

             <h2
              className="vin-h3"
            >
              {info.name}
            </h2>
            <div className="det" style={{paddingBottom:'10px'}}>
            <p
               style={{
                // textAlign: "center",
                paddingTop: "3%",
                fontSize: "17px",
                color: "black",
               }}
              >
                {info.price}
            </p>


           
          </div>


            
        
        </div>
      ))}
      
    </div>
  )
}

export default Info
