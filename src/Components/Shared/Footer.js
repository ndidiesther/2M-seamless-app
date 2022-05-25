import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/Footer.css";

const Footer = () => {
  return (
    <div className="col-12 footer">
      <div className="col-12 main_footer">
        <div className="col-md-3 col-sm-6 col-xs-12 ">
          <h3>COMPANY</h3>
          <p>
            <Link to="">About Us</Link>
          </p>
          <p>
            <Link to="">Contact</Link>
          </p>
          <p>
            <Link to="">Store Locations</Link>
          </p>
          <p>
            <Link to="">Careers</Link>
          </p>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <h3>HELP</h3>
          <p>
            <Link to="">Order Tracking</Link>
          </p>
          <p>
            <Link to="">FAQ's</Link>
          </p>
          <p>
            <Link to="">Privacy Policy</Link>
          </p>
          <p>
            <Link to="">Terms & Conditions</Link>
          </p>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <h3>STORE</h3>
          <p>
            <Link to="">Women</Link>
          </p>
          <p>
            <Link to="">Men</Link>
          </p>
          <p>
            <Link to="">Kiddies</Link>
          </p>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <h3>FOLLOW US</h3>
          <p className="follow_us">And get Free Shipping on all your orders!</p>
          <p>
            <span className="nav-icons">
              <Link to="">
                <i className="fa-brands fa-facebook-f"></i>
              </Link>
              <Link to="">
                <i className="fa-brands fa-twitter"></i>
              </Link>
              <Link to="">
                <i className="fa-brands fa-instagram"></i>
              </Link>
            </span>
          </p>
        </div>
      </div>
      <div className="col-12 sub_footer">
        <p>Sign up now & get 10% off</p>
        <p>Be the first to know about our new arrivals and exclusive offers.</p>
        <input className="footer_input" placeholder="Your email address" />{" "}
        <button className="footer_btn">Sign Up</button>
      </div>
      <div className="col-12 end_footer">
        <span>
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
        </span>
        <span>2021 ® 2M Seamless</span>
      </div>
    </div>
  );
};

export default Footer;
