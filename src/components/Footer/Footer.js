import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-section">
            <div>
                <h1>We care</h1>
                <p>We care about elderly people.We provide them a home, a family</p>
            </div>
            <div className="contact-icons">
                <h5>Contact Us</h5>
                <span><i class="fab fa-youtube fa-2x text-white me-2"></i></span>
                <span><i class="fab fa-facebook fa-2x text-white me-2"></i></span>
                <span><i class="fas fa-envelope fa-2x text-white"></i></span>
            </div>
        </div >
    );
};

export default Footer;