import React , { useEffect , useState } from 'react'
import './Product.css'
import {FiShoppingCart} from "react-icons/fi"
import Footer from '../Component/Footer'
import Upload from '../Component/Image'
import Form from '../Component/Add-pro'
import {Link} from 'react-router-dom'

const Product = () => {
  const [imageUrl, setImageUrl] = useState("");
  
    console.log("parent image url :", imageUrl)
   
  return (

    
    <div className='admin-product'>

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
              Welcome,   Admin  
            </span>
         
      </div>

      <div className="pro-intro">
        <h1>
         Add New Product
        </h1>

        <p>
          Add a new product to ypur shop inventory
        </p>

      </div>

      <div className="pro-add">
        <Upload setImageUrl={setImageUrl}/>
        <Form imageUrl={imageUrl}/>
      </div>

      <Footer/>
    </div>
  )
}

export default Product
