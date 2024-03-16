import React, { useState } from 'react';

const FuniroFurnitureGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const imageUrls = [
    '/Rectangle 37.png',
    '/Rectangle 38.png',
    '/Rectangle 39.png',
    '/Rectangle 40.png',
    '/Rectangle 41.png',
    '/Rectangle 43.png',
    '/Rectangle 44.png',
    '/Rectangle 45.png',
  ];

  return (
    <div className="funiro-furniture-gallery" style={{ position: 'relative' }}>
      <h2 style={{ textAlign: 'center', marginTop: '20px' }}>Share your setup with  <br />#FuniroFurniture</h2>
      <div className="gallery" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
        {imageUrls.map((imageUrl, index) => (
          <div
            key={index}
            className="image-container"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              position: 'relative',
              width: `${Math.floor(Math.random() * (300 - 200) + 200)}px`, 
              height: 'auto', 
              margin: '10px', 
              marginBottom: index < 3 ? '10px' : '0', 
              marginTop: index < 3 ? '0' : '10px', 
            }}
          >
            <img
              src={imageUrl}
              alt={`Funiro Furniture ${index + 1}`}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
            {hoveredIndex === index && (
              <div className="overlay">
                <button className="cart-button">Add to Cart</button>
                <button className="wishlist-button">Add to Wishlist</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FuniroFurnitureGallery;
