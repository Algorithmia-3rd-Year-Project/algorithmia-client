const express = require("express");

//Getting controller functions
const {
  getDevlogs,
  getDevlog,
  createDevlog,
  deleteDevlog,
  updateDevlog,
} = require("../controllers/Devlog_Controller");

const {
  GameUpdate,
  uploadCoverImageAndGameFile,
} = require("../controllers/GameUpdate_Controller");

const { getComplaints } = require("../controllers/Complaints_Controller");

//const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

//require auth for all devlog routes
//router.use(requireAuth);

//declaring routes

//Homepage
router.get("/", (req, res) => {
  res.json({ msg: "Home Page" });
});

//routes related to devlogs
router.get("/devlogs", getDevlogs);

router.get("/devlog/:id", getDevlog);

router.post("/devlog/adddevlog", createDevlog);

router.delete("/devlog/deletedevlog/:id", deleteDevlog);

router.patch("/devlog/updatedevlog/:id", updateDevlog);

//routes related to game upload/update
router.post("/gameupdate", uploadCoverImageAndGameFile, GameUpdate);

//rotes related to game bug reprts
router.get("/complainlist", getComplaints);

module.exports = router;
