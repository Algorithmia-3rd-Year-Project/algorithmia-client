const User = require("../models/User_Model");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    //create a token
    const token = createToken(user._id);

    const userID = user._id;

    res.status(200).json({ email, token, userID });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const signupUser = async (req, res) => {
  const { email, password, confirmPassword, dob } = req.body;

  console.log(req.body);

  try {
    const user = await User.signup(email, password, confirmPassword, dob);

    //create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const sendVerifyEmail = async (req, res) => {
  const { email, verifyCode } = req.body;

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
    html: `<div>Your code is ${verifyCode}</div>`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(400).json({ error: error.message });
    } else {
      console.log("email sent: " + info.response);
      res.status(200).json({ email, code });
    }
  });
};

module.exports = { signupUser, loginUser, sendVerifyEmail };
