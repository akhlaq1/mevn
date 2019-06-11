const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const { ExtractJwt } = require("passport-jwt");
const LocalStrategy = require("passport-local").Strategy;
const FacebookTokenStrategy = require("passport-facebook-token");
const FacebookStrategy = require("passport-facebook").Strategy;
const config = require("./config/index");
const User = require("./models/user");

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromHeader("authorization"),
      secretOrKey: config.JWT_SECRET
    },
    async (payload, done) => {
      try {
        const user = await User.findById(payload.sub);
        if (!user) {
          return done(null, false);
        }
        done(null, user);
      } catch (error) {
        done(error, false);
      }
    }
  )
);

passport.use(
  new LocalStrategy(
    {
      usernameField: "email"
    },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ "local.email": email });
        if (!user) {
          return done(null, false);
        }
        const isMatch = await user.isValidPassword(password);
        if (!isMatch) {
          return done(null, false);
        }
        done(null, user);
      } catch (error) {
        done(error, false);
      }
    }
  )
);

passport.use(
  "meta-local",
  new LocalStrategy(
    {
      usernameField: "address",
      passwordField: "address"
    },
    async (username, password, done) => {
      var address = username;
      console.log(address);
      console.log("address --------");
      try {
        console.log("here");
        const user = await User.findOne({ "metamask.address": address });
        console.log(user);
        console.log("--------");
        if (user) {
          console.log("------User Found--");
          done(null, user);
        }

        const newUser = new User({
          method: "metamask",
          metamask: {
            address: address
          }
        });
        await newUser.save();
        done(null, newUser);
        // const isMatch = await user.isValidPassword(password);
        // if(!isMatch) {
        //     return done(null, false);
        // }
      } catch (error) {
        console.log("------Error--");
        done(error, false);
      }
    }
  )
);
