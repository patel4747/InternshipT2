import React from 'react';

const Browse = () => {
  const containerStyle = {
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const imageStyle = {
    width: '250px',
    height: '250px',
    objectFit: 'cover',
    borderRadius: '10px',
  };

  const productContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  };
  
  const productStyle = {
    margin: '10px',
    minWidth: '250px', 
    maxWidth: '400px',
    width: '100%',
  };

  const imageStyles = {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    borderRadius: '10px',
  };

  const priceStyle = {
    marginTop: '10px',
    fontSize: '18px',
    fontWeight: 'bold',
    color: 'green',
  };

  const paradesign = {
    padding: '50px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Browse The Range</h1>
      
      <p style={paradesign}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate porro,
        maxime perspiciatis adipisci laboriosam mollitia id, architecto in placeat
        distinctio consequatur ad quas ea vero beatae, dolor at asperiores magnam.
      </p>

      <div style={productContainerStyle}>
        <div style={productStyle}>
          <img
            src="/Mask Group_page-0001.jpg"
            alt="Tree 1"
            style={imageStyles}
          />
          <p style={priceStyle}>$50.00</p>
        </div>

        <div style={productStyle}>
          <img
            src="/living.jpg"
            alt="Tree 2"
            style={imageStyles}
          />
          <p style={priceStyle}>$65.00</p>
        </div>

        <div style={productStyle}>
          <img
            src="/mark.jpg"
            alt="Tree 2"
            style={imageStyles}
          />
          <p style={priceStyle}>$65.00</p>
        </div>
      </div>
    </div>
  );
};

export default Browse;
