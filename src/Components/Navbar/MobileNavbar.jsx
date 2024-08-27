import React, { useState } from 'react';
import { MdOutlineMenu, MdOutlineClose } from 'react-icons/md';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './Navbar.css'; // Assuming this file includes the provided CSS

export default function MobileNavbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    };

    return (
        <div>
            <nav className="navbar-mobile" role="navigation" aria-label="main navigation">
                <Link to="/" className="logo-link">
                    <img src={logo} alt="Logo" className="logo" />
                </Link>
                {click ? (
                    <MdOutlineClose className="HamburgerMenu" size="30px" color="white" onClick={handleClick} aria-label="Close menu" />
                ) : (
                    <MdOutlineMenu className="HamburgerMenu" size="30px" color="white" onClick={handleClick} aria-label="Open menu" />
                )}
            </nav>
            {click && (
                <div className="mobile-menu-overlay">
                    <MdOutlineClose className="HamburgerMenu CloseIcon" size="30px" color="white" onClick={handleClick} aria-label="Close menu" />
                    <ul className="mobile-menu">
                        <li><Link to="/" onClick={handleClick}>Home</Link></li>
                        <li><Link to="/resume" onClick={handleClick}>Resume</Link></li>
                        <li><Link to="/portfolio" onClick={handleClick}>Portfolio</Link></li>
                        <li><Link to="/contact" onClick={handleClick}>Contact</Link></li>
                    </ul>
                </div>
            )}
        </div>
    );
}
