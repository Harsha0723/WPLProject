// routes/auth.js

const express = require('express');
const router = express.Router();

// Replace this middleware with your authentication middleware
const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: 'Unauthorized' });
};

// This route returns the current user
router.get('/current-user', isAuthenticated, (req, res) => {
    console.log(req)
  const currentUser = req.user.username;
  res.json(currentUser);
});

module.exports = router;
