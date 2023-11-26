const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image_link: [
    {
      type: String,
    },
  ],
  seller_id: {
    type: String,
    required: true,
  },
  price: {
    mrp: {
      type: Number,
    },
    tax: {
      type: Number,
    },
    shipping_cost: {
      type: Number,
    },
  },
  product_address: {
    street: {
      type: String,
    },
    city: {
      type: String,
    },
    country: {
      type: String,
    },
    zipCode: {
      type: Number,
    },
  },
  registration_date: {
    type: Date,
    default: Date.now,
  },
  purchase_date: {
    type: Date,
  },
  is_sold: {
    type: Boolean,
    default:false
  },
  quantity: {
    type: Number,
    default:1
  },
});

module.exports = Product = mongoose.model("Product", ProductSchema);
