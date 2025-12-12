import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className='foot'>
      <p>© ALL RIGHTS RESERVED.   2025, YATI</p>

      <div className="foot-flex">
        <Link to='/info' style={{textDecoration:'none' , color:'inherit'}}> <p>Shop info</p> </Link> 
        <Link to='/gallary' style={{textDecoration:'none' , color:'inherit'}}> <p>gallery</p></Link> 
        <Link to='/book' style={{textDecoration:'none' , color:'inherit'}}><p>Terms & Conditions</p></Link> 
        <Link to='/con' style={{textDecoration:'none' , color:'inherit'}}><p>Send a message</p></Link> 
        <Link to='/form' style={{textDecoration:'none' , color:'inherit'}}><p>Shipping & Payment Info</p></Link> 
      </div>
    </div>
  )
}

export default Footer
