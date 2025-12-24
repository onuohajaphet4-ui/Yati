import React , {useState} from 'react'
import './Nav.css'
import {FiMenu ,FiX} from "react-icons/fi"
import {Link} from 'react-router-dom'

const Nav = () => {
  
   const[open , setOpen] = useState(false)
  return (
    <div className='main'>
      <nav>

        
      
      {/* Dextop */}
      <div className="nav">
        <img src="https://d2gt4h1eeousrn.cloudfront.net/121245002/header-fcHJMd/DclbFT3-200x200.webp" alt="" />
        
        <ul className='main-ul'>
         <Link to='/' style={{textDecoration:'none' , color:'inherit'}}><li className='main-li'>Home</li></Link> 
         <Link to='/gallary' style={{textDecoration:'none' , color:'inherit'}}><li className='main-li'>Gallery</li></Link> 
         <Link to='/info' style={{textDecoration:'none' , color:'inherit'}}><li className='main-li'>Shop Info</li></Link> 
         <Link to='/book' style={{textDecoration:'none' , color:'inherit'}}><li className='main-li'>Shop</li></Link> 
         <Link to='/log' style={{textDecoration:'none' , color:'inherit'}}><li className='main-li'> DashBoard </li></Link>
        </ul>
         
      </div>


      <div className="navv">

      {/* mobile ham */}
        <div  className="menu" onClick={() => setOpen(!open)}>
        <FiMenu size={28} color='red'/>

        <img src="https://d2gt4h1eeousrn.cloudfront.net/121245002/header-fcHJMd/DclbFT3-200x200.webp" className='men' alt="" />
    
         
         
        </div>

      </div>

      <div className={`overlay ${open ? "show" : ""}`} />

      {/* Mobile */}
     
        <div className={`mobile-nav ${open ? "show" : ""}`}>

            {/* <FiX size={28} color='red' style={{paddingLeftLeft:'30%'}}/> */}

         <ul className='non-ul' >
            <FiX size={28} color='red' style={{paddingLeft:'180%'}} onClick={() =>setOpen(false)}/>
           <Link to='/' style={{textDecoration:'none' , color:'inherit'}}><li className='non-li'>Home</li></Link>
          <Link to='/gallary' style={{textDecoration:'none' , color:'inherit'}}><li className='non-li'>Gallery</li></Link>
          <Link to='/info' style={{textDecoration:'none' , color:'inherit'}}><li className='non-li'>Shop Info</li></Link>
          <Link to='/book' style={{textDecoration:'none' , color:'inherit'}}><li className='non-li'>Shop</li></Link>


           <Link to='/log'><button  className='admm'>DashBoard</button></Link>
         </ul> 
        </div>
     
         
      </nav>
      
    </div>
  )
}

export default Nav
