var jade = require("jadum/runtime");
module.exports = function tracked(locals) {
var jade_debug = [{ lineno: 1, filename: "views/app/tracked.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (require, threads, undefined, userId) {
jade_debug.unshift({ lineno: 0, filename: "views/app/tracked.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/app/tracked.jade" });
buf.push(require("../partials/app_header").call(this, locals));
jade_debug.shift();
jade_debug.unshift({ lineno: 2, filename: "views/app/tracked.jade" });
buf.push("<main class=\"sd-o-main\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: undefined, filename: "views/app/tracked.jade" });
buf.push(require("../partials/flash").call(this, locals));
jade_debug.shift();
jade_debug.unshift({ lineno: 4, filename: "views/app/tracked.jade" });
if ( threads)
{
jade_debug.unshift({ lineno: 5, filename: "views/app/tracked.jade" });
jade_debug.unshift({ lineno: 5, filename: "views/app/tracked.jade" });
if ( threads.length === 0)
{
jade_debug.unshift({ lineno: 6, filename: "views/app/tracked.jade" });
jade_debug.unshift({ lineno: 6, filename: "views/app/tracked.jade" });
buf.push("<p class=\"sd-t-wire sd-u-content-padding--sides\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 6, filename: jade_debug[0].filename });
buf.push("Track threads, and keep track of their updates here!");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift({ lineno: 7, filename: "views/app/tracked.jade" });
buf.push("<ul class=\"sd-c-list\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 8, filename: "views/app/tracked.jade" });
// iterate threads
;(function(){
  var $$local = locals["thread"];
  var $$obj = threads;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var thread = locals["thread"] = $$obj[$index];

jade_debug.unshift({ lineno: 8, filename: "views/app/tracked.jade" });
jade_debug.unshift({ lineno: 9, filename: "views/app/tracked.jade" });
buf.push("<li class=\"sd-c-list__item\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 10, filename: "views/app/tracked.jade" });
buf.push("<a" + (jade.attr("href", '/thread/' + thread.id, true, false)) + " class=\"sd-c-list__item__link sd-t-wire sd-t-wire-hover\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 12, filename: "views/app/tracked.jade" });
jade_debug.shift();
jade_debug.unshift({ lineno: 12, filename: "views/app/tracked.jade" });
buf.push("<span class=\"sd-c-list__item__date\">" + (jade.escape(null == (jade_interp = thread.updated_at) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 13, filename: "views/app/tracked.jade" });
buf.push("<p class=\"sd-c-list__item__description\">" + (jade.escape(null == (jade_interp = thread.description) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var thread = locals["thread"] = $$obj[$index];

jade_debug.unshift({ lineno: 8, filename: "views/app/tracked.jade" });
jade_debug.unshift({ lineno: 9, filename: "views/app/tracked.jade" });
buf.push("<li class=\"sd-c-list__item\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 10, filename: "views/app/tracked.jade" });
buf.push("<a" + (jade.attr("href", '/thread/' + thread.id, true, false)) + " class=\"sd-c-list__item__link sd-t-wire sd-t-wire-hover\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 12, filename: "views/app/tracked.jade" });
jade_debug.shift();
jade_debug.unshift({ lineno: 12, filename: "views/app/tracked.jade" });
buf.push("<span class=\"sd-c-list__item__date\">" + (jade.escape(null == (jade_interp = thread.updated_at) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 13, filename: "views/app/tracked.jade" });
buf.push("<p class=\"sd-c-list__item__description\">" + (jade.escape(null == (jade_interp = thread.description) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
    }

  locals["thread"] = $$local;
  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
buf.push("</ul>");
jade_debug.shift();
jade_debug.shift();
}
else if ( !userId)
{
jade_debug.unshift({ lineno: 15, filename: "views/app/tracked.jade" });
jade_debug.unshift({ lineno: 15, filename: "views/app/tracked.jade" });
buf.push("<p class=\"sd-t-wire sd-u-content-padding--sides\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 16, filename: "views/app/tracked.jade" });
buf.push("<a href=\"/register\" class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 16, filename: jade_debug[0].filename });
buf.push("Register");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift({ lineno: 17, filename: "views/app/tracked.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 17, filename: jade_debug[0].filename });
buf.push(" or ");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 18, filename: "views/app/tracked.jade" });
buf.push("<a href=\"/\" class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 18, filename: jade_debug[0].filename });
buf.push("login");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift({ lineno: 19, filename: "views/app/tracked.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 19, filename: jade_debug[0].filename });
buf.push(" to keep track of updates for all of your favorite threads!");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("</main>");
jade_debug.shift();
jade_debug.shift();}.call(this,"require" in locals_for_with?locals_for_with.require:typeof require!=="undefined"?require:undefined,"threads" in locals_for_with?locals_for_with.threads:typeof threads!=="undefined"?threads:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"userId" in locals_for_with?locals_for_with.userId:typeof userId!=="undefined"?userId:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "include ../partials/app_header\nmain.sd-o-main\n  include ../partials/flash\n  if threads\n    if threads.length === 0\n      p.sd-t-wire.sd-u-content-padding--sides Track threads, and keep track of their updates here!\n    ul.sd-c-list\n      each thread in threads\n        li.sd-c-list__item\n          a(href='/thread/' + thread.id).sd-c-list__item__link.sd-t-wire.sd-t-wire-hover\n            //-strong.sd-c-list__item__title=thread.name\n            span.sd-c-list__item__date=thread.updated_at\n            p.sd-c-list__item__description=thread.description\n  else if !userId\n    p.sd-t-wire.sd-u-content-padding--sides\n      a(href='/register').sd-t-wire Register\n      span  or \n      a(href='/').sd-t-wire login\n      span  to keep track of updates for all of your favorite threads!");
}
}