import unbreakable1 from "./images/unbreakable1.jpg"
import unbreakable2 from "./images/unbreakable2.jpg"

import wie4 from "./images/wie4.jpg"
import wie2 from "./images/wie2.jpg"

import cer1 from "./images/cer1.jpg"
import cer2 from "./images/cer2.jpg"
import cer3 from "./images/cer3.jpg"

const images = [cer2, cer3, cer1, unbreakable1, unbreakable2, wie2, wie4];

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
