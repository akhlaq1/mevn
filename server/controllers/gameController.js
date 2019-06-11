const mongoose = require('mongoose');
const Game =require('../models/game');
const fs = require('fs');
const config = require("../config.json");
const multer = require('multer');
exports.registerGame=(req,res)=>{

//     Game.deleteMany({Name:req.body.Name},(err,data)=>{
// if(err){
//     res.send(err);
// }
// else{
//     res.send(data)
// };

//     });
//     return;
     let data=req.body;

     let hashtags=[];
     hashtags.push(data.Hashtag1);
     hashtags.push(data.Hashtag2);
     hashtags.push(data.Hashtag3);

     console.log("hashtags:"+data.Hashtag)
          let pc=data.PC;
          if(pc=="true"){
              pc=true;
          }
          else{
              pc=false;
          }
          let mobile=data.Mobile;
          if(mobile=="true"){
              mobile=true;
          }
          else{
              mobile=false;
          }


     const game=new Game({
      GameID: new mongoose.Types.ObjectId,
      Genre:data.Genre,
      Name:data.Name,
      ShortName:data.ShortName,
      Publisher:data.Publisher,
      Size:data.Size,
      GooglePlayStoreLink:data.GooglePlayStoreLink,
      ItunesStoreLink:data.ItunesStoreLink,
      Price:data.Price,
      Users:data.Users,
      Rating:data.Rating,
      GameImage:config.Image_URL+req.file.path,
      PC:pc,
      Mobile:mobile,
      OnlineUsers:data.OnlineUsers,
      PlayersPerTeam:data.PlayersPerTeam,
     });

     game.Hashtags.push(data.Hashtag1);
     game.Hashtags.push(data.Hashtag2);
     game.Hashtags.push(data.Hashtag3);

     game.Modes.push("custom mode");
     game.save().then((data)=>{
         console.log(data)
         res.send(data)
     })

}

exports.getGame=(req, res, next)=>{

    Game.findOne({ ShortName: req.body.name  }, (err, data) => {
        if(err){
            res.send(err);
        }
        else{
            res.send(data);
        }
    });
  }
