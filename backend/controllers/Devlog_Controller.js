const Devlog = require("../models/Devlog_Model");
const Comment = require("../models/Comment_Model");
const mongoose = require("mongoose");

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

//Get all comments of a devlog - to do
const getComments = async (req, res) => {
  const { dev_id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(dev_id)) {
    return res.status(404).json({ error: "No comments" });
  }

  const comments = await Comment.findBy(devlog_id, dev_id);

  if (!comments) {
    return res.status(400).json({ error: "No comments" });
  }

  res.status(200).json(comments);
};

module.exports = {
  getDevlogs,
  getDevlog,
  createDevlog,
  deleteDevlog,
  updateDevlog,
  getComments
};
