
exports.insertPostProxy = function (req, res) {
    'use strict';
    
    var util = require('./util.js'),
        promise = exports.insertPost(req.body.content, req.body.userid, req.body.conversationID);
    util.initPromiseCallback(promise, res);
};

exports.insertPost = function (content, userid, conversationID) {
    'use strict';
    
    var util = require('./sql-util.js');
    return util.insertQuery('INSERT INTO Post (Content, fScribdenUserKey, fConversationKey) ' +
                             'VALUES (?, ?, ?)',
                                [content, userid, conversationID]);
};
