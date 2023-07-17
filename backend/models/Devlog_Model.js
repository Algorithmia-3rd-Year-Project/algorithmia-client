const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const devlogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    CoverImage: {
      type: File,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Devlog", devlogSchema);
