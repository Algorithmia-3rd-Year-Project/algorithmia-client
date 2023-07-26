const Ppl = require("../models/Ppl_Model");
const multer = require("multer");
const path = require("path");

//Add a ppl request
const addPpl = async (req, res) => {
  const { type, product, description, sdate, edate, file } = req.body;

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

const images = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../uploads"));
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

const upload = multer({ storage: images });

module.exports = {
  addPpl,
  upload,
};
