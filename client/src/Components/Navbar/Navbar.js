/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";
import { logout } from "../../JS/Actions/user";
import "./Navbar.css";
const Navbar = () => {
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const user = useSelector((state) => state.userReducer.user);
    const Dispatch =useDispatch()
  return (
    <div className="navbar">
      <div className="container">
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />

      </Link>
        {/* <a href="/"> Logo</a> */}
        <nav>
          <ul className="nav__links">
            <li>
              <a href="/Listcontacts"> Liste Of contacts </a>{" "}
            </li>
            <li>
              <a href="/Account"> Profile </a>{" "}
            </li>
            <li>
              <a href="/contact"> Contact us  </a>{" "}
            </li>
          </ul>
        </nav>
        {isAuth ? (
          <div>
            <h5>
              Welcome <span className="name">{user && user.name}</span>
            </h5>
            <Link to="/" onClick={() => Dispatch(logout())}>
              {" "}
              <a href="#" className="btn-area">
                Logout
              </a>
            </Link>
          </div>
        ) : (
          <div className="btns">
            <Link to="/signup">
              <button className="button">Signup</button>
            </Link>
            <Link to="/signin">
              <button className="button">sign in </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
