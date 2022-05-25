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
          <a id="connect" href="/" target="_blank">
            Connect
          </a>
        </li>
        <li>
          <a href="/" target="_blank">
            About
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
