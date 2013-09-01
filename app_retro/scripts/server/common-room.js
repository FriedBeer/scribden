var getCommonRoomsByScribdenUser = function (userid) {
    'use strict';
    
    var util = require('./sql-util.js');
    return util.generalQuery('SELECT  CR.CommonRoomKey, ' +
                                        'CR.Name, ' +
                                        'CR.Description, ' +
                                        'CR.isPublic, ' +
                                        'CR.Banner, ' +
                                        'CR.HomeBG, ' +
                                        'M.isModerator, ' +
                                        'CR.Active, ' +
                                        'CR.ModDate ' +
                                'FROM CommonRoom CR ' +
                                'INNER JOIN Members M ' +
                                    'ON M.fCommonRoomKey = CR.CommonRoomKey ' +
                                'WHERE ' +
                                    'M.fScribdenUserKey = ? ' +
                                    'AND M.Approved = true ' +
                                    'AND CR.Active = true ' +
                                    'AND M.Active = true ',
                                [userid]);
};

var getCommonRoomsByScribdenUserProxy = function (req, res) {
    'use strict';
    
    var util = require('./util.js'),
        promise = getCommonRoomsByScribdenUser(req.params.userid);
    util.initPromiseCallback(promise, res);
};

var getUserCommonRoomById = function (commonRoomID, userid) {
    'use strict';
    
    var util = require('./sql-util.js');
    return util.generalQuery('SELECT  CR.CommonRoomKey, ' +
                                        'CR.Name, ' +
                                        'CR.Description, ' +
                                        'CR.isPublic, ' +
                                        'CR.Banner, ' +
                                        'CR.HomeBG, ' +
                                        'M.isModerator, ' +
                                        'M.Approved, ' +
                                        'M.fListUserStatusKey ' +
                                'FROM CommonRoom CR ' +
                                'INNER JOIN Members M ' +
                                    'ON M.fCommonRoomKey = CR.CommonRoomKey ' +
                                'WHERE ' +
                                    'CR.CommonRoomKey = ? ' +
                                    'AND M.fScribdenUserKey = ? ' +
                                    'AND CR.Active = true ' +
                                    'AND M.Active = true',
                                    [commonRoomID, userid]);
};

var getUserCommonRoomByIdProxy = function (req, res) {
    'use strict';
    
    var util = require('./util.js'),
        promise = getUserCommonRoomById(req.params.commonRoomID, req.params.userid);
    util.initPromiseCallback(promise, res);
};

var updateCommonRoom = function (commonRoomID, name, description, isPublic, banner, homeBG) {
    'use strict';
    
    var util = require('./sql-util.js'),
        query = 'UPDATE CommonRoom SET ',
        params = [];
    
    if (name) {
        query += 'Name = ?, ';
        params.push(name);
    }
    if (description) {
        query += 'Description = ?, ';
        params.push(description);
    }
    if (isPublic) {
        query += 'isPublic = ?, ';
        params.push(isPublic);
    }
    if (banner) {
        query += 'Banner = ?, ';
        params.push(banner);
    }
    if (homeBG) {
        query += 'HomeBG = ?, ';
        params.push(homeBG);
    }
    
    if (params.length > 0) {
        query = query.substring(0, query.length - 2);
        query += ' WHERE CommonRoomKey = ? ';
        params.push(commonRoomID);
        
        return util.generalQuery(query, params);
    } else {
        return null;
    }
};

var updateCommonRoomProxy = function (req, res) {
    'use strict';
    
    var util = require('./util.js'),
        promise = updateCommonRoom(req.body.commonRoomID, req.body.name, req.body.description, req.body.isPublic, req.body.bannerURL, req.body.homeBGURL);
    util.initPromiseCallback(promise, res);
};

var insertCommonRoom = function (userid, name, description, isPublic, banner, homeBG) {
    'use strict';
    
    console.log(userid + ',' + name + ',' + description + ',' + isPublic + ',' + banner + ',' + homeBG);
    var Q = require('q'),
        util = require('./sql-util.js'),
        members = require('./members.js'),
        deferred = Q.defer();
    
    if (!banner) {
        banner = 'null';
    }
    
    if (!homeBG) {
        homeBG = 'null';
    }
    
    var cPromise = util.insertQuery('INSERT INTO CommonRoom( Name, Description, isPublic, Banner, HomeBG ) ' +
                                        'VALUES( ?, ?, ?, ?, ? ); ',
                                        [name, description, isPublic, banner, homeBG]);
    
    cPromise.then(function (value) {
        console.log('added common room: ' + value[0].ResultKey);
        var listUserStatuses = require('./list-user-status.js'),
            mPromise = members.insertMember(userid, listUserStatuses.ACTIVE, value[0].ResultKey, 1, 1);
        
        mPromise.then(function (value) {
            console.log('added member');
            deferred.resolve(true);
        }, function (reason) {
            deferred.reject(new Error(reason));
        });
    }, function (reason) {
        deferred.reject(new Error(reason));
    });
        
    return deferred.promise;
};

var insertCommonRoomProxy = function (req, res) {
    'use strict';
    
    var util = require('./util.js'),
        promise = insertCommonRoom(req.body.userid, req.body.name, req.body.description, req.body.isPublic, req.body.bannerURL, req.body.homeBGURL);
    util.initPromiseCallback(promise, res);
};

exports.getCommonRoomsByScribdenUserProxy = getCommonRoomsByScribdenUserProxy;
exports.getCommonRoomsByScribdenUser = getCommonRoomsByScribdenUser;
exports.getUserCommonRoomByIdProxy = getUserCommonRoomByIdProxy;
exports.getUserCommonRoomById = getUserCommonRoomById;
exports.updateCommonRoomProxy = updateCommonRoomProxy;
exports.updateCommonRoom = updateCommonRoom;
exports.insertCommonRoomProxy = insertCommonRoomProxy;
exports.insertCommonRoom = insertCommonRoom;
