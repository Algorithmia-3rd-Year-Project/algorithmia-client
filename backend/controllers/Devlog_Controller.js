const Devlog = require("../models/Devlog_Model");
const mongoose = require("mongoose");

//Get all devlogs
const getDevlogs = async (req, res) => {

  const devlogs = await Devlog.find().sort({ title: 1 });
  res.status(200).json(devlogs);
};

const getDevlogNews = async (req, res) => {
  const devlogs = await Devlog.find({ type: "News"}).sort({ title: 1 });
  res.status(200).json(devlogs);
};

const getDevlogFeatures = async (req, res) => {
  const devlogs = await Devlog.find({ type: "Features"}).sort({ title: 1 });
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
  createDevlog,
  deleteDevlog,
  updateDevlog,
  getDevlogNews,
  getDevlogFeatures,
};
