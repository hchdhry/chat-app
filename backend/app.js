var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
require("dotenv").config();
const session = require("express-session");
const passport = require('./passport');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const dbstring = process.env.dbstring;

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoDB = dbstring;
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
  console.log("Connected to MongoDB");
}

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Initialize session middleware once
app.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));

app.use(passport.initialize());
app.use(passport.session());

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.options('*', cors());

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error', { title: 'Error', message: 'Your error message here' });
});

module.exports = app;
