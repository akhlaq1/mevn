let mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const mongoConnection =
  process.env.MONGO_CONNECTIONnn || require("./../config.json").MONGO_CONNECTIONnn;
mongoose.connect(
  mongoConnection,
  { useNewUrlParser: true },
  err => {
    if (err) console.log(err);
    else console.log("Db Connected");
  }
);
module.exports = { mongoose };