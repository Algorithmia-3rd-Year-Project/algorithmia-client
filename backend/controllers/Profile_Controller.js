const profile = require("../models/Profile_Model");


async function ProfileData(req, res) {

    var PlayerID = req.body.PlayerID;
    


    profile.findOne({ playerID: PlayerID})
    .then((foundProfile) => {
      if (foundProfile) {
        console.log(foundProfile);
        res.json(foundProfile);
      } else {
        res.status(404).json({ message: "Profile not found" });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: "Error retrieving profile" });
    });

}


module.exports = {
    ProfileData,
};