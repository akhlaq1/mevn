"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PostSchema = new Schema(
  {
    userId: mongoose.Schema.Types.ObjectId,
    title: String,
    description:String
  },
  {
    timestamps: true
  }
);
const postSchema = mongoose.model("userPost", PostSchema);
module.exports = postSchema;