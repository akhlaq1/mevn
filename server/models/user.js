"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    method: {
      type: String,
      enum: ["local", "facebook", "metamask", "twitch"],
      required: true
    },
    username: String,
    ChallengeID:String,

    email: {
      type: String,
      lowercase: true
    },
    password: {
      type: String
    },
    photoUrl: String,
    provider: String,
    userHasAdditionalDetail: {
      type: Boolean,
      default: false
    },
    userHasTeam: {
      type: Boolean,
      default: false
    },
    userAdditionalDetail: [
      {
        type: Schema.Types.ObjectId,
        ref: "userDetail"
      }
    ],
    teamDetail: [
      {
        type: Schema.Types.ObjectId,
        ref: "teamDetail"
      }
    ],
    portfolioUrl:String
  },
  {
    timestamps: true
  },

);

const User = mongoose.model("user", userSchema);
module.exports = User;
