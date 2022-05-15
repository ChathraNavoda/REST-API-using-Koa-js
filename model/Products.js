const mongoose = require("mongoose");

const ProductsSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  deliveredOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Products", ProductsSchema);
