const express = require("express");
const router = express.Router();
const Products = require("../model/Products");

//To get all products
router.get("/", (req, res) => {
    Products.find()
    .then((resp) => res.status(200).json(resp))
    .catch((err) => res.status(400).json("Request Failed"));
});

//To Create a new product
router.post("/", (req, res) => {
  const { title, description } = req.body;
  const product = new Products({
    title,
    description,
    
  });
  product
    .save()
    .then((resp) => res.status(201).json(resp))
    .catch((err) => res.status(400).json("Request Failed"));
});

//To delete a specific products
router.delete("/:id", (req, res) => {
    Products.remove({ _id: req.params.id })
    .then((resp) => res.status(200).json(resp))
    .catch((err) => res.status(400).json("Request Failed"));
});

//To Get a specific products
router.get("/:id", (req, res) => {
    Products.findById(req.params.id)
    .then((resp) => res.status(200).json(resp))
    .catch((err) => res.status(400).json("Request Failed"));
});

//To update specific products
router.patch("/:id", (req, res) => {
  Products.updateOne({ _id: req.params.id }, { $set: req.body })
    .then((resp) => res.status(200).json(resp))
    .catch((err) => res.status(400).json("Request Failed"));
});

module.exports = router;
