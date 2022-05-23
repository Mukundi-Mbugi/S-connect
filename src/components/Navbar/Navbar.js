import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="/" target="_blank">
            Home
          </a>
        </li>
        <li>
          <a href="/" target="_blank">
            contact
          </a>
        </li>
        <li>
          <a href="/" target="_blank">
            about
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
