const mongoose = require('mongoose');

const config = require("../config.json");

const Challenge=require('../models/challenges');

const Game = require('../models/game');

const User = require('../models/user');
const authMiddleware = require('./../middleware/authMiddleWare');
exports.registerChallenge= async (req,res)=>{



//     Challenge.deleteMany({Name:req.body.Name},(err,data)=>{
// if(err){
//     res.send(err);
// }
// else{
//     res.send(data)
// };

//     });
//     return;


// res.send("game:"+req.body.GameName);
// return;


//        Challenge.findOne({ChallengeID:'5cc3398730b11e22d0edb108'},(err,data)=>{
//         if(err){
//              res.send(err);
//         }
//         else{
//             res.send(data);
//         }

//        })

let game='';







    Game.findOne({Name:req.body.GameName},(error,data)=>{

        if(error){
              res.send("error:"+error);
        }
        else{
            game=data;
          console.log(data)
    const chanllenge=new Challenge({
        ChanllengeID: new mongoose.Types.ObjectId,
           Game:{
             id:game.GameID,
             Name:game.Name,
             Mode:game.Modes,
           },
           Challenger:req.body.Challenger,
           Oponent:req.body.Oponent,
           Bet:req.body.Bet,
           Notified:false,
           InProgress:false,
           Resulting:false,
         });

          chanllenge.save().then((data)=>{
                res.send(data);
              })


        }



    });
}
exports.result=(Data)=>{
  console.log(Data);
  let challenge='';

  Challenge.findByIdAndUpdate({ ChanllengeID: Data.challenge_id  },{$set:{
    Winner:Data.Winner,
    Loser:Data.Loser,
  }});
}
exports.getChanllenge=(req, res, next)=>{

    Challenge.findOne({ ChanllengeID: req.body.ChanllengeID  }, (err, data) => {
        if(err){
            res.send(err);
        }
        else{
            res.send(data);
        }
    });
  }
