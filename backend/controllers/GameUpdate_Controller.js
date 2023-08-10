const GameUpdateSchema = require("../models/GameUpdate_Model");
const mongoose = require("mongoose");
const multer = require("multer");

var Timestamp;

const combinedUpload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      if (file.fieldname === "imgUpld") {
        cb(null, "../utilities/uploads/game_images");
      } else if (file.fieldname === "GameFile") {
        cb(null, "../utilities/uploads/game_files");
      } else {
        cb(new Error("Invalid field name"));
      }
    },
    filename: function (req, file, cb) {
      Timestamp = Math.floor(Date.now() / 1000);

      cb(null, Timestamp + "-" + file.originalname);
    },
  }),
});

const uploadCoverImageAndGameFile = combinedUpload.fields([
  { name: "imgUpld", maxCount: 1 },
  { name: "GameFile", maxCount: 1 },
]);

async function GameUpdate(req, res) {
  const formData = req.body;

  console.log(formData);

  try {
    const SaveGameUpdate = await GameUpdateSchema.create({
      verNum: formData.verNum,
      pthTlt: formData.pthTlt,
      Dcsrp: formData.Dcsrp,
      TgList: formData.TgList,
      imgName: Timestamp + "-" + formData.imgName,
      GameFileName: Timestamp + "-" + formData.GameFileName,
    });

    console.log("Data saved to MongoDB:", SaveGameUpdate);
    res.json({
      message: "Data received and saved successfully",
      data: SaveGameUpdate,
    });
  } catch (error) {
    console.error("Error saving data to MongoDB:", error);
    res.status(500).json({ error: "Error saving data to database" });
  }
}
module.exports = {
  GameUpdate,
  uploadCoverImageAndGameFile,
};
