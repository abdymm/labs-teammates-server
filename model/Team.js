// Team.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema for Team
let Team = new Schema(
  {
    name: {
      type: String
    },
    country: {
      type: String
    }
  },
  {
    collection: "teams"
  }
);

module.exports = mongoose.model("Team", Team);
