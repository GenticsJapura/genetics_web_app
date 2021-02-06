import React from "react";

import member1 from "./img/member1.jpg";
import member2 from "./img/member2.jpg";

export default function LecturersComponent() {
  return (
    <div className="container">
      <div className="row LecComponentRow">
        <div className="col-md-12 text-center">
          <h3>LECTURERS</h3>
          <hr className="HrBreaker" />
        </div>

        {/* Column One Start */}
        <div className="col-md-12 AboutUsComponent ">
          <div className="row">
            <div
              className="col-lg-4 col-md-6 "
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
              <img src={member1} className="LecurersImages" />
            </div>
            <div
              className="col-lg-8 col-md-6 LecturerInfoColOne LecComponent"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              <h4>
                <span className="paratext">Prof.Lasantha Dassanayake</span>
              </h4>

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
        {/* Column Two Start */}
        <div className="col-md-12 AboutUsComponent">
          <div className="row">
            <div
              className="col-lg-8 col-md-6 LecturerInfoColTwo"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              <h4>
                <span className="paratext">Prof.Malani Kaluthuge</span>
              </h4>
              <p>
                BSc Eng. (Hons) in Computer Systems & Engineering, University of
                Moratuwa, Sri Lanka, 1996
              </p>
              <p>
                Ph.D. in Robotics and Intelligent Systems, Saga University,
                Japan, 2003
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
              <img
                src="https://essa-africa.org/sites/default/files/2019-11/Aishwarya%20Tiku.jpg"
                className="LecurersImages"
              />
            </div>
          </div>
        </div>
        {/* Column Two End */}

        {/* Column One Start */}
        <div className="col-md-12 AboutUsComponent">
          <div className="row">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
              <img src={member1} className="LecurersImages" />
            </div>
            <div
              className="col-lg-8 col-md-6 LecturerInfoColOne "
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              <h4>
                {" "}
                <span className="paratext">Prof.Lasantha Dassanayake</span>
              </h4>
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
        {/* Column Two Start */}
        <div className="col-md-12 AboutUsComponent">
          <div className="row">
            <div
              className="col-lg-8 col-md-6 LecturerInfoColTwo"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              <h4>
                <span className="paratext">Prof.Malani Kaluthuge</span>
              </h4>
              <p>
                BSc Eng. (Hons) in Computer Systems & Engineering, University of
                Moratuwa, Sri Lanka, 1996
              </p>
              <p>
                Ph.D. in Robotics and Intelligent Systems, Saga University,
                Japan, 2003
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
              <img
                src="https://essa-africa.org/sites/default/files/2019-11/Aishwarya%20Tiku.jpg"
                className="LecurersImages"
              />
            </div>
          </div>
        </div>
        {/* Column Two End */}
      </div>
    </div>
  );
}