import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

  const handleLogin = async () => {
    console.log("emai,password", email, password);
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    if (result) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    } else {
      alert("please enter corrct details");
    }
  };

  return (
    <div className="login">
      <h1 style={{ marginLeft: 130, color: "orange" }}>Login</h1>
      <input
        type="text"
        placeholder="Enter email"
        className="input-box"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <input
        type="password"
        placeholder="Enter password"
        className="input-box"
        onChange={(e) => setPassowrd(e.target.value)}
        value={password}
      />

      <button type="button" onClick={handleLogin} className="signup-button">
        Login
      </button>
    </div>
  );
};

export default Login;
