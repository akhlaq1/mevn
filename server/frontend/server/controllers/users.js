"use strict";
const User = require("./../models/user");
const authMiddleware = require("./../middleware/authMiddleWare");
const passport = require("../passport");

class UserController {

  redirectToSteam(req, res) {
    passport.authenticate("steam")(req, res);
  }

  //Log in with steam
  logInWithSteam(req, res, next) {
    passport.authenticate("steam", { session: false }, async function (err, userSteamProfile, info) {
      if (err) { return next(err); }
      const userJson = userSteamProfile._json;
      const steamid = userJson.steamid;
      const username = userJson.personaname;
      const photoUrl = userJson.avatar;
      let user, token;
      try {
        user = await User.findOne({ steamid: steamid });
        if (user != null) {
          token = authMiddleware.createJWT(user);
          await User.findOneAndUpdate(
            { steamid: steamid },
            { $set: { token: token } }
          );
        } else {
          user = new User({
            method: "steam",
            steamid: steamid,
            username: username,
            photoUrl: photoUrl
          });
          user = await user.save();
          token = authMiddleware.createJWT(user);
          await User.findOneAndUpdate(
            { steamid: steamid },
            { $set: { token: token } }
          );
        }
        req.logIn(user, { session: false }, function (err) {
          if (err) { return next(err); }
          return res.redirect(`http://localhost:8080/steamredirect?steamid=${steamid}&token=${token}`);
        });
      } catch (error) {
        console.log(error);
      }
    })(req, res, next);
  }

}

const userController = new UserController();
module.exports = userController;

