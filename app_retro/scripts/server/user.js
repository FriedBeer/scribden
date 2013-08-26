'use strict';

var insertScribdenUser = function (email) {
    var util = require('./sql-util.js');
    return util.insertQuery('INSERT INTO ScribdenUser (Email) ' +
                              'VALUES (?)',
                              [email]);
};

var insertScribdenUserProxy = function (req, res) {
    var util = require('./util.js'),
        promise = insertScribdenUser(req.body.email);
    util.initPromiseCallback(promise, res);
};

var getScribdenUserByEmail = function (email) {
    var util = require('./sql-util.js');
    return util.generalQuery('SELECT ScribdenUserKey, ' +
                                'Username, ' +
                                'Password, ' +
                                'Email, ' +
                                'Active, ' +
                                'ModDate ' +
                             'FROM ScribdenUser ' +
                             'WHERE Email = ? ' +
                                'AND Active = true',
                             [email]);
};

var getScribdenUserByEmailProxy = function (req, res) {
    var util = require('./util.js'),
        promise = getScribdenUserByEmail(req.body.email);
};

var getScribdenUserById = function (id) {
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
};

var getScribdenUserByIdProxy = function (req, res) {
    var util = require('./util.js'),
        promise = exports.getScribdenUserById(req.params.id);
    util.initPromiseCallback(promise, res);
};


exports.insertScribdenUser = insertScribdenUser;
exports.insertScribdenUserProxy = insertScribdenUserProxy;
exports.getScribdenUserByEmail = getScribdenUserByEmail;
exports.getScribdenUserByEmailProxy = getScribdenUserByEmailProxy;
exports.getScribdenUserById = getScribdenUserById;
exports.getScribdenUserByIdProxy = getScribdenUserByIdProxy;
