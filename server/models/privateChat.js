
const mongoose = require('mongoose');
const PrivateChatSchema = new mongoose.Schema({
    InboxID:String,
    Message:{
      username:String,
      msg:String
    },
    Date:String,
    Time:String,
    Day:String,
    Status:String,
    Seen_Time:String,
    Seen_Date:String,
    Seen_Day:String,

 });

 const Private_Chat = mongoose.model("private_chat", PrivateChatSchema);
module.exports = Private_Chat;