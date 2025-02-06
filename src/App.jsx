import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects"; 
import Photos from "./Photos"; 
import Contact from "./Contact"; 
import "./App.css";


const App = () => {
  return (
    <Router>
      <nav>
        {/* Left side - Home button */}
        <div className="nav-left">
          <Link to="/" className="nav-btn">Aly Brewer</Link>
        </div>

        {/* Right side - Other nav buttons */}
        <div className="nav-right">
          <Link to="/about" className="nav-btn">About</Link>
          <Link to="/projects" className="nav-btn">Projects</Link>
          <Link to="/photos" className="nav-btn">Photos</Link>
          <Link to="/contact" className="nav-btn">Contact</Link>
        </div>
      </nav>

      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};


export default App;
