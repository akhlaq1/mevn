
const PublicInbox = require('../models/publicInbox');
const PrivateInbox = require('../models/privateInbox');
const PublicChat = require('../models/publicChat');
const PrivateChat = require('../models/privateChat');
const ChatRoom = require('../models/chatRoom');
const Game = require('../models/game');
const User = require('../models/user');
const mongoose = require('mongoose');
var dateFormat = require('dateformat');
const weekDays= ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
exports.PublicInbox = async (params)=>{



  // PublicInbox.deleteMany({},(err,data)=>{
  //       if(err){
  //           return(err);
  //       }
  //       else{

  //       }

  //   });

  //   return;f

let public_msgs;
    let game=await Game.findOne({"Name":params.GameName});

let inbox=await PublicInbox.countDocuments({
"Game.ID":game._id,
"Game.name":game.Name
});



  if(inbox==0){

    const publicInbox = await new PublicInbox({
        Game:{
           name:game.Name,
           ID:game._id
        }
    });


await publicInbox.save().then((data)=>{
     public_msgs= null;
});


}
  else{
   inbox=await PublicInbox.findOne({
        "Game.name":game.Name,
        "Game.ID":game._id
      });

 await  PublicChat.find({InboxID:inbox._id},{ "Message": 1,"Date":1,"Time":1,"Day":1, "_id": 0},(err,data)=>{
      if(err){
        return(err);
      }
      else{

        public_msgs = (data);
      }
    });
  }

return public_msgs;
}


exports.PrivateInbox = async (params)=>{

//   PrivateInbox.deleteMany({},(err,data)=>{
//     if(err){
//         return(err);
//     }
//     else{
//         console.log(data)
//     }

// });

// return;

let personal_msgs;


let user_1=await  User.findOne({username:params.UserName_1});


let user_2=await User.findOne({username:params.UserName_2});


    let game=await Game.findOne({Name:params.GameName});

let count = await PrivateInbox.countDocuments({
"Game.ID":game._id,
"Game.name":game.Name,
$or:[
{"Users.Username_1":user_1.username},
{"Users.Username_1":user_2.username},
],
$or:[
  {"Users.Username_2":user_1.username},
  {"Users.Username_2":user_2.username},
],
$or:[
  {"Users.UserID_1":user_1._id},
  {"Users.UserID_1":user_2._id},
],
$or:[
  {"Users.UuserID_2":user_1._id},
  {"Users.UserID_2":user_2._id},
],
});





   if(count==0){
    const privateInbox = await new PrivateInbox({

            Game:{
               name:game.Name,
               ID:game._id
            },
            Users:{
                Username_1:user_1.username,
                UserID_1:user_1._id,
                Username_2:user_2.username,
                UserID_2:user_2._id,
              },

        });


    await  privateInbox.save().then((data)=>{
        personal_msgs = data;
      });
   }
   else{
     let inbox=await PrivateInbox.findOne({
        "Game.ID":game._id,
        "Game.name":game.Name,
        $or:[
          {"Users.Username_1":user_1.username},
          {"Users.Username_1":user_2.username},
          ],
          $or:[
            {"Users.Username_2":user_1.username},
            {"Users.Username_2":user_2.username},
          ],
          $or:[
            {"Users.UserID_1":user_1._id},
            {"Users.UserID_1":user_2._id},
          ],
          $or:[
            {"Users.UserID_2":user_1._id},
            {"Users.UserID_2":user_2._id},
          ],
     });

     await this.readMsgs({
       username:user_2.username,
       InboxID:inbox._id
     });

 personal_msgs=  await  PrivateChat.find({InboxID:inbox._id});



   }


 return personal_msgs;
}

exports.publicMessage = async(params)=>{
//   PublicChat.deleteMany({},(err,data)=>{
//     if(err){
//         return(err);
//     }
//     else{
//         console.log(data)
//     }

// });

// return;

  let public_msg;
  var now = new Date();
  let date = dateFormat(now,"shortDate");
  let time = dateFormat(now,"shortTime");
  let day = weekDays[now.getDay()];

  let game=await Game.findOne({Name:params.GameName});
  let user=await User.findOne({username:params.username});

let inbox=await PublicInbox.findOne({
    "Game.name":game.Name,
    "Game.ID":game._id
  });

  const msg = await new PublicChat({
   InboxID:inbox._id,
   Message:{
     username:user.username,
     msg:params.msg
   },
   Date:date,
   Time:time,
   Day:day
  });
 await msg.save().then((data)=>{

    public_msg= {
      Message:{
        msg:data.Message.msg,
        username:data.Message.username,
      },
      Date:data.Date,
      Time:data.Time,
      Day:data.Day
    }
  });

  return public_msg;
}

exports.privateMessage = async(params)=>{
//   PrivateChat.deleteMany({},(err,data)=>{
//     if(err){
//         return(err);
//     }
//     else{
//         console.log(data)
//     }

// });

// return;

 let privatte_msg;
  var now = new Date();
  let date = dateFormat(now,"shortDate");
  let time = dateFormat(now,"shortTime");
  let day = weekDays[now.getDay()];
/// user number 1

  let user_1=await  User.findOne({"username":params.Username_1});


///   user number 2
let user_2=await User.findOne({"username":params.Username_2});

let game=await Game.findOne({"Name":params.GameName});

let INBOX=await PrivateInbox.find({});



let inbox=await PrivateInbox.findOne({

  $or:[
    {"Users.Username_1":user_1.username},
    {"Users.Username_1":user_2.username,}
    ],
  $or:[
  {"Users.Username_2":user_1.username},
  {"Users.Username_2":user_2.username,},
  ],
  "Game.ID":game._id,
  "Game.name":game.Name
  },
  {
  "Game.ID":game._id,
  "Game.name":game.Name
});
  const msg = await new PrivateChat({
    InboxID:inbox._id,
   Message:{
     username:params.username,
     msg:params.msg
   },
   Date:date,
   Time:time,
   Day:day,
   Status:"Unseen",
  });
  await msg.save().then(async (data)=>{
      privatte_msg = {
      Message:{
          username:data.Message.username,
          msg:data.Message.msg
        },
        Date:data.Date,
        Time:data.Time,
        Day:data.Day,

     };
  });


  return privatte_msg;
},

exports.JoinRoom = async (params)=>{
//   ChatRoom.deleteMany({},(err,data)=>{
//     if(err){
//         return(err);
//     }
//     else{
//         console.log(data)
//     }

// });

// return;

   let user_name,CR;
   let game=await Game.findOne({"Name":params.GameName});


    let  roomCheck = await ChatRoom.countDocuments({
      "Game.name":game.Name,
       "Game.ID":game._id,
       "username":params.username,
     });

      if(roomCheck==0){

        const room=await new ChatRoom({
          "Game.name":game.Name,
          "Game.ID":game._id,
          "username":params.username,
          "socketID":params.socketID
      });

      await room.save().then((data)=>{

        user_name = data.username;
      });
      }
      else{
        CR = await ChatRoom.findOne({
       "Game.name":game.Name,
       "Game.ID":game._id,
       "username":params.username});
         CR.socketID = params.socketID;
        await CR.save();
       }


        return CR.username;
}


exports.LeaveRoom = async (params)=>{
  let game=await Game.findOne({Name:params.GameName});

await ChatRoom.deleteOne({
    "username":params.username,
    "Game.name":game.Name,
    "Game.ID":game._id
  },(err,data)=>{
    if(err){

    }
    else{
    }
  });
},

exports.getSocketID = async (params) => {

  let game=await Game.findOne({Name:params.GameName});



  let data=await ChatRoom.findOne({
  "Game.ID":game._id,
  "Game.name":game.Name,
  "username":params.username
  });


  return data.socketID;
}

exports.onlineUsers = async (params)=>{
 let onlineUsers= await ChatRoom.find({"Game.name":params.GameName},{ "username": 1, "_id": 0});
 let online_users=[];
let i=0;
for(i=0;i<onlineUsers.length;i++){
 let unseen_msgs = await this.getUnSeenMsgs({
     GameName:params.GameName,
     UserName_1:params.username,
     UserName_2:onlineUsers[i].username
  });

  online_users.push({
    name:onlineUsers[i].username,
    unseen_msgs:unseen_msgs
  });
}

 return online_users;
}

exports.readMsgs = async (params) => {


  var now = new Date();
  let date = dateFormat(now,"shortDate");
  let time = dateFormat(now,"shortTime");
  let day = weekDays[now.getDay()];


  let count=await PrivateChat.countDocuments({
    Status:"Unseen",
    InboxID:params.InboxID,
    "Message.username":params.username
  });

  if(count > 0){

  let private_msg=await PrivateChat.updateMany({
    Status:"Unseen",
    InboxID:params.InboxID,
    "Message.username":params.username
  },{
   Status:"seen",
   Seen_Time:time,
   Seen_Date:date,
   Seen_Day:day
  });

  }
}

exports.getUnSeenMsgs = async (params)=>{


  let user_1=await  User.findOne({username:params.UserName_1});


  let user_2=await User.findOne({username:params.UserName_2});


      let game=await Game.findOne({Name:params.GameName});

      let inbox=await PrivateInbox.findOne({
        "Game.ID":game._id,
        "Game.name":game.Name,
        $or:[
          {"Users.Username_1":user_1.username},
          {"Users.Username_1":user_2.username},
          ],
          $or:[
            {"Users.Username_2":user_1.username},
            {"Users.Username_2":user_2.username},
          ],
          $or:[
            {"Users.UserID_1":user_1._id},
            {"Users.UserID_1":user_2._id},
          ],
          $or:[
            {"Users.UserID_2":user_1._id},
            {"Users.UserID_2":user_2._id},
          ],
     });



     let unseen =await PrivateChat.countDocuments({
        InboxID:inbox._id,
        "Message.username":user_2.username,
        Status:"Unseen"
     });

     return unseen;
}




