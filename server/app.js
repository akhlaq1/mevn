"use strict";
const express = require("express");
const Cors = require("cors");
const logger = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("././models/mongoose");
const config = require("./config.json");
const api = require("./routes/api");
const path = require("path");
const history = require('connect-history-api-fallback');
const userController = require('./controllers/users');
const challengeController = require('./controllers/challengeController');
const InboxController = require('./controllers/inboxController');
var Socket = require('socket.io');


var http = require('http');

const app = express();
var rooms_users= [];

// app.use(history({
//   disableDotRule: true,
//   verbose: true
// }));


app.use(Cors({}));
// app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(
  "/public/uploads",
  express.static(path.join(__dirname, "public/uploads"))
);


app.use("/api", api);




const staticFileMiddleware = express.static(path.join(__dirname + '/public/'));

let PORT = config.PORT;
const port = process.env.PORT || PORT;


app.use(staticFileMiddleware);
app.use(express.static(path.join(__dirname, '/frontend/dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/frontend/dist/index.html'));
});

app.use(history({
  disableDotRule: true,
  verbose: true
}));
app.use(staticFileMiddleware);

app.get('/', function (req, res) {
  res.render(path.join(__dirname + '/public/index.html'));
});


var server=http.createServer(app);
var io = Socket(server);

io.on('connection',async (socket)=>{


  // InboxController.JoinRoom();
  // InboxController.privateMessage();
  // InboxController.publicMessage();
  // InboxController.PublicInbox();
  // InboxController.PrivateInbox();
  // InboxController.onlineUsers();



  // chat room events

  //join room
  socket.on('join_room',async (Data)=>{

    socket.join(Data.room,async ()=>{

      let username = await userController.getUserName(Data.token);

      let msgs = await InboxController.PublicInbox({
         GameName:Data.room
       });


      let data;
      await InboxController.JoinRoom({
           GameName:Data.room,
           socketID:socket.id,
           username:username
          }).then((name)=>{
                data=name;


          });


       let online_users=await InboxController.onlineUsers({
         GameName:Data.room,
         username:username
       });



        socket.emit('join_room',{data:data,online_users:online_users,msgs:msgs});

       io.in(Data.room).emit('notification',
       {data:data,online_users:online_users});

    });
  });

  //leave room
  socket.on('leave_room',async (Data) => {



  let username = await userController.getUserName(Data.token);



  socket.leave(Data.room, async ()=>{

      await InboxController.LeaveRoom({
           username:username,
           GameName:Data.room,
           socketID:socket.id
         });

         let online_users= await InboxController.onlineUsers({
             GameName:Data.room
         });
      io.in(Data.room).emit('leave',
   {online_users:online_users});
    });

  });
  //Room chat message
  socket.on('public_msg',async (Data)=>{



    let username=await userController.getUserName(Data.token);


      let data =  await InboxController.publicMessage({
            GameName:Data.room,
            username:username,
            msg:Data.msg
          });


      io.in(Data.room).emit('notification_msg',
      {data:{
        name:username,msg:data,type:'message'}});


  });


  socket.on('private_inbox',async (Data)=>{


    let username=await userController.getUserName(Data.token);

    let msgs=await InboxController.PrivateInbox({
      GameName:Data.room,
      UserName_1:username,
      UserName_2:Data.username
    });

    socket.emit('Private_Inbox',{
      msgs:msgs
    })
  });

  //Private chat
  socket.on('private_msg',async (Data)=>{



     let username=await userController.getUserName(Data.token);




     var Msg_Data = await InboxController.privateMessage({
       Username_1:username,
       Username_2:Data.receiver,
       GameName:Data.room,
       username:username,
       msg:Data.msg

    });
    let socketID=await InboxController.getSocketID({
     GameName:Data.room,
     username:Data.receiver,
    });

    let receiver=io.sockets.sockets[socketID];


      let  data=Msg_Data;


     socket.emit('private_msg',{data:data});

     receiver.emit('private_msg',{data:data});
  });

  //receive challange notifcation from challenger
  socket.on('challenge_notification',async (Data)=>{


    let socketID=await InboxController.getSocketID({
      GameName:Data.game,
      username:Data.receiver,
     });

     let receiver=io.sockets.sockets[socketID];

    //sending notification to receiver
 receiver.emit('Challenge_notification',{data:Data});
  });


  //challenger recevie notification from oponent for or rejection
  socket.on('challenge_rejected',async  (Data)=>{


    let socketID=await InboxController.getSocketID({
      GameName:Data.room,
      username:Data.receiver,
     });

     let receiver=io.sockets.sockets[socketID];

 //sending notification to receiver
 receiver.emit('Challenge_rejection',{data:Data});
  });
//challeng accepted by oponent

  socket.on('challenge_accepted',async  (Data)=>  {

   console.log(Data)

    let socketID=await InboxController.getSocketID({
      GameName:Data.game,
      username:Data.receiver,
     });

     let receiver=io.sockets.sockets[socketID];

    //sending notification to receiver

     receiver.emit('Challenge_acception');

     socket.emit('Challenge_acception');

    });


  socket.on('result_notification',async  (Data)=>{


    console.log("in result notificaiton")

    console.log(Data)
  await challengeController.result(Data);

    let socketID=await InboxController.getSocketID({
      GameName:Data.room,
      username:Data.receiver,
     });

     let receiver=io.sockets.sockets[socketID];

    receiver.emit('Result',{data:Data});
    socket.emit('Result',{data:Data});


     });

  });

  server
    .listen(port, (req, res) => {
      console.log(`Server listening at ${port}`);
    })
    .on("error", err => {
      //res.send(err);
    });


