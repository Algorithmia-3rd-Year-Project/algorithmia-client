const Comment = require("../models/Comment_Model");
const mongoose = require("mongoose");

//Get all comments of a devlog
const getComments = async (req, res) => {
    const { id } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No comments" });
    }
    const comments = await Comment.find({ devlog_id: id });

    if (!comments) {
      return res.status(400).json({ error: "No comments" });
    }
  
    res.status(200).json(comments);
  };

// const getComments = async (req, res) => {
//   const devlogs = await Comment.find({}).sort({ createdAt: -1 });

//   res.status(200).json(devlogs);
// };

const addComment = async (req, res) => {
  const { content, user_id, devlog_id } = req.body;

  try {
    const newComment = await Comment.create({ content, user_id, devlog_id});
    res.status(200).json(newComment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

  module.exports = {
    getComments,
  addComment};
