const express = require("express");
const router = express.Router();


const { EditProfile } = require("../controllers/EditProfile_Controller");


router.post("/editprofile", EditProfile);


module.exports = router;