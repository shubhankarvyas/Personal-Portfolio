import React from 'react';

const Services = () => {
    return (
        <div id="services">
            <div className="container">
                <h1 className="sub-title">My Services</h1>
                <div className="services-list">
                    <div>
                        <i className="fa-solid fa-code"></i>
                        <h2>Full-Stack Development</h2>
                        <p>
                            Building full-stack web applications using React, Node.js, Express, and Firebase.
                        </p>
                        <a href="#">Learn more</a>
                    </div>
                    <div>
                        <i className="fa-solid fa-cloud-arrow-up"></i>
                        <h2>Cloud & DevOps</h2>
                        <p>
                            Deploying scalable solutions on Azure and GCP with Docker and GitHub Actions. CI/CD pipelines.
                        </p>
                        <a href="#">Learn more</a>
                    </div>
                    <div>
                        <i className="fa-solid fa-brain"></i>
                        <h2>AI & Deep Learning</h2>
                        <p>
                            Developing AI-based solutions like investment assistants and forecasting models using Python and TensorFlow.
                        </p>
                        <a href="#">Learn more</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;