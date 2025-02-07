import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.body.classList.add("home");
    return () => document.body.classList.remove("home"); // Cleanup when leaving
  }, []);

  return (
    <div className="home">
      <div className="wrapper">
      {/* Left Side: Main Content */}
      <div className="content">
        <h1>Hey, I'm Alyssa! I design and build cool things.</h1>
        <p className="subtext">Aspiring Engineer & Designer hoping to design tech for a brighter future :)</p>
      </div>

      {/* Right Side: Projects Box */}
      <div className="projects-box">
        <h2>Projects</h2>
        <p>Check back for more updates!</p>
        <a href="/projects" className="btn">View Projects</a>
      </div>
    </div>
    </div>
  );
  
  
};

export default Home;
