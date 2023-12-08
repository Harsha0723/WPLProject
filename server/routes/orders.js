const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
const Product = require("../models/Product");
const User = require("../models/User");
const mongoose = require("mongoose");

router.post("/payment", async (req, res) => {
  const {
    product_id,
    seller_id,
    buyer_id,
    mrp,
    tax,
    shipping_cost,
    street,
    city,
    country,
    zipCode,
  } = req.body;

  try {
    const newOrder= new Order({
      product_id,
      buyer_id,
      seller_id,
      cost : parseFloat(mrp) + parseFloat(tax) + parseFloat(shipping_cost),
      shipped_address: {
        street: street,
        city: city,
        country: country,
        zipCode: zipCode,
      },
    });
    await newOrder.save();

    await Product.findByIdAndUpdate(product_id,{$set : {is_sold:true,purchase_date:Date.now()}});
    await User.findOneAndUpdate({username:buyer_id},{$push : {bought_products_id:new mongoose.Types.ObjectId(product_id)}})


    res.json({ message: "Order registered successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
});





module.exports = router;