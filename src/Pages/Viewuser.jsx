  import React, { useState,useEffect } from "react";
  import { useNavigate,useParams } from "react-router-dom";
  import axios from "axios";
  import {Box,Paper,Typography,Button,CircularProgress,Alert} from "@mui/material"
  
  
  const UpdateUser = () => {
     const navigate = useNavigate ();
     const {id} = useParams ()
     const [user,setUser] = useState (null)
     const  [loading,setLoading] = useState (true)
     let [error,setError] = useState ('');
  
  
     useEffect(()=>{
      let fetchUser = async ()=>{
      if(!id){
      setError('user not found')
      setLoading(false)
      return
  }
  try{
      const res =await
      axios.get(` https://yati-perfume-backend.onrender.com/api/users/${id}`)
      setUser(res.data.users)
      console.log(res.data)
      }catch(err){
      console.error(err)
      setError(err)
     }finally{
      setLoading(false)
     }
      }
      fetchUser()
     },[id])

     if(loading){return <CircularProgress/>}
     if (loading) return <Alert severity="error"></Alert>
  
    return (
      <Box
        sx={{
          minHeight: "100vh",
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
            textAlign: "center",
            borderRadius: 3,
            
          
          }}
        >
          <Typography variant="h5" gutterBottom fontWeight="bold">
            User Details
          </Typography>
  
          <Typography sx={{ mb: 1 }}>
            <b >ID:</b> {user._id}
          </Typography>
          <Typography sx={{ mb: 1 }}>
            <b >Name:</b> {user.name}/{user. role}
          </Typography>
          <Typography sx={{ mb: 1 }}>
            <b>Email:</b> {user.email}
          </Typography>
          <Typography sx={{ mb: 2 }}>
            <b>Phone:</b> {user.phoneNumber}
          </Typography>
  
          <Button variant="contained" fullWidth onClick={() => navigate(-1)}>
           Back
          </Button>
        </Paper>

       

      </Box>
    );
  };
  
  export default UpdateUser;