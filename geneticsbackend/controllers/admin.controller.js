"use strict";
let bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

const firebase = require("../db");
const Admin = require("../models/Admin.model");
const firestore = firebase.firestore();

//Register Function
const registerAdmin = async (req, res) => {
  let { email, password } = req.body;

  try {
    //See if user Exist
    // Make the initial query
    let query = await firestore
      .collection("admins")
      .where("email", "==", email)
      .get();

    if (!query.empty) {
      let snapshot = query.docs[0];
      return res.status(400).json({ errors: [{ msg: "User already exist" }] });
    } else {
      //Encrypt Password

      //10 is enogh..if you want more secured.user a value more than 10
      let salt = await bcrypt.genSalt(10);

      //hashing password
      password = await bcrypt.hash(password, salt);

      //save user to the database

      try {
        let user = {
          email,
          password,
        };
        await firestore.collection("admins").doc().set(user);
        //res.send("Recored saved successfully");

        //Return jsonwebtoken

        let payload = {
          user: {
            id: user.email,
          },
        };

        jwt.sign(
          payload,
          config.get("jwtSecret"),
          { expiresIn: 360000 },
          (err, token) => {
            if (err) throw err;
            res.json({ token });
          }
        );
      } catch (error) {
        res.status(400).send(error.message);
      }
    }
  } catch (err) {
    //Something wrong with the server
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
};

//Login Function
const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    //See if user Exist
    // Make the initial query
    let query = await firestore
      .collection("admins")
      .where("email", "==", email)
      .get();

    if (!query.empty) {
      let snapshot = query.docs[0];
      let user = snapshot.data();
      let id = snapshot.id;

      //match the user email and password

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      //Return jsonwebtoken

      const payload = {
        user: {
          id: id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } else {
      return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
    }
  } catch (err) {
    //Something wrong with the server
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
};

//get admin details
const getResetAdminDetails = async (req, res) => {
  try {
    const { email } = req.body;
    let query = await firestore
      .collection("admins")
      .where("email", "==", email)
      .get();
    if (!query.empty) {
      let snapshot = query.docs[0];
      let email = snapshot.data().email;
      let id = snapshot.id;

      const user = {
        id,
        email,
      };

      res.send(user);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//reset admin Function
const resetPassword = async (req, res, next) => {
  try {
    let { userID, email, password } = req.body;

    //Encrypt Password

    //10 is enogh..if you want more secured.user a value more than 10
    let salt = await bcrypt.genSalt(10);

    //hashing password
    password = await bcrypt.hash(password, salt);

    const data = {
      email,
      password,
    };

    const admin = await firestore.collection("admins").doc(userID);
    await admin.update(data);
    res.send("Admin record updated successfully");
  } catch (error) {
    res.status(400).send(error.message);
    console.log(error);
  }
};

module.exports = {
  registerAdmin,
  loginAdmin,
  getResetAdminDetails,
  resetPassword,
};
