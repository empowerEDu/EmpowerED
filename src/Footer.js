import { Link } from "react-router-dom/cjs/react-router-dom.min";
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
          <li><Link to={{ pathname: "mailto:contact.empowered.edu@gmail.com" }} target="_blank" ><FontAwesomeIcon icon={faEnvelope} size='2x' /></Link></li>
          <li><Link to={{ pathname: "https://www.instagram.com/_empower.ed/" }} target="_blank" ><FontAwesomeIcon icon={faSquareInstagram} size='2x' /></Link></li>
          <li><Link to={{ pathname: "https://linktr.ee/_empower.ED" }} target="_blank" ><FontAwesomeIcon icon={faLink} size='2x' /></Link></li>
          <li><Link to={{ pathname: "https://www.linkedin.com/company/em-power-ed" }} target="_blank" ><FontAwesomeIcon icon={faLinkedin} size='2x' /></Link></li>
          <li><Link to={{ pathname: "https://www.facebook.com/profile.php?id=61560888669666" }} target="_blank" ><FontAwesomeIcon icon={faFacebook} size='2x' /></Link></li>
        </ul>
        <span className="divider"></span>
      </div>
      <div className="list">
        <Link to="/"> <img loading="lazy" src={logo} alt="EmpowerED Logo" height="50px"></img> </Link>
        <p>&copy; Copyright 2024 EmpowerED</p>
      </div>
  
    </footer>
  );
}

export default Footer;
