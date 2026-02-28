import React , {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios'
import './Shopdetail.css'
import {Link} from 'react-router-dom'
import Footer from '../Component/Footer'
import Nav from '../Component/Nav'
import {FiInstagram, FiTwitter, FiFacebook, FiHeart} from "react-icons/fi"
import StarRating from '../Component/Rating'
import { useNavigate } from "react-router-dom"

export default function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [visible, setVisible] = useState(3);
    const loadMore = () => setVisible((prev) => prev + 3);
    const [message, setMessage] = useState("")
    const [addedId, setAddedId] = useState(null)
    const navigate = useNavigate()

  useEffect(() => {
    const fetchProduct = async () => {

      if (!id) {
        setError("User not found");
        setLoading(false);
        return;
      }

      const res = await axios.get(` https://yati-perfume-backend.onrender.com/api/product/${id}`);
      setProduct(res.data.productss);
      console.log("url:", id)
      console.log(res.data)
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <h2 style={{ padding: "20px" }}>Product not found</h2>;
  }

  const token = localStorage.getItem("token")
    const user = JSON.parse(localStorage.getItem("user"))
    const addToCart = async (product) => {
  
      if (!token){
        alert("Please login to add items to cart")
        navigate("/log")
        return
      }
    try {
      await axios.post(" https://yati-perfume-backend.onrender.com/api/cart",
        {
          productId: product._id
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
  
  
  
    setMessage(`${product.name} added to cart`)
   
    setAddedId(product._id )
  
    setTimeout(() => {
      setMessage("")
      setAddedId(null)
    }, 2000)
      
    } catch (error) {
      console.log(error)
    }
  };
          
  


  

  return (

    <div>

      <div className="ba">
      
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus soluta quas earum necessitatibus asperiores reprehenderit, natus harum cumque nostrum error sunt ab vitae, saepe cum, possimus officiis nobis a magnam.
               <Nav/>
      </div>

      <button
        onClick={() => window.history.back()}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "#111",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          marginLeft: "20px"
        }}
      >
        Go Back
      </button>
    <div
      className="peak"
     style={{ padding: "20px" , 
                 display:'flex',
                 justifyContent:'center' ,
                 gap:'50px'
        }}
    >
        
        
    
     <div>
      
      </div>

       

       <img src= {product.imageUrl} className='de-img' alt="" />

      <div className="detail-con">
         <Link to={`/rate/${product._id}`}> <FiHeart size={25} className='de-icon' style={{marginLeft:'90%'}}/> </Link>
         <div className="fl">
          <h1 >
             Brand : <span style={{color:"rgb(197, 84, 84)"}}>{product.brand}</span>
         </h1>


         <h3 style={{color:" gray"}}>
            {product.category}
         </h3>
         </div>


         <h1 style={{color:'black', fontWeight:'bold', fontSize:'20px'}} >
          {product.name}
         </h1>

        <h4 style={{color:' rgb(48, 44, 44)', fontWeight:'bold', marginTop:'20px'}}>
           {
          product.discription
         }
        </h4>

         <div className="det" >
            <p style={{marginTop:'10px'}}>
                price
            </p>

            
          {product.price && (
           <p style={{ lineHeight: "1.6", fontSize: "19px", maxWidth: "500px" }}>
          {product.price}
          </p>
          )}


         </div>

         

         <button onClick={() => addToCart(product)}  className="booo">
  {addedId === product._id ? "Added ✓" : "Add to Cart"}
</button>


        <hr style={{marginTop:"25px",marginLeft:'10%' ,marginRight:'10%', padding:'1px', border:'none', backgroundColor:'black'}}/>

        <h3 style={{marginTop:'20px'}}>
          Check us out :
        </h3>

        <FiTwitter size={25} className='de-icon'/> <FiInstagram size={25} className='de-icon' style={{marginLeft:'10px'}}/> <FiFacebook size={25} className='de-icon' style={{marginLeft:'6px'}}/>   
      </div>

    </div>

    <div className="details">

        <div className="decard">
          <h1>
            Delivery Informaton :
          </h1>

          <ul>
            <li>Delivey Within main branch state :1-2 days .</li>
            <li>Out side main branch state: 2-5days .</li>
            <li>Payment on delivery: Not available .</li>
            <li>Delivery fee: 10$ -30$ deppending on the location .</li>
          </ul>

          <div className="quick">
            <p>Need a quick order?</p>
            <a href="https://wa.me/2347074293026" style={{textDecoration:'none' ,color:'inherit'}}>
            <button className="ppks">Chat:+2348145990289</button></a> 
          </div>
        </div>

        <div className="decard">
           <h1>
            Return Policy :
           </h1>

           <ul>
            <li> Returns accepted within 24-48 hours .</li>
            <li>Must be in original packaging .</li>
            <li>refund processed with a week .</li>
           </ul>

           <h1>
            Warranty :
           </h1>

           <ul>
            <li>30-days replacment warranty (if product is defective) .</li>
            <li>Not applicable for damage caused by user .</li>
           </ul>
        </div>

        <div className="decard">
          <form action="" >
            <h1>Delivery Form :</h1>
           <div style={{flexDirection:'column'}}>
            <input type="text" name='name' placeholder="Eter full name" required /> <br /> <br />
            <input type="text" name='phone'placeholder="Enter phone number" required/><br /> <br />
            <input type="text" name='address' placeholder="Enter Deliveryy address" required /><br /> <br />
            <input type="text" name='message' placeholder="Enter name of account used for payment" required /><br /> <br />

            <button type="submit" className="utton">Submit</button>
            </div>
          </form>
        </div>
      </div>

      <div className="review-con">
         <div className="see">
           <h3 className='h3-1'>
          Verified Customer Feedback
         </h3>

          <button onClick={loadMore}>
             See More
          </button>
         </div>

         <hr />

         <div className="review-m" style={{marginTop:'10px'}}>
          <h3> Total Rating : ⭐️ {product.averageRating?.toFixed(1) || 0} / 5 <StarRating value={product.averageRating?.toFixed(1) || 0}  /></h3>
         </div>

         <hr style={{backgroundColor:'rgb(184, 177, 177)', border:'none', padding:'0.5px',marginBottom:'10px', marginTop:'10px'}}/>

      <div className="review-com">
        <h4 className='h4-1'>Comments from Verified Purchases</h4>
         {product.reviews.slice(0, visible).map((r, i) => (
        <div key={i} className='review-card'>
          <b >{r.user}</b>
          <p><StarRating value={r.rating} /> ⭐️{r.rating}</p>
          <p>{r.comment}</p>

          <hr style={{backgroundColor:'rgb(184, 177, 177)', border:'none', padding:'0.5px',marginBottom:'10px', marginTop:'10px'}}/>
        </div>

        
      ))}

      

       </div>
      </div>

      <Footer/>

  </div>
  );
}