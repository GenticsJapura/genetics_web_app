import React from "react";
import CountUp from "react-countup";
import "./societyinfo.css";

export default function SocietyInfo() {
  return (
    <div>
      <div className="row societyinforow ">
        {/* Column One Start */}
        <div className="col-lg-4 col-sm-12 text-center societyinfoDiv">
          <div className="row">
            {" "}
            <div className="col-lg-12 col-sm-12 text-center">
              <i class="fas fa-users homepagefontawesomeicons"></i>
            </div>
            <div className="col-lg-12 col-sm-12 text-center homepagefontawesometext">
              <p className="societyInfoText">Members</p>
              <span className="countDownText">
                <CountUp start={0} end={10} duration={10} separator=" " /> +
              </span>
            </div>
          </div>
        </div>
        {/* Column One End */}
        {/* Column One Start */}
        <div className="col-lg-4 col-sm-12 text-center societyinfoDiv">
          <div className="row">
            {" "}
            <div className="col-lg-12 col-sm-12 text-center">
              <i class="fas fa-user-tie homepagefontawesomeicons"></i>
            </div>
            <div className="col-lg-12 col-sm-12 text-center homepagefontawesometext">
              <p className="societyInfoText">Lectures</p>
              <span className="countDownText">
                <CountUp start={0} end={10} duration={10} separator=" " /> +
              </span>
            </div>
          </div>
        </div>
        {/* Column One End */}
        {/* Column One Start */}
        <div className="col-lg-4 col-sm-12 text-center societyinfoDiv">
          <div className="row">
            {" "}
            <div className="col-lg-12 col-sm-12 text-center">
              <i class="far fa-newspaper homepagefontawesomeicons"></i>
            </div>
            <div className="col-lg-12 col-sm-12 text-center homepagefontawesometext">
              <p className="societyInfoText">Articles</p>
              <span className="countDownText">
                <CountUp start={0} end={10} duration={10} separator=" " /> +
              </span>
            </div>
          </div>
        </div>
        {/* Column One End */}
      </div>
    </div>
  );
}
