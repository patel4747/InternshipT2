// FeatureCarousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CSS/slick_theme.css';

const FeatureCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '0',
  };

  const featureImages = [
    '/Rectangle 24.png',
    '/Rectangle 25.png',
    
   
  ];

  return (
    <div className="feature-carousel-container">
      <div className="feature-carousel-content">
        <div className="light-yellow-rectangle">
          <div className="text-content">
            <h2>50+ Beautiful rooms inspiration</h2>
            <p>Our designers have already created a lot of beautiful prototypes of rooms that will inspire you.</p>
            <button className="explore-button">Explore More</button>
          </div>
        </div>
        <div className="image-container">
          <Slider {...settings}>
            {featureImages.map((image, index) => (
              <div className="image-with-text" key={index}>
                <img
                  src={image}
                  alt={`Feature ${index + 1}`}
                  style={{ width: '100%', height: 'auto' }}
                />
                
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default FeatureCarousel;
