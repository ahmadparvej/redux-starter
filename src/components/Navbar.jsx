import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {logout} from "../store/auth/auth.action.js";
const Navbar = () => {
  const isAuth = useSelector((state)=>state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLoginClick = () => {
    dispatch(logout())
    if (isAuth) {
      navigate("/login");
      // he wants to logout
    } else {
      // he wants to login
      navigate("/login");
    }
  };
  return (
    <div
      data-cy="navbar"
      style={{
        padding: "10px",
        display: "flex",
        gap: "20px",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <Link data-cy="navbar-home-link" to="/">
          Logo
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <button data-cy="navbar-login-logout-button" onClick={handleLoginClick}>
          {isAuth? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
