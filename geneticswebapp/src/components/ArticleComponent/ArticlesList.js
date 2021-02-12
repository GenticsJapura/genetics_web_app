import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import axios from "axios";
import { Link } from "react-router-dom";

import "../../App.css";

export default function ArticlesList() {
  const [articleList, setarticleList] = useState([]);
  const [loadingStatus, setloadingStatus] = useState(false);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/api/article")
      .then((res) => {
        console.log(res);
        setarticleList(res.data);
        setloadingStatus(true);
      })
      .catch((err) => {
        console.log(err);
        setloadingStatus(true);
      });
  }, []);

  return (
    <div>
      {loadingStatus ? (
        <div className="row">
          {/* Column One Start*/}
          {articleList.map((article) => {
            return (
              <div className="col-lg-12 mt-2 mb-3">
                <div class="card">
                  <img
                    src={article.coverImage}
                    class="card-img-top"
                    alt="..."
                  />
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
      ) : (
        <div>
          {" "}
          <ReactLoading
            type="spinningBubbles"
            color="blue"
            className="ReactLoadingComponent"
          />
        </div>
      )}
    </div>
  );
}
