
const mongoose = require('mongoose');
const PrivateInboxSchema = new mongoose.Schema({


    Game:{
        ID:String,
        name:String
    },
    Users:{
     Username_1:String,
     UserID_1:String,
     Username_2:String,
     UserID_2:String,
    },

 });

 const Private_Inbox = mongoose.model("private_inbox", PrivateInboxSchema);
module.exports = Private_Inbox;