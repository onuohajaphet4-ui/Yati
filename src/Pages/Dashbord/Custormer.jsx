import React , { useEffect , useState } from 'react'
import Navv from "../../Component/Navv"
import './Customer.css'
import {FiShoppingCart} from "react-icons/fi"

const Custormer = () => {
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
         onClick={() => window.history.back()}
        
         >
         Log out
        </button>
      </div>
       <hr />

       <div className="car">
         <img src="https://d2gt4h1eeousrn.cloudfront.net/121245002/header-fcHJMd/DclbFT3-200x200.webp" className='car-img' alt="" />

         <FiShoppingCart size={28} color='red' style={{marginTop:'15px'}}/>
       </div>


      <div className="black">
        {user ? (
            <span >
              Welcome,   <b>{user.names}  </b> 
            </span>
          ) : (
            <span style={{ color: "black", marginLeft: "20px" ,fontSize:'10px'}}>
              Welcome, Guest
            </span>
          )}
      </div>

      
      <Navv/> 
      <h1></h1>

      
    </div>
  )
}

export default Custormer
