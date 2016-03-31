'use strict';

var templates = {
  'app/compose': require('./views/app/compose.js'),
  'app/find': require('./views/app/find.js'),
  'app/new_thread': require('./views/app/new_thread.js'),
  'app/notifications': require('./views/app/notifications.js'),
  'app/recent': require('./views/app/recent.js'),
  'app/replies': require('./views/app/replies.js'),
  'app/reply': require('./views/app/reply.js'),
  'app/reply_thread': require('./views/app/reply_thread.js'),
  'app/report': require('./views/app/report.js'),
  'app/ruleset': require('./views/app/ruleset.js'),
  'app/ruleset_moderate': require('./views/app/ruleset_moderate.js'),
  'app/ruleset_standard': require('./views/app/ruleset_standard.js'),
  'app/ruleset_strict': require('./views/app/ruleset_strict.js'),
  'app/settings': require('./views/app/settings.js'),
  'app/thread': require('./views/app/thread.js'),
  'app/tracked': require('./views/app/tracked.js'),
  'app_header': require('./views/app_header.js'),
  'header': require('./views/header.js'),
  'home/about': require('./views/home/about.js'),
  'home/index': require('./views/home/index.js'),
  'home/privacy': require('./views/home/privacy.js'),
  'home/register': require('./views/home/register.js'),
  'home/tos': require('./views/home/tos.js'),
  'home_header': require('./views/home_header.js'),
  'layout': require('./views/layout.js'),
  'nav': require('./views/nav.js'),
  'partials/app_header': require('./views/partials/app_header.js'),
  'partials/compose_header': require('./views/partials/compose_header.js'),
  'partials/flash': require('./views/partials/flash.js'),
  'partials/generic_header': require('./views/partials/generic_header.js'),
  'partials/home_header': require('./views/partials/home_header.js'),
  'partials/reply_header': require('./views/partials/reply_header.js'),
  'partials/thread_header': require('./views/partials/thread_header.js'),
  'thread_header': require('./views/thread_header.js')
};

var controllers = {
  'app/compose': require('../client/js/controllers/app/compose.js'),
  'app/new_thread': require('../client/js/controllers/app/new_thread.js'),
  'app/notifications': require('../client/js/controllers/app/notifications.js'),
  'app/recent': require('../client/js/controllers/app/recent.js'),
  'app/replies': require('../client/js/controllers/app/replies.js'),
  'app/reply': require('../client/js/controllers/app/reply.js'),
  'app/reply_thread': require('../client/js/controllers/app/reply_thread.js'),
  'app/report': require('../client/js/controllers/app/report.js'),
  'app/ruleset': require('../client/js/controllers/app/ruleset.js'),
  'app/settings': require('../client/js/controllers/app/settings.js'),
  'app/thread': require('../client/js/controllers/app/thread.js'),
  'app/tracked': require('../client/js/controllers/app/tracked.js'),
  'home/about': require('../client/js/controllers/home/about.js'),
  'home/index': require('../client/js/controllers/home/index.js'),
  'home/privacy': require('../client/js/controllers/home/privacy.js'),
  'home/register': require('../client/js/controllers/home/register.js'),
  'home/tos': require('../client/js/controllers/home/tos.js')
};

var routes = [
  {
    route: '/',
    action: 'home/index'
  },
  {
    route: '/register',
    action: 'home/register'
  },
  {
    route: '/about',
    action: 'home/about'
  },
  {
    route: '/tos',
    action: 'home/tos'
  },
  {
    route: '/privacy',
    action: 'home/privacy'
  },
  {
    route: '/recent',
    action: 'app/recent'
  },
  {
    route: '/recent/:page',
    action: 'app/recent'
  },
  {
    route: '/tracked',
    action: 'app/tracked'
  },
  {
    route: '/notifications',
    action: 'app/notifications'
  },
  {
    route: '/settings',
    action: 'app/settings'
  },
  {
    route: '/thread',
    action: 'app/new_thread'
  },
  {
    route: '/thread/:id',
    action: 'app/thread'
  },
  {
    route: '/thread/:id/:page',
    action: 'app/thread'
  },
  {
    route: '/compose/:id',
    action: 'app/compose'
  },
  {
    route: '/report/:threadId/:id',
    action: 'app/report'
  },
  {
    route: '/ruleset',
    action: 'app/ruleset'
  }
];

module.exports = {
  templates: templates,
  controllers: controllers,
  routes: routes
};
