'use strict';

/*
 * Whenever a view that shares an action name with this controller (home/index) is rendered,
 *   this controller will be executed. The controller is executed even if the view is rendered as
 *   a partial view, although the `container` parameter will be different in that case.
 * http://taunus.bevacqua.io/api#client-side-controllers
 */
module.exports = function (model, container, route) {
    var setupEditorPage = require('../../modules/setupEditorPage');
    setupEditorPage(model.apiUrl);
    console.log('Rendered view %s using model:\n%s', route.action, JSON.stringify(model, null, 2));
};
