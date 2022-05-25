import React from "react";
import "./Navbar.css";
import {NavLink} from "react-router-dom"

function Navbar() {
  const linkStyles = {
    display: "inline-flex",
    justifyContent: "flex-end",
    padding: "5px",
    margin: "0 20px",
    textDecoration: "none",
    color: "purple",
    fontWeight: "600"
  };
  return (
    <div>      
      <NavLink to="/" exact style={linkStyles} activeStyle={{
          background: "darkblue",
          color: "white"
        }}>Login</NavLink>
      <NavLink to="/Home" exact style={linkStyles}
        activeStyle={{
          background: "purple",
          color: "white"
        }}>Home</NavLink>
      <NavLink to="/Form" exact style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}>Connect</NavLink>
      <NavLink to="/" exact style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}>About</NavLink>        
    </div>
  );
}

export default Navbar;
