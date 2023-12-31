const cookieParser = require('cookie-parser');
const express = require('express'); //подключил серв
const path = require('path');
const session = require('express-session');
const ssr = require('../middleware/ssr');
const getUser = require('../middleware/getUser');
const sessionConfig = require('./sessionConfig');
const morgan = require('morgan');

const config = (app) => {
  app.use(morgan('dev'));
  app.use(cookieParser());
  app.use(session(sessionConfig));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(express.static(path.join(__dirname, '../public')));
  app.use(ssr);
  app.use(getUser);
};

module.exports = config;
