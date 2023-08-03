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
      status: {
        type: String,
        required: true,
      }
    },
    { timestamps: true }
  );
  
const complaints = mongoose.model("complains", complaintsSchema);


  module.exports = {
    complaints,
  
  };