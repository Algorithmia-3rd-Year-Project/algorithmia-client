require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const pageRoutes = require("./routes/routes");
const userRoutes = require("./routes/user");
const cors = require("cors");

const app = express();

//middleware
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/algorithmia", pageRoutes);
app.use("/api/user", userRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
