const express = require("express"),
  path = require("path"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  dbConfig = require("./config/DB"),
  mongoose = require("mongoose");

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.DB).then(
  () => {
    console.log("Database is connected");
  },
  err => {
    console.log("Can not connect to the database" + err);
  }
);

const teamRoutes = require("./routes/TeamRoute");

app.use(bodyParser.json());
app.use(cors());
const port = process.env.PORT || 4000;

app.use("/teams", teamRoutes);

const server = app.listen(port, function() {
  console.log("Listening on port " + port);
});
