import React from 'react';

const Services = () => {
    return (
        <div id="services">
            <div className="container">
                <h1 className="sub-title">My Services</h1>
                <div className="services-list">
                    <div>
                        <i className="fa-solid fa-code"></i>
                        <h2>Web Developer</h2>
                        <p>
                            Website Design and Development: Create responsive, visually appealing websites
                            tailored to client needs using HTML, CSS, JavaScript, and frameworks like React
                            or Angular.
                        </p>
                        <a href="#">Learn more</a>
                    </div>
                    <div>
                        <i className="fa-solid fa-crop"></i>
                        <h2>Data Structures and Algorithms</h2>
                        <p>
                            Algorithm Design and Optimization: Develop efficient algorithms for data
                            processing, search, sorting, and optimization.
                        </p>
                        <a href="#">Learn more</a>
                    </div>
                    <div>
                        <i className="fa-solid fa-magnifying-glass-chart"></i>
                        <h2>Data Analysis</h2>
                        <p>
                            Data Visualization: Create insightful visualizations and interactive dashboards
                            to present data findings in a clear and meaningful way.
                        </p>
                        <a href="#">Learn more</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;