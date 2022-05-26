import React from "react";
import "./Navbar.css";
import {NavLink} from "react-router-dom"
import {signOut} from "firebase/auth"
import {auth} from "../../firebase-config";
import {useNavigate} from "react-router-dom"


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
  const logoutStyle = {
    backgroundColor: "purple",
    padding:"2px 5px",
    textDecoration: "none",
    color:"white",
    borderRadius:"2px",
    boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;"
  }
  const navigate = useNavigate();
  
 
    const handleLogout = async()=> {
      await signOut(auth)
      }
    const logout = ()=>{
      navigate("/Home")
    }
  
  
  return (
    <div className="navbar">      
      <div className="nav">
      <NavLink to="/" exact style={linkStyles} activeStyle={{
          background: "darkblue",
          color: "white"
        }}></NavLink>
      <NavLink to="/Home" exact style={linkStyles}
        activeStyle={{
          background: "purple",
          color: "white"
        }}>Home</NavLink>
      <NavLink to="/Form" exact style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}>Connect</NavLink>
      <NavLink to="/" exact style={logoutStyle}
        onClick={()=>{handleLogout();logout()}}>Signout</NavLink>  
      </div>  
  
    </div>
    
  );
}

export default Navbar;
