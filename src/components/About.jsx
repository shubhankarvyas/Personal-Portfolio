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
                            Final-year B.Tech (IoT) student passionate about cloud automation, full-stack development, and building scalable systems with
                            low-code tools. GATE qualified and ranked AIR 90 in ANICAT 2025. Strong grasp of DevOps, automation workflows, and real-time
                            data platforms.
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
                                className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`}
                                onClick={() => handleTabClick('education')}
                            >
                                Education
                            </p>
                        </div>
                        <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`}>
                            <ul>
                                <li><span>Languages:</span><br /> Python, JavaScript, TypeScript, Java, C++</li>
                                <li><span>Frameworks:</span><br /> React, Node.js, Express, TailwindCSS, TensorFlow</li>
                                <li><span>DevOps/Tools:</span><br /> GitHub Actions, Docker, n8n, Firebase, Supabase, Vercel</li>
                                <li><span>Cloud/Platforms:</span><br /> Azure, GCP, Git, Arduino, Node-RED</li>
                            </ul>
                        </div>
                        <div className={`tab-contents ${activeTab === 'experience' ? 'active-tab' : ''}`}>
                            <ul>
                                <li>
                                    <span>Frontend & n8n Automation Intern – CrowdWisdomTrading (Remote)</span><br />
                                    Built dynamic n8n workflows for lead capture, task automation, and CRM sync.<br />
                                    Developed frontend UI in React + Tailwind; ensured responsiveness and reusability.<br />
                                    Managed full Azure VM lifecycle including snapshots, monitoring, and scaling.<br />
                                    Led CI/CD pipeline management using GitHub Actions and rollout automation.<br />
                                    Collaborated with team to align workflows to business KPIs using Agile.
                                </li>
                            </ul>
                        </div>
                        <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`}>
                            <ul>
                                <li><span>MITS, Gwalior</span><br />B.Tech in Internet of Things CGPA: 7.8/10</li>
                                <li><span>Sanskar Public School, Gwalior</span><br />Class XII (CBSE) 73.5%</li>
                                <li><span>Kendriya Vidyalaya No.1, Gwalior</span><br />Class X (CBSE) 88.8%</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;