
const express = require("express");
const router = express.Router();


const { GameUpdate, uploadCoverImageAndGameFile} = require("../controllers/GameUpdate_Controller");


router.post("/gameupdate", uploadCoverImageAndGameFile, GameUpdate);

module.exports = router;
