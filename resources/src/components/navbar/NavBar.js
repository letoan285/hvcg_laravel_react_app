import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="nav-bar">
            <ul>
                <li>
                    <Link to="/">Home</Link> |
                    <Link to="products">Products</Link> |
                    <Link to="contact">Contact Us</Link> |
                    <Link to="about-us">About Us</Link>
                </li>
            </ul>
        </div>
    );
}
export default NavBar;