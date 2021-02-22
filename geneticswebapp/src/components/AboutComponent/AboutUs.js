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
              <p
                className=" text-center"
                style={{ color: "white", fontSize: "13px" }}
              >
                The Genetics and Molecular Biology Society of University of Sri
                Jayewardenepura is an academic association functioning among
                young undergraduates with the aim of extending transcending
                excellence and passion in propagating knowledge among the
                society about the fields of Genetics and Molecular Biology. It
                also aims at spreading the essence of Genetic diversity that
                underlies Biological Diversity to raise awareness about
                conservation and hence extending an invaluable service to the
                community as a whole. In order to accomplish these goals, the
                society organizes workshops, webinars and competitions, and
                publishes articles on focused and timely topics. Through the
                various events organized, we aspire to cater an institutional
                space to its members in developing their soft skills and be a
                leader in the pursuit and dissemination of knowledge.
              </p>
            </div>
          </div>

          <div className="AboutUsComponent ">
            <br />
            <div className="LecComponentDesktop ">
              <Particle />
            </div>
            <div className="LecComponentMobile ">
              <LecturersMobileComponent />
            </div>
          </div>

          <div className="AboutUsComponent">
            <br />
            <MainCommette />
          </div>
        </div>
      </div>
    </section>
  );
}
