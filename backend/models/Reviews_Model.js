const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const reviewSchema = new Schema(
    {
      name: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
      rate: {
        type: Number,
        required: true,
      }
    },
    { timestamps: true }
  );

  module.exports = mongoose.model("Reviews", reviewSchema);