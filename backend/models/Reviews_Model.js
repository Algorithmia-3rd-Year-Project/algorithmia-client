const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const reviewSchema = new Schema(
    {
      content: {
        type: String,
        required: true,
      },
      rate: {
        type: Number,
        required: false,
      }
    },
    { timestamps: true }
  );

  module.exports = mongoose.model("Reviews", reviewSchema);