const mongoose = require("mongoose");

const GameUpdateSchema = mongoose.Schema({
  verNum: {
    type: String,
    required: true,
  },
  pthTlt: {
    type: String,
    required: true,
  },
  Dcsrp: {
    type: String,
    required: true,
  },
  TgList: {
    type: String,
    required: true,
  },
  imgName: {
    type: String,
    required: true,
  },
  GameFileName: {
    type: String,
    required: true,
  }

});

module.exports = mongoose.model("GameUpdateSchema", GameUpdateSchema);
