const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const session = require('express-session')
const sequelize = require('connect-session-sequelize')
const app = express();
const PORT = process.env.PORT || 3002

app.listen(PORT,()) => {
    console.log('App listening on port {PORT)!');
}