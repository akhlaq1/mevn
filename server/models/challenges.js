"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const challengeSchema = new Schema(
  {
    ChallengeID: mongoose.Schema.Types.ObjectId,
    Game:{
    id:String,
    Name:String
    },
    Challenger:String,
    Oponent:String,
    Bet:String,
    WinAmount:String,
    Profit:String,
    Winner:String,
    Loser:String,
    ChallengeScreenShot:String,
    Notified:Boolean,
    InProgress:Boolean,
    Resulting:Boolean,

}
);

const Challenge = mongoose.model("challenge", challengeSchema);
module.exports = Challenge;
