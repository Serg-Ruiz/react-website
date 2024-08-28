import React from 'react';
import { NavLink } from "react-router-dom";
import './Bottombar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import logo from '../../assets/logo.png';

export default function Bottombar() {
    return (
        <footer className="bottom-bar">
            <NavLink to="/" className='logo-link'>
                <img src={logo} alt="Logo" className='logo' />
            </NavLink>
            <p className='made-by'>Made and designed by Sergio Ruiz</p>
            <div className="icon-links">
                <a href="https://www.linkedin.com/in/sergio-ruiz-8b6b2725b/" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="LinkedIn" title="LinkedIn">
                    <FontAwesomeIcon icon={faLinkedin} className="icon" size="2x" color='white'/>
                </a>
                <a href="https://github.com/Serg-Ruiz" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="GitHub" title="GitHub">
                    <FontAwesomeIcon icon={faGithubSquare} className="icon" size="2x" color='white' />
                </a>
            </div>
            
        </footer>
    );
}
