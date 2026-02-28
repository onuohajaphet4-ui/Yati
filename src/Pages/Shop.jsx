// import React from 'react'
import React , {useEffect, useState} from 'react'
import axios from 'axios'
import './Shop.css'
import {
  CircularProgress,
} from "@mui/material";
import Footer from '../Component/Footer'
import Nav from '../Component/Nav'
import {FiShoppingCart} from "react-icons/fi"
import Shopnav from '../Component/Shop-nav'
import {Link} from 'react-router-dom'
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import Filter from '../Component/Filter'

const Info = () => {
  const [data, setData] = useState([])
    const [loading , setLoading] = useState(true)
    const [expanded, setExpanded] = useState(false);
    const [search, setSearch] = useState("");
    const { id } = useParams();
    const [message, setMessage] = useState("")
    const [addedId, setAddedId] = useState([])
    const [sort, setSort] = useState("");
    const navigate = useNavigate()



    //Fetch all booking
    useEffect(() => {
      axios.get(` https://yati-perfume-backend.onrender.com/api/product${sort ? `?sort=${sort}` : ""}`)
      .then((res) => {
        setData(res.data.products)
         setLoading(false)

      }).catch((error) => {
         console.error (error?.response?.data?.message || "Request failed")
      })
    }, [sort])



  
  const addToCart = async (info) => {

    
  const token = localStorage.getItem("token")

  if (!token) {
    alert("Please login to add items to cart")
    navigate("/log")
    return
  }

  try {
    await axios.post(" https://yati-perfume-backend.onrender.com/api/cart",
      {
         productId: info._id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )

    setMessage(`${info.name} added to cart`)
    setAddedId(prev => prev.includes(info._id)? prev : [...prev,info._id])
    
  } catch (error) {
    console.log(error.response?.data || error.message)
  }
} 

    if (loading) return <CircularProgress  sx={{
         margin : '15% 50%', color:'red'
    }}  />

    
   const handleSearch = (e) => setSearch(e.target.value.toLowerCase());

   const filteredCards = data.filter((b) =>
    b.name.toLowerCase().includes(search)
  );


  return (

    
    <div>
      
      {message && (
        <div className='toast'>
               {message}
        </div>

      )}
      <div className="ba">

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus soluta quas earum necessitatibus asperiores reprehenderit, natus harum cumque nostrum error sunt ab vitae, saepe cum, possimus officiis nobis a magnam.
         <Nav/>
      </div>


      <Shopnav/>
          
          <h2 style={{textAlign:"center", marginBottom:'20px'}}>All</h2>

       <input
        className="bran-input"
        type="text"
        placeholder="Search Products"
        value={search}
        onChange={handleSearch}
      />


         <Filter sort={sort} setSort={setSort}/>
   
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
       <Link to= {`/book/${info._id}`}> {expanded ? " See less" : " See more"}</Link>
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


          <button onClick={() => addToCart(info)}>
  {addedId.includes(info._id) ? "Added ✓✓" : "Add to Cart"}
</button>


            
        
        </div>
      ))}

       {filteredCards.length === 0 && (
        <p style={{ textAlign: "center", color: "gray" }}>No Product Found</p>
      )}
      
    </div>

    <div className="cart">
      <Link to='/cart'>    <FiShoppingCart size={28} color='red'/> </Link>
     </div>

    <Footer/>
     </div>
  )
}

export default Info
