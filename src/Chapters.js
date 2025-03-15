import ImageSlideshow from "./ImageSlideshow";
import LumieExcited from "./images/LumieExcited.png";
import ChapterLocation from "./ChapterLocation";
import LumieComputer from "./images/LumieComputer.png";
const Chapters = () => {

  return (
    <>
        <div className="homepage container-fluid">
            <div className="container">
                <div className="introduction row align-items-center mb-5">
                    <div className="left col-12 col-md-6 text-center text-md-left mb-4 mb-md-0">
                        <h1 className="mb-3">What Is An EmpowerED Chapter?</h1>
                        <h3 className="mb-3">An EmpowerED Chapter is a club or a community organization that operates under the guidance of the EmpowerED organization</h3>
                    </div>
                    <div className="right col-12 col-md-6 text-center text-md-left">
                        <img src={LumieComputer} alt="Lumie Computer" className="img-fluid" style={{ maxHeight: '285px' }} />
                    </div>
                </div>
            </div>
        </div>
        <ImageSlideshow />
        <ChapterLocation />
    </>
  );
}

export default Chapters;
