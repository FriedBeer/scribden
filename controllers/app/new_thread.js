'use strict';

module.exports = function (req, res, next) {
    if (!req.session.user) {
        res.redirect('/'); // @TODO: redirect to promotion page to encourage registration
        next(); 
    } else {
        res.viewModel = {
            model: {
                user: req.session.user
            }
        };
        next();
    }
};
