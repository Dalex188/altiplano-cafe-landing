import React from 'react';

export const Footer: React.FC = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        <div className="footer-col">
          <h4>Altiplano Café</h4>
          <p>Premium Guatemalan coffee exporters serving international buyers since 1985.</p>
        </div>
        <div className="footer-col">
          <h4>Products</h4>
          <ul>
            <li><a href="#">Whole Bean Coffee</a></li>
            <li><a href="#">Ground Coffee</a></li>
            <li><a href="#">Custom Blends</a></li>
            <li><a href="#">Micro-Lots</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Export Process</a></li>
            <li><a href="#">Sustainability</a></li>
            <li><a href="#">Quality Reports</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Support</h4>
          <ul>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Shipping Guide</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Altiplano Café. All rights reserved.</p>
      </div>
    </div>
  </footer>
);
