import React from "react";
import "./App.css"
import Home from "./Components/Home";
import About from "./Components/About";
import Profile from "./Components/Profile";
import Education from "./Components/Education";
import Navbar from "./Components/Navbar";
import { Routes,Route } from "react-router-dom";
let App=()=>{


  return(
    <div>
      <Navbar />
      <Routes>
     <Route path="/" element={<Home/>}></Route>
     <Route path="/About" element={<About/>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>
      <Route path="/Education" element={<Education/>}></Route>
      </Routes>
      
    </div>
  )
}

export default App;