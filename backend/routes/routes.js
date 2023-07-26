const express = require("express");
const multer = require("multer");

//Getting controller functions
const {
  getDevlogs,
  getDevlog,
  createDevlog,
  deleteDevlog,
  updateDevlog,
} = require("../controllers/Devlog_Controller");

const {
  addPpl,
} = require("../controllers/Ppl_Controller");

//const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

//require auth for all devlog routes
//router.use(requireAuth);

//declaring routes

//Homepage
router.get("/", (req, res) => {
  res.json({ msg: "Home Page" });
});

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../../images")
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + ' - ' + file.originalname)
  }
})
const upload = multer({storage: fileStorageEngine})

//routes related to devlogs
router.get("/devlogs", getDevlogs);

router.get("/devlog/:id", getDevlog);

router.post("/devlog/adddevlog", createDevlog);

router.delete("/devlog/deletedevlog/:id", deleteDevlog);

router.patch("/devlog/updatedevlog/:id", updateDevlog);

router.post("/pplform/addppl",upload.single("file"), addPpl);

module.exports = router;
