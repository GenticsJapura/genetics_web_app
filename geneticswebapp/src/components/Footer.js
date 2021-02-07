import React from "react";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4 offset-1 col-sm-2">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/aboutus">About Us</Link>
              </li>
              <li>
                <Link to="/contactus">Contact Us</Link>
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
              <a href="mailto:confusion@food.net">usjgmbsociety@gmail.com</a>
            </address>
          </div>
          <div className="col-12 col-sm-4 align-self-center">
            <div className="text-center">
              <a
                className="btn btn-social-icon btn-google"
                href=""
              >
                <i className="fa fa-google-plus" />
              </a>
              <a
                // className="btn btn-social-icon btn-facebook"
                href=""
              >
                 <i className="fa fa-facebook"></i>
              </a>
              <a
                className="btn btn-social-icon btn-linkedin"
                href=""
              >
                <i className="fa fa-linkedin" />
              </a>
              <a
                className="btn btn-social-icon btn-twitter"
                href=""
              >
                <i className="fa fa-twitter" />
              </a>
              <a
                className="btn btn-social-icon btn-google"
                href=""
              >
                <i className="fa fa-youtube" />
              </a>
              <a className="btn btn-social-icon" href="mailto:">
                <i className="fa fa-envelope-o" />
              </a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          
        </div>
      </div>
    </div>
  );
}

export default Footer;
