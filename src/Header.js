import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {

    const navigate=useNavigate();

    const onSignout=()=>{
        localStorage.removeItem('user')
        navigate('/signin')
    }
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
    <Link className="btn btn-sm btn-warning m-1" to='/signin '>Sign In</Link>
    <Link className="btn btn-sm btn-primary m-1" to='/signup'>Sign Up</Link>
    <button className="btn btn-sm btn-danger m-1" onClick={onSignout} >Sign out</button>

    </div>
    </nav>
}

export default Header;