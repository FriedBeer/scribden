'use strict';

module.exports = function (req, res, next) {
    if (!req.session.user) {
        res.redirect('/'); // @TODO: redirect to promotion page to encourage registration
        next(); 
    } else {
        res.viewModel = {
            model: {
                id: req.params.id,
                threadId: req.params.id,
                apiUrl: '/api/post',
                user: req.session.user,
                pageTitle: 'Compose'
            }
        };
        next();
    }
};
