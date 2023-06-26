const express = require("express");

//Getting controller functions
const {
  getDevlogs,
  getDevlog,
  createDevlog,
  deleteDevlog,
  updateDevlog,
} = require("../controllers/Devlog_Controller");

const router = express.Router();

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

module.exports = router;
