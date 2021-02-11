import React, { useState, useEffect } from "react";
import axios from "axios";

import SideNavArticleList from "./SideNavArticleList";
import "./Articles.css";

export default function SingleArticle(props) {
  const [title, settitle] = useState();
  const [coverImage, setcoverImage] = useState();
  const [text, settext] = useState();

  useEffect(() => {
    console.log(props.location.data);
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
      })
      .catch((err) => {
        console(err);
      });
  }, []);

  return (
    <div>
      <div className="ArticleBackground">
        <div className="header-wraperArticle ">
          <div className="main-infoArticleHeader ">
            {" "}
            <h1 style={{ fontWeight: "bolder" }}>Articles</h1>
            <p>
              Blogging is good for your career. A well-executed blog sets you
              apart as an expert in your field. ~Penelope Trunk
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="container mt-5 mb-5">
          <div className="row">
            {" "}
            <div className="col-lg-9">
              <img src={coverImage} style={{ width: "700px" }} />
              <br />
              <br />
              <h3>{title}</h3>
              <div className="richText">
                <div dangerouslySetInnerHTML={{ __html: text }} />
              </div>
            </div>
            <div className="col-lg-3">
              <SideNavArticleList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
