import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.body.classList.add("home");
    return () => document.body.classList.remove("home"); // Cleanup when leaving
  }, []);

  return <h2>Welcome to My Personal Website</h2>;
};

export default Home;
