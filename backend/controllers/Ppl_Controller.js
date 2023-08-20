const Ppl = require("../models/Ppl_Model");
const multer = require("multer");
const path = require("path");
const mongoose = require("mongoose");

//Add a ppl request
const addPpl = async (req, res) => {
  const { type, product, description, sdate, edate} = req.body;

  try {
    const files = req.files;
    const filePaths = files.map((file) => file.path);
    const ppl = await Ppl.create({
      type,
      product,
      description,
      sdate,
      edate,
      files: filePaths,
    });
    res.status(200).json(ppl);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const images = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../utilities/uploads/ppl_images"));
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
  onError: (err, next) => {
    console.log(err);
    next(err);
  },
});

const upload = multer({ storage: images, limits: { files: 5 } });

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
