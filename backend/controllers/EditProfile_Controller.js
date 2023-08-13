const profile = require("../models/profile_Model");
const multer = require("multer");


var unique = 0


const storage = multer.diskStorage({
  destination: "../frontend/src/images/ProfileImages",
  filename: function (req, file, cb) {
     unique = Date.now() 
    cb(null, unique + "-" + file.originalname);
  },
});

const uploadImg = multer({storage: storage });

async function EditProfile(req, res) {
  console.log(req.body);
  
  const playerName = req.body.PlayerName;
  const playerEmail = req.body.PlayerEmail;
  const playerID = req.body.PlayerID;
  var DefaultProfileImageName = req.body.ProfileImageName;
  
  
  var filename = ""

  if(req.file === undefined){
    filename = DefaultProfileImageName
  }else{
    filename = unique+ "-" + req.file.originalname
  }

  try {
    const updatedProfile = await profile.findOneAndUpdate(
      { playerID: playerID },
      { $set: { name: playerName, email: playerEmail, profileImage: filename } },
      { new: true } 
    );

    if (!updatedProfile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    res.json({ message: "Data updated successfully!", data: updatedProfile });
  } catch (error) {
    console.error("Error while updating profile:", error);
    res.status(500).json({ message: "Failed to update profile" });
  }
}


module.exports = {
  EditProfile,
  uploadImg,
};
