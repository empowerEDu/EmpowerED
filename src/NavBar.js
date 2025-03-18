import { Link } from 'react-router-dom';
import logo from './logo.png'; // Ensure webpack is configured to handle image imports

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="Logo"
          />
          <span className="ms-2">EmpowerED</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">
            {/* Updated Link for React Router */}
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/newsletters" className="nav-link">
              Newsletters
            </Link>
            <Link to="/support-us" className="nav-link">
              Support Us
            </Link>
            <Link to="/chapters" className="nav-link">
              Chapters
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
