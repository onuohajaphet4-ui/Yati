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
import Favorite  from './Pages/Dashbord/Favorite'
import Profile  from './Pages/Dashbord/Profile'
import Forgot from './Pages/Forggotton'
import Reset from './Pages/Reset'
import Gal from './Dash/Gallery'
import Productt from './Dash/Product'
import Users from './Dash/Users'
import Section from './Pages/Section'
import Shopp from './Dash/Shop'
import Update from './Dash/Edit'
import Updatepro from './Pages/Dashbord/Editpro'
import ProductD from './Pages/Shopdetail'
import Rate from './Pages/Rate'
import Cart from './Pages/Cart'
import View from './Pages/Viewuser'
import Form from './Pages/Deliveryform'
import Pay from './Component/Taxrate'
import Payment from './Pages/Payment-success'
import Orderr from './Dash/Order'
import AdminGal from './Dash/AdminGallery'
function App() {
  
  return (
    <>
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/gallry' element = {<AdminGal/>}/>
      <Route path='/pay' element = {<Pay/>}/>
      <Route path='/orderr' element = {<Orderr/>}/>
      <Route path='/payment-success' element = {<Payment/>}/>
      <Route path='/form' element = {<Form/>}/>
      <Route path='/users/:id' element = {<View/>}/>
      <Route path='/rate/:id' element = {<Rate/>}/>
      <Route path='/products/edit/:id' element ={<Update/>}/>
      <Route path='/profile/edit/:id' element ={<Updatepro/>}/>
      <Route path='/shopp' element = {<Shopp/>}/>
      <Route path='/users' element = {<Users/>}/>
      <Route path='/gal' element = {<Gal/>}/>
      <Route path='/book/:id' element = {<ProductD/>} />
      <Route path='/productt' element = {<Productt/>}/>
      <Route path='/reset-password/:token' element = {<Reset/>}/>
      <Route path='/forgot' element = {<Forgot/>}/>
      <Route path='/order' element = {<Order/>}/>
      <Route path='/favorite' element = {<Favorite/>}/>
      <Route path='/profile/:id' element = {<Profile/>}/>
      <Route path='/oauth-success' element = {<Success/>}/>
      <Route path='/register' element = {<Register/>}/>
      <Route path='/log' element = {<Log/>}/>
      <Route path='/info' element = {<Info/>}/>
      <Route path='/gallary' element = {<Gallery/>}/>
      <Route path='/book' element = {<Shop/>}/>
      <Route path='/cart' element = {<Cart/>}/>
      <Route path='/book/section/:section' element = {<Section/>}/>
      <Route path='/admin' element = {<Protect> <Admin/> </Protect>}/>
      <Route path='/customer' element = {<Pro> <Customer/> </Pro>}/>
    </Routes>
      
      
    </>
  )
}

export default App
