import React from "react";

import "./Articles.css";

import ArticlesList from "./ArticlesList";
import SideNavArticleList from "./SideNavArticleList";

import CoverImg from "../../img/banner.png";

export default function Articles() {
  return (
    <div>
      <div className="ArticleBackground">
        <div className="header-wraperArticle ">
          <div className="main-infoArticleHeader ">
            {" "}
            <br /> <br />
            <br />
            <h1 style={{ fontWeight: "bolder" }}>Articles</h1>
            <p>
              Blogging is good for your career. A well-executed blog sets you
              apart as an expert in your field. ~Penelope Trunk
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="container">
          <div className="row mt-5 mb-5">
            <div className="col-lg-8">
              <ArticlesList />
            </div>
            <div className="col-lg-4">
              <SideNavArticleList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
