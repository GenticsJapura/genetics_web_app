const express = require("express");
const auth = require("../middleware/auth");

const {
  loginMember,
  getAuthMemberDetails,
} = require("../controllers/auth.controller");

const router = express.Router();

router.get("/", auth, getAuthMemberDetails); //get current loging user details

router.post("/login", loginMember); //login memeber function

module.exports = router;
