const express = require("express");
const auth = require("../middleware/auth");

const {
  addMember,
  getAllMembers,
  getMember,
  updateMember,
  deleteMember,
} = require("../controllers/member.controller");

const router = express.Router();

// Routes restricted with authetication (JWT Token)
router.post("/", auth, addMember); //register member function
router.get("/", auth, getAllMembers);
router.get("/:id", auth, getMember);
router.put("/:id", auth, updateMember);
router.delete("/:id", auth, deleteMember);

module.exports = router;
