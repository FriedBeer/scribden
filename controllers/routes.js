'use strict';

/*
 * View routes in Taunus are declared here.
 * Each view route will be added to Express (or Hapi), and the relevant controller will be executed
 * When the controller produces a model, and the view is rendered,
 *   the appropriate client-side view controller will be invoked.
 * http://taunus.bevacqua.io/api#-options-routes-
 */
module.exports = [
    { route: '/', action: 'home/index' },
    { route: '/register', action: 'home/register' },
    { route: '/about', action: 'home/about' },
    { route: '/tos', action: 'home/tos' }, // terms of service
    { route: '/privacy', action: 'home/privacy' }, // privacy policy
    { route: '/recent', action: 'app/recent' },
    { route: '/recent/:page', action: 'app/recent' },
    { route: '/tracked', action: 'app/tracked' },
    { route: '/notifications', action: 'app/notifications' },
    { route: '/settings', action: 'app/settings' },
    { route: '/thread', action: 'app/new_thread' },
    { route: '/thread/:id', action: 'app/thread' },
    { route: '/thread/:id/:page', action: 'app/thread' },
    { route: '/compose/:id', action: 'app/compose' },
    //{ route: '/reply/:threadId/:id', action: 'app/reply' },
    { route: '/report/:threadId/:id', action: 'app/report' },
    //{ route: '/replies/:threadId/:id', action: 'app/replies' },
    //{ route: '/reply_thread/:threadId/:id', action: 'app/reply_thread' },
    { route: '/ruleset', action: 'app/ruleset' }
];
