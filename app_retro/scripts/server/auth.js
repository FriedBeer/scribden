'use strict';
// @TODO: passwords, password encryption
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var signIn = function (req, res) {
	var user = require('./user.js'),
		passport = req._passport.instance,
        email = req.body.email,
        userPromise = user.getScribdenUserByEmail(email);
    
    // look for existing user
    userPromise.then(function (value) {
        if (value.length === 0) {
            // user does not exist, create it
            signUp(req, res);
        } else {
            // login user
            login(value[0], req, res);
        }
    }, function (reason) {
        // error
        res.send(500, reason);
    });    
};

var signUp = function (req, res) {
	validateEmail(req.body.email, res);
    createUser(email, res).then(function (value) {
        login(value, req, res);
    });
};

var signOut = function (req, res) {
    req.logout();
    res.send(200);
};

var validateEmail = function (email, res) {
    if (!email) {
        return res.send(400, 'Email required');
    }

    if (!/^(?!undefined)[a-zA-Z0-9._\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{1,3}$/.test(email)) {
        return res.send(400, 'Email is in invalid format.');
    }
};

var createUser = function (email, res) {
    var Q = require('q'),
        user = require('./user.js'),
        deferred = Q.defer();
    
    user.insertScribdenUser(email).then(function (value) {
        deferred.resolve(value[0]);
    }, function (reason) {
        // error
        deferred.reject(new Error(reason));
    });
    
    return deferred;
};

var login = function (user, req, res) {
    passport.authenticate('local', function (err, user, info) {
        if (err) {
            return res.send(500, err);
        }
        if (!user) {
            return res.send(500, 'Sign in failed.');
        }

        req.login(user, function (err) {
            if (err) {
                return res.send(500, err);
            }
            
            // Removing password for security reasons.
            // A return value of undefined indicates that
            // the account does not have a password set up
            if (user.Password) {
                user.Password = '';
            } else {
                user.Password = undefined;
            }
            res.send(200, { user: user });
        });
    })(req, res);
};

passport.use(new LocalStrategy(
    function(email, password, done) {
        var userPromise = User.getScribdenUserByEmail(email);
        userPromise.then(function(value) {
            try {
                if (!value || (value && value.length === 0)) {
                    return done(null, false, { message: 'Incorrect email.' });
                }
                else if (value[0].Password != password) {
                    return done(null, false, { message: 'Incorrect password.' });
                }
                else {
                    var user = { id: value[0].ScribdenUserKey, username: value[0].Username, password: value[0].Password };
                    return done(null, user);
                }
            } catch(e) {
                // @TODO: error handler here
                console.log(e);
            }
        }, function(reason) {
            return done(null, false, { message: reason });
        });
    }
));

// Serialize
passport.serializeUser(function(user, done) {
    done(null, user._id);
});

// Deserialize
passport.deserializeUser(function(id, done) {
    User.findOne({ _id: id }).exec(function(err, user) {
        done(err, user);
    });
});

exports.signin = signIn;
exports.signout = signOut;
exports.passport = passport;
