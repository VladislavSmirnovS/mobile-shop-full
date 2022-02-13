const mongoose = require("mongoose");

const parametersSchema = new mongoose.Schema({
  price: {
    type: String,
    required: true,
  },
  equipment: {
    type: String,
    required: true,
  },
});

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  parameters: parametersSchema,
});

module.exports = mongoose.model("product", productSchema);
