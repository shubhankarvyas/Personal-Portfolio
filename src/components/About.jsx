import React, { useState } from 'react';

const About = () => {
    const [activeTab, setActiveTab] = useState('skills');

    const handleTabClick = (tabname) => {
        setActiveTab(tabname);
    };

    return (
        <div id="about">
            <div className="container">
                <div className="row">
                    <div className="about-col-1">
                        <img src="/image.jpeg" alt="Profile" />
                    </div>
                    <div className="about-col-2">
                        <h1 className="sub-title">About Me</h1>
                        <p>
                            Hi, I'm Shubhankar Vyas, a passionate web developer with a strong foundation in HTML, CSS, and JavaScript.
                            I hold a Bachelor's degree in Technology from Madhav Institute of Technology and Science. My journey in the
                            tech world began during my schooling at Kendriya Vidyalaya No.1, where I discovered my interest in coding.
                            I've honed my skills in data structures and algorithms through Java, and I'm currently expanding my knowledge
                            with a course in data analysis. I'm dedicated to creating user-friendly and visually appealing web experiences.
                        </p>
                        <div className="tab-titles">
                            <p
                                className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`}
                                onClick={() => handleTabClick('skills')}
                            >
                                Skills
                            </p>
                            <p
                                className={`tab-links ${activeTab === 'achivements' ? 'active-link' : ''}`}
                                onClick={() => handleTabClick('achivements')}
                            >
                                achivements
                            </p>
                            <p
                                className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`}
                                onClick={() => handleTabClick('education')}
                            >
                                Education
                            </p>
                        </div>
                        <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`}>
                            <ul>
                                <li><span>Web Developer:</span><br /> HTML, CSS, JavaScript</li>
                                <li><span>Data Structures and Algorithms:</span><br />Java</li>
                                <li><span>Data Analysis:</span><br /> Currently pursuing a course</li>
                            </ul>
                        </div>
                        <div className={`tab-contents ${activeTab === 'achivements' ? 'active-tab' : ''}`}>
                            <ul>
                                <li>
                                    <span>Web Developer (Freelance):</span><br />
                                    Developed responsive and user-friendly websites for clients across various industries.<br />
                                    Implemented custom features and functionality to meet client requirements.<br />
                                    Ensured cross-browser compatibility and optimized website performance.
                                </li>
                            </ul>
                        </div>
                        <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`}>
                            <ul>
                                <li><span>Bachelor of Technology in Internet Of Things:</span><br /> Madhav Institute of Technology and Science</li>
                                <li><span>High School Diploma:</span><br />Kendriya Vidyalaya No.1</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;