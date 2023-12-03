require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const morgan = require('morgan');
const winston = require('./middleware/logger');
var cors = require('cors');
const db = require('./database/database');

var clientRouter = require('./routes/clientRouter');
var adminRouter = require('./routes/adminRouter');
var authRouter = require('./routes/authRouter');

var app = express();

app.use(cors());

morgan.token('id', function getId(req) {
  return req.id;
});

app.use(morgan('combined', { stream: winston.stream }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', clientRouter);
app.use('/admin', adminRouter);
app.use('/auth', authRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

db.testConnection();

module.exports = app;
