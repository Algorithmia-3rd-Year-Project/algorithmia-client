const Ppl = require("../models/Ppl_Model");

//Add a ppl request
const addPpl = async (req, res) => {
  const { type, product, description, sdate, edate } = req.body;

  try {
    const ppl = await Ppl.create({ type, product, description, sdate, edate });
    res.status(200).json(ppl);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


module.exports = {
  addPpl
};
