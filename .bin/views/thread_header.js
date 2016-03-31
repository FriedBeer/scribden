var jade = require("jadum/runtime");
module.exports = function threadHeader(locals) {
var jade_debug = [{ lineno: 1, filename: "views/thread_header.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (threadId) {
jade_debug.unshift({ lineno: 0, filename: "views/thread_header.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/thread_header.jade" });
buf.push("<header>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "views/thread_header.jade" });
buf.push("<nav role=\"navigation\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "views/thread_header.jade" });
buf.push("<ul class=\"sd-c-nav\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: "views/thread_header.jade" });
buf.push("<li class=\"sd-c-nav-item\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: "views/thread_header.jade" });
buf.push("<a href=\"/recent\" aria-label=\"Go back\" class=\"sd-t-wire sd-o-back-icon\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: jade_debug[0].filename });
buf.push("Back");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 6, filename: "views/thread_header.jade" });
buf.push("<li class=\"sd-c-nav-compose\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: "views/thread_header.jade" });
buf.push("<a" + (jade.attr("href", '/compose/' + threadId, true, false)) + " aria-label=\"Make a new post\" class=\"sd-t-wire sd-o-compose-icon\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: jade_debug[0].filename });
buf.push("Compose");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
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
jade_debug.shift();}.call(this,"threadId" in locals_for_with?locals_for_with.threadId:typeof threadId!=="undefined"?threadId:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "header\n  nav(role='navigation')\n    ul.sd-c-nav\n      li.sd-c-nav-item\n        a.sd-t-wire.sd-o-back-icon(href='/recent', aria-label='Go back') Back\n      li.sd-c-nav-compose\n        a.sd-t-wire.sd-o-compose-icon(href='/compose/' + threadId, aria-label='Make a new post') Compose\n");
}
}