import React from 'react';
import './resume.css';

export default function Resume() {
    return (
        <div className="resume">
            <div className="section">
                <h2>Sergio Ruiz</h2>
                <p className="middle-info">
                    Aurora, IL 60506 • 
                    <a href="mailto:sergioruiz@fullstackprogrammer.net">sergioruiz@fullstackprogrammer.net</a> • 
                    331-302-7299 • 
                    <a href="https://code.fullstackprogrammer.net/s321w1" target="_blank" rel="noopener noreferrer">https://code.fullstackprogrammer.net/s321w1</a>
                </p>
            </div>
            <div className="section">
                <h2>Education</h2>
                <div className="education-container">
                    <div className="education-item">
                        <div>
                            <strong>Waubonsee Community College</strong>
                            <p>Sugar Grove, IL</p>
                            <p>Associate of Science in Computer Science</p>
                        </div>
                        <p>May 2024</p>
                    </div>
                </div>
                <p>Relevant Coursework: Systems Programming, Data Structures and Algorithms, Artificial Intelligence, Introduction to Probability, Multivariable Calculus</p>
                <div className="education-container">
                    <div className="education-item">
                        <div>
                            <strong>Northern Illinois University</strong>
                            <p>Dekalb, IL</p>
                            <p>Bachelor of Science in Computer Science</p>
                        </div>
                        <p>May 2026</p>
                    </div>
                </div>
                <p>Relevant Coursework: Systems Programming, Data Structures and Algorithms, Artificial Intelligence, Introduction to Probability, Multivariable Calculus</p>
            </div>
            <div className="section">
                <h2>Technical Skills & Projects</h2>
                    <strong>Programming:</strong> <p>C, C++, Java, Python, Html, Css, Docker, Git, React</p>
                <div className="project">
                    <h3>CS 145 Final Project</h3>
                    <p>Implemented a basic rule-based firewall for programmable network switches using P4 programming language. Allows blocking network traffic based on 5-tuple, including variable-length IP ranges.</p>
                </div>
                <div className="project">
                    <h3>CS 50 Final Project</h3>
                    <p>Created a Google Chrome extension to replace website images with pictures of animals. Implemented with HTML, CSS, and JavaScript.</p>
                </div>
            </div>
        </div>
    );
}
