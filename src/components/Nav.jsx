import React from "react";
import logo  from '../logo.svg'
import { Link } from "react-router-dom";

export default function Nav(){
    return (
    <div className="Nav">
            <Link to="/"><img src={logo} className="nav--logo" alt="logo" /></Link>
            <Link to="/" className="nav--link">Home</Link>
            <Link to="/about" className="nav--link">About</Link>
            <Link to="/features" className="nav--link">Features</Link>
            <Link to="/faqs" className="nav--link">FAQs</Link>
            <div id="nav--signin" className="nav--signin"></div>
            <button id="nav--signout" className="nav--signout" hidden = "true">Sign Out</button>
    </div>)
}