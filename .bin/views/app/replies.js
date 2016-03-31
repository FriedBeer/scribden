var jade = require("jadum/runtime");
module.exports = function replies(locals) {
var jade_debug = [{ lineno: 1, filename: "views/app/replies.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (require, thread, undefined) {
jade_debug.unshift({ lineno: 0, filename: "views/app/replies.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/app/replies.jade" });
buf.push("<!-- DEPRECATED-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 2, filename: "views/app/replies.jade" });
buf.push(require("../partials/reply_header").call(this, locals));
jade_debug.shift();
jade_debug.unshift({ lineno: 3, filename: "views/app/replies.jade" });
buf.push("<main class=\"sd-o-main\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: undefined, filename: "views/app/replies.jade" });
buf.push(require("../partials/flash").call(this, locals));
jade_debug.shift();
jade_debug.unshift({ lineno: 5, filename: "views/app/replies.jade" });
buf.push("<ul class=\"sd-c-list\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 6, filename: "views/app/replies.jade" });
// iterate thread.posts
;(function(){
  var $$local = locals["post"];
  var $$obj = thread.posts;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var post = locals["post"] = $$obj[$index];

jade_debug.unshift({ lineno: 6, filename: "views/app/replies.jade" });
jade_debug.unshift({ lineno: 7, filename: "views/app/replies.jade" });
buf.push("<li class=\"sd-c-list__item\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 8, filename: "views/app/replies.jade" });
buf.push("<span class=\"sd-c-list__item__user\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: "views/app/replies.jade" });
buf.push("<span class=\"sd-c-list__item__profile sd-t-wire--field\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 10, filename: "views/app/replies.jade" });
buf.push("<strong class=\"sd-c-list__item__username sd-t-wire\">" + (jade.escape(null == (jade_interp = post.username) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 11, filename: "views/app/replies.jade" });
buf.push("<span class=\"sd-c-list__item__date sd-t-wire\">" + (jade.escape(null == (jade_interp = post.updated_at) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 12, filename: "views/app/replies.jade" });
buf.push("<div class=\"sd-o-frame-content\">" + (null == (jade_interp = post.content) ? "" : jade_interp));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 13, filename: "views/app/replies.jade" });
buf.push("<div class=\"sd-c-list__item__actions\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 14, filename: "views/app/replies.jade" });
buf.push("<a" + (jade.attr("href", '/reply_thread/' + thread.id + '/' + post.replyId, true, false)) + " class=\"sd-c-reply sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 14, filename: jade_debug[0].filename });
buf.push("reply");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift({ lineno: 15, filename: "views/app/replies.jade" });
buf.push("<a" + (jade.attr("href", '/report/' + thread.id + '/' + post.id, true, false)) + " class=\"sd-c-report sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 15, filename: jade_debug[0].filename });
buf.push("report");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var post = locals["post"] = $$obj[$index];

jade_debug.unshift({ lineno: 6, filename: "views/app/replies.jade" });
jade_debug.unshift({ lineno: 7, filename: "views/app/replies.jade" });
buf.push("<li class=\"sd-c-list__item\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 8, filename: "views/app/replies.jade" });
buf.push("<span class=\"sd-c-list__item__user\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: "views/app/replies.jade" });
buf.push("<span class=\"sd-c-list__item__profile sd-t-wire--field\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 10, filename: "views/app/replies.jade" });
buf.push("<strong class=\"sd-c-list__item__username sd-t-wire\">" + (jade.escape(null == (jade_interp = post.username) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 11, filename: "views/app/replies.jade" });
buf.push("<span class=\"sd-c-list__item__date sd-t-wire\">" + (jade.escape(null == (jade_interp = post.updated_at) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 12, filename: "views/app/replies.jade" });
buf.push("<div class=\"sd-o-frame-content\">" + (null == (jade_interp = post.content) ? "" : jade_interp));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 13, filename: "views/app/replies.jade" });
buf.push("<div class=\"sd-c-list__item__actions\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 14, filename: "views/app/replies.jade" });
buf.push("<a" + (jade.attr("href", '/reply_thread/' + thread.id + '/' + post.replyId, true, false)) + " class=\"sd-c-reply sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 14, filename: jade_debug[0].filename });
buf.push("reply");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift({ lineno: 15, filename: "views/app/replies.jade" });
buf.push("<a" + (jade.attr("href", '/report/' + thread.id + '/' + post.id, true, false)) + " class=\"sd-c-report sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 15, filename: jade_debug[0].filename });
buf.push("report");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
    }

  locals["post"] = $$local;
  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
buf.push("</ul>");
jade_debug.shift();
jade_debug.shift();
buf.push("</main>");
jade_debug.shift();
jade_debug.shift();}.call(this,"require" in locals_for_with?locals_for_with.require:typeof require!=="undefined"?require:undefined,"thread" in locals_for_with?locals_for_with.thread:typeof thread!=="undefined"?thread:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "// DEPRECATED\ninclude ../partials/reply_header\nmain.sd-o-main\n  include ../partials/flash\n  ul.sd-c-list\n    each post in thread.posts\n      li.sd-c-list__item\n        span.sd-c-list__item__user\n          span.sd-c-list__item__profile.sd-t-wire--field\n          strong.sd-c-list__item__username.sd-t-wire=post.username\n        span.sd-c-list__item__date.sd-t-wire=post.updated_at\n        div.sd-o-frame-content!=post.content\n        div.sd-c-list__item__actions\n          a.sd-c-reply.sd-t-wire(href='/reply_thread/' + thread.id + '/' + post.replyId) reply\n          a.sd-c-report.sd-t-wire(href='/report/' + thread.id + '/' + post.id) report");
}
}