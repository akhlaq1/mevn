"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserDetailSchema = new Schema(
  {
    user: [
      {
        type: Schema.Types.ObjectId,
        ref: "user"
      }
    ],
    name: String,
    age: Number,
    favRole: String,
    alternativeId: String,
    gemExperience: Number,
    UserFulldescription: String,
    userNews: String,
    events: String,
    profilePic: String,
    coverPhoto: String,
    acheivements: [
      {
        tournamentName: String,
        acheivementName: String,
        imgPath: String,
        imgName: String,
        dateOfAcheivement: Date,
        venueOfAcheivemnet: String
      }
    ],
    socialMediaLinks: [
      {
        facebook: String,
        twitter: String,
        instagram: String,
        twitch: String,
        youtube: String,
        telegram: String
      }
    ],
    currentTeam: [
      {
        name: String,
        imgPath: String
      }
    ],
    pastTeam: [
      {
        name: String,
        imgPath: String
      }
    ],
    sponsors: [
      {
        name: String,
        picture: String,
        link: String
      }
    ],
    brands: [
      {
        name: String,
        picture: String,
        link: String,
        price: String,
      }
    ]
  },
  {
    timestamps: true
  }
);
const userDetailSchema = mongoose.model("userDetail", UserDetailSchema);
module.exports = userDetailSchema;
