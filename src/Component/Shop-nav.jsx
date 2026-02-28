import React, {useState} from 'react'
import './Shop-nav.css'
import {FiAlignLeft,FiX} from "react-icons/fi"
import {Link} from 'react-router-dom'

function Shopnav() {
     const[open , setOpen] = useState(false)
  return (
    <div>
       <nav className='shopnav'>
         <ul>
          <Link to="/book" style={{textDecoration:'none'}}>  <li>All</li> </Link>
          <Link to="/book/section/Best-seller" style={{textDecoration:'none'}}>  <li>Best Sellers</li> </Link>
          <Link to="/book/section/New-trending" style={{textDecoration:'none'}}>  <li>New & Trending</li> </Link>
          <Link to="/book/section/Him" style={{textDecoration:'none'}}> <li>Him</li> </Link> 
          <Link to="/book/section/Her" style={{textDecoration:'none'}}>  <li>Her</li> </Link> 
          <Link to="/book/section/Unisex" style={{textDecoration:'none'}}>  <li>Unisex</li> </Link> 
          <Link to="/book/section/Premium" style={{textDecoration:'none'}}>  <li>Premuim</li> </Link> 
         </ul>
       </nav>


       
     <div className="sm">
        {/* mobile ham */}
        <div  className="menbu" onClick={() => setOpen(!open)}>
          { open ? <FiX size={28} color='red'/> : <FiAlignLeft size={28} color='red' /> }
        </div>
       
       
       
        <div className={`mobile-nabv ${open ? "show" : ""}`} >
       
                <ul className='non-ul' >
                   
                  <Link to="/book" style={{textDecoration:'none'}}>  <li className='non-li'>All</li> </Link>
          <Link to="/book/section/Best-seller" style={{textDecoration:'none'}}>  <li className='non-li'>Best Sellers</li> </Link>
          <Link to="/book/section/New-trending" style={{textDecoration:'none'}}>  <li className='non-li'>New & Trending</li> </Link>
          <Link to="/book/section/Him" style={{textDecoration:'none'}}> <li className='non-li'>Him</li> </Link> 
          <Link to="/book/section/Her" style={{textDecoration:'none'}}>  <li className='non-li'>Her</li> </Link> 
          <Link to="/book/section/Unisex" style={{textDecoration:'none'}}>  <li className='non-li'>Unisex</li> </Link> 
          <Link to="/book/section/Premium" style={{textDecoration:'none'}}>  <li className='non-li'>Premuim</li> </Link> 
                </ul>
       
       
                  
             
        </div>

        </div>

      
    </div>
  )
}

export default Shopnav
