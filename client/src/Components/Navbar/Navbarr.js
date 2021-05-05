/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../JS/Actions/user";
import logo from "../../Assets/logo.png";
import "./Navbar.css";

const Navbarr = () => {
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const user=useSelector((state)=>state.userReducer.user)
  const dispatch = useDispatch();

  return (
    <div className="header2 bg-success-gradiant">
      <div class="">
        <nav className="navbar navbar-expand-lg h2-nav">
          <img
            className="logo"
            src={logo}
            alt="logo"
            style={{ width: "100px", margin: "0px 20px" }}/>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#header2"
            aria-controls="header2"
            aria-expanded="false"
            aria-label="Toggle navigation">
            {" "}
            <span className="icon-menu" />{" "}
          </button>
          <div className="collapse navbar-collapse hover-dropdown" id="header2">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              {
                isAuth? 
                <div className="privateroute">
                  <li className="nav-item active">
                    <a className="nav-link" href="/Listcontacts"> Liste Of contacts 
                    </a>
                  </li>
                  <li className="nav-item">
                <a className="nav-link" href="/Account"> Profile
                </a>
              </li>
                </div>
              : null
              }
              
              <li className="nav-item">
                <a className="nav-link" href="/contact"> Contact us
                </a>
              </li>
            </ul>

            {isAuth ? (
                <ul className="navbar-nav ml-auto">
                {isAuth && !(user && user.role===0)?
                  <Link to="/Admindashboard">
                  <li className="nav-item">
                    <a className="btn rounded-pill btn-dark py-2 px-4" >dashboard</a>
                  </li>
                  </Link>: null}
                <Link  to="/" onClick={() => dispatch(logout())}>
                  <li className="nav-item">
                    <a className="btn rounded-pill btn-dark py-2 px-4" >logout</a>
                  </li>
                </Link>
                <h6>welcome <span className="namecurrent"><br/>{user && user.name}</span></h6>
              </ul>
            ) : (
              <ul className="navbar-nav ml-auto">
                <Link to="/signin">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">Login</a>
                  </li>
                </Link>

                <Link to="/signup">
                  <li className="nav-item">
                    <a className="btn rounded-pill btn-dark py-2 px-4" href="#">Sign up</a>
                  </li>
                </Link>
              </ul>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbarr;
