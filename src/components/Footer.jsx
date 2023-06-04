import React from "react";
import "./Footer.scss";
// import '../node_modules/font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = () => {
  return (
    <div>
      <footer id="footer-main" className="footer-main">
        <div className="container">
          <div className="row mt-50">
            <div className="col-md-12 col-lg-4">
              <div className="footer-main-box-info text-dark">
                <a href="index.html" className="footer-logo">
                  <img
                    src={require("./logo.png")}
                    alt="footer_logo"
                    className=""
                    width={120}
                  />
                </a>
                <p className="footer-info-text mt-3 fs-4">
                "Embrace the art of reading, <br /> explore endless possibilities."
                </p>
                <div className="footer-social-link">
                  <h3>Follow us</h3>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4 pd-custom">
                <ul className="list-unstyled text-decoration-none">
                  <li>
                    <a href="#" className="text-decoration-none text-light">About us</a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none text-light">Services</a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none text-light">Projects</a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none text-light">Our Team</a>
                  </li>
                </ul>
                </div>
                <div className="col-md-12 col-lg-4">
                <ul className="list-unstyled">
                  <li>
                    <h3 className="text-light">ReadToLead</h3>
                  </li>
                  <li>
                    <h4 className="text-light">Ahmedabad,Gujarat</h4>
                  </li>
                  <li>
                    <p className="m-0 p-0 fs-5 text-light">Contact Us</p>
                  </li>
                  <li>
                    <p className="fs-5 text-light">readtolead@gmail.com</p>
                  </li>
                </ul>
              </div>
          </div>
        </div>
        <div className="mt-custom">
            <div className="text-center text-light">
                <span>Copyright © 2019, All Right Reserved @ ReadToLead</span>
            </div>
        </div>
      </footer>
    </div>
  );
};
