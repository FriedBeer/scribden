'use strict';

module.exports = function (req, res, next) {
    var id = req.params.id;
    
    if (id) {
        var thread = require('../api/thread');
        var post = require('../api/post');
        
        thread.get(req, res, next, function (row, err) {
            res.viewModel = {
                model: {
                    thread: row
                }
            };
            
            if (req.session.user) {
                res.viewModel.model.userId = req.session.user.id;
            }
            
            // get the next page number of results,
            // used for results greater than 20
            if (req.params.page) {
                res.viewModel.model.nextPage = parseInt(req.params.page) + 1;
            } else {
                // first page of results
                res.viewModel.model.nextPage = 1;
            }
            
            if (err) {
                req.flash('error', [err]);
                next();
            } else if (!row) {
                req.flash('error', ['Thread not found.']);
                next();
            } else {
                post.index(req, res, next, function (result, err) {
                    if (result) {
                        res.viewModel.model.thread.posts = result.data;
                        res.viewModel.model.pageCount = result.count / 20;
                    }
                    
                    if (err) {
                        req.flash('error', [err]);
                    }
                    
                    next();
                }, req.params.id, req.params.page);
            }
        }, req.params.id);
    } else {
        throw new Error('thread id is undefined');
        next();
    }
};
