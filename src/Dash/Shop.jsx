// import React from 'react'
import React , {useEffect, useState} from 'react'
import axios from 'axios'
// import './Shop.css'
import {
  CircularProgress,
} from "@mui/material";
import Footer from '../Component/Footer'
import {FiShoppingCart} from "react-icons/fi"
import {useNavigate} from "react-router-dom";
import {Link} from 'react-router-dom'

const Info = () => {
    const navigate = useNavigate()
    const [data, setData] = useState([])
    const [loading , setLoading] = useState(false)
    const [expanded, setExpanded] = useState(false);
    const [search, setSearch] = useState("");

    //Fetch all booking
     const fetchUser = async () => {
       
        try {
            setLoading(true)
            const res = await  axios.get("https://yati-perfume-backend.onrender.com/api/product")
            setData(res.data.products)
            console.log(res.data.products)
         
        } catch (error) {
           console.error (error?.response?.data?.message || "Request failed")
        }finally{
            setLoading(false)
        }
    }


    useEffect(() => {
        fetchUser ()
    }, [])
        
   
   const handleSearch = (e) => setSearch(e.target.value.toLowerCase());

   const filteredCards = data.filter((b) =>
    b.name.toLowerCase().includes(search)
  );

  //delete user 
    const deleteUser = async (_id) =>{

           const confirm = window.confirm('Are you sure want to delete this user?')
   if (!confirm) return;
   
   try {
      await axios.delete (`https://yati-perfume-backend.onrender.com/api/product/delete/${_id}`)
      fetchUser ()
      console.log(data)
      alert ('deleted succesfully')
   } catch (error) {
    console.error(error)
    alert ('deletoin unsuccesfully')
    
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
                      Welcome,   Admin  
                    </span>
                 
              </div>


        <button onClick={fetchUser}  className='eric-b'>Refresh</button>
     
          
          <h2 style={{textAlign:"center", marginBottom:'20px', marginTop:'20px'}}>All</h2>

       <input
        className="bran-input"
        type="text"
        placeholder="Search Products"
        value={search}
        onChange={handleSearch}
      />

   
    <div className='vin-for'>

    
      

    
      {filteredCards.map((info) => (
        <div key ={info._id} className="vin-card"> 
          
          <div>
              <img src={info.imageUrl}  alt="" className='vin-im' />
          </div>

          <div className="pro-name">
            <h2 className="vin-h3">
             {info.brand}
            </h2>

            <p>
               {info.category}
            </p>
          </div>

          <h2 className='shop-name'>
            {info.name}
          </h2>


          <div className="dis">
              <p>
    {expanded
      ? info.discription
      : info.discription.slice(0, 65) + "..."}

    {info.discription.length > 80 && (
      <span
        onClick={() => setExpanded(!expanded)}
        className="see-more"
      >
        {expanded ? " See less" : " See more"}
      </span>
    )}
  </p>
                  </div>

        

          <div className="price">
             <h2>${info.price}</h2>

             <p>
              {info.stock}/{info.stock}
             </p>
          </div>


          


            
          <div className="shhsh">
            <button style={{backgroundColor:'green'}}   onClick={() => navigate(`/products/edit/${info._id}`)}>Edit</button>
            <button onClick={() => deleteUser(info._id)} >Delete</button>
          </div>
        </div>
      ))}

       {filteredCards.length === 0 && (
        <p style={{ textAlign: "center", color: "gray" }}>No Product Found</p>
      )}
      
    </div>

    <div className="cart">
      <Link to='/cart'> <FiShoppingCart size={28} color='red' />  </Link>
     </div>

    <Footer/>
     </div>
  )
}

export default Info
