import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaHome, FaShoppingCart, FaHeart, FaSearch } from 'react-icons/fa';

const Navbar = (props) => {
  const [showSearchPopup, setShowSearchPopup] = useState(false);

  const handleSearch = () => {
    setShowSearchPopup(true);
  };

  const handleCartClick = () => {
    console.log('Shopping Cart clicked');
  };

  const handleWishlistClick = () => {
    console.log('Wishlist clicked');
  };

  const closeSearchPopup = () => {
    setShowSearchPopup(false);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                <FaHome /> Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Shop
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {props.about}
              </a>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <button className="btn" onClick={handleSearch}>
              <FaSearch />
            </button>
            <button className="btn" onClick={handleCartClick}>
              <FaShoppingCart />
            </button>
            <button className="btn" onClick={handleWishlistClick}>
              <FaHeart />
            </button>
          </div>
        </div>
      </div>
      {showSearchPopup && (
        <div className="search-popup">
          <div className="search-popup-content">
            <span className="close" onClick={closeSearchPopup}>
              &times;
            </span>
            {/* Search catalog content goes here */}
            Search Catalog
          </div>
        </div>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
};

export default Navbar;
