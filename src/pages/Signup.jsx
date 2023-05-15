import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase'
export default function Signup() {
  console.log("this is signup")
  const [email, setEmail] = useState("");
 
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [collageName, setCollageName] = useState("");

  function handleSignup(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth,email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
      
  }
  return (
    <div>
      <div className="navbar-register">Register</div>
      <div className="register-form">
        <div>
          <input
            data-testid="email"
            class="input-style-signup"
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div>
          <input
            data-testid="mobileNumber"
            class="input-style-signup"
            type="text"
            name="mobileNumber"
            id="mobileNumber"
            placeholder="Enter Mobilenumber"
            value={mobileNumber}
            onChange={(e) => {
              setMobileNumber(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            class="input-style-signup"
            type="text"
            name="user"
            id="user"
            placeholder="collage name"
            value={collageName}
            onChange={(e) => {
              setCollageName(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            data-testid="password"
            class="input-style-signup"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            data-testid="confirmPassword"
            class="input-style-signup"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder=" Confirm Password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            data-testid="submitButton"
            className="signup-button"
            type="submit"
            id="submitButton"
            value="Submit"
            onClick={handleSignup}
          />
        </div>
        <p className="loginPara">
          Aldready a user ?
          <Link data-testid="signinLink" id="signinLink" to="/signin">
            &nbsp; Login
          </Link>
        </p>
      </div>
    </div>
  );
}
