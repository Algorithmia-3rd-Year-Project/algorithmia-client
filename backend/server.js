require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const pageRoutes = require("./routes/routes");
const userRoutes = require("./routes/user");

const gameupdateRoute = require("./routes/GameUpdateRoute");
const complaintsRoute = require("./routes/ComplaintsRoute");

const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/algorithmia", pageRoutes);
app.use("/api/user", userRoutes);
app.use("/update",gameupdateRoute);
app.use("/complaints",complaintsRoute)

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
