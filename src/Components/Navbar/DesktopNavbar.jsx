import React from 'react';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import logo from '../../assets/logo.png';
import './Navbar.css';

export default function DesktopNavbar() {
    return (
        <div>
            <nav className='navbar' role="navigation" aria-label="main navigation">
                <NavLink to="/" className='logo-link'>
                    <img src={logo} alt="Logo" className='logo' />
                </NavLink>
                <ul className='nav-links'>
                    <li><NavLink to="/" activeClassName="active" exact>Home</NavLink></li>
                    <li><NavLink to="/resume" activeClassName="active">Resume</NavLink></li>
                    <li><NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink></li>
                    <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
                </ul>
                <a href="https://www.linkedin.com/in/sergio-ruiz-8b6b2725b/" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="LinkedIn" title="LinkedIn">
                    <FontAwesomeIcon icon={faLinkedin} className="icon" size="2x" color='white'/>
                </a>
                <a href="https://github.com/Serg-Ruiz" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="GitHub" title="GitHub">
                    <FontAwesomeIcon icon={faGithubSquare} className="icon" size="2x" color='white' />
                </a>
            </nav>
        </div>
    );
}
