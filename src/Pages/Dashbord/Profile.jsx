import "./Profile.css";
import Footer from "../../Component/Footer";
import { FiShoppingCart } from "react-icons/fi";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CircularProgress, Avatar } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Customer = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [editing, setEditing] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      if (!id) {
        setError("User not found");
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get(
          `https://yati-perfume-backend.onrender.com/api/users/${id}`
        );
        // IMPORTANT: your backend sends { users }
        setUser(res.data.users);
        console.log(res.data.users);

      } catch (err) {
        console.error(err);
        setError("Failed to load profile");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  //delete user 
    const deleteUser = async (_id) =>{

    const confirm = window.confirm('Are you sure want to delete this user?')
   if (!confirm) return;
   
   try {
      await axios.delete (`https://yati-perfume-backend.onrender.com/api/users/delete/${_id}`)
      navigate("/")
      console.log(data)
      alert ('deleted succesfully')
   } catch (error) {
    console.error(error)
    alert ('deletion unsuccesfully')
    
   }
  }

  if (loading) return <CircularProgress />;
  if (error) return <p>{error}</p>;
  if (!user) return null;

  return (
    <div className="profile">
      <div className="logout">
        <button onClick={() => window.history.back()}>
          Back
        </button>
      </div>

      <hr />

      <div className="car">
        <img
          src="https://d2gt4h1eeousrn.cloudfront.net/121245002/header-fcHJMd/DclbFT3-200x200.webp"
          className="car-img"
          alt=""
        />
        <Link to="/cart">
          <FiShoppingCart size={28} color="red" />
        </Link>
      </div>

      <div className="black">
        <span>
          Hi, <b>{user.name}</b>
        </span>
      </div>

      <div className="profile-con">
        <div className="avater">
          <Avatar sx={{ bgcolor: "#1976d2", size:'300px' }}>
          {user?.name?.[0]?.toUpperCase()}
        </Avatar>
        </div>

        <div className="profile-card">
          <h1>Full Name: {user.name}</h1>

          <button onClick={() => navigate(`/profile/edit/${user._id}`)}>Edit</button>
        </div>

        <hr />

        <div className="profile-card">
          <h1>Email: {user.email}</h1>
          <button onClick={() => navigate(`/profile/edit/${user._id}`)}>Edit</button>
        </div>

        <hr />

        <div className="profile-card">
          <h1>Phone Number: {user.phoneNumber}</h1>
          <button onClick={() => navigate(`/profile/edit/${user._id}`)}>Edit</button>
        </div>

        <hr />

        <div className="profile-card">
          <h1>Password</h1>

          <button  className="pro-btn"  onClick={() => navigate("/forgot")}>Change Password</button>
        </div>

        <hr />

        <div className="shhsh">
            <button onClick={() => deleteUser(user._id) } style={{backgroundColor:'red'}} >Delete</button>
          </div>


      </div>

      <Footer />
    </div>
  );
};

export default Customer;