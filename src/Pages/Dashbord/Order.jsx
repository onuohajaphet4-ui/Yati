import React ,  {useEffect, useState}from 'react'
import axios from 'axios'
import {
  CircularProgress,
} from "@mui/material";
import {FiShoppingCart,  FiTrash2 } from "react-icons/fi"
import Footer from '../../Component/Footer'
import {Link} from 'react-router-dom'



const Order = () => {
    const [data, setData] = useState([])
    const [loading , setLoading] = useState(false)
    const user = JSON.parse(localStorage.getItem("user"))

     //Fetch all order
     const fetchOrder = async () => {
      
      const token = localStorage.getItem("token")
       
        try {
            setLoading(true)
            const res = await  axios.get("https://yati-perfume-backend.onrender.com/api/order/customer",{
               headers: {
              "Authorization": `Bearer ${token}`
             }
            }
              
            )
            setData(res.data.orders)
            console.log(res.data.orders)
            console.log(localStorage.getItem("token"));
            
            console.log("DATA:", res.data.orders);
         
        } catch (error) {
           console.error (error?.response?.data?.message || "Request failed")
        }finally{
            setLoading(false)
        }
    }


    useEffect(() => {
        fetchOrder ()
     

    }, [])

    const deleteOrder = async (_id) =>{
  
      const confirm = window.confirm('Are you sure want to delete this user?')
     if (!confirm) return;
     
     try {
        await axios.delete (`https://yati-perfume-backend.onrender.com/api/order/delete/${_id}`)
        alert ('deleted succesfully')
     } catch (error) {
      console.error(error)
      alert ('deletion unsuccesfully')
      
     }
    }

    const updateStatus = async (id, newStatus) => {
  try {
    // optimistic UI update (instant color change)
    setData(prev =>
      prev.map(order =>
        order._id === id ? { ...order, status: newStatus } : order
      )
    );

    await axios.put(`https://yati-perfume-backend.onrender.com/api/order/admin/status/${id}`, {
      status: newStatus,
    });

  } catch (error) {
    console.error("Failed to update status");
    fetchOrder(); // rollback if failed
  }
}

  const statusColor = (status) => {
  switch (status) {
    
    case "processing":
      return "#f39c12";   // orange
    case "shipped":
      return "#3498db";   // purple
    case "delivered":
      return "#27ae60";   // green
    default:
      return "gray";
  }
  }


  if (loading) return <CircularProgress  sx={{
     margin : '15% 50%', color:'red'
  }}  />

  return (
    <div className='order'>

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
                      {user ? (
            <span >
              Hi,   <b>{user.names}  </b> 
            </span>
          ) : (
            <span style={{ color: "black", marginLeft: "20px" ,fontSize:'10px'}}>
              Welcome, Guest
            </span>
          )} 
                    </span>
                 
              </div>

      <div className="order-intro">
        <h1>
          Orders Management
        </h1>

        <p>
          Manage and track all customer orders
        </p>
      </div>

        <button onClick={fetchOrder}  className='eric-b'>Refresh</button>


      
  {data.map((order) => (
  <div key={order._id} className="order-card">

    <div className="order-first">
     <h4>Payment Ref: {order.paymentReference}</h4>
     <p>{order.paymentStatus}</p>
     <h4>Total: ₦{order.totalAmount}</h4>
    </div>

    <hr />

    <div className="order-second">
      <div className="order-info">
        <h3>Customers Information</h3>

        <h4>Name:  {order.delivery?.name}</h4>
        <h4>Email: {order.email}</h4>
        <h4>Phone: {order.delivery?.phone}</h4>
      </div>

      <div className="order-add">
         <h3>Delivery Address</h3>
        
        <h4>Name:  {order.delivery?.address}</h4>

      </div>

      <div className="order-item">
         <h3>Order Items</h3>

         {order.items.map((item, i) => (
        <div key={i} className="item-row">

          
          <div className="order-end">
          
            <h4> {item.quantity}X {item.productId?.name}</h4>
            <h4>₦{item.price}</h4>

            
           </div>

           

        </div>
         ))}

        <hr />

        <div className="order-ennd">
            <h3>TOTAl</h3>
            <h3>₦{order.totalAmount}</h3>
        </div>
      </div>
    </div>
    
    <hr className='hr-end' />

    
 
 <div className="order-status">

 <button
 disabled={user.role !== "admin"}
  style={{ background: order.status === "processing" ? "#f39c12" : "lightgray" }}
  onClick={() => updateStatus(order._id, "processing")}
   >
  Processing
  </button>

  <button
  disabled={user.role !== "admin"}
  style={{ background: order.status === "shipped" ? "#3498db" : "lightgray" }}
  onClick={() => updateStatus(order._id, "shipped")}
 >
  Shipped
 </button>

 <button
 disabled={user.role !== "admin"}
  style={{ background: order.status === "delivered" ? "#27ae60" : "lightgray" }}
  onClick={() => updateStatus(order._id, "delivered")}
 >
  Delivered
 </button>
 </div>
  </div>
))}


     <div className="cart">
      <Link to='/cart'> <FiShoppingCart size={28} color='red' />  </Link>
     </div>

    <Footer/>
     
    </div>
  )
}

export default Order
