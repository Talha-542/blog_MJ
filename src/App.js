import React from "react" 
import "./App.css" 
import Navbar from "./Components/Navbar/Navbar" 
import Home from "./Pages/Home" 
import AllCategories from "./Pages/AllCategories/AllCategories" 
import { BrowserRouter, Routes, Route } from "react-router-dom" 
import SinglePostPage from "./Pages/Single Post Page/SinglePostPage" 
export default function App() {
  return (
    <BrowserRouter>
      <div style={{ maxWidth: "90%", margin: "0 auto" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-categories" element={<AllCategories />} />
          <Route path="/post/:id" element={<SinglePostPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  ) 
}
