const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");
const passport = require("passport");
const Product = require("../models/Product");
const { default: mongoose } = require("mongoose");

// @route GET api/users
// @desc Test route
// @access Public
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

router.post("/signup", async (req, res) => {
  const {
    username,
    email,
    fname,
    lname,
    phone,
    password,
    street,
    city,
    country,
    zipCode,
    is_seller,
  } = req.body;

  if (!/^[A-Za-z\s]+$/.test(username)) {
    return res.status(400).json({ message: "Invalid username format." });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ message: "Invalid email format." });
  }

  if (!/^\d+$/.test(phone)) {
    return res
      .status(400)
      .json({ message: "Invalid phone format. Use numbers only." });
  }

  try {
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Username or email already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 8);

    const newUser = new User({
      username,
      password: hashedPassword,
      email,
      phone,
      fname,
      lname,
      is_seller,
      address: {
        street: street,
        city: city,
        country: country,
        zipCode: zipCode,
      },
    });
    await newUser.save();

    res.json({ message: "User registered successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.json({ message: "Login successful" });
});

router.get("/userInfo/:username", async (req, res) => {
  const username = req.params.username;

  try {
    const currentUser = await User.findOne({ $or: [{ username }] });
    if (currentUser) {
      return res.status(200).json({
        username: currentUser.username,
        fname: currentUser.fname,
        lname: currentUser.lname,
        is_seller: currentUser.is_seller,
        phone: currentUser.phone,
        street: currentUser.address.street,
        city: currentUser.address.city,
        country: currentUser.address.country,
        zipCode: currentUser.address.zipCode,
      });
    } else {
      res.status(400).json({ message: "User Doesn't Exist" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
});

router.put("/edit/:username", async (req, res) => {
  const userId = req.params.username;
  const {username, fname, lname, phone, street, city, country, zipCode } = req.body;
  const result = await User.findOneAndUpdate(
    { username:userId },
    {
      username,
      fname,
      lname,
      phone,
      address: {
        street: street,
        city: city,
        country: country,
        zipCode: zipCode,
      },
    }
  );
  if (!result) res.status(404).send("Error while updating");
  else res.status(200).send("User info updated successfully");
});

router.get("/sellingList/:username", async (req, res) => {
  const username = req.params.username;
  const seller = await User.findOne({ username });
  const seller_ids = seller.sell_products_id;
  const productList = await Promise.all(
    seller_ids.map(async (id) => {
      const tempProduct = await Product.findOne(
        { _id: id },
        { price: 1, image_link: 1, category: 1, title: 1, is_sold: 1 }
      );
      return tempProduct;
    })
  );

  if (productList) res.status(200).json(productList);
  else res.status(400).send("No Products Exists");
});

router.get("/buyingList/:username", async (req, res) => {
  const username = req.params.username;
  const buyer = await User.findOne({ username });
  const buyer_ids = buyer.bought_products_id;
  const productList = await Promise.all(
    buyer_ids.map(async (id) => {
      const tempProduct = await Product.findOne(
        { _id: id },
        { price: 1, image_link: 1, category: 1, title: 1, is_sold: 1 }
      );
      return tempProduct;
    })
  );

  if (productList) res.status(200).json(productList);
  else res.status(400).send("No Products Exists");
});

router.get('/fav_list/:username', async (req, res) => {
  const username = req.params.username;
  const currentUser = await User.findOne({ username });

  const fav_ids = currentUser.fav_products_id;
  const productList = await Promise.all(
    fav_ids.map(async (id) => {
      const tempProduct = await Product.findOne(
        { _id: id },
        { price: 1, image_link: 1, category: 1, title: 1, is_sold: 1 }
      );
      return tempProduct;
    })
  );

  if (productList) res.status(200).json(productList);
  else res.status(400).send("No Products Exists");
});

module.exports = router;