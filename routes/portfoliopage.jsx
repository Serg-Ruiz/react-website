import React from 'react';
import { Link } from 'react-router-dom';
import './portfoliopage.css';
import card_one from '../src/assets/card_one.png';

export default function portfoliopage () {

    return (
        <div class="card-list">
           <Link to="/portfolio/card-one" className="card-item">
                <img src={card_one} alt="Card One" />
                <span className="stack_used"> HTML, CSS, Javascript, Npm</span>
                <h3>Personal Portfolio Website Made With React</h3>
            </Link>
        </div>
    )
}