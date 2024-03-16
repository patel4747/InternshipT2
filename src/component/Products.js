import React, { useState } from 'react';

const Products = () => {
  const productStyle = {
    textAlign: 'center',
    marginTop: '50px', // Add margin to separate from the FeatureCarousel
  };

  const imageContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const rowContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    margin: '0 auto',
    maxWidth: '1200px',
  };

  const imageStyles = {
    margin: '10px',
    position: 'relative',
    width: '200px',
  };

  const discountCircleStyle = {
    position: 'absolute',
    top: '0',
    right: '0',
    backgroundColor: 'red',
    color: 'white',
    borderRadius: '50%',
    padding: '5px',
    fontSize: '12px',
  };

  const priceContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const nameStyle = {
    margin: '5px 0',
    fontWeight: 'bold',
  };

  const mainMRPStyle = {
    textDecoration: 'line-through',
    margin: '5px 0',
  };

  const overlayStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0,
    transition: 'opacity 0.3s ease-in-out',
  };

  const overlayContentStyle = {
    color: 'white',
    textAlign: 'center',
  };

  const imageUrls = [
    { url: '/Images.jpg', name: 'Product A', discount: '-20%', oldPrice: '$80.00', newPrice: '$60.00' },
    { url: '/image 3.jpg', name: 'Product B', discount: '-15%', oldPrice: '$75.00', newPrice: '$63.75' },
    { url: '/image 4.png', name: 'Product C', discount: '-25%', oldPrice: '$90.00', newPrice: '$67.50' },
    { url: '/Images.png', name: 'Product D', discount: '-18%', oldPrice: '$85.00', newPrice: '$69.70' },
    { url: '/Images5.png', name: 'Product E', discount: '-22%', oldPrice: '$78.00', newPrice: '$60.84' },
    { url: '/Images6.png', name: 'Product F', discount: '-30%', oldPrice: '$95.00', newPrice: '$66.50' },
    { url: '/Images8.png', name: 'Product G', discount: '-28%', oldPrice: '$88.00', newPrice: '$63.36' },
    { url: '/moreImage1.jpg', name: 'Product H', discount: '-23%', oldPrice: '$82.00', newPrice: '$63.14' },
    { url: '/moreImage2.jpg', name: 'Product I', discount: '-17%', oldPrice: '$87.00', newPrice: '$72.21' },
    { url: '/moreImage3.jpg', name: 'Product J', discount: '-19%', oldPrice: '$92.00', newPrice: '$74.52' },
    { url: '/moreImage4.jpg', name: 'Product K', discount: '-21%', oldPrice: '$89.00', newPrice: '$70.21' },
    { url: '/moreImage5.jpg', name: 'Product L', discount: '-24%', oldPrice: '$91.00', newPrice: '$69.04' },
  ];

  const initialDisplayCount = 8;
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);

  const handleShowMore = () => {
    setDisplayCount(displayCount + 4);
  };

  const handleImageHover = (index) => {
    const overlay = document.getElementById(`overlay-${index}`);
    if (overlay) {
      overlay.style.opacity = '1';
    }
  };

  const handleImageLeave = (index) => {
    const overlay = document.getElementById(`overlay-${index}`);
    if (overlay) {
      overlay.style.opacity = '0';
    }
  };

  const renderProduct = () => {
    return (
      <div style={imageContainerStyle}>
        <div style={rowContainerStyle}>
          {imageUrls.slice(0, displayCount).map((item, index) => (
            <div
              key={index + 1}
              style={imageStyles}
              onMouseEnter={() => handleImageHover(index)}
              onMouseLeave={() => handleImageLeave(index)}
            >
              <div style={discountCircleStyle}>{item.discount}</div>
              <img src={item.url} alt={item.name} style={{ width: '100%' }} />
              <div style={overlayStyle} id={`overlay-${index}`}>
                <div style={overlayContentStyle}>
                  <button>Add to Cart</button>
                  <button>Share</button>
                  <button>Compare</button>
                  <button>Like</button>
                </div>
              </div>
              <div style={priceContainerStyle}>
                <p style={nameStyle}>{item.name}</p>
                <p style={mainMRPStyle}>{item.oldPrice}</p>
                <p style={{ fontWeight: 'bold' }}>{item.newPrice}</p>
              </div>
            </div>
          ))}
        </div>
        {displayCount < imageUrls.length && (
          <button onClick={handleShowMore}>Show More</button>
        )}
      </div>
    );
  };

  return (
    <div style={productStyle}>
      <h1>Our Products</h1>
      {renderProduct()}
    </div>
  );
};

export default Products;
