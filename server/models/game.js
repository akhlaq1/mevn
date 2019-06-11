"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema(
  {

    Genre:String,
    Name:String,
    ShortName:String,
    Publisher:String,
    Size:String,
    GooglePlayStoreLink:String,
    ItunesStoreLink:String,
    Price:String,
    Users:String,
    Rating:String,
    GameImage:String,
    PC:Boolean,
    Mobile:Boolean,
    Hashtags:Array,
    OnlineUsers:String,
    Modes:Array,
    PlayersPerTeam:String,
}
);

const Game = mongoose.model("game", gameSchema);
module.exports = Game;
