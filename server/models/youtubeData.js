"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const YoutubeDataSchema = new Schema(
  {
    userId: mongoose.Schema.Types.ObjectId,
    link: String,
    title: String,
    creator: String,
    contentType: String
  },
  {
    timestamps: true
  }
);
const youtubeDataSchema = mongoose.model("youtubeData", YoutubeDataSchema);
module.exports = youtubeDataSchema;