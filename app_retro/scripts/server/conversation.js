var getConversationPostsById = function (conversationID) {
    'use strict';
    
    var util = require('./sql-util.js');
    return util.generalQuery('SELECT    C.ConversationKey, ' +
                                        'C.fCommonRoomKey, ' +
                                        'CR.Name, ' +
                                        'P.PostKey, ' +
                                        'P.Content, ' +
                                        'P.fScribdenUserKey, ' +
                                        'P.ModDate, ' +
                                        'SU.Username ' +
                                'FROM   Conversation C ' +
                                'INNER JOIN Post P ' +
                                    'ON P.fConversationKey = C.ConversationKey ' +
                                'INNER JOIN ScribdenUser SU ' +
                                    'ON SU.ScribdenUserKey = P.fScribdenUserKey ' +
                                'INNER JOIN CommonRoom CR ' +
                                    'ON CR.CommonRoomKey = C.fCommonRoomKey ' +
                                'WHERE C.ConversationKey = ? ' +
                                    'AND C.Active = true ' +
                                    'AND P.Active = true ' +
                                'ORDER BY P.PostKey DESC ',
                             [conversationID]);
};

var getConversationPostsByIdProxy = function (req, res) {
    'use strict';
    
    var util = require('./util.js'),
        promise = getConversationPostsById(req.params.conversationID);
    util.initPromiseCallback(promise, res);
};

var getCommonRoomConversations = function (commonRoomID) {
    'use strict';
    
    var util = require('./sql-util.js');
    return util.generalQuery('SELECT	C.ConversationKey, ' +
                                        'MIN(P.PostKey) as PostKey, ' + // First post
                                        'C.IsClosed, ' +
                                        'P.Content, ' +
                                        'P.fScribdenUserKey, ' +
                                        'SU.Username ' +                // Add user profile pic later
                                'FROM	Conversation C ' +
                                'INNER JOIN Post P ' +
                                    'ON P.fConversationKey = C.ConversationKey ' +
                                'INNER JOIN ScribdenUser SU ' +
                                    'ON SU.ScribdenUserKey = P.fScribdenUserKey ' +
                                'WHERE ' +
                                    'C.fCommonRoomKey = ? ' +
                                    'AND C.IsBranch = 0 ' +
                                    'AND C.Active = true ' +
                                    'AND P.Active = true ' +
                                'GROUP BY C.ConversationKey, C.IsClosed, P.Content, P.fScribdenUserKey, SU.Username, C.ModDate ' +
                                'ORDER BY C.ModDate DESC',
                                [commonRoomID]);
};

var getCommonRoomConversationsProxy = function (req, res) {
    'use strict';
    
    var util = require('./util.js'),
        promise = getCommonRoomConversations(req.params.commonRoomID);
    util.initPromiseCallback(promise, res);
};

var insertConversation = function (commonRoomID, isBranch, isClosed) {
    'use strict';
    
    var util = require('./sql-util.js');
    return util.insertQuery('INSERT INTO Conversation (fCommonRoomKey, IsBranch, IsClosed) ' +
                             'VALUES (?, ?, ?)',
                                [commonRoomID, isBranch, isClosed]);
};

var insertConversationProxy = function (req, res) {
    'use strict';
    
    var util = require('./util.js'),
        promise = insertConversation(req.body.commonRoomID, req.body.isBranch, req.body.isClosed);
    util.initPromiseCallback(promise, res);
};

exports.getCommonRoomConversationsProxy = getCommonRoomConversationsProxy;
exports.getCommonRoomConversations = getCommonRoomConversations;
exports.insertConversationProxy = insertConversationProxy;
exports.insertConversation = insertConversation;
exports.getConversationPostsByIdProxy = getConversationPostsByIdProxy;
exports.getConversationPostsById = getConversationPostsById;
