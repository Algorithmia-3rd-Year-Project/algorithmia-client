const profile = require("../models/profile_Model");
//const multer = require("multer");




async function EditProfile(req, res) {

  console.log(req.body)

  const { PlayerName, PlayerEmail } = req.body;
  console.log(PlayerName)

  res.json();
  
}

module.exports = {
  EditProfile,
 
};
