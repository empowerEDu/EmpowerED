import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLink,} from '@fortawesome/free-solid-svg-icons'
import { faSquareInstagram ,faLinkedin, faFacebook} from '@fortawesome/free-brands-svg-icons'


const Contact = () => {
    return ( 
        <div className="contact">
                <div>
                <ul className="contact-links">
                    <h1>Let's get in touch!</h1>
                    <a><li className="contact-links"><Link to={{ pathname: "mailto:contact.empowered.edu@gmail.com" }} target="_blank" ><FontAwesomeIcon icon={faEnvelope}/>&nbsp;contact.empowered.edu@gmail.com</Link></li></a>
                    <a><li className="contact-links"><Link to={{ pathname: "https://www.instagram.com/_empower.ed/" }} target="_blank" ><FontAwesomeIcon icon={faSquareInstagram} />&nbsp;@_empower.ed/</Link></li></a>
                    <a><li className="contact-links"><Link to={{ pathname: "https://linktr.ee/_empower.ED" }} target="_blank" ><FontAwesomeIcon icon={faLink}/>&nbsp;@_empower.ED</Link></li></a>
                    <a><li className="contact-links"><Link to={{ pathname: "https://www.linkedin.com/company/em-power-ed" }} target="_blank" ><FontAwesomeIcon icon={faLinkedin}/>&nbsp;EmpowerED LinkedIn</Link></li></a>
                    <a><li className="contact-links"><Link to={{ pathname: "https://www.facebook.com/profile.php?id=61560888669666" }} target="_blank" ><FontAwesomeIcon icon={faFacebook}/>&nbsp;EmpowerED FaceBook</Link></li></a>
                </ul>
            </div>

        </div>
        
     );
}
 
export default Contact;