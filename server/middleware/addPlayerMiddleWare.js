const jwt = require("jsonwebtoken");
const moment = require("moment");
const config = require("./../config.json");
module.exports = {
  /*
    |--------------------------------------------------------------------------
    | Login Required Middleware
    |--------------------------------------------------------------------------
    */
  ensureAuthenticated: (req, res, next) => {
    if (!req.header("Authorization")) {
      return res.status(401).send({
        message: "Please make sure your request has an Authorization header"
      });
    }
    var token = req.header("Authorization").split(" ")[1];

    var payload = null;
    try {
      payload = jwt.decode(token, config.TOKEN_SECRET);
    } catch (err) {
      return res.status(401).send({ message: err.message });
    }

    if (payload.exp <= moment().unix()) {
      return res.status(401).send({ message: "Token has expired" });
    }
    req.team = payload.sub;
    next();
  },

  /*
     |--------------------------------------------------------------------------
     | Generate JSON Web Token
     |--------------------------------------------------------------------------
     */
  createJWT: team => {
    var payload = {
      sub: team,
      iat: moment().unix(),
      exp: moment()
        .add(14, "days")
        .unix()
    };
    return jwt.sign(payload, config.TOKEN_SECRET);
  },
  decodeJWT(token) {
    return jwt.verify(token, config.TOKEN_SECRET);
  }
};