import {Link} from 'react-router-dom';
import logo from './logo.png'; // Tell webpack this JS file uses this image


const NavBar = () => {
    return (  
        <nav className="navbar sticky">
            <img src={logo} width="50px" alt="Logo" />
            <div className="links">
               <Link to="/">Home</Link>
               <Link to="/newsletters">Newsletters</Link>
               <Link to="/sponsor-us">Sponsor Us</Link>
               <Link to="/contact">Contact</Link>
            </div>
        </nav>
    );
}
 
export default NavBar;