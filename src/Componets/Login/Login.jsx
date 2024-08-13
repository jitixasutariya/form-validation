import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  //Local Storage
  const handleLogin = (e) => {
    e.preventDefault();
    const loginUser = JSON.parse(localStorage.getItem("user"));
    if (
      input.email === loginUser.email &&
      input.password === loginUser.password
    ) {
      localStorage.setItem("loginUser", true);
      navigate("/");
    } else {
      alert("Wrong Email and Password");
    }
  };
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={input.email}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={input.password}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
            required
          />
        </div>
        <button type="submit">Login</button>
        <p style={{ fontSize: "20px" }}>
          Don't have account create account !
          <Link to="/signup">
            <u>Register Here</u>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
