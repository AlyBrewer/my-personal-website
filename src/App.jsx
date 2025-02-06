import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Photos from "./pages/Photos";
import Contact from "./pages/Contact";
import "./App.css";

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/projects" element={<Layout><Projects /></Layout>} />
          <Route path="/photos" element={<Layout><Photos /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
        </Routes>
      </Router>
    );
};

export default App;
