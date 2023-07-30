
const express = require("express");
const router = express.Router();


const { getComplaints } = require("../controllers/Complaints_Controller");


router.get("/complainlist", getComplaints);

module.exports = router;