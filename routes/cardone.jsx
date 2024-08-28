import React from 'react';
import './cardone.css';

export default function CardOne() {
    return (
        <div className='page'>
            <h1 className='page-title'>How I Created My Website In React</h1>
            <h2>1. Understanding What React Is</h2>
                <p className='first-paragraph'>
                    The first step in building my website was to gain a comprehensive understanding of React.
                    I had previously heard of React and knew it was a framework for creating websites. After
                    conducting thorough research, I realized that React was not as complex as I had initially thought,
                    largely due to my background in JavaScript, HTML, and CSS from my college coursework.

                    Following additional online research, I decided to install Vite and began customizing the provided template to suit my requirements.
                    Interestingly, I have always found organization in HTML and CSS challenging. However, Vite seemed more intuitive to me, and the code felt more structured,
                    which facilitated a smoother and more efficient development process. This allowed me to concentrate on creating a functional and visually appealing website.

                    Initially, I was hesitant to delve into React because of its reputation online,
                    which led me to believe it would be significantly different from what I was accustomed to.
                    I was reluctant to invest time in learning something entirely new. However, upon discovering that React is a JavaScript library
                    , my apprehensions diminished, as I had previous experience working with C++ libraries. Once I started coding, I found that React
                    was not drastically different from the JavaScript I had learned in my coursework.
                </p>
            <h2>2. Building The Main Components</h2>
                <p className='second-paragraph'>
                    After researching react-dom and learning how to create different pages, I discovered that React allows for the creation of various reusable components.
                    I developed top and bottom navbar components to be displayed consistently across all pages. Once the navbars were complete, I ensured they were responsive,
                    adapting seamlessly to different screen sizes for tablets and phones. This approach of creating two main components and dynamically changing the content between
                    them felt significantly different from traditional HTML and CSS coding, and I appreciated the structured methodology. I then created pages for Home, Resume, Contact,
                    and Portfolio, each to be displayed between the top and bottom navbars.
                </p>
            <h2>3. Conclusion</h2>
                <p className='third-paragraph'>
                    Building a website with React was a rewarding experience. I utilized JavaScript, HTML, and CSS to create the foundational structure and design of the site, as I typically would.
                    Additionally, I integrated some React libraries to enhance the user experience with engaging animations. Ensuring the website was responsive for tablets and phones was a priority,
                    so I implemented various techniques to achieve a seamless experience across different devices. This project not only allowed me to showcase my technical skills but also demonstrated
                    the versatility and power of React in modern web development.
                </p>

            <div className='button-wrapper'>
              <a href="https://github.com/Serg-Ruiz/react-website" target="_blank" rel="noopener noreferrer" className="code-repo-button">
                  Code Repository
              </a>
            </div>
                
        </div>
    );
}
