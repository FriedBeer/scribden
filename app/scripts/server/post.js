
exports.insertPostProxy = function (req, res) {
    'use strict';
    
    var util = require('./util.js'),
        promise = exports.insertPost(req.body.content, req.body.userid, req.body.commonRoomID);
    util.initPromiseCallback(promise, res);
};

exports.insertPost = function (content, userid, commonRoomID) {
    'use strict';
    
    var util = require('./sql-util.js');
    return util.generalQuery('INSERT INTO Post (Content, fScribdenUserKey, fCommonRoomKey) ' +
                             'VALUES (?, ?, ?)',
                                [content, userid, commonRoomID]);
};
