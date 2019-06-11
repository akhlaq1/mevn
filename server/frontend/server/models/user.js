"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    method: {
      type: String,
      enum: ["local", "facebook", "metamask", "twitch", "steam"],
      required: true
    },
    username: String,
    email: {
      type: String,
      lowercase: true
    },
    password: {
      type: String
    },
    steamid: String,
    photoUrl: String,
    provider: String,
    token: String,
    userHasAdditionalDetail: {
      type: Boolean,
      default: false
    },
    userAdditionalDetail: [
      {
        type: Schema.Types.ObjectId,
        ref: "userDetail"
      }
    ]
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("user", userSchema);
module.exports = User;
