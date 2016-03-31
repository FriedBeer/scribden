var jade = require("jadum/runtime");
module.exports = function thread(locals) {
var jade_debug = [{ lineno: 1, filename: "views/app/thread.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (nextPage, pageCount, require, thread, undefined, userId) {
jade_debug.unshift({ lineno: 0, filename: "views/app/thread.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/app/thread.jade" });
buf.push(require("../partials/thread_header").call(this, locals));
jade_debug.shift();
jade_debug.unshift({ lineno: 2, filename: "views/app/thread.jade" });
buf.push("<main class=\"sd-o-main\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: undefined, filename: "views/app/thread.jade" });
buf.push(require("../partials/flash").call(this, locals));
jade_debug.shift();
jade_debug.unshift({ lineno: 5, filename: "views/app/thread.jade" });
jade_debug.shift();
jade_debug.unshift({ lineno: 5, filename: "views/app/thread.jade" });
if ( thread)
{
jade_debug.unshift({ lineno: 6, filename: "views/app/thread.jade" });
jade_debug.unshift({ lineno: 6, filename: "views/app/thread.jade" });
buf.push("<div class=\"sd-o-thread__header\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: "views/app/thread.jade" });
buf.push("<p class=\"sd-c-thread__description\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 8, filename: "views/app/thread.jade" });
buf.push("<strong>" + (jade.escape(null == (jade_interp = thread.description) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 9, filename: "views/app/thread.jade" });
buf.push("<a href=\"/ruleset\" class=\"sd-c-thread__ruleset sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 10, filename: "views/app/thread.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 10, filename: jade_debug[0].filename });
buf.push("Rules: " + (jade.escape((jade_interp = thread.ruleset) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 11, filename: "views/app/thread.jade" });
buf.push("<div class=\"sd-u-align--center\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 12, filename: "views/app/thread.jade" });
if ( userId)
{
jade_debug.unshift({ lineno: 13, filename: "views/app/thread.jade" });
jade_debug.unshift({ lineno: 13, filename: "views/app/thread.jade" });
buf.push("<a" + (jade.attr("href", '/compose/' + thread.id, true, false)) + " aria-label=\"Make a new post\" class=\"sd-t-wire sd-t-wire-hover sd-c-btn--header\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 14, filename: "views/app/thread.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 14, filename: jade_debug[0].filename });
buf.push("Compose");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift({ lineno: 16, filename: "views/app/thread.jade" });
jade_debug.unshift({ lineno: 16, filename: "views/app/thread.jade" });
buf.push("<a" + (jade.attr("href", '/?referred_from=compose' + thread.id, true, false)) + " aria-label=\"Make a new post\" class=\"sd-t-wire sd-t-wire-hover sd-c-btn--header\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 17, filename: "views/app/thread.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 17, filename: jade_debug[0].filename });
buf.push("Compose");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 18, filename: "views/app/thread.jade" });
if ( pageCount > 1)
{
jade_debug.unshift({ lineno: 19, filename: "views/app/thread.jade" });
jade_debug.unshift({ lineno: 19, filename: "views/app/thread.jade" });
buf.push("<div class=\"sd-c-thread__pagination\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 20, filename: "views/app/thread.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 20, filename: jade_debug[0].filename });
buf.push("[");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 21, filename: "views/app/thread.jade" });
if ( pageCount <= 7)
{
jade_debug.unshift({ lineno: 22, filename: "views/app/thread.jade" });
jade_debug.unshift({ lineno: 23, filename: "views/app/thread.jade" });
buf.push("<!-- show all page links-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 23, filename: "views/app/thread.jade" });
for (var i = 1; i <= pageCount; i++) {
{
jade_debug.unshift({ lineno: 24, filename: "views/app/thread.jade" });
jade_debug.unshift({ lineno: 24, filename: "views/app/thread.jade" });
if ( i === nextPage)
{
jade_debug.unshift({ lineno: 25, filename: "views/app/thread.jade" });
jade_debug.unshift({ lineno: 25, filename: "views/app/thread.jade" });
buf.push("<a" + (jade.attr("href", '/thread/' + thread.id + '/' + (i - 1), true, false)) + " class=\"is-active\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 25, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade_interp = i) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift({ lineno: 27, filename: "views/app/thread.jade" });
jade_debug.unshift({ lineno: 27, filename: "views/app/thread.jade" });
buf.push("<a" + (jade.attr("href", '/thread/' + thread.id + '/' + (i - 1), true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 27, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade_interp = i) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift({ lineno: 28, filename: "views/app/thread.jade" });
}
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift({ lineno: 30, filename: "views/app/thread.jade" });
jade_debug.unshift({ lineno: 31, filename: "views/app/thread.jade" });
buf.push("<!-- first/last paginate-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 31, filename: "views/app/thread.jade" });
if ( nextPage > 1)
{
jade_debug.unshift({ lineno: 32, filename: "views/app/thread.jade" });
jade_debug.unshift({ lineno: 33, filename: "views/app/thread.jade" });
buf.push("<!-- show in between-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 33, filename: "views/app/thread.jade" });
buf.push("<a" + (jade.attr("href", '/thread/' + thread.id + '/' + (nextPage - 2), true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 33, filename: jade_debug[0].filename });
buf.push("<");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift({ lineno: 34, filename: "views/app/thread.jade" });
for (var i = nextPage; i <= pageCount && i < nextPage + 3; i++) {
{
jade_debug.unshift({ lineno: 35, filename: "views/app/thread.jade" });
jade_debug.unshift({ lineno: 35, filename: "views/app/thread.jade" });
if ( i === nextPage)
{
jade_debug.unshift({ lineno: 36, filename: "views/app/thread.jade" });
jade_debug.unshift({ lineno: 36, filename: "views/app/thread.jade" });
buf.push("<a" + (jade.attr("href", '/thread/' + thread.id + '/' + (i - 1), true, false)) + " class=\"is-active\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 36, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade_interp = i) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift({ lineno: 38, filename: "views/app/thread.jade" });
jade_debug.unshift({ lineno: 38, filename: "views/app/thread.jade" });
buf.push("<a" + (jade.attr("href", '/thread/' + thread.id + '/' + (i - 1), true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 38, filename: jade_debug[0].filename });
buf.push("" + (jade.escape((jade_interp = i) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift({ lineno: 39, filename: "views/app/thread.jade" });
}
jade_debug.shift();
jade_debug.unshift({ lineno: 40, filename: "views/app/thread.jade" });
if ( nextPage !== pageCount)
{
jade_debug.unshift({ lineno: 41, filename: "views/app/thread.jade" });
jade_debug.unshift({ lineno: 42, filename: "views/app/thread.jade" });
buf.push("<!-- reaching final pages-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 42, filename: "views/app/thread.jade" });
buf.push("<a" + (jade.attr("href", '/thread/' + thread.id + '/' + nextPage, true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 42, filename: jade_debug[0].filename });
buf.push(">");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift({ lineno: 43, filename: "views/app/thread.jade" });
buf.push("<a" + (jade.attr("href", '/thread/' + thread.id + '/' + (pageCount - 1), true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 43, filename: jade_debug[0].filename });
buf.push("Last");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift({ lineno: 44, filename: "views/app/thread.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 44, filename: jade_debug[0].filename });
buf.push("]");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift({ lineno: 45, filename: "views/app/thread.jade" });
buf.push("<ul class=\"sd-c-list\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 46, filename: "views/app/thread.jade" });
if ( thread.posts)
{
jade_debug.unshift({ lineno: 47, filename: "views/app/thread.jade" });
jade_debug.unshift({ lineno: 47, filename: "views/app/thread.jade" });
// iterate thread.posts
;(function(){
  var $$local = locals["post"];
  var $$obj = thread.posts;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var post = locals["post"] = $$obj[$index];

jade_debug.unshift({ lineno: 47, filename: "views/app/thread.jade" });
jade_debug.unshift({ lineno: 48, filename: "views/app/thread.jade" });
buf.push("<li class=\"sd-c-list__item sd-c-list__item--post\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 49, filename: "views/app/thread.jade" });
buf.push("<span class=\"sd-c-list__item__user\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 50, filename: "views/app/thread.jade" });
buf.push("<span class=\"sd-c-list__item__profile sd-t-wire--field\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 51, filename: "views/app/thread.jade" });
buf.push("<strong class=\"sd-c-list__item__username sd-t-wire\">" + (jade.escape(null == (jade_interp = post.username) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 52, filename: "views/app/thread.jade" });
buf.push("<span class=\"sd-c-list__item__date sd-t-wire\">" + (jade.escape(null == (jade_interp = post.updated_at) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 53, filename: "views/app/thread.jade" });
buf.push("<!--if post.replyId");
jade_debug.unshift({ lineno: 53, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 53, filename: jade_debug[0].filename });
buf.push("p.sd-c-list__item__reply-link.sd-t-wire");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 53, filename: jade_debug[0].filename });
buf.push("  a(href='/replies/' + thread.id + '/' + post.replyId) See all replies [" + (jade.escape((jade_interp = post.replyId) == null ? '' : jade_interp)) + "]");
jade_debug.shift();
jade_debug.shift();
buf.push("-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 54, filename: "views/app/thread.jade" });
buf.push("<span class=\"sd-o-frame-content sd-c-post\">" + (null == (jade_interp = post.content) ? "" : jade_interp));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 55, filename: "views/app/thread.jade" });
buf.push("<span class=\"sd-c-list__item__actions\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 56, filename: "views/app/thread.jade" });
if ( userId)
{
jade_debug.unshift({ lineno: 57, filename: "views/app/thread.jade" });
jade_debug.unshift({ lineno: 58, filename: "views/app/thread.jade" });
buf.push("<!--a.sd-c-reply.sd-t-wire(href='/reply/' + thread.id + '/' + (post.replyId || post.id)) reply-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 58, filename: "views/app/thread.jade" });
buf.push("<a" + (jade.attr("href", '/report/' + thread.id + '/' + post.id, true, false)) + " class=\"sd-c-report sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 58, filename: jade_debug[0].filename });
buf.push("report");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift({ lineno: 60, filename: "views/app/thread.jade" });
jade_debug.unshift({ lineno: 61, filename: "views/app/thread.jade" });
buf.push("<!--a.sd-c-reply.sd-t-wire(href='/?referred_from=reply' + thread.id) reply-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 61, filename: "views/app/thread.jade" });
buf.push("<a" + (jade.attr("href", '/?referred_from=report' + thread.id, true, false)) + " class=\"sd-c-report sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 61, filename: jade_debug[0].filename });
buf.push("report");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
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

jade_debug.unshift({ lineno: 47, filename: "views/app/thread.jade" });
jade_debug.unshift({ lineno: 48, filename: "views/app/thread.jade" });
buf.push("<li class=\"sd-c-list__item sd-c-list__item--post\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 49, filename: "views/app/thread.jade" });
buf.push("<span class=\"sd-c-list__item__user\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 50, filename: "views/app/thread.jade" });
buf.push("<span class=\"sd-c-list__item__profile sd-t-wire--field\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 51, filename: "views/app/thread.jade" });
buf.push("<strong class=\"sd-c-list__item__username sd-t-wire\">" + (jade.escape(null == (jade_interp = post.username) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 52, filename: "views/app/thread.jade" });
buf.push("<span class=\"sd-c-list__item__date sd-t-wire\">" + (jade.escape(null == (jade_interp = post.updated_at) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 53, filename: "views/app/thread.jade" });
buf.push("<!--if post.replyId");
jade_debug.unshift({ lineno: 53, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 53, filename: jade_debug[0].filename });
buf.push("p.sd-c-list__item__reply-link.sd-t-wire");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 53, filename: jade_debug[0].filename });
buf.push("  a(href='/replies/' + thread.id + '/' + post.replyId) See all replies [" + (jade.escape((jade_interp = post.replyId) == null ? '' : jade_interp)) + "]");
jade_debug.shift();
jade_debug.shift();
buf.push("-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 54, filename: "views/app/thread.jade" });
buf.push("<span class=\"sd-o-frame-content sd-c-post\">" + (null == (jade_interp = post.content) ? "" : jade_interp));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 55, filename: "views/app/thread.jade" });
buf.push("<span class=\"sd-c-list__item__actions\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 56, filename: "views/app/thread.jade" });
if ( userId)
{
jade_debug.unshift({ lineno: 57, filename: "views/app/thread.jade" });
jade_debug.unshift({ lineno: 58, filename: "views/app/thread.jade" });
buf.push("<!--a.sd-c-reply.sd-t-wire(href='/reply/' + thread.id + '/' + (post.replyId || post.id)) reply-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 58, filename: "views/app/thread.jade" });
buf.push("<a" + (jade.attr("href", '/report/' + thread.id + '/' + post.id, true, false)) + " class=\"sd-c-report sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 58, filename: jade_debug[0].filename });
buf.push("report");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift({ lineno: 60, filename: "views/app/thread.jade" });
jade_debug.unshift({ lineno: 61, filename: "views/app/thread.jade" });
buf.push("<!--a.sd-c-reply.sd-t-wire(href='/?referred_from=reply' + thread.id) reply-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 61, filename: "views/app/thread.jade" });
buf.push("<a" + (jade.attr("href", '/?referred_from=report' + thread.id, true, false)) + " class=\"sd-c-report sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 61, filename: jade_debug[0].filename });
buf.push("report");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
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
jade_debug.unshift({ lineno: 62, filename: "views/app/thread.jade" });
if ( thread.posts.length >= 20)
{
jade_debug.unshift({ lineno: 63, filename: "views/app/thread.jade" });
jade_debug.unshift({ lineno: 63, filename: "views/app/thread.jade" });
buf.push("<li class=\"sd-c-list__item sd-t-wire-hover\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 64, filename: "views/app/thread.jade" });
buf.push("<a" + (jade.attr("href", '/thread/' + thread.id + '/' + nextPage, true, false)) + " class=\"sd-c-list__item__link sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 65, filename: "views/app/thread.jade" });
buf.push("<p class=\"sd-c-list__item__description sd-u-align--center\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 65, filename: jade_debug[0].filename });
buf.push("More...");
jade_debug.shift();
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
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("</ul>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("</main>");
jade_debug.shift();
jade_debug.shift();}.call(this,"nextPage" in locals_for_with?locals_for_with.nextPage:typeof nextPage!=="undefined"?nextPage:undefined,"pageCount" in locals_for_with?locals_for_with.pageCount:typeof pageCount!=="undefined"?pageCount:undefined,"require" in locals_for_with?locals_for_with.require:typeof require!=="undefined"?require:undefined,"thread" in locals_for_with?locals_for_with.thread:typeof thread!=="undefined"?thread:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"userId" in locals_for_with?locals_for_with.userId:typeof userId!=="undefined"?userId:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "include ../partials/thread_header\nmain.sd-o-main\n  include ../partials/flash\n  //-h1.sd-c-thread__title.sd-t-wire=thread.name\n  if thread\n    div.sd-o-thread__header\n      p.sd-c-thread__description\n        strong=thread.description\n      a.sd-c-thread__ruleset.sd-t-wire(href='/ruleset')\n        strong Rules: #{thread.ruleset}\n    div.sd-u-align--center\n      if userId\n        a.sd-t-wire.sd-t-wire-hover.sd-c-btn--header(href='/compose/' + thread.id, aria-label='Make a new post')\n          strong Compose\n      else\n        a.sd-t-wire.sd-t-wire-hover.sd-c-btn--header(href='/?referred_from=compose' + thread.id, aria-label='Make a new post')\n          strong Compose\n    if pageCount > 1\n      div.sd-c-thread__pagination\n        span [\n        if pageCount <= 7\n          // show all page links\n          - for (var i = 1; i <= pageCount; i++) {\n              if i === nextPage\n                a.is-active(href='/thread/' + thread.id + '/' + (i - 1)) #{i}\n              else\n                a(href='/thread/' + thread.id + '/' + (i - 1)) #{i}\n          - }\n        else\n          // first/last paginate\n          if nextPage > 1\n            // show in between\n            a(href='/thread/' + thread.id + '/' + (nextPage - 2)) <\n          - for (var i = nextPage; i <= pageCount && i < nextPage + 3; i++) {\n              if i === nextPage\n                a.is-active(href='/thread/' + thread.id + '/' + (i - 1)) #{i}\n              else\n                a(href='/thread/' + thread.id + '/' + (i - 1)) #{i}\n          - }\n          if nextPage !== pageCount\n            // reaching final pages\n            a(href='/thread/' + thread.id + '/' + nextPage) >\n            a(href='/thread/' + thread.id + '/' + (pageCount - 1)) Last\n        span ]\n    ul.sd-c-list\n      if thread.posts\n        each post in thread.posts\n          li.sd-c-list__item.sd-c-list__item--post\n            span.sd-c-list__item__user\n              span.sd-c-list__item__profile.sd-t-wire--field\n              strong.sd-c-list__item__username.sd-t-wire=post.username\n            span.sd-c-list__item__date.sd-t-wire=post.updated_at\n            //if post.replyId\n              p.sd-c-list__item__reply-link.sd-t-wire\n                a(href='/replies/' + thread.id + '/' + post.replyId) See all replies [#{post.replyId}]\n            span.sd-o-frame-content.sd-c-post!=post.content\n            span.sd-c-list__item__actions\n              if userId\n                //a.sd-c-reply.sd-t-wire(href='/reply/' + thread.id + '/' + (post.replyId || post.id)) reply\n                a.sd-c-report.sd-t-wire(href='/report/' + thread.id + '/' + post.id) report\n              else\n                //a.sd-c-reply.sd-t-wire(href='/?referred_from=reply' + thread.id) reply\n                a.sd-c-report.sd-t-wire(href='/?referred_from=report' + thread.id) report\n         if thread.posts.length >= 20\n          li.sd-c-list__item.sd-t-wire-hover\n            a(href='/thread/' + thread.id + '/' + nextPage).sd-c-list__item__link.sd-t-wire\n              p.sd-c-list__item__description.sd-u-align--center More...");
}
}