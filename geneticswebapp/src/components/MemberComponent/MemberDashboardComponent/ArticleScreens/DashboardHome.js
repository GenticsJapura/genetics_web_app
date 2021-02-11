import React from "react";
import "../dashboard.css";
import Articles from "./UserArticles";
import {Link} from "react-router-dom"

export default function Dashboard() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-3 col-md-4 col-sm-12 admindashboard">
          <div className="row">
            <div className="col-lg-12 text-center ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf2j71u2ipMbi4uUIcRaomOvJOSPkvvUPWFA&usqp=CAU"
                style={{ width: "200px", height: "200px", borderRadius: "50%" }}
              />
            </div>
            <br /> <br />
            <div className="col-lg-12 text-center">
              <p>senurajayade@gmail.com</p>
              <button
                className="btn btn-danger"
                onClick={() => {
                  localStorage.removeItem("x-auth-token");
                  window.location = "/";
                }}
              >
                LOGOUT
              </button>
              <div className="justify-center">
                <center>
                  {" "}
                
                  <Link
                    to={{
                      pathname: "/addarticle",
                    }}
                    class="btn btn-success mt-4"
                  >Add Article
                  </Link>
                    
                </center>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-8 col-md-8 col-sm-12 admindashboard">
          <div className="row">
            <div className="col-lg-12 col-sm-12 admindashboardCol ">
              {" "}
              <h3 className="text-center">Articles</h3>
              <Articles />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
