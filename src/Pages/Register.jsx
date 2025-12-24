import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  CircularProgress,
  InputAdornment,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import  video from '../assets/video.mp4'
import  video from '../assets/vi.mp4'
import {FcGoogle} from "react-icons/fc"


const RegistrationScreen = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await axios.post(
        "https://classwork-backend-yhli.onrender.com/api/admin",
        formData
      );
      alert("Registration successful! Please login.");
      navigate("/log");
    } catch (err) {
      setError(err?.response?.data?.error || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        // backgroundColor:'white',
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.65)",
          zIndex: 0,
        },
      }}
    >

        <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  zIndex: -1,
                }}
              >
                <source src={video} type="video/mp4" />
              </video> 
        
            
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "rgba(0,0,0,0.65)",
                  zIndex: 0,
                }}
              />

      
      <Box
        component="form"
        onSubmit={handleRegister}
        sx={{
          position: "center",
          zIndex: 1,
          width: "600px",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          padding:'20px',
          gap: 2,
           background: "rgba(43, 41, 41, 0.52)",
            backdropFilter: "blur(10px)",
            borderRadius:'10px',
             boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
        }}
      >

        
         <img src="https://d2gt4h1eeousrn.cloudfront.net/121245002/header-fcHJMd/DclbFT3-200x200.webp" className="ll" alt="" />
        <Typography
          variant="overline"
          sx={{ letterSpacing: 1, color: "rgba(200,200,200,0.8)" }}
        >
       
        </Typography>

        <Typography variant="h4" fontWeight="bold" sx={{ mb: 1 }}>
          Create new account<span style={{ color: "red" }}>.</span>
        </Typography>

        <Typography variant="body2" sx={{ mb: 2 }}>
          Already has an account?{" "}
          <span
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => navigate("/log")}
          >
            Log in
          </span>
        </Typography>

        {error && (
          <Typography color="error" sx={{ mb: 2 }}>
            ⚠️ {error}
          </Typography>
        )}

        {/* Flex row 1: First name / Last name */}
        <Box sx={{ display: "flex", gap: 7 }}>
          <TextField
            label=" name"
            name="name"
            value={formData.firstName}
            onChange={handleChange}
            required
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutlineIcon sx={{ color: "red" }} />
                </InputAdornment>
              ),
            }}
            sx={textFieldStyle}
          />
         
        </Box>

        {/* Flex row 2: Email / Phone */}
        <Box sx={{ display: "flex", gap: 7  }}>
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailOutlinedIcon sx={{ color: "red" }} />
                </InputAdornment>
              ),
            }}
            sx={textFieldStyle}
          />
          <TextField
            label="Phone number"
            name="phoneNumber"
            type="tel"
            value={formData.phoneNumber}
            onChange={handleChange}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneIphoneOutlinedIcon sx={{ color: "red" }} />
                </InputAdornment>
              ),
            }}
            sx={textFieldStyle}
          />
        </Box>

        {/* Flex row 3: Password / Address */}
        <Box sx={{ display: "flex", gap: 7 }}>
          <TextField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlinedIcon sx={{ color: "red" }} />
                </InputAdornment>
              ),
            }}
            sx={textFieldStyle}
          />
        
        </Box>

        <Button
          fullWidth
          variant="contained"
          type="submit"
          disabled={loading}
          sx={{
            py: 1.5,
            mt: 1,
            borderRadius: "12px",
            textTransform: "none",
            fontWeight: "bold",
            fontSize: "1rem",
            backgroundColor: "black",
            "&:hover": { backgroundColor: "red" },
          }}
        >
          {loading ? (
            <CircularProgress size={24} sx={{ color: "#fff" }} />
          ) : (
            "Create account"
          )}
        </Button>

            <p style={{textAlign:'center'}}>OR</p>


        <Button onClick={() =>{
                  window.location.href="https://classwork-backend-yhli.onrender.com/auth/google"
                  
                }}
                sx={{
            py: 1.5,
            mt: 1,
            borderRadius: "12px",
            textTransform: "none",
            fontWeight: "bold",
            fontSize: "1rem",
            backgroundColor: "black",
            "&:hover": { backgroundColor: "red" },
          }}>
                  <FcGoogle style={{paddingRight:'20px'}}/>  with Google 
                </Button>
        
      </Box>

      
    </Box>
  );
};

const textFieldStyle = {
  "& .MuiOutlinedInput-root": {
    height: "55px",             
    backgroundColor: "rgba(255,255,255,0.08)", 
    borderRadius: "12px",
    "& fieldset": { borderColor: "rgba(255,255,255,0.3)" },
    "&:hover fieldset": { borderColor: "red" },
    "&.Mui-focused fieldset": { borderColor: "red" },
  },
  "& .MuiInputBase-input": {
    color: "#fff",
    padding: "0 14px",           
    height: "100%",              
  },
  "& .MuiInputLabel-root": { color: "rgba(255,255,255,0.7)" },
};


export default RegistrationScreen;
