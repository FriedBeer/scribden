'use strict';

module.exports = function (req, res, next) {
    res.viewModel = {
        model: {
            
        }
    };
    
    if (req.session.user) {
        res.viewModel.model.userId = req.session.user.id;
    }
    
    next();
};
