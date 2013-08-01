
exports.getCommonRoomConversationsProxy = function (req, res) {
    'use strict';
    
    var util = require('./util.js'),
        promise = exports.getCommonRoomConversations(req.params.commonRoomID);
    util.initPromiseCallback(promise, res);
};

exports.getCommonRoomConversations = function (commonRoomID) {
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

exports.insertConversationProxy = function (req, res) {
    'use strict';
    
    var util = require('./util.js'),
        promise = exports.insertConversation(req.body.commonRoomID, req.body.isBranch, req.body.isClosed);
    util.initPromiseCallback(promise, res);
};

exports.insertConversation = function (commonRoomID, isBranch, isClosed) {
    'use strict';
    
    var util = require('./sql-util.js');
    return util.generalQuery('INSERT INTO Conversation (fCommonRoomKey, IsBranch, IsClosed) ' +
                             'VALUES (?, ?, ?)',
                                [commonRoomID, isBranch, isClosed]);
};
