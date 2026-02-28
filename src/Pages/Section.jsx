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
import { useParams } from "react-router-dom";
import Shopnav from '../Component/Shop-nav'
import {Link} from 'react-router-dom'
import Filter from '../Component/Filter'



const Section = () => {
  const { section } = useParams();
  const [products, setProducts] = useState([]);
  const [loading , setLoading] = useState(true)
  const [expanded, setExpanded] = useState(false);
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("")
  const [addedId, setAddedId] = useState(null)
  const [sort, setSort] = useState("");
  
   

  useEffect(() => {
   const fetchProducts = async () => {
    try {
      const res = await axios.get(
         `https://yati-perfume-backend.onrender.com/api/product?section=${section}${sort ? `&sort=${sort}` : "" }`
      );

      console.log("RESPONSE:", res.data);

      setProducts(res.data.products);
    } catch (error) {
      console.log("FETCH ERROR:", error);
    } finally {
      setLoading(false); 
    }
  };

  fetchProducts();
}, [section, sort]);

const addToCart = async (info) => {
  try {
    await axios.post("https://yati-perfume-backend.onrender.com/api/cart", {
    userId: "guest123", 
    productId: info._id,
  });

  setMessage(`${info.name} added to cart`)
 
  setAddedId(info._id )

  setTimeout(() => {
    setMessage("")
    setAddedId(null)
  }, 2000)
    
  } catch (error) {
    console.log(error)
  }

};
        

    if (loading) return <CircularProgress  sx={{
         margin : '15% 50%', color:'red'
    }}  />

    const handleSearch = (e) => setSearch(e.target.value.toLowerCase());

   const filteredCards = products.filter((b) =>
    b.name.toLowerCase().includes(search)
  );
    


  return (

    
    <div>
      
      <div className="ba">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus soluta quas earum necessitatibus asperiores reprehenderit, natus harum cumque nostrum error sunt ab vitae, saepe cum, possimus officiis nobis a magnam.
         <Nav/>
      </div>


       <Shopnav/>

      <h2 style={{textAlign:'center', marginBottom:"20px"}}>{section.replace("-", " ")}</h2>


      <input
        className="bran-input"
        type="text"
        placeholder="Search Products"
        value={search}
        onChange={handleSearch}
      />

      <Filter sort={sort} setSort={setSort}/>
      
    <div className='vin-for'>

        

    
      

    
    {Array.isArray(products) && 
      filteredCards.map((info) => (
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


          <button onClick={() => addToCart(info)}>
  {addedId === info._id ? "Added ✓" : "Add to Cart"}
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

export default Section
