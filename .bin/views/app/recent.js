var jade = require("jadum/runtime");
module.exports = function recent(locals) {
var jade_debug = [{ lineno: 1, filename: "views/app/recent.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (nextPage, require, threads, undefined, userId) {
jade_debug.unshift({ lineno: 0, filename: "views/app/recent.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/app/recent.jade" });
buf.push(require("../partials/app_header").call(this, locals));
jade_debug.shift();
jade_debug.unshift({ lineno: 2, filename: "views/app/recent.jade" });
buf.push("<main class=\"sd-o-main--recent\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: undefined, filename: "views/app/recent.jade" });
buf.push(require("../partials/flash").call(this, locals));
jade_debug.shift();
jade_debug.unshift({ lineno: 4, filename: "views/app/recent.jade" });
buf.push("<form id=\"search_form\" name=\"search_form\" action=\"/recent\" method=\"GET\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: "views/app/recent.jade" });
buf.push("<input type=\"text\" name=\"search\" placeholder=\"Find more threads...\" aria-label=\"Search for a thread by entering your query here and pressing enter.\" required=\"required\" class=\"sd-t-wire sd-c-search-field\"/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 7, filename: "views/app/recent.jade" });
jade_debug.shift();
jade_debug.shift();
buf.push("</form>");
jade_debug.shift();
jade_debug.unshift({ lineno: 7, filename: "views/app/recent.jade" });
buf.push("<div class=\"sd-u-align--center\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 8, filename: "views/app/recent.jade" });
if ( userId)
{
jade_debug.unshift({ lineno: 9, filename: "views/app/recent.jade" });
jade_debug.unshift({ lineno: 9, filename: "views/app/recent.jade" });
buf.push("<a href=\"/thread\" aria-label=\"Make a new thread\" class=\"sd-t-wire sd-t-wire-hover sd-c-btn--header\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 10, filename: "views/app/recent.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 10, filename: jade_debug[0].filename });
buf.push("Create New Thread");
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
jade_debug.unshift({ lineno: 12, filename: "views/app/recent.jade" });
jade_debug.unshift({ lineno: 12, filename: "views/app/recent.jade" });
buf.push("<a href=\"/?referred_from=newthread\" aria-label=\"Make a new thread\" class=\"sd-t-wire sd-t-wire-hover sd-c-btn--header\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 13, filename: "views/app/recent.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 13, filename: jade_debug[0].filename });
buf.push("Create New Thread");
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
jade_debug.unshift({ lineno: 14, filename: "views/app/recent.jade" });
buf.push("<ul class=\"sd-c-list\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 15, filename: "views/app/recent.jade" });
if ( threads)
{
jade_debug.unshift({ lineno: 16, filename: "views/app/recent.jade" });
jade_debug.unshift({ lineno: 16, filename: "views/app/recent.jade" });
// iterate threads
;(function(){
  var $$local = locals["thread"];
  var $$obj = threads;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var thread = locals["thread"] = $$obj[$index];

jade_debug.unshift({ lineno: 16, filename: "views/app/recent.jade" });
jade_debug.unshift({ lineno: 17, filename: "views/app/recent.jade" });
buf.push("<li class=\"sd-c-list__item\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 18, filename: "views/app/recent.jade" });
buf.push("<a" + (jade.attr("href", '/thread/' + thread.id, true, false)) + " class=\"sd-c-list__item__link sd-t-wire sd-t-wire-hover\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 19, filename: "views/app/recent.jade" });
buf.push("<span class=\"sd-c-list__item__date\">" + (jade.escape(null == (jade_interp = thread.updated_at) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 20, filename: "views/app/recent.jade" });
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

jade_debug.unshift({ lineno: 16, filename: "views/app/recent.jade" });
jade_debug.unshift({ lineno: 17, filename: "views/app/recent.jade" });
buf.push("<li class=\"sd-c-list__item\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 18, filename: "views/app/recent.jade" });
buf.push("<a" + (jade.attr("href", '/thread/' + thread.id, true, false)) + " class=\"sd-c-list__item__link sd-t-wire sd-t-wire-hover\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 19, filename: "views/app/recent.jade" });
buf.push("<span class=\"sd-c-list__item__date\">" + (jade.escape(null == (jade_interp = thread.updated_at) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 20, filename: "views/app/recent.jade" });
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
jade_debug.unshift({ lineno: 21, filename: "views/app/recent.jade" });
if ( threads.length >= 20)
{
jade_debug.unshift({ lineno: 22, filename: "views/app/recent.jade" });
jade_debug.unshift({ lineno: 22, filename: "views/app/recent.jade" });
buf.push("<li class=\"sd-c-list__item\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 23, filename: "views/app/recent.jade" });
buf.push("<a" + (jade.attr("href", '/recent/' + nextPage, true, false)) + " class=\"sd-c-list__item__link sd-t-wire sd-t-wire-hover\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 24, filename: "views/app/recent.jade" });
buf.push("<p class=\"sd-c-list__item__description sd-u-align--center\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 24, filename: jade_debug[0].filename });
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
buf.push("</main>");
jade_debug.shift();
jade_debug.shift();}.call(this,"nextPage" in locals_for_with?locals_for_with.nextPage:typeof nextPage!=="undefined"?nextPage:undefined,"require" in locals_for_with?locals_for_with.require:typeof require!=="undefined"?require:undefined,"threads" in locals_for_with?locals_for_with.threads:typeof threads!=="undefined"?threads:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"userId" in locals_for_with?locals_for_with.userId:typeof userId!=="undefined"?userId:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "include ../partials/app_header\nmain.sd-o-main--recent\n  include ../partials/flash\n  form(id='search_form' name='search_form' action='/recent' method='GET')\n    input.sd-t-wire.sd-c-search-field(type='text' name='search' placeholder='Find more threads...' aria-label=\"Search for a thread by entering your query here and pressing enter.\" required)\n    //-button.sd-t-wire.sd-t-wire-hover.sd-t-wire--field.sd-o-submit-btn(type='submit') Find\n  div.sd-u-align--center\n    if userId\n      a.sd-t-wire.sd-t-wire-hover.sd-c-btn--header(href='/thread', aria-label='Make a new thread')\n        strong Create New Thread\n    else\n      a.sd-t-wire.sd-t-wire-hover.sd-c-btn--header(href='/?referred_from=newthread', aria-label='Make a new thread')\n        strong Create New Thread\n  ul.sd-c-list\n    if threads\n      each thread in threads\n        li.sd-c-list__item\n          a(href='/thread/' + thread.id).sd-c-list__item__link.sd-t-wire.sd-t-wire-hover\n            span.sd-c-list__item__date=thread.updated_at\n            p.sd-c-list__item__description=thread.description\n      if threads.length >= 20\n        li.sd-c-list__item\n          a(href='/recent/' + nextPage).sd-c-list__item__link.sd-t-wire.sd-t-wire-hover\n            p.sd-c-list__item__description.sd-u-align--center More...\n      ");
}
}