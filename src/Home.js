// src/Home.js
import UpcomingDates from "./UpcomingDates";
import LumieExcited from "./images/LumieExcited.png";
import AoPSLogo from "./images/Aops.png";
import MPLLogo from "./images/MPL.png";
import OntarioFluid from "./images/ontariofluidpartner.png";
import ImageSlideshow from './ImageSlideshow';

const Home = () => {
  return (  
    <div className="homepage container py-4">
      <div className="introduction row align-items-center mb-5">
        <div className="left col-12 col-md-6 text-center text-md-left mb-4 mb-md-0">
          <h1 className="mb-3">We are EmpowerED</h1>
          <h3 className="mb-3">We are a youth-led non-profit organization based in York Region, that aims to excite students of all ages about computer science and STEM!</h3>
          <img src={LumieExcited} alt="Lumie Excited" className="img-fluid" style={{ maxHeight: '200px' }} />
        </div>
        <div className="right col-12 col-md-6 text-center text-md-left">
          <UpcomingDates />
        </div>
      </div>
      <div className="row mb-5 justify-content-center">
        <div className="col-12">
          <ImageSlideshow />
        </div>
      </div>
      <div className="sponsors text-center py-4">
        <h2 className="mb-4">Sponsors and Partners</h2>
        <div className="d-flex justify-content-center flex-wrap">
          <img src={AoPSLogo} alt="AoPS Logo" className="img-fluid mx-3 mb-3" style={{ maxHeight: '150px' }} />
          <img src={OntarioFluid} alt="Ontario Fluid" className="img-fluid mx-3 mb-3" style={{ maxHeight: '150px' }} />
          <img src={MPLLogo} alt="Markham Public Library" className="img-fluid mx-3 mb-3" style={{ maxHeight: '170px' }} />
        </div>
      </div>
    </div>
  );
}

export default Home;
