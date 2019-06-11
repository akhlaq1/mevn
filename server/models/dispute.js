"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const disputeSchema = new Schema(
  {
    Game:{
      id:String,
      name:String,
    },
    Challenge:{
    id:String,
    Challenger:String,
    Oponent:String,
    WinAmount:String,
    Winner:String,
    Loser:String,
    },
    Contact:{
      Source:String,
      Details:String
    },
    Additional_Comments:String,
    Screenshot:String,
    Resolved:Boolean
}
);

const Dispute = mongoose.model("dispute", disputeSchema);
module.exports = Dispute;
