
import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Stack,
  CircularProgress,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff, EmailOutlined, LockOutlined } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import  video from '../assets/vi.mp4'


const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const{token} = useParams()

  const handleChange = (e) =>

    
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleLogin = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.post(
        `https://classwork-backend-yhli.onrender.com/api/admin/reset-password/${token}`,
        formData
      );

       alert("Registration successful! Please login.");
      navigate("/log");

      
    } catch (err) {
      setError(err?.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
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
        sx={{
          position: "relative",
          zIndex: 1,
          width: "420px",
          p: 4,
          color: "#fff",
          background: "rgba(43, 41, 41, 0.52)",
            backdropFilter: "blur(10px)",
            borderRadius:'10px',
             boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
        }}
      >
        <img src="https://d2gt4h1eeousrn.cloudfront.net/121245002/header-fcHJMd/DclbFT3-200x200.webp" className="ll" alt="" />
       

        <Typography variant="h5" fontWeight="bold" sx={{ mb: 1 }}>
         Change Password <span style={{ color: "rgb(197, 84, 84)" }}>.</span>
        </Typography>


        {error && (
          <Typography color="error" sx={{ mb: 2 }}>
            {error}
          </Typography>
        )}

        <Stack spacing={2}>
          <TextField
                                label="Enter password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                value={formData.password}
                                onChange={handleChange}
                                fullWidth
                                InputProps={{
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <LockOutlined sx={{ color: "rgb(197, 84, 84)" }} />
                                    </InputAdornment>
                                  ),
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <IconButton onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <VisibilityOff sx={{ color: "rgb(197, 84, 84)" }} /> : <Visibility sx={{ color: "rgb(197, 84, 84)" }} />}
                                      </IconButton>
                                    </InputAdornment>
                                  ),
                                }}
                                sx={textFieldStyle}
                              />


          
          
         
            
         
          <Button
            fullWidth
            variant="contained"
            onClick={handleLogin}
            disabled={loading}
            sx={{
              py: 1.5,
              borderRadius: "12px",
              textTransform: "none",
              fontWeight: "bold",
              fontSize: "1rem",
              backgroundColor: "black",
              "&:hover": { backgroundColor: "rgb(197, 84, 84)" },
            }}
          >
            {loading ? (
              <CircularProgress size={24} sx={{ color: "#fff" }} />
            ) : (
              "Submit"
            )}
          </Button>
        </Stack>


       

       
       
      </Box>

       
    </Box>
  );
};

const textFieldStyle = {
  "& .MuiOutlinedInput-root": {
    height: "55px",
    backgroundColor: "rgba(105, 99, 99, 0.3)",
    borderRadius: "12px",
    "& fieldset": { borderColor: "rgba(105, 99, 99, 0.3)" },
    "&:hover fieldset": { borderColor: "rgb(197, 84, 84)" },
    "&.Mui-focused fieldset": { borderColor: "rgb(197, 84, 84)" },
  },
  "& .MuiInputBase-input": {
    color: "#fff",
    padding: "0 14px",
    height: "100%",
  },
  "& .MuiInputLabel-root": {
    color: "rgba(255,255,255,0.7)",
  },
};

export default Login;