import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons'
import { faSquareInstagram, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons'
import logo from './logo.png'; // Tell webpack this JS file uses this image

const Footer = () => {
  return (
    <footer>
      <div className="social_links list divided">
        <span className="divider"></span>
        <ul className="footer_links social">
          <li>
            <a href="mailto:contact.empowered.edu@gmail.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faEnvelope} size='2x' />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/_empower.ed/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faSquareInstagram} size='2x' />
            </a>
          </li>
          <li>
            <a href="https://linktr.ee/_empower.ED" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLink} size='2x' />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/em-power-ed" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size='2x' />
            </a>
          </li>
          <li>
            {/* Fixed Facebook Link */}
            <a href="https://www.facebook.com/profile.php?id=61560888669666" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size='2x' />
            </a>
          </li>
        </ul>
        <span className="divider"></span>
      </div>
      <div className="list">
        <a href="/"> <img loading="lazy" src={logo} alt="EmpowerED Logo" height="50px" /> </a>
        <p>&copy; Copyright 2025 EmpowerED</p>
      </div>
    </footer>
  );
}

export default Footer;
