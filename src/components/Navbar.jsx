import React from "react";
import { Link } from "react-router-dom";
import "../App.css"; // Import styles 

const Navbar = () => {
  return (
    <nav>
      <div className="nav-left">
        <Link to="/" className="nav-btn">Aly Brewer</Link>
      </div>
      <div className="nav-right">
        <Link to="/about" className="nav-btn">About</Link>
        <Link to="/projects" className="nav-btn">Projects</Link>
        <Link to="/photos" className="nav-btn">Photos</Link>
        <Link to="/contact" className="nav-btn">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;