"use strict";

const firebase = require("../db");
const Member = require("../models/Member.model");
const firestore = firebase.firestore();
let bcrypt = require("bcryptjs");

//Insert Member Function
const addMember = async (req, res) => {
  const dataInsertedDate = new Date();
  try {
    let {
      userName,
      password,
      fullName,
      email,
      contactNo,
      userImage,
    } = req.body;

    //Encrypt Password

    //10 is enogh..if you want more secured.user a value more than 10
    let salt = await bcrypt.genSalt(10);

    //hashing password
    password = await bcrypt.hash(password, salt);

    const data = {
      userName,
      password,
      fullName,
      email,
      contactNo,
      userImage,
      dataInsertedDate,
    };

    await firestore.collection("members").doc().set(data);
    res.send("Recored saved successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//Get All Members Function
const getAllMembers = async (req, res, next) => {
  try {
    const members = await firestore.collection("members");
    const data = await members.get();
    const membersArray = [];
    if (data.empty) {
      res.status(404).send("No Member Record Found");
    } else {
      data.forEach((doc) => {
        const member = new Member(
          doc.id,
          doc.data().userName,
          doc.data().password,
          doc.data().fullName,
          doc.data().email,
          doc.data().contactNo,
          doc.data().userImage
        );
        membersArray.push(member);
      });
      res.send(membersArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//Get One specific Member Function
const getMember = async (req, res, next) => {
  try {
    const id = req.params.id;
    const member = await firestore.collection("members").doc(id);
    const data = await member.get();
    if (data.empty) {
      res.status(404).send("No Member Record Found");
    } else {
      res.send(data.data());
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//Update Member Function
const updateMember = async (req, res, next) => {
  try {
    const id = req.params.id; //get user id from the json web token
    if (!req.body.password) {
      let { userName, fullName, email, contactNo, userImage } = req.body;

      const data = {
        userName,
        fullName,
        email,
        contactNo,
        userImage,
      };

      const member = await firestore.collection("members").doc(id);
      await member.update(data);
      res.send("Member record updated successfully");
    } else {
      let {
        userName,
        fullName,
        password,
        email,
        contactNo,
        userImage,
      } = req.body;

      //Encrypt Password

      //10 is enogh..if you want more secured.user a value more than 10
      let salt = await bcrypt.genSalt(10);

      //hashing password
      password = await bcrypt.hash(password, salt);

      const data = {
        userName,
        fullName,
        email,
        password,
        contactNo,
        userImage,
      };

      const member = await firestore.collection("members").doc(id);
      await member.update(data);
      res.send("Member record updated successfully");
    }
  } catch (error) {
    res.status(400).send(error.message);
    console.log(error);
  }
};

//Delete Member Function
const deleteMember = async (req, res, next) => {
  try {
    const id = req.params.id;
    await firestore.collection("members").doc(id).delete();
    res.send("Member record deleted successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  addMember,
  getAllMembers,
  getMember,
  updateMember,
  deleteMember,
};
