const { createRequire } = require("module");
const Devlog = require("../models/Devlog_Model");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");

//Get all devlogs
const getDevlogs = async (req, res) => {
  const devlogs = await Devlog.find({}).sort({ createdAt: -1 });

  res.status(200).json(devlogs);
};

//Get a single devlog
const getDevlog = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No Such Devlog" });
  }

  const devlog = await Devlog.findById(id);

  if (!devlog) {
    return res.status(400).json({ error: "No Such Devlog" });
  }

  res.status(200).json(devlog);
};

//Create a new devlog
const createDevlog = async (req, res) => {
  const { title, type, content } = req.body;

  try {
    const devlog = await Devlog.create({ title, type, content });
    res.status(200).json(devlog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const images = multer.diskStorage({
  destination: (req, coverImage, cb) => {
    cb(null, path.join(__dirname, "../../utilities/uploads/devlog_coverImgs"));
  },
  filename: (req, coverImage, cb) => {
    console.log(coverImage);
    cb(null, Date.now() + path.extname(coverImage.originalname));
  },
  onError: (err, next) => {
    console.log(err);
    next(err);
  },
});

const upload = multer({ storage: images });



//Delete a devlog
const deleteDevlog = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No Such Devlog" });
  }

  const devlog = await Devlog.findOneAndDelete({ _id: id });

  if (!devlog) {
    return res.status(400).json({ error: "No Such Devlog" });
  }

  res.status(200).json(devlog);
};

//Update a devlog
const updateDevlog = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No Such Devlog" });
  }

  const devlog = await Devlog.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!devlog) {
    return res.status(400).json({ error: "No Such Devlog" });
  }

  res.status(200).json(devlog);
};

module.exports = {
  getDevlogs,
  getDevlog,
  createDevlog, upload,
  deleteDevlog,
  updateDevlog,
};
