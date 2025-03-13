import LumieExcited from "./images/LumieExcited.png";
import brampton from "./images/brampton.jpeg";
import missisauga from "./images/missisauga.png";
import hamilton from "./images/hamilton.jpg";

const ChapterLocation = () => {
    return (
        <div className="my-4 sponsors text-center py-4">
            <div className="mb-5">
                <h2>Our Chapter Locations</h2>
            </div>
            <div className="d-flex justify-content-center align-items-center flex-wrap" style={{gap: '20px'}}>
                <div className="p-4 chapter-card">
                    <h3>Missisauga</h3>
                    <img src={missisauga} alt="Missisauga" className="img-fluid mx-3 mb-3" style={{ maxHeight: '170px' }} />
                </div>
                <img src={LumieExcited} alt="Lumie Excited" className="img-fluid mx-3" style={{ maxHeight: '170px' }} />
                <div className="p-4 chapter-card">
                    <h3>Hamilton</h3>
                    <img src={hamilton} alt="Hamilton" className="img-fluid mx-3 mb-3" style={{ maxHeight: '170px' }} />
                </div>
                <img src={LumieExcited} alt="Lumie Excited" className="img-fluid mx-3" style={{ maxHeight: '170px' }} />
                <div className="p-4 chapter-card">
                    <h3>Brampton</h3>
                    <img src={brampton} alt="Brampton" className="img-fluid mx-3 mb-3" style={{ maxHeight: '170px' }} />
                </div>
            </div>
        </div>
    )
}

export default ChapterLocation;