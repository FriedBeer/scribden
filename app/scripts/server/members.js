exports.insertMember = function(userid, listUserStatusID, commonRoomID, approved, isModerator) {
    var util = require('./sql-util.js');
    return util.generalQuery('INSERT INTO Members( fScribdenUserKey, ' +
                                                     'fListUserStatusKey, ' +
                                                     'fCommonRoomKey, ' +
                                                     'Approved, ' +
                                                     'isModerator) ' +
                                'VALUES( ?, ' +
                                        '?, ' +
                                        '?, ' +
                                        '?, ' +
                                        '?)',
                                [userid, listUserStatusID, commonRoomID, approved, isModerator]);
}
