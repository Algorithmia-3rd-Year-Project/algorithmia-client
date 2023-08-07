const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  birthdate: {
    type: String,
    required: true,
  },
  // verified: {
  //   type: Boolean,
  //   default: false,
  // },
});

//static signup method
userSchema.statics.signup = async function (
  email,
  password,
  confirmPassword,
  dob,
  codeSent,
  verifyCode
) {
  //validation
  if (!email || !password || !confirmPassword || !dob || !verifyCode) {
    throw Error("All fields must be filled");
  }

  if (verifyCode != codeSent) {
    throw Error("Validation Failed");
  }

  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error("Password not strong enough");
  }

  if (password !== confirmPassword) {
    throw Error("Password missmatch");
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already in use");
  }

  const saltValue = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, saltValue);

  const user = await this.create({ email, password: hash, birthdate: dob });

  return user;
};

//static login method
userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields are required");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("Incorrect email");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Incorrect Password");
  }

  return user;
};

module.exports = mongoose.model("User", userSchema);
