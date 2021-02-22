import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function SideNavArticleList() {
  const [articleList, setarticleList] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/api/article/all")
      .then((res) => {
        setarticleList(res.data);
      })
      .catch((err) => {
        console.log("Something Went Wrong");
      });
  }, []);

  return (
    <div>
      <div className="row">
        <h3 style={{ marginLeft: "10px" }}>Related Articles</h3>
        {/* Column One Start*/}
        {articleList.map((article) => {
          return (
            <div className="col-lg-12 mt-2 mb-3">
              <div class="card">
                {/* <img
                src="https://thumbs.dreamstime.com/b/molecular-structure-background-science-template-wallpaper-banner-dna-molecules-asbtract-scientific-molecule-wave-flow-192526703.jpg"
                class="card-img-top"
                alt="..."
              /> */}
                <div class="card-body">
                  <h5 class="card-title">{article.title}</h5>
                  <p class="card-text">{article.description}</p>
                  <Link
                    to={{
                      pathname: "/article",
                      data: article.id,
                    }}
                    class="btn btn-info"
                  >
                    READ MORE
                  </Link>
                </div>
              </div>
            </div>
          );
        })}

        {/* Column One End */}
      </div>
    </div>
  );
}
