import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import axios from "axios";
import { Link } from "react-router-dom";

import "./News.css";

export default function News() {
  const [newsList, setnewsList] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/api/news")
      .then((res) => {
        console.log(res.data);
        setnewsList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <section id="news">
      <div className="container">
        <div className="col-md-12 text-center">
          <h3>NEWS & UPDATES</h3>
          <hr className="HrBreaker" />
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 mt-3">
            {newsList.slice(0, 1).map((news) => {
              return (
                <div class="card">
                  <Link
                    to={{
                      pathname: "/news/" + news.id,
                    }}
                  >
                    <img
                      class="img-fluid"
                      src={news.coverImage}
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h5 class="card-title text-muted">{news.date}</h5>
                      <p class="card-text">{news.title}</p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mt-3">
            {newsList.slice(0, 5).map((news) => {
              return (
                /* News Row Start */
                <Link
                  to={{
                    pathname: "/news/" + news.id,
                  }}
                >
                  <div className="row mb-4">
                    <div
                      className="col-md-3 col-sm-2 "
                      style={{ width: "30%" }}
                    >
                      {" "}
                      <img
                        class="img-fluid"
                        src={news.coverImage}
                        alt="Card image cap"
                      />
                    </div>
                    <div className="col-md-8 col-sm-8" style={{ width: "70%" }}>
                      {" "}
                      <div>
                        <h5 class="card-title text-muted">{news.date}</h5>
                        <p class="card-text">{news.title}</p>
                      </div>
                    </div>
                  </div>
                </Link>

                /* News Row End */
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
