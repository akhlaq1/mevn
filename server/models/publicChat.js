"use strict";
 const mongoose = require('mongoose');

 const PublicChatSchema = new mongoose.Schema({
    InboxID:String,
    Message:{
      username:String,
      msg:String
    },
    Date:String,
    Time:String,
    Day:String,
 });

 const Public_Chat = mongoose.model("public_chat", PublicChatSchema);
module.exports = Public_Chat;

