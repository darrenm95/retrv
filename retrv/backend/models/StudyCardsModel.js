const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

// create study cards schema
const StudyCardsSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("studycards", StudyCardsSchema);
