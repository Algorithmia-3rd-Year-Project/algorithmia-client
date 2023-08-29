const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const reviewSchema = new Schema(
    {
      user_id: {
        type: String,
        required: true,
      },
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