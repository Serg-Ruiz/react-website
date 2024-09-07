import React from 'react';
import { Link } from 'react-router-dom';
import './portfoliopage.css';
import card_one from '../src/assets/card_one.png';
import card_two from '../src/assets/card_two.png';

export default function portfoliopage () {

    return (
        <div class="card-list">
           <Link to="/portfolio/card-one" className="card-item">
                <img src={card_one} alt="Card One" />
                <span className="stack_used"> HTML, CSS, Javascript, Npm</span>
                <h3>Personal Portfolio Website Made With React</h3>
           </Link>          
           <Link to="/portfolio/card-two" className="card-item">
                <img src={card_two} alt= "Card Two"/>
                <span className="stack_used">Python, Socket Programming</span>
                <h3>Python Terminal Chat Program</h3>
           </Link>
        </div> 

  )
}
