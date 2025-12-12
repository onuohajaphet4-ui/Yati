import { useState } from 'react'
import './App.css'
import {Route,Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Info from './Pages/Info'
import Gallery from './Pages/Gallery'
import Shop from './Pages/Shop'

function App() {
  
  return (
    <>
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/info' element = {<Info/>}/>
      <Route path='/gallary' element = {<Gallery/>}/>
      <Route path='/book' element = {<Shop/>}/>
    </Routes>
      
      
    </>
  )
}

export default App
