const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const complaintsSchema = new Schema(
    {
      name: {
        type: String,
        required: true,
      },
      complain: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        required: true,
      },
    },
    { timestamps: true }
  );
  
  module.exports = mongoose.model("complains", complaintsSchema);