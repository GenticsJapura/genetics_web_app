"use strict";

const firebase = require("../db");
const Article = require("../models/Article.model");
const firestore = firebase.firestore();

//Insert Article Function
const addArticle = async (req, res) => {
  const dataInsertedDate = new Date();
  try {
    const rate = 0;
    const {
      memberID,
      memberName,
      title,
      description,
      text,
      coverImage,
    } = req.body;

    const data = {
      memberID,
      memberName,
      title,
      description,
      text,
      coverImage,
      dataInsertedDate,
      rate,
    };
    await firestore.collection("articles").doc().set(data);
    res.send("Article added successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//Get All Articles Function by Member
const getAllArticlesByMember = async (req, res, next) => {
  try {
    const id = req.user.id; //get user id from the json web token
    const articles = await firestore
      .collection("articles")
      .where("memberID", "==", id)
      .orderBy("dataInsertedDate", "desc");
    const data = await articles.get();
    const articlesArray = [];
    if (data.empty) {
      res.status(404).send("No Aricle Record Found");
    } else {
      data.forEach((doc) => {
        const article = new Article(
          doc.id,
          doc.data().memberID,
          doc.data().memberName,
          doc.data().title,
          doc.data().description,
          doc.data().text,
          doc.data().coverImage,
          doc.data().rate,
          doc.data().dataInsertedDate
        );
        articlesArray.push(article);
      });
      res.send(articlesArray);
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
};

//Get All Articles Function
const getAllArticles = async (req, res, next) => {
  try {
    const articles = await firestore
      .collection("articles")
      .orderBy("dataInsertedDate", "desc");
    const data = await articles.get();
    const articlesArray = [];
    if (data.empty) {
      res.status(404).send("No Aricle Record Found");
    } else {
      data.forEach((doc) => {
        const article = new Article(
          doc.id,
          doc.data().memberID,
          doc.data().memberName,
          doc.data().title,
          doc.data().description,
          doc.data().text,
          doc.data().coverImage,
          doc.data().rate,
          doc.data().dataInsertedDate
        );
        articlesArray.push(article);
      });
      res.send(articlesArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//Get All Articles Mixed Function
const getAllArticlesMixed = async (req, res, next) => {
  try {
    const articles = await firestore.collection("articles").limit(5);

    const data = await articles.get();
    const articlesArray = [];
    if (data.empty) {
      res.status(404).send("No Aricle Record Found");
    } else {
      data.forEach((doc) => {
        const article = new Article(
          doc.id,
          doc.data().memberID,
          doc.data().memberName,
          doc.data().title,
          doc.data().description,
          doc.data().text,
          doc.data().coverImage,
          doc.data().rate,
          doc.data().dataInsertedDate
        );
        articlesArray.push(article);
      });
      res.send(articlesArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//Get One specific Article Function
const getArticle = async (req, res, next) => {
  try {
    const id = req.params.id;
    const article = await firestore.collection("articles").doc(id);
    const data = await article.get();
    if (data.empty) {
      res.status(404).send("No Article Record Found");
    } else {
      res.send(data.data());
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//Update Article Function
const updateArticle = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const article = await firestore.collection("articles").doc(id);
    await article.update(data);
    res.send("Article record updated successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//Delete Article Function
const deleteArticle = async (req, res, next) => {
  try {
    const id = req.params.id;
    await firestore.collection("articles").doc(id).delete();
    res.send("Article record deleted successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  addArticle,
  getAllArticlesByMember,
  getAllArticles,
  getAllArticlesMixed,
  getArticle,
  updateArticle,
  deleteArticle,
};
