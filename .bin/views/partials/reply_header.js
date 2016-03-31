var jade = require("jadum/runtime");
module.exports = function replyHeader(locals) {
var jade_debug = [{ lineno: 1, filename: "views/partials/reply_header.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (replyId, thread) {
jade_debug.unshift({ lineno: 0, filename: "views/partials/reply_header.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/partials/reply_header.jade" });
buf.push("<!-- DEPRECATED-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 2, filename: "views/partials/reply_header.jade" });
buf.push("<header>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "views/partials/reply_header.jade" });
buf.push("<nav role=\"navigation\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: "views/partials/reply_header.jade" });
buf.push("<ul class=\"sd-c-nav\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: "views/partials/reply_header.jade" });
buf.push("<li class=\"sd-c-nav-item\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 6, filename: "views/partials/reply_header.jade" });
buf.push("<a" + (jade.attr("href", '/thread/' + thread.id, true, false)) + " aria-label=\"Go back\" class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 6, filename: jade_debug[0].filename });
buf.push("Back");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 7, filename: "views/partials/reply_header.jade" });
buf.push("<li class=\"sd-c-nav-compose\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 8, filename: "views/partials/reply_header.jade" });
buf.push("<a" + (jade.attr("href", '/reply_thread/' + thread.id + '/' + replyId, true, false)) + " aria-label=\"Make a reply\" class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 8, filename: jade_debug[0].filename });
buf.push("Reply");
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
jade_debug.shift();}.call(this,"replyId" in locals_for_with?locals_for_with.replyId:typeof replyId!=="undefined"?replyId:undefined,"thread" in locals_for_with?locals_for_with.thread:typeof thread!=="undefined"?thread:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "// DEPRECATED\nheader\n  nav(role='navigation')\n    ul.sd-c-nav\n      li.sd-c-nav-item\n        a.sd-t-wire(href='/thread/' + thread.id, aria-label='Go back') Back\n      li.sd-c-nav-compose\n        a.sd-t-wire(href='/reply_thread/' + thread.id + '/' + replyId, aria-label='Make a reply') Reply\n");
}
}