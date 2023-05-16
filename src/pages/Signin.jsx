import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { UserContext } from "../context/UserProvider";

export default function Login() {
  const { setAuthUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  console.log("this is signin");
  function handleLogin(e) {
    e.preventDefault();
setLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        setAuthUser(userCredentials.user);
        setLoading(false);
        navigate("/majoring2.0.1");
        console.log("userCredentials", userCredentials);
      })
      .catch((error) => {
        setLoading(false);
        alert("Invalid email or password. Please try again./Network error");
        console.log("error", error);
      });
  }

  return (
    <div className="login-container">
      <div className="login-form">
        {loading ? (
          <h1 className="login-title"> Please wait.... ! </h1>
        ) : (
          <h1 className="login-title">Login</h1>
        )}
        <div className="login-box">
          <div>
            <input
              className="input-style-login"
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              className="input-style-login"
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="container-btn-para">
            <input
              className="login-btn"
              type="submit"
              id="loginButton"
              value="Login"
              onClick={handleLogin}
            />
            <p className="loginPara">
              &nbsp; New user/admin
              <Link id="signinLink" to="/majoring2.0.1/signup">
                &nbsp; Signup
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
