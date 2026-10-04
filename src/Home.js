import UpcomingDates from "./UpcomingDates";
import LumieExcited from "./images/LumieExcited.png";
import AoPSLogo from "./images/Aops.png";
import MPLLogo from "./images/MPL.png";
import OntarioFluid from "./images/ontariofluidpartner.png";
import ImageSlideshow from './ImageSlideshow';
import MacCodingLogo from './images/macstartcoding.png';
import { Link } from 'react-router-dom'
import Statistics from "./Statistics";
import NewsletterSignUp from "./NewsletterSignUp";


const Home = () => {
  return (  
    <div className="homepage container-fluid">
      <div className="container">
      <div className="introduction row align-items-center mb-5">
        <div className="hiring-announcement col-12">
          <span aria-hidden="true">📣</span> We are <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLScxbpMeGB2UxVfZ8nj8acpr96TmrpJTC0dxmIOQTD8TinUyKA/viewform">hiring</a>!
          <p className="hiring-description">
            A description of the roles can be found <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/18IGolUyNt9cRtOQ_6YnayqX6taSOV58vXru6Cgky8ro/edit?tab=t.0#heading=h.fpjtb183cwps">here</a>.
          </p>
        </div>
        <div className="left col-12 col-md-6 text-center text-md-left mb-4 mb-md-0">
          <h1 className="mb-3">We are EmpowerED</h1>
          <h3 className="mb-3">We are a youth-led non-for-profit organization based in York Region, that aims to excite students of all ages about computer science and STEM!</h3>
          <img src={LumieExcited} alt="Lumie Excited" className="img-fluid" style={{ maxHeight: '200px' }} />
        </div>
        <div className="right col-12 col-md-6 text-center text-md-left">
          <UpcomingDates />
        </div>
      </div>
      </div>
      
        <ImageSlideshow style={{ width: '100%' }} />
        <Statistics style={{ width: '100%' }} />
      <div className="sponsors text-center py-4">
        <h2 className="mb-4">Our Sponsors and Partners</h2>
        <div className="d-flex justify-content-center flex-wrap">
          <img src={AoPSLogo} alt="AoPS Logo" className="img-fluid mx-3 mb-3" style={{ maxHeight: '150px' }} />
          <img src={OntarioFluid} alt="Ontario Fluid" className="img-fluid mx-3 mb-3" style={{ maxHeight: '150px' }} />
          <img src={MPLLogo} alt="Markham Public Library" className="img-fluid mx-3 mb-3" style={{ maxHeight: '170px' }} />
          <img src={MacCodingLogo} alt="McMaster Start Coding" className="img-fluid mx-3 mb-3" style={{ maxHeight: '170px' }} />
        </div>
        <Link to="/support-us" className="nav-link">
          <button type="submit" className="btn btn-primary">Support Us!</button>
        </Link>
        <NewsletterSignUp />
      </div>
    </div>
  );
}

export default Home;
