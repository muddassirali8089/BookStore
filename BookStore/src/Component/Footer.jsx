import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import logo from '../assets/logo.png'; 
const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          {/* Book Store Info */}
          <div className="col-md-3">
            <h5 className="footer-title">
               <img src={logo} alt="Logo" style={{ width: "150px", height: "40px" }}  />
            </h5>
            <p className="footer-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>

          {/* Company */}
          <div className="col-md-2">
            <h6 className="footer-heading">Company</h6>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">How to work?</a></li>
              <li><a href="#">Popular Course</a></li>
              <li><a href="#">Service</a></li>
            </ul>
          </div>

          {/* Courses */}
          <div className="col-md-2">
            <h6 className="footer-heading">Courses</h6>
            <ul className="footer-links">
              <li><a href="#">Categories</a></li>
              <li><a href="#">Online Course</a></li>
              <li><a href="#">Video Course</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-md-2">
            <h6 className="footer-heading">Support</h6>
            <ul className="footer-links">
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Career</a></li>
              <li><a href="#">Privacy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3">
            <h6 className="footer-heading">Contact Info</h6>
            <p className="footer-text">+923305375289</p>
            <p className="footer-text">Elizabeth.j@jourrapide.com</p>
            <p className="footer-text">
              4808 Skinner Hollow Road Days Creek, OR 97429
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="text-center">BookStore All Rights Reserved, 2022</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
