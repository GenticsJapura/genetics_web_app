const express = require("express");
const {
  registerAdmin,
  loginAdmin,
  getResetAdminDetails,
  resetPassword,
} = require("../controllers/admin.controller");

const router = express.Router();

router.post("/get", getResetAdminDetails);
router.post("/register", registerAdmin);
router.post("/login", loginAdmin);
router.put("/resetadmin", resetPassword);

module.exports = router;
