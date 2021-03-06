import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactQuill from "react-quill";

import { storage } from "../../../firebase";
import Progress from "./Progress";
import "./AddArticle.css";

import UploadImage from "./img/upload.jpg";

import SideNav from "../MemberDashboardComponent/SideNav";

export default function AddArticle() {
  const [memberID, setmemberID] = useState();
  const [memberName, setmemberName] = useState();
  const [title, settitle] = useState();
  const [description, setdescription] = useState();
  const [text, settext] = useState("Write something");
  const [coverImage, setcoverImage] = useState();

  const [uploadPercentage, setuploadPercentage] = useState(0);
  const [imageUploadingState, setimageUploadingState] = useState("");

  useEffect(() => {
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("x-auth-token"),
      },
    };

    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/api/auth", config)
      .then((res) => {
        setmemberID(res.data.memberID);
        setmemberName(res.data.fullName);
      })
      .catch((err) => {
        alert("Something went wrong");
      });
  }, []);

  AddArticle.modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };

  function autoUploadImage(e) {
    setimageUploadingState("Please wait.. Your Image is Uploading");
    if (e.target.files[0] !== null) {
      const fileName =
        Math.floor(Math.random() * 10000000 + 1) + e.target.files[0].name;
      const uploadTask = storage
        .ref(`articles/${fileName}`)
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
            .ref("articles")
            .child(fileName)
            .getDownloadURL()
            .then((url) => {
              setcoverImage(url);
              setimageUploadingState("Uploaded successfully");
            });
        }
      );
    } else {
      alert("First You Must Select An Image");
    }
  }

  function AddArticle() {
    if (!coverImage) {
      alert("You must upload an image");
      return false;
    }
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("x-auth-token"),
      },
    };

    const newArticle = {
      memberID,
      memberName,
      title,
      description,
      text,
      coverImage,
    };

    axios
      .post(
        process.env.REACT_APP_BACKEND_URL + "/api/article",
        newArticle,
        config
      )
      .then(() => {
        alert("Article Added");
        window.location = "/member";
      })
      .catch((err) => {
        alert("Error..Try Again");
        window.location = "/member";
      });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2">
          <SideNav />
        </div>
        <div className="col-md-10">
          {" "}
          <div className="AddArticleComponent">
            <div className="text-center">
              <h5>ADD Article</h5>
              <hr />
            </div>
            <div class="form-group">
              <label>Title</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Title"
                onChange={(e) => {
                  settitle(e.target.value);
                }}
                required
              />
            </div>
            <div class="form-group">
              <label>Description</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Description"
                onChange={(e) => {
                  setdescription(e.target.value);
                }}
                required
              />
            </div>
            <div class="form-group">
              {coverImage ? (
                <img
                  src={coverImage}
                  style={{ width: "270px", height: "200px" }}
                />
              ) : (
                <img
                  src={UploadImage}
                  style={{ width: "270px", height: "200px" }}
                />
              )}

              <p style={{ color: "red" }}>{imageUploadingState}</p>
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
            <div class="form-group">
              <ReactQuill
                modules={AddArticle.modules}
                placeholder="Write something"
                onChange={(value) => {
                  settext(value);
                }}
                required
              />
            </div>
            <div className="btn btn-success" onClick={AddArticle}>
              Submit
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
