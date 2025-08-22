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
                            Results-driven B.Tech student in Internet of Things with strong foundations in object-oriented programming, data structures, and algorithms. Skilled in building full-stack web applications using React, Node.js, Express, and Firebase. Experienced in deploying scalable solutions on Azure and GCP with Docker and GitHub Actions. Adept at RESTful API development, CI/CD pipelines, and Agile development practices. Passionate about problem-solving, automation, and delivering high-performance code.
                        </p>
                        <div className="tab-titles">
                            <p
                                className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`}
                                onClick={() => handleTabClick('skills')}
                            >
                                Skills
                            </p>
                            <p
                                className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`}
                                onClick={() => handleTabClick('experience')}
                            >
                                Experience
                            </p>
                            <p
                                className={`tab-links ${activeTab === 'achievements' ? 'active-link' : ''}`}
                                onClick={() => handleTabClick('achievements')}
                            >
                                Achievements
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
                                <li><span>Languages:</span><br /> JavaScript, TypeScript, Python, Java, C++</li>
                                <li><span>Frontend:</span><br /> React, TailwindCSS, HTML5, CSS3</li>
                                <li><span>Backend:</span><br /> Node.js, Express, REST APIs, JWT, EJS</li>
                                <li><span>DevOps/Cloud:</span><br /> GitHub Actions, Docker, Azure, GCP, Firebase, Vercel, Supabase</li>
                                <li><span>Databases:</span><br /> Firestore, MongoDB, PostgreSQL, MySQL</li>
                                <li><span>Testing:</span><br /> Jest, Mocha, Postman</li>
                                <li><span>Concepts:</span><br /> DSA, OOP, CI/CD, Agile, System Design, Version Control (Git)</li>
                            </ul>
                        </div>
                        <div className={`tab-contents ${activeTab === 'experience' ? 'active-tab' : ''}`}>
                            <ul>
                                <li>
                                    <span>Full-Stack Developer Intern — CrowdWisdomTrading (Remote)</span><br />
                                    Built and deployed 6+ automation workflows using n8n, Slack, WhatsApp APIs, and Google Sheets.<br />
                                    Developed scalable frontend components with React and TailwindCSS for optimal UX on all screen sizes.<br />
                                    Automated Azure VM deployments using Docker and GitHub Actions ensuring zero-downtime releases.
                                </li>
                            </ul>
                        </div>
                        <div className={`tab-contents ${activeTab === 'achievements' ? 'active-tab' : ''}`}>
                            <ul>
                                <li><span>GATE 2025 Qualified</span><br />National-level engineering entrance (Data Science & AI)</li>
                                <li><span>AIR 90 – ANICAT 2025</span><br />Top 100 in national aptitude test by Naukri.com</li>
                                <li><span>Hackathon Finalist – Haksagon 2025</span><br />Ranked in top 10 out of 1000+ teams</li>
                                <li><span>Research Publications</span><br />Presented papers at ISCMCTR 2025 and CTSEM 2025 (AI + IoT)</li>
                                <li><span>Certifications:</span><br />Google Data Analytics (Coursera), Industry 4.0 – NPTEL (IIT Kharagpur)</li>
                            </ul>
                        </div>
                        <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`}>
                            <ul>
                                <li><span>Madhav Institute of Technology and Science (MITS), Gwalior</span><br />Bachelor of Technology in Internet of Things (CGPA: 7.8 / 10)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;