var jade = require("jadum/runtime");
module.exports = function reply(locals) {
var jade_debug = [{ lineno: 1, filename: "views/app/reply.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;

jade_debug.unshift({ lineno: 0, filename: "views/app/reply.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/app/reply.jade" });
buf.push("<!--include compose-->");
jade_debug.shift();
jade_debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "//include compose");
}
}