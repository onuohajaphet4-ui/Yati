import React, { useState } from 'react'
import './Nav.css'
import { FiMenu, FiX } from "react-icons/fi"
import { Link } from 'react-router-dom'

const Nav = () => {

  const [open, setOpen] = useState(false)

  const token = localStorage.getItem("token")
  const dashboardPath = token ? "/customer" : "/log"

  return (
    <div className='main'>
      <nav>

        {/* Desktop */}
        <div className="nav">
          <img src="https://d2gt4h1eeousrn.cloudfront.net/121245002/header-fcHJMd/DclbFT3-200x200.webp" alt="" />

          <ul className='main-ul'>
            <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
              <li className='main-li'>Home</li>
            </Link>

            <Link to='/gallary' style={{ textDecoration: 'none', color: 'inherit' }}>
              <li className='main-li'>Gallery</li>
            </Link>

            <Link to='/info' style={{ textDecoration: 'none', color: 'inherit' }}>
              <li className='main-li'>Shop Info</li>
            </Link>

            <Link to='/book' style={{ textDecoration: 'none', color: 'inherit' }}>
              <li className='main-li'>Shop</li>
            </Link>

            {/*  Dashboard dynamic link */}
            <Link to={dashboardPath} style={{ textDecoration: 'none', color: 'inherit' }}>
              <li className='main-li'>Dashboard</li>
            </Link>
          </ul>
        </div>

        {/* Mobile */}
        <div className="navv">
          <div className="menu" onClick={() => setOpen(!open)}>
            <FiMenu size={28} color='red' />
          </div>
        </div>

        <div className={`overlay ${open ? "show" : ""}`} />

        <div className={`mobile-nav ${open ? "show" : ""}`}>
          <ul className='non-ul'>
            <FiX size={28} color='red'
              style={{ marginLeft: '140%' }}
              onClick={() => setOpen(false)}
            />

            <Link to='/' style={{color:'inherit', textDecoration:'none'}}><li className='non-li'>Home</li></Link>
            <Link to='/gallary' style={{color:'inherit', textDecoration:'none'}}><li className='non-li'>Gallery</li></Link>
            <Link to='/info' style={{color:'inherit', textDecoration:'none'}}><li className='non-li'>Shop Info</li></Link>
            <Link to='/book' style={{color:'inherit', textDecoration:'none'}}><li className='non-li'>Shop</li></Link>

            {/* ✅ Mobile Dashboard dynamic */}
            <Link to={dashboardPath}>
              <button className='admm'>Dashboard</button>
            </Link>

          </ul>
        </div>

      </nav>
    </div>
  )
}

export default Nav