import React from 'react';

const HomeSection = () => {
  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: 'auto',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    position: 'relative',
  };

  const overlayStyle = {
    position: 'absolute',
    top: '70%',
    right: '21%',
    transform: 'translateY(-50%)',
    backgroundColor: 'lightyellow',
    padding: '10px',
    textAlign: 'right',
    maxWidth: '500px', 
  };

  const textStyle = {
    fontSize: '18px', 
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
  };

  const buyNowStyle = {
    marginTop: '20px',
    backgroundColor: '#3498db',
    padding: '11px',
    borderRadius: '5px',
    width: '100px',
    cursor: 'pointer',
    textAlign: 'center',
  };

  const handleBuyNowClick = () => {
    console.log('BUY NOW clicked!');
  };

  return (
    <div style={containerStyle}>
      <img
        src="/scandinavian-interior-mockup-wall-decal-background 1.png"
        alt="Description of the image"
        style={imageStyle}
      />
      <div style={overlayStyle}>
        <div style={textStyle}>
          <h4>New Arrival</h4>
          <h1>Discover Our New Collection</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aliquid veniam ipsam animi ad, facilis dolores quae iusto maxime, quis ducimus dolor voluptatem aperiam cum laboriosam! Dolores beatae quaerat corrupti?</p>
        </div>
        <div style={buyNowStyle} onClick={handleBuyNowClick}>
          <p style={{ margin: 0, fontSize: '18px', color: 'white' }}>BUY NOW</p>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
