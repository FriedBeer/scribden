'use strict';

/*
 * Taunus provides plugins to hook into your favorite back-end HTTP server frameworks
 * https://github.com/taunus/taunus-express
 * https://github.com/taunus/taunus-hapi
 */

if (!process.env.SQL_HOST) {
    var env = require('./env');
}

var sqlConfig = require('./sqlConfig');
var taunus = require('taunus');
var taunusExpress = require('taunus-express');
var express = require('express');
var serveStatic = require('serve-static');
var getDefaultViewModel = require('./getDefaultViewModel');
var app = express();
var bodyParser = require('body-parser');
var api = require('./controllers/api');
var routes = require('./controllers/routes');
var layout = require('./.bin/views/layout');
var flash = require('connect-flash');
var knex = require('knex')(sqlConfig);
var session = require('express-session');
var KnexSessionStore = require('connect-session-knex')(session);
var sessionStore = new KnexSessionStore({ tablename: 'sessions', knex: knex });
// refer to https://github.com/expressjs/session for documentation
var sessionConfig = {
    resave: true,
    saveUninitialized: false,
    secret: 'gravelervoltorbmewtwocharmander',
    store: sessionStore,
    cookie: { 
        secure: false,
        expires: 3600000 * 24 * 12
    }
};

if (app.get('env') === 'production') {
    app.set('trust proxy', 1); // trust first proxy
    // requires HTTPS
    sessionConfig.cookie.secure = true; // serve secure cookies
}

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(session(sessionConfig));
app.use(flash());
// init api routes
api(app);

/*
 * The options object passed to the mountpoint on the server-side allows you to
 * define view routes, a layout function, and tweak a few less-important options
 * http://taunus.bevacqua.io/api#the-options-object
 */
var options = {
  routes: routes,
  layout: layout,
  getDefaultViewModel: getDefaultViewModel
};

app.use(serveStatic('.bin/public'));
// var multer = require('multer');
// app.use(multer()); // for parsing multipart/form-data (uploading files)
taunusExpress(taunus, app, options);
app.listen(3000);
