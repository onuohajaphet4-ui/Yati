import React , { useEffect , useState } from 'react'
import {Link} from 'react-router-dom'
import './Navv.css'
import {FiMenu ,FiX} from "react-icons/fi"
import {FiShoppingCart,FiHome, FiHeart, FiUser} from "react-icons/fi"
const Navv = () => {
  const [user , setUser] = useState(null)
    
    useEffect(() => {
      const savedUser  = 
      localStorage.getItem('user')
      if (savedUser){
        setUser(JSON.parse(savedUser))
      }
    }, [])


     const[open , setOpen] = useState(false)
     
  return (
    <div>
      <ul className='ull'>
       <div className="first">
        <h1>Customer Dashboard</h1>
         {user ? (
            <span >
              Hi,   <b>{user.names}  </b> 
            </span>
          ) : (
            <span style={{ color: "black", marginLeft: "20px" ,fontSize:'10px'}}>
              Welcome, Guest
            </span>
          )}
        </div>


        <hr  style={{background:'red',border:'red 1px solid', marginBottom:'20px'}}/>


         <Link to='/' style={{textDecoration:'none' , color:'inherit'}}><li className='main-li'><FiHome size={20} color='white' style={{marginTop:'15px', marginRight:'10px'}}/>Dashboard</li></Link> 
         <Link to='/gallary' style={{textDecoration:'none' , color:'inherit'}}><li className='main-li'><FiShoppingCart size={20} color='white' style={{marginTop:'15px', marginRight:'10px'}}/>Order</li></Link> 
         <Link to='/info' style={{textDecoration:'none' , color:'inherit'}}><li className='main-li'><FiHeart size={20} color='white' style={{marginTop:'15px', marginRight:'10px'}}/>Favorite</li></Link> 
         <Link to='/book' style={{textDecoration:'none' , color:'inherit'}}><li className='main-li'><FiUser size={20} color='white' style={{marginTop:'15px', marginRight:'10px'}}/>Profile</li></Link> 
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
                      Welcome, Guest
                    </span>
                    )}
                   </div>


        <hr  style={{background:'red',border:'red 1px solid', marginBottom:'20px'}}/>

                   <Link to='/' style={{textDecoration:'none' , color:'inherit'}}><li className='non-li'><FiHome size={20} color='white' style={{marginTop:'15px', marginRight:'10px'}}/>Dashboard</li></Link>
                  <Link to='/gallary' style={{textDecoration:'none' , color:'inherit'}}><li className='non-li'><FiShoppingCart size={20} color='white' style={{marginTop:'15px', marginRight:'10px'}}/>Order</li></Link>
                  <Link to='/info' style={{textDecoration:'none' , color:'inherit'}}><li className='non-li'><FiHeart size={20} color='white' style={{marginTop:'15px', marginRight:'10px'}}/>Favorite</li></Link>
                  <Link to='/book' style={{textDecoration:'none' , color:'inherit'}}><li className='non-li'><FiUser size={20} color='white' style={{marginTop:'15px', marginRight:'10px'}}/>Profile</li></Link>
        
        
                  
                 </ul> 
                </div>
    </div>
  )
}

export default Navv
