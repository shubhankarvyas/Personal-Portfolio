import React from 'react';

const Portfolio = () => {
    return (
        <div id="portfolio">
            <div className="container">
                <h1 className="sub-title">My Projects</h1>
                <div className="work-list">
                    <div className="work">
                        <img src="/work-1.png" alt="E-commerce Website" />
                        <div className="layer">
                            <h3>E-commerce Website</h3>
                            <p>
                                A fully functional e-commerce platform where users can browse products,
                                add them to cart, and proceed to checkout.
                            </p>
                            <a href="#">
                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                        </div>
                    </div>
                    <div className="work">
                        <img src="/work-2.png" alt="Social Media Platform" />
                        <div className="layer">
                            <h3>Social Media Platform</h3>
                            <p>
                                A social networking site where users can create profiles, connect with
                                friends, and share posts, photos, and videos.
                            </p>
                            <a href="#">
                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                        </div>
                    </div>
                    <div className="work">
                        <img src="/work-3.png" alt="Travel Booking Website" />
                        <div className="layer">
                            <h3>Travel Booking Website</h3>
                            <p>
                                A travel booking platform where users can search for flights, hotels,
                                and rental cars based on destination and dates.
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