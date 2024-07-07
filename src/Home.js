import UpcomingDates from "./UpcomingDates";
import LumieExcited from "./images/LumieExcited.png"
import AoPSLogo from "./images/Aops.png"
import OntarioFluid from "./images/ontariofluidpartner.png"
import ImageSlideshow from './ImageSlideshow';

const Home = () => {
    return (  
        <div className="homepage">
            <div className="introduction">
                <div className="left">
                    <h1>We are EmpowerED</h1>
                    <h3>We are a youth-led non-profit organization based in York Region, that aims to excite students of all ages about computer science and STEM!</h3>
                    <img src={LumieExcited} height={"200"}></img>
                </div>
                <div className="right">
                    <UpcomingDates/>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'auto' }}>
              <ImageSlideshow/>
            </div>
            <div className="sponsors">
                <h2>Our Sponsors:</h2>
                <img src={AoPSLogo} height={"70"}></img>
                <img src={OntarioFluid} height={"70"}></img>
            </div>
        </div>
    );
}
 
export default Home;
