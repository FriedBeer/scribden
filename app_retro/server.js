'use_strict';

var express = require('express'),
    app = module.exports.app = express(),
    sqlConfig = {
        "host": process.env.RDS_HOSTNAME,
        "port": process.env.RDS_PORT,
        "user": process.env.RDS_USERNAME,
        "password": process.env.RDS_PASSWORD,
        "database": process.env.PARAM5
    },
    dbConnect = require('./scripts/server/sql-util.js'), // function for connecting to the DB
    Q = require('q'), // library that assists in resolving variables that are waiting to hear from the server
    port = process.env.PORT || 3000,
    API_PATH = '/api/v1/'; // base url to use when calling the server

// handles registration, logging in, and session authentication
apiAuth = require('./scripts/server/auth.js');
// handles user data
apiUser = require('./scripts/server/user.js');
// handles common room data
apiCommonRoom = require('./scripts/server/common-room.js');
// handles conversation data
apiConversation = require('./scripts/server/conversation.js');
// handles post data
apiPost = require('./scripts/server/post.js');
// handles various utility functions
apiUtil = require('./scripts/server/util.js');

app.configure(function () {
    'use strict';
    // Password encryption
	app.set('crypto-key', 'k3yb0ardc4t'); // @TODO: change
	app.use(express.favicon());
	app.use(express.bodyParser({uploadDir: './uploads'}));
	app.use(express.logger('dev'));  //tiny, short, default
    app.use(express.cookieParser());
    app.use(express.session({ secret: '31206tokoshinchrongraw543788' }));
    app.use(apiAuth.passport.initialize());
    app.use(apiAuth.passport.session());
	app.use(app.router);
	app.use(express.static(__dirname)); // routes the user to the home page
	app.use(express.errorHandler({dumpExceptions: true, showStack: true, showMessage: true}));
});

// Authentication
app.post(API_PATH + 'auth/signin', apiAuth.signIn);
app.post(API_PATH + 'auth/signup', apiAuth.signOut);

// scribden user
app.get(API_PATH + 'user/email/:email', apiUser.getScribdenUserByEmailProxy);
app.get(API_PATH + 'user/:id', apiUser.getScribdenUserByIdProxy);
app.get(API_PATH + 'user/name/:name', apiUser.getScribdenUserByUsernameProxy);
app.put(API_PATH + 'user/update', apiUser.updateScribdenUserProxy);
app.post(API_PATH + 'user', apiUser.insertScribdenUserProxy);

// common room
app.get(API_PATH + 'common-room/userid/:userid', apiCommonRoom.getCommonRoomsByScribdenUserProxy);
app.get(API_PATH + 'common-room/:commonRoomID/:userid', apiCommonRoom.getUserCommonRoomByIdProxy);
app.post(API_PATH + 'common-room/update', apiCommonRoom.updateCommonRoomProxy);
app.post(API_PATH + 'common-room', apiCommonRoom.insertCommonRoomProxy);

// conversation
app.get(API_PATH + 'conversation/common-room/:commonRoomID', apiConversation.getCommonRoomConversationsProxy);
app.post(API_PATH + 'conversation', apiConversation.insertConversationProxy);

// post
app.post(API_PATH + 'post', apiPost.insertPostProxy);

// utilities
app.get(API_PATH + 'signS3put/:s3objecttype/:s3objectname', apiUtil.uploadFile);

app.listen(port, function () {
    'use strict';
    console.log("Listening on " + port);
});
