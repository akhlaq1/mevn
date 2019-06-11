const mongoose = require('mongoose');
const Dispute =require('../models/dispute');
const challenge = require('../models/challenges');
const config = require("../config.json");

const nodemailer = require('nodemailer');

exports.registerDispute=async (req,res,next)=>{

//     Dispute.deleteMany({Name:req.body.Name},(err,data)=>{
// if(err){
//     res.send(err);
// }
// else{
//     res.send(data)
// };

//     });
//     return;

console.log("21 kasjakjs dsajfcnsf cxv,mvnxckjniwq eqkwkennqoiwen cxkcvnkjzv")
    console.log(req.file)

     const Challenge= await  challenge.findOne({_id:req.body.challenge_id});

     console.log(Challenge)
     const dispute=await new Dispute({
      Game:{
        id:Challenge.Game.id,
        Name:Challenge.Game.name,

      },
      Challenge:{
        id:Challenge.ChallengeID,
        Challenger:Challenge.Challenger,
        Oponent:Challenge.Oponent,
        WinAmount:Challenge.WinAmount,
        Winner:Challenge.Winner,
        Loser:Challenge.Loser,
      },
      Contact:{
        Source:req.body.Contact_Source,
        Details:req.body.Contact_Details,
      },
      Additional_Comments:req.body.add_comments,
       Screenshot:req.file.path,
       Resolved:false
    });

    await dispute.save();

    var transporter = nodemailer.createTransport({
         service:'Gmail',
         host: 'smtp.gmail.com',
        port:587,
        secure:false,
        strictSSL: false,
        auth:{
          user:'username',
          pass:'password'
        },tls: {
          rejectUnauthorized: false
      }

    });

    var mailOptions = {
      from: 'aliadil1501@gmail.com',
      to: 'adilkazmi46@gmail.com',
      subject: ''+Challenge.Challenger+  '   vs  ' +Challenge.Oponent,
      html: '<h1>Dispute Details</h1><br><p>'+dispute+'</p><br><img alt="image skjdsdjk" src='+'http://localhost:3000/' +dispute.Screenshot+'/>'
    }

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log("kmail sending errorrrkjkfldjskdfjksdjfkds")
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

}

exports.getDispute=(req, res, next)=>{

    Dispute.findOne({ ShortName: req.body.name  }, (err, data) => {
        if(err){
            res.send(err);
        }
        else{
            res.send(data);
        }
    });
  }
