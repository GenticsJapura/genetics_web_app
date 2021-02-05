import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import TeamImg from "./img/team.png";
import Logo from "./img/logoWhite.png";

import "./aboutus.css";
import "../../App.css";

import CommetteMember from "./CommetteMember";
import LecturersComponent from "./Lecturers";

export default function AboutUs() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="AboutUsComponent">
      <div className="container">
        <div className="row AboutUsRowOne">
          <div
            className="col-lg-6 col-md-6 text-center"
            data-aos="zoom-out"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
          >
            <img src={Logo} />
          </div>
          <div
            className="col-lg-6 col-md-6 text-center"
            className="col-lg-6 col-md-6 text-center"
            data-aos="fade-left"
            data-aos="zoom-out"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
          >
            <h3 className=" text-center">WHO WE ARE</h3>
            <hr className="HrBreaker" />
            <p className=" text-center">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved
            </p>
          </div>
        </div>

        <div className="AboutUsComponent">
          <CommetteMember />
        </div>

        <div className="AboutUsComponent">
          <LecturersComponent />
        </div>
      </div>
    </div>
  );
}
