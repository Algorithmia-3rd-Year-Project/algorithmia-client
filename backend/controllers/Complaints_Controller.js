const model = require("../models/Complaints_model");

const Complaint = model.complaints

async function getComplaints(req, res) {
  try {
    // Sort documents based on the "date" field in descending order
    const complaints = await Complaint.find({ }).sort({ date: -1 }).exec();
    
    // If no complaints are found, send a 404 response
    if (complaints.length === 0) {
      return res.status(404).json({ message: 'No complaints found.' });
    }

     return res.status(200).json(complaints);
    //return res.status(200).json({ message: 'complaints sent', complaints });

  } catch (error) {
    console.error('Error while fetching complaints:', error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
}

async function changeStatusToRead(req, res) {
  try {
    const statusUpdateData = req.body;
    const id = statusUpdateData.id;
    const newState = statusUpdateData.newState;

    // Assuming you want to update the "complaints" model instead of "readUpdate"
    const updatedComplaint = await Complaint.findByIdAndUpdate(
      id, // Replace with the actual document ID you want to update
      { $set: { status: newState } },
      { new: true }
    );

    console.log(updatedComplaint)

    // Handle the case where the complaint with the provided ID is not found
    if (!updatedComplaint) {
      return res.status(404).json({ message: 'Complaint not found.' });
    }

    // Return the updated complaint as the response
    return res.status(200).json(updatedComplaint);
  } catch (error) {
    console.error('Error while updating complaint status:', error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
}

async function changeStatusToUnRead(req, res){
    
  try {
    const statusUpdateData = req.body;
    const id = statusUpdateData.id;
    const newState = statusUpdateData.newState;

    // Assuming you want to update the "complaints" model instead of "readUpdate"
    const updatedComplaint = await Complaint.findByIdAndUpdate(
      id, // Replace with the actual document ID you want to update
      { $set: { status: newState } },
      { new: true }
    );

    console.log(updatedComplaint)

    // Handle the case where the complaint with the provided ID is not found
    if (!updatedComplaint) {
      return res.status(404).json({ message: 'Complaint not found.' });
    }

    // Return the updated complaint as the response
    return res.status(200).json(updatedComplaint);
  } catch (error) {
    console.error('Error while updating complaint status:', error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
   
}

module.exports = {
  getComplaints,
  changeStatusToRead,
  changeStatusToUnRead
};
