
const express = require("express");
const router = express.Router();


const { getComplaints, changeStatusToRead, changeStatusToUnRead } = require("../controllers/Complaints_Controller");


router.get("/complainlist", getComplaints);

router.post("/readcomplainlist", changeStatusToRead);

router.post("/unreadcomplainlist", changeStatusToUnRead);

module.exports = router;