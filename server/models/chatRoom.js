const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const chatRoomSchema = new Schema({
    Game:{
        name:String,
        ID:String
    },
  username:String,
  socketID:String,
});


const chatRoom=mongoose.model('chatroom',chatRoomSchema);

module.exports = chatRoom;