const express = require("express");
const auth = require("../middleware/auth");

const {
  addProduct,
  getAllProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/products.controller");

const router = express.Router();

// Routes restricted with authetication (JWT Token)
router.post("/", auth, addProduct);
router.get("/", getAllProducts);
router.get("/:id", getProduct);
router.put("/:id", auth, updateProduct);
router.delete("/:id", auth, deleteProduct);

module.exports = router;
