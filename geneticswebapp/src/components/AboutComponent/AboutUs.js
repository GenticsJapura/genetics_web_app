import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import TeamImg from "./img/team.png";
import Logo from "./img/logoWhite.png";

import "./aboutus.css";
import "../../App.css";

import CommetteMember from "./CommetteMemberNew";
import LecturersComponent from "./Lecturers";
import LecturersMobileComponent from "./LecturersMobile";
import Particle from "./particle";
import MainCommette from "./MainCommette";
export default function AboutUs() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section id="about">
      <div className="AboutUsComponent">
        <div className="container">
          <div className="row AboutUsRowOne ">
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
                The Genetics Society of Sri Jayewardenepura University is an
                academic association among the University undergraduates under
                the Applied Science Stream. It was founded by Prof. B.G.D.N. K
                de Silva in 2010, with the objective to develop the knowledge on
                genetics among school and University students in Sri Lanka. It
                is one of the first few learned societies devoted to genetics.
                The committee is managed by senior undergraduates of the
                University and the membership of the society is shared among the
                University undergraduates, research students and University
                academics.
              </p>
            </div>
          </div>

          <div className="AboutUsComponent">
            <CommetteMember />
          </div>

          <div className="AboutUsComponent ">
            <div className="LecComponentDesktop ">
              <Particle />
            </div>
            <div className="LecComponentMobile ">
              <LecturersMobileComponent />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
