const express = require("express");

const {
  signupUser,
  loginUser,
  sendVerifyEmail,
  advertiserSignUp,
  sendAdvertiserVerifyEmail,
  getAdvertiser,
  updateAdvertiser,
} = require("../controllers/User_Controller");

const router = express.Router();

router.post("/login", loginUser);

router.post("/signup", signupUser);

router.post("/verifyemail", sendVerifyEmail);

router.post("/advertisersignup", advertiserSignUp);

router.post("/verifyadvertiseremail", sendAdvertiserVerifyEmail);

// router.patch("/adprofile/", updateAdvertiser)

router.get("/devlog/:id", getAdvertiser);

router.patch("/adprofile/:id", updateAdvertiser);

module.exports = router;
