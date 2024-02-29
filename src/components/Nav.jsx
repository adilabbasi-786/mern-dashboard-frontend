import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavLogo from "../assets/svgviewer-output.svg";
const Nav = () => {
  const auth = localStorage.getItem("user");

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/signupform");
    console.warn("logout");
  };

  return (
    <div>
      <img
        src={NavLogo}
        alt="logo"
        style={{
          width: 45,
          float: "left",
          background: "#518cd8",
          height: 50,
        }}
      />
      <div
        style={{
          background: "#518cd8",
          height: 50,
          display: "flex",
          justifyContent: "space-between",
          padding: 5,
        }}
      >
        <div>
          <h1 style={{ color: "white" }}>E-Dashboard</h1>
        </div>
        <div>
          <ul className="nav-ul">
            <li>
              <Link to="/">Products</Link>
            </li>
            <li>
              <Link to="/add">Add Product</Link>
            </li>

            <li>
              <Link to="/update">Update Product</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>

            {auth ? (
              <Link to="/signupform" onClick={logout}>
                Logout ({JSON.parse(auth).user})
              </Link>
            ) : (
              <>
                <li>
                  <Link to="/signupform">Sign Up</Link>
                </li>

                <li>
                  <Link to="/login">Login</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
