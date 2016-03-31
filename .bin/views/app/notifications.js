var jade = require("jadum/runtime");
module.exports = function notifications(locals) {
var jade_debug = [{ lineno: 1, filename: "views/app/notifications.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (require, undefined) {
jade_debug.unshift({ lineno: 0, filename: "views/app/notifications.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/app/notifications.jade" });
buf.push(require("../partials/app_header").call(this, locals));
jade_debug.shift();
jade_debug.unshift({ lineno: 2, filename: "views/app/notifications.jade" });
buf.push("<main class=\"sd-o-main\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: undefined, filename: "views/app/notifications.jade" });
buf.push(require("../partials/flash").call(this, locals));
jade_debug.shift();
jade_debug.unshift({ lineno: 4, filename: "views/app/notifications.jade" });
buf.push("<p>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: jade_debug[0].filename });
buf.push("Notifications!");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</main>");
jade_debug.shift();
jade_debug.shift();}.call(this,"require" in locals_for_with?locals_for_with.require:typeof require!=="undefined"?require:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "include ../partials/app_header\nmain.sd-o-main\n  include ../partials/flash\n  p Notifications!");
}
}