import { useState } from 'react'
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Work from "./pages/Work.jsx";
import Shop from "./pages/Shop.jsx";
import Navbar from "./componenets/Navbar.jsx";

function App() {
  

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </div>
  )
}

export default App
