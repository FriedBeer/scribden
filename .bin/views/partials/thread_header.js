var jade = require("jadum/runtime");
module.exports = function threadHeader(locals) {
var jade_debug = [{ lineno: 1, filename: "views/partials/thread_header.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (thread, userId) {
jade_debug.unshift({ lineno: 0, filename: "views/partials/thread_header.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/partials/thread_header.jade" });
buf.push("<header>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "views/partials/thread_header.jade" });
buf.push("<nav role=\"navigation\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "views/partials/thread_header.jade" });
buf.push("<ul class=\"sd-c-nav\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: "views/partials/thread_header.jade" });
buf.push("<li class=\"sd-c-nav-item\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: "views/partials/thread_header.jade" });
buf.push("<a href=\"/recent\" aria-label=\"Go back\" class=\"sd-t-wire\">");
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
jade_debug.unshift({ lineno: 6, filename: "views/partials/thread_header.jade" });
buf.push("<li class=\"sd-c-nav-right\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: "views/partials/thread_header.jade" });
if ( userId && thread)
{
jade_debug.unshift({ lineno: 8, filename: "views/partials/thread_header.jade" });
jade_debug.unshift({ lineno: 8, filename: "views/partials/thread_header.jade" });
if ( thread.userId)
{
jade_debug.unshift({ lineno: 9, filename: "views/partials/thread_header.jade" });
jade_debug.unshift({ lineno: 9, filename: "views/partials/thread_header.jade" });
buf.push("<a" + (jade.attr("href", '/api/track/remove/' + thread.id, true, false)) + " aria-label=\"Remove thread from list of tracked threads\" class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: jade_debug[0].filename });
buf.push("Untrack");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift({ lineno: 11, filename: "views/partials/thread_header.jade" });
jade_debug.unshift({ lineno: 11, filename: "views/partials/thread_header.jade" });
buf.push("<a" + (jade.attr("href", '/api/track/' + thread.id, true, false)) + " aria-label=\"Keep track of this thread\" class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 11, filename: jade_debug[0].filename });
buf.push("Track");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
}
else if ( thread)
{
jade_debug.unshift({ lineno: 13, filename: "views/partials/thread_header.jade" });
jade_debug.unshift({ lineno: 14, filename: "views/partials/thread_header.jade" });
jade_debug.shift();
jade_debug.unshift({ lineno: 14, filename: "views/partials/thread_header.jade" });
buf.push("<a" + (jade.attr("href", '/?referred_from=track' + thread.id, true, false)) + " aria-label=\"Keep track of this thread\" class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 14, filename: jade_debug[0].filename });
buf.push("Track");
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
jade_debug.shift();}.call(this,"thread" in locals_for_with?locals_for_with.thread:typeof thread!=="undefined"?thread:undefined,"userId" in locals_for_with?locals_for_with.userId:typeof userId!=="undefined"?userId:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "header\n  nav(role='navigation')\n    ul.sd-c-nav\n      li.sd-c-nav-item\n        a.sd-t-wire(href='/recent', aria-label='Go back') Back\n      li.sd-c-nav-right\n        if userId && thread\n          if thread.userId\n            a.sd-t-wire(href='/api/track/remove/' + thread.id, aria-label='Remove thread from list of tracked threads') Untrack\n          else\n            a.sd-t-wire(href='/api/track/' + thread.id, aria-label='Keep track of this thread') Track\n        else if thread\n          //- If the user is not logged in, assume they are a new user, and promote our service\n          a.sd-t-wire(href='/?referred_from=track' + thread.id, aria-label='Keep track of this thread') Track");
}
}