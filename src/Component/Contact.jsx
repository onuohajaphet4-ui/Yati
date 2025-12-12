import React , { useRef , useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser'
import {CircularProgress} from '@mui/material'

const Contact = () => {
   const [loading, setLoading] = useState(false);
  const form = useRef () 

  const sendEmail = (e) => {
    e.preventDefault() ;
     setLoading(true)
    emailjs 
    .sendForm(
      'service_f4ymrpo',
      'template_ckwm5wk',
      form.current,
       'yQcrPxg3PWJmvSr8a'
    )
    .then(
      (result) => {
        console.log (result.text)
        alert('Your Meassage has been sent and will be review, expect our reply soon')
        setLoading(false);
      },
      (error) => {
        console.log(error.text)
        alert('Error sending message')
      }
     
      
   
    )
  }


  return (
    <div className='contact'>
       <div className="form" >

        <h1>Contact US</h1>

        <form action="" ref={form} onSubmit={sendEmail}>

        <input type="text" name="name" id=""  required placeholder='Name'/> <br />

        <input type="text"  name='phone'  required  placeholder='Email or Phonenumber'/> <br />

        <input type="text" name="message" required  placeholder='Message' /> <br />

        <p>I’m available for commissions and collaborations, and i’m
           excited to hear from you about new projects.
        </p>

        <button>{loading ? (
           <CircularProgress size={24} sx={{ color: "#fff" }} />
          ) : (
            "Submitt"
          )}
        </button>

        </form>
       </div>

       

       <div className="infoo">
         <h2>Visit our studio at</h2>
         <p>Old kk road , site & service ,before ssg spot<br />owerri imo state </p>
         <h2>Message us</h2>
         <p><a href="mailto:youremail@gmail.com?subject=Your%20Subject&body=Your%20Message"  style={{textDecoration:'none', color:'inherit'}}>chibuikeeric923@gmail.com </a> <br /><a href="tel:=08145990289"> 08140685213</a></p>
         

         <h2>Working Hours</h2>
         <p> Monday - Saturday  : 09.00 - 23.00 <br /> Sunday           : 09.00 - 16.00s</p>
         
       </div>
    </div>
  )
}

export default Contact
