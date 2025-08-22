import React from 'react';

const Contact = () => {
    return (
        <div id="contact">
            <div className="container">
                <div className="row">
                    <div className="contact-left">
                        <h1 className="sub-title">Contact Me</h1>
                        <p>
                            <i className="fa-solid fa-paper-plane"></i>
                            shubhankarvyas02@gmail.com
                        </p>
                        <p>
                            <i className="fa-solid fa-phone"></i>
                            +91 9479313600
                        </p>
                        <div className="social-icons">
                            <a href="https://github.com/shubhankarvyas">
                                <i className="fa-brands fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/shubhankar-vyas-7b02b4298/">
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                            <a href="https://x.com/shubhankar_vyas">
                                <i className="fa-brands fa-x-twitter"></i>
                            </a>
                            <a href="https://www.instagram.com/shubhankar.vyas/">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </div>
                        <a href="/my-cv.pdf" download className="btn btn2">
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>Copyright © 2025 Shubhankar Vyas. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Contact;