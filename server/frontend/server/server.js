// server.js
require('dotenv').config();
const express = require('express');
const Cors = require("cors");
const bodyParser = require('body-parser');
const { PORT } = require('./config');
const mongoose = require("./models/mongoose.js");
const api = require("../../../backups/repos/backups/merged/vuejs/server/routes/api");
const morgan = require('morgan');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('combined'));
app.use(Cors());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use("/api", api);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
//POSTS N SHIT
app.get('/media', (req, res) => {
  res.send(
    [{
      title: "Hello World!",
      description: "Hi there! How are you?"
    }]
  )
})

app.listen(process.env.PORT || 8081)
