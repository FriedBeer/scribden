'use strict';

module.exports = function (req, res, next) {
    // if (req.query && req.query.search) { // filter thread list results }
    //console.log(req.query);
    var thread = require('../api/thread');
    thread.index(req, res, next, function (rows, err) {
        res.viewModel = {
            model: {
                threads: rows
            }
        };
        
        // get the next page number of results,
        // used for results greater than 20
        if (req.params.page) {
            res.viewModel.model.nextPage = parseInt(req.params.page) + 1;
        } else {
            // first page of results
            res.viewModel.model.nextPage = 1;
        }
        
        if (req.session.user) {
            res.viewModel.model.userId = req.session.user.id;
        }
        
        if (err) {
            req.flash('error', [err]);
        }
        
        next();
    }, req.params.page, req.query.search);
};
