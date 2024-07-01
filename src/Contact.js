import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLink,} from '@fortawesome/free-solid-svg-icons'
import { faSquareInstagram ,faLinkedin, faFacebook} from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
    return ( 
        <div className="contact">
            <h2>Let's get in touch!</h2>
            <Link to={{ pathname: "mailto:contact.empowered.edu@gmail.com" }} target="_blank" ><FontAwesomeIcon icon={faEnvelope}/>&nbsp;contact.empowered.edu@gmail.com</Link>
            <Link to={{ pathname: "https://www.instagram.com/_empower.ed/" }} target="_blank" ><FontAwesomeIcon icon={faSquareInstagram} />&nbsp;@_empower.ed/</Link>
            <Link to={{ pathname: "https://linktr.ee/_empower.ED" }} target="_blank" ><FontAwesomeIcon icon={faLink}/>&nbsp;@_empower.ED</Link>
            <Link to={{ pathname: "https://www.linkedin.com/company/em-power-ed" }} target="_blank" ><FontAwesomeIcon icon={faLinkedin}/>&nbsp;EmpowerED LinkedIn</Link>
            <Link to={{ pathname: "https://www.facebook.com/profile.php?id=61560888669666" }} target="_blank" ><FontAwesomeIcon icon={faFacebook}/>&nbsp;EmpowerED FaceBook</Link>
        </div>
     );
}
 
export default Contact;