import React from "react"
import "./Navbar.css"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Navbar = () => {


    return (
        <div className="Navbar">
            <div className="Logo">
                <h2>Trip Planner</h2>
            </div>
            <div className="Links">
            <Link to="/" className="Link"><h2>Home</h2></Link>
            <Link to="/all-destinations" className="Link"><h2>All Destinations</h2></Link>
            </div>
            
        </div>
    )
}

export default Navbar;