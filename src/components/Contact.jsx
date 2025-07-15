import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        Name: '',
        Email: '',
        Message: ''
    });
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbwCnNvPCe9EYeBpl-QBr7tzhBx468jI_C5_1D0yjp09uWJi-ph28DPoexXZcMyJwcXl/exec', {
                method: 'POST',
                body: new FormData(e.target)
            });

            if (response.ok) {
                setMessage('Message sent successfully');
                setFormData({ Name: '', Email: '', Message: '' });
                setTimeout(() => setMessage(''), 5000);
            }
        } catch (error) {
            console.error('Error!', error.message);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div id="contact">
            <div className="container">
                <div className="row">
                    <div className="contact-left">
                        <h1 className="sub-title">Contact Me</h1>
                        <p>
                            <i className="fa-solid fa-paper-plane"></i>
                            shubhanakrvyas02@gmail.com
                        </p>
                        <p>
                            <i className="fa-solid fa-phone"></i>
                            +91 9479313600
                        </p>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/shubhankar-vyas-7b02b4298/">
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                            <a href="https://x.com/shubhankar_vyas">
                                <i className="fa-brands fa-x-twitter"></i>
                            </a>
                            <a href="https://www.instagram.com/shubhankar.vyas/">
                                <i className="fa-brands fa-square-instagram"></i>
                            </a>
                            <a href="https://www.facebook.com/">
                                <i className="fa-brands fa-facebook"></i>
                            </a>
                        </div>
                    </div>
                    <div className="contact-right">
                        <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="Name"
                                placeholder="Your Name"
                                required
                                value={formData.Name}
                                onChange={handleChange}
                            />
                            <input
                                type="email"
                                name="Email"
                                placeholder="Your Email"
                                required
                                value={formData.Email}
                                onChange={handleChange}
                            />
                            <textarea
                                name="Message"
                                rows="6"
                                placeholder="Your Message"
                                value={formData.Message}
                                onChange={handleChange}
                            ></textarea>
                            <button type="submit" className="btn btn2">
                                Submit
                            </button>
                        </form>
                        {message && <span id="msg">{message}</span>}
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>Copyright © 2024 Shubhankar Vyas. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Contact;