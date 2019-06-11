const passport = require("passport");
const SteamStrategy = require('passport-steam').Strategy;
const { STEAM_RETURN_URL, STEAM_REALM, STEAM_KEY } = require("./config");
const User = require("../../../backups/repos/backups/merged/vuejs/server/models/user");


passport.use(new SteamStrategy({
  returnURL: STEAM_RETURN_URL,
  realm: STEAM_REALM,
  apiKey: STEAM_KEY,
  profile: true
},
  function (identifier, profile, done) {
    return done(null, profile);
  }
));

module.exports = passport;
