import React from "react";

export default function SideNavArticleList() {
  return (
    <div>
      <div className="row">
        <h3 style={{ marginLeft: "10px" }}>Top Rated</h3>
        {/* Column One Start*/}
        <div className="col-lg-12 mt-2 mb-3">
          <div class="card">
            <img
              src="https://thumbs.dreamstime.com/b/molecular-structure-background-science-template-wallpaper-banner-dna-molecules-asbtract-scientific-molecule-wave-flow-192526703.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                READ MORE MORE
              </a>
            </div>
          </div>
        </div>
        {/* Column One End */}
        {/* Column One Start*/}
        <div className="col-lg-12  mt-2 mb-3">
          <div class="card">
            <img
              src="https://thumbs.dreamstime.com/b/molecular-structure-background-science-template-wallpaper-banner-dna-molecules-asbtract-scientific-molecule-wave-flow-192526703.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                READ MORE
              </a>
            </div>
          </div>
        </div>
        {/* Column One End */}
        {/* Column One Start*/}
        <div className="col-lg-12  mt-2 mb-3">
          <div class="card">
            <img
              src="https://thumbs.dreamstime.com/b/molecular-structure-background-science-template-wallpaper-banner-dna-molecules-asbtract-scientific-molecule-wave-flow-192526703.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                READ MORE
              </a>
            </div>
          </div>
        </div>
        {/* Column One End */}
      </div>
    </div>
  );
}
