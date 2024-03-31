import React, { useState, useEffect } from 'react';
import "./Slider.css"
import img1 from "../assets/car1.png"
import img2 from "../assets/car2.jpg"
import img3 from "../assets/car3.jpg"
import img4 from "../assets/car4.jpg"
function Slider() {

  const [images, setImages] = useState([img2, img3, img1, img4]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); // Change the image every 3 seconds

    return () => clearInterval(interval); // Clear the interval when the component unmounts
  }, [images]);

  return (
    <div className='container'>
      <div className="content">
        <h2 id='carouselHeading'>Experience the trill</h2>
      </div>

      <div className="slide-panel">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            style={{
              opacity: index === currentImageIndex ? 1 : 0,
              transform: index === currentImageIndex ? 'scale(1)' : 'scale(1)',
              transition: 'opacity 1s ease-in-out, transform 2s cubic-bezier(0.42, 0, 0.58, 1)', // Adjusted timing functions
              transitionDelay: index === currentImageIndex ? '0s' : '0.5s', // Delay opacity change for smoother transition
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',

            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;