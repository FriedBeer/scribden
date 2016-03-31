var jade = require("jadum/runtime");
module.exports = function flash(locals) {
var jade_debug = [{ lineno: 1, filename: "views/partials/flash.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (Object, flash, keys, undefined) {
jade_debug.unshift({ lineno: 0, filename: "views/partials/flash.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/partials/flash.jade" });
if ( flash)
{
jade_debug.unshift({ lineno: 2, filename: "views/partials/flash.jade" });
jade_debug.unshift({ lineno: 2, filename: "views/partials/flash.jade" });
keys = Object.keys(flash)
jade_debug.shift();
jade_debug.unshift({ lineno: 4, filename: "views/partials/flash.jade" });
// iterate keys
;(function(){
  var $$local = locals["key"];
  var $$obj = keys;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var key = locals["key"] = $$obj[$index];

jade_debug.unshift({ lineno: 4, filename: "views/partials/flash.jade" });
jade_debug.unshift({ lineno: 5, filename: "views/partials/flash.jade" });
// iterate flash[key]
;(function(){
  var $$local = locals["message"];
  var $$obj = flash[key];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var message = locals["message"] = $$obj[$index];

jade_debug.unshift({ lineno: 5, filename: "views/partials/flash.jade" });
jade_debug.unshift({ lineno: 6, filename: "views/partials/flash.jade" });
buf.push("<div class=\"sd-c-error-header\">" + (jade.escape(null == (jade_interp = message) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var message = locals["message"] = $$obj[$index];

jade_debug.unshift({ lineno: 5, filename: "views/partials/flash.jade" });
jade_debug.unshift({ lineno: 6, filename: "views/partials/flash.jade" });
buf.push("<div class=\"sd-c-error-header\">" + (jade.escape(null == (jade_interp = message) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
    }

  locals["message"] = $$local;
  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var key = locals["key"] = $$obj[$index];

jade_debug.unshift({ lineno: 4, filename: "views/partials/flash.jade" });
jade_debug.unshift({ lineno: 5, filename: "views/partials/flash.jade" });
// iterate flash[key]
;(function(){
  var $$local = locals["message"];
  var $$obj = flash[key];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var message = locals["message"] = $$obj[$index];

jade_debug.unshift({ lineno: 5, filename: "views/partials/flash.jade" });
jade_debug.unshift({ lineno: 6, filename: "views/partials/flash.jade" });
buf.push("<div class=\"sd-c-error-header\">" + (jade.escape(null == (jade_interp = message) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var message = locals["message"] = $$obj[$index];

jade_debug.unshift({ lineno: 5, filename: "views/partials/flash.jade" });
jade_debug.unshift({ lineno: 6, filename: "views/partials/flash.jade" });
buf.push("<div class=\"sd-c-error-header\">" + (jade.escape(null == (jade_interp = message) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
    }

  locals["message"] = $$local;
  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
    }

  locals["key"] = $$local;
  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();}.call(this,"Object" in locals_for_with?locals_for_with.Object:typeof Object!=="undefined"?Object:undefined,"flash" in locals_for_with?locals_for_with.flash:typeof flash!=="undefined"?flash:undefined,"keys" in locals_for_with?locals_for_with.keys:typeof keys!=="undefined"?keys:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "if flash\n  - keys = Object.keys(flash)\n\n  each key in keys\n    each message in flash[key]\n      div(class='sd-c-error-header')=message");
}
}