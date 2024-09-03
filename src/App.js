import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import AllCategories from "./Pages/AllCategories/AllCategories";
import SinglePostPage from "./Pages/Single Post Page/SinglePostPage";
import SearchResult from "./Pages/SearchResult/SearchResult";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ maxWidth: "90%", margin: "0 auto" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-categories" element={<AllCategories />} />
          <Route path="/post/:id" element={<SinglePostPage />} />
          <Route path="/search-results" element={<SearchResult />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
