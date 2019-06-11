'use strict';
const nodemailer = require('nodemailer');
module.exports = {
  sendMail: async (to, subject, html) => {
    nodemailer.createTestAccount(async (err, account) => {
      var transporter = nodemailer.createTransport({
        host: 'mail.hwsociety.org',
        port: 465,
        // secure:true,
        ssl:false,
        secureConnection: true,
        auth: {
          user: 'test@hwsociety.org',
          pass: 'dg~_W,!eR^nn'
        }
        // host: 'smtpout.secureserver.net',
        // port: 465,
        // secure:true,
        // auth: {
        //   user: 'am@wagergames.io',
        //   pass: 'test12345',
        // }
      });
      let mailOptions = {
        from: '"zia" <test@hwsociety.org>',
        to: to,
        subject: subject,
        html: html,
      };
      let response = await transporter.sendMail(mailOptions);
      // console.log(response);
    });
  }
};