import React from "react";

import member1 from "./img/member1.jpg";
import member2 from "./img/member2.jpg";

export default function LecturersMobileComponent() {
  return (
    <div>
      <div className="row">
        <div className="col-md-12 text-center">
          <h3>LECTURERS</h3>
          <hr className="HrBreaker" />
        </div>

        {/* Column One Start */}
        <div className="col-md-12 AboutUsComponent text-center">
          <div className="row">
            <div
              className="col-md-12"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
              <img src={member1} className="LecurersImages" />
            </div>
            <div
              className="col-md-12 LecturerInfoColOne"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              <h6>
                <span className="paratext">Prof.Lasantha Dassanayake</span>
              </h6>
              <p>
                BSc Eng. (Hons) in Computer Systems & Engineering, University of
                Moratuwa, Sri Lanka, 1996
              </p>
              <p>
                Ph.D. in Robotics and Intelligent Systems, Saga University,
                Japan, 2003
              </p>
            </div>
          </div>
        </div>
        {/* Column One End */}
        {/* Column One Start */}
        <div className="col-md-12 AboutUsComponent text-center">
          <div className="row">
            <div
              className="col-md-12"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
              <img src={member1} className="LecurersImages" />
            </div>
            <div
              className="col-md-12 LecturerInfoColOne"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              <h6>
                <span className="paratext">Prof.Lasantha Dassanayake</span>
              </h6>
              <p>
                BSc Eng. (Hons) in Computer Systems & Engineering, University of
                Moratuwa, Sri Lanka, 1996
              </p>
              <p>
                Ph.D. in Robotics and Intelligent Systems, Saga University,
                Japan, 2003
              </p>
            </div>
          </div>
        </div>
        {/* Column One End */}
        {/* Column One Start */}
        <div className="col-md-12 AboutUsComponent text-center">
          <div className="row">
            <div
              className="col-md-12"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
              <img src={member1} className="LecurersImages" />
            </div>
            <div
              className="col-md-12 LecturerInfoColOne"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              <h6>
                <span className="paratext">Prof.Lasantha Dassanayake</span>
              </h6>
              <p>
                BSc Eng. (Hons) in Computer Systems & Engineering, University of
                Moratuwa, Sri Lanka, 1996
              </p>
              <p>
                Ph.D. in Robotics and Intelligent Systems, Saga University,
                Japan, 2003
              </p>
            </div>
          </div>
        </div>
        {/* Column One End */}
      </div>
    </div>
  );
}
