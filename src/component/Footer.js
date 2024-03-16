import React from 'react';
import './CSS/footer-Link.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>MyFurniture</h2>
        <address>
          1234 Furniture St. <br />
          Cityville, State, 12345 <br />
          Country
        </address>
      </div>
      <div className="footer-links">
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Help</a></li>
            <li><a href="#">Payment Options</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Privacy Policies</a></li>
            <li><a href="#">Newsletter</a></li>
          </ul>
        </nav>
      </div>
      <p className="copyright">&copy; 2023 MyFurniture. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
