var jade = require("jadum/runtime");
module.exports = function appHeader(locals) {
var jade_debug = [{ lineno: 1, filename: "views/partials/app_header.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (userId) {
jade_debug.unshift({ lineno: 0, filename: "views/partials/app_header.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/partials/app_header.jade" });
buf.push("<header>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "views/partials/app_header.jade" });
buf.push("<nav role=\"navigation\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "views/partials/app_header.jade" });
buf.push("<ul class=\"sd-c-nav\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: "views/partials/app_header.jade" });
buf.push("<li class=\"sd-c-nav-item\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: "views/partials/app_header.jade" });
buf.push("<a href=\"/recent\" aria-label=\"See recently updated threads\" class=\"sd-o-nav-icon\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: jade_debug[0].filename });
buf.push("R");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 6, filename: "views/partials/app_header.jade" });
buf.push("<li class=\"sd-c-nav-item\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: "views/partials/app_header.jade" });
buf.push("<a href=\"/tracked\" aria-label=\"See tracked threads\" class=\"sd-o-nav-icon\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: jade_debug[0].filename });
buf.push("T");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 8, filename: "views/partials/app_header.jade" });
jade_debug.shift();
jade_debug.unshift({ lineno: 9, filename: "views/partials/app_header.jade" });
buf.push("<li class=\"sd-c-nav-item\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 10, filename: "views/partials/app_header.jade" });
buf.push("<a href=\"/settings\" aria-label=\"Modify user settings\" class=\"sd-o-nav-icon\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 10, filename: jade_debug[0].filename });
buf.push("S");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 11, filename: "views/partials/app_header.jade" });
buf.push("<li class=\"sd-c-nav-right\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 12, filename: "views/partials/app_header.jade" });
if ( userId)
{
jade_debug.unshift({ lineno: 13, filename: "views/partials/app_header.jade" });
jade_debug.unshift({ lineno: 13, filename: "views/partials/app_header.jade" });
buf.push("<a href=\"/api/user/logout\" class=\"sd-t-wire sd-t-link\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 13, filename: jade_debug[0].filename });
buf.push("Logout");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift({ lineno: 15, filename: "views/partials/app_header.jade" });
jade_debug.unshift({ lineno: 15, filename: "views/partials/app_header.jade" });
buf.push("<a href=\"/\" class=\"sd-t-wire sd-t-link\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 15, filename: jade_debug[0].filename });
buf.push("Login ");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
buf.push("</ul>");
jade_debug.shift();
jade_debug.shift();
buf.push("</nav>");
jade_debug.shift();
jade_debug.shift();
buf.push("</header>");
jade_debug.shift();
jade_debug.shift();}.call(this,"userId" in locals_for_with?locals_for_with.userId:typeof userId!=="undefined"?userId:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "header\n  nav(role='navigation')\n    ul.sd-c-nav\n      li.sd-c-nav-item\n        a.sd-o-nav-icon(href='/recent', aria-label='See recently updated threads') R\n      li.sd-c-nav-item\n        a.sd-o-nav-icon(href='/tracked', aria-label='See tracked threads') T\n      //-li.sd-c-nav-item\n        a.sd-o-nav-icon.sd-o-notification-icon(href='/notifications', aria-label='See user notifications') N\n      li.sd-c-nav-item\n        a.sd-o-nav-icon(href='/settings', aria-label='Modify user settings') S\n      li.sd-c-nav-right\n        if userId\n          a.sd-t-wire.sd-t-link(href='/api/user/logout') Logout\n        else\n          a.sd-t-wire.sd-t-link(href='/') Login \n");
}
}