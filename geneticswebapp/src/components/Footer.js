import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer" style={{ overflowX: "hidden" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4 offset-1 col-sm-2">
            <br />
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <a class="nav-link js-scroll-trigger footerLink" href="#home">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li>
                <a class="nav-link js-scroll-trigger footerLink" href="#about">
                  About us
                </a>
              </li>
              <li>
                <a
                  class="nav-link js-scroll-trigger footerLink"
                  href="#contact"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>
          <div className="col-7 col-sm-5">
            <h5>Our Address</h5>
            <address>
              University of Sri jayewardenepura
              <br />
              Gangodawila, Nugegoda
              <br />
              Sri Lanka
              <br />
              <i className="fa fa-phone fa-lg" />: +94 701853727
              <br />
              <i className="fa fa-fax fa-lg" />: +94 741139521
              <br />
              <i className="fa fa-envelope fa-lg" />:{" "}
              <a href="mailto:confusion@food.net" className="footerLink">
                usjgmbsociety@gmail.com
              </a>
            </address>
          </div>
          <div className="col-12 col-sm-4 align-self-center">
            <div className="text-center">
              <a className="btn btn-social-icon btn-google" href="">
                <i className="fa fa-google-plus" />
              </a>
              <a className="btn btn-social-icon btn-facebook" href="">
                <i class="fab fa-facebook-square fa-2x socialIcon socialIconFacebook"></i>
              </a>
              <a className="btn btn-social-icon btn-linkedin" href="">
                <i class="fab fa-linkedin fa-2x socialIcon socialIconLinkedin"></i>
              </a>
              <a className="btn btn-social-icon btn-twitter" href="">
                <i class="fab fa-twitter fa-2x socialIcon socialIconTwitter"></i>
              </a>
              <a className="btn btn-social-icon btn-google" href="">
                <i className="fa fa-youtube socialIcon" />
              </a>
              <a className="btn btn-social-icon" href="mailto:">
                <i className="fa fa-envelope-o" />
              </a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center"></div>
      </div>
    </div>
  );
}

export default Footer;
