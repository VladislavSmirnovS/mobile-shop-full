const Product = require("../models/product");

const getProduct = (req, res, next) => {
  Product.find()
    .then((product) => {
      res.status(201).send(product);
    })
    .catch(next);
};

const createProduct = (req, res, next) => {
  const { name, description, parameters } = req.body;
  Product.create({
    name,
    description,
    parameters,
  })
    .then((product) => {
      res.status(200).send(product);
    })
    .catch(next);
};

const searchProduct = (req, res, next) => {
  Product.find({
    $or: [
      { name: { $regex: req.query.search } },
      { description: { $regex: req.query.search } },
      { "parameters.price": { $regex: req.query.search } },
      { "parameters.equipment": { $regex: req.query.search } },
    ],
  })
    .then((product) => {
      res.status(201).send(product);
    })
    .catch(next);
};

module.exports = {
  createProduct,
  searchProduct,
  getProduct,
};
