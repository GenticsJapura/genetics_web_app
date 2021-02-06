import React from "react";

import member1 from "./img/member1.jpg";
import member2 from "./img/member2.jpg";

export default function CommetteMember() {
  return (
    <div>
      <div className="row">
        <div className="col-md-12 text-center">
          <h3>COMMITTEE MEMBERS</h3>
          <hr className="HrBreaker" />
        </div>

        {/* Column One Start */}
        <div className="col-md-3 AboutUsComponent">
          <div className="text-center">
            <img
              src={member1}
              class="card-img-top MemberImage"
              alt="memeber1"
            />
          </div>

          <div class="card-body text-center">
            <p class="card-text">Senura Jayadeva</p>
            <p class="card-text ">
              <span className="memberrole">President</span>
            </p>
          </div>
        </div>
        {/* Column One End */}
        {/* Column One Start */}
        <div className="col-md-3 AboutUsComponent">
          <div className="text-center">
            <img
              src={member1}
              class="card-img-top MemberImage"
              alt="memeber1"
            />
          </div>

          <div class="card-body text-center">
            <p class="card-text">Senura Jayadeva</p>
            <p class="card-text ">
              <span className="memberrole">President</span>
            </p>
          </div>
        </div>
        {/* Column One End */}
        {/* Column One Start */}
        <div className="col-md-3 AboutUsComponent">
          <div className="text-center">
            <img
              src={member1}
              class="card-img-top MemberImage"
              alt="memeber1"
            />
          </div>

          <div class="card-body text-center">
            <p class="card-text">Senura Jayadeva</p>
            <p class="card-text ">
              <span className="memberrole">President</span>
            </p>
          </div>
        </div>
        {/* Column One End */}
        {/* Column One Start */}
        <div className="col-md-3 AboutUsComponent">
          <div className="text-center">
            <img
              src={member1}
              class="card-img-top MemberImage"
              alt="memeber1"
            />
          </div>

          <div class="card-body text-center">
            <p class="card-text">Senura Jayadeva</p>
            <p class="card-text ">
              <span className="memberrole">President</span>
            </p>
          </div>
        </div>
        {/* Column One End */}
      </div>
    </div>
  );
}
