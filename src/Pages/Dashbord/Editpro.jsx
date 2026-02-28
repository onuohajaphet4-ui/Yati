import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Alert,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { useParams, useSearchParams } from "react-router-dom"

const UpdateUser = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const [name, setName] = useState ('')
  const [email, setEmail] = useState ('')
  const [phoneNumber, setPhoneNumber] = useState ('')
  const [loading, setLoading] = useState (false)
  const [error, setError] = useState(false)
  const [searchParams] = useSearchParams();

 const field = searchParams.get("field");

  const payload = {name,
    email,
    phoneNumber
    }

  const handleUpdate =async(e) => {
    e.preventDefault()
    setLoading(true)

    try {
       const res = await 
       axios.put(`https://yati-perfume-backend.onrender.com/api/users/update/${id}`,payload)
       console.log(res.data.users)
       setLoading(false)
       alert ('Edit  succesfully')
    } catch (error) {
      console.error (error?.response?.data?.message || "Request failed")
      alert ('Edit failed')
      setLoading(false) 
      
    }
  }
  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        p: 2,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          p: 4,
          width: "100%",
          maxWidth: 400,
          borderRadius: 3,
          textAlign: "center",
        }}
      >
        <Typography variant="h5" gutterBottom fontWeight="bold">
          Edit Profile
        </Typography>

        <Alert severity="info" sx={{ mb: 2 }}>
          Message goes here
        </Alert>

        <form onSubmit={handleUpdate}>
        
        
          <TextField
            label="name"
            name="name"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName (e.target.value)}
          />
          <TextField
            label="Email"
            name="email"
            fullWidth
            margin="normal"
             value={email}
            onChange={(e) => setEmail (e.target.value)}
          />
          
            
            <TextField 
            label="Phone Number" 
            name="phoneNumber" 
            fullWidth 
            margin="normal"
             value={phoneNumber}
            onChange={(e) => setPhoneNumber (e.target.value)} />

          <Button
            type="submit"
            variant="contained"
            
            fullWidth
            sx={{ mt: 2, backgroundColor:'red' }}
          >
            {loading ? <CircularProgress/> : 'Update'}
          </Button>

          <Button variant="outlined" fullWidth sx={{ mt: 1 }}
          onClick={() => navigate(-1)}>
            Cancel
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default UpdateUser;