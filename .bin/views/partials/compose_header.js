var jade = require("jadum/runtime");
module.exports = function composeHeader(locals) {
var jade_debug = [{ lineno: 1, filename: "views/partials/compose_header.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (threadId) {
jade_debug.unshift({ lineno: 0, filename: "views/partials/compose_header.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/partials/compose_header.jade" });
buf.push("<header>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "views/partials/compose_header.jade" });
buf.push("<nav role=\"navigation\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "views/partials/compose_header.jade" });
buf.push("<ul class=\"sd-c-nav\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: "views/partials/compose_header.jade" });
buf.push("<li class=\"sd-c-nav-item\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: "views/partials/compose_header.jade" });
buf.push("<a" + (jade.attr("href", '/thread/' + threadId, true, false)) + " aria-label=\"Go back\" class=\"sd-t-wire\">");
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
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "header\n  nav(role='navigation')\n    ul.sd-c-nav\n      li.sd-c-nav-item\n        a.sd-t-wire(href='/thread/' + threadId, aria-label='Go back') Back\n");
}
}