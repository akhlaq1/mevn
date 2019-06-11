'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const EventSchema = new Schema(
  {
    userId: mongoose.Schema.Types.ObjectId,
    title: String,
    startDate: Date,
    endDate: Date,
    description: String,
  },
  {
    timestamps: true,
  }
);
const eventSchema = mongoose.model('event', EventSchema);
module.exports = eventSchema;
