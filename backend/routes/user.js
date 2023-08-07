const express = require("express");

const {
  signupUser,
  loginUser,
  sendVerifyEmail,
} = require("../controllers/User_Controller");

const router = express.Router();

router.post("/login", loginUser);

router.post("/signup", signupUser);

router.post("/verifyemail", sendVerifyEmail);

module.exports = router;
