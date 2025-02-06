import React from "react";
import "../App.css"; // Styles

const Footer = () => {
  return (
    <footer>
      <p>© {new Date().getFullYear()} Aly Brewer. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;