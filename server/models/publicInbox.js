"use strict";
 const mongoose = require('mongoose');

 const PublicInboxSchema = new mongoose.Schema({


    Game:{
        ID:String,
        name:String
    }
 });

 const Public_Inbox = mongoose.model("public_inbox", PublicInboxSchema);
module.exports = Public_Inbox;

