import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";

import axios from "axios";

import NavbarTwo from "../NavbarTwo";

import SideNavArticleList from "./SideNavArticleList";
import "./Articles.css";

export default function SingleArticle(props) {
  const [title, settitle] = useState();
  const [coverImage, setcoverImage] = useState();
  const [text, settext] = useState();
  const [loadingStatus, setloadingStatus] = useState(false);

  useEffect(() => {
    if (!props.location.data) {
      window.location = "/articles";
    }

    axios
      .get(
        process.env.REACT_APP_BACKEND_URL +
          "/api/article/" +
          props.location.data
      )
      .then((res) => {
        settitle(res.data.title);
        setcoverImage(res.data.coverImage);
        settext(res.data.text);
        setloadingStatus(true);
      })
      .catch((err) => {
        console(err);
        setloadingStatus(true);
      });
  }, []);

  return (
    <div>
      {loadingStatus ? (
        <div>
          <NavbarTwo />
          <div className="ArticleBackground">
            <div className="header-wraperArticle ">
              <div className="main-infoArticleHeader ">
                {" "}
                <h1 style={{ fontWeight: "bolder" }}>Articles</h1>
                <p>
                  Blogging is good for your career. A well-executed blog sets
                  you apart as an expert in your field. ~Penelope Trunk
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="container mt-5 mb-5">
              <div className="row">
                {" "}
                <div className="col-lg-9">
                  <img src={coverImage} id="SingleArticleCoverImage" />
                  <br />
                  <br />
                  <h3>{title}</h3>
                  <div className="richText">
                    <div
                      dangerouslySetInnerHTML={{ __html: text }}
                      style={{ overflowX: "hidden" }}
                    />
                  </div>
                </div>
                <div className="col-lg-3">
                  <SideNavArticleList />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {" "}
          <ReactLoading
            type="spinningBubbles"
            color="blue"
            className="ReactLoadingComponent"
            height={"5%"}
            width={"5%"}
          />
        </div>
      )}
    </div>
  );
}
