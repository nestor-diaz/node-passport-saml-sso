require('dotenv').config();

const express = require('express');
const config = require('config');
const session = require('express-session');
const passportHandler = require('./src/passportHandler');
const router = require('./src/router');

const app = express();

app.use(express.urlencoded({
  extended: true,
}));

app.use(session({
  secret: config.session.secret,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: config.session.cookie.secure
  }
}));
app.use(passportHandler.initialize());
app.use(passportHandler.session());

app.use(router);

app.listen(config.uri.port, config.uri.hostname, () => {
  console.log(`Server listening on: http://${config.uri.hostname}:${config.uri.port}`);
});

module.exports = app;
