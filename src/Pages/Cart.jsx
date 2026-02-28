import { useEffect, useState } from "react";
import axios from "axios";
import { FiChevronLeft, FiKey, FiLock, FiTrash2 } from "react-icons/fi";
import Footer from '../Component/Footer'
import Nav from '../Component/Nav'
import './Cart.css'
import {Link, useNavigate} from 'react-router-dom'

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const fetchCart = async () => {
       const token = localStorage.getItem("token")

      try {
        const res = await axios.get("https://yati-perfume-backend.onrender.com/api/cart", 
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
        );
        setCart(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

 
      const deleteCart = async (_id) =>{
  
             const confirm = window.confirm('Are you sure want to delete this user?')
     if (!confirm) return;
      const token = localStorage.getItem("token")
     try {
        await axios.delete (`https://yati-perfume-backend.onrender.com/api/cart/delete/${_id}`,
          {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
        )
        alert ('deleted succesfully')
     } catch (error) {
      console.error(error)
      alert ('deletion unsuccesfully')
      
     }
    }


    const changeQty = async (id, type) => {
   setCart(prevCart =>
    prevCart.map(item => {

      if (item._id !== id) return item;

      let newQty =
        type === "inc"
          ? item.quantity + 1
          : Math.max(1, item.quantity - 1);

      // 🔥 send to backend
      axios.put(`https://yati-perfume-backend.onrender.com/api/cart/${id}`,
         { quantity: newQty });

      // 🔥 update frontend immediately
      return { ...item, quantity: newQty };
    })
  );
};

//Add QQaunty price
  const formatPrice = (price) =>
   new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN"
  }).format(price);

  //Subtotal
   const subtotal = cart.reduce((total, item) => {
  return total + (item.productId?.price * item.quantity);
   }, 0);

   //Tax rate
   const tax = subtotal * 0.05;

   //total
   useEffect(() => {
   const newTotal = subtotal + tax + 5000;
   setTotalAmount(newTotal);
  }, [subtotal, tax]);
  useEffect(() => {
   localStorage.setItem("cartTotal", JSON.stringify(totalAmount));
   }, [totalAmount]);


  if (loading) return <p>Loading cart...</p>;

  return (
    <div style={{backgroundColor:'#ecebebff'}}>

      <div className="ba">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus soluta quas earum necessitatibus asperiores reprehenderit, natus harum cumque nostrum error sunt ab vitae, saepe cum, possimus officiis nobis a magnam.
         <Nav/>
      </div>

      <div className="cart-intro">
        
        <div className="cart-in-icon">
           <Link  > <FiChevronLeft size={45} onClick={() => navigate( -1 )} /> </Link>
        </div>

        <div className="cart-int">
            <h1>
            Your Shooping Cart 
           </h1>

          <p>
            Review your items before checkout
          </p>
        </div>
      </div>

      <div className="cart-card">

     
       <div>
         { !cart || cart.length === 0 ? ( <p className="empty">Your cart is empty</p> ):(cart.map((item) => (
        <div key={item._id} style={{border:"1px solid #ccc", padding:"10px"}}  className="cartt">
          <div className="iii">
            <h3>{item.productId?.name}</h3>
            <p>{formatPrice(item.productId?.price * item.quantity)}</p>

          </div>
          <div className="ii">
            <img src={item.productId?.imageUrl}  alt="" className='' />
            <h5>Tax:  5%  </h5>
            <p className="p"> + ₦{(item.productId?.price * item.quantity * 0.05).toFixed(2)} </p>
            <FiTrash2 onClick={() => deleteCart(item._id)} size={20} color='red' className="cartt-icon" />
          </div>
           
          <p className="p-ca">
            ₦{item.productId?.price} each
          </p>

          <hr style={{margin:'2%'}} />

          
        <div className="qun">
            <div >
             <h5 style={{color:'inherit', marginTop:'10px'}}>Qauntity</h5>  
            </div>

            <div>
                <button onClick={() => changeQty(item._id, "dec")} style={{margin:'10px', padding:'0px 3px', fontSize:'20px'}}>-</button>
         <span style={{ fontSize:'15x'}}>{item.quantity}</span>
        <button onClick={() => changeQty(item._id, "inc")} style={{margin:'10px', padding:'0px 2px', fontSize:'20px'}}>+</button>
            </div>
        </div>

          
        </div>
      ))
    )}
       </div>

     <div className="cart-form">
        <h1>Order summary</h1>

        <div className="fo">
            <h5>Subtotal</h5>
            <p>₦{subtotal.toLocaleString()}</p>
        </div>

        <div className="fo">
            <h5>Delivery fee</h5>
            <p>₦5000</p>
        </div>

        <div className="fo">
            <h5 style={{color:'green'}}>Tax</h5>
            <p>₦{tax.toFixed(2)}</p>
        </div>

        <hr />

        <div className="fo">
            <h4>Total</h4>
            <p style={{fontWeight:'bold', fontSize:'20px', color:'green'}}>₦{totalAmount.toFixed(2)}</p>
        </div>
        
        <div className="tt">
            <p>
                <span>Tax Breakdown:</span>  Calculated per product based on thier tax rates
            </p>
        </div>

        <button onClick={() => navigate("/form")}>
           Checkout
        </button>

        <p className="end">
            <FiLock size={20} color="gray"/> SSL Encryption
        </p>

        <p className="end">
            Your payment information is protected with bank-level security
        </p>


     </div>
      </div>

    <Footer/>
    </div>
  );
};

export default Cart