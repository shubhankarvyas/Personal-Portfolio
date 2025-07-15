import React from 'react';

const Header = () => {
    return (
        <div id="header">
            <div className="container">
                <nav>
                    <div className="logo"><span id="s">S</span>hubhankar.</div>
                    <ul id="sidemenu">
                        <li><a href="#header">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
            <div className="header-text">
                <p>Cloud Automation & Full-Stack Developer</p>
                <h1>Hi, I'm <span>Shubhankar vyas</span></h1>
            </div>
        </div>
    );
};

export default Header;