const Complaint = require("../models/Complaints_model");

async function getComplaints(req, res) {
  try {
    // Sort documents based on the "date" field in descending order
    const complaints = await Complaint.find({}).sort({ date: -1 }).exec();
    
    // If no complaints are found, send a 404 response
    if (complaints.length === 0) {
      return res.status(404).json({ message: 'No complaints found.' });
    }


    

    return res.status(200).json(complaints);
  } catch (error) {
    console.error('Error while fetching complaints:', error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
}

module.exports = {
  getComplaints
};
