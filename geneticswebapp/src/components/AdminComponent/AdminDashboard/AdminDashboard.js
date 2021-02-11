import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import "../admin.css";

import AdminCustomerTable from "./AdminCustomerTable";
import AdminArticleTable from "./AdminArticleTable";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function AdminDashboard() {
  const classes = useStyles();

  useEffect(() => {
    if (
      !localStorage.getItem("x-auth-token") &&
      localStorage.getItem("role") !== "Admin"
    ) {
      window.location = "/";
    }
  }, []);

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
                  localStorage.removeItem("role");
                  window.location = "/";
                }}
              >
                LOGOUT
              </button>
            </div>
          </div>
        </div>

        <div className="col-lg-8 col-md-8 col-sm-12 admindashboard">
          <div className="row">
            <div className="col-lg-12 col-sm-12 admindashboardCol ">
              {" "}
              <h3 className="text-center">Member Table</h3>
              <AdminCustomerTable />
            </div>
            <div className="col-lg-12 col-sm-12 admindashboardCol mt-5">
              {" "}
              <h3 className="text-center">Article Table</h3>
              <AdminArticleTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
