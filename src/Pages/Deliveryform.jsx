import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Deliveryform.css'
import Footer from '../Component/Footer'
import Nav from '../Component/Nav'

export default function Delivery() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    email: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    // check if email exists
    const res = await axios.post("https://yati-perfume-backend.onrender.com/api/users/check-email", {
      email: form.email
    });

    if (!res.data.exists) {
      alert("This email is not registered. Please use your account email.");
      return;
    }

    // save delivery info
    localStorage.setItem("deliveryInfo", JSON.stringify(form));

    navigate("/pay");

  } catch (err) {
    console.log(err);
    alert("Server error. Try again.");
  }
};

  return (

    <div>
      <div className="ba">
      
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus soluta quas earum necessitatibus asperiores reprehenderit, natus harum cumque nostrum error sunt ab vitae, saepe cum, possimus officiis nobis a magnam.
               <Nav/>
      </div>
      
      <div className="delivery-container">
       <div className="formmm" >
       <h2>Delivery Information</h2>
 
       <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          onChange={handleChange}
        />
         <br /> <br />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          required
          onChange={handleChange}
        />
        <br /> <br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleChange}
        />
        <br /> <br />

        <input
          type="text"
          name="address"
          placeholder="Delivery Address"
          required
          onChange={handleChange}
        />

        <br /> <br />

        <button type="submit">Proceed to Payment</button>

      </form>
      </div>
    
    </div>

    <Footer/>
    </div>
  );
}