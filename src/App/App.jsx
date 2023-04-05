import React from 'react'
import Home from '../Home/Home'
import NavBar from '../NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import News from '../News/News'

export default function App() {
  return (
    <div>
     
      <NavBar/>
      
    
      <Routes>
      <Route path='/' element={<Home/>} />

<Route path='home' element={<Home/>} />
{/* <Route path='news' element={<News/>} /> */}

      </Routes>
   
    </div>
  )
}
