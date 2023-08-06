require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const pageRoutes = require("./routes/routes");
const userRoutes = require("./routes/user");

const EditProfileRoute = require("./routes/EditProfileRoute")

const cors = require("cors");

//const bodyParser = require("body-parser");

const app = express();

//middleware
app.use(express.json());
app.use(cors());

//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/algorithmia", pageRoutes);
app.use("/api/user", userRoutes);
app.use("/profile",EditProfileRoute)

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
