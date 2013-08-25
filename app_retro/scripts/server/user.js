/*
exports.getScribdenUserByUsernameProxy = function(req, res) {
    var util = require('./util.js');
    var promise = exports.getScribdenUserByUsername(req.params.username);
    util.initPromiseCallback(promise, res);
}

exports.getScribdenUserByUsername = function(username) {
    var util = require('./sql-util.js');
    return util.generalQuery('SELECT  ScribdenUserKey, ' +
                                      'Username, ' +
                                      'Password, ' +
                                      'Email, ' +
                                      'Active, ' +
                                      'ModDate ' +
                              'FROM ScribdenUser ' +
                              'WHERE Username = ? ' +
                                  'AND Active = true',
                            [username]);
}

exports.getScribdenUserByIdProxy = function(req, res) {
    var util = require('./util.js');
    var promise = exports.getScribdenUserById(req.params.id);
    util.initPromiseCallback(promise, res);
}

exports.getScribdenUserById = function(id) {
    var util = require('./sql-util.js');
    return util.generalQuery('SELECT  ScribdenUserKey, ' +
                                      'Username, ' +
                                      'Password, ' +
                                      'Email, ' +
                                      'Active, ' +
                                      'ModDate ' +
                              'FROM ScribdenUser ' +
                              'WHERE ScribdenUserKey = ? '+
                                  'AND Active = true',
                                [id]);
}

exports.insertScribdenUserProxy = function(req, res) {
    var util = require('./util.js');
    var promise = exports.insertScribdenUser(req.body.username, req.body.password, req.body.email);
    util.initPromiseCallback(promise, res);
}

exports.insertScribdenUser = function(username, password, email) {
    var util = require('./sql-util.js');
    return util.generalQuery('INSERT INTO ScribdenUser (Username, Password, Email) ' +
                              'VALUES (?, ?, ?)',
                              [username, password, email]);
}
*/
'use strict';
var insertScribdenUser = function (email) {
    var util = require('./sql-util.js');
    return util.insertQuery('INSERT INTO ScribdenUser (Email) ' +
                              'VALUES (?)',
                              [email]);
},  insertScribdenUserProxy = function (req, res) {
    var util = require('./util.js'),
        promise = insertScribdenUser(req.body.email);
    util.initPromiseCallback(promise, res);
},  getScribdenUserByEmail = function (email) {
    var util = require('./sql-util.js');
    return util.generalQuery('SELECT ScrbidenUserKey, ' +
                                'Username, ' +
                                'Password, ' +
                                'Email, ' +
                                'Active, ' +
                                'ModDate ' +
                             'FROM ScribdenUser ' +
                             'WHERE Email = ? ' +
                                'AND Active = true',
                             [email]);
},  getScribdenUserByEmailProxy = function (req, res) {
    var util = require('./util.js'),
        promise = getScribdenUserByEmail(req.body.email);
};

exports.insertScribdenUser = insertScribdenUser;
exports.insertScribdenUserProxy = insertScribdenUserProxy;
exports.getScribdenUserByEmail = getScribdenUserByEmail;
exports.getScribdenUserByEmailProxy = getScribdenUserByEmailProxy;
