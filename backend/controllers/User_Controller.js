const User = require("../models/User_Model");
const Advertiser = require("../models/Advertiser_Model");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

var pinCode = "0000";

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const response = await User.login(email, password);

    const user = response.user;

    //create a token
    const token = createToken(user._id);

    const userID = user._id;
    const userRole = response.role;

    res.status(200).json({ email, token, userID, userRole });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const signupUser = async (req, res) => {
  const { email, password, confirmPassword, dob, codeSent, verifyCode } =
    req.body;

  console.log(pinCode);

  try {
    const user = await User.signup(
      email,
      password,
      confirmPassword,
      dob,
      codeSent,
      verifyCode
    );

    //create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const sendVerifyEmail = async (req, res) => {
  const { email } = req.body;

  var pinCode = generate4DigitNumber();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "tech2019man@gmail.com",
      pass: "asrqbppzispnkklq",
    },
  });

  const mailOptions = {
    from: `Algorithmia <tech2019man@gmail.com>`,
    to: email,
    subject: "Algorithmia Email Verification",
    //text: "Welcome to Algorithmia",
    html: `<div>Your code is ${pinCode}</div>`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(400).json({ error: error.message });
    } else {
      console.log("email sent: " + info.response);
      res.status(200).json({ pinCode });
    }
  });
};

function generate4DigitNumber() {
  const randomDecimal = Math.random();
  const random4DigitNumber = Math.floor(randomDecimal * 9000) + 1000;
  return random4DigitNumber;
}

//advertiser functionalities
const advertiserSignUp = async (req, res) => {
  const { brand, email, password, confirmPassword, sentCode, verifyCode } =
    req.body;

  try {
    const advertiser = await Advertiser.advertiserSignup(
      brand,
      email,
      password,
      confirmPassword,
      sentCode,
      verifyCode
    );

    //create a token
    const token = createToken(advertiser._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const sendAdvertiserVerifyEmail = async (req, res) => {
  const { advertiserEmail } = req.body;

  var pinCode = generate4DigitNumber();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "tech2019man@gmail.com",
      pass: "asrqbppzispnkklq",
    },
  });

  const mailOptions = {
    from: `Algorithmia <tech2019man@gmail.com>`,
    to: advertiserEmail,
    subject: "Algorithmia Email Verification",
    //text: "Welcome to Algorithmia",
    html: `<div>Hi advertiser. Your code is ${pinCode}</div>`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(400).json({ error: error.message });
    } else {
      console.log("email sent: " + info.response);
      res.status(200).json({ pinCode });
    }
  });
};

module.exports = {
  signupUser,
  loginUser,
  sendVerifyEmail,
  advertiserSignUp,
  sendAdvertiserVerifyEmail,
};
