import Workshop2 from "./images/workshop2.jpg";
import Workshop3 from "./images/workshop3.jpg";
import Workshop6 from "./images/workshop6.jpg";

import Vex2 from "./images/vex2.jpg"

import wie1 from "./images/wie1.jpg"
import wie2 from "./images/wie2.jpg"
import wie4 from "./images/wie4.jpg"

import cer1 from "./images/cer1.jpg"
import cer2 from "./images/cer2.jpg"
import cer3 from "./images/cer3.jpg"

const images = [cer2, Workshop2, Workshop3, Workshop6,  wie1, wie2, cer3, wie4, Vex2, cer1];

const ImageSlideshow = () => {
  return (
    <div className="slideshow-container">
      <div className="slideshow container-fluid">
        {images.concat(images).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="slide"
          />
        ))}
      </div> 
    </div>
  );
};

export default ImageSlideshow;
