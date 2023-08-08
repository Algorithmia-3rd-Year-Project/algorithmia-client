const express = require("express");

const {
  signupUser,
  loginUser,
  sendVerifyEmail,
  advertiserSignUp,
  sendAdvertiserVerifyEmail,
} = require("../controllers/User_Controller");

const router = express.Router();

router.post("/login", loginUser);

router.post("/signup", signupUser);

router.post("/verifyemail", sendVerifyEmail);

router.post("/advertisersignup", advertiserSignUp);

router.post("/verifyadvertiseremail", sendAdvertiserVerifyEmail);

module.exports = router;
