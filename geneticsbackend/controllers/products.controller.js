"use strict";

const firebase = require("../db");
const Product = require("../models/Product.model");
const firestore = firebase.firestore();

//Insert Product Function
const addProduct = async (req, res) => {
  const dataInsertedDate = new Date();
  try {
    const { title, price, image } = req.body;

    const data = {
      title,
      price,
      image,
      dataInsertedDate,
    };
    await firestore.collection("products").doc().set(data);
    res.send("Product added successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//Get All Products Function
const getAllProducts = async (req, res, next) => {
  try {
    const products = await firestore
      .collection("products")
      .orderBy("dataInsertedDate", "desc");
    const data = await products.get();
    const productsArray = [];
    if (data.empty) {
      res.status(404).send("No Product Record Found");
    } else {
      data.forEach((doc) => {
        const product = new Product(
          doc.id,
          doc.data().title,
          doc.data().price,
          doc.data().image
        );
        productsArray.push(product);
      });
      res.send(productsArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//Get One specific Product Function
const getProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    const product = await firestore.collection("products").doc(id);
    const data = await product.get();
    if (data.empty) {
      res.status(404).send("No Product Record Found");
    } else {
      res.send(data.data());
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//Update Product Function
const updateProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const product = await firestore.collection("products").doc(id);
    await product.update(data);
    res.send("Product record updated successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//Delete Product Function
const deleteProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    await firestore.collection("products").doc(id).delete();
    res.send("Product record deleted successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  addProduct,
  getAllProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};
