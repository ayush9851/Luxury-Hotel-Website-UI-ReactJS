import React, { useState } from "react";
import './Navbar.css'
import { Link } from "react-router-dom";

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <div className="navbar">

            <div className="logo">
                <img src="phoenix-logo.png" alt="" className="logo" />

            </div>
            <h4 className="logo-name">Ocean Pearl</h4>

            <ul className={open ? "nav-links show" : "nav-links"}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/booking">Booking</Link></li>
                <li><Link to="/dinein">Dine-In</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
            <ul className="log-sign">
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Signup</Link></li>
            </ul>
        </div>

    );
}

export default Navbar;
