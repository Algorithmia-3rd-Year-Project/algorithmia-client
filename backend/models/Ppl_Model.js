const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const pplSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
    },
    product: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    sdate: {
      type: Date,
      required: true,
    },
    edate: {
      type: Date,
      required: true,
    },
    files: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Ppl", pplSchema);
