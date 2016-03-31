'use strict';

module.exports = function (req, res, next) {
    // post id
    if (!req.session.user) {
        res.redirect('/'); // @TODO: redirect to promotion page to encourage registration
        next(); 
    } else {
        res.viewModel = {
            model: {
                id: req.params.id,
                threadId: req.params.threadId,
                apiUrl: '/api/report',
                user: req.session.user,
                pageTitle: 'Report'
            }
        };
        next();
    }
};
