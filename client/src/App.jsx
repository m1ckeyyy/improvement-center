// import { useState } from "react";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Features from "./pages/Features";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";

import { Route, Routes } from "react-router-dom";

import "./App.css";
// on launch hacker animation every 7s
function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;