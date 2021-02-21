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
                <span className="paratext">Prof. B.G.D.N.K. De Silva</span>
              </h4>

              <p>B.Sc (USJ), Ph.D. (USJ)</p>
              <p>Senior Professor</p>
              <p>
                Research Interests: Genetics, Molecular Biology, Medical
                Entomology, Molecular Entomology
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
                <span className="paratext">Dr. Hiruni Harischandra </span>
              </h4>

              <p>B.Sc. (ISU), Ph.D. (ISU)</p>
              <p>Senior Lecturer – Genetics & Molecular Biology Unit</p>
              <p>
                Research Interests- Genetics, Molecular Biology, Parasite and
                host interactions, development of diagnostics for Lymphatic
                filariasis, investigating the spread of Lymphatic filariasis in
                Sri Lanka
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
                <span className="paratext">Dr. Iresha N. Harischandra</span>
              </h4>
              <p>B. Sc. (UOC), Ph.D. (USJP)</p>
              <p>
                Research Interest – Population genetics, Conservation genetics,
                Evolutionary and Population genomics of wild animals
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
                <span className="paratext">Dr. Iresha N. Harischandra</span>
              </h4>
              <p>B. Sc. (UOC), Ph.D. (USJP)</p>
              <p>
                Research Interest – Population genetics, Conservation genetics,
                Evolutionary and Population genomics of wild animals
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
