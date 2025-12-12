import React from 'react'
import Footer from '../Component/Footer'
import {FiShoppingCart,FiFileText,FiPackage,FiRefreshCcw} from "react-icons/fi"
import Nav from '../Component/Nav'
import './Info.css'

import Contact from '../Component/Contact'
const Info = () => {
  return (
    <div>
      
       <div className="ba">

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus soluta quas earum necessitatibus asperiores reprehenderit, natus harum cumque nostrum error sunt ab vitae, saepe cum, possimus officiis nobis a magnam.
         <Nav/>
        </div>


        <div className="info">
            <h1>Terms & Conditions</h1>


            <div className="info-flex1">
                <h5>Terms & Conditions</h5>
                <h5 style={{color:'rgb(101, 101, 241)'}}>Shipping & Payment Info</h5>
                <h5  style={{color:'rgb(101, 101, 241)'}}>Return Policy</h5>
                <h5  style={{color:'rgb(101, 101, 241)'}}>Lookbook</h5>
            </div>

            <h4>
              <FiFileText size={20}/>  YATI Terms & Conditions
            </h4>

            <p>
                here’s the fine print, no long talk :
            </p>

            <ul>
                <li> What you see is what you get</li>
                <li>All designs, content, and drip = ours. Don’t copy the sauce.</li>
                <li>Prices in Naira. We take transfers, cards, and trusted payment links</li>
                <li>We might update stuff from time to time if you’re tapped in, you’ll know.</li>
               
            </ul>

            <h4><FiPackage size={20} color='brown'/> Shipping Policy</h4>

            <p>
                We don’t play with delays.
            </p>

            <ul>
                <li> We deliver everywhere in Nigeria.</li>
                <li>Orders ship out in 1–2 weeks.</li>
                <li>Lagos deliveries: 1–5 days. Other states: 3–8 days.</li>
                <li>You’ll get a tracking link once your order’s out</li>
                <li> Any issues? Let us know within 48hrs, we’ll sort it.</li>
            </ul>

            <h4><FiRefreshCcw size={20} color='blue'/>   Return & Exchange</h4>
            
            <p>
                If it’s not giving what you thought we got you.
            </p>

            <ul>
                <li>Return within 7 days. Item must be unUsed and in original packaging.</li>
                <li>No returns on final sale, event merch, or custom pieces</li>
                <li> Need to return? Just hit us up with your order number and reason.</li>
                <li> Refunds go back to your payment method (minus delivery fee)</li>
                <li>Want an exchange? If we have your prefrence, it’s a go. If not, store credit or refund</li>
            </ul>
        </div>


        
        <Contact/>






       <div className="cart">
               <FiShoppingCart size={28} color='red'/>
        </div>

        <Footer/>
    </div>
  )
}

export default Info
