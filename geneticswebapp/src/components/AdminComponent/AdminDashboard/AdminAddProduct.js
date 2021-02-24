import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminSideNav from "./AdminSideNav";
import { storage } from "../../../firebase";
import Progress from "./Progress";

import "../admin.css";

import UploadImage from "./img/upload.jpg";

export default function AdminAddProduct() {
  const [title, settitle] = useState("");
  const [price, setprice] = useState("");
  const [image, setimage] = useState(null);
  const [uploadPercentage, setuploadPercentage] = useState(0);
  const [imageUploadingState, setimageUploadingState] = useState("");
  useEffect(() => {
    if (
      !localStorage.getItem("x-auth-token") &&
      localStorage.getItem("role") !== "Admin"
    ) {
      window.location = "/";
    }
  }, []);

  function autoUploadImage(e) {
    setimageUploadingState("Please wait.. Your Image is Uploading");
    if (e.target.files[0] !== null) {
      const fileName =
        Math.floor(Math.random() * 10000000 + 1) + e.target.files[0].name;
      const uploadTask = storage
        .ref(`products/${fileName}`)
        .put(e.target.files[0]);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          //progress function
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setuploadPercentage(progress);
        },
        (error) => {
          //error function

          alert("Something went wrong");
        },
        () => {
          //complete function
          storage
            .ref("products")
            .child(fileName)
            .getDownloadURL()
            .then((url) => {
              setimage(url);
              setimageUploadingState("Uploaded successfully");
            });
        }
      );
    } else {
      alert("First You Must Select An Image");
    }
  }

  function AddProduct(e) {
    e.preventDefault();
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("x-auth-token"),
      },
    };

    if (!image) {
      alert("You must upload an image");
      return false;
    }

    const newPost = {
      title,
      price,
      image,
    };

    axios
      .post(process.env.REACT_APP_BACKEND_URL + "/api/product", newPost, config)
      .then(() => {
        alert("Product Added");
        window.location = "/admin";
      })
      .catch((err) => {
        alert("Error..Try Again");
        window.location = "/admin";
      });
  }

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-3 col-md-4 col-sm-12 admindashboard">
          <AdminSideNav />
        </div>

        <div className="col-lg-8 col-md-8 col-sm-12 admindashboard">
          <h3 className="text-center">ADD Product</h3>
          <form onSubmit={AddProduct}>
            <div class="form-group">
              <label>title</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter title"
                required
                onChange={(e) => {
                  settitle(e.target.value);
                }}
              />
            </div>
            <div class="form-group">
              <label>price</label>
              <input
                type="number"
                class="form-control"
                placeholder="price"
                required
                onChange={(e) => {
                  setprice(e.target.value);
                }}
              />
            </div>

            <div class="form-group">
              {image ? (
                <img src={image} style={{ width: "270px", height: "200px" }} />
              ) : (
                <img
                  src={UploadImage}
                  style={{ width: "270px", height: "200px" }}
                />
              )}

              <br />
              <span style={{ color: "red", fontWeight: "bold" }}>
                {imageUploadingState}
              </span>
              <input
                type="file"
                onChange={autoUploadImage}
                class="form-control"
                required
              />
            </div>
            <div class="form-group">
              {uploadPercentage} %
              <Progress percentage={uploadPercentage} />
            </div>

            <button type="submit" class="btn btn-primary">
              ADD
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
