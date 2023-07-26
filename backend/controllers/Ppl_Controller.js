const Ppl = require("../models/Ppl_Model");



// app.post("/multiple", upload.array("images", ), (req, res) => {
//   console.log(req.file)
//   res.send("multiple success")
// })

//Add a ppl request
const addPpl = async (req, res) => {
  const { type, product, description, sdate, edate, file } = req.body;

  try {
    const ppl = await Ppl.create({ type, product, description, sdate, edate, file });
    res.status(200).json(ppl);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


module.exports = {
  addPpl
};
