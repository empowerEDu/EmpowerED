import Workshop1 from "./images/workshop1.jpg";
import Workshop2 from "./images/workshop2.jpg";
import Workshop3 from "./images/workshop3.jpg";
import Workshop4 from "./images/workshop4.jpg";
import Workshop5 from "./images/workshop5.jpg";
import Workshop6 from "./images/workshop6.jpg";

const images = [Workshop1, Workshop2, Workshop3, Workshop4, Workshop5, Workshop6];

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
