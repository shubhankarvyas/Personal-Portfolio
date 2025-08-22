import React from 'react';

const projects = [
    {
        title: 'StarkFinance – AI Investment Assistant',
        description: 'Developed AI-based dashboard offering financial analytics and investment recommendations.',
        image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop&crop=center',
        link: 'https://stark-finance.vercel.app/'
    },
    {
        title: 'MedVault – Blockchain Health Records Platform',
        description: 'A decentralized platform for storing encrypted health records using AES and IPFS.',
        image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop&crop=center',
        link: 'https://med-vault-alpha.vercel.app/'
    },
    {
        title: 'CHM: Health Partner',
        description: 'Engineered a centralized health management web application that digitally streamlined patient record access, cutting traditional paperwork by 75%.',
        image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop&crop=center',
        link: 'https://healthpartner-fmds.onrender.com/'
    },
    {
        title: 'Solar Load Forecasting with Deep Learning',
        description: 'Engineered a hybrid CNN-LSTM model for solar power prediction using weather time series.',
        image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop&crop=center',
        link: 'https://github.com/shubhankarvyas/solar-and-load-forecasting-using-cnn-and-lstm'
    }
];

const Portfolio = () => {
    return (
        <div id="portfolio">
            <div className="container">
                <h1 className="sub-title">My Projects</h1>
                <div className="work-list">
                    {projects.map((project, index) => (
                        <div className="work" key={index}>
                            <img src={project.image} alt={project.title} />
                            <div className="layer">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;