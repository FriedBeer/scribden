var jade = require("jadum/runtime");
module.exports = function report(locals) {
var jade_debug = [{ lineno: 1, filename: "views/app/report.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (require, undefined) {
jade_debug.unshift({ lineno: 0, filename: "views/app/report.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/app/report.jade" });
buf.push(require("./compose").call(this, locals));
jade_debug.shift();
jade_debug.shift();}.call(this,"require" in locals_for_with?locals_for_with.require:typeof require!=="undefined"?require:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "include compose");
}
}