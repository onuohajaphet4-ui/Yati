import React , { useEffect , useState } from 'react'
import {Link} from 'react-router-dom'
import './Navv.css'
import {FiMenu ,FiX} from "react-icons/fi"
import { useParams } from "react-router-dom";
import {FiShoppingCart,FiHome, FiHeart, FiUser} from "react-icons/fi"
const Navv = () => {
 
  const[open , setOpen] = useState(false)
  const { id } = useParams();
  const user = JSON.parse(localStorage.getItem("user"));

  console.log(user)


    
     
  return (
    <div>
      <ul className='ull'>
       <div className="first">
        <h1>Customer Dashboard</h1>
         {user ? (
            <span >
              Hi,   <b>{user?.names}  </b> 
            </span>
          ) : (
            <span >
              Welcome, Mr/Mrs
            </span>
          )}
        </div>


        <hr  style={{background:'red',border:'red 1px solid', marginBottom:'20px'}}/>


         <Link to='/' style={{textDecoration:'none' , color:'inherit'}}><li className='main-li'><FiHome size={20} color='white' style={{marginTop:'15px', marginRight:'10px'}}/>Home</li></Link> 
         <Link to='/order' style={{textDecoration:'none' , color:'inherit'}}><li className='main-li'><FiShoppingCart size={20} color='white' style={{marginTop:'15px', marginRight:'10px'}}/>Order</li></Link> 
         <Link to='/favorite' style={{textDecoration:'none' , color:'inherit'}}><li className='main-li'><FiHeart size={20} color='white' style={{marginTop:'15px', marginRight:'10px'}}/>Favorite</li></Link> 
         <Link to={`/profile/${user?.id}`} style={{textDecoration:'none' , color:'inherit'}}><li className='main-li'><FiUser size={20} color='white' style={{marginTop:'15px', marginRight:'10px'}}/>Profile</li></Link> 
         
         </ul>


        <div  className="menu" onClick={() => setOpen(!open)}>
            <FiMenu size={28} color='red'/>
        
          
            
                 
                 
        </div>

         <div className={`overlay ${open ? "show" : ""}`} />
        
              {/* Mobile */}
             
                <div className={`mobil-nav ${open ? "show" : ""}`}>
        
                   
                 <ul className='non-ul' >
                  


                    <FiX size={28} color='white' style={{marginLeft:'90%'}} onClick={() =>setOpen(false)}/>

                    <div className="first">
                     <h1>Customer Dashboard</h1>
                    {user ? (
                     <span >
                       Hi,   <b>{user.names}  </b> 
                     </span>
                       ) : (
                     <span style={{ color: "black", marginLeft: "20px" ,fontSize:'10px'}}>
                      Welcome, Mr/Mrs
                    </span>
                    )}
                   </div>


        <hr  style={{background:'red',border:'red 1px solid', marginBottom:'20px'}}/>

                   <Link to='/' style={{textDecoration:'none' , color:'inherit'}}><li className='non-li'><FiHome size={20} color='white' style={{marginTop:'15px', marginRight:'10px'}}/>Home</li></Link>
                  <Link to='/order' style={{textDecoration:'none' , color:'inherit'}}><li className='non-li'><FiShoppingCart size={20} color='white' style={{marginTop:'15px', marginRight:'10px'}}/>Order</li></Link>
                  <Link to='/favorite' style={{textDecoration:'none' , color:'inherit'}}><li className='non-li'><FiHeart size={20} color='white' style={{marginTop:'15px', marginRight:'10px'}}/>Favorite</li></Link>
                  <Link to={`/profile/${user?.id}`} style={{textDecoration:'none' , color:'inherit'}}><li className='non-li'><FiUser size={20} color='white' style={{marginTop:'15px', marginRight:'10px'}}/>Profile</li></Link>
        
        
                  
                 </ul> 
                </div>
    </div>
  )
}

export default Navv
