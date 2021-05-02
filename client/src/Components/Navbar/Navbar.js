import React from 'react'
import logo from '../../Assets/logo.png'
import './Navbar.css'
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                {/* <img className="logo" src={logo} alt="logo" /> */}
                            <a href="#"> Logo</a>
                            <nav>
                                <ul className="nav__links">
                                    <li><a href="#"> Liste Of contacts </a> </li>
                                    <li><a href="#"> Profile </a> </li>
                                    <li><a href="#"> About </a> </li>
                                </ul>
                            </nav>
                            <div className="btns">
                            <button className="button">login</button>
                            <button className="button">sign in </button>
                            </div>
            </div>
            
        </div>
    )
}

export default Navbar
