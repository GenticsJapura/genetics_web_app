"use strict";
let bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

const firebase = require("../db");
const firestore = firebase.firestore();

//Login Function
const loginMember = async (req, res) => {
  const { userName, password } = req.body;

  try {
    //See if user Exist
    // Make the initial query
    let query = await firestore
      .collection("members")
      .where("userName", "==", userName)
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
          .json({ errors: [{ msg: "Invalid Login Credentials" }] });
      } else {
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
      }
    } else {
      return res
        .status(400)
        .json({ errors: [{ msg: "No User Invalid Credentials" }] });
    }
  } catch (err) {
    //Something wrong with the server
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
};

//get current user details using jwt token
const getAuthMemberDetails = async (req, res) => {
  try {
    //console.log(req.user.id);
    const id = req.user.id; //get user id from the json web token
    const member = await firestore.collection("members").doc(id);
    const data = await member.get();
    if (data.empty) {
      res.status(404).send("No Member Record Found");
    } else {
      const fullName = data.data().fullName;
      const memberID = id;
      const userObj = { memberID, fullName };
      res.send(userObj);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = { loginMember, getAuthMemberDetails };
