"use strict";

const firebase = require("../db");
const News = require("../models/News.model");
const firestore = firebase.firestore();

function getMonthText(month) {
  if (month === 0) {
    return "January";
  } else if (month === 1) {
    return "February";
  } else if (month === 2) {
    return "March";
  } else if (month === 3) {
    return "April";
  } else if (month === 4) {
    return "May";
  } else if (month === 5) {
    return "June";
  } else if (month === 6) {
    return "July";
  } else if (month === 7) {
    return "August";
  } else if (month === 8) {
    return "September";
  } else if (month === 9) {
    return "October";
  } else if (month === 10) {
    return "November";
  } else if (month === 11) {
    return "December";
  }
}

function getDayPostFix(day) {
  if (day === 1 || day === 21 || day === 31) {
    return "st";
  } else if (day === 2 || day === 22) {
    return "nd";
  } else {
    return "th";
  }
}

//Insert News Function
const addNews = async (req, res) => {
  var d = new Date();
  var day = d.getDate();
  var dayPostFix = getDayPostFix(d.getDate()).toUpperCase();
  var month = getMonthText(d.getMonth()).toUpperCase();
  var year = d.getFullYear();

  var date = day + dayPostFix + " " + month + " " + year;

  const dataInsertedDate = new Date();
  try {
    const { title, text, coverImage } = req.body;

    const data = {
      title,
      text,
      coverImage,
      date,
      dataInsertedDate,
    };
    await firestore.collection("news").doc().set(data);
    res.send("News added successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//Get All News Function
const getAllNews = async (req, res, next) => {
  try {
    const news = await firestore
      .collection("news")
      .orderBy("dataInsertedDate", "desc");
    const data = await news.get();
    const newsArray = [];
    if (data.empty) {
      res.status(404).send("No News Record Found");
    } else {
      data.forEach((doc) => {
        const OneNews = new News(
          doc.id,
          doc.data().title,
          doc.data().text,
          doc.data().coverImage,
          doc.data().date,
          doc.data().dataInsertedDate
        );
        newsArray.push(OneNews);
      });
      res.send(newsArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//Get One specific News Function
const getNews = async (req, res, next) => {
  try {
    const id = req.params.id;
    const OneNews = await firestore.collection("news").doc(id);
    const data = await OneNews.get();
    if (data.empty) {
      res.status(404).send("No News Record Found");
    } else {
      res.send(data.data());
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//Update News Function
const updateNews = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const OneNews = await firestore.collection("news").doc(id);
    await OneNews.update(data);
    res.send("News record updated successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//Delete News Function
const deleteNews = async (req, res, next) => {
  try {
    const id = req.params.id;
    await firestore.collection("news").doc(id).delete();
    res.send("News record deleted successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  addNews,
  getAllNews,
  getNews,
  updateNews,
  deleteNews,
};
