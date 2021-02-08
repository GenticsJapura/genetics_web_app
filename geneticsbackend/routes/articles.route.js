const express = require("express");
const auth = require("../middleware/auth");

const {
  addArticle,
  getAllArticles,
  getArticle,
  updateArticle,
  deleteArticle,
} = require("../controllers/articles.controller");

const router = express.Router();

// Routes restricted with authetication (JWT Token)
router.post("/", auth, addArticle);
router.get("/", getAllArticles);
router.get("/:id", getArticle);
router.put("/:id", auth, updateArticle);
router.delete("/:id", auth, deleteArticle);

module.exports = router;
