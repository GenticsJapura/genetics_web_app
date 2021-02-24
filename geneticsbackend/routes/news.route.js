const express = require("express");
const auth = require("../middleware/auth");

const {
  addNews,
  getAllNews,
  getNews,
  updateNews,
  deleteNews,
} = require("../controllers/news.controller");

const router = express.Router();

// Routes restricted with authetication (JWT Token)
router.post("/", auth, addNews);
router.get("/", getAllNews);
router.get("/:id", getNews);
router.put("/:id", auth, updateNews);
router.delete("/:id", auth, deleteNews);

module.exports = router;
