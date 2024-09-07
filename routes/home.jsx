import './home.css';
import { ReactTyped } from "react-typed";
import html from '../src/assets/html.svg'
import javascript from '../src/assets/javascript.svg'
import reactlogo from '../src/assets/react.svg'
import python from '../src/assets/python.svg'
import java from '../src/assets/java.svg'
import css from '../src/assets/css.svg'
import git from '../src/assets/git.svg'
import docker from '../src/assets/docker.svg'
import clogo from '../src/assets/c++.svg'
import profile from '../src/assets/profile.jpg'

export default function Home() {
    return (
        <div className = "main">
            <h1>
                Hello, My Name Is Sergio. I Am Your Next{" "}
                <ReactTyped
                    strings={["Intern", "Front-End Developer", "Back-End Developer"]}
                    typeSpeed={100}
                    loop
                    backSpeed={20}
                    cursorChar="|"
                    showCursor={true}
                />
            </h1>
            <section className="about-us">
                <div className="about">
                    <img src={profile} className="pic" alt="Profile Picture" />
                    <div className="text">
                        <h2>About Me</h2>
                        <h5>Front-end Developer & Back-end Developer</h5>
                        <p>
                        Hey there! I'm currently pursuing a Bachelor's degree in Computer Science at Northern Illinois University. I'm fueled by a deep passion for all things tech, and I thrive on the challenges that come with both backend 
                        and frontend development. Whether I'm crafting elegant algorithms or designing intuitive user interfaces, I'm always eager to dive into the world of computer science and create innovative solutions.
                        </p>
                        <div className="data">
                            <a href="mailto:sergioruiz@fullstackprogrammer.net" className="hire">Hire Me</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="skills">
                <div>
                    <h1>Skills</h1>
                    <ul className="skills-list">
                        <li>
                            <img src={html} alt="html" className='logo' />
                        </li>
                        <li>
                            <img src={javascript} alt="javascript" className='logo' />
                        </li>
                        <li>
                            <img src={reactlogo} alt="react=logo" className='logo' />
                        </li>
                        <li>
                            <img src={python} alt="python" className='logo' />
                        </li>
                        <li>
                            <img src={clogo} alt="cpp logo" className='logo' />
                        </li>
                        <li>
                            <img src={java} alt="java" className='logo' />
                        </li>
                        <li>
                            <img src={git} alt="git" className='logo' />
                        </li>
                        <li>
                            <img src={docker} alt="docker" className='logo' />
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
