const Comment = require("../models/Comment_Model");
const mongoose = require("mongoose");

//Get all comments of a devlog - to do
const getComments = async (req, res) => {
    const { dev_id } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(dev_id)) {
      return res.status(404).json({ error: "No comments" });
    }
  
    const comments = await Comment.findOne({'devlog_id': dev_id});
  
    if (!comments) {
      return res.status(400).json({ error: "No comments" });
    }
  
    res.status(200).json(comments);
  };

  module.exports = {getComments};
