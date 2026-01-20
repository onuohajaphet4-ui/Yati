import { useState } from 'react'
import './App.css'
import {Route,Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Info from './Pages/Info'
import Gallery from './Pages/Gallery'
import Shop from './Pages/Shop'
import Log from './Pages/Login'
import Admin from './Pages/Adminn'
import Customer from './Pages/Dashbord/Custormer'
import Protect from './Component/Protect'
import Pro from './Component/Pro'
import Success from './Component/Success'
import Register from './Pages/Register'
import Order  from './Pages/Dashbord/Order'
import User  from './Pages/Dashbord/User'
import Product  from './Pages/Dashbord/Product'
import Forgot from './Pages/Forggotton'
import Reset from './Pages/Reset'
import Gal from './Dash/Gallery'
function App() {
  
  return (
    <>
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/Gal' element = {<Gal/>}/>
      <Route path='/reset-password/:token' element = {<Reset/>}/>
      <Route path='/forgot' element = {<Forgot/>}/>
      <Route path='/order' element = {<Order/>}/>
      <Route path='/user' element = {<User/>}/>
      <Route path='/product' element = {<Product/>}/>
      <Route path='/oauth-success' element = {<Success/>}/>
      <Route path='/register' element = {<Register/>}/>
      <Route path='/log' element = {<Log/>}/>
      <Route path='/info' element = {<Info/>}/>
      <Route path='/gallary' element = {<Gallery/>}/>
      <Route path='/book' element = {<Shop/>}/>
      <Route path='/admin' element = {<Protect> <Admin/> </Protect>}/>
      <Route path='/customer' element = {<Pro> <Customer/> </Pro>}/>
    </Routes>
      
      
    </>
  )
}

export default App
