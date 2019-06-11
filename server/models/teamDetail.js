"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const teamSchema = new Schema({
  user: [{
    type: Schema.Types.ObjectId,
    ref: "user"
  }],
  sponsersLogoImg: [String],
  coverImg: String,
  profileImg: String,
  teamName: String,
  founder: String,
  location: String,
  ownerName: String,
  manangers: [String],
  players: [],
  pendingPlayers: [String],
  selectedPlayers: [{
    name: String,
    role: String
  }],
  upcomingEvents: [{
    eventName: String,
    eventImage: String,
    eventDate: Date,
    eventLink: String,
  }],
  achievements: [
    {
      tournamentName: String,
      achievementName: String,
      imgPath: String,
      imgName: String,
      dateOfAchievement: Date,
      venueOfAchievement: String
    }
  ],
  matches: [{
    gameName: String,
    gamePic: String,
    link: String,
    tournnamentName: String,
    date: Date,
    team1Logo:String,
    team2Logo:String,
    firstTeamName: String,
    secondTeamName: String
  }],
  products: [{
    productName: String,
    image: String,
    price: Number,
    link: String
  }],
  latestNews: [{
    newsImg: String,
    title: String,
    description: String
  }]
}, {
  timestamps: true
});
const TeamDetail = mongoose.model("teamDetail", teamSchema);
module.exports = TeamDetail;