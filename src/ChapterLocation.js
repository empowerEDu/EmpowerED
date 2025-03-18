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
            <div className="d-flex justify-content-center align-items-center flex-wrap" style={{gap: '100px'}}>
                <a href="https://www.instagram.com/empowered_mississauga/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                    <div className="p-4 chapter-card">
                        <h3>Missisauga Chapter</h3>
                        <img src={LumieExcited} alt="Lumie Excited" className="img-fluid mx-3 mb-3" style={{ maxHeight: '170px' }} />
                    </div>
                </a>

                <a href="https://www.instagram.com/empowered_brampton/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                    <div className="p-4 chapter-card">
                        <h3>Brampton Chapter</h3>
                        <img src={LumieExcited} alt="Lumie Excited" className="img-fluid mx-3 mb-3" style={{ maxHeight: '170px' }} />
                    </div>
                </a>

                <a href="https://www.instagram.com/empowered_hamilton/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                    <div className="p-4 chapter-card">
                        <h3>Hamilton Chapter</h3>
                        <img src={LumieExcited} alt="Lumie Excited" className="img-fluid mx-3 mb-3" style={{ maxHeight: '170px' }} />
                    </div>
                </a>
                
                
            </div>
        </div>
    )
}

export default ChapterLocation;