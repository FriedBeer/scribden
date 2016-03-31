'use strict';

module.exports = function (req, res, next) {
    var track = require('../api/track');
    
    if (req.session.user && req.session.user.id) {
        track.index(req, res, next, function (rows, err) {
            res.viewModel = {
                model: {
                    threads: rows,
                    userId: req.session.user.id
                }
            };
            
            if (err) {
                req.flash('error', [err]);
            }
            
            next();
        }, 'all');
    } else {
        next();
    }
};
