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

  console.log("id :" + id);

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No Such Devlog" });
  }

  const devlog = await Devlog.findById(id);

  //console.log(devlog);

  if (!devlog) {
    return res.status(400).json({ error: "No Such Devlog" });
  }

  res.status(200).json(devlog);
};

var UniqueId;

function generateUniqueValue() {
  const timestamp = Date.now(); // Current timestamp
  const random = Math.floor(Math.random() * 10000); // Random number between 0 and 9999
  UniqueId = `${timestamp}_${random}`;
}

const images = multer.diskStorage({
  destination: (req, coverImage, cb) => {
    cb(null, path.join(__dirname, "../../frontend/public/Devlog_CoverImages"));
  },
  filename: (req, coverImage, cb) => {
    //console.log(coverImage);
    generateUniqueValue()
    cb(null, UniqueId + (coverImage.originalname));
  },
  onError: (err, next) => {
    console.log(err);
    next(err);
  },
});

const uploadDevlogImage = multer({ storage: images });

//Create a new devlog
const createDevlog = async (req, res) => {
   const { title, type, content } = req.body;
   console.log(title, type, content);

   const coverImage =  UniqueId + req.file.originalname;
   console.log(coverImage);

  try {
    const devlog = await Devlog.create({ title, type, content, coverImage});
    res.status(200).json(devlog);
  } catch (error) {
    console.log(error.message)
    res.status(400).json({ error: error.message });
  }
};




const getDevlogNews = async (req, res) => {
  const devlogs = await Devlog.find({ type: "News" }).sort({ title: 1 });
  res.status(200).json(devlogs);
};

const getDevlogFeatures = async (req, res) => {
  const devlogs = await Devlog.find({ type: "Features" }).sort({ title: 1 });
  res.status(200).json(devlogs);
};

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

  // console.log("id :"+id);
  // console.log(req.body);
  // console.log(req.file)

  //return res.status(200).json({ message: "Devlog updated successfully" });
  
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No Such Devlog" });
  }

  var CoverImageName;

  if(req.file == null) {
    CoverImageName = req.body.DefaultCoverImage;
  }else{
    CoverImageName = UniqueId + req.file.originalname;
  }

  const devlog = await Devlog.findOneAndUpdate({ _id: id },

    {
      $set: {
        title: req.body.title,
        type: req.body.type,
        content: req.body.content,
        coverImage: CoverImageName,
      },
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
  createDevlog,
  uploadDevlogImage,
  deleteDevlog,
  updateDevlog,
  getDevlogNews,
  getDevlogFeatures,
};
