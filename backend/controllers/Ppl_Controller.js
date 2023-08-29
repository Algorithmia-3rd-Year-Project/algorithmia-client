const Ppl = require("../models/Ppl_Model");
const multer = require("multer");
const path = require("path");
const mongoose = require("mongoose");


const images = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../utilities/uploads/ppl_images"));
  },
  filename: (req, file, cb) => {
    console.log(file);
    Timestamp = Math.floor(Date.now() / 1000);
    cb(null, Timestamp + file.originalname);
  },
  onError: (err, next) => {
    console.log(err);
    next(err);
  },
});

const upload = multer({ storage: images });

//Add a ppl request
const addPpl = async (req, res) => {
  const { type, product, description, sdate, edate, file } = req.body;

  const files = req.files;
  try {
    const ppl = await Ppl.create({
      type,
      product,
      description,
      sdate,
      edate,
      file,
    });
    res.status(200).json(ppl);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



const getUserPpl = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No Ppls" });
  }
  const devlog = await Ppl.find({ userID: id });
  if (!devlog) {
    return res.status(400).json({ error: "No Ppls" });
  }
  res.status(200).json(devlog);
};

module.exports = {
  getUserPpl,
  addPpl, upload,
};