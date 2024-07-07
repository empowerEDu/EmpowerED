// src/Contact.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons';
import { faSquareInstagram, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import React from 'react';

const Contact = () => {
    return ( 
        <div className="container py-5">
            <div className="text-center mb-4">
                <h1>Let's get in touch!</h1>
            </div>
            <ul className="list-unstyled contact-links">
                <li className="mb-3">
                    <a href="mailto:contact.empowered.edu@gmail.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                        <FontAwesomeIcon icon={faEnvelope} />&nbsp;contact.empowered.edu@gmail.com
                    </a>
                </li>
                <li className="mb-3">
                    <a href="https://www.instagram.com/_empower.ed/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                        <FontAwesomeIcon icon={faSquareInstagram} />&nbsp;@_empower.ed
                    </a>
                </li>
                <li className="mb-3">
                    <a href="https://linktr.ee/_empower.ED" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                        <FontAwesomeIcon icon={faLink} />&nbsp;@_empower.ED
                    </a>
                </li>
                <li className="mb-3">
                    <a href="https://www.linkedin.com/company/em-power-ed" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                        <FontAwesomeIcon icon={faLinkedin} />&nbsp;EmpowerED LinkedIn
                    </a>
                </li>
                <li className="mb-3">
                    <a href="https://www.facebook.com/profile.php?id=61560888669666" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                        <FontAwesomeIcon icon={faFacebook} />&nbsp;EmpowerED Facebook
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Contact;