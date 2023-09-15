const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Advertiser = require("./Advertiser_Model");

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

  var currentUser;
  var userRole;
  const user = await this.findOne({ email });

  if (user != null) {
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      throw Error("Incorrect Password");
    } else {
      currentUser = user;
      if (currentUser.email == "admin_algorithmia") {
        userRole = "admin";
      } else {
        userRole = "player";
      }
    }
  } else if (!user) {
    const advertiser = await Advertiser.findOne({ email });

    if (advertiser != null) {
      const advertiserMatch = await bcrypt.compare(
        password,
        advertiser.password
      );

      if (!advertiserMatch) {
        throw Error("Incorrect Password");
      } else {
        currentUser = advertiser;
        userRole = "advertiser";
      }
    }
  }

  return { user: currentUser, role: userRole };
};

//static advertiser signup method
userSchema.statics.advertiserSignup = async function (
  brand,
  email,
  password,
  confirmPassword
) {
  //validation
  if (!email || !password || !confirmPassword || !brand) {
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

module.exports = mongoose.model("User", userSchema);
