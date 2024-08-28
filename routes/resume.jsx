import React from 'react';
import './resume.css';

export default function Resume() {
    return (
        <div className="resume">
            <div className="section">
                <h2>Sergio Ruiz</h2>
                <p className="middle-info"> 
                    <a href="mailto:sergioruiz@fullstackprogrammer.net">sergioruiz@fullstackprogrammer.net</a> • 
                    (815) 570-9302 • 
                    <a href="https://github.com/Serg-Ruiz" target="_blank" rel="noopener noreferrer"> https://github.com/Serg-Ruiz</a>
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
                        <p>Expected December 2024</p>
                    </div>
                </div>
                <p>Relevant Coursework: Java Programming I & II, C++ Programming I & II, Javascript Programming, Web Development With HTML, Precalculus I & II, Calculus I</p>
                <div className="education-container">
                    <div className="education-item">
                        <div>
                            <strong>Northern Illinois University</strong>
                            <p>Dekalb, IL</p>
                            <p>Bachelor of Science in Computer Science</p>
                        </div>
                        <p>Expected May 2026</p>
                    </div>
                </div>
                <p>Relevant Coursework:</p>
            </div>
            <div className="section">
                <h2>Technical Skills & Projects</h2>
                    <strong>Programming:</strong> <p>C, C++, Java, Python, Html, Css, Docker, Git, React</p>
                <div className="project">
                    <h3>Portfolio Website Created In React</h3>
                    <p>Created a portfolio website in react using HTML CSS and Javascript.</p>
                </div>
            </div>
        </div>
    );
}
