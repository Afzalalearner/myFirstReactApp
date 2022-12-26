import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return <nav className="navbar navbar-expand-lg bg-success">
     <div className="container">
        <Link className="navbar-brand" to='/'>My Website</Link>
        <div className="collapse navbar-collapse ">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/products">Products</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/users">Users</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/contact">Contact Us</Link></li>
            
            </ul>
        </div>

    </div>
    </nav>
}

export default Header;