import "./HeroAnimation.css"; // Import the CSS file
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.png";
import image4 from "../assets/images/image4.png";
import image5 from "../assets/images/image5.jpg";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image1,
  image2,
  image3,
  image4,
  image5,
  image1,
  image2,
  image3,
  image4,
  image5,
];

const HeroAnimation = () => {
  return (
    <div className="hero">
      <div className="hero__title"></div>
      {images.map((src, index) => (
        <img
          key={index}
          className={`cube cube-${index + 1}`}
          src={src}
          alt={`Animated cube ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default HeroAnimation;
