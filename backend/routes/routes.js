const express = require("express");

//Getting controller functions
const {
  getDevlogs,
  getDevlog,
  createDevlog, upload, 
  deleteDevlog,
  updateDevlog,
} = require("../controllers/Devlog_Controller");

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

router.post("/devlog/adddevlog", upload.single("devlog-image"), createDevlog);

router.delete("/devlog/deletedevlog/:id", deleteDevlog);

router.patch("/devlog/updatedevlog/:id", updateDevlog);


module.exports = router;
