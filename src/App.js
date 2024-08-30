import React from 'react'
import './App.css';
// import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import AllCategories from './Pages/AllCategories'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
export default function App() {
  return (
    <BrowserRouter>
    <div style={{maxWidth: "90%", margin:"0 auto"
      
    }}>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/all-categories' element={<AllCategories />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}