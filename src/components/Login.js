import React, { useState } from "react";
import image from "../virtual-intro-classroom-blog-header.png";
import { auth } from "../firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupError, setSignupError] = useState("");
  const [loginError, setLoginError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      navigate("/Home");
    } catch (error) {
      setSignupError(error.message);
    }
  };

  const handleLogin = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      navigate("/Home");
    } catch (error) {
      setLoginError(error.message);
    }
  };
  return (
    <div className="home">
      <div className="hero">
        <h2>S-connect</h2>
        <p>bringing students together</p>
      </div>

      <div className="form_div">
        <div className="sign_form">
          <input
            type="email"
            placeholder="your email address"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="error_div">
          <p className="error">{loginError}</p>
          <p className="error">{signupError}</p>
        </div>
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
            <button onClick={handleSignup}>Sign up</button>
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
