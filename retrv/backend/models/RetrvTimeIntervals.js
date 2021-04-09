const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

function arrayLimit(val) {
  return val.length <= 8 && val.length >= 4;
}

const RetrvTimeIntervalsSchema = new Schema({
  id: {
    type: ObjectId,
  },
  intervalArray: {
    type: [Number],
    required: true,
    validate: [
      arrayLimit,
      "Number of intervals should be greater or equal to 4 and less than or equal to 8",
    ],
  },
});

module.exports = mongoose.model("retrvtimeintervals", RetrvTimeIntervalsSchema);
