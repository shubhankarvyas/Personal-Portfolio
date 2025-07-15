import React from 'react';

const Portfolio = () => {
    return (
        <div id="portfolio">
            <div className="container">
                <h1 className="sub-title">My Projects</h1>
                <div className="work-list">
                    <div className="work">
                        <div className="layer">
                            <h3>AI-Powered Financial Assistant</h3>
                            <p>
                                Developed a dashboard for stock analytics and AI-driven investment suggestions using Google Gemini.
                                Deployed on Vercel with Firebase Auth, Firestore, and custom domain setup.
                                Enabled sentiment analysis and market trend summarization with real-time updates.
                            </p>
                            <a href="#">
                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                        </div>
                    </div>
                    <div className="work">
                        <div className="layer">
                            <h3>MedVault – Blockchain Health Records</h3>
                            <p>
                                Created decentralized record system using Solana wallet auth and IPFS for secure health data sharing.
                                Enabled permissioned access and audit trails with real-time role-based controls.
                            </p>
                            <a href="#">
                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                        </div>
                    </div>
                    <div className="work">
                        <div className="layer">
                            <h3>Solar Load Forecasting (CNN-LSTM)</h3>
                            <p>
                                Implemented hybrid deep learning model to forecast solar output from time-series datasets.
                                Improved accuracy using lag correlation and evaluated via RMSE and MAPE.
                            </p>
                            <a href="#">
                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <a href="#" className="btn">See More</a>
            </div>
        </div>
    );
};

export default Portfolio;