const { Schema, model } = require("mongoose");

const sumSchema = new Schema(
  {
    summaryText: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // get: timestamp =>
    }
  }
);

const Summary = model('Summary', sumSchema)

module.exports = Summary;
