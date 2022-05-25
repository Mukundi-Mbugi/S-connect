import React, { useState } from "react";
import image from "../virtual-intro-classroom-blog-header.png";
import {auth} from "../firebase-config";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  
} from "firebase/auth";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupError, setSignupError] = useState("");
  const [loginError, setLoginError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const [user, setUser] = useState({})

  // onAuthStateChanged(auth, (currentUser)=>{
  //     setUser(currentUser)
  // })

  const handleSignup = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      setSignupError(error.message);
    }
  };
  const handleLogout = async()=> {
    await signOut(auth)
  }
  const handleLogin = async()=>{
      try {
          const user = await signInWithEmailAndPassword(auth,email,password)
          console.log(user);
      } catch (error) {
          setLoginError(error.message);          
      }     
  }
  return (
    <div className="home">
      <div className="hero">
        <h2>S-connect</h2>
        <p>bringing students together</p>
      </div>

      <div className="sign_form">
        <input
          type="email"
          placeholder="your email address"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="error">{signupError}</p>
        <input
          type="password"
          placeholder="Enter password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="error">{loginError}</p>
      </div>
      <div className="classbtn">
        {hasAccount ? (
          <>
            <button onClick={handleLogin}>Sign in</button>
            <p id="sign">
              Don't have an account ?{" "}
              <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span>
            </p>
          </>
        ) : (
          <>
            <button onClick={handleSignup}>
              Sign up
            </button>
            <p>
              Have an account ?{" "}
              <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
            </p>
          </>
        )}
      </div>

      <div className="homeImage">
        <img src={image} alt="student" />
      </div>
    </div>
  );
}

export default Login;
