const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const advertiserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  // verified: {
  //   type: Boolean,
  //   default: false,
  // },
});

//static advertiser signup method
advertiserSchema.statics.advertiserSignup = async function (
  brand,
  email,
  password,
  confirmPassword,
  sentCode,
  verifyCode
) {
  //validation
  if (!email || !password || !confirmPassword || !brand || !verifyCode) {
    throw Error("All fields must be filled");
  }

  // if (verifyCode != codeSent) {
  //   throw Error("Validation Failed");
  // }

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

  const user = await this.create({ email, password: hash, companyName: brand });

  return user;
};

module.exports = mongoose.model("Advertiser", advertiserSchema);
