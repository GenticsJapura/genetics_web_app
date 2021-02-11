import React, { useState, useEffect } from "react";
import axios from "axios";
import MessageBox from "./MessageBox";
import { Link } from "react-router-dom";

export default function UserArticles(props) {
  const [articleList, setarticleList] = useState([]);



  useEffect(() => {
   getAllData();
  }, []);


  function getAllData(){
    const config = {
      headers: { "x-auth-token": localStorage.getItem("x-auth-token") },
    };
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/api/article/member", config)
      .then((res) => {
        console.log(res);
        setarticleList(res.data);
      })
      .catch((err) => {
        console.log("Api err", err);
      });
  }


  function deleteArticle(value) {
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("x-auth-token"),
      },
    };

    axios
      .delete(
        process.env.REACT_APP_BACKEND_URL + "/api/article/" + value,
        config
      )
      .then(() => {
        //re-render again
        getAllData();
      })
      .catch((err) => {
        console.log(err);
      });
  }


  return (
    <div>
      {articleList.length <= 0 ? (
        <MessageBox variant="danger">{"No Articles found"}</MessageBox>
      ) : (
        <div className="row center">
          <div>
            {articleList.map((article) => {
              return (
                <div className="cl-12 col-md-12 ml-1">
                  <div class="card">
                    <Link to={{
                              pathname: `/article`,
                              data: article.id,
                            }}>
                      <img
                        src={article.coverImage}
                        class="card-img-top"
                        alt="..."
                      />
                    </Link>

                    <div class="card-body">
                      <h5 class="card-title">{article.title}</h5>
                      <p class="card-text">{article.description}</p>
                      <div className="row text-center">
                        <div className="col col-md-6 col-sm-6">
                            <Link
                            to={{
                              pathname: `/editarticle`,
                              data: article.id,
                            }}
                            class="btn btn-info" //change btn icon
                          >
                            Edit
                          </Link>
                        </div>
                        <div className="col col-md-6 col-sm-6">
                          <button className="btn btn-danger" onClick={deleteArticle(article.id)}>Delete</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
