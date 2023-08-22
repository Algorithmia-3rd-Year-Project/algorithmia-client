const express = require("express");

//Getting controller functions
const {
  getDevlogs,
  getDevlog,
  createDevlog,
  deleteDevlog,
  updateDevlog,
  getDevlogNews,
  getDevlogFeatures,
} = require("../controllers/Devlog_Controller");

const {
  getReviews,
  createReview,
} = require("../controllers/Reviews_Controller");

const {
  getComments,
  addComment,
  deleteComment,
} = require("../controllers/Comment_Controller");

const {
  GameUpdate,
  uploadCoverImageAndGameFile,
} = require("../controllers/GameUpdate_Controller");

const { getComplaints } = require("../controllers/Complaints_Controller");

const { 
  getUserPpl,
  addPpl, upload,
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

//routes related to devlogs
router.get("/devlogs", getDevlogs);

router.get("/devlogNews", getDevlogNews);

router.get("/devlogFeatures", getDevlogFeatures);

router.get("/devlog/:id", getDevlog);

router.post("/devlog/adddevlog", createDevlog);

router.delete("/devlog/deletedevlog/:id", deleteDevlog);

router.patch("/devlog/updatedevlog/:id", updateDevlog);

//routes related to reviews
router.get("/reviews", getReviews);

router.post("/reviews", createReview);

router.post("/devlog/addcomment", addComment);

//routes related to comments
router.get("/comments/:id", getComments);

router.delete("/comments/deletecomment/:id", deleteComment);

//routes related to game upload/update
router.post("/gameupdate", uploadCoverImageAndGameFile, GameUpdate);

//rotes related to game bug reprts
router.get("/complainlist", getComplaints);

router.post("/pplform/addppl", upload.single("ppl-images"), addPpl);

router.get("/userPpl", getUserPpl);

module.exports = router;
