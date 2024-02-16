const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const userRouter = require('./routes/userRouter');
const routeRouter = require('./routes/routeRouter');
const passengerRouter = require('./routes/passengerRoutes');
const connectDb = require('./config/db');
const dotenv = require('dotenv');

dotenv.config();

var debug = require('debug')('server');
connectDb();

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());



app.use('/api/users', userRouter);
app.use('/api/routes',routeRouter);
app.use('/api/passengers',passengerRouter);
app.use('/', indexRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  
  // render the error page
  res.status(err.status || 500);
  res.send({path:req.url,...err});
});

module.exports = app;
