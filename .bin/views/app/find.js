var jade = require("jadum/runtime");
module.exports = function find(locals) {
var jade_debug = [{ lineno: 1, filename: "views/app/find.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (require, undefined) {
jade_debug.unshift({ lineno: 0, filename: "views/app/find.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/app/find.jade" });
buf.push(require("./recent").call(this, locals));
jade_debug.shift();
jade_debug.shift();}.call(this,"require" in locals_for_with?locals_for_with.require:typeof require!=="undefined"?require:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "include recent");
}
}