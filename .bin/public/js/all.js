(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var jade = require("jadum/runtime");
module.exports = function compose(locals) {
var jade_debug = [{ lineno: 1, filename: "views/app/compose.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (apiUrl, id, pageTitle, require, threadId, undefined, user) {
jade_debug.unshift({ lineno: 0, filename: "views/app/compose.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/app/compose.jade" });
buf.push(require("../partials/compose_header").call(this, locals));
jade_debug.shift();
jade_debug.unshift({ lineno: 2, filename: "views/app/compose.jade" });
buf.push("<main class=\"sd-o-main sd-u-padding--sm\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: undefined, filename: "views/app/compose.jade" });
buf.push(require("../partials/flash").call(this, locals));
jade_debug.shift();
jade_debug.unshift({ lineno: 4, filename: "views/app/compose.jade" });
buf.push("<h1 class=\"sd-t-wire\">" + (jade.escape(null == (jade_interp = pageTitle) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</h1>");
jade_debug.shift();
jade_debug.unshift({ lineno: 5, filename: "views/app/compose.jade" });
buf.push("<ul class=\"sd-c-toolbar sd-no-js\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 6, filename: "views/app/compose.jade" });
buf.push("<li class=\"sd-c-toolbar__tool\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: "views/app/compose.jade" });
buf.push("<button id=\"editor_bold\" type=\"button\" class=\"sd-t-btn--no-style\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 8, filename: "views/app/compose.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 8, filename: jade_debug[0].filename });
buf.push("B");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 9, filename: "views/app/compose.jade" });
buf.push("<li class=\"sd-c-toolbar__tool\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 10, filename: "views/app/compose.jade" });
buf.push("<button id=\"editor_italic\" type=\"button\" class=\"sd-t-btn--no-style\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 11, filename: "views/app/compose.jade" });
buf.push("<em>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 11, filename: jade_debug[0].filename });
buf.push("I");
jade_debug.shift();
jade_debug.shift();
buf.push("</em>");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 13, filename: "views/app/compose.jade" });
jade_debug.shift();
jade_debug.unshift({ lineno: 13, filename: "views/app/compose.jade" });
buf.push("<li class=\"sd-c-toolbar__tool\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 14, filename: "views/app/compose.jade" });
buf.push("<button id=\"editor_link\" type=\"button\" class=\"sd-t-btn--no-style\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 14, filename: jade_debug[0].filename });
buf.push("Link");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 16, filename: "views/app/compose.jade" });
jade_debug.shift();
jade_debug.unshift({ lineno: 16, filename: "views/app/compose.jade" });
buf.push("<li class=\"sd-c-toolbar__tool\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 17, filename: "views/app/compose.jade" });
buf.push("<button id=\"editor_image\" type=\"button\" class=\"sd-t-btn--no-style\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 17, filename: jade_debug[0].filename });
buf.push("Image");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
buf.push("</ul>");
jade_debug.shift();
jade_debug.unshift({ lineno: 19, filename: "views/app/compose.jade" });
buf.push("<div id=\"editor_url\" class=\"sd-c-toolbar__url sd-u-hide\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 20, filename: "views/app/compose.jade" });
buf.push("<label for=\"editor_url_field\" class=\"sd-u-display--block\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 20, filename: jade_debug[0].filename });
buf.push("url:");
jade_debug.shift();
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift({ lineno: 21, filename: "views/app/compose.jade" });
buf.push("<input id=\"editor_url_field\" type=\"text\" placeholder=\"http://\" class=\"sd-t-wire sd-t-wire--field sd-u-display--block\"/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 22, filename: "views/app/compose.jade" });
buf.push("<button id=\"editor_url_btn\" type=\"button\" class=\"sd-c-toolbar__url__btn sd-t-wire sd-t-wire-hover sd-t-wire--field\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 22, filename: jade_debug[0].filename });
buf.push("Apply To Text");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 23, filename: "views/app/compose.jade" });
buf.push("<div id=\"editor_image_url\" class=\"sd-c-toolbar__url sd-u-hide\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 24, filename: "views/app/compose.jade" });
buf.push("<label for=\"editor_image_field\" class=\"sd-u-display--block\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 24, filename: jade_debug[0].filename });
buf.push("source:");
jade_debug.shift();
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift({ lineno: 25, filename: "views/app/compose.jade" });
buf.push("<input id=\"editor_image_field\" type=\"text\" placeholder=\"http://\" class=\"sd-u-display--block sd-t-wire sd-t-wire--field\"/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 26, filename: "views/app/compose.jade" });
buf.push("<button id=\"editor_image_btn\" type=\"button\" class=\"sd-c-toolbar__url__btn sd-t-wire sd-t-wire-hover sd-t-wire--field\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 26, filename: jade_debug[0].filename });
buf.push("Add");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 29, filename: "views/app/compose.jade" });
jade_debug.shift();
jade_debug.unshift({ lineno: 29, filename: "views/app/compose.jade" });
buf.push("<form id=\"new_post_form\" name=\"new_post_form\"" + (jade.attr("action", apiUrl, true, false)) + " method=\"POST\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 30, filename: "views/app/compose.jade" });
buf.push("<textarea id=\"editor\" name=\"content\" required=\"required\" class=\"sd-c-editor\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</textarea>");
jade_debug.shift();
jade_debug.unshift({ lineno: 31, filename: "views/app/compose.jade" });
buf.push("<input type=\"hidden\" name=\"id\"" + (jade.attr("value", id, true, false)) + "/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 32, filename: "views/app/compose.jade" });
buf.push("<input type=\"hidden\" name=\"threadId\"" + (jade.attr("value", threadId, true, false)) + "/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 33, filename: "views/app/compose.jade" });
buf.push("<input type=\"hidden\" name=\"userId\"" + (jade.attr("value", user.id, true, false)) + "/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 34, filename: "views/app/compose.jade" });
buf.push("<button type=\"submit\" class=\"sd-t-wire sd-t-wire-hover sd-t-wire--field sd-o-submit-btn\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 34, filename: jade_debug[0].filename });
buf.push("Post");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("</form>");
jade_debug.shift();
jade_debug.shift();
buf.push("</main>");
jade_debug.shift();
jade_debug.shift();}.call(this,"apiUrl" in locals_for_with?locals_for_with.apiUrl:typeof apiUrl!=="undefined"?apiUrl:undefined,"id" in locals_for_with?locals_for_with.id:typeof id!=="undefined"?id:undefined,"pageTitle" in locals_for_with?locals_for_with.pageTitle:typeof pageTitle!=="undefined"?pageTitle:undefined,"require" in locals_for_with?locals_for_with.require:typeof require!=="undefined"?require:undefined,"threadId" in locals_for_with?locals_for_with.threadId:typeof threadId!=="undefined"?threadId:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"user" in locals_for_with?locals_for_with.user:typeof user!=="undefined"?user:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "include ../partials/compose_header\nmain.sd-o-main.sd-u-padding--sm\n  include ../partials/flash\n  h1.sd-t-wire=pageTitle\n  ul.sd-c-toolbar.sd-no-js\n    li.sd-c-toolbar__tool\n      button.sd-t-btn--no-style(id='editor_bold' type='button')\n        strong B\n    li.sd-c-toolbar__tool\n      button.sd-t-btn--no-style(id='editor_italic' type='button')\n        em I\n    //- @TODO: Replace with icon images\n    li.sd-c-toolbar__tool\n      button.sd-t-btn--no-style(id='editor_link' type='button') Link\n    //- @TODO: Only for premium members\n    li.sd-c-toolbar__tool\n      button.sd-t-btn--no-style(id='editor_image' type='button') Image\n\n  div.sd-c-toolbar__url.sd-u-hide(id='editor_url')\n    label.sd-u-display--block(for='editor_url_field') url:\n    input.sd-t-wire.sd-t-wire--field.sd-u-display--block(id='editor_url_field' type='text' placeholder='http://')\n    button.sd-c-toolbar__url__btn.sd-t-wire.sd-t-wire-hover.sd-t-wire--field(id='editor_url_btn' type='button') Apply To Text\n  div.sd-c-toolbar__url.sd-u-hide(id='editor_image_url')\n    label.sd-u-display--block(for='editor_image_field') source:\n    input.sd-u-display--block.sd-t-wire.sd-t-wire--field(id='editor_image_field' type='text' placeholder='http://')\n    button.sd-c-toolbar__url__btn.sd-t-wire.sd-t-wire-hover.sd-t-wire--field(id='editor_image_btn' type='button') Add\n\n  //- Replace with the Squire editor if javascript is enabled\n  form(id='new_post_form' name='new_post_form' action=apiUrl method='POST')\n    textarea.sd-c-editor(id='editor' name='content' required)\n    input(type='hidden' name='id' value=id)\n    input(type='hidden' name='threadId' value=threadId)\n    input(type='hidden' name='userId' value=user.id)\n    button.sd-t-wire.sd-t-wire-hover.sd-t-wire--field.sd-o-submit-btn(type='submit') Post");
}
}
},{"../partials/compose_header":28,"../partials/flash":29,"jadum/runtime":84}],2:[function(require,module,exports){
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
},{"./recent":5,"jadum/runtime":84}],3:[function(require,module,exports){
var jade = require("jadum/runtime");
module.exports = function newThread(locals) {
var jade_debug = [{ lineno: 1, filename: "views/app/new_thread.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (require, undefined, user) {
jade_debug.unshift({ lineno: 0, filename: "views/app/new_thread.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/app/new_thread.jade" });
buf.push(require("../partials/generic_header").call(this, locals));
jade_debug.shift();
jade_debug.unshift({ lineno: 2, filename: "views/app/new_thread.jade" });
buf.push("<main class=\"sd-o-main\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: undefined, filename: "views/app/new_thread.jade" });
buf.push(require("../partials/flash").call(this, locals));
jade_debug.shift();
jade_debug.unshift({ lineno: 4, filename: "views/app/new_thread.jade" });
buf.push("<h1 class=\"sd-c-thread__title sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: jade_debug[0].filename });
buf.push("New Thread");
jade_debug.shift();
jade_debug.shift();
buf.push("</h1>");
jade_debug.shift();
jade_debug.unshift({ lineno: 5, filename: "views/app/new_thread.jade" });
buf.push("<form name=\"loginForm\" action=\"/api/thread\" method=\"post\" class=\"sd-u-align--center sd-o-frame-content\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 6, filename: "views/app/new_thread.jade" });
jade_debug.shift();
jade_debug.unshift({ lineno: 7, filename: "views/app/new_thread.jade" });
buf.push("<div>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 8, filename: "views/app/new_thread.jade" });
buf.push("<label for=\"threadDescription\" class=\"sd-c-form__label--medium\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 8, filename: jade_debug[0].filename });
buf.push("description:");
jade_debug.shift();
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift({ lineno: 9, filename: "views/app/new_thread.jade" });
buf.push("<input id=\"threadDescription\" name=\"description\" type=\"text\" placeholder=\"description\" class=\"sd-t-wire sd-t-wire--field sd-c-form__field--medium\"/>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 10, filename: "views/app/new_thread.jade" });
buf.push("<div>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 11, filename: "views/app/new_thread.jade" });
buf.push("<label for=\"threadRules\" class=\"sd-c-form__label--medium\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 11, filename: jade_debug[0].filename });
buf.push("community ruleset:");
jade_debug.shift();
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 12, filename: "views/app/new_thread.jade" });
buf.push("<fieldset id=\"threadRules\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 13, filename: "views/app/new_thread.jade" });
buf.push("<input type=\"radio\" id=\"standard\" name=\"ruleset\" value=\"standard\" checked=\"checked\" class=\"sd-c-radio-btn\"/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 14, filename: "views/app/new_thread.jade" });
buf.push("<label for=\"standard\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 14, filename: jade_debug[0].filename });
buf.push("standard");
jade_debug.shift();
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift({ lineno: 15, filename: "views/app/new_thread.jade" });
buf.push("<p class=\"sd-u-align--left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 15, filename: jade_debug[0].filename });
buf.push("For most conversations, these rules will suffice. Best used for general casual conversation. The rule of thumb here is just be respectful towards each other.");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 16, filename: "views/app/new_thread.jade" });
buf.push("<input type=\"radio\" id=\"moderate\" name=\"ruleset\" value=\"moderate\"/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 17, filename: "views/app/new_thread.jade" });
buf.push("<label for=\"moderate\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 17, filename: jade_debug[0].filename });
buf.push("moderate");
jade_debug.shift();
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift({ lineno: 18, filename: "views/app/new_thread.jade" });
buf.push("<p class=\"sd-u-align--left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 18, filename: jade_debug[0].filename });
buf.push("This is for general discussion. Make sure you're adding something to the conversation. Stay on topic and be respectful of others' input.");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 20, filename: "views/app/new_thread.jade" });
buf.push("<!--input(type='radio' id='strict' name='ruleset' value='Strict') strict-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 21, filename: "views/app/new_thread.jade" });
buf.push("<!--label(for='strict') These rules are for-->");
jade_debug.shift();
jade_debug.shift();
buf.push("</fieldset>");
jade_debug.shift();
jade_debug.unshift({ lineno: 21, filename: "views/app/new_thread.jade" });
buf.push("<div>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 22, filename: "views/app/new_thread.jade" });
buf.push("<input type=\"hidden\" name=\"createdBy\"" + (jade.attr("value", user.id, true, false)) + "/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 23, filename: "views/app/new_thread.jade" });
buf.push("<button type=\"submit\" class=\"sd-c-btn sd-t-wire sd-t-wire-hover sd-t-wire--field sd-c-btn\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 23, filename: jade_debug[0].filename });
buf.push("Create");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</form>");
jade_debug.shift();
jade_debug.shift();
buf.push("</main>");
jade_debug.shift();
jade_debug.shift();}.call(this,"require" in locals_for_with?locals_for_with.require:typeof require!=="undefined"?require:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"user" in locals_for_with?locals_for_with.user:typeof user!=="undefined"?user:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "include ../partials/generic_header\nmain.sd-o-main\n  include ../partials/flash\n  h1.sd-c-thread__title.sd-t-wire New Thread\n  form.sd-u-align--center.sd-o-frame-content(name='loginForm' action='/api/thread' method='post')\n    //-div\n        label.sd-c-form__label--medium(for='threadName') name:\n        input.sd-t-wire.sd-t-wire--field.sd-c-form__field--medium(id='threadName' name='threadName' type='text' placeholder='name' required)\n    div\n      label.sd-c-form__label--medium(for='threadDescription') description:\n      input.sd-t-wire.sd-t-wire--field.sd-c-form__field--medium(id='threadDescription' name='description' type='text' placeholder='description')\n    div\n      label.sd-c-form__label--medium(for='threadRules') community ruleset:\n    fieldset(id='threadRules')\n      input.sd-c-radio-btn(type='radio' id='standard' name='ruleset' value='standard' checked)\n      label(for='standard') standard\n      p.sd-u-align--left For most conversations, these rules will suffice. Best used for general casual conversation. The rule of thumb here is just be respectful towards each other.\n      input(type='radio' id='moderate' name='ruleset' value='moderate')\n      label(for='moderate') moderate\n      p.sd-u-align--left This is for general discussion. Make sure you're adding something to the conversation. Stay on topic and be respectful of others' input.\n      //input(type='radio' id='strict' name='ruleset' value='Strict') strict\n      //label(for='strict') These rules are for\n    div\n      input(type='hidden' name='createdBy' value=user.id)\n      button.sd-c-btn.sd-t-wire.sd-t-wire-hover.sd-t-wire--field.sd-c-btn(type='submit') Create");
}
}
},{"../partials/flash":29,"../partials/generic_header":30,"jadum/runtime":84}],4:[function(require,module,exports){
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
},{"../partials/app_header":27,"../partials/flash":29,"jadum/runtime":84}],5:[function(require,module,exports){
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
},{"../partials/app_header":27,"../partials/flash":29,"jadum/runtime":84}],6:[function(require,module,exports){
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
},{"../partials/flash":29,"../partials/reply_header":32,"jadum/runtime":84}],7:[function(require,module,exports){
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
},{"jadum/runtime":84}],8:[function(require,module,exports){
var jade = require("jadum/runtime");
module.exports = function replyThread(locals) {
var jade_debug = [{ lineno: 1, filename: "views/app/reply_thread.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;

jade_debug.unshift({ lineno: 0, filename: "views/app/reply_thread.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/app/reply_thread.jade" });
buf.push("<!--include compose-->");
jade_debug.shift();
jade_debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "//include compose");
}
}
},{"jadum/runtime":84}],9:[function(require,module,exports){
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
},{"./compose":1,"jadum/runtime":84}],10:[function(require,module,exports){
var jade = require("jadum/runtime");
module.exports = function ruleset(locals) {
var jade_debug = [{ lineno: 1, filename: "views/app/ruleset.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (require, undefined) {
jade_debug.unshift({ lineno: 0, filename: "views/app/ruleset.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/app/ruleset.jade" });
buf.push(require("../partials/generic_header").call(this, locals));
jade_debug.shift();
jade_debug.unshift({ lineno: 2, filename: "views/app/ruleset.jade" });
buf.push("<main class=\"sd-o-main\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: undefined, filename: "views/app/ruleset.jade" });
buf.push(require("../partials/flash").call(this, locals));
jade_debug.shift();
jade_debug.unshift({ lineno: 4, filename: "views/app/ruleset.jade" });
buf.push("<article class=\"sd-o-frame-content\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: "views/app/ruleset.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: jade_debug[0].filename });
buf.push("Below is a brief explanation of our community rules and expectations for specific topics and situations. If you have any questions about our Community Code of Conduct, please email us at hexelberrystudios@gmail.com.");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 7, filename: "views/app/ruleset.jade" });
buf.push("<section class=\"sd-u-content-padding--top-bottom\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 8, filename: "views/app/ruleset.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: "views/app/ruleset.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: jade_debug[0].filename });
buf.push("For the");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 10, filename: "views/app/ruleset.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 10, filename: jade_debug[0].filename });
buf.push(" Standard");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 11, filename: "views/app/ruleset.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 11, filename: jade_debug[0].filename });
buf.push(" ruleset, Section I applies.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 12, filename: "views/app/ruleset.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 13, filename: "views/app/ruleset.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 13, filename: jade_debug[0].filename });
buf.push("For the");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 14, filename: "views/app/ruleset.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 14, filename: jade_debug[0].filename });
buf.push(" Moderate");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 15, filename: "views/app/ruleset.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 15, filename: jade_debug[0].filename });
buf.push(" ruleset, Sections I and II apply.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 16, filename: "views/app/ruleset.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 17, filename: "views/app/ruleset.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 17, filename: jade_debug[0].filename });
buf.push("For the");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 18, filename: "views/app/ruleset.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 18, filename: jade_debug[0].filename });
buf.push(" Strict");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 19, filename: "views/app/ruleset.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 19, filename: jade_debug[0].filename });
buf.push(" ruleset, Sections I, II, and III apply.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</section>");
jade_debug.shift();
jade_debug.unshift({ lineno: 21, filename: "views/app/ruleset.jade" });
buf.push("<section>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 22, filename: "views/app/ruleset.jade" });
buf.push("<h2 class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 22, filename: jade_debug[0].filename });
buf.push("Section I");
jade_debug.shift();
jade_debug.shift();
buf.push("</h2>");
jade_debug.shift();
jade_debug.unshift({ lineno: 24, filename: "views/app/ruleset.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 25, filename: "views/app/ruleset.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 25, filename: jade_debug[0].filename });
buf.push("Abusive Language and Disruptive Behavior:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 26, filename: "views/app/ruleset.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 26, filename: jade_debug[0].filename });
buf.push(" We do not tolerate abusive or disruptive behavior on ScribDen. This goes for abusive and disruptive comments and behavior that is directed at employees and members alike. Posts that are excessively vulgar, insulting, explicit, or hateful may be removed. Please remember to be respectful and constructive at all times, and help us maintain a friendly and welcoming atmosphere for all.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 28, filename: "views/app/ruleset.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 29, filename: "views/app/ruleset.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 29, filename: jade_debug[0].filename });
buf.push("Conspiracy Theories and Misinformation:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 30, filename: "views/app/ruleset.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 30, filename: jade_debug[0].filename });
buf.push(" We do not tolerate the deliberate and malicious spreading of false information. This does not include honest mistakes; rather, this rule pertains to those who go out of their way to spread harmful or malicious rumors about others, including but not limited to members, companies, or public figures.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 32, filename: "views/app/ruleset.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 33, filename: "views/app/ruleset.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 33, filename: jade_debug[0].filename });
buf.push("No Pirating:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 34, filename: "views/app/ruleset.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 34, filename: jade_debug[0].filename });
buf.push(" Requesting or sharing material you do not own the copyright to or have permission to share (such as music, software, or art) is not permitted.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 36, filename: "views/app/ruleset.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 37, filename: "views/app/ruleset.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 37, filename: jade_debug[0].filename });
buf.push("No Stalking:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 38, filename: "views/app/ruleset.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 38, filename: jade_debug[0].filename });
buf.push(" Persistent harassment of an individual or group of individuals against their wishes is not permitted. If someone asks you to stop, please leave them alone.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 40, filename: "views/app/ruleset.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 41, filename: "views/app/ruleset.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 41, filename: jade_debug[0].filename });
buf.push("Demands and Threats:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 42, filename: "views/app/ruleset.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 42, filename: jade_debug[0].filename });
buf.push(" Concerns and requests may be made without needing to resort to demands and threats. We believe they are not constructive. Threats of real-life violence, in particular, are something we take very seriously and do not tolerate.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 44, filename: "views/app/ruleset.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 45, filename: "views/app/ruleset.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 45, filename: jade_debug[0].filename });
buf.push("Deliberately Disobeying a ScribDen Employee:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 46, filename: "views/app/ruleset.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 46, filename: jade_debug[0].filename });
buf.push(" Deliberately disobeying a request or action by a  ScribDen employee, is not permitted at any time. As an example, if we close a thread you created and leave an explanation stating why it was closed, you may not re-create the thread.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 48, filename: "views/app/ruleset.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 49, filename: "views/app/ruleset.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 49, filename: jade_debug[0].filename });
buf.push("Discussing Disciplinary Actions:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 50, filename: "views/app/ruleset.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 50, filename: jade_debug[0].filename });
buf.push(" If you ever have questions or concerns about a disciplinary action or decision a moderator has made on the forums, or wish to appeal an infraction you’ve received, we ask that you please contact us at hexelberrystudios@gmail.com to do so. Please specify that you are contacting about a forum-related inquiry or appeal. We are happy to discuss and review specific moderation-related actions with you, but we do not allow discussion of any moderation actions or decisions on our forums.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 52, filename: "views/app/ruleset.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 53, filename: "views/app/ruleset.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 53, filename: jade_debug[0].filename });
buf.push("Flaming:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 54, filename: "views/app/ruleset.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 54, filename: jade_debug[0].filename });
buf.push(" It’s okay to disagree and debate, but we do ask that you keep all disagreements civil, constructive, and on-topic. If a discussion gets heated and turns into a debate, remember that you should stick to debating the post and/or thread topic. It is never appropriate to resort to personal comments or jabs about those participating in the thread discussion.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 56, filename: "views/app/ruleset.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 57, filename: "views/app/ruleset.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 57, filename: jade_debug[0].filename });
buf.push("Hate Speech:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 58, filename: "views/app/ruleset.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 58, filename: jade_debug[0].filename });
buf.push(" We take the use of hate speech very seriously, and have a zero tolerance policy. Our definition of hate speech is prejudice or hateful comments, slurs, or statements that promote violence or intolerance toward others because of the following: Race, Color, National Origin, Gender, Age, Disability, Sexual Orientation, Lifestyle, and any other personally identifying factors.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 60, filename: "views/app/ruleset.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 61, filename: "views/app/ruleset.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 61, filename: jade_debug[0].filename });
buf.push("Impersonation:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 62, filename: "views/app/ruleset.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 62, filename: jade_debug[0].filename });
buf.push(" We do not tolerate impersonation of real, living or dead individuals. Impersonation includes using a display name, photos, posts, or any other material with the intent to fool people into believing you are a ScribDen employee, another community member, a celebrity, or anyone else you are not. This does not apply to roleplaying fictional characters, although we prefer that you limit the impersonation of fictional characters to roleplaying threads only.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 64, filename: "views/app/ruleset.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 65, filename: "views/app/ruleset.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 65, filename: jade_debug[0].filename });
buf.push("Malicious Links:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 66, filename: "views/app/ruleset.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 66, filename: jade_debug[0].filename });
buf.push(" We do not tolerate the posting of malicious links on our forums, for any reason. This includes but is not limited to links to key-loggers, browser hijackers, or phishing scams.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 68, filename: "views/app/ruleset.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 69, filename: "views/app/ruleset.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 69, filename: jade_debug[0].filename });
buf.push("Names in Thread Descriptions:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 70, filename: "views/app/ruleset.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 70, filename: jade_debug[0].filename });
buf.push(" Please refrain from placing the names of ScribDen employees or members in your thread descriptions. Directing a thread at a specific individual, or otherwise using a thread to call someone out, is not considered constructive.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 72, filename: "views/app/ruleset.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 73, filename: "views/app/ruleset.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 73, filename: jade_debug[0].filename });
buf.push("Personal Information:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 74, filename: "views/app/ruleset.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 74, filename: jade_debug[0].filename });
buf.push(" For the sake of your own identity protection and personal privacy, we ask that you please do not share any personal information in ScribDen. This also goes for sharing another member’s personal information.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 76, filename: "views/app/ruleset.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 77, filename: "views/app/ruleset.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 77, filename: jade_debug[0].filename });
buf.push("Thread Bumping:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 78, filename: "views/app/ruleset.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 78, filename: jade_debug[0].filename });
buf.push(" Please refrain from replying to threads for the sole purpose of “bumping” them. This is considered to be a form of spam because it does not add to the discussion in a constructive or meaningful way. We understand that everyone would like to keep their discussion active and visible, but we encourage you to strive for meaningful and constructive posts instead of posts that consist of nothing more than “bump.”");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 80, filename: "views/app/ruleset.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 81, filename: "views/app/ruleset.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 81, filename: jade_debug[0].filename });
buf.push("Other Cases:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 82, filename: "views/app/ruleset.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 82, filename: jade_debug[0].filename });
buf.push(" The ScribDen Code of Conduct includes almost all situations we all may encounter while using this service, but there will always be some things that are not covered. Those will be handled at ScribDen team’s discretion, and if something becomes a common issue or concern, we will update the ScribDen Code of Conduct to include it. If we see something that we feel is inappropriate or harmful to the ScribDen community, we do reserve the right to take appropriate actions for the overall health and quality of the ScribDen community. This includes things that are not specifically mentioned in the ScribDen Code of Conduct. If ever in doubt, please remember to be civil, constructive, and respectful at all times while using ScribDen.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 84, filename: "views/app/ruleset.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 84, filename: jade_debug[0].filename });
buf.push("We monitor the site on a regular basis, not only to read your feedback, ideas, and suggestions, and interact with you, but also to ensure that our community is a civil, constructive, and safe place for everyone.");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 86, filename: "views/app/ruleset.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 86, filename: jade_debug[0].filename });
buf.push("The ScribDen Code of Conduct is intended to be your guide for all activity and interactions within the ScribDen community - we ask that you please try your best to abide by it. In the event that you violate the Code of Conduct, or if we simply have questions about something you have posted, we will always try to contact you first.");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 88, filename: "views/app/ruleset.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 88, filename: jade_debug[0].filename });
buf.push("Enforcement and application of the ScribDen Code of Conduct will be at the sole discretion of ScribDen, and authorized members of the ScribDen team. Material that is deemed offensive, illegal, or inappropriate in any way will be removed at the sole discretion of ScribDen. Please be aware that violating the ScribDen Code of Conduct can lead to disciplinary action, including, but not limited to, temporary suspension, banning, and the permanent closure of your ScribDen account, if the circumstances warrant it.");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</section>");
jade_debug.shift();
jade_debug.unshift({ lineno: 90, filename: "views/app/ruleset.jade" });
buf.push("<section>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 91, filename: "views/app/ruleset.jade" });
buf.push("<h2 class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 91, filename: jade_debug[0].filename });
buf.push("Section II");
jade_debug.shift();
jade_debug.shift();
buf.push("</h2>");
jade_debug.shift();
jade_debug.unshift({ lineno: 93, filename: "views/app/ruleset.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 94, filename: "views/app/ruleset.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 94, filename: jade_debug[0].filename });
buf.push("Be Constructive:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 95, filename: "views/app/ruleset.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 95, filename: jade_debug[0].filename });
buf.push(" When commenting on submitted media, including but not limited to artwork and web links, please try to be constructive in your criticism or balance criticism with praise. Comments that are excessively insulting or vulgar are not allowed.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 97, filename: "views/app/ruleset.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 98, filename: "views/app/ruleset.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 98, filename: jade_debug[0].filename });
buf.push("No spam:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 99, filename: "views/app/ruleset.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 99, filename: jade_debug[0].filename });
buf.push(" Members are encouraged to stay on topic and be relevant to the content of the thread. Posts that are nonsensical or irrelevant to the thread topic detract from the dialogue and are not allowed.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 101, filename: "views/app/ruleset.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 102, filename: "views/app/ruleset.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 102, filename: jade_debug[0].filename });
buf.push("Rude and Insulting Comments:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 103, filename: "views/app/ruleset.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 103, filename: jade_debug[0].filename });
buf.push(" We do not allow members to resort to rude comments and insults. This goes for rude comments and insults directed at other community members and ScribDen employees alike.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</section>");
jade_debug.shift();
jade_debug.unshift({ lineno: 105, filename: "views/app/ruleset.jade" });
buf.push("<section>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 106, filename: "views/app/ruleset.jade" });
buf.push("<h2 class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 106, filename: jade_debug[0].filename });
buf.push("Section III");
jade_debug.shift();
jade_debug.shift();
buf.push("</h2>");
jade_debug.shift();
jade_debug.unshift({ lineno: 108, filename: "views/app/ruleset.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 109, filename: "views/app/ruleset.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 109, filename: jade_debug[0].filename });
buf.push("Bashing and Slanderous Comments:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 110, filename: "views/app/ruleset.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 110, filename: jade_debug[0].filename });
buf.push(" We do not permit the bashing of individuals, groups, or other companies.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 112, filename: "views/app/ruleset.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 113, filename: "views/app/ruleset.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 113, filename: jade_debug[0].filename });
buf.push("Trolling or Baiting:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 114, filename: "views/app/ruleset.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 114, filename: jade_debug[0].filename });
buf.push(" The act of trolling is defined as something that is created for the intent to provoke conflict, shock others, or to elicit a strong negative or emotional reaction. It’s okay and very normal to disagree with others, and even to debate, but provoking conflict, baiting, inciting, mocking, etc. is never acceptable. If you do not have something constructive or meaningful to add to a discussion, we strongly recommend you refrain from posting in that thread and find another discussion to participate in instead. It is also not constructive or helpful to publicly call out others and accuse them of trolling or call them a troll - please refrain from doing so. If you genuinely believe someone is trolling, be proactive: report the post or thread and leave it at that.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</section>");
jade_debug.shift();
jade_debug.shift();
buf.push("</article>");
jade_debug.shift();
jade_debug.shift();
buf.push("</main>");
jade_debug.shift();
jade_debug.shift();}.call(this,"require" in locals_for_with?locals_for_with.require:typeof require!=="undefined"?require:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "include ../partials/generic_header\nmain.sd-o-main\n  include ../partials/flash\n  article.sd-o-frame-content\n    p.sd-t-wire Below is a brief explanation of our community rules and expectations for specific topics and situations. If you have any questions about our Community Code of Conduct, please email us at hexelberrystudios@gmail.com.\n\n    section.sd-u-content-padding--top-bottom\n      p.sd-t-wire\n        span For the\n        strong  Standard\n        span  ruleset, Section I applies.\n      p.sd-t-wire\n        span For the\n        strong  Moderate\n        span  ruleset, Sections I and II apply.\n      p.sd-t-wire\n        span For the\n        strong  Strict\n        span  ruleset, Sections I, II, and III apply.\n    \n    section\n      h2.sd-t-wire Section I\n      \n      p.sd-t-wire\n        strong Abusive Language and Disruptive Behavior:\n        span  We do not tolerate abusive or disruptive behavior on ScribDen. This goes for abusive and disruptive comments and behavior that is directed at employees and members alike. Posts that are excessively vulgar, insulting, explicit, or hateful may be removed. Please remember to be respectful and constructive at all times, and help us maintain a friendly and welcoming atmosphere for all.\n  \n      p.sd-t-wire\n        strong Conspiracy Theories and Misinformation:\n        span  We do not tolerate the deliberate and malicious spreading of false information. This does not include honest mistakes; rather, this rule pertains to those who go out of their way to spread harmful or malicious rumors about others, including but not limited to members, companies, or public figures.\n  \n      p.sd-t-wire\n        strong No Pirating:\n        span  Requesting or sharing material you do not own the copyright to or have permission to share (such as music, software, or art) is not permitted.\n  \n      p.sd-t-wire\n        strong No Stalking:\n        span  Persistent harassment of an individual or group of individuals against their wishes is not permitted. If someone asks you to stop, please leave them alone.\n  \n      p.sd-t-wire\n        strong Demands and Threats:\n        span  Concerns and requests may be made without needing to resort to demands and threats. We believe they are not constructive. Threats of real-life violence, in particular, are something we take very seriously and do not tolerate.\n  \n      p.sd-t-wire\n        strong Deliberately Disobeying a ScribDen Employee:\n        span  Deliberately disobeying a request or action by a  ScribDen employee, is not permitted at any time. As an example, if we close a thread you created and leave an explanation stating why it was closed, you may not re-create the thread.\n  \n      p.sd-t-wire\n        strong Discussing Disciplinary Actions:\n        span  If you ever have questions or concerns about a disciplinary action or decision a moderator has made on the forums, or wish to appeal an infraction you’ve received, we ask that you please contact us at hexelberrystudios@gmail.com to do so. Please specify that you are contacting about a forum-related inquiry or appeal. We are happy to discuss and review specific moderation-related actions with you, but we do not allow discussion of any moderation actions or decisions on our forums.\n  \n      p.sd-t-wire\n        strong Flaming:\n        span  It’s okay to disagree and debate, but we do ask that you keep all disagreements civil, constructive, and on-topic. If a discussion gets heated and turns into a debate, remember that you should stick to debating the post and/or thread topic. It is never appropriate to resort to personal comments or jabs about those participating in the thread discussion.\n  \n      p.sd-t-wire\n        strong Hate Speech:\n        span  We take the use of hate speech very seriously, and have a zero tolerance policy. Our definition of hate speech is prejudice or hateful comments, slurs, or statements that promote violence or intolerance toward others because of the following: Race, Color, National Origin, Gender, Age, Disability, Sexual Orientation, Lifestyle, and any other personally identifying factors.\n  \n      p.sd-t-wire\n        strong Impersonation:\n        span  We do not tolerate impersonation of real, living or dead individuals. Impersonation includes using a display name, photos, posts, or any other material with the intent to fool people into believing you are a ScribDen employee, another community member, a celebrity, or anyone else you are not. This does not apply to roleplaying fictional characters, although we prefer that you limit the impersonation of fictional characters to roleplaying threads only.\n  \n      p.sd-t-wire\n        strong Malicious Links:\n        span  We do not tolerate the posting of malicious links on our forums, for any reason. This includes but is not limited to links to key-loggers, browser hijackers, or phishing scams.\n  \n      p.sd-t-wire\n        strong Names in Thread Descriptions:\n        span  Please refrain from placing the names of ScribDen employees or members in your thread descriptions. Directing a thread at a specific individual, or otherwise using a thread to call someone out, is not considered constructive.\n  \n      p.sd-t-wire\n        strong Personal Information:\n        span  For the sake of your own identity protection and personal privacy, we ask that you please do not share any personal information in ScribDen. This also goes for sharing another member’s personal information.\n  \n      p.sd-t-wire\n        strong Thread Bumping:\n        span  Please refrain from replying to threads for the sole purpose of “bumping” them. This is considered to be a form of spam because it does not add to the discussion in a constructive or meaningful way. We understand that everyone would like to keep their discussion active and visible, but we encourage you to strive for meaningful and constructive posts instead of posts that consist of nothing more than “bump.”\n  \n      p.sd-t-wire\n        strong Other Cases:\n        span  The ScribDen Code of Conduct includes almost all situations we all may encounter while using this service, but there will always be some things that are not covered. Those will be handled at ScribDen team’s discretion, and if something becomes a common issue or concern, we will update the ScribDen Code of Conduct to include it. If we see something that we feel is inappropriate or harmful to the ScribDen community, we do reserve the right to take appropriate actions for the overall health and quality of the ScribDen community. This includes things that are not specifically mentioned in the ScribDen Code of Conduct. If ever in doubt, please remember to be civil, constructive, and respectful at all times while using ScribDen.\n  \n      p.sd-t-wire We monitor the site on a regular basis, not only to read your feedback, ideas, and suggestions, and interact with you, but also to ensure that our community is a civil, constructive, and safe place for everyone.\n  \n      p.sd-t-wire The ScribDen Code of Conduct is intended to be your guide for all activity and interactions within the ScribDen community - we ask that you please try your best to abide by it. In the event that you violate the Code of Conduct, or if we simply have questions about something you have posted, we will always try to contact you first.\n  \n      p.sd-t-wire Enforcement and application of the ScribDen Code of Conduct will be at the sole discretion of ScribDen, and authorized members of the ScribDen team. Material that is deemed offensive, illegal, or inappropriate in any way will be removed at the sole discretion of ScribDen. Please be aware that violating the ScribDen Code of Conduct can lead to disciplinary action, including, but not limited to, temporary suspension, banning, and the permanent closure of your ScribDen account, if the circumstances warrant it.\n      \n    section\n      h2.sd-t-wire Section II\n      \n      p.sd-t-wire\n        strong Be Constructive:\n        span  When commenting on submitted media, including but not limited to artwork and web links, please try to be constructive in your criticism or balance criticism with praise. Comments that are excessively insulting or vulgar are not allowed.\n  \n      p.sd-t-wire\n        strong No spam:\n        span  Members are encouraged to stay on topic and be relevant to the content of the thread. Posts that are nonsensical or irrelevant to the thread topic detract from the dialogue and are not allowed.\n  \n      p.sd-t-wire\n        strong Rude and Insulting Comments:\n        span  We do not allow members to resort to rude comments and insults. This goes for rude comments and insults directed at other community members and ScribDen employees alike.\n    \n    section\n      h2.sd-t-wire Section III\n      \n      p.sd-t-wire\n        strong Bashing and Slanderous Comments:\n        span  We do not permit the bashing of individuals, groups, or other companies.\n  \n      p.sd-t-wire\n        strong Trolling or Baiting:\n        span  The act of trolling is defined as something that is created for the intent to provoke conflict, shock others, or to elicit a strong negative or emotional reaction. It’s okay and very normal to disagree with others, and even to debate, but provoking conflict, baiting, inciting, mocking, etc. is never acceptable. If you do not have something constructive or meaningful to add to a discussion, we strongly recommend you refrain from posting in that thread and find another discussion to participate in instead. It is also not constructive or helpful to publicly call out others and accuse them of trolling or call them a troll - please refrain from doing so. If you genuinely believe someone is trolling, be proactive: report the post or thread and leave it at that.");
}
}
},{"../partials/flash":29,"../partials/generic_header":30,"jadum/runtime":84}],11:[function(require,module,exports){
var jade = require("jadum/runtime");
module.exports = function rulesetModerate(locals) {
var jade_debug = [{ lineno: 1, filename: "views/app/ruleset_moderate.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (require, undefined) {
jade_debug.unshift({ lineno: 0, filename: "views/app/ruleset_moderate.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/app/ruleset_moderate.jade" });
buf.push(require("../partials/generic_header").call(this, locals));
jade_debug.shift();
jade_debug.unshift({ lineno: 2, filename: "views/app/ruleset_moderate.jade" });
buf.push("<main class=\"sd-o-main\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: undefined, filename: "views/app/ruleset_moderate.jade" });
buf.push(require("../partials/flash").call(this, locals));
jade_debug.shift();
jade_debug.unshift({ lineno: 4, filename: "views/app/ruleset_moderate.jade" });
buf.push("<article class=\"sd-o-frame-content\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: "views/app/ruleset_moderate.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: jade_debug[0].filename });
buf.push("Below is a brief explanation of our community rules and expectations for specific topics and situations. If you have any questions about our Community Code of Conduct, please email us at hexelberrystudios@gmail.com.");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 7, filename: "views/app/ruleset_moderate.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 8, filename: "views/app/ruleset_moderate.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 8, filename: jade_debug[0].filename });
buf.push("This section of rules applies specifically to the");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 9, filename: "views/app/ruleset_moderate.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: jade_debug[0].filename });
buf.push(" Moderate");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 10, filename: "views/app/ruleset_moderate.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 10, filename: jade_debug[0].filename });
buf.push(" ruleset, an addition to the standard set of community rules for ScribDen.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 12, filename: "views/app/ruleset_moderate.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 13, filename: "views/app/ruleset_moderate.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 13, filename: jade_debug[0].filename });
buf.push("Be Constructive:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 14, filename: "views/app/ruleset_moderate.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 14, filename: jade_debug[0].filename });
buf.push(" When commenting on submitted media, including but not limited to artwork and web links, please try to be constructive in your criticism or balance criticism with praise. Comments that are excessively insulting or vulgar are not allowed.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 16, filename: "views/app/ruleset_moderate.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 17, filename: "views/app/ruleset_moderate.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 17, filename: jade_debug[0].filename });
buf.push("No spam:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 18, filename: "views/app/ruleset_moderate.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 18, filename: jade_debug[0].filename });
buf.push(" Members are encouraged to stay on topic and be relevant to the content of the thread. Posts that are nonsensical or irrelevant to the thread topic detract from the dialogue and are not allowed.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 20, filename: "views/app/ruleset_moderate.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 21, filename: "views/app/ruleset_moderate.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 21, filename: jade_debug[0].filename });
buf.push("Rude and Insulting Comments:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 22, filename: "views/app/ruleset_moderate.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 22, filename: jade_debug[0].filename });
buf.push(" We do not allow members to resort to rude comments and insults. This goes for rude comments and insults directed at other community members and ScribDen employees alike.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 24, filename: "views/app/ruleset_moderate.jade" });
buf.push("<br/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 26, filename: "views/app/ruleset_moderate.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 26, filename: jade_debug[0].filename });
buf.push("The following section describes the standard set of rules that all rulesets abide by.");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 28, filename: "views/app/ruleset_moderate.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 29, filename: "views/app/ruleset_moderate.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 29, filename: jade_debug[0].filename });
buf.push("Abusive Language and Disruptive Behavior:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 30, filename: "views/app/ruleset_moderate.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 30, filename: jade_debug[0].filename });
buf.push(" We do not tolerate abusive or disruptive behavior on ScribDen. This goes for abusive and disruptive comments and behavior that is directed at employees and members alike. Posts that are excessively vulgar, insulting, explicit, or hateful may be removed. Please remember to be respectful and constructive at all times, and help us maintain a friendly and welcoming atmosphere for all.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 32, filename: "views/app/ruleset_moderate.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 33, filename: "views/app/ruleset_moderate.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 33, filename: jade_debug[0].filename });
buf.push("Conspiracy Theories and Misinformation:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 34, filename: "views/app/ruleset_moderate.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 34, filename: jade_debug[0].filename });
buf.push(" We do not tolerate the deliberate and malicious spreading of false information. This does not include honest mistakes; rather, this rule pertains to those who go out of their way to spread harmful or malicious rumors about others, including but not limited to members, companies, or public figures.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 36, filename: "views/app/ruleset_moderate.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 37, filename: "views/app/ruleset_moderate.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 37, filename: jade_debug[0].filename });
buf.push("No Pirating:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 38, filename: "views/app/ruleset_moderate.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 38, filename: jade_debug[0].filename });
buf.push(" Requesting or sharing material you do not own the copyright to or have permission to share (such as music, software, or art) is not permitted.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 40, filename: "views/app/ruleset_moderate.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 41, filename: "views/app/ruleset_moderate.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 41, filename: jade_debug[0].filename });
buf.push("No Stalking:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 42, filename: "views/app/ruleset_moderate.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 42, filename: jade_debug[0].filename });
buf.push(" Persistent harassment of an individual or group of individuals against their wishes is not permitted. If someone asks you to stop, please leave them alone.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 44, filename: "views/app/ruleset_moderate.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 45, filename: "views/app/ruleset_moderate.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 45, filename: jade_debug[0].filename });
buf.push("Demands and Threats:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 46, filename: "views/app/ruleset_moderate.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 46, filename: jade_debug[0].filename });
buf.push(" Concerns and requests may be made without needing to resort to demands and threats. We believe they are not constructive. Threats of real-life violence, in particular, are something we take very seriously and do not tolerate.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 48, filename: "views/app/ruleset_moderate.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 49, filename: "views/app/ruleset_moderate.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 49, filename: jade_debug[0].filename });
buf.push("Deliberately Disobeying a ScribDen Employee:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 50, filename: "views/app/ruleset_moderate.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 50, filename: jade_debug[0].filename });
buf.push(" Deliberately disobeying a request or action by a  ScribDen employee, is not permitted at any time. As an example, if we close a thread you created and leave an explanation stating why it was closed, you may not re-create the thread.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 52, filename: "views/app/ruleset_moderate.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 53, filename: "views/app/ruleset_moderate.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 53, filename: jade_debug[0].filename });
buf.push("Discussing Disciplinary Actions:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 54, filename: "views/app/ruleset_moderate.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 54, filename: jade_debug[0].filename });
buf.push(" If you ever have questions or concerns about a disciplinary action or decision a moderator has made on the forums, or wish to appeal an infraction you’ve received, we ask that you please contact us at hexelberrystudios@gmail.com to do so. Please specify that you are contacting about a forum-related inquiry or appeal. We are happy to discuss and review specific moderation-related actions with you, but we do not allow discussion of any moderation actions or decisions on our forums.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 56, filename: "views/app/ruleset_moderate.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 57, filename: "views/app/ruleset_moderate.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 57, filename: jade_debug[0].filename });
buf.push("Flaming:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 58, filename: "views/app/ruleset_moderate.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 58, filename: jade_debug[0].filename });
buf.push(" It’s okay to disagree and debate, but we do ask that you keep all disagreements civil, constructive, and on-topic. If a discussion gets heated and turns into a debate, remember that you should stick to debating the post and/or thread topic. It is never appropriate to resort to personal comments or jabs about those participating in the thread discussion.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 60, filename: "views/app/ruleset_moderate.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 61, filename: "views/app/ruleset_moderate.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 61, filename: jade_debug[0].filename });
buf.push("Hate Speech:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 62, filename: "views/app/ruleset_moderate.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 62, filename: jade_debug[0].filename });
buf.push(" We take the use of hate speech very seriously, and have a zero tolerance policy. Our definition of hate speech is prejudice or hateful comments, slurs, or statements that promote violence or intolerance toward others because of the following: Race, Color, National Origin, Gender, Age, Disability, Sexual Orientation, Lifestyle, and any other personally identifying factors.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 64, filename: "views/app/ruleset_moderate.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 65, filename: "views/app/ruleset_moderate.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 65, filename: jade_debug[0].filename });
buf.push("Impersonation:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 66, filename: "views/app/ruleset_moderate.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 66, filename: jade_debug[0].filename });
buf.push(" We do not tolerate impersonation of real, living or dead individuals. Impersonation includes using a display name, photos, posts, or any other material with the intent to fool people into believing you are a ScribDen employee, another community member, a celebrity, or anyone else you are not. This does not apply to roleplaying fictional characters, although we prefer that you limit the impersonation of fictional characters to roleplaying threads only.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 68, filename: "views/app/ruleset_moderate.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 69, filename: "views/app/ruleset_moderate.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 69, filename: jade_debug[0].filename });
buf.push("Malicious Links:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 70, filename: "views/app/ruleset_moderate.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 70, filename: jade_debug[0].filename });
buf.push(" We do not tolerate the posting of malicious links on our forums, for any reason. This includes but is not limited to links to key-loggers, browser hijackers, or phishing scams.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 72, filename: "views/app/ruleset_moderate.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 73, filename: "views/app/ruleset_moderate.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 73, filename: jade_debug[0].filename });
buf.push("Names in Thread Titles:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 74, filename: "views/app/ruleset_moderate.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 74, filename: jade_debug[0].filename });
buf.push(" Please refrain from placing the names of ScribDen employees or members in your thread titles. Directing a thread at a specific individual, or otherwise using a thread to call someone out, is not considered constructive.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 76, filename: "views/app/ruleset_moderate.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 77, filename: "views/app/ruleset_moderate.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 77, filename: jade_debug[0].filename });
buf.push("Personal Information:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 78, filename: "views/app/ruleset_moderate.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 78, filename: jade_debug[0].filename });
buf.push(" For the sake of your own identity protection and personal privacy, we ask that you please do not share any personal information in ScribDen. This also goes for sharing another member’s personal information.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 80, filename: "views/app/ruleset_moderate.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 81, filename: "views/app/ruleset_moderate.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 81, filename: jade_debug[0].filename });
buf.push("Thread Bumping:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 82, filename: "views/app/ruleset_moderate.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 82, filename: jade_debug[0].filename });
buf.push(" Please refrain from replying to threads for the sole purpose of “bumping” them. This is considered to be a form of spam because it does not add to the discussion in a constructive or meaningful way. We understand that everyone would like to keep their discussion active and visible, but we encourage you to strive for meaningful and constructive posts instead of posts that consist of nothing more than “bump.”");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 84, filename: "views/app/ruleset_moderate.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 84, filename: jade_debug[0].filename });
buf.push("The ScribDen Code of Conduct includes almost all situations we all may encounter while using this service, but there will always be some things that are not covered. Those will be handled at ScribDen team’s discretion, and if something becomes a common issue or concern, we will update the ScribDen Code of Conduct to include it. If we see something that we feel is inappropriate or harmful to the ScribDen community, we do reserve the right to take appropriate actions for the overall health and quality of the ScribDen community. This includes things that are not specifically mentioned in the ScribDen Code of Conduct. If ever in doubt, please remember to be civil, constructive, and respectful at all times while using ScribDen.");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 86, filename: "views/app/ruleset_moderate.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 86, filename: jade_debug[0].filename });
buf.push("We monitor the site on a regular basis, not only to read your feedback, ideas, and suggestions, and interact with you, but also to ensure that our community is a civil, constructive, and safe place for everyone.");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 88, filename: "views/app/ruleset_moderate.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 88, filename: jade_debug[0].filename });
buf.push("The ScribDen Code of Conduct is intended to be your guide for all activity and interactions within the ScribDen community - we ask that you please try your best to abide by it. In the event that you violate the Code of Conduct, or if we simply have questions about something you have posted, we will always try to contact you.");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 90, filename: "views/app/ruleset_moderate.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 90, filename: jade_debug[0].filename });
buf.push("Enforcement and application of the ScribDen Code of Conduct will be at the sole discretion of ScribDen, and authorized members of the ScribDen team. Material that is deemed offensive, illegal, or inappropriate in any way will be removed at the sole discretion of ScribDen. Please be aware that violating the ScribDen Code of Conduct can lead to disciplinary action, including, but not limited to, temporary suspension, banning, and the permanent closure of your ScribDen account, if the circumstances warrant it.");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</article>");
jade_debug.shift();
jade_debug.shift();
buf.push("</main>");
jade_debug.shift();
jade_debug.shift();}.call(this,"require" in locals_for_with?locals_for_with.require:typeof require!=="undefined"?require:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "include ../partials/generic_header\nmain.sd-o-main\n  include ../partials/flash\n  article.sd-o-frame-content\n    p.sd-t-wire Below is a brief explanation of our community rules and expectations for specific topics and situations. If you have any questions about our Community Code of Conduct, please email us at hexelberrystudios@gmail.com.\n\n    p.sd-t-wire\n      span This section of rules applies specifically to the\n      strong  Moderate\n      span  ruleset, an addition to the standard set of community rules for ScribDen.\n    \n    p.sd-t-wire\n      strong Be Constructive:\n      span  When commenting on submitted media, including but not limited to artwork and web links, please try to be constructive in your criticism or balance criticism with praise. Comments that are excessively insulting or vulgar are not allowed.\n\n    p.sd-t-wire\n      strong No spam:\n      span  Members are encouraged to stay on topic and be relevant to the content of the thread. Posts that are nonsensical or irrelevant to the thread topic detract from the dialogue and are not allowed.\n\n    p.sd-t-wire\n      strong Rude and Insulting Comments:\n      span  We do not allow members to resort to rude comments and insults. This goes for rude comments and insults directed at other community members and ScribDen employees alike.\n    \n    br\n    \n    p.sd-t-wire The following section describes the standard set of rules that all rulesets abide by.\n    \n    p.sd-t-wire\n      strong Abusive Language and Disruptive Behavior:\n      span  We do not tolerate abusive or disruptive behavior on ScribDen. This goes for abusive and disruptive comments and behavior that is directed at employees and members alike. Posts that are excessively vulgar, insulting, explicit, or hateful may be removed. Please remember to be respectful and constructive at all times, and help us maintain a friendly and welcoming atmosphere for all.\n\n    p.sd-t-wire\n      strong Conspiracy Theories and Misinformation:\n      span  We do not tolerate the deliberate and malicious spreading of false information. This does not include honest mistakes; rather, this rule pertains to those who go out of their way to spread harmful or malicious rumors about others, including but not limited to members, companies, or public figures.\n\n    p.sd-t-wire\n      strong No Pirating:\n      span  Requesting or sharing material you do not own the copyright to or have permission to share (such as music, software, or art) is not permitted.\n\n    p.sd-t-wire\n      strong No Stalking:\n      span  Persistent harassment of an individual or group of individuals against their wishes is not permitted. If someone asks you to stop, please leave them alone.\n\n    p.sd-t-wire\n      strong Demands and Threats:\n      span  Concerns and requests may be made without needing to resort to demands and threats. We believe they are not constructive. Threats of real-life violence, in particular, are something we take very seriously and do not tolerate.\n\n    p.sd-t-wire\n      strong Deliberately Disobeying a ScribDen Employee:\n      span  Deliberately disobeying a request or action by a  ScribDen employee, is not permitted at any time. As an example, if we close a thread you created and leave an explanation stating why it was closed, you may not re-create the thread.\n\n    p.sd-t-wire\n      strong Discussing Disciplinary Actions:\n      span  If you ever have questions or concerns about a disciplinary action or decision a moderator has made on the forums, or wish to appeal an infraction you’ve received, we ask that you please contact us at hexelberrystudios@gmail.com to do so. Please specify that you are contacting about a forum-related inquiry or appeal. We are happy to discuss and review specific moderation-related actions with you, but we do not allow discussion of any moderation actions or decisions on our forums.\n\n    p.sd-t-wire\n      strong Flaming:\n      span  It’s okay to disagree and debate, but we do ask that you keep all disagreements civil, constructive, and on-topic. If a discussion gets heated and turns into a debate, remember that you should stick to debating the post and/or thread topic. It is never appropriate to resort to personal comments or jabs about those participating in the thread discussion.\n\n    p.sd-t-wire\n      strong Hate Speech:\n      span  We take the use of hate speech very seriously, and have a zero tolerance policy. Our definition of hate speech is prejudice or hateful comments, slurs, or statements that promote violence or intolerance toward others because of the following: Race, Color, National Origin, Gender, Age, Disability, Sexual Orientation, Lifestyle, and any other personally identifying factors.\n\n    p.sd-t-wire\n      strong Impersonation:\n      span  We do not tolerate impersonation of real, living or dead individuals. Impersonation includes using a display name, photos, posts, or any other material with the intent to fool people into believing you are a ScribDen employee, another community member, a celebrity, or anyone else you are not. This does not apply to roleplaying fictional characters, although we prefer that you limit the impersonation of fictional characters to roleplaying threads only.\n\n    p.sd-t-wire\n      strong Malicious Links:\n      span  We do not tolerate the posting of malicious links on our forums, for any reason. This includes but is not limited to links to key-loggers, browser hijackers, or phishing scams.\n\n    p.sd-t-wire\n      strong Names in Thread Titles:\n      span  Please refrain from placing the names of ScribDen employees or members in your thread titles. Directing a thread at a specific individual, or otherwise using a thread to call someone out, is not considered constructive.\n\n    p.sd-t-wire\n      strong Personal Information:\n      span  For the sake of your own identity protection and personal privacy, we ask that you please do not share any personal information in ScribDen. This also goes for sharing another member’s personal information.\n\n    p.sd-t-wire\n      strong Thread Bumping:\n      span  Please refrain from replying to threads for the sole purpose of “bumping” them. This is considered to be a form of spam because it does not add to the discussion in a constructive or meaningful way. We understand that everyone would like to keep their discussion active and visible, but we encourage you to strive for meaningful and constructive posts instead of posts that consist of nothing more than “bump.”\n\n    p.sd-t-wire The ScribDen Code of Conduct includes almost all situations we all may encounter while using this service, but there will always be some things that are not covered. Those will be handled at ScribDen team’s discretion, and if something becomes a common issue or concern, we will update the ScribDen Code of Conduct to include it. If we see something that we feel is inappropriate or harmful to the ScribDen community, we do reserve the right to take appropriate actions for the overall health and quality of the ScribDen community. This includes things that are not specifically mentioned in the ScribDen Code of Conduct. If ever in doubt, please remember to be civil, constructive, and respectful at all times while using ScribDen.\n\n    p.sd-t-wire We monitor the site on a regular basis, not only to read your feedback, ideas, and suggestions, and interact with you, but also to ensure that our community is a civil, constructive, and safe place for everyone.\n\n    p.sd-t-wire The ScribDen Code of Conduct is intended to be your guide for all activity and interactions within the ScribDen community - we ask that you please try your best to abide by it. In the event that you violate the Code of Conduct, or if we simply have questions about something you have posted, we will always try to contact you.\n\n    p.sd-t-wire Enforcement and application of the ScribDen Code of Conduct will be at the sole discretion of ScribDen, and authorized members of the ScribDen team. Material that is deemed offensive, illegal, or inappropriate in any way will be removed at the sole discretion of ScribDen. Please be aware that violating the ScribDen Code of Conduct can lead to disciplinary action, including, but not limited to, temporary suspension, banning, and the permanent closure of your ScribDen account, if the circumstances warrant it.\n");
}
}
},{"../partials/flash":29,"../partials/generic_header":30,"jadum/runtime":84}],12:[function(require,module,exports){
var jade = require("jadum/runtime");
module.exports = function rulesetStandard(locals) {
var jade_debug = [{ lineno: 1, filename: "views/app/ruleset_standard.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (require, undefined) {
jade_debug.unshift({ lineno: 0, filename: "views/app/ruleset_standard.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/app/ruleset_standard.jade" });
buf.push(require("../partials/generic_header").call(this, locals));
jade_debug.shift();
jade_debug.unshift({ lineno: 2, filename: "views/app/ruleset_standard.jade" });
buf.push("<main class=\"sd-o-main\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: undefined, filename: "views/app/ruleset_standard.jade" });
buf.push(require("../partials/flash").call(this, locals));
jade_debug.shift();
jade_debug.unshift({ lineno: 4, filename: "views/app/ruleset_standard.jade" });
buf.push("<article class=\"sd-o-frame-content\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: "views/app/ruleset_standard.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: jade_debug[0].filename });
buf.push("Below is a brief explanation of our community rules and expectations for specific topics and situations. If you have any questions about our Community Code of Conduct, please email us at hexelberrystudios@gmail.com.");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 7, filename: "views/app/ruleset_standard.jade" });
buf.push("<section>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 8, filename: "views/app/ruleset_standard.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: "views/app/ruleset_standard.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: jade_debug[0].filename });
buf.push("For the");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 10, filename: "views/app/ruleset_standard.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 10, filename: jade_debug[0].filename });
buf.push(" Standard");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 11, filename: "views/app/ruleset_standard.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 11, filename: jade_debug[0].filename });
buf.push(" ruleset, Section I applies.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 12, filename: "views/app/ruleset_standard.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 13, filename: "views/app/ruleset_standard.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 13, filename: jade_debug[0].filename });
buf.push("For the");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 14, filename: "views/app/ruleset_standard.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 14, filename: jade_debug[0].filename });
buf.push(" Moderate");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 15, filename: "views/app/ruleset_standard.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 15, filename: jade_debug[0].filename });
buf.push(" ruleset, Section I and II apply.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 16, filename: "views/app/ruleset_standard.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 17, filename: "views/app/ruleset_standard.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 17, filename: jade_debug[0].filename });
buf.push("For the");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 18, filename: "views/app/ruleset_standard.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 18, filename: jade_debug[0].filename });
buf.push(" Strict");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 19, filename: "views/app/ruleset_standard.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 19, filename: jade_debug[0].filename });
buf.push(" ruleset, Sections I, II, and III apply.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</section>");
jade_debug.shift();
jade_debug.unshift({ lineno: 21, filename: "views/app/ruleset_standard.jade" });
buf.push("<section>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 22, filename: "views/app/ruleset_standard.jade" });
buf.push("<h2 class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 22, filename: jade_debug[0].filename });
buf.push("Section I");
jade_debug.shift();
jade_debug.shift();
buf.push("</h2>");
jade_debug.shift();
jade_debug.unshift({ lineno: 24, filename: "views/app/ruleset_standard.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 25, filename: "views/app/ruleset_standard.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 25, filename: jade_debug[0].filename });
buf.push("Abusive Language and Disruptive Behavior:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 26, filename: "views/app/ruleset_standard.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 26, filename: jade_debug[0].filename });
buf.push(" We do not tolerate abusive or disruptive behavior on ScribDen. This goes for abusive and disruptive comments and behavior that is directed at employees and members alike. Posts that are excessively vulgar, insulting, explicit, or hateful may be removed. Please remember to be respectful and constructive at all times, and help us maintain a friendly and welcoming atmosphere for all.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 28, filename: "views/app/ruleset_standard.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 29, filename: "views/app/ruleset_standard.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 29, filename: jade_debug[0].filename });
buf.push("Conspiracy Theories and Misinformation:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 30, filename: "views/app/ruleset_standard.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 30, filename: jade_debug[0].filename });
buf.push(" We do not tolerate the deliberate and malicious spreading of false information. This does not include honest mistakes; rather, this rule pertains to those who go out of their way to spread harmful or malicious rumors about others, including but not limited to members, companies, or public figures.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 32, filename: "views/app/ruleset_standard.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 33, filename: "views/app/ruleset_standard.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 33, filename: jade_debug[0].filename });
buf.push("No Pirating:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 34, filename: "views/app/ruleset_standard.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 34, filename: jade_debug[0].filename });
buf.push(" Requesting or sharing material you do not own the copyright to or have permission to share (such as music, software, or art) is not permitted.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 36, filename: "views/app/ruleset_standard.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 37, filename: "views/app/ruleset_standard.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 37, filename: jade_debug[0].filename });
buf.push("No Stalking:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 38, filename: "views/app/ruleset_standard.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 38, filename: jade_debug[0].filename });
buf.push(" Persistent harassment of an individual or group of individuals against their wishes is not permitted. If someone asks you to stop, please leave them alone.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 40, filename: "views/app/ruleset_standard.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 41, filename: "views/app/ruleset_standard.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 41, filename: jade_debug[0].filename });
buf.push("Demands and Threats:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 42, filename: "views/app/ruleset_standard.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 42, filename: jade_debug[0].filename });
buf.push(" Concerns and requests may be made without needing to resort to demands and threats. We believe they are not constructive. Threats of real-life violence, in particular, are something we take very seriously and do not tolerate.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 44, filename: "views/app/ruleset_standard.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 45, filename: "views/app/ruleset_standard.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 45, filename: jade_debug[0].filename });
buf.push("Deliberately Disobeying a ScribDen Employee:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 46, filename: "views/app/ruleset_standard.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 46, filename: jade_debug[0].filename });
buf.push(" Deliberately disobeying a request or action by a  ScribDen employee, is not permitted at any time. As an example, if we close a thread you created and leave an explanation stating why it was closed, you may not re-create the thread.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 48, filename: "views/app/ruleset_standard.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 49, filename: "views/app/ruleset_standard.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 49, filename: jade_debug[0].filename });
buf.push("Discussing Disciplinary Actions:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 50, filename: "views/app/ruleset_standard.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 50, filename: jade_debug[0].filename });
buf.push(" If you ever have questions or concerns about a disciplinary action or decision a moderator has made on the forums, or wish to appeal an infraction you’ve received, we ask that you please contact us at hexelberrystudios@gmail.com to do so. Please specify that you are contacting about a forum-related inquiry or appeal. We are happy to discuss and review specific moderation-related actions with you, but we do not allow discussion of any moderation actions or decisions on our forums.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 52, filename: "views/app/ruleset_standard.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 53, filename: "views/app/ruleset_standard.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 53, filename: jade_debug[0].filename });
buf.push("Flaming:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 54, filename: "views/app/ruleset_standard.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 54, filename: jade_debug[0].filename });
buf.push(" It’s okay to disagree and debate, but we do ask that you keep all disagreements civil, constructive, and on-topic. If a discussion gets heated and turns into a debate, remember that you should stick to debating the post and/or thread topic. It is never appropriate to resort to personal comments or jabs about those participating in the thread discussion.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 56, filename: "views/app/ruleset_standard.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 57, filename: "views/app/ruleset_standard.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 57, filename: jade_debug[0].filename });
buf.push("Hate Speech:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 58, filename: "views/app/ruleset_standard.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 58, filename: jade_debug[0].filename });
buf.push(" We take the use of hate speech very seriously, and have a zero tolerance policy. Our definition of hate speech is prejudice or hateful comments, slurs, or statements that promote violence or intolerance toward others because of the following: Race, Color, National Origin, Gender, Age, Disability, Sexual Orientation, Lifestyle, and any other personally identifying factors.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 60, filename: "views/app/ruleset_standard.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 61, filename: "views/app/ruleset_standard.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 61, filename: jade_debug[0].filename });
buf.push("Impersonation:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 62, filename: "views/app/ruleset_standard.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 62, filename: jade_debug[0].filename });
buf.push(" We do not tolerate impersonation of real, living or dead individuals. Impersonation includes using a display name, photos, posts, or any other material with the intent to fool people into believing you are a ScribDen employee, another community member, a celebrity, or anyone else you are not. This does not apply to roleplaying fictional characters, although we prefer that you limit the impersonation of fictional characters to roleplaying threads only.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 64, filename: "views/app/ruleset_standard.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 65, filename: "views/app/ruleset_standard.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 65, filename: jade_debug[0].filename });
buf.push("Malicious Links:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 66, filename: "views/app/ruleset_standard.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 66, filename: jade_debug[0].filename });
buf.push(" We do not tolerate the posting of malicious links on our forums, for any reason. This includes but is not limited to links to key-loggers, browser hijackers, or phishing scams.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 68, filename: "views/app/ruleset_standard.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 69, filename: "views/app/ruleset_standard.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 69, filename: jade_debug[0].filename });
buf.push("Names in Thread Titles:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 70, filename: "views/app/ruleset_standard.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 70, filename: jade_debug[0].filename });
buf.push(" Please refrain from placing the names of ScribDen employees or members in your thread titles. Directing a thread at a specific individual, or otherwise using a thread to call someone out, is not considered constructive.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 72, filename: "views/app/ruleset_standard.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 73, filename: "views/app/ruleset_standard.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 73, filename: jade_debug[0].filename });
buf.push("Personal Information:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 74, filename: "views/app/ruleset_standard.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 74, filename: jade_debug[0].filename });
buf.push(" For the sake of your own identity protection and personal privacy, we ask that you please do not share any personal information in ScribDen. This also goes for sharing another member’s personal information.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 76, filename: "views/app/ruleset_standard.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 77, filename: "views/app/ruleset_standard.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 77, filename: jade_debug[0].filename });
buf.push("Thread Bumping:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 78, filename: "views/app/ruleset_standard.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 78, filename: jade_debug[0].filename });
buf.push(" Please refrain from replying to threads for the sole purpose of “bumping” them. This is considered to be a form of spam because it does not add to the discussion in a constructive or meaningful way. We understand that everyone would like to keep their discussion active and visible, but we encourage you to strive for meaningful and constructive posts instead of posts that consist of nothing more than “bump.”");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 80, filename: "views/app/ruleset_standard.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 81, filename: "views/app/ruleset_standard.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 81, filename: jade_debug[0].filename });
buf.push("Other Cases:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 82, filename: "views/app/ruleset_standard.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 82, filename: jade_debug[0].filename });
buf.push("The ScribDen Code of Conduct includes almost all situations we all may encounter while using this service, but there will always be some things that are not covered. Those will be handled at ScribDen team’s discretion, and if something becomes a common issue or concern, we will update the ScribDen Code of Conduct to include it. If we see something that we feel is inappropriate or harmful to the ScribDen community, we do reserve the right to take appropriate actions for the overall health and quality of the ScribDen community. This includes things that are not specifically mentioned in the ScribDen Code of Conduct. If ever in doubt, please remember to be civil, constructive, and respectful at all times while using ScribDen.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 84, filename: "views/app/ruleset_standard.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 84, filename: jade_debug[0].filename });
buf.push("We monitor the site on a regular basis, not only to read your feedback, ideas, and suggestions, and interact with you, but also to ensure that our community is a civil, constructive, and safe place for everyone.");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 86, filename: "views/app/ruleset_standard.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 86, filename: jade_debug[0].filename });
buf.push("The ScribDen Code of Conduct is intended to be your guide for all activity and interactions within the ScribDen community - we ask that you please try your best to abide by it. In the event that you violate the Code of Conduct, or if we simply have questions about something you have posted, we will always try to contact you first.");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 88, filename: "views/app/ruleset_standard.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 88, filename: jade_debug[0].filename });
buf.push("Enforcement and application of the ScribDen Code of Conduct will be at the sole discretion of ScribDen, and authorized members of the ScribDen team. Material that is deemed offensive, illegal, or inappropriate in any way will be removed at the sole discretion of ScribDen. Please be aware that violating the ScribDen Code of Conduct can lead to disciplinary action, including, but not limited to, temporary suspension, banning, and the permanent closure of your ScribDen account, if the circumstances warrant it.");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</section>");
jade_debug.shift();
jade_debug.unshift({ lineno: 90, filename: "views/app/ruleset_standard.jade" });
buf.push("<section>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 91, filename: "views/app/ruleset_standard.jade" });
buf.push("<h2 class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 91, filename: jade_debug[0].filename });
buf.push("Section II");
jade_debug.shift();
jade_debug.shift();
buf.push("</h2>");
jade_debug.shift();
jade_debug.unshift({ lineno: 93, filename: "views/app/ruleset_standard.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 94, filename: "views/app/ruleset_standard.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 94, filename: jade_debug[0].filename });
buf.push("Be Constructive:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 95, filename: "views/app/ruleset_standard.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 95, filename: jade_debug[0].filename });
buf.push(" When commenting on submitted media, including but not limited to artwork and web links, please try to be constructive in your criticism or balance criticism with praise. Comments that are excessively insulting or vulgar are not allowed.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 97, filename: "views/app/ruleset_standard.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 98, filename: "views/app/ruleset_standard.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 98, filename: jade_debug[0].filename });
buf.push("No spam:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 99, filename: "views/app/ruleset_standard.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 99, filename: jade_debug[0].filename });
buf.push(" Members are encouraged to stay on topic and be relevant to the content of the thread. Posts that are nonsensical or irrelevant to the thread topic detract from the dialogue and are not allowed.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 101, filename: "views/app/ruleset_standard.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 102, filename: "views/app/ruleset_standard.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 102, filename: jade_debug[0].filename });
buf.push("Rude and Insulting Comments:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 103, filename: "views/app/ruleset_standard.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 103, filename: jade_debug[0].filename });
buf.push(" We do not allow members to resort to rude comments and insults. This goes for rude comments and insults directed at other community members and ScribDen employees alike.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</section>");
jade_debug.shift();
jade_debug.unshift({ lineno: 105, filename: "views/app/ruleset_standard.jade" });
buf.push("<section>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 106, filename: "views/app/ruleset_standard.jade" });
buf.push("<h2 class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 106, filename: jade_debug[0].filename });
buf.push("Section III");
jade_debug.shift();
jade_debug.shift();
buf.push("</h2>");
jade_debug.shift();
jade_debug.unshift({ lineno: 108, filename: "views/app/ruleset_standard.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 109, filename: "views/app/ruleset_standard.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 109, filename: jade_debug[0].filename });
buf.push("Bashing and Slanderous Comments:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 110, filename: "views/app/ruleset_standard.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 110, filename: jade_debug[0].filename });
buf.push(" We do not permit the bashing of individuals, groups, or other companies.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 112, filename: "views/app/ruleset_standard.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 113, filename: "views/app/ruleset_standard.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 113, filename: jade_debug[0].filename });
buf.push("Trolling or Baiting:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 114, filename: "views/app/ruleset_standard.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 114, filename: jade_debug[0].filename });
buf.push(" The act of trolling is defined as something that is created for the intent to provoke conflict, shock others, or to elicit a strong negative or emotional reaction. It’s okay and very normal to disagree with others, and even to debate, but provoking conflict, baiting, inciting, mocking, etc. is never acceptable. If you do not have something constructive or meaningful to add to a discussion, we strongly recommend you refrain from posting in that thread and find another discussion to participate in instead. It is also not constructive or helpful to publicly call out others and accuse them of trolling or call them a troll - please refrain from doing so. If you genuinely believe someone is trolling, be proactive: report the post or thread and leave it at that.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</section>");
jade_debug.shift();
jade_debug.shift();
buf.push("</article>");
jade_debug.shift();
jade_debug.shift();
buf.push("</main>");
jade_debug.shift();
jade_debug.shift();}.call(this,"require" in locals_for_with?locals_for_with.require:typeof require!=="undefined"?require:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "include ../partials/generic_header\nmain.sd-o-main\n  include ../partials/flash\n  article.sd-o-frame-content\n    p.sd-t-wire Below is a brief explanation of our community rules and expectations for specific topics and situations. If you have any questions about our Community Code of Conduct, please email us at hexelberrystudios@gmail.com.\n\n    section\n      p.sd-t-wire\n        span For the\n        strong  Standard\n        span  ruleset, Section I applies.\n      p.sd-t-wire\n        span For the\n        strong  Moderate\n        span  ruleset, Section I and II apply.\n      p.sd-t-wire\n        span For the\n        strong  Strict\n        span  ruleset, Sections I, II, and III apply.\n    \n    section\n      h2.sd-t-wire Section I\n      \n      p.sd-t-wire\n        strong Abusive Language and Disruptive Behavior:\n        span  We do not tolerate abusive or disruptive behavior on ScribDen. This goes for abusive and disruptive comments and behavior that is directed at employees and members alike. Posts that are excessively vulgar, insulting, explicit, or hateful may be removed. Please remember to be respectful and constructive at all times, and help us maintain a friendly and welcoming atmosphere for all.\n  \n      p.sd-t-wire\n        strong Conspiracy Theories and Misinformation:\n        span  We do not tolerate the deliberate and malicious spreading of false information. This does not include honest mistakes; rather, this rule pertains to those who go out of their way to spread harmful or malicious rumors about others, including but not limited to members, companies, or public figures.\n  \n      p.sd-t-wire\n        strong No Pirating:\n        span  Requesting or sharing material you do not own the copyright to or have permission to share (such as music, software, or art) is not permitted.\n  \n      p.sd-t-wire\n        strong No Stalking:\n        span  Persistent harassment of an individual or group of individuals against their wishes is not permitted. If someone asks you to stop, please leave them alone.\n  \n      p.sd-t-wire\n        strong Demands and Threats:\n        span  Concerns and requests may be made without needing to resort to demands and threats. We believe they are not constructive. Threats of real-life violence, in particular, are something we take very seriously and do not tolerate.\n  \n      p.sd-t-wire\n        strong Deliberately Disobeying a ScribDen Employee:\n        span  Deliberately disobeying a request or action by a  ScribDen employee, is not permitted at any time. As an example, if we close a thread you created and leave an explanation stating why it was closed, you may not re-create the thread.\n  \n      p.sd-t-wire\n        strong Discussing Disciplinary Actions:\n        span  If you ever have questions or concerns about a disciplinary action or decision a moderator has made on the forums, or wish to appeal an infraction you’ve received, we ask that you please contact us at hexelberrystudios@gmail.com to do so. Please specify that you are contacting about a forum-related inquiry or appeal. We are happy to discuss and review specific moderation-related actions with you, but we do not allow discussion of any moderation actions or decisions on our forums.\n  \n      p.sd-t-wire\n        strong Flaming:\n        span  It’s okay to disagree and debate, but we do ask that you keep all disagreements civil, constructive, and on-topic. If a discussion gets heated and turns into a debate, remember that you should stick to debating the post and/or thread topic. It is never appropriate to resort to personal comments or jabs about those participating in the thread discussion.\n  \n      p.sd-t-wire\n        strong Hate Speech:\n        span  We take the use of hate speech very seriously, and have a zero tolerance policy. Our definition of hate speech is prejudice or hateful comments, slurs, or statements that promote violence or intolerance toward others because of the following: Race, Color, National Origin, Gender, Age, Disability, Sexual Orientation, Lifestyle, and any other personally identifying factors.\n  \n      p.sd-t-wire\n        strong Impersonation:\n        span  We do not tolerate impersonation of real, living or dead individuals. Impersonation includes using a display name, photos, posts, or any other material with the intent to fool people into believing you are a ScribDen employee, another community member, a celebrity, or anyone else you are not. This does not apply to roleplaying fictional characters, although we prefer that you limit the impersonation of fictional characters to roleplaying threads only.\n  \n      p.sd-t-wire\n        strong Malicious Links:\n        span  We do not tolerate the posting of malicious links on our forums, for any reason. This includes but is not limited to links to key-loggers, browser hijackers, or phishing scams.\n  \n      p.sd-t-wire\n        strong Names in Thread Titles:\n        span  Please refrain from placing the names of ScribDen employees or members in your thread titles. Directing a thread at a specific individual, or otherwise using a thread to call someone out, is not considered constructive.\n  \n      p.sd-t-wire\n        strong Personal Information:\n        span  For the sake of your own identity protection and personal privacy, we ask that you please do not share any personal information in ScribDen. This also goes for sharing another member’s personal information.\n  \n      p.sd-t-wire\n        strong Thread Bumping:\n        span  Please refrain from replying to threads for the sole purpose of “bumping” them. This is considered to be a form of spam because it does not add to the discussion in a constructive or meaningful way. We understand that everyone would like to keep their discussion active and visible, but we encourage you to strive for meaningful and constructive posts instead of posts that consist of nothing more than “bump.”\n  \n      p.sd-t-wire\n        strong Other Cases:\n        span The ScribDen Code of Conduct includes almost all situations we all may encounter while using this service, but there will always be some things that are not covered. Those will be handled at ScribDen team’s discretion, and if something becomes a common issue or concern, we will update the ScribDen Code of Conduct to include it. If we see something that we feel is inappropriate or harmful to the ScribDen community, we do reserve the right to take appropriate actions for the overall health and quality of the ScribDen community. This includes things that are not specifically mentioned in the ScribDen Code of Conduct. If ever in doubt, please remember to be civil, constructive, and respectful at all times while using ScribDen.\n  \n      p.sd-t-wire We monitor the site on a regular basis, not only to read your feedback, ideas, and suggestions, and interact with you, but also to ensure that our community is a civil, constructive, and safe place for everyone.\n  \n      p.sd-t-wire The ScribDen Code of Conduct is intended to be your guide for all activity and interactions within the ScribDen community - we ask that you please try your best to abide by it. In the event that you violate the Code of Conduct, or if we simply have questions about something you have posted, we will always try to contact you first.\n  \n      p.sd-t-wire Enforcement and application of the ScribDen Code of Conduct will be at the sole discretion of ScribDen, and authorized members of the ScribDen team. Material that is deemed offensive, illegal, or inappropriate in any way will be removed at the sole discretion of ScribDen. Please be aware that violating the ScribDen Code of Conduct can lead to disciplinary action, including, but not limited to, temporary suspension, banning, and the permanent closure of your ScribDen account, if the circumstances warrant it.\n      \n    section\n      h2.sd-t-wire Section II\n      \n      p.sd-t-wire\n        strong Be Constructive:\n        span  When commenting on submitted media, including but not limited to artwork and web links, please try to be constructive in your criticism or balance criticism with praise. Comments that are excessively insulting or vulgar are not allowed.\n  \n      p.sd-t-wire\n        strong No spam:\n        span  Members are encouraged to stay on topic and be relevant to the content of the thread. Posts that are nonsensical or irrelevant to the thread topic detract from the dialogue and are not allowed.\n  \n      p.sd-t-wire\n        strong Rude and Insulting Comments:\n        span  We do not allow members to resort to rude comments and insults. This goes for rude comments and insults directed at other community members and ScribDen employees alike.\n    \n    section\n      h2.sd-t-wire Section III\n      \n      p.sd-t-wire\n        strong Bashing and Slanderous Comments:\n        span  We do not permit the bashing of individuals, groups, or other companies.\n  \n      p.sd-t-wire\n        strong Trolling or Baiting:\n        span  The act of trolling is defined as something that is created for the intent to provoke conflict, shock others, or to elicit a strong negative or emotional reaction. It’s okay and very normal to disagree with others, and even to debate, but provoking conflict, baiting, inciting, mocking, etc. is never acceptable. If you do not have something constructive or meaningful to add to a discussion, we strongly recommend you refrain from posting in that thread and find another discussion to participate in instead. It is also not constructive or helpful to publicly call out others and accuse them of trolling or call them a troll - please refrain from doing so. If you genuinely believe someone is trolling, be proactive: report the post or thread and leave it at that.");
}
}
},{"../partials/flash":29,"../partials/generic_header":30,"jadum/runtime":84}],13:[function(require,module,exports){
var jade = require("jadum/runtime");
module.exports = function rulesetStrict(locals) {
var jade_debug = [{ lineno: 1, filename: "views/app/ruleset_strict.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (require, undefined) {
jade_debug.unshift({ lineno: 0, filename: "views/app/ruleset_strict.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/app/ruleset_strict.jade" });
buf.push(require("../partials/generic_header").call(this, locals));
jade_debug.shift();
jade_debug.unshift({ lineno: 2, filename: "views/app/ruleset_strict.jade" });
buf.push("<main class=\"sd-o-main\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: undefined, filename: "views/app/ruleset_strict.jade" });
buf.push(require("../partials/flash").call(this, locals));
jade_debug.shift();
jade_debug.unshift({ lineno: 4, filename: "views/app/ruleset_strict.jade" });
buf.push("<article class=\"sd-o-frame-content\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: "views/app/ruleset_strict.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: jade_debug[0].filename });
buf.push("Below is a brief explanation of our community rules and expectations for specific topics and situations. If you have any questions about our Community Code of Conduct, please email us at hexelberrystudios@gmail.com.");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 7, filename: "views/app/ruleset_strict.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 8, filename: "views/app/ruleset_strict.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 8, filename: jade_debug[0].filename });
buf.push("This section of rules applies specifically to the");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 9, filename: "views/app/ruleset_strict.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: jade_debug[0].filename });
buf.push(" Strict");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 10, filename: "views/app/ruleset_strict.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 10, filename: jade_debug[0].filename });
buf.push(" ruleset, an addition to both the standard and moderate set of community rules for ScribDen.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 12, filename: "views/app/ruleset_strict.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 13, filename: "views/app/ruleset_strict.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 13, filename: jade_debug[0].filename });
buf.push("Bashing and Slanderous Comments:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 14, filename: "views/app/ruleset_strict.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 14, filename: jade_debug[0].filename });
buf.push(" We do not permit the bashing of individuals, groups, or other companies.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 16, filename: "views/app/ruleset_strict.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 17, filename: "views/app/ruleset_strict.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 17, filename: jade_debug[0].filename });
buf.push("Trolling or Baiting:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 18, filename: "views/app/ruleset_strict.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 18, filename: jade_debug[0].filename });
buf.push(" The act of trolling is defined as something that is created for the intent to provoke conflict, shock others, or to elicit a strong negative or emotional reaction. It’s okay and very normal to disagree with others, and even to debate, but provoking conflict, baiting, inciting, mocking, etc. is never acceptable. If you do not have something constructive or meaningful to add to a discussion, we strongly recommend you refrain from posting in that thread and find another discussion to participate in instead. It is also not constructive or helpful to publicly call out others and accuse them of trolling or call them a troll - please refrain from doing so. If you genuinely believe someone is trolling, be proactive: report the post or thread and leave it at that.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 20, filename: "views/app/ruleset_strict.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 21, filename: "views/app/ruleset_strict.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 21, filename: jade_debug[0].filename });
buf.push("Be Constructive:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 22, filename: "views/app/ruleset_strict.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 22, filename: jade_debug[0].filename });
buf.push(" When commenting on artwork or reviewing web links, please try to be constructive in your criticism or balance criticism with praise. Comments that are excessively insulting or vulgar are not allowed.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 24, filename: "views/app/ruleset_strict.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 25, filename: "views/app/ruleset_strict.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 25, filename: jade_debug[0].filename });
buf.push("No spam:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 26, filename: "views/app/ruleset_strict.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 26, filename: jade_debug[0].filename });
buf.push(" Members are encouraged to stay on topic and be relevant to the content of the thread. Posts that are nonsensical or irrelevant to the thread are not allowed.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 28, filename: "views/app/ruleset_strict.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 29, filename: "views/app/ruleset_strict.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 29, filename: jade_debug[0].filename });
buf.push("Rude and Insulting Comments:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 30, filename: "views/app/ruleset_strict.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 30, filename: jade_debug[0].filename });
buf.push(" We do not allow members to resort to rude comments and insults. This goes for rude comments and insults directed at other community members, and ScribDen employees alike.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 32, filename: "views/app/ruleset_strict.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 32, filename: jade_debug[0].filename });
buf.push("The following section describes the standard set of rules that all rulesets abide by.");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 34, filename: "views/app/ruleset_strict.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 35, filename: "views/app/ruleset_strict.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 35, filename: jade_debug[0].filename });
buf.push("Abusive Language and Disruptive Behavior:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 36, filename: "views/app/ruleset_strict.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 36, filename: jade_debug[0].filename });
buf.push(" We do not tolerate abusive or disruptive behavior on ScribDen. This goes for abusive and disruptive comments and behavior that is directed at employees and members alike. Posts that are excessively vulgar, insulting, explicit, or hateful may be removed. Please remember to be respectful and constructive at all times, and help us maintain a friendly and welcoming atmosphere for all.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 38, filename: "views/app/ruleset_strict.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 39, filename: "views/app/ruleset_strict.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 39, filename: jade_debug[0].filename });
buf.push("Conspiracy Theories and Misinformation:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 40, filename: "views/app/ruleset_strict.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 40, filename: jade_debug[0].filename });
buf.push(" We do not tolerate the deliberate and malicious spreading of false information. This does not include honest mistakes; rather, this rule pertains to those who go out of their way to spread harmful or malicious rumors about others, including but not limited to members, companies, or public figures.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 42, filename: "views/app/ruleset_strict.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 43, filename: "views/app/ruleset_strict.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 43, filename: jade_debug[0].filename });
buf.push("No Pirating:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 44, filename: "views/app/ruleset_strict.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 44, filename: jade_debug[0].filename });
buf.push(" Requesting or sharing material you do not own the copyright to or have permission to share (such as music, software, or art) is not permitted.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 46, filename: "views/app/ruleset_strict.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 47, filename: "views/app/ruleset_strict.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 47, filename: jade_debug[0].filename });
buf.push("No Stalking:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 48, filename: "views/app/ruleset_strict.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 48, filename: jade_debug[0].filename });
buf.push(" Persistent harassment of an individual or group of individuals against their wishes is not permitted. If someone asks you to stop, please leave them alone.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 50, filename: "views/app/ruleset_strict.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 51, filename: "views/app/ruleset_strict.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 51, filename: jade_debug[0].filename });
buf.push("Demands and Threats:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 52, filename: "views/app/ruleset_strict.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 52, filename: jade_debug[0].filename });
buf.push(" Concerns and requests may be made without needing to resort to demands and threats. We believe they are not constructive. Threats of real-life violence, in particular, are something we take very seriously and do not tolerate.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 54, filename: "views/app/ruleset_strict.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 55, filename: "views/app/ruleset_strict.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 55, filename: jade_debug[0].filename });
buf.push("Deliberately Disobeying a ScribDen Employee:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 56, filename: "views/app/ruleset_strict.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 56, filename: jade_debug[0].filename });
buf.push(" Deliberately disobeying a request or action by a  ScribDen employee, is not permitted at any time. As an example, if we close a thread you created and leave an explanation stating why it was closed, you may not re-create the thread.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 58, filename: "views/app/ruleset_strict.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 59, filename: "views/app/ruleset_strict.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 59, filename: jade_debug[0].filename });
buf.push("Discussing Disciplinary Actions:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 60, filename: "views/app/ruleset_strict.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 60, filename: jade_debug[0].filename });
buf.push(" If you ever have questions or concerns about a disciplinary action or decision a moderator has made on the forums, or wish to appeal an infraction you’ve received, we ask that you please contact us at hexelberrystudios@gmail.com to do so. Please specify that you are contacting about a forum-related inquiry or appeal. We are happy to discuss and review specific moderation-related actions with you, but we do not allow discussion of any moderation actions or decisions on our forums.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 62, filename: "views/app/ruleset_strict.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 63, filename: "views/app/ruleset_strict.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 63, filename: jade_debug[0].filename });
buf.push("Flaming:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 64, filename: "views/app/ruleset_strict.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 64, filename: jade_debug[0].filename });
buf.push(" It’s okay to disagree and debate, but we do ask that you keep all disagreements civil, constructive, and on-topic. If a discussion gets heated and turns into a debate, remember that you should stick to debating the post and/or thread topic. It is never appropriate to resort to personal comments or jabs about those participating in the thread discussion.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 66, filename: "views/app/ruleset_strict.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 67, filename: "views/app/ruleset_strict.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 67, filename: jade_debug[0].filename });
buf.push("Hate Speech:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 68, filename: "views/app/ruleset_strict.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 68, filename: jade_debug[0].filename });
buf.push(" We take the use of hate speech very seriously, and have a zero tolerance policy. Our definition of hate speech is prejudice or hateful comments, slurs, or statements that promote violence or intolerance toward others because of the following: Race, Color, National Origin, Gender, Age, Disability, Sexual Orientation, Lifestyle, and any other personally identifying factors.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 70, filename: "views/app/ruleset_strict.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 71, filename: "views/app/ruleset_strict.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 71, filename: jade_debug[0].filename });
buf.push("Impersonation:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 72, filename: "views/app/ruleset_strict.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 72, filename: jade_debug[0].filename });
buf.push(" We do not tolerate impersonation of real, living or dead individuals. Impersonation includes using a display name, photos, posts, or any other material with the intent to fool people into believing you are a ScribDen employee, another community member, a celebrity, or anyone else you are not. This does not apply to roleplaying fictional characters, although we prefer that you limit the impersonation of fictional characters to roleplaying threads only.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 74, filename: "views/app/ruleset_strict.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 75, filename: "views/app/ruleset_strict.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 75, filename: jade_debug[0].filename });
buf.push("Malicious Links:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 76, filename: "views/app/ruleset_strict.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 76, filename: jade_debug[0].filename });
buf.push(" We do not tolerate the posting of malicious links on our forums, for any reason. This includes but is not limited to links to key-loggers, browser hijackers, or phishing scams.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 78, filename: "views/app/ruleset_strict.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 79, filename: "views/app/ruleset_strict.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 79, filename: jade_debug[0].filename });
buf.push("Names in Thread Titles:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 80, filename: "views/app/ruleset_strict.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 80, filename: jade_debug[0].filename });
buf.push(" Please refrain from placing the names of ScribDen employees or members in your thread titles. Directing a thread at a specific individual, or otherwise using a thread to call someone out, is not considered constructive.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 82, filename: "views/app/ruleset_strict.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 83, filename: "views/app/ruleset_strict.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 83, filename: jade_debug[0].filename });
buf.push("Personal Information:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 84, filename: "views/app/ruleset_strict.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 84, filename: jade_debug[0].filename });
buf.push(" For the sake of your own identity protection and personal privacy, we ask that you please do not share any personal information in ScribDen. This also goes for sharing another member’s personal information.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 86, filename: "views/app/ruleset_strict.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 87, filename: "views/app/ruleset_strict.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 87, filename: jade_debug[0].filename });
buf.push("Thread Bumping:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 88, filename: "views/app/ruleset_strict.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 88, filename: jade_debug[0].filename });
buf.push(" Please refrain from replying to threads for the sole purpose of “bumping” them. This is considered to be a form of spam because it does not add to the discussion in a constructive or meaningful way. We understand that everyone would like to keep their discussion active and visible, but we encourage you to strive for meaningful and constructive posts instead of posts that consist of nothing more than “bump.”");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 90, filename: "views/app/ruleset_strict.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 90, filename: jade_debug[0].filename });
buf.push("The ScribDen Code of Conduct includes almost all situations we all may encounter while using this service, but there will always be some things that are not covered. Those will be handled at ScribDen team’s discretion, and if something becomes a common issue or concern, we will update the ScribDen Code of Conduct to include it. If we see something that we feel is inappropriate or harmful to the ScribDen community, we do reserve the right to take appropriate actions for the overall health and quality of the ScribDen community. This includes things that are not specifically mentioned in the ScribDen Code of Conduct. If ever in doubt, please remember to be civil, constructive, and respectful at all times while using ScribDen.");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 92, filename: "views/app/ruleset_strict.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 92, filename: jade_debug[0].filename });
buf.push("We monitor the site on a regular basis, not only to read your feedback, ideas, and suggestions, and interact with you, but also to ensure that our community is a civil, constructive, and safe place for everyone.");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 94, filename: "views/app/ruleset_strict.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 94, filename: jade_debug[0].filename });
buf.push("The ScribDen Code of Conduct is intended to be your guide for all activity and interactions within the ScribDen community - we ask that you please try your best to abide by it. In the event that you violate the Code of Conduct, or if we simply have questions about something you have posted, we will always try to contact you.");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 96, filename: "views/app/ruleset_strict.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 96, filename: jade_debug[0].filename });
buf.push("Enforcement and application of the ScribDen Code of Conduct will be at the sole discretion of ScribDen, and authorized members of the ScribDen team. Material that is deemed offensive, illegal, or inappropriate in any way will be removed at the sole discretion of ScribDen. Please be aware that violating the ScribDen Code of Conduct can lead to disciplinary action, including, but not limited to, temporary suspension, banning, and the permanent closure of your ScribDen account, if the circumstances warrant it.");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</article>");
jade_debug.shift();
jade_debug.shift();
buf.push("</main>");
jade_debug.shift();
jade_debug.shift();}.call(this,"require" in locals_for_with?locals_for_with.require:typeof require!=="undefined"?require:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "include ../partials/generic_header\nmain.sd-o-main\n  include ../partials/flash\n  article.sd-o-frame-content\n    p.sd-t-wire Below is a brief explanation of our community rules and expectations for specific topics and situations. If you have any questions about our Community Code of Conduct, please email us at hexelberrystudios@gmail.com.\n\n    p.sd-t-wire\n      span This section of rules applies specifically to the\n      strong  Strict\n      span  ruleset, an addition to both the standard and moderate set of community rules for ScribDen.\n    \n    p.sd-t-wire\n      strong Bashing and Slanderous Comments:\n      span  We do not permit the bashing of individuals, groups, or other companies.\n\n    p.sd-t-wire\n      strong Trolling or Baiting:\n      span  The act of trolling is defined as something that is created for the intent to provoke conflict, shock others, or to elicit a strong negative or emotional reaction. It’s okay and very normal to disagree with others, and even to debate, but provoking conflict, baiting, inciting, mocking, etc. is never acceptable. If you do not have something constructive or meaningful to add to a discussion, we strongly recommend you refrain from posting in that thread and find another discussion to participate in instead. It is also not constructive or helpful to publicly call out others and accuse them of trolling or call them a troll - please refrain from doing so. If you genuinely believe someone is trolling, be proactive: report the post or thread and leave it at that.\n    \n    p.sd-t-wire\n      strong Be Constructive:\n      span  When commenting on artwork or reviewing web links, please try to be constructive in your criticism or balance criticism with praise. Comments that are excessively insulting or vulgar are not allowed.\n\n    p.sd-t-wire\n      strong No spam:\n      span  Members are encouraged to stay on topic and be relevant to the content of the thread. Posts that are nonsensical or irrelevant to the thread are not allowed.\n\n    p.sd-t-wire\n      strong Rude and Insulting Comments:\n      span  We do not allow members to resort to rude comments and insults. This goes for rude comments and insults directed at other community members, and ScribDen employees alike.\n    \n    p.sd-t-wire The following section describes the standard set of rules that all rulesets abide by.\n    \n    p.sd-t-wire\n      strong Abusive Language and Disruptive Behavior:\n      span  We do not tolerate abusive or disruptive behavior on ScribDen. This goes for abusive and disruptive comments and behavior that is directed at employees and members alike. Posts that are excessively vulgar, insulting, explicit, or hateful may be removed. Please remember to be respectful and constructive at all times, and help us maintain a friendly and welcoming atmosphere for all.\n\n    p.sd-t-wire\n      strong Conspiracy Theories and Misinformation:\n      span  We do not tolerate the deliberate and malicious spreading of false information. This does not include honest mistakes; rather, this rule pertains to those who go out of their way to spread harmful or malicious rumors about others, including but not limited to members, companies, or public figures.\n\n    p.sd-t-wire\n      strong No Pirating:\n      span  Requesting or sharing material you do not own the copyright to or have permission to share (such as music, software, or art) is not permitted.\n\n    p.sd-t-wire\n      strong No Stalking:\n      span  Persistent harassment of an individual or group of individuals against their wishes is not permitted. If someone asks you to stop, please leave them alone.\n\n    p.sd-t-wire\n      strong Demands and Threats:\n      span  Concerns and requests may be made without needing to resort to demands and threats. We believe they are not constructive. Threats of real-life violence, in particular, are something we take very seriously and do not tolerate.\n\n    p.sd-t-wire\n      strong Deliberately Disobeying a ScribDen Employee:\n      span  Deliberately disobeying a request or action by a  ScribDen employee, is not permitted at any time. As an example, if we close a thread you created and leave an explanation stating why it was closed, you may not re-create the thread.\n\n    p.sd-t-wire\n      strong Discussing Disciplinary Actions:\n      span  If you ever have questions or concerns about a disciplinary action or decision a moderator has made on the forums, or wish to appeal an infraction you’ve received, we ask that you please contact us at hexelberrystudios@gmail.com to do so. Please specify that you are contacting about a forum-related inquiry or appeal. We are happy to discuss and review specific moderation-related actions with you, but we do not allow discussion of any moderation actions or decisions on our forums.\n\n    p.sd-t-wire\n      strong Flaming:\n      span  It’s okay to disagree and debate, but we do ask that you keep all disagreements civil, constructive, and on-topic. If a discussion gets heated and turns into a debate, remember that you should stick to debating the post and/or thread topic. It is never appropriate to resort to personal comments or jabs about those participating in the thread discussion.\n\n    p.sd-t-wire\n      strong Hate Speech:\n      span  We take the use of hate speech very seriously, and have a zero tolerance policy. Our definition of hate speech is prejudice or hateful comments, slurs, or statements that promote violence or intolerance toward others because of the following: Race, Color, National Origin, Gender, Age, Disability, Sexual Orientation, Lifestyle, and any other personally identifying factors.\n\n    p.sd-t-wire\n      strong Impersonation:\n      span  We do not tolerate impersonation of real, living or dead individuals. Impersonation includes using a display name, photos, posts, or any other material with the intent to fool people into believing you are a ScribDen employee, another community member, a celebrity, or anyone else you are not. This does not apply to roleplaying fictional characters, although we prefer that you limit the impersonation of fictional characters to roleplaying threads only.\n\n    p.sd-t-wire\n      strong Malicious Links:\n      span  We do not tolerate the posting of malicious links on our forums, for any reason. This includes but is not limited to links to key-loggers, browser hijackers, or phishing scams.\n\n    p.sd-t-wire\n      strong Names in Thread Titles:\n      span  Please refrain from placing the names of ScribDen employees or members in your thread titles. Directing a thread at a specific individual, or otherwise using a thread to call someone out, is not considered constructive.\n\n    p.sd-t-wire\n      strong Personal Information:\n      span  For the sake of your own identity protection and personal privacy, we ask that you please do not share any personal information in ScribDen. This also goes for sharing another member’s personal information.\n\n    p.sd-t-wire\n      strong Thread Bumping:\n      span  Please refrain from replying to threads for the sole purpose of “bumping” them. This is considered to be a form of spam because it does not add to the discussion in a constructive or meaningful way. We understand that everyone would like to keep their discussion active and visible, but we encourage you to strive for meaningful and constructive posts instead of posts that consist of nothing more than “bump.”\n\n    p.sd-t-wire The ScribDen Code of Conduct includes almost all situations we all may encounter while using this service, but there will always be some things that are not covered. Those will be handled at ScribDen team’s discretion, and if something becomes a common issue or concern, we will update the ScribDen Code of Conduct to include it. If we see something that we feel is inappropriate or harmful to the ScribDen community, we do reserve the right to take appropriate actions for the overall health and quality of the ScribDen community. This includes things that are not specifically mentioned in the ScribDen Code of Conduct. If ever in doubt, please remember to be civil, constructive, and respectful at all times while using ScribDen.\n\n    p.sd-t-wire We monitor the site on a regular basis, not only to read your feedback, ideas, and suggestions, and interact with you, but also to ensure that our community is a civil, constructive, and safe place for everyone.\n\n    p.sd-t-wire The ScribDen Code of Conduct is intended to be your guide for all activity and interactions within the ScribDen community - we ask that you please try your best to abide by it. In the event that you violate the Code of Conduct, or if we simply have questions about something you have posted, we will always try to contact you.\n\n    p.sd-t-wire Enforcement and application of the ScribDen Code of Conduct will be at the sole discretion of ScribDen, and authorized members of the ScribDen team. Material that is deemed offensive, illegal, or inappropriate in any way will be removed at the sole discretion of ScribDen. Please be aware that violating the ScribDen Code of Conduct can lead to disciplinary action, including, but not limited to, temporary suspension, banning, and the permanent closure of your ScribDen account, if the circumstances warrant it.\n");
}
}
},{"../partials/flash":29,"../partials/generic_header":30,"jadum/runtime":84}],14:[function(require,module,exports){
var jade = require("jadum/runtime");
module.exports = function settings(locals) {
var jade_debug = [{ lineno: 1, filename: "views/app/settings.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (require, undefined, userId) {
jade_debug.unshift({ lineno: 0, filename: "views/app/settings.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/app/settings.jade" });
buf.push(require("../partials/app_header").call(this, locals));
jade_debug.shift();
jade_debug.unshift({ lineno: 2, filename: "views/app/settings.jade" });
buf.push("<main class=\"sd-o-main sd-o-frame-content\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: undefined, filename: "views/app/settings.jade" });
buf.push(require("../partials/flash").call(this, locals));
jade_debug.shift();
jade_debug.unshift({ lineno: 4, filename: "views/app/settings.jade" });
if ( userId)
{
jade_debug.unshift({ lineno: 5, filename: "views/app/settings.jade" });
jade_debug.unshift({ lineno: 5, filename: "views/app/settings.jade" });
buf.push("<h2>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: jade_debug[0].filename });
buf.push("Settings");
jade_debug.shift();
jade_debug.shift();
buf.push("</h2>");
jade_debug.shift();
jade_debug.unshift({ lineno: 6, filename: "views/app/settings.jade" });
buf.push("<form name=\"updateUserInfoForm\" method=\"post\" action=\"api/user\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: "views/app/settings.jade" });
buf.push("<label for=\"profilePic\" class=\"sd-t-wire sd-u-display--block\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: jade_debug[0].filename });
buf.push("Change your profile pic:");
jade_debug.shift();
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift({ lineno: 8, filename: "views/app/settings.jade" });
buf.push("<input type=\"file\" id=\"profilePic\" name=\"profilePic\"/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 9, filename: "views/app/settings.jade" });
buf.push("<button type=\"submit\" class=\"sd-c-btn sd-t-wire sd-t-wire-hover sd-t-wire--field\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: jade_debug[0].filename });
buf.push("Update");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("</form>");
jade_debug.shift();
jade_debug.unshift({ lineno: 10, filename: "views/app/settings.jade" });
buf.push("<a href=\"/api/user/logout\" class=\"sd-t-wire sd-u-content-padding--top-bottom\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 10, filename: jade_debug[0].filename });
buf.push("Logout");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift({ lineno: 11, filename: "views/app/settings.jade" });
buf.push("<h2>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 11, filename: jade_debug[0].filename });
buf.push("Donations");
jade_debug.shift();
jade_debug.shift();
buf.push("</h2>");
jade_debug.shift();
jade_debug.unshift({ lineno: 12, filename: "views/app/settings.jade" });
buf.push("<form name=\"donateForm\" action=\"https://www.paypal.com/cgi-bin/webscr\" method=\"post\" target=\"_top\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 13, filename: "views/app/settings.jade" });
buf.push("<input type=\"hidden\" name=\"cmd\" value=\"_xclick-subscriptions\"/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 14, filename: "views/app/settings.jade" });
buf.push("<input type=\"hidden\" name=\"business\" value=\"B863WBL585QR8\"/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 15, filename: "views/app/settings.jade" });
buf.push("<input type=\"hidden\" name=\"lc\" value=\"US\"/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 16, filename: "views/app/settings.jade" });
buf.push("<input type=\"hidden\" name=\"item_name\" value=\"Donate Monthly\"/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 17, filename: "views/app/settings.jade" });
buf.push("<input type=\"hidden\" name=\"no_note\" value=\"1\"/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 18, filename: "views/app/settings.jade" });
buf.push("<input type=\"hidden\" name=\"no_shipping\" value=\"1\"/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 19, filename: "views/app/settings.jade" });
buf.push("<input type=\"hidden\" name=\"src\" value=\"1\"/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 20, filename: "views/app/settings.jade" });
buf.push("<input type=\"hidden\" name=\"a3\" value=\"1.00\"/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 21, filename: "views/app/settings.jade" });
buf.push("<input type=\"hidden\" name=\"p3\" value=\"1\"/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 22, filename: "views/app/settings.jade" });
buf.push("<input type=\"hidden\" name=\"t3\" value=\"M\"/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 23, filename: "views/app/settings.jade" });
buf.push("<input type=\"hidden\" name=\"currency_code\" value=\"USD\"/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 24, filename: "views/app/settings.jade" });
buf.push("<input type=\"hidden\" name=\"bn\" value=\"PP-SubscriptionsBF:btn_subscribeCC_LG.gif:NonHosted\"/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 25, filename: "views/app/settings.jade" });
buf.push("<p>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 25, filename: jade_debug[0].filename });
buf.push("ScribDen runs entirely on our user's donations. We depend on you to help us keep this site running.");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 26, filename: "views/app/settings.jade" });
buf.push("<p>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 26, filename: jade_debug[0].filename });
buf.push("If you wish to contribute, please enter an amount below.");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 27, filename: "views/app/settings.jade" });
buf.push("<p class=\"sd-u-align--center\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 28, filename: "views/app/settings.jade" });
buf.push("<input type=\"text\" name=\"a3\" maxlength=\"200\" required=\"required\" class=\"sd-t-wire sd-t-wire--field\"/>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 29, filename: "views/app/settings.jade" });
buf.push("<p class=\"sd-u-align--center\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 30, filename: "views/app/settings.jade" });
buf.push("<input type=\"image\" src=\"https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif\" border=\"0\" name=\"submit\" alt=\"PayPal - The safer, easier way to pay online!\"/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 31, filename: "views/app/settings.jade" });
buf.push("<img alt=\"\" border=\"0\" src=\"https://www.paypalobjects.com/en_US/i/scr/pixel.gif\" width=\"1\" height=\"1\"/>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 32, filename: "views/app/settings.jade" });
buf.push("<p>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 33, filename: "views/app/settings.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 33, filename: jade_debug[0].filename });
buf.push("This amount will be billed monthly, and can be cancelled at any time, even after just the first month. Just email us at ");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 34, filename: "views/app/settings.jade" });
buf.push("<a href=\"mailto:support@scribden.com?subject=&quot;Cancel Subscription&quot;\" class=\"sd-t-wire sd-t-link\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 34, filename: jade_debug[0].filename });
buf.push("support@scribden.com.");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 35, filename: "views/app/settings.jade" });
buf.push("<p>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 35, filename: jade_debug[0].filename });
buf.push("Regardless of whether or not you decide to contribute, you are a part of what makes ScribDen great! Thank you so much for being here! And if you already contribute, thank you! We really appreciate your help!");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</form>");
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift({ lineno: 37, filename: "views/app/settings.jade" });
jade_debug.unshift({ lineno: 37, filename: "views/app/settings.jade" });
buf.push("<p class=\"sd-t-wire sd-u-content-padding--sides\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 38, filename: "views/app/settings.jade" });
buf.push("<a href=\"/register\" class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 38, filename: jade_debug[0].filename });
buf.push("Register");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift({ lineno: 39, filename: "views/app/settings.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 39, filename: jade_debug[0].filename });
buf.push(" or ");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 40, filename: "views/app/settings.jade" });
buf.push("<a href=\"/\" class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 40, filename: jade_debug[0].filename });
buf.push("login");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift({ lineno: 41, filename: "views/app/settings.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 41, filename: jade_debug[0].filename });
buf.push(" to update your account settings.");
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
jade_debug.shift();}.call(this,"require" in locals_for_with?locals_for_with.require:typeof require!=="undefined"?require:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"userId" in locals_for_with?locals_for_with.userId:typeof userId!=="undefined"?userId:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "include ../partials/app_header\nmain.sd-o-main.sd-o-frame-content\n  include ../partials/flash\n  if userId\n    h2 Settings\n    form(name='updateUserInfoForm' method='post' action='api/user')\n      label.sd-t-wire.sd-u-display--block(for='profilePic') Change your profile pic:\n      input(type='file' id='profilePic' name='profilePic')\n      button.sd-c-btn.sd-t-wire.sd-t-wire-hover.sd-t-wire--field(type='submit') Update\n    a.sd-t-wire.sd-u-content-padding--top-bottom(href='/api/user/logout') Logout\n    h2 Donations\n    form(name='donateForm' action='https://www.paypal.com/cgi-bin/webscr' method='post' target='_top')\n      input(type='hidden' name='cmd' value='_xclick-subscriptions')\n      input(type='hidden' name='business' value='B863WBL585QR8')\n      input(type='hidden' name='lc' value='US')\n      input(type='hidden' name='item_name' value='Donate Monthly')\n      input(type='hidden' name='no_note' value='1')\n      input(type='hidden' name='no_shipping' value='1')\n      input(type='hidden' name='src' value='1')\n      input(type='hidden' name='a3' value='1.00')\n      input(type='hidden' name='p3' value='1')\n      input(type='hidden' name='t3' value='M')\n      input(type='hidden' name='currency_code' value='USD')\n      input(type='hidden' name='bn' value='PP-SubscriptionsBF:btn_subscribeCC_LG.gif:NonHosted')\n      p ScribDen runs entirely on our user's donations. We depend on you to help us keep this site running.\n      p If you wish to contribute, please enter an amount below.\n      p.sd-u-align--center\n        input.sd-t-wire.sd-t-wire--field(type='text' name='a3' maxlength='200' required)\n      p.sd-u-align--center\n        input(type='image' src='https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif' border='0' name='submit' alt='PayPal - The safer, easier way to pay online!')\n        img(alt='' border='0' src='https://www.paypalobjects.com/en_US/i/scr/pixel.gif' width='1' height='1')\n      p\n        span This amount will be billed monthly, and can be cancelled at any time, even after just the first month. Just email us at \n        a.sd-t-wire.sd-t-link(href='mailto:support@scribden.com?subject=\"Cancel Subscription\"') support@scribden.com.\n      p Regardless of whether or not you decide to contribute, you are a part of what makes ScribDen great! Thank you so much for being here! And if you already contribute, thank you! We really appreciate your help!\n  else\n    p.sd-t-wire.sd-u-content-padding--sides\n        a(href='/register').sd-t-wire Register\n        span  or \n        a(href='/').sd-t-wire login\n        span  to update your account settings.");
}
}
},{"../partials/app_header":27,"../partials/flash":29,"jadum/runtime":84}],15:[function(require,module,exports){
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
},{"../partials/flash":29,"../partials/thread_header":33,"jadum/runtime":84}],16:[function(require,module,exports){
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
},{"../partials/app_header":27,"../partials/flash":29,"jadum/runtime":84}],17:[function(require,module,exports){
var jade = require("jadum/runtime");
module.exports = function appHeader(locals) {
var jade_debug = [{ lineno: 1, filename: "views/app_header.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;

jade_debug.unshift({ lineno: 0, filename: "views/app_header.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/app_header.jade" });
buf.push("<header>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "views/app_header.jade" });
buf.push("<nav role=\"navigation\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "views/app_header.jade" });
buf.push("<ul class=\"sd-c-nav\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: "views/app_header.jade" });
buf.push("<li class=\"sd-c-nav-item\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: "views/app_header.jade" });
buf.push("<a href=\"/recent\" aria-label=\"See recently updated threads\" class=\"sd-o-nav-icon sd-o-home-icon\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: jade_debug[0].filename });
buf.push("R");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 6, filename: "views/app_header.jade" });
buf.push("<li class=\"sd-c-nav-item\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: "views/app_header.jade" });
buf.push("<a href=\"/tracked\" aria-label=\"See tracked threads\" class=\"sd-o-nav-icon sd-o-thread-icon\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: jade_debug[0].filename });
buf.push("T");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 8, filename: "views/app_header.jade" });
buf.push("<li class=\"sd-c-nav-item\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: "views/app_header.jade" });
buf.push("<a href=\"/notifications\" aria-label=\"See user notifications\" class=\"sd-o-nav-icon sd-o-notification-icon\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: jade_debug[0].filename });
buf.push("N");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 10, filename: "views/app_header.jade" });
buf.push("<li class=\"sd-c-nav-item\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 11, filename: "views/app_header.jade" });
buf.push("<a href=\"/settings\" aria-label=\"Modify user settings\" class=\"sd-o-nav-icon sd-o-settings-icon\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 11, filename: jade_debug[0].filename });
buf.push("S");
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
jade_debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "header\n  nav(role='navigation')\n    ul.sd-c-nav\n      li.sd-c-nav-item\n        a.sd-o-nav-icon.sd-o-home-icon(href='/recent', aria-label='See recently updated threads') R\n      li.sd-c-nav-item\n        a.sd-o-nav-icon.sd-o-thread-icon(href='/tracked', aria-label='See tracked threads') T\n      li.sd-c-nav-item\n        a.sd-o-nav-icon.sd-o-notification-icon(href='/notifications', aria-label='See user notifications') N\n      li.sd-c-nav-item\n        a.sd-o-nav-icon.sd-o-settings-icon(href='/settings', aria-label='Modify user settings') S\n");
}
}
},{"jadum/runtime":84}],18:[function(require,module,exports){
var jade = require("jadum/runtime");
module.exports = function header(locals) {
var jade_debug = [{ lineno: 1, filename: "views/header.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (navType, thread) {
jade_debug.unshift({ lineno: 0, filename: "views/header.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/header.jade" });
buf.push("<header>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "views/header.jade" });
if ( navType === 'main' || (navType === 'thread' && !thread))
{
jade_debug.unshift({ lineno: 3, filename: "views/header.jade" });
jade_debug.unshift({ lineno: 3, filename: "views/header.jade" });
buf.push("<nav role=\"navigation\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: "views/header.jade" });
buf.push("<ul class=\"sd-c-nav\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: "views/header.jade" });
buf.push("<li class=\"sd-c-nav-item\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 6, filename: "views/header.jade" });
buf.push("<a href=\"/recent\" aria-label=\"See recently updated threads\" class=\"sd-o-nav-icon sd-o-home-icon\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 6, filename: jade_debug[0].filename });
buf.push("R");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 7, filename: "views/header.jade" });
buf.push("<li class=\"sd-c-nav-item\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 8, filename: "views/header.jade" });
buf.push("<a href=\"/tracked\" aria-label=\"See tracked threads\" class=\"sd-o-nav-icon sd-o-thread-icon\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 8, filename: jade_debug[0].filename });
buf.push("T");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 9, filename: "views/header.jade" });
buf.push("<li class=\"sd-c-nav-item\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 10, filename: "views/header.jade" });
buf.push("<a href=\"/notifications\" aria-label=\"See user notifications\" class=\"sd-o-nav-icon sd-o-notification-icon\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 10, filename: jade_debug[0].filename });
buf.push("N");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 11, filename: "views/header.jade" });
buf.push("<li class=\"sd-c-nav-item\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 12, filename: "views/header.jade" });
buf.push("<a href=\"/settings\" aria-label=\"Modify user settings\" class=\"sd-o-nav-icon sd-o-settings-icon\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 12, filename: jade_debug[0].filename });
buf.push("S");
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
}
else if ( navType === 'thread' && thread)
{
jade_debug.unshift({ lineno: 14, filename: "views/header.jade" });
jade_debug.unshift({ lineno: 14, filename: "views/header.jade" });
buf.push("<nav role=\"navigation\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 15, filename: "views/header.jade" });
buf.push("<ul class=\"sd-c-nav\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 16, filename: "views/header.jade" });
buf.push("<li class=\"sd-c-nav-item\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 17, filename: "views/header.jade" });
buf.push("<a href=\"/recent\" aria-label=\"Go back\" class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 17, filename: jade_debug[0].filename });
buf.push("Back");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 18, filename: "views/header.jade" });
buf.push("<li class=\"sd-c-nav-right\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 19, filename: "views/header.jade" });
buf.push("<a" + (jade.attr("href", '/compose/' + thread.id, true, false)) + " aria-label=\"Make a new post\" class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 19, filename: jade_debug[0].filename });
buf.push("Compose");
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
}
else
{
jade_debug.unshift({ lineno: 21, filename: "views/header.jade" });
jade_debug.unshift({ lineno: 21, filename: "views/header.jade" });
buf.push("<h1>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 22, filename: "views/header.jade" });
buf.push("<a href=\"/\" aria-label=\"Go to home\" class=\"sd-t-link\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 22, filename: jade_debug[0].filename });
buf.push("ScribDen");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</h1>");
jade_debug.shift();
jade_debug.unshift({ lineno: 23, filename: "views/header.jade" });
buf.push("<h2>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 23, filename: jade_debug[0].filename });
buf.push("The minimalist forum.");
jade_debug.shift();
jade_debug.shift();
buf.push("</h2>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("</header>");
jade_debug.shift();
jade_debug.shift();}.call(this,"navType" in locals_for_with?locals_for_with.navType:typeof navType!=="undefined"?navType:undefined,"thread" in locals_for_with?locals_for_with.thread:typeof thread!=="undefined"?thread:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "header\n  if navType === 'main' || (navType === 'thread' && !thread)\n    nav(role='navigation')\n      ul.sd-c-nav\n        li.sd-c-nav-item\n          a.sd-o-nav-icon.sd-o-home-icon(href='/recent', aria-label='See recently updated threads') R\n        li.sd-c-nav-item\n          a.sd-o-nav-icon.sd-o-thread-icon(href='/tracked', aria-label='See tracked threads') T\n        li.sd-c-nav-item\n          a.sd-o-nav-icon.sd-o-notification-icon(href='/notifications', aria-label='See user notifications') N\n        li.sd-c-nav-item\n          a.sd-o-nav-icon.sd-o-settings-icon(href='/settings', aria-label='Modify user settings') S\n  else if navType === 'thread' && thread\n    nav(role='navigation')\n      ul.sd-c-nav\n        li.sd-c-nav-item\n          a.sd-t-wire(href='/recent', aria-label='Go back') Back\n        li.sd-c-nav-right\n          a.sd-t-wire(href='/compose/' + thread.id, aria-label='Make a new post') Compose\n  else\n    h1\n      a.sd-t-link(href='/', aria-label='Go to home') ScribDen\n    h2 The minimalist forum.\n");
}
}
},{"jadum/runtime":84}],19:[function(require,module,exports){
var jade = require("jadum/runtime");
module.exports = function about(locals) {
var jade_debug = [{ lineno: 1, filename: "views/home/about.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (require, undefined) {
jade_debug.unshift({ lineno: 0, filename: "views/home/about.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/home/about.jade" });
jade_debug.shift();
jade_debug.unshift({ lineno: 2, filename: "views/home/about.jade" });
jade_debug.shift();
jade_debug.unshift({ lineno: 3, filename: "views/home/about.jade" });
buf.push("<div class=\"sd-u-align--center\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: undefined, filename: "views/home/about.jade" });
buf.push(require("../partials/flash").call(this, locals));
jade_debug.shift();
jade_debug.unshift({ lineno: undefined, filename: "views/home/about.jade" });
buf.push(require("../partials/home_header").call(this, locals));
jade_debug.shift();
jade_debug.unshift({ lineno: 6, filename: "views/home/about.jade" });
buf.push("<main class=\"sd-o-main sd-o-frame-content\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: "views/home/about.jade" });
buf.push("<article>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 8, filename: "views/home/about.jade" });
buf.push("<h2 class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 8, filename: jade_debug[0].filename });
buf.push("Discussion");
jade_debug.shift();
jade_debug.shift();
buf.push("</h2>");
jade_debug.shift();
jade_debug.unshift({ lineno: 9, filename: "views/home/about.jade" });
buf.push("<p class=\"sd-t-wire sd-u-align--left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: jade_debug[0].filename });
buf.push("ScribDen dedicates itself to providing a constructive environment for discussion on the internet. In the age of social media, we communicate with each other now more than ever. While each website has its place and purpose, few are designed to make constructive and welcoming discussion easy and accessible. ScribDen was made in the hopes of filling that gap. While forums can be pretty great places for discussion, they tend to be focused on one area of interest. ScribDen provides a single place to interact in a community with a wide variety of interests, and makes it easy to go from talking about astrophysics to talking about the newest episode of your favorite show, all under one account, and one community.");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</article>");
jade_debug.shift();
jade_debug.unshift({ lineno: 10, filename: "views/home/about.jade" });
buf.push("<article class=\"sd-u-content-padding--top-bottom\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 11, filename: "views/home/about.jade" });
buf.push("<h2 class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 11, filename: jade_debug[0].filename });
buf.push("Minimalism");
jade_debug.shift();
jade_debug.shift();
buf.push("</h2>");
jade_debug.shift();
jade_debug.unshift({ lineno: 12, filename: "views/home/about.jade" });
buf.push("<p class=\"sd-t-wire sd-u-align--left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 12, filename: jade_debug[0].filename });
buf.push("The average website is exceeding 2MB in size. We at ScribDen understand that there are still many people out there with poor internet connections, bandwidth caps, and low-end or old computers. We also understand that data plans for mobile devices can be limited and expensive, depending on where you live, and what you can afford. It’s important to us that we be respectful and mindful of that, and try to keep our application running with the lowest bandwidth footprint possible. We’re a strong proponent of progressive enhancement, whereby users can access the basic content and functionality of our application using any browser or internet connection, while also providing an enhanced version of the page to those with more advanced browser software or greater bandwidth.");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</article>");
jade_debug.shift();
jade_debug.unshift({ lineno: 13, filename: "views/home/about.jade" });
buf.push("<article>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 14, filename: "views/home/about.jade" });
buf.push("<h2 class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 14, filename: jade_debug[0].filename });
buf.push("Accessibility");
jade_debug.shift();
jade_debug.shift();
buf.push("</h2>");
jade_debug.shift();
jade_debug.unshift({ lineno: 15, filename: "views/home/about.jade" });
buf.push("<p class=\"sd-t-wire sd-u-align--left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 15, filename: jade_debug[0].filename });
buf.push("Keeping our application accessible to people of all backgrounds and abilities is important to us. Our goal is to make ScribDen as easy to use as possible, with the hope to reach full 508 compliance. This means we want to make sure ScribDen is accessible to people with disabilities. We are still in the learning process on this, so please share your feedback with us. We want to hear from you and work with you to make sure your needs are met.");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</article>");
jade_debug.shift();
jade_debug.shift();
buf.push("</main>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();}.call(this,"require" in locals_for_with?locals_for_with.require:typeof require!=="undefined"?require:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "//- each action can have its own partial view, and use a model to alter the rendered HTML\n//- http://taunus.bevacqua.io/getting-started#using-jade-as-your-view-engine\ndiv.sd-u-align--center\n  include ../partials/flash\n  include ../partials/home_header\n  main.sd-o-main.sd-o-frame-content\n    article\n      h2.sd-t-wire Discussion\n      p.sd-t-wire.sd-u-align--left ScribDen dedicates itself to providing a constructive environment for discussion on the internet. In the age of social media, we communicate with each other now more than ever. While each website has its place and purpose, few are designed to make constructive and welcoming discussion easy and accessible. ScribDen was made in the hopes of filling that gap. While forums can be pretty great places for discussion, they tend to be focused on one area of interest. ScribDen provides a single place to interact in a community with a wide variety of interests, and makes it easy to go from talking about astrophysics to talking about the newest episode of your favorite show, all under one account, and one community.\n    article.sd-u-content-padding--top-bottom\n      h2.sd-t-wire Minimalism\n      p.sd-t-wire.sd-u-align--left The average website is exceeding 2MB in size. We at ScribDen understand that there are still many people out there with poor internet connections, bandwidth caps, and low-end or old computers. We also understand that data plans for mobile devices can be limited and expensive, depending on where you live, and what you can afford. It’s important to us that we be respectful and mindful of that, and try to keep our application running with the lowest bandwidth footprint possible. We’re a strong proponent of progressive enhancement, whereby users can access the basic content and functionality of our application using any browser or internet connection, while also providing an enhanced version of the page to those with more advanced browser software or greater bandwidth.\n    article\n      h2.sd-t-wire Accessibility\n      p.sd-t-wire.sd-u-align--left Keeping our application accessible to people of all backgrounds and abilities is important to us. Our goal is to make ScribDen as easy to use as possible, with the hope to reach full 508 compliance. This means we want to make sure ScribDen is accessible to people with disabilities. We are still in the learning process on this, so please share your feedback with us. We want to hear from you and work with you to make sure your needs are met.");
}
}
},{"../partials/flash":29,"../partials/home_header":31,"jadum/runtime":84}],20:[function(require,module,exports){
var jade = require("jadum/runtime");
module.exports = function index(locals) {
var jade_debug = [{ lineno: 1, filename: "views/home/index.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (require, undefined) {
jade_debug.unshift({ lineno: 0, filename: "views/home/index.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/home/index.jade" });
jade_debug.shift();
jade_debug.unshift({ lineno: 2, filename: "views/home/index.jade" });
jade_debug.shift();
jade_debug.unshift({ lineno: 3, filename: "views/home/index.jade" });
buf.push("<div class=\"sd-u-align--center\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: undefined, filename: "views/home/index.jade" });
buf.push(require("../partials/flash").call(this, locals));
jade_debug.shift();
jade_debug.unshift({ lineno: undefined, filename: "views/home/index.jade" });
buf.push(require("../partials/home_header").call(this, locals));
jade_debug.shift();
jade_debug.unshift({ lineno: 6, filename: "views/home/index.jade" });
buf.push("<main class=\"sd-o-main\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: "views/home/index.jade" });
buf.push("<form name=\"loginForm\" action=\"/api/user/login\" method=\"post\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 8, filename: "views/home/index.jade" });
buf.push("<div>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: "views/home/index.jade" });
buf.push("<label for=\"username\" class=\"sd-c-form__label--medium\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: jade_debug[0].filename });
buf.push("username:");
jade_debug.shift();
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift({ lineno: 10, filename: "views/home/index.jade" });
buf.push("<input id=\"username\" name=\"username\" type=\"text\" placeholder=\"username\" required=\"required\" class=\"sd-t-wire sd-t-wire--field sd-c-form__field--medium\"/>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 11, filename: "views/home/index.jade" });
buf.push("<div>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 12, filename: "views/home/index.jade" });
buf.push("<label for=\"email\" class=\"sd-c-form__label--medium\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 12, filename: jade_debug[0].filename });
buf.push("email:");
jade_debug.shift();
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift({ lineno: 13, filename: "views/home/index.jade" });
buf.push("<input id=\"email\" name=\"email\" type=\"email\" placeholder=\"email\" required=\"required\" class=\"sd-t-wire sd-t-wire--field sd-c-form__field--medium\"/>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 14, filename: "views/home/index.jade" });
buf.push("<div>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 15, filename: "views/home/index.jade" });
buf.push("<button type=\"submit\" class=\"sd-c-btn sd-t-wire sd-t-wire-hover sd-t-wire--field sd-c-btn\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 15, filename: jade_debug[0].filename });
buf.push("Login");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 16, filename: "views/home/index.jade" });
buf.push("<div>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 17, filename: "views/home/index.jade" });
buf.push("<a href=\"/about\" aria-label=\"About\" class=\"sd-t-wire sd-u-align--center\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 17, filename: jade_debug[0].filename });
buf.push("New to ScribDen?");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 18, filename: "views/home/index.jade" });
buf.push("<div>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 19, filename: "views/home/index.jade" });
buf.push("<a href=\"/register\" aria-label=\"Register\" class=\"sd-t-link sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 19, filename: jade_debug[0].filename });
buf.push("Sign up.");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 20, filename: "views/home/index.jade" });
buf.push("<div>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 21, filename: "views/home/index.jade" });
buf.push("<a href=\"/recent\" aria-label=\"Browse\" class=\"sd-t-link sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 21, filename: jade_debug[0].filename });
buf.push("Or browse.");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</form>");
jade_debug.shift();
jade_debug.shift();
buf.push("</main>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();}.call(this,"require" in locals_for_with?locals_for_with.require:typeof require!=="undefined"?require:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "//- each action can have its own partial view, and use a model to alter the rendered HTML\n//- http://taunus.bevacqua.io/getting-started#using-jade-as-your-view-engine\ndiv.sd-u-align--center\n  include ../partials/flash\n  include ../partials/home_header\n  main.sd-o-main\n    form(name='loginForm' action='/api/user/login' method='post')\n      div\n        label.sd-c-form__label--medium(for='username') username:\n        input.sd-t-wire.sd-t-wire--field.sd-c-form__field--medium(id='username' name='username' type='text' placeholder='username' required)\n      div\n        label.sd-c-form__label--medium(for='email') email:\n        input.sd-t-wire.sd-t-wire--field.sd-c-form__field--medium(id='email' name='email' type='email' placeholder='email' required)\n      div\n        button.sd-c-btn.sd-t-wire.sd-t-wire-hover.sd-t-wire--field.sd-c-btn(type='submit') Login\n      div\n        a.sd-t-wire.sd-u-align--center(href='/about', aria-label='About') New to ScribDen?\n      div\n        a.sd-t-link.sd-t-wire(href='/register', aria-label='Register') Sign up.\n      div\n        a.sd-t-link.sd-t-wire(href='/recent', aria-label='Browse') Or browse.");
}
}
},{"../partials/flash":29,"../partials/home_header":31,"jadum/runtime":84}],21:[function(require,module,exports){
var jade = require("jadum/runtime");
module.exports = function privacy(locals) {
var jade_debug = [{ lineno: 1, filename: "views/home/privacy.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (require, undefined) {
jade_debug.unshift({ lineno: 0, filename: "views/home/privacy.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/home/privacy.jade" });
jade_debug.shift();
jade_debug.unshift({ lineno: 2, filename: "views/home/privacy.jade" });
jade_debug.shift();
jade_debug.unshift({ lineno: 3, filename: "views/home/privacy.jade" });
buf.push("<div class=\"sd-u-align--center\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: undefined, filename: "views/home/privacy.jade" });
buf.push(require("../partials/flash").call(this, locals));
jade_debug.shift();
jade_debug.unshift({ lineno: undefined, filename: "views/home/privacy.jade" });
buf.push(require("../partials/home_header").call(this, locals));
jade_debug.shift();
jade_debug.unshift({ lineno: 6, filename: "views/home/privacy.jade" });
buf.push("<main class=\"sd-o-main sd-o-frame-content\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: "views/home/privacy.jade" });
buf.push("<article>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 8, filename: "views/home/privacy.jade" });
buf.push("<h2 class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 8, filename: jade_debug[0].filename });
buf.push("Privacy Policy");
jade_debug.shift();
jade_debug.shift();
buf.push("</h2>");
jade_debug.shift();
jade_debug.unshift({ lineno: 9, filename: "views/home/privacy.jade" });
buf.push("<section class=\"sd-u-align--left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 10, filename: "views/home/privacy.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 10, filename: jade_debug[0].filename });
buf.push("ScribDen believes that our service should strive to collect as little data about our users as possible, while providing a reliable and pleasant experience. The following addresses what information we gather and how.");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</section>");
jade_debug.shift();
jade_debug.unshift({ lineno: 11, filename: "views/home/privacy.jade" });
buf.push("<section class=\"sd-u-align--left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 12, filename: "views/home/privacy.jade" });
buf.push("<h3 class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 12, filename: jade_debug[0].filename });
buf.push("General Information");
jade_debug.shift();
jade_debug.shift();
buf.push("</h3>");
jade_debug.shift();
jade_debug.unshift({ lineno: 13, filename: "views/home/privacy.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 13, filename: jade_debug[0].filename });
buf.push("ScribDen reserves the right, at our discretion, to change, update or modify this Privacy Policy and/or our Terms of Service at any time, without specific notice to You. Any such change, update or modification will be posted on the Site and will be effective immediately upon posting on the Site. You are encouraged to review the Privacy Policy from time to time in order to determine whether the Privacy Policy impacts you in a manner that would affect your continued use of the Site and related and affiliated Services. Your continued access or use of the Site and related and/or affiliated Services constitutes your consent, acceptance and agreement to the Privacy Policy as updated.");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</section>");
jade_debug.shift();
jade_debug.unshift({ lineno: 14, filename: "views/home/privacy.jade" });
buf.push("<section class=\"sd-u-align--left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 15, filename: "views/home/privacy.jade" });
buf.push("<h3 class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 15, filename: jade_debug[0].filename });
buf.push("What we may collect");
jade_debug.shift();
jade_debug.shift();
buf.push("</h3>");
jade_debug.shift();
jade_debug.unshift({ lineno: 16, filename: "views/home/privacy.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 16, filename: jade_debug[0].filename });
buf.push("We collect your Internet Protocol address for the purpose of fighting spam, malware, identity theft, and the misuse of multiple accounts. We also collect anonymized data about the devices and browsers you use, as well as the times and dates you access them.");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</section>");
jade_debug.shift();
jade_debug.unshift({ lineno: 17, filename: "views/home/privacy.jade" });
buf.push("<section class=\"sd-u-align--left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 18, filename: "views/home/privacy.jade" });
buf.push("<h3 class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 18, filename: jade_debug[0].filename });
buf.push("Email communications");
jade_debug.shift();
jade_debug.shift();
buf.push("</h3>");
jade_debug.shift();
jade_debug.unshift({ lineno: 19, filename: "views/home/privacy.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 19, filename: jade_debug[0].filename });
buf.push("We may occasionally need to email you some administrative information, tell you something important about your account or changes to our services, or update you on new policies. We will never email you to ask for your password or other account information.");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</section>");
jade_debug.shift();
jade_debug.unshift({ lineno: 20, filename: "views/home/privacy.jade" });
buf.push("<section class=\"sd-u-align--left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 21, filename: "views/home/privacy.jade" });
buf.push("<h3 class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 21, filename: jade_debug[0].filename });
buf.push("Disclosure of your information");
jade_debug.shift();
jade_debug.shift();
buf.push("</h3>");
jade_debug.shift();
jade_debug.unshift({ lineno: 22, filename: "views/home/privacy.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 22, filename: jade_debug[0].filename });
buf.push("The information we collect is used to provide and improve ScribDen Services and prevent abuse. We don’t sell personal information about our users to any third party. However, we may share your personal information with third parties either with your consent, or when we have a good faith belief it is required by law, such as pursuant to a subpoena or other judicial or administrative order.");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 23, filename: "views/home/privacy.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 24, filename: "views/home/privacy.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 24, filename: jade_debug[0].filename });
buf.push("If we’re going to release your information, our policy is to provide you with advance notice unless we are prohibited from doing so by law or court order (e.g., under laws such as ");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 25, filename: "views/home/privacy.jade" });
buf.push("<a href=\"https://www.law.cornell.edu/uscode/text/18/2705\" class=\"sd-t-link\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 25, filename: jade_debug[0].filename });
buf.push("18 U.S.C. § 2705(b)");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift({ lineno: 26, filename: "views/home/privacy.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 26, filename: jade_debug[0].filename });
buf.push(", also known as gag orders). If you do not challenge the disclosure request, we may be legally required to turn over your information.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 27, filename: "views/home/privacy.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 27, filename: jade_debug[0].filename });
buf.push("We may disclose your information without providing you with prior notice if we believe it’s necessary to prevent imminent and serious bodily harm to a person. In that case, we will endeavor to provide you with post-disclosure notice when permitted by law.");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 28, filename: "views/home/privacy.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 28, filename: jade_debug[0].filename });
buf.push("We will independently object to requests for access to information about users of our site that we believe to be improper.");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 29, filename: "views/home/privacy.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 29, filename: jade_debug[0].filename });
buf.push("If we’re acquired by or merged with another company and your information becomes subject to a different privacy policy, we’ll notify you before the transfer. You can opt out of the new policy by deleting your account during the notice period.");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</section>");
jade_debug.shift();
jade_debug.unshift({ lineno: 30, filename: "views/home/privacy.jade" });
buf.push("<section class=\"sd-u-align--left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 31, filename: "views/home/privacy.jade" });
buf.push("<h3 class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 31, filename: jade_debug[0].filename });
buf.push("Public user content");
jade_debug.shift();
jade_debug.shift();
buf.push("</h3>");
jade_debug.shift();
jade_debug.unshift({ lineno: 32, filename: "views/home/privacy.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 32, filename: jade_debug[0].filename });
buf.push("By default, anything shared on ScribDen is public. This means that everyone, including search engines, will be able to see it.");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</section>");
jade_debug.shift();
jade_debug.unshift({ lineno: 33, filename: "views/home/privacy.jade" });
buf.push("<section class=\"sd-u-align--left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 34, filename: "views/home/privacy.jade" });
buf.push("<h3 class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 34, filename: jade_debug[0].filename });
buf.push("Cookies");
jade_debug.shift();
jade_debug.shift();
buf.push("</h3>");
jade_debug.shift();
jade_debug.unshift({ lineno: 35, filename: "views/home/privacy.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 35, filename: jade_debug[0].filename });
buf.push(" When you log into ScribDen, we will send a cookie (small text files containing a string of alphanumeric characters) - to your computer. ScribDen utilizes both session cookies and persistent cookies. A session cookies disappears after you close your browser. A persistent cookie remains after you close your browser and may be used by your browser on subsequent visits to ScribDen. The only thing we use it for is to keep you logged in to our service. Persistent cookies can be removed by you at anytime. Review your web browser's \"Help\" file to learn the proper way to modify your cookie settings.");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</section>");
jade_debug.shift();
jade_debug.unshift({ lineno: 36, filename: "views/home/privacy.jade" });
buf.push("<section class=\"sd-u-align--left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 37, filename: "views/home/privacy.jade" });
buf.push("<h3 class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 37, filename: jade_debug[0].filename });
buf.push("Data Storage");
jade_debug.shift();
jade_debug.shift();
buf.push("</h3>");
jade_debug.shift();
jade_debug.unshift({ lineno: 38, filename: "views/home/privacy.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 38, filename: jade_debug[0].filename });
buf.push("ScribDen uses third-party vendors and hosting partners, such as Amazon, to provide the necessary hardware, software, networking, storage, and related technology we need to run ScribDen. Although ScribDen owns its code, databases, and all rights to the ScribDen application, you retain all rights to your content.");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</section>");
jade_debug.shift();
jade_debug.unshift({ lineno: 39, filename: "views/home/privacy.jade" });
buf.push("<section class=\"sd-u-align--left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 40, filename: "views/home/privacy.jade" });
buf.push("<h3 class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 40, filename: jade_debug[0].filename });
buf.push("Data security");
jade_debug.shift();
jade_debug.shift();
buf.push("</h3>");
jade_debug.shift();
jade_debug.unshift({ lineno: 41, filename: "views/home/privacy.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 41, filename: jade_debug[0].filename });
buf.push("We use encryption (HTTPS/TLS) to protect data transmitted to and from our site. However, no data transmission over the Internet is 100% secure, so we can’t guarantee the absolute security of this data. You use the service at your own risk, and you are responsible for taking reasonable measures to secure your account (such as keeping your password secret).");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</section>");
jade_debug.shift();
jade_debug.unshift({ lineno: 42, filename: "views/home/privacy.jade" });
buf.push("<section class=\"sd-u-align--left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 43, filename: "views/home/privacy.jade" });
buf.push("<h3 class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 43, filename: jade_debug[0].filename });
buf.push("Children");
jade_debug.shift();
jade_debug.shift();
buf.push("</h3>");
jade_debug.shift();
jade_debug.unshift({ lineno: 44, filename: "views/home/privacy.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 44, filename: jade_debug[0].filename });
buf.push("Medium Services are intended for general audiences and are not directed to children under 13. We don’t knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us here. If we learn that a child under 13 has provided us with personal information, we take steps to remove such information and terminate the child’s account.");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</section>");
jade_debug.shift();
jade_debug.shift();
buf.push("</article>");
jade_debug.shift();
jade_debug.shift();
buf.push("</main>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();}.call(this,"require" in locals_for_with?locals_for_with.require:typeof require!=="undefined"?require:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "//- each action can have its own partial view, and use a model to alter the rendered HTML\n//- http://taunus.bevacqua.io/getting-started#using-jade-as-your-view-engine\ndiv.sd-u-align--center\n  include ../partials/flash\n  include ../partials/home_header\n  main.sd-o-main.sd-o-frame-content\n    article\n      h2.sd-t-wire Privacy Policy\n      section.sd-u-align--left\n        p.sd-t-wire ScribDen believes that our service should strive to collect as little data about our users as possible, while providing a reliable and pleasant experience. The following addresses what information we gather and how.\n      section.sd-u-align--left\n        h3.sd-t-wire General Information\n        p.sd-t-wire ScribDen reserves the right, at our discretion, to change, update or modify this Privacy Policy and/or our Terms of Service at any time, without specific notice to You. Any such change, update or modification will be posted on the Site and will be effective immediately upon posting on the Site. You are encouraged to review the Privacy Policy from time to time in order to determine whether the Privacy Policy impacts you in a manner that would affect your continued use of the Site and related and affiliated Services. Your continued access or use of the Site and related and/or affiliated Services constitutes your consent, acceptance and agreement to the Privacy Policy as updated.\n      section.sd-u-align--left\n        h3.sd-t-wire What we may collect\n        p.sd-t-wire We collect your Internet Protocol address for the purpose of fighting spam, malware, identity theft, and the misuse of multiple accounts. We also collect anonymized data about the devices and browsers you use, as well as the times and dates you access them.\n      section.sd-u-align--left\n        h3.sd-t-wire Email communications\n        p.sd-t-wire We may occasionally need to email you some administrative information, tell you something important about your account or changes to our services, or update you on new policies. We will never email you to ask for your password or other account information.\n      section.sd-u-align--left\n        h3.sd-t-wire Disclosure of your information\n        p.sd-t-wire The information we collect is used to provide and improve ScribDen Services and prevent abuse. We don’t sell personal information about our users to any third party. However, we may share your personal information with third parties either with your consent, or when we have a good faith belief it is required by law, such as pursuant to a subpoena or other judicial or administrative order.\n        p.sd-t-wire\n          span If we’re going to release your information, our policy is to provide you with advance notice unless we are prohibited from doing so by law or court order (e.g., under laws such as \n          a.sd-t-link(href='https://www.law.cornell.edu/uscode/text/18/2705') 18 U.S.C. § 2705(b)\n          span , also known as gag orders). If you do not challenge the disclosure request, we may be legally required to turn over your information.\n        p.sd-t-wire We may disclose your information without providing you with prior notice if we believe it’s necessary to prevent imminent and serious bodily harm to a person. In that case, we will endeavor to provide you with post-disclosure notice when permitted by law.\n        p.sd-t-wire We will independently object to requests for access to information about users of our site that we believe to be improper.\n        p.sd-t-wire If we’re acquired by or merged with another company and your information becomes subject to a different privacy policy, we’ll notify you before the transfer. You can opt out of the new policy by deleting your account during the notice period.\n      section.sd-u-align--left\n        h3.sd-t-wire Public user content\n        p.sd-t-wire By default, anything shared on ScribDen is public. This means that everyone, including search engines, will be able to see it.\n      section.sd-u-align--left\n        h3.sd-t-wire Cookies\n        p.sd-t-wire  When you log into ScribDen, we will send a cookie (small text files containing a string of alphanumeric characters) - to your computer. ScribDen utilizes both session cookies and persistent cookies. A session cookies disappears after you close your browser. A persistent cookie remains after you close your browser and may be used by your browser on subsequent visits to ScribDen. The only thing we use it for is to keep you logged in to our service. Persistent cookies can be removed by you at anytime. Review your web browser's \"Help\" file to learn the proper way to modify your cookie settings.\n      section.sd-u-align--left\n        h3.sd-t-wire Data Storage\n        p.sd-t-wire ScribDen uses third-party vendors and hosting partners, such as Amazon, to provide the necessary hardware, software, networking, storage, and related technology we need to run ScribDen. Although ScribDen owns its code, databases, and all rights to the ScribDen application, you retain all rights to your content.\n      section.sd-u-align--left\n        h3.sd-t-wire Data security\n        p.sd-t-wire We use encryption (HTTPS/TLS) to protect data transmitted to and from our site. However, no data transmission over the Internet is 100% secure, so we can’t guarantee the absolute security of this data. You use the service at your own risk, and you are responsible for taking reasonable measures to secure your account (such as keeping your password secret).\n      section.sd-u-align--left\n        h3.sd-t-wire Children\n        p.sd-t-wire Medium Services are intended for general audiences and are not directed to children under 13. We don’t knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us here. If we learn that a child under 13 has provided us with personal information, we take steps to remove such information and terminate the child’s account.\n        ");
}
}
},{"../partials/flash":29,"../partials/home_header":31,"jadum/runtime":84}],22:[function(require,module,exports){
var jade = require("jadum/runtime");
module.exports = function register(locals) {
var jade_debug = [{ lineno: 1, filename: "views/home/register.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (require, undefined) {
jade_debug.unshift({ lineno: 0, filename: "views/home/register.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/home/register.jade" });
buf.push("<div class=\"sd-u-align--center\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: undefined, filename: "views/home/register.jade" });
buf.push(require("../partials/flash").call(this, locals));
jade_debug.shift();
jade_debug.unshift({ lineno: undefined, filename: "views/home/register.jade" });
buf.push(require("../partials/home_header").call(this, locals));
jade_debug.shift();
jade_debug.unshift({ lineno: 4, filename: "views/home/register.jade" });
buf.push("<main class=\"sd-o-main\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: "views/home/register.jade" });
buf.push("<form name=\"registerForm\" action=\"/api/user/register\" method=\"post\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 6, filename: "views/home/register.jade" });
buf.push("<div>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: "views/home/register.jade" });
buf.push("<label for=\"username\" class=\"sd-c-form__label--medium\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: jade_debug[0].filename });
buf.push("username:");
jade_debug.shift();
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift({ lineno: 8, filename: "views/home/register.jade" });
buf.push("<input id=\"username\" name=\"username\" type=\"text\" placeholder=\"username\" maxlength=\"15\" pattern=\"[a-z0-9_-]{3,15}\" required=\"required\" class=\"sd-t-wire sd-t-wire--field\"/>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 9, filename: "views/home/register.jade" });
buf.push("<div>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 10, filename: "views/home/register.jade" });
buf.push("<label for=\"email\" class=\"sd-c-form__label--medium\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 10, filename: jade_debug[0].filename });
buf.push("email:");
jade_debug.shift();
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift({ lineno: 11, filename: "views/home/register.jade" });
buf.push("<input id=\"email\" name=\"email\" type=\"email\" placeholder=\"email\" maxlength=\"254\" required=\"required\" class=\"sd-t-wire sd-t-wire--field\"/>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 12, filename: "views/home/register.jade" });
buf.push("<div>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 13, filename: "views/home/register.jade" });
buf.push("<button type=\"submit\" class=\"sd-c-btn sd-t-wire sd-t-wire-hover sd-t-wire--field sd-c-btn\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 13, filename: jade_debug[0].filename });
buf.push("Register");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</form>");
jade_debug.shift();
jade_debug.shift();
buf.push("</main>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();}.call(this,"require" in locals_for_with?locals_for_with.require:typeof require!=="undefined"?require:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "div.sd-u-align--center\n  include ../partials/flash\n  include ../partials/home_header\n  main.sd-o-main\n    form(name='registerForm' action='/api/user/register' method='post')\n      div\n        label.sd-c-form__label--medium(for='username') username:\n        input.sd-t-wire.sd-t-wire--field(id='username' name='username' type='text' placeholder='username' maxlength='15' pattern='[a-z0-9_-]{3,15}' required)\n      div\n        label.sd-c-form__label--medium(for='email') email:\n        input.sd-t-wire.sd-t-wire--field(id='email' name='email' type='email' placeholder='email' maxlength='254' required)\n      div\n        button.sd-c-btn.sd-t-wire.sd-t-wire-hover.sd-t-wire--field.sd-c-btn(type='submit') Register");
}
}
},{"../partials/flash":29,"../partials/home_header":31,"jadum/runtime":84}],23:[function(require,module,exports){
var jade = require("jadum/runtime");
module.exports = function tos(locals) {
var jade_debug = [{ lineno: 1, filename: "views/home/tos.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (require, undefined) {
jade_debug.unshift({ lineno: 0, filename: "views/home/tos.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/home/tos.jade" });
jade_debug.shift();
jade_debug.unshift({ lineno: 2, filename: "views/home/tos.jade" });
jade_debug.shift();
jade_debug.unshift({ lineno: 3, filename: "views/home/tos.jade" });
buf.push("<div class=\"sd-u-align--center\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: undefined, filename: "views/home/tos.jade" });
buf.push(require("../partials/flash").call(this, locals));
jade_debug.shift();
jade_debug.unshift({ lineno: undefined, filename: "views/home/tos.jade" });
buf.push(require("../partials/home_header").call(this, locals));
jade_debug.shift();
jade_debug.unshift({ lineno: 6, filename: "views/home/tos.jade" });
buf.push("<main class=\"sd-o-main sd-o-frame-content\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: "views/home/tos.jade" });
buf.push("<article>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 8, filename: "views/home/tos.jade" });
buf.push("<h2 class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 8, filename: jade_debug[0].filename });
buf.push("Terms of Service");
jade_debug.shift();
jade_debug.shift();
buf.push("</h2>");
jade_debug.shift();
jade_debug.unshift({ lineno: 9, filename: "views/home/tos.jade" });
buf.push("<section class=\"sd-u-align--left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 10, filename: "views/home/tos.jade" });
buf.push("<h3 class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 10, filename: jade_debug[0].filename });
buf.push("I. ACCEPTANCE OF TERMS");
jade_debug.shift();
jade_debug.shift();
buf.push("</h3>");
jade_debug.shift();
jade_debug.unshift({ lineno: 11, filename: "views/home/tos.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 11, filename: jade_debug[0].filename });
buf.push("Hexelberry Studios, ScribDen.com, (\"ScribDen\" or \"Service\") provides the following service to you (\"You\" or \"User\"), subject to these Terms of Service (\"TOS\"), which may be updated periodically without prior notice. BY COMPLETING THE REGISTRATION PROCESS AND/OR USING THE SERVICE YOU HEREBY AGREE THAT YOU ARE ELIGIBLE FOR A SCRIBDEN ACCOUNT AND ARE BOUND BY THESE TERMS AND CONDITIONS, AS DESCRIBED BELOW. Your use of the Service implies your consent to the TOS. It is your responsibility to check if there have been changes to the TOS. Failure to comply with these TOS may result in account suspension, or account deletion at any time, without prior notice.");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</section>");
jade_debug.shift();
jade_debug.unshift({ lineno: 12, filename: "views/home/tos.jade" });
buf.push("<section class=\"sd-u-align--left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 13, filename: "views/home/tos.jade" });
buf.push("<h3 class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 13, filename: jade_debug[0].filename });
buf.push("II. YOUR REGISTRATION OBLIGATIONS");
jade_debug.shift();
jade_debug.shift();
buf.push("</h3>");
jade_debug.shift();
jade_debug.unshift({ lineno: 14, filename: "views/home/tos.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 14, filename: jade_debug[0].filename });
buf.push("Account registration is required in order to create a ScribDen account. During registration, all users are required to provide accurate, complete, and current information about themselves in all required fields. Should any of your own information change after submitting it to ScribDen, you are required to update that information as soon as possible. Should ScribDen suspect that your personal information is not complete, current, or accurate, your Account may be suspended or terminated without further notice. ScribDen is committed to being a safe and secure environment for all its users. You must be at least 13 years of age to use the Service. Users who are found to be under 13 years of age may be suspended from the Service without notice.");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</section>");
jade_debug.shift();
jade_debug.unshift({ lineno: 15, filename: "views/home/tos.jade" });
buf.push("<section class=\"sd-u-align--left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 16, filename: "views/home/tos.jade" });
buf.push("<h3 class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 16, filename: jade_debug[0].filename });
buf.push("III. SCRIBDEN.COM PRIVACY POLICY");
jade_debug.shift();
jade_debug.shift();
buf.push("</h3>");
jade_debug.shift();
jade_debug.unshift({ lineno: 17, filename: "views/home/tos.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 17, filename: jade_debug[0].filename });
buf.push("Your use of the Service is subject to ScribDen’s privacy policy. For information on ScribDen’s privacy practices, please see the entire privacy policy at ");
jade_debug.shift();
jade_debug.unshift({ lineno: 18, filename: "views/home/tos.jade" });
buf.push("<a href=\"/privacy\" class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 18, filename: jade_debug[0].filename });
buf.push("http://www.scribden.com/privacy.");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</section>");
jade_debug.shift();
jade_debug.unshift({ lineno: 19, filename: "views/home/tos.jade" });
buf.push("<section class=\"sd-u-align--left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 20, filename: "views/home/tos.jade" });
buf.push("<h3 class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 20, filename: jade_debug[0].filename });
buf.push("IV. INDEMNITY");
jade_debug.shift();
jade_debug.shift();
buf.push("</h3>");
jade_debug.shift();
jade_debug.unshift({ lineno: 21, filename: "views/home/tos.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 21, filename: jade_debug[0].filename });
buf.push("You agree to indemnify and hold ScribDen, and its subsidiaries, affiliates, officers, agents, co-branders or other partners, and employees, harmless from any alleged claim or demand, including reasonable attorney fees, made by any third party due to or arising out of your Content, your use of the Service, your connection to the Service, your violation of the TOS, or your violation of any rights of others, whether you are a registered user or not. The user is solely responsible for their actions when using the Service, including, but not limited to, costs incurred for Internet access.");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</section>");
jade_debug.shift();
jade_debug.unshift({ lineno: 22, filename: "views/home/tos.jade" });
buf.push("<section class=\"sd-u-align--left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 23, filename: "views/home/tos.jade" });
buf.push("<h3 class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 23, filename: jade_debug[0].filename });
buf.push("V. SPECIAL ADMONITIONS FOR INTERNATIONAL USE");
jade_debug.shift();
jade_debug.shift();
buf.push("</h3>");
jade_debug.shift();
jade_debug.unshift({ lineno: 24, filename: "views/home/tos.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 24, filename: jade_debug[0].filename });
buf.push("Recognizing the global nature of the Internet, you agree to comply with all local laws regarding online conduct and acceptable Content. Specifically, you agree to comply with all applicable laws regarding the transmission of technical data exported from the United States and the country in which you reside.");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</section>");
jade_debug.shift();
jade_debug.unshift({ lineno: 25, filename: "views/home/tos.jade" });
buf.push("<section class=\"sd-u-align--left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 26, filename: "views/home/tos.jade" });
buf.push("<h3 class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 26, filename: jade_debug[0].filename });
buf.push("VI. GENERAL PRACTICES REGARDING USE AND STORAGE");
jade_debug.shift();
jade_debug.shift();
buf.push("</h3>");
jade_debug.shift();
jade_debug.unshift({ lineno: 27, filename: "views/home/tos.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 27, filename: jade_debug[0].filename });
buf.push("You acknowledge that ScribDen may be required to send you emails regarding your use of the Service. ScribDen will never ask you to submit personal information or verify your Account information in the form of an email. Should you receive any such communications, please do not respond, and forward it to admin@scribden.com at once.");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</section>");
jade_debug.shift();
jade_debug.unshift({ lineno: 28, filename: "views/home/tos.jade" });
buf.push("<section class=\"sd-u-align--left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 29, filename: "views/home/tos.jade" });
buf.push("<h3 class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 29, filename: jade_debug[0].filename });
buf.push("VII. MODIFICATIONS TO SERVICE");
jade_debug.shift();
jade_debug.shift();
buf.push("</h3>");
jade_debug.shift();
jade_debug.unshift({ lineno: 30, filename: "views/home/tos.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 30, filename: jade_debug[0].filename });
buf.push("ScribDen reserves the right to modify or discontinue, temporarily or permanently, the Service (or any part thereof) with or without notice at any time. You agree that ScribDen shall not be held liable to you or to any third party for any modification, suspension, or discontinuance of the Service.");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</section>");
jade_debug.shift();
jade_debug.unshift({ lineno: 31, filename: "views/home/tos.jade" });
buf.push("<section class=\"sd-u-align--left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 32, filename: "views/home/tos.jade" });
buf.push("<h3 class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 32, filename: jade_debug[0].filename });
buf.push("VIII. NO RESALE OF SERVICE");
jade_debug.shift();
jade_debug.shift();
buf.push("</h3>");
jade_debug.shift();
jade_debug.unshift({ lineno: 33, filename: "views/home/tos.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 33, filename: jade_debug[0].filename });
buf.push("You agree not to reproduce, duplicate, copy, sell, resell, or exploit any portion of the Service, use of the Service, or access to the Service.");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</section>");
jade_debug.shift();
jade_debug.unshift({ lineno: 34, filename: "views/home/tos.jade" });
buf.push("<section class=\"sd-u-align--left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 35, filename: "views/home/tos.jade" });
buf.push("<h3 class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 35, filename: jade_debug[0].filename });
buf.push("IX. TERMINATION");
jade_debug.shift();
jade_debug.shift();
buf.push("</h3>");
jade_debug.shift();
jade_debug.unshift({ lineno: 36, filename: "views/home/tos.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 36, filename: jade_debug[0].filename });
buf.push("By using the ScribDen service, you hereby acknowledge and agree that ScribDen may, at its sole discretion, block, restrict, or terminate access; suspend or delete any Account; and flag or remove any Content found within the Service, for any reason, at any time, without prior notice.");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 37, filename: "views/home/tos.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 38, filename: "views/home/tos.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 38, filename: jade_debug[0].filename });
buf.push("Spam or Malicious Search Engine Optimization (“SEO”):");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 39, filename: "views/home/tos.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 39, filename: jade_debug[0].filename });
buf.push(" If you engage in behavior that is inconsistent with ordinary use of the Service, as described in the TOS, including, but not limited to, posting Content that contains malicious SEO optimizations; using bots to spam accounts and/or obtain private information from ScribDen users; or creating an account for strictly commercial purposes, we reserve the right to flag, restrict, or terminate your Account at any time without notice.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 40, filename: "views/home/tos.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 41, filename: "views/home/tos.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 41, filename: jade_debug[0].filename });
buf.push("Offensive content:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 42, filename: "views/home/tos.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 42, filename: jade_debug[0].filename });
buf.push(" ScribDen is a social media platform that falls under the DMCA Safe Harbor Agreement and, as such, cannot be held responsible for any user-generated Content that appears on its Service. Without imposing legal accountability where none exists, ScribDen reserves the right, at its sole discretion, to suspend any Account, remove any Content, and/or restrict access to any part of the Service that contains full nudity, violence, obscenity, gang-related Content, hate-based Content based on racial, ethnic, gender, transgender, disability, or sexual orientation, harassment of other users, endangerment to minors, incitation to violence or criminal activity, violation of another person’s intellectual property rights, or Content that is otherwise offensive or inappropriate under the TOS, in order to maintain a safe environment for all of its users.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 43, filename: "views/home/tos.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 44, filename: "views/home/tos.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 44, filename: jade_debug[0].filename });
buf.push("U.S. Court orders and Police investigations:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 45, filename: "views/home/tos.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 45, filename: jade_debug[0].filename });
buf.push(" ScribDen shall not be held responsible for retaining any user Content or information that has been deleted or purged during the ordinary course of business.");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</section>");
jade_debug.shift();
jade_debug.unshift({ lineno: 46, filename: "views/home/tos.jade" });
buf.push("<section class=\"sd-u-align--left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 47, filename: "views/home/tos.jade" });
buf.push("<h3 class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 47, filename: jade_debug[0].filename });
buf.push("X. Content");
jade_debug.shift();
jade_debug.shift();
buf.push("</h3>");
jade_debug.shift();
jade_debug.unshift({ lineno: 48, filename: "views/home/tos.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 48, filename: jade_debug[0].filename });
buf.push("ScribDen falls under the DMCA Safe Harbor Agreement and cannot control, or be held responsible or liable, for any of the Content that appears on the Service. Without limiting the generality of the foregoing, ScribDen imposes certain guidelines to promote the safety and security of all of its users. By using the Service, you hereby agree to comply with the following guidelines for posting Content on the Service. Failure to comply with the guidelines set forth below may result in flagging or restricting access to any and all Content posted to the Service, deletion of said Content, and/or suspension of your Account without further notice:");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 49, filename: "views/home/tos.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 50, filename: "views/home/tos.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 50, filename: jade_debug[0].filename });
buf.push("Offensive and Inappropriate Content:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 51, filename: "views/home/tos.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 51, filename: jade_debug[0].filename });
buf.push("Should any Content that you have posted be reported to ScribDen as being offensive or inappropriate, ScribDen has the right to flag, restrict access, or delete said Content at any time without prior notice. In addition, ScribDen might call upon you to retract or modify the Content in question within a reasonable amount of time, as determined by the ScribDen staff. Should you fail to meet such a request, ScribDen may flag, restrict access, delete said Content, or terminate your Account at its sole discretion without assuming control, responsibility, or liability for the Content posted on the Service under the terms of the DMCA Safe Harbor Agreement. Should Content be reported to ScribDen as containing full nudity, violence, obscenity, gang-related Content, hate-based Content based on racial, ethnic, gender, transgender, disability, or sexual orientation, harassment of other users, endangerment to minors, incitation to violence or criminal activity, violation of another person’s intellectual property rights, or Content that is otherwise offensive or inappropriate under the TOS, ScribDen reserves the right to flag, restrict access, and/or delete said Content and/or suspend your Account at any time without notice;");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 52, filename: "views/home/tos.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 53, filename: "views/home/tos.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 53, filename: jade_debug[0].filename });
buf.push("No Control or Liability for User-Generated Content on the Service:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 54, filename: "views/home/tos.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 54, filename: jade_debug[0].filename });
buf.push("ScribDen claims no ownership or control over any Content posted by its users. The author retains all patent, trademarks, and copyrights to all posted Content, and is fully responsible for protecting said rights. While ScribDen will comply with all lawful DMCA claims and remove copyright- and/or trademark-protected Content in a timely manner, it is not responsible for policing said rights for its users. By posting Content to ScribDen, you hereby acknowledge and agree that you have all rights necessary to post such Content (and for ScribDen to serve such Content) without violation of any laws or regulations, and/or intellectual property or other rights of third parties;");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 55, filename: "views/home/tos.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 56, filename: "views/home/tos.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 56, filename: jade_debug[0].filename });
buf.push("Content Delivery and Subscription Fees:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 57, filename: "views/home/tos.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 57, filename: jade_debug[0].filename });
buf.push("ScribDen reserves the right, without limitation except by law, to serve any user Content on the web, through downloadable clients, mobile platforms, and otherwise;");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 58, filename: "views/home/tos.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 59, filename: "views/home/tos.jade" });
buf.push("<strong>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 59, filename: jade_debug[0].filename });
buf.push("No Liability for Content Accuracy, Reliability, or Legality:");
jade_debug.shift();
jade_debug.shift();
buf.push("</strong>");
jade_debug.shift();
jade_debug.unshift({ lineno: 60, filename: "views/home/tos.jade" });
buf.push("<span>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 60, filename: jade_debug[0].filename });
buf.push("You hereby acknowledge that ScribDen does not pre-screen Content, but that ScribDen shall have the right (but not the obligation), at its sole discretion, to remove or refuse to remove any Content found on the Service at any time without prior notice. Without limiting the foregoing, ScribDen shall have the right, but not the obligation, to remove any Content that violates the TOS or is otherwise objectionable, or that infringes or is alleged to infringe upon, intellectual property rights. You agree that you must evaluate, and bear all risks associated with, the use of any Content that appears on the Service, including any reliance on the accuracy, completeness, or usefulness of such Content. Furthermore, ScribDen reserves the right to limit access to your Account if you are found to be in violation of the TOS, including without limitation the User Conduct described below, by flagging, restricting access or deleting Content, suspending or deleting your Account, and/or removing your information from the user directory, search engine, and all other methods used to identify ScribDen users at any time without prior notice;");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</section>");
jade_debug.shift();
jade_debug.unshift({ lineno: 61, filename: "views/home/tos.jade" });
buf.push("<section class=\"sd-u-align--left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 62, filename: "views/home/tos.jade" });
buf.push("<h3 class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 62, filename: jade_debug[0].filename });
buf.push("XI. SCRIBDEN.COM PROPRIETARY RIGHTS");
jade_debug.shift();
jade_debug.shift();
buf.push("</h3>");
jade_debug.shift();
jade_debug.unshift({ lineno: 63, filename: "views/home/tos.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 63, filename: jade_debug[0].filename });
buf.push("You acknowledge and agree that the Service, and any necessary software used in connection with the Service (referred to as \"Software\"), may contain proprietary and confidential information that is protected by applicable laws governing intellectual property, proprietary rights and the like. All ScribDen code and specifications, and all other code and specifications for the Software and the operation of the Service, are subject to their express or implied licenses. You further acknowledge and agree that Content contained in information presented to you through the Service is protected by copyrights, trademarks, service marks, patents or other proprietary rights and laws. Except as expressly authorized by ScribDen, you agree not to modify, rent, lease, sell, distribute, or create derivative works based on the Content, the Service or the Software, in whole or in part.￼");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</section>");
jade_debug.shift();
jade_debug.unshift({ lineno: 64, filename: "views/home/tos.jade" });
buf.push("<section class=\"sd-u-align--left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 65, filename: "views/home/tos.jade" });
buf.push("<h3 class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 65, filename: jade_debug[0].filename });
buf.push("XII. USER CONDUCT");
jade_debug.shift();
jade_debug.shift();
buf.push("</h3>");
jade_debug.shift();
jade_debug.unshift({ lineno: 66, filename: "views/home/tos.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 66, filename: jade_debug[0].filename });
buf.push("You understand that all Content, including without limitation, all information, data, text, software, music, sound, photographs, graphics, video, messages, or other materials, whether publicly posted or privately transmitted, are the sole responsibility of the user who posted the Content. ScribDen does not control Content posted via the Service and, as such, does not guarantee the validity of such Content. You also understand that by using the Service, you may be exposed to Content that is offensive, indecent, or objectionable. Should Content be found or reported to be in violation with, but not limited to, the following terms, ScribDen may, at its sole discretion, flag, restrict access, delete, terminate the Account, or take any other actions that it deems necessary to enforce the spirit of the TOS.");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 67, filename: "views/home/tos.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 67, filename: jade_debug[0].filename });
buf.push("You agree to NOT use the Service to:");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 68, filename: "views/home/tos.jade" });
buf.push("<ul class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 69, filename: "views/home/tos.jade" });
buf.push("<li>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 69, filename: jade_debug[0].filename });
buf.push("Upload, post or otherwise transmit any Content that is unlawful, harmful, threatening, abusive, harassing, tortuous, defamatory, vulgar, obscene, libelous, invasive to another's privacy (including, but not limited to, posting the address, email, phone number, or any other contact information without the written consent of the owner of such information), or Content containing full nudity, violence, obscenity, gang-related Content, hate-based Content based on racial, ethnic, gender, transgender, disability, or sexual orientation, harassment of other users, endangerment to minors, incitation to violence or criminal activity, violation of another person’s intellectual property rights, or Content that is otherwise offensive or inappropriate under the TOS;");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 70, filename: "views/home/tos.jade" });
buf.push("<li>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 70, filename: jade_debug[0].filename });
buf.push("Impersonate any person or entity, including, but not limited to, a ScribDen staff member or volunteer, or falsely state or otherwise misrepresent your affiliation with ScribDen or any other person or entity;");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 71, filename: "views/home/tos.jade" });
buf.push("<li>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 71, filename: jade_debug[0].filename });
buf.push("Forge headers or otherwise manipulate identifiers in order to disguise the origin of any Content transmitted through the Service;");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 72, filename: "views/home/tos.jade" });
buf.push("<li>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 72, filename: jade_debug[0].filename });
buf.push("Upload, post, or otherwise transmit any Content that you do not have a right to transmit under any law or under contractual or fiduciary relationships (such as inside information, proprietary, and confidential information learned or disclosed as part of employment relationships or under nondisclosure agreements);");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 73, filename: "views/home/tos.jade" });
buf.push("<li>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 73, filename: jade_debug[0].filename });
buf.push("Upload, post, or otherwise transmit any Content that infringes any patent, trademark, trade secret, copyright, or other proprietary right of a third party without express consent;");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 74, filename: "views/home/tos.jade" });
buf.push("<li>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 74, filename: jade_debug[0].filename });
buf.push("Upload, post or otherwise transmit any unsolicited or unauthorized advertising, promotional materials, \"junk mail,\" \"spam,\" \"chain letters,\" \"pyramid schemes,\" or any other form of solicitation;");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 75, filename: "views/home/tos.jade" });
buf.push("<li>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 75, filename: jade_debug[0].filename });
buf.push("Upload, post, or otherwise transmit any material that contains software viruses or any other computer code, files, or programs designed to interrupt, destroy, or limit the functionality of any computer software or hardware or telecommunications equipment;");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 76, filename: "views/home/tos.jade" });
buf.push("<li>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 76, filename: jade_debug[0].filename });
buf.push("Interfere with or disrupt the Service or servers or networks connected to the Service, or disobey any requirements, procedures, policies, or regulations of networks connected to the Service;");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 77, filename: "views/home/tos.jade" });
buf.push("<li>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 77, filename: jade_debug[0].filename });
buf.push("Intentionally or unintentionally violate any applicable local, state, national, or international law, including, but not limited to, regulations promulgated by the U.S. Securities and Exchange Commission, any rules of any national or other securities exchange, including, without limitation, the New York Stock Exchange, the American Stock Exchange, or the NASDAQ, and any regulations having the force of law;");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 78, filename: "views/home/tos.jade" });
buf.push("<li>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 78, filename: jade_debug[0].filename });
buf.push("\"Stalk\" or otherwise harass another person or company;");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 79, filename: "views/home/tos.jade" });
buf.push("<li>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 79, filename: jade_debug[0].filename });
buf.push("Collect or store personal data about other users;");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 80, filename: "views/home/tos.jade" });
buf.push("<li>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 80, filename: jade_debug[0].filename });
buf.push("Promote or provide instructional information about illegal activities, promote physical harm or injury against any governmental entity, group or individual, or promote any act of cruelty to animals. This may include, but is not limited to, providing instructions on how to assemble bombs, grenades, and other weapons or incendiary devices;");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 81, filename: "views/home/tos.jade" });
buf.push("<li>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 81, filename: jade_debug[0].filename });
buf.push("Use the ScribDen Service solely to promote and/or drive traffic to another website, business, or commercial enterprise;");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 82, filename: "views/home/tos.jade" });
buf.push("<li>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 82, filename: jade_debug[0].filename });
buf.push("Allow other users to access and/or use your Account in a manner that violates ScribDen's TOS;");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 83, filename: "views/home/tos.jade" });
buf.push("<li>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 83, filename: jade_debug[0].filename });
buf.push("Engage in commercial activities on behalf of ScribDen without prior approval;");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 84, filename: "views/home/tos.jade" });
buf.push("<li>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 84, filename: jade_debug[0].filename });
buf.push("Solicit passwords or personal identifying information for unintended, commercial or unlawful purposes from other users.");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 85, filename: "views/home/tos.jade" });
buf.push("<li>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 85, filename: jade_debug[0].filename });
buf.push("Exceed the intended scope of the Service, for example, accessing and using features that you do not have a right to use, or deleting, adding to, or otherwise changing other people's entries or other Content without express permission.");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 86, filename: "views/home/tos.jade" });
buf.push("<li>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 86, filename: jade_debug[0].filename });
buf.push("Make excessive or harmful automated use of the system, such as implementing malicious SEO tags, spamming, and/or utilizing bots or other malware to gain access to user Accounts and/or information.");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
buf.push("</ul>");
jade_debug.shift();
jade_debug.unshift({ lineno: 87, filename: "views/home/tos.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 87, filename: jade_debug[0].filename });
buf.push("If ScribDen determines, in its sole discretion, that any user has violated the TOS, ScribDen reserves the right to terminate such user's Account at any time without prior notice. ");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</section>");
jade_debug.shift();
jade_debug.unshift({ lineno: 88, filename: "views/home/tos.jade" });
buf.push("<section class=\"sd-u-align--left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 89, filename: "views/home/tos.jade" });
buf.push("<h3 class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 89, filename: jade_debug[0].filename });
buf.push("XIII. DISCLAIMER OF WARRANTIES");
jade_debug.shift();
jade_debug.shift();
buf.push("</h3>");
jade_debug.shift();
jade_debug.unshift({ lineno: 90, filename: "views/home/tos.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 90, filename: jade_debug[0].filename });
buf.push("YOU EXPRESSLY UNDERSTAND AND AGREE THAT:");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 91, filename: "views/home/tos.jade" });
buf.push("<ul class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 92, filename: "views/home/tos.jade" });
buf.push("<li>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 92, filename: jade_debug[0].filename });
buf.push("(a) YOUR USE OF THE SERVICE IS AT YOUR SOLE RISK. THE SERVICE IS PROVIDED ON AN \"AS IS\" AND \"AS AVAILABLE\" BASIS. SCRIBDEN EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT.");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 93, filename: "views/home/tos.jade" });
buf.push("<li>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 93, filename: jade_debug[0].filename });
buf.push("(b) SCRIBDEN MAKES NO WARRANTY THAT (i) THE SERVICE WILL MEET YOUR REQUIREMENTS, (ii) THE SERVICE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE, (iii) THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE SERVICE WILL BE ACCURATE OR RELIABLE, (iv) THE QUALITY OF ANY PRODUCTS, SERVICES, INFORMATION, OR OTHER MATERIAL PURCHASED OR OBTAINED BY YOU THROUGH THE SERVICE WILL MEET YOUR EXPECTATIONS, AND (V) ANY ERRORS IN THE SOFTWARE WILL BE CORRECTED.");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 94, filename: "views/home/tos.jade" });
buf.push("<li>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 94, filename: jade_debug[0].filename });
buf.push("(c) ANY MATERIAL DOWNLOADED OR OTHERWISE OBTAINED THROUGH THE USE OF THE SERVICE IS DONE AT YOUR OWN DISCRETION AND RISK, AND THAT YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR LOSS OF DATA OR OTHER LIABILITY THAT RESULTS FROM THE DOWNLOAD OF ANY SUCH MATERIAL.");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 95, filename: "views/home/tos.jade" });
buf.push("<li>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 95, filename: jade_debug[0].filename });
buf.push("(d) NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM SCRIBDEN.COM OR THROUGH OR FROM THE SERVICE SHALL CREATE ANY WARRANTY NOT EXPRESSLY STATED IN THE TOS.");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
buf.push("</ul>");
jade_debug.shift();
jade_debug.shift();
buf.push("</section>");
jade_debug.shift();
jade_debug.unshift({ lineno: 96, filename: "views/home/tos.jade" });
buf.push("<section class=\"sd-u-align--left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 97, filename: "views/home/tos.jade" });
buf.push("<h3 class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 97, filename: jade_debug[0].filename });
buf.push("XIV. LIMITATION OF LIABILITY");
jade_debug.shift();
jade_debug.shift();
buf.push("</h3>");
jade_debug.shift();
jade_debug.unshift({ lineno: 98, filename: "views/home/tos.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 98, filename: jade_debug[0].filename });
buf.push("YOU EXPRESSLY UNDERSTAND AND AGREE THAT SCRIBDEN SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO, DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA OR OTHER INTANGIBLE LOSSES (EVEN IF SCRIBDEN HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES), RESULTING FROM: (i) THE USE OR THE INABILITY TO USE THE SERVICE; (ii) THE COST OF PROCUREMENT OF SUBSTITUTE GOODS AND SERVICES RESULTING FROM ANY GOODS, DATA, INFORMATION OR SERVICES PURCHASED OR OBTAINED OR MESSAGES RECEIVED OR TRANSACTIONS ENTERED INTO THROUGH OR FROM THE SERVICE; (iii) UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR TRANSMISSIONS OR DATA; (iv) STATEMENTS OR CONDUCT OF ANY THIRD PARTY ON THE SERVICE; OR (v) ANY OTHER MATTER RELATING TO THE SERVICE.");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</section>");
jade_debug.shift();
jade_debug.unshift({ lineno: 99, filename: "views/home/tos.jade" });
buf.push("<section class=\"sd-u-align--left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 100, filename: "views/home/tos.jade" });
buf.push("<h3 class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 100, filename: jade_debug[0].filename });
buf.push("XV. U.S. GOVERNMENT RESTRICTED RIGHTS");
jade_debug.shift();
jade_debug.shift();
buf.push("</h3>");
jade_debug.shift();
jade_debug.unshift({ lineno: 101, filename: "views/home/tos.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 101, filename: jade_debug[0].filename });
buf.push("The materials on ScribDen are provided with \"RESTRICTED RIGHTS.\" Use, duplication, or disclosure by the U.S. Government is subject to restrictions as set forth in applicable laws and regulations. Use of the materials by the U.S. Government constitutes acknowledgment of ScribDen’s proprietary rights in them.");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</section>");
jade_debug.shift();
jade_debug.unshift({ lineno: 102, filename: "views/home/tos.jade" });
buf.push("<section class=\"sd-u-align--left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 103, filename: "views/home/tos.jade" });
buf.push("<h3 class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 103, filename: jade_debug[0].filename });
buf.push("XVI. GENERAL INFORMATION");
jade_debug.shift();
jade_debug.shift();
buf.push("</h3>");
jade_debug.shift();
jade_debug.unshift({ lineno: 104, filename: "views/home/tos.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 104, filename: jade_debug[0].filename });
buf.push("The TOS constitutes the entire agreement between you and ScribDen and governs your use of the Service, superseding any prior agreements between you and ScribDen (including, but not limited to, any prior versions of the TOS) and any prior representations by ScribDen. The laws of the State of Texas, U.S.A, shall govern the TOS and the relationship between you and ScribDen, without regard to its conflict of law provisions. You and ScribDen agree to submit to the personal and exclusive jurisdiction of the courts located within the county of Austin, Texas, U.S.A. The failure of ScribDen to exercise or enforce any right or provision of the TOS shall not constitute a waiver of such right or provision. If any provision of the TOS is found by a court of competent jurisdiction to be invalid, the parties nevertheless agree that the court should endeavor to give effect to the parties' intentions as reflected in the provision, and the other provisions of the TOS remain in full force and effect. You agree that regardless of any statute or law to the contrary, any claim or cause of action arising out of, or related to, use of the Service or the TOS must be filed within one (1) year after such claim or cause of action arose or be forever barred. The section titles in the TOS are for convenience only and have no legal or contractual effect.");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</section>");
jade_debug.shift();
jade_debug.unshift({ lineno: 105, filename: "views/home/tos.jade" });
buf.push("<section class=\"sd-u-align--left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 106, filename: "views/home/tos.jade" });
buf.push("<h3 class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 106, filename: jade_debug[0].filename });
buf.push("XVII. VIOLATIONS");
jade_debug.shift();
jade_debug.shift();
buf.push("</h3>");
jade_debug.shift();
jade_debug.unshift({ lineno: 107, filename: "views/home/tos.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 107, filename: jade_debug[0].filename });
buf.push("Please send an email to admin@scribden.com for any violations.");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</section>");
jade_debug.shift();
jade_debug.unshift({ lineno: 108, filename: "views/home/tos.jade" });
buf.push("<section class=\"sd-u-align--left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 109, filename: "views/home/tos.jade" });
buf.push("<h3 class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 109, filename: jade_debug[0].filename });
buf.push("XVIII. REVISIONS");
jade_debug.shift();
jade_debug.shift();
buf.push("</h3>");
jade_debug.shift();
jade_debug.unshift({ lineno: 110, filename: "views/home/tos.jade" });
buf.push("<p class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 110, filename: jade_debug[0].filename });
buf.push("ScribDen may revise the TOS found at this URL, in whole or in part, without notice. By using this Site, you hereby acknowledge and agree to be bound by any such revisions and should therefore periodically visit this page to determine the current Terms of Service to which you are bound.");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</section>");
jade_debug.shift();
jade_debug.shift();
buf.push("</article>");
jade_debug.shift();
jade_debug.shift();
buf.push("</main>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();}.call(this,"require" in locals_for_with?locals_for_with.require:typeof require!=="undefined"?require:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "//- each action can have its own partial view, and use a model to alter the rendered HTML\n//- http://taunus.bevacqua.io/getting-started#using-jade-as-your-view-engine\ndiv.sd-u-align--center\n  include ../partials/flash\n  include ../partials/home_header\n  main.sd-o-main.sd-o-frame-content\n    article\n      h2.sd-t-wire Terms of Service\n      section.sd-u-align--left\n        h3.sd-t-wire I. ACCEPTANCE OF TERMS\n        p.sd-t-wire Hexelberry Studios, ScribDen.com, (\"ScribDen\" or \"Service\") provides the following service to you (\"You\" or \"User\"), subject to these Terms of Service (\"TOS\"), which may be updated periodically without prior notice. BY COMPLETING THE REGISTRATION PROCESS AND/OR USING THE SERVICE YOU HEREBY AGREE THAT YOU ARE ELIGIBLE FOR A SCRIBDEN ACCOUNT AND ARE BOUND BY THESE TERMS AND CONDITIONS, AS DESCRIBED BELOW. Your use of the Service implies your consent to the TOS. It is your responsibility to check if there have been changes to the TOS. Failure to comply with these TOS may result in account suspension, or account deletion at any time, without prior notice.\n      section.sd-u-align--left\n        h3.sd-t-wire II. YOUR REGISTRATION OBLIGATIONS\n        p.sd-t-wire Account registration is required in order to create a ScribDen account. During registration, all users are required to provide accurate, complete, and current information about themselves in all required fields. Should any of your own information change after submitting it to ScribDen, you are required to update that information as soon as possible. Should ScribDen suspect that your personal information is not complete, current, or accurate, your Account may be suspended or terminated without further notice. ScribDen is committed to being a safe and secure environment for all its users. You must be at least 13 years of age to use the Service. Users who are found to be under 13 years of age may be suspended from the Service without notice.\n      section.sd-u-align--left\n        h3.sd-t-wire III. SCRIBDEN.COM PRIVACY POLICY\n        p.sd-t-wire Your use of the Service is subject to ScribDen’s privacy policy. For information on ScribDen’s privacy practices, please see the entire privacy policy at \n          a.sd-t-wire(href='/privacy') http://www.scribden.com/privacy.\n      section.sd-u-align--left\n        h3.sd-t-wire IV. INDEMNITY\n        p.sd-t-wire You agree to indemnify and hold ScribDen, and its subsidiaries, affiliates, officers, agents, co-branders or other partners, and employees, harmless from any alleged claim or demand, including reasonable attorney fees, made by any third party due to or arising out of your Content, your use of the Service, your connection to the Service, your violation of the TOS, or your violation of any rights of others, whether you are a registered user or not. The user is solely responsible for their actions when using the Service, including, but not limited to, costs incurred for Internet access.\n      section.sd-u-align--left\n        h3.sd-t-wire V. SPECIAL ADMONITIONS FOR INTERNATIONAL USE\n        p.sd-t-wire Recognizing the global nature of the Internet, you agree to comply with all local laws regarding online conduct and acceptable Content. Specifically, you agree to comply with all applicable laws regarding the transmission of technical data exported from the United States and the country in which you reside.\n      section.sd-u-align--left\n        h3.sd-t-wire VI. GENERAL PRACTICES REGARDING USE AND STORAGE\n        p.sd-t-wire You acknowledge that ScribDen may be required to send you emails regarding your use of the Service. ScribDen will never ask you to submit personal information or verify your Account information in the form of an email. Should you receive any such communications, please do not respond, and forward it to admin@scribden.com at once.\n      section.sd-u-align--left\n        h3.sd-t-wire VII. MODIFICATIONS TO SERVICE\n        p.sd-t-wire ScribDen reserves the right to modify or discontinue, temporarily or permanently, the Service (or any part thereof) with or without notice at any time. You agree that ScribDen shall not be held liable to you or to any third party for any modification, suspension, or discontinuance of the Service.\n      section.sd-u-align--left\n        h3.sd-t-wire VIII. NO RESALE OF SERVICE\n        p.sd-t-wire You agree not to reproduce, duplicate, copy, sell, resell, or exploit any portion of the Service, use of the Service, or access to the Service.\n      section.sd-u-align--left\n        h3.sd-t-wire IX. TERMINATION\n        p.sd-t-wire By using the ScribDen service, you hereby acknowledge and agree that ScribDen may, at its sole discretion, block, restrict, or terminate access; suspend or delete any Account; and flag or remove any Content found within the Service, for any reason, at any time, without prior notice.\n        p.sd-t-wire\n          strong Spam or Malicious Search Engine Optimization (“SEO”):\n          span  If you engage in behavior that is inconsistent with ordinary use of the Service, as described in the TOS, including, but not limited to, posting Content that contains malicious SEO optimizations; using bots to spam accounts and/or obtain private information from ScribDen users; or creating an account for strictly commercial purposes, we reserve the right to flag, restrict, or terminate your Account at any time without notice.\n        p.sd-t-wire\n          strong Offensive content:\n          span  ScribDen is a social media platform that falls under the DMCA Safe Harbor Agreement and, as such, cannot be held responsible for any user-generated Content that appears on its Service. Without imposing legal accountability where none exists, ScribDen reserves the right, at its sole discretion, to suspend any Account, remove any Content, and/or restrict access to any part of the Service that contains full nudity, violence, obscenity, gang-related Content, hate-based Content based on racial, ethnic, gender, transgender, disability, or sexual orientation, harassment of other users, endangerment to minors, incitation to violence or criminal activity, violation of another person’s intellectual property rights, or Content that is otherwise offensive or inappropriate under the TOS, in order to maintain a safe environment for all of its users.\n        p.sd-t-wire\n          strong U.S. Court orders and Police investigations:\n          span  ScribDen shall not be held responsible for retaining any user Content or information that has been deleted or purged during the ordinary course of business.\n      section.sd-u-align--left\n        h3.sd-t-wire X. Content\n        p.sd-t-wire ScribDen falls under the DMCA Safe Harbor Agreement and cannot control, or be held responsible or liable, for any of the Content that appears on the Service. Without limiting the generality of the foregoing, ScribDen imposes certain guidelines to promote the safety and security of all of its users. By using the Service, you hereby agree to comply with the following guidelines for posting Content on the Service. Failure to comply with the guidelines set forth below may result in flagging or restricting access to any and all Content posted to the Service, deletion of said Content, and/or suspension of your Account without further notice:\n        p.sd-t-wire\n          strong Offensive and Inappropriate Content:\n          span Should any Content that you have posted be reported to ScribDen as being offensive or inappropriate, ScribDen has the right to flag, restrict access, or delete said Content at any time without prior notice. In addition, ScribDen might call upon you to retract or modify the Content in question within a reasonable amount of time, as determined by the ScribDen staff. Should you fail to meet such a request, ScribDen may flag, restrict access, delete said Content, or terminate your Account at its sole discretion without assuming control, responsibility, or liability for the Content posted on the Service under the terms of the DMCA Safe Harbor Agreement. Should Content be reported to ScribDen as containing full nudity, violence, obscenity, gang-related Content, hate-based Content based on racial, ethnic, gender, transgender, disability, or sexual orientation, harassment of other users, endangerment to minors, incitation to violence or criminal activity, violation of another person’s intellectual property rights, or Content that is otherwise offensive or inappropriate under the TOS, ScribDen reserves the right to flag, restrict access, and/or delete said Content and/or suspend your Account at any time without notice;\n        p.sd-t-wire\n          strong No Control or Liability for User-Generated Content on the Service:\n          span ScribDen claims no ownership or control over any Content posted by its users. The author retains all patent, trademarks, and copyrights to all posted Content, and is fully responsible for protecting said rights. While ScribDen will comply with all lawful DMCA claims and remove copyright- and/or trademark-protected Content in a timely manner, it is not responsible for policing said rights for its users. By posting Content to ScribDen, you hereby acknowledge and agree that you have all rights necessary to post such Content (and for ScribDen to serve such Content) without violation of any laws or regulations, and/or intellectual property or other rights of third parties;\n        p.sd-t-wire\n          strong Content Delivery and Subscription Fees:\n          span ScribDen reserves the right, without limitation except by law, to serve any user Content on the web, through downloadable clients, mobile platforms, and otherwise;\n        p.sd-t-wire\n          strong No Liability for Content Accuracy, Reliability, or Legality:\n          span You hereby acknowledge that ScribDen does not pre-screen Content, but that ScribDen shall have the right (but not the obligation), at its sole discretion, to remove or refuse to remove any Content found on the Service at any time without prior notice. Without limiting the foregoing, ScribDen shall have the right, but not the obligation, to remove any Content that violates the TOS or is otherwise objectionable, or that infringes or is alleged to infringe upon, intellectual property rights. You agree that you must evaluate, and bear all risks associated with, the use of any Content that appears on the Service, including any reliance on the accuracy, completeness, or usefulness of such Content. Furthermore, ScribDen reserves the right to limit access to your Account if you are found to be in violation of the TOS, including without limitation the User Conduct described below, by flagging, restricting access or deleting Content, suspending or deleting your Account, and/or removing your information from the user directory, search engine, and all other methods used to identify ScribDen users at any time without prior notice;\n      section.sd-u-align--left\n        h3.sd-t-wire XI. SCRIBDEN.COM PROPRIETARY RIGHTS\n        p.sd-t-wire You acknowledge and agree that the Service, and any necessary software used in connection with the Service (referred to as \"Software\"), may contain proprietary and confidential information that is protected by applicable laws governing intellectual property, proprietary rights and the like. All ScribDen code and specifications, and all other code and specifications for the Software and the operation of the Service, are subject to their express or implied licenses. You further acknowledge and agree that Content contained in information presented to you through the Service is protected by copyrights, trademarks, service marks, patents or other proprietary rights and laws. Except as expressly authorized by ScribDen, you agree not to modify, rent, lease, sell, distribute, or create derivative works based on the Content, the Service or the Software, in whole or in part.￼\n      section.sd-u-align--left\n        h3.sd-t-wire XII. USER CONDUCT\n        p.sd-t-wire You understand that all Content, including without limitation, all information, data, text, software, music, sound, photographs, graphics, video, messages, or other materials, whether publicly posted or privately transmitted, are the sole responsibility of the user who posted the Content. ScribDen does not control Content posted via the Service and, as such, does not guarantee the validity of such Content. You also understand that by using the Service, you may be exposed to Content that is offensive, indecent, or objectionable. Should Content be found or reported to be in violation with, but not limited to, the following terms, ScribDen may, at its sole discretion, flag, restrict access, delete, terminate the Account, or take any other actions that it deems necessary to enforce the spirit of the TOS.\n        p.sd-t-wire You agree to NOT use the Service to:\n        ul.sd-t-wire\n          li Upload, post or otherwise transmit any Content that is unlawful, harmful, threatening, abusive, harassing, tortuous, defamatory, vulgar, obscene, libelous, invasive to another's privacy (including, but not limited to, posting the address, email, phone number, or any other contact information without the written consent of the owner of such information), or Content containing full nudity, violence, obscenity, gang-related Content, hate-based Content based on racial, ethnic, gender, transgender, disability, or sexual orientation, harassment of other users, endangerment to minors, incitation to violence or criminal activity, violation of another person’s intellectual property rights, or Content that is otherwise offensive or inappropriate under the TOS;\n          li Impersonate any person or entity, including, but not limited to, a ScribDen staff member or volunteer, or falsely state or otherwise misrepresent your affiliation with ScribDen or any other person or entity;\n          li Forge headers or otherwise manipulate identifiers in order to disguise the origin of any Content transmitted through the Service;\n          li Upload, post, or otherwise transmit any Content that you do not have a right to transmit under any law or under contractual or fiduciary relationships (such as inside information, proprietary, and confidential information learned or disclosed as part of employment relationships or under nondisclosure agreements);\n          li Upload, post, or otherwise transmit any Content that infringes any patent, trademark, trade secret, copyright, or other proprietary right of a third party without express consent;\n          li Upload, post or otherwise transmit any unsolicited or unauthorized advertising, promotional materials, \"junk mail,\" \"spam,\" \"chain letters,\" \"pyramid schemes,\" or any other form of solicitation;\n          li Upload, post, or otherwise transmit any material that contains software viruses or any other computer code, files, or programs designed to interrupt, destroy, or limit the functionality of any computer software or hardware or telecommunications equipment;\n          li Interfere with or disrupt the Service or servers or networks connected to the Service, or disobey any requirements, procedures, policies, or regulations of networks connected to the Service;\n          li Intentionally or unintentionally violate any applicable local, state, national, or international law, including, but not limited to, regulations promulgated by the U.S. Securities and Exchange Commission, any rules of any national or other securities exchange, including, without limitation, the New York Stock Exchange, the American Stock Exchange, or the NASDAQ, and any regulations having the force of law;\n          li \"Stalk\" or otherwise harass another person or company;\n          li Collect or store personal data about other users;\n          li Promote or provide instructional information about illegal activities, promote physical harm or injury against any governmental entity, group or individual, or promote any act of cruelty to animals. This may include, but is not limited to, providing instructions on how to assemble bombs, grenades, and other weapons or incendiary devices;\n          li Use the ScribDen Service solely to promote and/or drive traffic to another website, business, or commercial enterprise;\n          li Allow other users to access and/or use your Account in a manner that violates ScribDen's TOS;\n          li Engage in commercial activities on behalf of ScribDen without prior approval;\n          li Solicit passwords or personal identifying information for unintended, commercial or unlawful purposes from other users.\n          li Exceed the intended scope of the Service, for example, accessing and using features that you do not have a right to use, or deleting, adding to, or otherwise changing other people's entries or other Content without express permission.\n          li Make excessive or harmful automated use of the system, such as implementing malicious SEO tags, spamming, and/or utilizing bots or other malware to gain access to user Accounts and/or information.\n        p.sd-t-wire If ScribDen determines, in its sole discretion, that any user has violated the TOS, ScribDen reserves the right to terminate such user's Account at any time without prior notice. \n      section.sd-u-align--left\n        h3.sd-t-wire XIII. DISCLAIMER OF WARRANTIES\n        p.sd-t-wire YOU EXPRESSLY UNDERSTAND AND AGREE THAT:\n        ul.sd-t-wire\n          li (a) YOUR USE OF THE SERVICE IS AT YOUR SOLE RISK. THE SERVICE IS PROVIDED ON AN \"AS IS\" AND \"AS AVAILABLE\" BASIS. SCRIBDEN EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT.\n          li (b) SCRIBDEN MAKES NO WARRANTY THAT (i) THE SERVICE WILL MEET YOUR REQUIREMENTS, (ii) THE SERVICE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE, (iii) THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE SERVICE WILL BE ACCURATE OR RELIABLE, (iv) THE QUALITY OF ANY PRODUCTS, SERVICES, INFORMATION, OR OTHER MATERIAL PURCHASED OR OBTAINED BY YOU THROUGH THE SERVICE WILL MEET YOUR EXPECTATIONS, AND (V) ANY ERRORS IN THE SOFTWARE WILL BE CORRECTED.\n          li (c) ANY MATERIAL DOWNLOADED OR OTHERWISE OBTAINED THROUGH THE USE OF THE SERVICE IS DONE AT YOUR OWN DISCRETION AND RISK, AND THAT YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR LOSS OF DATA OR OTHER LIABILITY THAT RESULTS FROM THE DOWNLOAD OF ANY SUCH MATERIAL.\n          li (d) NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM SCRIBDEN.COM OR THROUGH OR FROM THE SERVICE SHALL CREATE ANY WARRANTY NOT EXPRESSLY STATED IN THE TOS.\n      section.sd-u-align--left\n        h3.sd-t-wire XIV. LIMITATION OF LIABILITY\n        p.sd-t-wire YOU EXPRESSLY UNDERSTAND AND AGREE THAT SCRIBDEN SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO, DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA OR OTHER INTANGIBLE LOSSES (EVEN IF SCRIBDEN HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES), RESULTING FROM: (i) THE USE OR THE INABILITY TO USE THE SERVICE; (ii) THE COST OF PROCUREMENT OF SUBSTITUTE GOODS AND SERVICES RESULTING FROM ANY GOODS, DATA, INFORMATION OR SERVICES PURCHASED OR OBTAINED OR MESSAGES RECEIVED OR TRANSACTIONS ENTERED INTO THROUGH OR FROM THE SERVICE; (iii) UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR TRANSMISSIONS OR DATA; (iv) STATEMENTS OR CONDUCT OF ANY THIRD PARTY ON THE SERVICE; OR (v) ANY OTHER MATTER RELATING TO THE SERVICE.\n      section.sd-u-align--left\n        h3.sd-t-wire XV. U.S. GOVERNMENT RESTRICTED RIGHTS\n        p.sd-t-wire The materials on ScribDen are provided with \"RESTRICTED RIGHTS.\" Use, duplication, or disclosure by the U.S. Government is subject to restrictions as set forth in applicable laws and regulations. Use of the materials by the U.S. Government constitutes acknowledgment of ScribDen’s proprietary rights in them.\n      section.sd-u-align--left\n        h3.sd-t-wire XVI. GENERAL INFORMATION\n        p.sd-t-wire The TOS constitutes the entire agreement between you and ScribDen and governs your use of the Service, superseding any prior agreements between you and ScribDen (including, but not limited to, any prior versions of the TOS) and any prior representations by ScribDen. The laws of the State of Texas, U.S.A, shall govern the TOS and the relationship between you and ScribDen, without regard to its conflict of law provisions. You and ScribDen agree to submit to the personal and exclusive jurisdiction of the courts located within the county of Austin, Texas, U.S.A. The failure of ScribDen to exercise or enforce any right or provision of the TOS shall not constitute a waiver of such right or provision. If any provision of the TOS is found by a court of competent jurisdiction to be invalid, the parties nevertheless agree that the court should endeavor to give effect to the parties' intentions as reflected in the provision, and the other provisions of the TOS remain in full force and effect. You agree that regardless of any statute or law to the contrary, any claim or cause of action arising out of, or related to, use of the Service or the TOS must be filed within one (1) year after such claim or cause of action arose or be forever barred. The section titles in the TOS are for convenience only and have no legal or contractual effect.\n      section.sd-u-align--left\n        h3.sd-t-wire XVII. VIOLATIONS\n        p.sd-t-wire Please send an email to admin@scribden.com for any violations.\n      section.sd-u-align--left\n        h3.sd-t-wire XVIII. REVISIONS\n        p.sd-t-wire ScribDen may revise the TOS found at this URL, in whole or in part, without notice. By using this Site, you hereby acknowledge and agree to be bound by any such revisions and should therefore periodically visit this page to determine the current Terms of Service to which you are bound.\n        ");
}
}
},{"../partials/flash":29,"../partials/home_header":31,"jadum/runtime":84}],24:[function(require,module,exports){
var jade = require("jadum/runtime");
module.exports = function homeHeader(locals) {
var jade_debug = [{ lineno: 1, filename: "views/home_header.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;

jade_debug.unshift({ lineno: 0, filename: "views/home_header.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/home_header.jade" });
buf.push("<header>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "views/home_header.jade" });
buf.push("<h1>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "views/home_header.jade" });
buf.push("<a href=\"/\" aria-label=\"Go to home\" class=\"sd-t-link\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: jade_debug[0].filename });
buf.push("ScribDen");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</h1>");
jade_debug.shift();
jade_debug.unshift({ lineno: 4, filename: "views/home_header.jade" });
buf.push("<h2>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: jade_debug[0].filename });
buf.push("The minimalist forum.");
jade_debug.shift();
jade_debug.shift();
buf.push("</h2>");
jade_debug.shift();
jade_debug.shift();
buf.push("</header>");
jade_debug.shift();
jade_debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "header\n  h1\n    a.sd-t-link(href='/', aria-label='Go to home') ScribDen\n  h2 The minimalist forum.\n");
}
}
},{"jadum/runtime":84}],25:[function(require,module,exports){
var jade = require("jadum/runtime");
module.exports = function layout(locals) {
var jade_debug = [{ lineno: 1, filename: "views/layout.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (model, partial) {
jade_debug.unshift({ lineno: 0, filename: "views/layout.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/layout.jade" });
buf.push("<!DOCTYPE html>");
jade_debug.shift();
jade_debug.unshift({ lineno: 2, filename: "views/layout.jade" });
buf.push("<html lang=\"en\" itemscope itemtype=\"http://schema.org/Blog\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "views/layout.jade" });
buf.push("<head>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: "views/layout.jade" });
jade_debug.shift();
jade_debug.unshift({ lineno: 6, filename: "views/layout.jade" });
jade_debug.shift();
jade_debug.unshift({ lineno: 7, filename: "views/layout.jade" });
jade_debug.shift();
jade_debug.unshift({ lineno: 7, filename: "views/layout.jade" });
buf.push("");
jade_debug.shift();
jade_debug.unshift({ lineno: 9, filename: "views/layout.jade" });
jade_debug.shift();
jade_debug.unshift({ lineno: 9, filename: "views/layout.jade" });
buf.push("<title>" + (jade.escape(null == (jade_interp = model.title) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</title>");
jade_debug.shift();
jade_debug.unshift({ lineno: 10, filename: "views/layout.jade" });
buf.push("<meta charset=\"utf-8\">");
jade_debug.shift();
jade_debug.unshift({ lineno: 11, filename: "views/layout.jade" });
buf.push("<link rel=\"shortcut icon\" href=\"/favicon.ico\">");
jade_debug.shift();
jade_debug.unshift({ lineno: 12, filename: "views/layout.jade" });
buf.push("<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\">");
jade_debug.shift();
jade_debug.unshift({ lineno: 13, filename: "views/layout.jade" });
buf.push("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">");
jade_debug.shift();
jade_debug.unshift({ lineno: 14, filename: "views/layout.jade" });
buf.push("<link rel=\"stylesheet\" type=\"text/css\" href=\"/css/all.css\">");
jade_debug.shift();
jade_debug.unshift({ lineno: 15, filename: "views/layout.jade" });
jade_debug.shift();
jade_debug.unshift({ lineno: 17, filename: "views/layout.jade" });
jade_debug.shift();
jade_debug.shift();
buf.push("</head>");
jade_debug.shift();
jade_debug.unshift({ lineno: 17, filename: "views/layout.jade" });
buf.push("<body data-taunus=\"model\" class=\"sd-t-default\">" + (null == (jade_interp = partial) ? "" : jade_interp));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</body>");
jade_debug.shift();
jade_debug.unshift({ lineno: 19, filename: "views/layout.jade" });
buf.push("<script type=\"text/javascript\">");
jade_debug.unshift({ lineno: 19, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 19, filename: jade_debug[0].filename });
buf.push("var wf, ");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 19, filename: jade_debug[0].filename });
buf.push("  s,");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 19, filename: jade_debug[0].filename });
buf.push("  i,");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 19, filename: jade_debug[0].filename });
buf.push("  numElements,");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 19, filename: jade_debug[0].filename });
buf.push("  currentElement,");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 19, filename: jade_debug[0].filename });
buf.push("  nojs;");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 19, filename: jade_debug[0].filename });
buf.push("  ");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 19, filename: jade_debug[0].filename });
buf.push("if ('querySelector' in document && 'localStorage' in window && 'addEventListener' in window) {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 19, filename: jade_debug[0].filename });
buf.push("  // only add javascript if this is a capable browser");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 19, filename: jade_debug[0].filename });
buf.push("  wf = document.createElement('script');");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 19, filename: jade_debug[0].filename });
buf.push("  wf.src = '/js/all.js';");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 19, filename: jade_debug[0].filename });
buf.push("  wf.type = 'text/javascript';");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 19, filename: jade_debug[0].filename });
buf.push("  wf.async = 'true';");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 19, filename: jade_debug[0].filename });
buf.push("  s = document.getElementsByTagName('script')[0];");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 19, filename: jade_debug[0].filename });
buf.push("  s.parentNode.insertBefore(wf, s);");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift({ lineno: 19, filename: jade_debug[0].filename });
buf.push("}");
jade_debug.shift();
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.shift();
buf.push("</html>");
jade_debug.shift();
jade_debug.shift();}.call(this,"model" in locals_for_with?locals_for_with.model:typeof model!=="undefined"?model:undefined,"partial" in locals_for_with?locals_for_with.partial:typeof partial!=="undefined"?partial:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "doctype html\nhtml(lang='en', itemscope, itemtype='http://schema.org/Blog')\n  head\n    //- the view layout is useful to set metadata, a title, load scripts and styles\n    //- and also global markup such as a navigation menu or layout structure\n    //- http://taunus.bevacqua.io/getting-started#creating-a-layout\n    \n    //- every controller action should produce a view title\n    title=model.title\n    meta(charset='utf-8')\n    link(rel='shortcut icon', href='/favicon.ico')\n    meta(http-equiv='X-UA-Compatible', content='IE=edge,chrome=1')\n    meta(name='viewport', content='width=device-width, initial-scale=1')\n    link(rel='stylesheet', type='text/css', href='/css/all.css')\n    //-\n     The != syntax below means that whatever is in the value assigned to the element won't be escaped. That's okay because partial is a view where Jade escaped anything that needed escaping, but we wouldn't want HTML tags to be escaped!\n    //- the HTML for the partial view can be placed where needed\n  body.sd-t-default(data-taunus='model')!=partial\n    \n  script(type='text/javascript').\n    var wf, \n      s,\n      i,\n      numElements,\n      currentElement,\n      nojs;\n      \n    if ('querySelector' in document && 'localStorage' in window && 'addEventListener' in window) {\n      // only add javascript if this is a capable browser\n      wf = document.createElement('script');\n      wf.src = '/js/all.js';\n      wf.type = 'text/javascript';\n      wf.async = 'true';\n      s = document.getElementsByTagName('script')[0];\n      s.parentNode.insertBefore(wf, s);\n    }");
}
}
},{"jadum/runtime":84}],26:[function(require,module,exports){
var jade = require("jadum/runtime");
module.exports = function nav(locals) {
var jade_debug = [{ lineno: 1, filename: "views/nav.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (model) {
jade_debug.unshift({ lineno: 0, filename: "views/nav.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/nav.jade" });
if ( model.navType === 'main' || (model.navType === 'thread' && !model.thread))
{
jade_debug.unshift({ lineno: 2, filename: "views/nav.jade" });
jade_debug.unshift({ lineno: 2, filename: "views/nav.jade" });
buf.push("<nav role=\"navigation\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "views/nav.jade" });
buf.push("<ul class=\"sd-c-nav\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: "views/nav.jade" });
buf.push("<li class=\"sd-c-nav-item\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: "views/nav.jade" });
buf.push("<a href=\"/recent\" aria-label=\"See recently updated threads\" class=\"sd-o-nav-icon sd-o-home-icon\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: jade_debug[0].filename });
buf.push("R");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 6, filename: "views/nav.jade" });
buf.push("<li class=\"sd-c-nav-item\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: "views/nav.jade" });
buf.push("<a href=\"/tracked\" aria-label=\"See tracked threads\" class=\"sd-o-nav-icon sd-o-thread-icon\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: jade_debug[0].filename });
buf.push("T");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 8, filename: "views/nav.jade" });
buf.push("<li class=\"sd-c-nav-item\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: "views/nav.jade" });
buf.push("<a href=\"/notifications\" aria-label=\"See user notifications\" class=\"sd-o-nav-icon sd-o-notification-icon\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: jade_debug[0].filename });
buf.push("N");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 10, filename: "views/nav.jade" });
buf.push("<li class=\"sd-c-nav-item\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 11, filename: "views/nav.jade" });
buf.push("<a href=\"/settings\" aria-label=\"Modify user settings\" class=\"sd-o-nav-icon sd-o-settings-icon\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 11, filename: jade_debug[0].filename });
buf.push("S");
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
}
else if ( model.navType === 'thread' && model.thread)
{
jade_debug.unshift({ lineno: 13, filename: "views/nav.jade" });
jade_debug.unshift({ lineno: 13, filename: "views/nav.jade" });
buf.push("<nav role=\"navigation\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 14, filename: "views/nav.jade" });
buf.push("<ul class=\"sd-c-nav\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 15, filename: "views/nav.jade" });
buf.push("<li class=\"sd-c-nav-item\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 16, filename: "views/nav.jade" });
buf.push("<a href=\"/recent\" aria-label=\"Go back\" class=\"sd-t-wire sd-o-back-icon\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 16, filename: jade_debug[0].filename });
buf.push("Back");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 17, filename: "views/nav.jade" });
buf.push("<li class=\"sd-c-nav-compose\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 18, filename: "views/nav.jade" });
buf.push("<a" + (jade.attr("href", '/compose/' + model.thread.id, true, false)) + " aria-label=\"Make a new post\" class=\"sd-t-wire sd-o-compose-icon\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 18, filename: jade_debug[0].filename });
buf.push("Compose");
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
}
else
{
jade_debug.unshift({ lineno: 20, filename: "views/nav.jade" });
jade_debug.unshift({ lineno: 20, filename: "views/nav.jade" });
buf.push("<h1>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 21, filename: "views/nav.jade" });
buf.push("<a href=\"/\" aria-label=\"Go to home\" class=\"sd-t-link\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 21, filename: jade_debug[0].filename });
buf.push("ScribDen");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</h1>");
jade_debug.shift();
jade_debug.unshift({ lineno: 22, filename: "views/nav.jade" });
buf.push("<h2>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 22, filename: jade_debug[0].filename });
buf.push("The minimalist forum.");
jade_debug.shift();
jade_debug.shift();
buf.push("</h2>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();}.call(this,"model" in locals_for_with?locals_for_with.model:typeof model!=="undefined"?model:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "if model.navType === 'main' || (model.navType === 'thread' && !model.thread)\n    nav(role='navigation')\n      ul.sd-c-nav\n        li.sd-c-nav-item\n          a.sd-o-nav-icon.sd-o-home-icon(href='/recent', aria-label='See recently updated threads') R\n        li.sd-c-nav-item\n          a.sd-o-nav-icon.sd-o-thread-icon(href='/tracked', aria-label='See tracked threads') T\n        li.sd-c-nav-item\n          a.sd-o-nav-icon.sd-o-notification-icon(href='/notifications', aria-label='See user notifications') N\n        li.sd-c-nav-item\n          a.sd-o-nav-icon.sd-o-settings-icon(href='/settings', aria-label='Modify user settings') S\n  else if model.navType === 'thread' && model.thread\n    nav(role='navigation')\n      ul.sd-c-nav\n        li.sd-c-nav-item\n          a.sd-t-wire.sd-o-back-icon(href='/recent', aria-label='Go back') Back\n        li.sd-c-nav-compose\n          a.sd-t-wire.sd-o-compose-icon(href='/compose/' + model.thread.id, aria-label='Make a new post') Compose\n  else\n    h1\n      a.sd-t-link(href='/', aria-label='Go to home') ScribDen\n    h2 The minimalist forum.");
}
}
},{"jadum/runtime":84}],27:[function(require,module,exports){
var jade = require("jadum/runtime");
module.exports = function appHeader(locals) {
var jade_debug = [{ lineno: 1, filename: "views/partials/app_header.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (userId) {
jade_debug.unshift({ lineno: 0, filename: "views/partials/app_header.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/partials/app_header.jade" });
buf.push("<header>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "views/partials/app_header.jade" });
buf.push("<nav role=\"navigation\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "views/partials/app_header.jade" });
buf.push("<ul class=\"sd-c-nav\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: "views/partials/app_header.jade" });
buf.push("<li class=\"sd-c-nav-item\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: "views/partials/app_header.jade" });
buf.push("<a href=\"/recent\" aria-label=\"See recently updated threads\" class=\"sd-o-nav-icon\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: jade_debug[0].filename });
buf.push("R");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 6, filename: "views/partials/app_header.jade" });
buf.push("<li class=\"sd-c-nav-item\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: "views/partials/app_header.jade" });
buf.push("<a href=\"/tracked\" aria-label=\"See tracked threads\" class=\"sd-o-nav-icon\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: jade_debug[0].filename });
buf.push("T");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 8, filename: "views/partials/app_header.jade" });
jade_debug.shift();
jade_debug.unshift({ lineno: 9, filename: "views/partials/app_header.jade" });
buf.push("<li class=\"sd-c-nav-item\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 10, filename: "views/partials/app_header.jade" });
buf.push("<a href=\"/settings\" aria-label=\"Modify user settings\" class=\"sd-o-nav-icon\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 10, filename: jade_debug[0].filename });
buf.push("S");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 11, filename: "views/partials/app_header.jade" });
buf.push("<li class=\"sd-c-nav-right\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 12, filename: "views/partials/app_header.jade" });
if ( userId)
{
jade_debug.unshift({ lineno: 13, filename: "views/partials/app_header.jade" });
jade_debug.unshift({ lineno: 13, filename: "views/partials/app_header.jade" });
buf.push("<a href=\"/api/user/logout\" class=\"sd-t-wire sd-t-link\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 13, filename: jade_debug[0].filename });
buf.push("Logout");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift({ lineno: 15, filename: "views/partials/app_header.jade" });
jade_debug.unshift({ lineno: 15, filename: "views/partials/app_header.jade" });
buf.push("<a href=\"/\" class=\"sd-t-wire sd-t-link\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 15, filename: jade_debug[0].filename });
buf.push("Login ");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
}
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
jade_debug.shift();}.call(this,"userId" in locals_for_with?locals_for_with.userId:typeof userId!=="undefined"?userId:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "header\n  nav(role='navigation')\n    ul.sd-c-nav\n      li.sd-c-nav-item\n        a.sd-o-nav-icon(href='/recent', aria-label='See recently updated threads') R\n      li.sd-c-nav-item\n        a.sd-o-nav-icon(href='/tracked', aria-label='See tracked threads') T\n      //-li.sd-c-nav-item\n        a.sd-o-nav-icon.sd-o-notification-icon(href='/notifications', aria-label='See user notifications') N\n      li.sd-c-nav-item\n        a.sd-o-nav-icon(href='/settings', aria-label='Modify user settings') S\n      li.sd-c-nav-right\n        if userId\n          a.sd-t-wire.sd-t-link(href='/api/user/logout') Logout\n        else\n          a.sd-t-wire.sd-t-link(href='/') Login \n");
}
}
},{"jadum/runtime":84}],28:[function(require,module,exports){
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
},{"jadum/runtime":84}],29:[function(require,module,exports){
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
},{"jadum/runtime":84}],30:[function(require,module,exports){
var jade = require("jadum/runtime");
module.exports = function genericHeader(locals) {
var jade_debug = [{ lineno: 1, filename: "views/partials/generic_header.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;

jade_debug.unshift({ lineno: 0, filename: "views/partials/generic_header.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/partials/generic_header.jade" });
buf.push("<header>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "views/partials/generic_header.jade" });
buf.push("<nav role=\"navigation\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "views/partials/generic_header.jade" });
buf.push("<ul class=\"sd-c-nav\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: "views/partials/generic_header.jade" });
buf.push("<li class=\"sd-c-nav-item\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: "views/partials/generic_header.jade" });
buf.push("<a href=\"/recent\" aria-label=\"Go back\" class=\"sd-t-wire\">");
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
jade_debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "header\n  nav(role='navigation')\n    ul.sd-c-nav\n      li.sd-c-nav-item\n        a.sd-t-wire(href='/recent', aria-label='Go back') Back\n");
}
}
},{"jadum/runtime":84}],31:[function(require,module,exports){
var jade = require("jadum/runtime");
module.exports = function homeHeader(locals) {
var jade_debug = [{ lineno: 1, filename: "views/partials/home_header.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;

jade_debug.unshift({ lineno: 0, filename: "views/partials/home_header.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/partials/home_header.jade" });
buf.push("<header>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "views/partials/home_header.jade" });
buf.push("<h1>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "views/partials/home_header.jade" });
buf.push("<a href=\"/\" aria-label=\"Go to home\" class=\"sd-t-link\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: jade_debug[0].filename });
buf.push("ScribDen");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</h1>");
jade_debug.shift();
jade_debug.unshift({ lineno: 4, filename: "views/partials/home_header.jade" });
buf.push("<h2>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: jade_debug[0].filename });
buf.push("The minimalist forum.");
jade_debug.shift();
jade_debug.shift();
buf.push("</h2>");
jade_debug.shift();
jade_debug.shift();
buf.push("</header>");
jade_debug.shift();
jade_debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "header\n  h1\n    a.sd-t-link(href='/', aria-label='Go to home') ScribDen\n  h2 The minimalist forum.\n");
}
}
},{"jadum/runtime":84}],32:[function(require,module,exports){
var jade = require("jadum/runtime");
module.exports = function replyHeader(locals) {
var jade_debug = [{ lineno: 1, filename: "views/partials/reply_header.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (replyId, thread) {
jade_debug.unshift({ lineno: 0, filename: "views/partials/reply_header.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/partials/reply_header.jade" });
buf.push("<!-- DEPRECATED-->");
jade_debug.shift();
jade_debug.unshift({ lineno: 2, filename: "views/partials/reply_header.jade" });
buf.push("<header>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "views/partials/reply_header.jade" });
buf.push("<nav role=\"navigation\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: "views/partials/reply_header.jade" });
buf.push("<ul class=\"sd-c-nav\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: "views/partials/reply_header.jade" });
buf.push("<li class=\"sd-c-nav-item\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 6, filename: "views/partials/reply_header.jade" });
buf.push("<a" + (jade.attr("href", '/thread/' + thread.id, true, false)) + " aria-label=\"Go back\" class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 6, filename: jade_debug[0].filename });
buf.push("Back");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 7, filename: "views/partials/reply_header.jade" });
buf.push("<li class=\"sd-c-nav-compose\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 8, filename: "views/partials/reply_header.jade" });
buf.push("<a" + (jade.attr("href", '/reply_thread/' + thread.id + '/' + replyId, true, false)) + " aria-label=\"Make a reply\" class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 8, filename: jade_debug[0].filename });
buf.push("Reply");
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
jade_debug.shift();}.call(this,"replyId" in locals_for_with?locals_for_with.replyId:typeof replyId!=="undefined"?replyId:undefined,"thread" in locals_for_with?locals_for_with.thread:typeof thread!=="undefined"?thread:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "// DEPRECATED\nheader\n  nav(role='navigation')\n    ul.sd-c-nav\n      li.sd-c-nav-item\n        a.sd-t-wire(href='/thread/' + thread.id, aria-label='Go back') Back\n      li.sd-c-nav-compose\n        a.sd-t-wire(href='/reply_thread/' + thread.id + '/' + replyId, aria-label='Make a reply') Reply\n");
}
}
},{"jadum/runtime":84}],33:[function(require,module,exports){
var jade = require("jadum/runtime");
module.exports = function threadHeader(locals) {
var jade_debug = [{ lineno: 1, filename: "views/partials/thread_header.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (thread, userId) {
jade_debug.unshift({ lineno: 0, filename: "views/partials/thread_header.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/partials/thread_header.jade" });
buf.push("<header>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "views/partials/thread_header.jade" });
buf.push("<nav role=\"navigation\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "views/partials/thread_header.jade" });
buf.push("<ul class=\"sd-c-nav\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: "views/partials/thread_header.jade" });
buf.push("<li class=\"sd-c-nav-item\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: "views/partials/thread_header.jade" });
buf.push("<a href=\"/recent\" aria-label=\"Go back\" class=\"sd-t-wire\">");
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
jade_debug.unshift({ lineno: 6, filename: "views/partials/thread_header.jade" });
buf.push("<li class=\"sd-c-nav-right\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: "views/partials/thread_header.jade" });
if ( userId && thread)
{
jade_debug.unshift({ lineno: 8, filename: "views/partials/thread_header.jade" });
jade_debug.unshift({ lineno: 8, filename: "views/partials/thread_header.jade" });
if ( thread.userId)
{
jade_debug.unshift({ lineno: 9, filename: "views/partials/thread_header.jade" });
jade_debug.unshift({ lineno: 9, filename: "views/partials/thread_header.jade" });
buf.push("<a" + (jade.attr("href", '/api/track/remove/' + thread.id, true, false)) + " aria-label=\"Remove thread from list of tracked threads\" class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: jade_debug[0].filename });
buf.push("Untrack");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift({ lineno: 11, filename: "views/partials/thread_header.jade" });
jade_debug.unshift({ lineno: 11, filename: "views/partials/thread_header.jade" });
buf.push("<a" + (jade.attr("href", '/api/track/' + thread.id, true, false)) + " aria-label=\"Keep track of this thread\" class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 11, filename: jade_debug[0].filename });
buf.push("Track");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
}
else if ( thread)
{
jade_debug.unshift({ lineno: 13, filename: "views/partials/thread_header.jade" });
jade_debug.unshift({ lineno: 14, filename: "views/partials/thread_header.jade" });
jade_debug.shift();
jade_debug.unshift({ lineno: 14, filename: "views/partials/thread_header.jade" });
buf.push("<a" + (jade.attr("href", '/?referred_from=track' + thread.id, true, false)) + " aria-label=\"Keep track of this thread\" class=\"sd-t-wire\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 14, filename: jade_debug[0].filename });
buf.push("Track");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
}
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
jade_debug.shift();}.call(this,"thread" in locals_for_with?locals_for_with.thread:typeof thread!=="undefined"?thread:undefined,"userId" in locals_for_with?locals_for_with.userId:typeof userId!=="undefined"?userId:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "header\n  nav(role='navigation')\n    ul.sd-c-nav\n      li.sd-c-nav-item\n        a.sd-t-wire(href='/recent', aria-label='Go back') Back\n      li.sd-c-nav-right\n        if userId && thread\n          if thread.userId\n            a.sd-t-wire(href='/api/track/remove/' + thread.id, aria-label='Remove thread from list of tracked threads') Untrack\n          else\n            a.sd-t-wire(href='/api/track/' + thread.id, aria-label='Keep track of this thread') Track\n        else if thread\n          //- If the user is not logged in, assume they are a new user, and promote our service\n          a.sd-t-wire(href='/?referred_from=track' + thread.id, aria-label='Keep track of this thread') Track");
}
}
},{"jadum/runtime":84}],34:[function(require,module,exports){
var jade = require("jadum/runtime");
module.exports = function threadHeader(locals) {
var jade_debug = [{ lineno: 1, filename: "views/thread_header.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (threadId) {
jade_debug.unshift({ lineno: 0, filename: "views/thread_header.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/thread_header.jade" });
buf.push("<header>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "views/thread_header.jade" });
buf.push("<nav role=\"navigation\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "views/thread_header.jade" });
buf.push("<ul class=\"sd-c-nav\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: "views/thread_header.jade" });
buf.push("<li class=\"sd-c-nav-item\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: "views/thread_header.jade" });
buf.push("<a href=\"/recent\" aria-label=\"Go back\" class=\"sd-t-wire sd-o-back-icon\">");
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
jade_debug.unshift({ lineno: 6, filename: "views/thread_header.jade" });
buf.push("<li class=\"sd-c-nav-compose\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: "views/thread_header.jade" });
buf.push("<a" + (jade.attr("href", '/compose/' + threadId, true, false)) + " aria-label=\"Make a new post\" class=\"sd-t-wire sd-o-compose-icon\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: jade_debug[0].filename });
buf.push("Compose");
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
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "header\n  nav(role='navigation')\n    ul.sd-c-nav\n      li.sd-c-nav-item\n        a.sd-t-wire.sd-o-back-icon(href='/recent', aria-label='Go back') Back\n      li.sd-c-nav-compose\n        a.sd-t-wire.sd-o-compose-icon(href='/compose/' + threadId, aria-label='Make a new post') Compose\n");
}
}
},{"jadum/runtime":84}],35:[function(require,module,exports){
'use strict';

var templates = {
  'app/compose': require('./views/app/compose.js'),
  'app/find': require('./views/app/find.js'),
  'app/new_thread': require('./views/app/new_thread.js'),
  'app/notifications': require('./views/app/notifications.js'),
  'app/recent': require('./views/app/recent.js'),
  'app/replies': require('./views/app/replies.js'),
  'app/reply': require('./views/app/reply.js'),
  'app/reply_thread': require('./views/app/reply_thread.js'),
  'app/report': require('./views/app/report.js'),
  'app/ruleset': require('./views/app/ruleset.js'),
  'app/ruleset_moderate': require('./views/app/ruleset_moderate.js'),
  'app/ruleset_standard': require('./views/app/ruleset_standard.js'),
  'app/ruleset_strict': require('./views/app/ruleset_strict.js'),
  'app/settings': require('./views/app/settings.js'),
  'app/thread': require('./views/app/thread.js'),
  'app/tracked': require('./views/app/tracked.js'),
  'app_header': require('./views/app_header.js'),
  'header': require('./views/header.js'),
  'home/about': require('./views/home/about.js'),
  'home/index': require('./views/home/index.js'),
  'home/privacy': require('./views/home/privacy.js'),
  'home/register': require('./views/home/register.js'),
  'home/tos': require('./views/home/tos.js'),
  'home_header': require('./views/home_header.js'),
  'layout': require('./views/layout.js'),
  'nav': require('./views/nav.js'),
  'partials/app_header': require('./views/partials/app_header.js'),
  'partials/compose_header': require('./views/partials/compose_header.js'),
  'partials/flash': require('./views/partials/flash.js'),
  'partials/generic_header': require('./views/partials/generic_header.js'),
  'partials/home_header': require('./views/partials/home_header.js'),
  'partials/reply_header': require('./views/partials/reply_header.js'),
  'partials/thread_header': require('./views/partials/thread_header.js'),
  'thread_header': require('./views/thread_header.js')
};

var controllers = {
  'app/compose': require('../client/js/controllers/app/compose.js'),
  'app/new_thread': require('../client/js/controllers/app/new_thread.js'),
  'app/notifications': require('../client/js/controllers/app/notifications.js'),
  'app/recent': require('../client/js/controllers/app/recent.js'),
  'app/replies': require('../client/js/controllers/app/replies.js'),
  'app/reply': require('../client/js/controllers/app/reply.js'),
  'app/reply_thread': require('../client/js/controllers/app/reply_thread.js'),
  'app/report': require('../client/js/controllers/app/report.js'),
  'app/ruleset': require('../client/js/controllers/app/ruleset.js'),
  'app/settings': require('../client/js/controllers/app/settings.js'),
  'app/thread': require('../client/js/controllers/app/thread.js'),
  'app/tracked': require('../client/js/controllers/app/tracked.js'),
  'home/about': require('../client/js/controllers/home/about.js'),
  'home/index': require('../client/js/controllers/home/index.js'),
  'home/privacy': require('../client/js/controllers/home/privacy.js'),
  'home/register': require('../client/js/controllers/home/register.js'),
  'home/tos': require('../client/js/controllers/home/tos.js')
};

var routes = [
  {
    route: '/',
    action: 'home/index'
  },
  {
    route: '/register',
    action: 'home/register'
  },
  {
    route: '/about',
    action: 'home/about'
  },
  {
    route: '/tos',
    action: 'home/tos'
  },
  {
    route: '/privacy',
    action: 'home/privacy'
  },
  {
    route: '/recent',
    action: 'app/recent'
  },
  {
    route: '/recent/:page',
    action: 'app/recent'
  },
  {
    route: '/tracked',
    action: 'app/tracked'
  },
  {
    route: '/notifications',
    action: 'app/notifications'
  },
  {
    route: '/settings',
    action: 'app/settings'
  },
  {
    route: '/thread',
    action: 'app/new_thread'
  },
  {
    route: '/thread/:id',
    action: 'app/thread'
  },
  {
    route: '/thread/:id/:page',
    action: 'app/thread'
  },
  {
    route: '/compose/:id',
    action: 'app/compose'
  },
  {
    route: '/report/:threadId/:id',
    action: 'app/report'
  },
  {
    route: '/ruleset',
    action: 'app/ruleset'
  }
];

module.exports = {
  templates: templates,
  controllers: controllers,
  routes: routes
};

},{"../client/js/controllers/app/compose.js":36,"../client/js/controllers/app/new_thread.js":37,"../client/js/controllers/app/notifications.js":38,"../client/js/controllers/app/recent.js":39,"../client/js/controllers/app/replies.js":40,"../client/js/controllers/app/reply.js":41,"../client/js/controllers/app/reply_thread.js":42,"../client/js/controllers/app/report.js":43,"../client/js/controllers/app/ruleset.js":44,"../client/js/controllers/app/settings.js":45,"../client/js/controllers/app/thread.js":46,"../client/js/controllers/app/tracked.js":47,"../client/js/controllers/home/about.js":48,"../client/js/controllers/home/index.js":49,"../client/js/controllers/home/privacy.js":50,"../client/js/controllers/home/register.js":51,"../client/js/controllers/home/tos.js":52,"./views/app/compose.js":1,"./views/app/find.js":2,"./views/app/new_thread.js":3,"./views/app/notifications.js":4,"./views/app/recent.js":5,"./views/app/replies.js":6,"./views/app/reply.js":7,"./views/app/reply_thread.js":8,"./views/app/report.js":9,"./views/app/ruleset.js":10,"./views/app/ruleset_moderate.js":11,"./views/app/ruleset_standard.js":12,"./views/app/ruleset_strict.js":13,"./views/app/settings.js":14,"./views/app/thread.js":15,"./views/app/tracked.js":16,"./views/app_header.js":17,"./views/header.js":18,"./views/home/about.js":19,"./views/home/index.js":20,"./views/home/privacy.js":21,"./views/home/register.js":22,"./views/home/tos.js":23,"./views/home_header.js":24,"./views/layout.js":25,"./views/nav.js":26,"./views/partials/app_header.js":27,"./views/partials/compose_header.js":28,"./views/partials/flash.js":29,"./views/partials/generic_header.js":30,"./views/partials/home_header.js":31,"./views/partials/reply_header.js":32,"./views/partials/thread_header.js":33,"./views/thread_header.js":34}],36:[function(require,module,exports){
'use strict';

/*
 * Whenever a view that shares an action name with this controller (home/index) is rendered,
 *   this controller will be executed. The controller is executed even if the view is rendered as
 *   a partial view, although the `container` parameter will be different in that case.
 * http://taunus.bevacqua.io/api#client-side-controllers
 */
module.exports = function (model, container, route) {
    var setupEditorPage = require('../../modules/setupEditorPage');
    setupEditorPage(model.apiUrl);
    console.log('Rendered view %s using model:\n%s', route.action, JSON.stringify(model, null, 2));
};

},{"../../modules/setupEditorPage":55}],37:[function(require,module,exports){
'use strict';

/*
 * Whenever a view that shares an action name with this controller (home/index) is rendered,
 *   this controller will be executed. The controller is executed even if the view is rendered as
 *   a partial view, although the `container` parameter will be different in that case.
 * http://taunus.bevacqua.io/api#client-side-controllers
 */
module.exports = function (model, container, route) {
  console.log('Rendered view %s using model:\n%s', route.action, JSON.stringify(model, null, 2));
};

},{}],38:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"dup":37}],39:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"dup":37}],40:[function(require,module,exports){
'use strict';

/*
 * Whenever a view that shares an action name with this controller (home/index) is rendered,
 *   this controller will be executed. The controller is executed even if the view is rendered as
 *   a partial view, although the `container` parameter will be different in that case.
 * http://taunus.bevacqua.io/api#client-side-controllers
 */
module.exports = function (model, container, route) {
    console.log('Rendered view %s using model:\n%s', route.action, JSON.stringify(model, null, 2));
};

},{}],41:[function(require,module,exports){
'use strict';

/*
 * Whenever a view that shares an action name with this controller (home/index) is rendered,
 *   this controller will be executed. The controller is executed even if the view is rendered as
 *   a partial view, although the `container` parameter will be different in that case.
 * http://taunus.bevacqua.io/api#client-side-controllers
 */
module.exports = function (model, container, route) {
    var setupEditorPage = require('../../modules/setupEditorPage');
    console.log('Rendered view %s using model:\n%s', route.action, JSON.stringify(model, null, 2));
    setupEditorPage(model.apiUrl);
};

},{"../../modules/setupEditorPage":55}],42:[function(require,module,exports){
arguments[4][41][0].apply(exports,arguments)
},{"../../modules/setupEditorPage":55,"dup":41}],43:[function(require,module,exports){
arguments[4][36][0].apply(exports,arguments)
},{"../../modules/setupEditorPage":55,"dup":36}],44:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"dup":37}],45:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"dup":37}],46:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"dup":37}],47:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"dup":37}],48:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],49:[function(require,module,exports){
'use strict';

/*
 * Whenever a view that shares an action name with this controller (home/index) is rendered,
 *   this controller will be executed. The controller is executed even if the view is rendered as
 *   a partial view, although the `container` parameter will be different in that case.
 * http://taunus.bevacqua.io/api#client-side-controllers
 */
module.exports = function (model, container, route) {
    console.log('Rendered view %s using model:\n%s', route.action, JSON.stringify(model, null, 2));
    var nojs = require('../../modules/showNoJS');
    nojs();
};

},{"../../modules/showNoJS":56}],50:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"dup":37}],51:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"dup":37}],52:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"dup":37}],53:[function(require,module,exports){
(function (global){
'use strict';

/*
 * The client-side mountpoint just needs a root DOM element and a properly set up wiring module.
 * Everything else is up to you!
 * http://taunus.bevacqua.io/api#-taunus-mount-container-wiring-options-
 */
var taunus = require('taunus');

/*
 * For ways of creating the wiring module, read about the CLI interface:
 * http://taunus.bevacqua.io/api#command-line-interface
 */
var wiring = require('../../.bin/wiring');


var main = document.getElementsByTagName('body')[0];

require('../../lib/squire/squire');

wiring.version = '1.001';

/*
 * The options at the client-side mountpoint are quite futuristic.
 * Check them out:
 * http://taunus.bevacqua.io/api#-taunus-mount-container-wiring-options-
 */
taunus.mount(main, wiring);

/*
 * You could export taunus so that it's accessible as a global
 * Doing so might be useful during development.
 */
global.taunus = taunus;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../../.bin/wiring":35,"../../lib/squire/squire":57,"taunus":114}],54:[function(require,module,exports){
// sets up Squire, the html editor
// requirements: editor markup must match
// the markup on compose.jade, ids and classes
// especially
module.exports = function (formElement) {
    var bold, 
        italic, 
        link, 
        image,
        urlContainer,
        urlField,
        urlSubmitBtn,
        imageContainer,
        imageField,
        imageSubmitBtn,
        editor,
        addLink,
        addImage,
        toggleLink,
        toggleImage;
    var isBold = false;
    var isItalic = false;
    var addingLink = false;
    var addingImage = false;
    var editorElement = document.createElement('iframe');
    
    editorElement.src = '/js/squire/document.html';
    editorElement.className = 'sd-c-editor';
    
    // editor is loaded asynchronously, so let the caller
    // know that the editor has been loaded, and hand it over.
    editorElement.addEventListener('load', function () {
        editor = editorElement.contentWindow.editor;
        window.dispatchEvent(new CustomEvent('editor-loaded', {
                            detail: { editor: editor },
                            bubbles: true,
                            canceleable: false
                        }));
    });
    
    formElement.removeChild(document.getElementById('editor'));
    formElement.insertBefore(editorElement, document.querySelector('.sd-o-submit-btn'));
    
    bold = document.getElementById('editor_bold');
    italic = document.getElementById('editor_italic');
    link = document.getElementById('editor_link');
    image = document.getElementById('editor_image');
    urlContainer = document.getElementById('editor_url');
    urlField = document.getElementById('editor_url_field');
    urlSubmitBtn = document.getElementById('editor_url_btn');
    imageContainer = document.getElementById('editor_image_url');
    imageField = document.getElementById('editor_image_field');
    imageSubmitBtn = document.getElementById('editor_image_btn');
    
    addLink = function () {
        if (addingLink) {
            editor.makeLink(urlField.value, { target: '_blank' });
            urlField.value = '';
            urlContainer.className = 'sd-c-toolbar__url sd-u-hide';
            addingLink = false;
        }
    };
    
    addImage = function () {
        if (addingImage) {
            editor.insertImage(imageField.value);
            imageField.value = '';
            imageContainer.className = 'sd-c-toolbar__url sd-u-hide';
            addingImage = false;
        }
    };
    
    toggleLink = function () {
        if (urlContainer.className === 'sd-c-toolbar__url sd-u-hide') {
            urlContainer.className = 'sd-c-toolbar__url sd-u-show';
            addingLink = true;
        } else {
            urlContainer.className = 'sd-c-toolbar__url sd-u-hide';
            urlField.value = '';
            addingLink = false;
        }
    };
    
    toggleImage = function () {
        if (imageContainer.className === 'sd-c-toolbar__url sd-u-hide') {
            imageContainer.className = 'sd-c-toolbar__url sd-u-show';
            addingImage = true;
        } else {
            imageContainer.className = 'sd-c-toolbar__url sd-u-hide';
            imageField.value = '';
            addingImage = false;
        }
    };
    
    bold.addEventListener('click', function () {
        if (isBold) {
            editor.removeBold();
            isBold = false;
            bold.className = 'sd-t-btn--no-style';
        } else {
            editor.bold();
            isBold = true;
            bold.className = 'sd-t-btn--no-style is-active';
        }
    });
    
    italic.addEventListener('click', function () {
        if (isItalic) {
            editor.removeItalic();
            isItalic = false;
            italic.className = 'sd-t-btn--no-style';
        } else {
            editor.italic();
            isItalic = true;
            italic.className = 'sd-t-btn--no-style is-active';
        }
    });
    
    link.addEventListener('click', function () {
        // only have image or link active at a time
        if (addingImage) {
            toggleImage();
        }
        
        toggleLink();
    });
    
    image.addEventListener('click', function () {
        // only have image or link active at a time
        if (addingLink) {
            toggleLink();
        }
        
        toggleImage();
    });
    
    urlField.addEventListener('keyup', function (e) {
        var key = e.keyCode ? e.keyCode : e.which;
        
        if (key === 13) {
            addLink();
        }
    });
    
    imageField.addEventListener('keyup', function (e) {
        var key = e.keyCode ? e.keyCode : e.which;
        
        if (key === 13) {
            addImage();
        }
    });
    
    urlSubmitBtn.addEventListener('click', function () {
        addLink();
    });
    
    imageSubmitBtn.addEventListener('click', function () {
        addImage();
    });
};

},{}],55:[function(require,module,exports){
'use strict';
// used in conjuction with the compose.jade
// partial to get the editor ready for use
module.exports = function (url) {
    var editor;
    var formElement = document.getElementById('new_post_form');
    var xhr = require('xhr');
    var nojs = require('./showNoJS');
    var setupEditor = require('./setupEditor');
    
    nojs();
    setupEditor(formElement);
    
    // from setupEditor
    window.addEventListener('editor-loaded', function (e) {
        editor = e.detail.editor;
    });
    
    // ok so submitting an iframe in a form is not going to work
    // use editor.getHTML to get the value to submit
    formElement.addEventListener('submit', function (e) {
        var i;
        var postData = {};
        var formElements = formElement.elements;
        var numFormElements = formElement.elements.length;
        
        e.preventDefault();
        
        for (i = 0; i < numFormElements; i++) {
            if (formElements[i].name === 'id') {
                postData.id = formElements[i].value;
            } else if (formElements[i].name === 'threadId') {
                postData.threadId = formElements[i].value;
            } else if (formElements[i].name === 'userId') {
                postData.userId = formElements[i].value;
            }
        }
        
        postData.content = editor.getHTML();
        // check for non-empty posts
        if (postData.content && postData.content.indexOf('<div><br></div>') !== 0) {
            xhr({
                json: postData,
                url: url,
                method: 'POST'
            }, function (error, response, body) {
                if (error && error.message) {
                    alert(error.message);
                } else {
                    window.location = '/thread/' + postData.threadId;
                }
            });
        }
    });
};

},{"./setupEditor":54,"./showNoJS":56,"xhr":142}],56:[function(require,module,exports){
// updates html to show any elements that need javascript to work
// NOTE: sd-no-js must be the last class in the set in order for
// this to work.
module.exports = function () {
    var i;
    var nojs;
    var numElements;
    var currentElement;
    
    // show all elements that require javascript
    nojs = document.querySelectorAll('.sd-no-js');
    numElements = nojs.length;

    for (i = 0; i < numElements; i++) {
        currentElement = nojs[i];
        currentElement.className = currentElement.className.substr(0, currentElement.className.length - 8);
    }
};

},{}],57:[function(require,module,exports){
!function(e,t){"use strict";function n(e,t,n){this.root=this.currentNode=e,this.nodeType=t,this.filter=n}function r(e,t){for(var n=e.length;n--;)if(!t(e[n]))return!1;return!0}function o(e,t,n){if(e.nodeName!==t)return!1;for(var r in n)if(e.getAttribute(r)!==n[r])return!1;return!0}function i(e,t){return e.nodeType===t.nodeType&&e.nodeName===t.nodeName&&e.className===t.className&&(!e.style&&!t.style||e.style.cssText===t.style.cssText)}function a(e){return e.nodeType===O&&!!tt[e.nodeName]}function s(e){return et.test(e.nodeName)}function d(e){return e.nodeType===O&&!s(e)&&r(e.childNodes,s)}function l(e){return e.nodeType===O&&!s(e)&&!d(e)}function c(e){var t=e.ownerDocument,r=new n(t.body,R,d,!1);return r.currentNode=e,r}function h(e){return c(e).previousNode()}function f(e){return c(e).nextNode()}function u(e,t,n){do if(o(e,t,n))return e;while(e=e.parentNode);return null}function p(e){var t,n,r,o,i=e.parentNode;return i&&e.nodeType===O?(t=p(i),t+=(t?">":"")+e.nodeName,(n=e.id)&&(t+="#"+n),(r=e.className.trim())&&(o=r.split(/\s\s*/),o.sort(),t+=".",t+=o.join("."))):t=i?p(i):"",t}function g(e){var t=e.nodeType;return t===O?e.childNodes.length:e.length||0}function m(e){var t=e.parentNode;return t&&t.removeChild(e),e}function v(e,t){var n=e.parentNode;n&&n.replaceChild(t,e)}function N(e){for(var t=e.ownerDocument.createDocumentFragment(),n=e.childNodes,r=n?n.length:0;r--;)t.appendChild(e.firstChild);return t}function C(e,n,r,o){var i,a,s,d,l=e.createElement(n);if(r instanceof Array&&(o=r,r=null),r)for(i in r)a=r[i],a!==t&&l.setAttribute(i,r[i]);if(o)for(s=0,d=o.length;d>s;s+=1)l.appendChild(o[s]);return l}function S(e){var t,n,r,o=e.ownerDocument,i=e;if("BODY"===e.nodeName&&((n=e.firstChild)&&"BR"!==n.nodeName||(r=k(o),t=r?r.createDefaultBlock():C(o,"DIV"),n?e.replaceChild(t,n):e.appendChild(t),e=t,t=null)),s(e)){for(n=e.firstChild;G&&n&&n.nodeType===x&&!n.data;)e.removeChild(n),n=e.firstChild;n||(G?(t=o.createTextNode(w),k(o)._didAddZWS()):t=o.createTextNode(""))}else if(Q){for(;e.nodeType!==x&&!a(e);){if(n=e.firstChild,!n){t=o.createTextNode("");break}e=n}e.nodeType===x?/^ +$/.test(e.data)&&(e.data=""):a(e)&&e.parentNode.insertBefore(o.createTextNode(""),e)}else if(!e.querySelector("BR"))for(t=C(o,"BR");(n=e.lastElementChild)&&!s(n);)e=n;return t&&e.appendChild(t),i}function _(e){var t,n,r,o,i=e.childNodes,a=e.ownerDocument,d=null;for(t=0,n=i.length;n>t;t+=1)r=i[t],o="BR"===r.nodeName,!o&&s(r)?(d||(d=C(a,"DIV")),d.appendChild(r),t-=1,n-=1):(o||d)&&(d||(d=C(a,"DIV")),S(d),o?e.replaceChild(d,r):(e.insertBefore(d,r),t+=1,n+=1),d=null),l(r)&&_(r);return d&&e.appendChild(S(d)),e}function y(e,t,n){var r,o,i,a=e.nodeType;if(a===x&&e!==n)return y(e.parentNode,e.splitText(t),n);if(a===O){if("number"==typeof t&&(t=t<e.childNodes.length?e.childNodes[t]:null),e===n)return t;for(r=e.parentNode,o=e.cloneNode(!1);t;)i=t.nextSibling,o.appendChild(t),t=i;return"OL"===e.nodeName&&u(e,"BLOCKQUOTE")&&(o.start=(+e.start||1)+e.childNodes.length-1),S(e),S(o),(i=e.nextSibling)?r.insertBefore(o,i):r.appendChild(o),y(r,o,n)}return t}function T(e,t){if(e.nodeType===O)for(var n,r,o,a=e.childNodes,d=a.length,l=[];d--;)if(n=a[d],r=d&&a[d-1],d&&s(n)&&i(n,r)&&!tt[n.nodeName])t.startContainer===n&&(t.startContainer=r,t.startOffset+=g(r)),t.endContainer===n&&(t.endContainer=r,t.endOffset+=g(r)),t.startContainer===e&&(t.startOffset>d?t.startOffset-=1:t.startOffset===d&&(t.startContainer=r,t.startOffset=g(r))),t.endContainer===e&&(t.endOffset>d?t.endOffset-=1:t.endOffset===d&&(t.endContainer=r,t.endOffset=g(r))),m(n),n.nodeType===x?r.appendData(n.data):l.push(N(n));else if(n.nodeType===O){for(o=l.length;o--;)n.appendChild(l.pop());T(n,t)}}function E(e,t,n){for(var r,o,i,a=t;1===a.parentNode.childNodes.length;)a=a.parentNode;m(a),o=e.childNodes.length,r=e.lastChild,r&&"BR"===r.nodeName&&(e.removeChild(r),o-=1),i={startContainer:e,startOffset:o,endContainer:e,endOffset:o},e.appendChild(N(t)),T(e,i),n.setStart(i.startContainer,i.startOffset),n.collapse(!0),V&&(r=e.lastChild)&&"BR"===r.nodeName&&e.removeChild(r)}function B(e){var t,n,r=e.previousSibling,o=e.firstChild,a=e.ownerDocument,s="LI"===e.nodeName;if(!s||o&&/^[OU]L$/.test(o.nodeName))if(r&&i(r,e)){if(!l(r)){if(!s)return;n=C(a,"DIV"),n.appendChild(N(r)),r.appendChild(n)}m(e),t=!l(e),r.appendChild(N(e)),t&&_(r),o&&B(o)}else s&&(r=C(a,"DIV"),e.insertBefore(r,o),S(r))}function k(e){for(var t,n=vt.length;n--;)if(t=vt[n],t._doc===e)return t;return null}function b(e){var t,n=e.defaultView,r=e.body;this._win=n,this._doc=e,this._body=r,this._events={},this._sel=n.getSelection(),this._lastSelection=null,$&&this.addEventListener("beforedeactivate",this.getSelection),this._hasZWS=!1,this._lastAnchorNode=null,this._lastFocusNode=null,this._path="",this.addEventListener("keyup",this._updatePathOnEvent),this.addEventListener("mouseup",this._updatePathOnEvent),n.addEventListener("focus",this,!1),n.addEventListener("blur",this,!1),this._undoIndex=-1,this._undoStack=[],this._undoStackLength=0,this._isInUndoState=!1,this._ignoreChange=!1,Y?(t=new MutationObserver(this._docWasChanged.bind(this)),t.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0}),this._mutation=t):this.addEventListener("keyup",this._keyUpDetectChange),this.defaultBlockTag="DIV",this.defaultBlockProperties=null,this._awaitingPaste=!1,this.addEventListener(z?"beforecut":"cut",this._onCut),this.addEventListener(z?"beforepaste":"paste",this._onPaste),this.addEventListener(V?"keypress":"keydown",this._onKey),z&&(n.Text.prototype.splitText=function(e){var t=this.ownerDocument.createTextNode(this.data.slice(e)),n=this.nextSibling,r=this.parentNode,o=this.length-e;return n?r.insertBefore(t,n):r.appendChild(t),o&&this.deleteData(e,o),t}),r.setAttribute("contenteditable","true"),this.setHTML("");try{e.execCommand("enableObjectResizing",!1,"false"),e.execCommand("enableInlineTableEditing",!1,"false")}catch(o){}vt.push(this)}var L=2,O=1,x=3,R=1,A=4,D=0,U=1,I=2,P=3,w="​",F=e.defaultView,M=navigator.userAgent,W=/iP(?:ad|hone|od)/.test(M),H=/Mac OS X/.test(M),K=/Gecko\//.test(M),z=/Trident\/[456]\./.test(M),V=!!F.opera,Z=/WebKit\//.test(M),q=H?"meta-":"ctrl-",Q=z||V,G=z||Z,$=z,Y="undefined"!=typeof MutationObserver,j=/[^ \t\r\n]/,X=Array.prototype.indexOf,J={1:1,2:2,3:4,8:128,9:256,11:1024};n.prototype.nextNode=function(){for(var e,t=this.currentNode,n=this.root,r=this.nodeType,o=this.filter;;){for(e=t.firstChild;!e&&t&&t!==n;)e=t.nextSibling,e||(t=t.parentNode);if(!e)return null;if(J[e.nodeType]&r&&o(e))return this.currentNode=e,e;t=e}},n.prototype.previousNode=function(){for(var e,t=this.currentNode,n=this.root,r=this.nodeType,o=this.filter;;){if(t===n)return null;if(e=t.previousSibling)for(;t=e.lastChild;)e=t;else e=t.parentNode;if(!e)return null;if(J[e.nodeType]&r&&o(e))return this.currentNode=e,e;t=e}};var et=/^(?:#text|A(?:BBR|CRONYM)?|B(?:R|D[IO])?|C(?:ITE|ODE)|D(?:ATA|FN|EL)|EM|FONT|HR|I(?:NPUT|MG|NS)?|KBD|Q|R(?:P|T|UBY)|S(?:U[BP]|PAN|TR(?:IKE|ONG)|MALL|AMP)?|U|VAR|WBR)$/,tt={BR:1,IMG:1,INPUT:1},nt=function(e,t){for(var n=e.childNodes;t&&e.nodeType===O;)e=n[t-1],n=e.childNodes,t=n.length;return e},rt=function(e,t){if(e.nodeType===O){var n=e.childNodes;if(t<n.length)e=n[t];else{for(;e&&!e.nextSibling;)e=e.parentNode;e&&(e=e.nextSibling)}}return e},ot=function(e,t){var n,r,o,i,a=e.startContainer,s=e.startOffset,d=e.endContainer,l=e.endOffset;a.nodeType===x?(n=a.parentNode,r=n.childNodes,s===a.length?(s=X.call(r,a)+1,e.collapsed&&(d=n,l=s)):(s&&(i=a.splitText(s),d===a?(l-=s,d=i):d===n&&(l+=1),a=i),s=X.call(r,a)),a=n):r=a.childNodes,o=r.length,s===o?a.appendChild(t):a.insertBefore(t,r[s]),a===d&&(l+=r.length-o),e.setStart(a,s),e.setEnd(d,l)},it=function(e,t){var n=e.startContainer,r=e.startOffset,o=e.endContainer,i=e.endOffset;t||(t=e.commonAncestorContainer),t.nodeType===x&&(t=t.parentNode);for(var a,s,d,l=y(o,i,t),c=y(n,r,t),h=t.ownerDocument.createDocumentFragment();c!==l;)a=c.nextSibling,h.appendChild(c),c=a;return n=t,r=l?X.call(t.childNodes,l):t.childNodes.length,d=t.childNodes[r],s=d&&d.previousSibling,s&&s.nodeType===x&&d.nodeType===x&&(n=s,r=s.length,s.appendData(d.data),m(d)),e.setStart(n,r),e.collapse(!0),S(t),h},at=function(e){ct(e),it(e),lt(e);var t=ht(e),n=ft(e);t&&n&&t!==n&&E(t,n,e),t&&S(t);var r=e.endContainer.ownerDocument.body,o=r.firstChild;o&&"BR"!==o.nodeName||(S(r),e.selectNodeContents(r.firstChild))},st=function(e,t){for(var n=!0,r=t.childNodes,o=r.length;o--;)if(!s(r[o])){n=!1;break}if(e.collapsed||at(e),lt(e),n)ot(e,t),e.collapse(!1);else{for(var i,a,d=e.startContainer,l=y(d,e.startOffset,u(d.parentNode,"BLOCKQUOTE")||d.ownerDocument.body),c=l.previousSibling,h=c,p=h.childNodes.length,m=l,v=0,N=l.parentNode;(i=h.lastChild)&&i.nodeType===O&&"BR"!==i.nodeName;)h=i,p=h.childNodes.length;for(;(i=m.firstChild)&&i.nodeType===O&&"BR"!==i.nodeName;)m=i;for(;(i=t.firstChild)&&s(i);)h.appendChild(i);for(;(i=t.lastChild)&&s(i);)m.insertBefore(i,m.firstChild),v+=1;for(a=t;a=f(a);)S(a);N.insertBefore(t,l),a=l.previousSibling,l.textContent?B(l):N.removeChild(l),l.parentNode||(m=a,v=g(m)),c.textContent?B(c):(h=c.nextSibling,p=0,N.removeChild(c)),e.setStart(h,p),e.setEnd(m,v),lt(e)}},dt=function(e,t,n){var r=t.ownerDocument.createRange();if(r.selectNode(t),n){var o=e.compareBoundaryPoints(P,r)>-1,i=e.compareBoundaryPoints(U,r)<1;return!o&&!i}var a=e.compareBoundaryPoints(D,r)<1,s=e.compareBoundaryPoints(I,r)>-1;return a&&s},lt=function(e){for(var t,n=e.startContainer,r=e.startOffset,o=e.endContainer,i=e.endOffset;n.nodeType!==x&&(t=n.childNodes[r],t&&!a(t));)n=t,r=0;if(i)for(;o.nodeType!==x&&(t=o.childNodes[i-1],t&&!a(t));)o=t,i=g(o);else for(;o.nodeType!==x&&(t=o.firstChild,t&&!a(t));)o=t;e.collapsed?(e.setStart(o,i),e.setEnd(n,r)):(e.setStart(n,r),e.setEnd(o,i))},ct=function(e,t){var n,r=e.startContainer,o=e.startOffset,i=e.endContainer,a=e.endOffset;for(t||(t=e.commonAncestorContainer);r!==t&&!o;)n=r.parentNode,o=X.call(n.childNodes,r),r=n;for(;i!==t&&a===g(i);)n=i.parentNode,a=X.call(n.childNodes,i)+1,i=n;e.setStart(r,o),e.setEnd(i,a)},ht=function(e){var t,n=e.startContainer;return s(n)?t=h(n):d(n)?t=n:(t=nt(n,e.startOffset),t=f(t)),t&&dt(e,t,!0)?t:null},ft=function(e){var t,n,r=e.endContainer;if(s(r))t=h(r);else if(d(r))t=r;else{if(t=rt(r,e.endOffset),!t)for(t=r.ownerDocument.body;n=t.lastChild;)t=n;t=h(t)}return t&&dt(e,t,!0)?t:null},ut=new n(null,A|R,function(e){return e.nodeType===x?j.test(e.data):"IMG"===e.nodeName}),pt=function(e){var t=e.startContainer,n=e.startOffset;if(t.nodeType===x){if(n)return!1;ut.currentNode=t}else ut.currentNode=rt(t,n);return ut.root=ht(e),!ut.previousNode()},gt=function(e){var t,n=e.endContainer,r=e.endOffset;if(n.nodeType===x){if(t=n.data.length,t&&t>r)return!1;ut.currentNode=n}else ut.currentNode=nt(n,r);return ut.root=ft(e),!ut.nextNode()},mt=function(e){var t,n=ht(e),r=ft(e);n&&r&&(t=n.parentNode,e.setStart(t,X.call(t.childNodes,n)),t=r.parentNode,e.setEnd(t,X.call(t.childNodes,r)+1))},vt=[],Nt=b.prototype;Nt.createElement=function(e,t,n){return C(this._doc,e,t,n)},Nt.createDefaultBlock=function(e){return S(this.createElement(this.defaultBlockTag,this.defaultBlockProperties,e))},Nt.didError=function(e){console.log(e)},Nt.getDocument=function(){return this._doc};var Ct={focus:1,blur:1,pathChange:1,select:1,input:1,undoStateChange:1};Nt.fireEvent=function(e,t){var n,r,o,i=this._events[e];if(i)for(t||(t={}),t.type!==e&&(t.type=e),i=i.slice(),n=0,r=i.length;r>n;n+=1){o=i[n];try{o.handleEvent?o.handleEvent(t):o.call(this,t)}catch(a){a.details="Squire: fireEvent error. Event type: "+e,this.didError(a)}}return this},Nt.destroy=function(){var e,t=this._win,n=this._doc,r=this._events;t.removeEventListener("focus",this,!1),t.removeEventListener("blur",this,!1);for(e in r)Ct[e]||n.removeEventListener(e,this,!0);this._mutation&&this._mutation.disconnect();for(var o=vt.length;o--;)vt[o]===this&&vt.splice(o,1)},Nt.handleEvent=function(e){this.fireEvent(e.type,e)},Nt.addEventListener=function(e,t){var n=this._events[e];return t?(n||(n=this._events[e]=[],Ct[e]||this._doc.addEventListener(e,this,!0)),n.push(t),this):(this.didError({name:"Squire: addEventListener with null or undefined fn",message:"Event type: "+e}),this)},Nt.removeEventListener=function(e,t){var n,r=this._events[e];if(r){for(n=r.length;n--;)r[n]===t&&r.splice(n,1);r.length||(delete this._events[e],Ct[e]||this._doc.removeEventListener(e,this,!1))}return this},Nt._createRange=function(e,t,n,r){if(e instanceof this._win.Range)return e.cloneRange();var o=this._doc.createRange();return o.setStart(e,t),n?o.setEnd(n,r):o.setEnd(e,t),o},Nt.setSelection=function(e){if(e){W&&this._win.focus();var t=this._sel;t.removeAllRanges(),t.addRange(e)}return this},Nt.getSelection=function(){var e,t,n,r=this._sel;return r.rangeCount?(e=r.getRangeAt(0).cloneRange(),t=e.startContainer,n=e.endContainer,t&&a(t)&&e.setStartBefore(t),n&&a(n)&&e.setEndBefore(n),this._lastSelection=e):e=this._lastSelection,e||(e=this._createRange(this._body.firstChild,0)),e},Nt.getSelectedText=function(){var e,t=this.getSelection(),r=new n(t.commonAncestorContainer,A|R,function(e){return dt(t,e,!0)}),o=t.startContainer,i=t.endContainer,a=r.currentNode=o,d="",l=!1;for(r.filter(a)||(a=r.nextNode());a;)a.nodeType===x?(e=a.data,e&&/\S/.test(e)&&(a===i&&(e=e.slice(0,t.endOffset)),a===o&&(e=e.slice(t.startOffset)),d+=e,l=!0)):("BR"===a.nodeName||l&&!s(a))&&(d+="\n",l=!1),a=r.nextNode();return d},Nt.getPath=function(){return this._path};var St=function(e){for(var t,r,o,i=new n(e,A,function(){return!0},!1);r=i.nextNode();)for(;(o=r.data.indexOf(w))>-1;){if(1===r.length){do t=r.parentNode,t.removeChild(r),r=t;while(s(r)&&!g(r));break}r.deleteData(o,1)}};Nt._didAddZWS=function(){this._hasZWS=!0},Nt._removeZWS=function(){this._hasZWS&&(St(this._body),this._hasZWS=!1)},Nt._updatePath=function(e,t){var n,r=e.startContainer,o=e.endContainer;(t||r!==this._lastAnchorNode||o!==this._lastFocusNode)&&(this._lastAnchorNode=r,this._lastFocusNode=o,n=r&&o?r===o?p(o):"(selection)":"",this._path!==n&&(this._path=n,this.fireEvent("pathChange",{path:n}))),e.collapsed||this.fireEvent("select")},Nt._updatePathOnEvent=function(){this._updatePath(this.getSelection())},Nt.focus=function(){return V||this._body.focus(),this._win.focus(),this},Nt.blur=function(){return K&&this._body.blur(),top.focus(),this};var _t="squire-selection-start",yt="squire-selection-end";Nt._saveRangeToBookmark=function(e){var t,n=this.createElement("INPUT",{id:_t,type:"hidden"}),r=this.createElement("INPUT",{id:yt,type:"hidden"});ot(e,n),e.collapse(!1),ot(e,r),n.compareDocumentPosition(r)&L&&(n.id=yt,r.id=_t,t=n,n=r,r=t),e.setStartAfter(n),e.setEndBefore(r)},Nt._getRangeAndRemoveBookmark=function(e){var t=this._doc,n=t.getElementById(_t),r=t.getElementById(yt);if(n&&r){var o,i=n.parentNode,a=r.parentNode,s={startContainer:i,endContainer:a,startOffset:X.call(i.childNodes,n),endOffset:X.call(a.childNodes,r)};i===a&&(s.endOffset-=1),m(n),m(r),T(i,s),i!==a&&T(a,s),e||(e=t.createRange()),e.setStart(s.startContainer,s.startOffset),e.setEnd(s.endContainer,s.endOffset),o=e.collapsed,lt(e),o&&e.collapse(!0)}return e||null},Nt._keyUpDetectChange=function(e){var t=e.keyCode;e.ctrlKey||e.metaKey||e.altKey||!(16>t||t>20)||!(33>t||t>45)||this._docWasChanged()},Nt._docWasChanged=function(){return Y&&this._ignoreChange?void(this._ignoreChange=!1):(this._isInUndoState&&(this._isInUndoState=!1,this.fireEvent("undoStateChange",{canUndo:!0,canRedo:!1})),void this.fireEvent("input"))},Nt._recordUndoState=function(e){if(!this._isInUndoState){var t=this._undoIndex+=1,n=this._undoStack;t<this._undoStackLength&&(n.length=this._undoStackLength=t),e&&this._saveRangeToBookmark(e),n[t]=this._getHTML(),this._undoStackLength+=1,this._isInUndoState=!0}},Nt.undo=function(){if(0!==this._undoIndex||!this._isInUndoState){this._recordUndoState(this.getSelection()),this._undoIndex-=1,this._setHTML(this._undoStack[this._undoIndex]);var e=this._getRangeAndRemoveBookmark();e&&this.setSelection(e),this._isInUndoState=!0,this.fireEvent("undoStateChange",{canUndo:0!==this._undoIndex,canRedo:!0}),this.fireEvent("input")}return this},Nt.redo=function(){var e=this._undoIndex,t=this._undoStackLength;if(t>e+1&&this._isInUndoState){this._undoIndex+=1,this._setHTML(this._undoStack[this._undoIndex]);var n=this._getRangeAndRemoveBookmark();n&&this.setSelection(n),this.fireEvent("undoStateChange",{canUndo:!0,canRedo:t>e+2}),this.fireEvent("input")}return this},Nt.hasFormat=function(e,t,r){if(e=e.toUpperCase(),t||(t={}),!r&&!(r=this.getSelection()))return!1;var o,i,a=r.commonAncestorContainer;if(u(a,e,t))return!0;if(a.nodeType===x)return!1;o=new n(a,A,function(e){return dt(r,e,!0)},!1);for(var s=!1;i=o.nextNode();){if(!u(i,e,t))return!1;s=!0}return s},Nt._addFormat=function(e,t,r){var o,i,a,s,d,l,c,h;if(r.collapsed)o=S(this.createElement(e,t)),ot(r,o),r.setStart(o.firstChild,o.firstChild.length),r.collapse(!0);else{if(i=new n(r.commonAncestorContainer,A|R,function(e){return(e.nodeType===x||"BR"===e.nodeName)&&dt(r,e,!0)},!1),a=r.startContainer,d=r.startOffset,s=r.endContainer,l=r.endOffset,i.currentNode=a,i.filter(a)||(a=i.nextNode(),d=0),!a)return r;do c=i.currentNode,h=!u(c,e,t),h&&(c===s&&c.length>l&&c.splitText(l),c===a&&d&&(c=c.splitText(d),s===a&&(s=c,l-=d),a=c,d=0),o=this.createElement(e,t),v(c,o),o.appendChild(c));while(i.nextNode());s.nodeType!==x&&(c.nodeType===x?(s=c,l=c.length):(s=c.parentNode,l=1)),r=this._createRange(a,d,s,l)}return r},Nt._removeFormat=function(e,t,n,r){this._saveRangeToBookmark(n);var i,a=this._doc;n.collapsed&&(G?(i=a.createTextNode(w),this._didAddZWS()):i=a.createTextNode(""),ot(n,i));for(var d=n.commonAncestorContainer;s(d);)d=d.parentNode;var l=n.startContainer,c=n.startOffset,h=n.endContainer,f=n.endOffset,u=[],p=function(e,t){if(!dt(n,e,!1)){var r,o,i=e.nodeType===x;if(!dt(n,e,!0))return void("INPUT"===e.nodeName||i&&!e.data||u.push([t,e]));if(i)e===h&&f!==e.length&&u.push([t,e.splitText(f)]),e===l&&c&&(e.splitText(c),u.push([t,e]));else for(r=e.firstChild;r;r=o)o=r.nextSibling,p(r,t)}},g=Array.prototype.filter.call(d.getElementsByTagName(e),function(r){return dt(n,r,!0)&&o(r,e,t)});r||g.forEach(function(e){p(e,e)}),u.forEach(function(e){var t=e[0].cloneNode(!1),n=e[1];v(n,t),t.appendChild(n)}),g.forEach(function(e){v(e,N(e))}),this._getRangeAndRemoveBookmark(n),i&&n.collapse(!1);var m={startContainer:n.startContainer,startOffset:n.startOffset,endContainer:n.endContainer,endOffset:n.endOffset};return T(d,m),n.setStart(m.startContainer,m.startOffset),n.setEnd(m.endContainer,m.endOffset),n},Nt.changeFormat=function(e,t,n,r){return n||(n=this.getSelection())?(this._recordUndoState(n),this._getRangeAndRemoveBookmark(n),t&&(n=this._removeFormat(t.tag.toUpperCase(),t.attributes||{},n,r)),e&&(n=this._addFormat(e.tag.toUpperCase(),e.attributes||{},n)),this.setSelection(n),this._updatePath(n,!0),Y||this._docWasChanged(),this):void 0};var Tt={DT:"DD",DD:"DT",LI:"LI"},Et=function(e,t,n,r){var i=Tt[t.nodeName],a=null,s=y(n,r,t.parentNode);return i||(i=e.defaultBlockTag,a=e.defaultBlockProperties),o(s,i,a)||(t=C(s.ownerDocument,i,a),s.dir&&(t.className="rtl"===s.dir?"dir-rtl":"",t.dir=s.dir),v(s,t),t.appendChild(N(s)),s=t),s};Nt.forEachBlock=function(e,t,n){if(!n&&!(n=this.getSelection()))return this;t&&(this._recordUndoState(n),this._getRangeAndRemoveBookmark(n));var r=ht(n),o=ft(n);if(r&&o)do if(e(r)||r===o)break;while(r=f(r));return t&&(this.setSelection(n),this._updatePath(n,!0),Y||this._docWasChanged()),this},Nt.modifyBlocks=function(e,t){if(!t&&!(t=this.getSelection()))return this;this._isInUndoState?this._saveRangeToBookmark(t):this._recordUndoState(t),mt(t);var n,r=this._body;return ct(t,r),n=it(t,r),ot(t,e.call(this,n)),t.endOffset<t.endContainer.childNodes.length&&B(t.endContainer.childNodes[t.endOffset]),B(t.startContainer.childNodes[t.startOffset]),this._getRangeAndRemoveBookmark(t),this.setSelection(t),this._updatePath(t,!0),Y||this._docWasChanged(),this};var Bt=function(e){return this.createElement("BLOCKQUOTE",[e])},kt=function(e){var t=e.querySelectorAll("blockquote");return Array.prototype.filter.call(t,function(e){return!u(e.parentNode,"BLOCKQUOTE")}).forEach(function(e){v(e,N(e))}),e},bt=function(){return this.createDefaultBlock([this.createElement("INPUT",{id:_t,type:"hidden"}),this.createElement("INPUT",{id:yt,type:"hidden"})])},Lt=function(e,n,r){for(var o,i,a,s,d=c(n);o=d.nextNode();)i=o.parentNode.nodeName,"LI"!==i?(s=e.createElement("LI",{"class":"rtl"===o.dir?"dir-rtl":t,dir:o.dir||t}),(a=o.previousSibling)&&a.nodeName===r?a.appendChild(s):v(o,e.createElement(r,[s])),s.appendChild(o)):(o=o.parentNode.parentNode,i=o.nodeName,i!==r&&/^[OU]L$/.test(i)&&v(o,e.createElement(r,[N(o)])))},Ot=function(e){return Lt(this,e,"UL"),e},xt=function(e){return Lt(this,e,"OL"),e},Rt=function(e){var t,n,r,o,i,a,s,d=e.querySelectorAll("UL, OL");for(t=0,n=d.length;n>t;t+=1){for(o=d[t],i=N(o),a=i.childNodes,r=a.length;r--;)s=a[r],v(s,N(s));_(i),v(o,i)}return e},At=function(e){var t,n,r,o,i,a=e.querySelectorAll("LI");for(t=0,n=a.length;n>t;t+=1)r=a[t],l(r.firstChild)||(o=r.parentNode.nodeName,i=r.previousSibling,i&&(i=i.lastChild)&&i.nodeName===o||v(r,this.createElement("LI",[i=this.createElement(o)])),i.appendChild(r));return e},Dt=function(e){var t=e.querySelectorAll("LI");return Array.prototype.filter.call(t,function(e){return!l(e.firstChild)}).forEach(function(t){var n,r=t.parentNode,o=r.parentNode,i=t.firstChild,a=i;for(t.previousSibling&&(r=y(r,t,o));a&&(n=a.nextSibling,!l(a));)o.insertBefore(a,r),a=n;for("LI"===o.nodeName&&i.previousSibling&&y(o,i,o.parentNode);t!==e&&!t.childNodes.length;)r=t.parentNode,r.removeChild(t),t=r},this),_(e),e},Ut=/\b((?:(?:ht|f)tps?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,}\/)(?:[^\s()<>]+|\([^\s()<>]+\))+(?:\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))|([\w\-.%+]+@(?:[\w\-]+\.)+[A-Z]{2,}\b)/i,It=function(e){for(var t,r,o,i,a,s,d,l=e.ownerDocument,c=new n(e,A,function(e){return!u(e,"A")},!1);t=c.nextNode();)for(r=t.data,o=t.parentNode;i=Ut.exec(r);)a=i.index,s=a+i[0].length,a&&(d=l.createTextNode(r.slice(0,a)),o.insertBefore(d,t)),d=l.createElement("A"),d.textContent=r.slice(a,s),d.href=i[1]?/^(?:ht|f)tps?:/.test(i[1])?i[1]:"http://"+i[1]:"mailto:"+i[2],o.insertBefore(d,t),t.data=r=r.slice(s)},Pt=/^(?:A(?:DDRESS|RTICLE|SIDE|UDIO)|BLOCKQUOTE|CAPTION|D(?:[DLT]|IV)|F(?:IGURE|OOTER)|H[1-6]|HEADER|L(?:ABEL|EGEND|I)|O(?:L|UTPUT)|P(?:RE)?|SECTION|T(?:ABLE|BODY|D|FOOT|H|HEAD|R)|UL)$/,wt={1:10,2:13,3:16,4:18,5:24,6:32,7:48},Ft={backgroundColor:{regexp:j,replace:function(e,t){return C(e,"SPAN",{"class":"highlight",style:"background-color: "+t})}},color:{regexp:j,replace:function(e,t){return C(e,"SPAN",{"class":"colour",style:"color:"+t})}},fontWeight:{regexp:/^bold/i,replace:function(e){return C(e,"B")}},fontStyle:{regexp:/^italic/i,replace:function(e){return C(e,"I")}},fontFamily:{regexp:j,replace:function(e,t){return C(e,"SPAN",{"class":"font",style:"font-family:"+t})}},fontSize:{regexp:j,replace:function(e,t){return C(e,"SPAN",{"class":"size",style:"font-size:"+t})}}},Mt=function(e){return function(t,n){var r=C(t.ownerDocument,e);return n.replaceChild(r,t),r.appendChild(N(t)),r}},Wt={SPAN:function(e,t){var n,r,o,i,a,s,d=e.style,l=e.ownerDocument;for(n in Ft)r=Ft[n],o=d[n],o&&r.regexp.test(o)&&(s=r.replace(l,o),i&&i.appendChild(s),i=s,a||(a=s));return a&&(i.appendChild(N(e)),t.replaceChild(a,e)),i||e},STRONG:Mt("B"),EM:Mt("I"),STRIKE:Mt("S"),FONT:function(e,t){var n,r,o,i,a,s=e.face,d=e.size,l=e.color,c=e.ownerDocument;return s&&(n=C(c,"SPAN",{"class":"font",style:"font-family:"+s}),a=n,i=n),d&&(r=C(c,"SPAN",{"class":"size",style:"font-size:"+wt[d]+"px"}),a||(a=r),i&&i.appendChild(r),i=r),l&&/^#?([\dA-F]{3}){1,2}$/i.test(l)&&("#"!==l.charAt(0)&&(l="#"+l),o=C(c,"SPAN",{"class":"colour",style:"color:"+l}),a||(a=o),i&&i.appendChild(o),i=o),a||(a=i=C(c,"SPAN")),t.replaceChild(a,e),i.appendChild(N(e)),i},TT:function(e,t){var n=C(e.ownerDocument,"SPAN",{"class":"font",style:'font-family:menlo,consolas,"courier new",monospace'});return t.replaceChild(n,e),n.appendChild(N(e)),n}},Ht=function(e){for(var t,n=e.childNodes,r=n.length;r--;)t=n[r],t.nodeType!==O||a(t)?t.nodeType!==x||t.data||e.removeChild(t):(Ht(t),s(t)&&!t.firstChild&&e.removeChild(t))},Kt=function(e,t){var n,r,o,i,a,d,l,c,h,f,u=e.childNodes;for(n=0,r=u.length;r>n;n+=1)if(o=u[n],i=o.nodeName,a=o.nodeType,d=Wt[i],a===O){if(l=o.childNodes.length,d)o=d(o,e);else{if(!Pt.test(i)&&!s(o)){n-=1,r+=l-1,e.replaceChild(N(o),o);continue}!t&&o.style.cssText&&o.removeAttribute("style")}l&&Kt(o,t)}else{if(a===x){if(c=o.data,/\S/.test(c)){if(s(e))continue;if(h=0,f=c.length,!n||!s(u[n-1])){for(;f>h&&!j.test(c.charAt(h));)h+=1;h&&(o.data=c=c.slice(h),f-=h)}if(n+1===r||!s(u[n+1])){for(h=f;h>0&&!j.test(c.charAt(h-1));)h-=1;f>h&&(o.data=c.slice(0,h))}continue}if(n&&r>n+1&&s(u[n-1])&&s(u[n+1])){o.data=" ";continue}}e.removeChild(o),n-=1,r-=1}return e},zt=function(e){return e.nodeType===O?"BR"===e.nodeName:j.test(e.data)},Vt=function(e){for(var t,r=e.parentNode;s(r);)r=r.parentNode;return t=new n(r,R|A,zt),t.currentNode=e,!!t.nextNode()},Zt=function(e){var t,n,r,o=e.querySelectorAll("BR"),i=[],a=o.length;for(t=0;a>t;t+=1)i[t]=Vt(o[t]);for(;a--;)if(n=o[a],r=n.parentNode){for(;s(r);)r=r.parentNode;if(d(r)){if(i[a]){if("DIV"!==r.nodeName)continue;y(n.parentNode,n,r.parentNode)}m(n)}else _(r)}};Nt._ensureBottomLine=function(){var e=this._body,t=e.lastElementChild;t&&t.nodeName===this.defaultBlockTag&&d(t)||e.appendChild(this.createDefaultBlock())},Nt._onCut=function(){var e=this.getSelection(),t=this;this._recordUndoState(e),this._getRangeAndRemoveBookmark(e),this.setSelection(e),setTimeout(function(){try{t._ensureBottomLine()}catch(e){t.didError(e)}},0)},Nt._onPaste=function(e){if(!this._awaitingPaste){var t,n,r=e.clipboardData,o=r&&r.items,i=!1,a=!1;if(o){for(t=o.length;t--;){if(n=o[t].type,"text/html"===n){a=!1;break}/^image\/.*/.test(n)&&(a=!0)}if(a)return e.preventDefault(),this.fireEvent("dragover",{dataTransfer:r,preventDefault:function(){i=!0}}),void(i&&this.fireEvent("drop",{dataTransfer:r}))}this._awaitingPaste=!0;var s,d,l,c,h,u=this,p=this._body,g=this.getSelection();u._recordUndoState(g),u._getRangeAndRemoveBookmark(g),s=g.startContainer,d=g.startOffset,l=g.endContainer,c=g.endOffset,h=ht(g);var v=this.createElement("DIV",{style:"position: absolute; overflow: hidden; top:"+(p.scrollTop+(h?h.getBoundingClientRect().top:0))+"px; left: 0; width: 1px; height: 1px;"});p.appendChild(v),g.selectNodeContents(v),this.setSelection(g),setTimeout(function(){try{var e=N(m(v)),t=e.firstChild,n=u._createRange(s,d,l,c);if(t){t===e.lastChild&&"DIV"===t.nodeName&&e.replaceChild(N(t),t),e.normalize(),It(e),Kt(e,!1),Zt(e),Ht(e);for(var r=e,o=!0;r=f(r);)S(r);u.fireEvent("willPaste",{fragment:e,preventDefault:function(){o=!1}}),o&&(st(n,e),Y||u._docWasChanged(),n.collapse(!1),u._ensureBottomLine())}u.setSelection(n),u._updatePath(n,!0),u._awaitingPaste=!1}catch(i){u.didError(i)}},0)}};var qt={8:"backspace",9:"tab",13:"enter",32:"space",37:"left",39:"right",46:"delete",219:"[",221:"]"},Qt=function(e){return function(t,n){n.preventDefault(),t[e]()}},Gt=function(e,t){return t=t||null,function(n,r){r.preventDefault();var o=n.getSelection();n.hasFormat(e,null,o)?n.changeFormat(null,{tag:e},o):n.changeFormat({tag:e},t,o)}},$t=function(e,t){try{t||(t=e.getSelection());var n,r=t.startContainer;for(r.nodeType===x&&(r=r.parentNode),n=r;s(n)&&(!n.textContent||n.textContent===w);)r=n,n=r.parentNode;r!==n&&(t.setStart(n,X.call(n.childNodes,r)),t.collapse(!0),n.removeChild(r),d(n)||(n=h(n)),S(n),lt(t)),e._ensureBottomLine(),e.setSelection(t),e._updatePath(t,!0)}catch(o){e.didError(o)}},Yt={enter:function(e,t,n){var r,o,i;if(t.preventDefault(),e._recordUndoState(n),It(n.startContainer),e._removeZWS(),e._getRangeAndRemoveBookmark(n),n.collapsed||at(n),r=ht(n),!r||/^T[HD]$/.test(r.nodeName))return ot(n,e.createElement("BR")),n.collapse(!1),e.setSelection(n),void e._updatePath(n,!0);if((o=u(r,"LI"))&&(r=o),!r.textContent){if(u(r,"UL")||u(r,"OL"))return e.modifyBlocks(Dt,n);if(u(r,"BLOCKQUOTE"))return e.modifyBlocks(bt,n)}for(i=Et(e,r,n.startContainer,n.startOffset),St(r),Ht(r),S(r);i.nodeType===O;){var a,s=i.firstChild;if("A"===i.nodeName&&(!i.textContent||i.textContent===w)){s=e._doc.createTextNode(""),v(i,s),i=s;break}for(;s&&s.nodeType===x&&!s.data&&(a=s.nextSibling,a&&"BR"!==a.nodeName);)m(s),s=a;if(!s||"BR"===s.nodeName||s.nodeType===x&&!V)break;i=s}n=e._createRange(i,0),e.setSelection(n),e._updatePath(n,!0),i.nodeType===x&&(i=i.parentNode);var d=e._doc,l=e._body;i.offsetTop+i.offsetHeight>(d.documentElement.scrollTop||l.scrollTop)+l.offsetHeight&&i.scrollIntoView(!1)},backspace:function(e,t,n){if(e._removeZWS(),e._recordUndoState(n),e._getRangeAndRemoveBookmark(n),n.collapsed)if(pt(n)){t.preventDefault();var r=ht(n),o=r&&h(r);if(o){if(!o.isContentEditable)return void m(o);for(E(o,r,n),r=o.parentNode;r&&!r.nextSibling;)r=r.parentNode;r&&(r=r.nextSibling)&&B(r),e.setSelection(n)}else if(r){if(u(r,"UL")||u(r,"OL"))return e.modifyBlocks(Dt,n);if(u(r,"BLOCKQUOTE"))return e.modifyBlocks(kt,n);e.setSelection(n),e._updatePath(n,!0)}}else e.setSelection(n),setTimeout(function(){$t(e)},0);else t.preventDefault(),at(n),$t(e,n)},"delete":function(e,t,n){if(e._removeZWS(),e._recordUndoState(n),e._getRangeAndRemoveBookmark(n),n.collapsed)if(gt(n)){t.preventDefault();var r=ht(n),o=r&&f(r);if(o){if(!o.isContentEditable)return void m(o);for(E(r,o,n),o=r.parentNode;o&&!o.nextSibling;)o=o.parentNode;o&&(o=o.nextSibling)&&B(o),e.setSelection(n),e._updatePath(n,!0)}}else e.setSelection(n),setTimeout(function(){$t(e)},0);else t.preventDefault(),at(n),$t(e,n)},tab:function(e,t,n){var r,o;if(e._removeZWS(),n.collapsed&&pt(n)&&gt(n)){for(r=ht(n);o=r.parentNode;){if("UL"===o.nodeName||"OL"===o.nodeName){r.previousSibling&&(t.preventDefault(),e.modifyBlocks(At,n));break}r=o}t.preventDefault()}},space:function(e,t,n){var r,o;e._recordUndoState(n),It(n.startContainer),e._getRangeAndRemoveBookmark(n),r=n.endContainer,o=r.parentNode,n.collapsed&&"A"===o.nodeName&&!r.nextSibling&&n.endOffset===g(r)&&n.setStartAfter(o),e.setSelection(n)},left:function(e){e._removeZWS()},right:function(e){e._removeZWS()}};H&&K&&F.getSelection().modify&&(Yt["meta-left"]=function(e,t){t.preventDefault(),e._sel.modify("move","backward","lineboundary")},Yt["meta-right"]=function(e,t){t.preventDefault(),e._sel.modify("move","forward","lineboundary")}),Yt[q+"b"]=Gt("B"),Yt[q+"i"]=Gt("I"),Yt[q+"u"]=Gt("U"),Yt[q+"shift-7"]=Gt("S"),Yt[q+"shift-5"]=Gt("SUB",{tag:"SUP"}),Yt[q+"shift-6"]=Gt("SUP",{tag:"SUB"}),Yt[q+"shift-8"]=Qt("makeUnorderedList"),Yt[q+"shift-9"]=Qt("makeOrderedList"),Yt[q+"["]=Qt("decreaseQuoteLevel"),Yt[q+"]"]=Qt("increaseQuoteLevel"),Yt[q+"y"]=Qt("redo"),Yt[q+"z"]=Qt("undo"),Yt[q+"shift-z"]=Qt("redo"),Nt._onKey=function(e){var t=e.keyCode,n=qt[t],r="",o=this.getSelection();n||(n=String.fromCharCode(t).toLowerCase(),/^[A-Za-z0-9]$/.test(n)||(n="")),V&&46===e.which&&(n="."),t>111&&124>t&&(n="f"+(t-111)),"backspace"!==n&&"delete"!==n&&(e.altKey&&(r+="alt-"),e.ctrlKey&&(r+="ctrl-"),e.metaKey&&(r+="meta-")),e.shiftKey&&(r+="shift-"),n=r+n,Yt[n]?Yt[n](this,e,o):1!==n.length||o.collapsed||(this._recordUndoState(o),this._getRangeAndRemoveBookmark(o),at(o),this._ensureBottomLine(),this.setSelection(o),this._updatePath(o,!0))},Nt._getHTML=function(){return this._body.innerHTML},Nt._setHTML=function(e){var t=this._body;t.innerHTML=e;do S(t);while(t=f(t));this._ignoreChange=!0},Nt.getHTML=function(e){var t,n,r,o,i,a=[];if(e&&(i=this.getSelection())&&this._saveRangeToBookmark(i),Q)for(t=this._body;t=f(t);)t.textContent||t.querySelector("BR")||(n=this.createElement("BR"),t.appendChild(n),a.push(n));if(r=this._getHTML().replace(/\u200B/g,""),Q)for(o=a.length;o--;)m(a[o]);return i&&this._getRangeAndRemoveBookmark(i),r},Nt.setHTML=function(e){var t,n=this._doc.createDocumentFragment(),r=this.createElement("DIV");r.innerHTML=e,n.appendChild(N(r)),Kt(n,!0),Zt(n),_(n);for(var o=n;o=f(o);)S(o);this._ignoreChange=!0;for(var i=this._body;t=i.lastChild;)i.removeChild(t);
i.appendChild(n),S(i),this._undoIndex=-1,this._undoStack.length=0,this._undoStackLength=0,this._isInUndoState=!1;var a=this._getRangeAndRemoveBookmark()||this._createRange(i.firstChild,0);return this._recordUndoState(a),this._getRangeAndRemoveBookmark(a),$?this._lastSelection=a:this.setSelection(a),this._updatePath(a,!0),this},Nt.insertElement=function(e,t){if(t||(t=this.getSelection()),t.collapse(!0),s(e))ot(t,e),t.setStartAfter(e);else{for(var n,r,o=this._body,i=ht(t)||o;i!==o&&!i.nextSibling;)i=i.parentNode;i!==o&&(n=i.parentNode,r=y(n,i.nextSibling,o)),r?(o.insertBefore(e,r),t.setStart(r,0),t.setStart(r,0),lt(t)):(o.appendChild(e),o.appendChild(this.createDefaultBlock()),t.setStart(e,0),t.setEnd(e,0)),this.focus(),this.setSelection(t),this._updatePath(t)}return this},Nt.insertImage=function(e){var t=this.createElement("IMG",{src:e});return this.insertElement(t),t},Nt.insertHTML=function(e){var t=this.getSelection(),n=this._doc.createDocumentFragment(),r=this.createElement("DIV");r.innerHTML=e,n.appendChild(N(r)),this._recordUndoState(t),this._getRangeAndRemoveBookmark(t);try{n.normalize(),It(n),Kt(n,!0),Zt(n),Ht(n),_(n);for(var o=n;o=f(o);)S(o);st(t,n),Y||this._docWasChanged(),t.collapse(!1),this._ensureBottomLine(),this.setSelection(t),this._updatePath(t,!0)}catch(i){this.didError(i)}return this};var jt=function(e,t,n){return function(){return this[e](t,n),this.focus()}};Nt.addStyles=function(e){if(e){var t=this._doc.documentElement.firstChild,n=this.createElement("STYLE",{type:"text/css"});n.styleSheet?(t.appendChild(n),n.styleSheet.cssText=e):(n.appendChild(this._doc.createTextNode(e)),t.appendChild(n))}return this},Nt.bold=jt("changeFormat",{tag:"B"}),Nt.italic=jt("changeFormat",{tag:"I"}),Nt.underline=jt("changeFormat",{tag:"U"}),Nt.strikethrough=jt("changeFormat",{tag:"S"}),Nt.subscript=jt("changeFormat",{tag:"SUB"},{tag:"SUP"}),Nt.superscript=jt("changeFormat",{tag:"SUP"},{tag:"SUB"}),Nt.removeBold=jt("changeFormat",null,{tag:"B"}),Nt.removeItalic=jt("changeFormat",null,{tag:"I"}),Nt.removeUnderline=jt("changeFormat",null,{tag:"U"}),Nt.removeStrikethrough=jt("changeFormat",null,{tag:"S"}),Nt.removeSubscript=jt("changeFormat",null,{tag:"SUB"}),Nt.removeSuperscript=jt("changeFormat",null,{tag:"SUP"}),Nt.makeLink=function(e,t){var n=this.getSelection();if(n.collapsed){var r=e.indexOf(":")+1;if(r)for(;"/"===e[r];)r+=1;ot(n,this._doc.createTextNode(e.slice(r)))}return t||(t={}),t.href=e,this.changeFormat({tag:"A",attributes:t},{tag:"A"},n),this.focus()},Nt.removeLink=function(){return this.changeFormat(null,{tag:"A"},this.getSelection(),!0),this.focus()},Nt.setFontFace=function(e){return this.changeFormat({tag:"SPAN",attributes:{"class":"font",style:"font-family: "+e+", sans-serif;"}},{tag:"SPAN",attributes:{"class":"font"}}),this.focus()},Nt.setFontSize=function(e){return this.changeFormat({tag:"SPAN",attributes:{"class":"size",style:"font-size: "+("number"==typeof e?e+"px":e)}},{tag:"SPAN",attributes:{"class":"size"}}),this.focus()},Nt.setTextColour=function(e){return this.changeFormat({tag:"SPAN",attributes:{"class":"colour",style:"color: "+e}},{tag:"SPAN",attributes:{"class":"colour"}}),this.focus()},Nt.setHighlightColour=function(e){return this.changeFormat({tag:"SPAN",attributes:{"class":"highlight",style:"background-color: "+e}},{tag:"SPAN",attributes:{"class":"highlight"}}),this.focus()},Nt.setTextAlignment=function(e){return this.forEachBlock(function(t){t.className=(t.className.split(/\s+/).filter(function(e){return!/align/.test(e)}).join(" ")+" align-"+e).trim(),t.style.textAlign=e},!0),this.focus()},Nt.setTextDirection=function(e){return this.forEachBlock(function(t){t.className=(t.className.split(/\s+/).filter(function(e){return!/dir/.test(e)}).join(" ")+" dir-"+e).trim(),t.dir=e},!0),this.focus()},Nt.increaseQuoteLevel=jt("modifyBlocks",Bt),Nt.decreaseQuoteLevel=jt("modifyBlocks",kt),Nt.makeUnorderedList=jt("modifyBlocks",Ot),Nt.makeOrderedList=jt("modifyBlocks",xt),Nt.removeList=jt("modifyBlocks",Rt),Nt.increaseListLevel=jt("modifyBlocks",At),Nt.decreaseListLevel=jt("modifyBlocks",Dt),top!==F?(F.editor=new b(e),F.onEditorLoad&&(F.onEditorLoad(F.editor),F.onEditorLoad=null)):F.Squire=b}(document);
},{}],58:[function(require,module,exports){
'use strict';

function assignment (result) {
  var stack = Array.prototype.slice.call(arguments, 1);
  var item;
  var key;
  while (stack.length) {
    item = stack.shift();
    for (key in item) {
      if (item.hasOwnProperty(key)) {
        if (typeof result[key] === 'object' && result[key] && Object.prototype.toString.call(result[key]) !== '[object Array]') {
          if (typeof item[key] === 'object' && item[key] !== null) {
            result[key] = assignment(result[key], item[key]);
          } else {
            result[key] = item[key];
          }
        } else {
          result[key] = item[key];
        }
      }
    }
  }
  return result;
}

module.exports = assignment;

},{}],59:[function(require,module,exports){
module.exports = function atoa (a, n) { return Array.prototype.slice.call(a, n); }

},{}],60:[function(require,module,exports){
'use strict';

var ticky = require('ticky');

module.exports = function debounce (fn, args, ctx) {
  if (!fn) { return; }
  ticky(function run () {
    fn.apply(ctx || null, args || []);
  });
};

},{"ticky":141}],61:[function(require,module,exports){
'use strict';

var atoa = require('atoa');
var debounce = require('./debounce');

module.exports = function emitter (thing, options) {
  var opts = options || {};
  var evt = {};
  if (thing === undefined) { thing = {}; }
  thing.on = function (type, fn) {
    if (!evt[type]) {
      evt[type] = [fn];
    } else {
      evt[type].push(fn);
    }
    return thing;
  };
  thing.once = function (type, fn) {
    fn._once = true; // thing.off(fn) still works!
    thing.on(type, fn);
    return thing;
  };
  thing.off = function (type, fn) {
    var c = arguments.length;
    if (c === 1) {
      delete evt[type];
    } else if (c === 0) {
      evt = {};
    } else {
      var et = evt[type];
      if (!et) { return thing; }
      et.splice(et.indexOf(fn), 1);
    }
    return thing;
  };
  thing.emit = function () {
    var args = atoa(arguments);
    return thing.emitterSnapshot(args.shift()).apply(this, args);
  };
  thing.emitterSnapshot = function (type) {
    var et = (evt[type] || []).slice(0);
    return function () {
      var args = atoa(arguments);
      var ctx = this || thing;
      if (type === 'error' && opts.throws !== false && !et.length) { throw args.length === 1 ? args[0] : args; }
      et.forEach(function emitter (listen) {
        if (opts.async) { debounce(listen, args, ctx); } else { listen.apply(ctx, args); }
        if (listen._once) { thing.off(type, listen); }
      });
      return thing;
    };
  };
  return thing;
};

},{"./debounce":60,"atoa":59}],62:[function(require,module,exports){
(function (global){
'use strict';

var customEvent = require('custom-event');
var doc = document;
var addEvent = addEventEasy;
var removeEvent = removeEventEasy;
var hardCache = [];

if (!global.addEventListener) {
  addEvent = addEventHard;
  removeEvent = removeEventHard;
}

function addEventEasy (el, type, fn, capturing) {
  return el.addEventListener(type, fn, capturing);
}

function addEventHard (el, type, fn) {
  return el.attachEvent('on' + type, wrap(el, type, fn));
}

function removeEventEasy (el, type, fn, capturing) {
  return el.removeEventListener(type, fn, capturing);
}

function removeEventHard (el, type, fn) {
  return el.detachEvent('on' + type, unwrap(el, type, fn));
}

function fabricateEvent (el, type, model) {
  var e = new customEvent(type, { detail: model });
  if (el.dispatchEvent) {
    el.dispatchEvent(e);
  } else {
    el.fireEvent('on' + type, e);
  }
}

function wrapperFactory (el, type, fn) {
  return function wrapper (originalEvent) {
    var e = originalEvent || global.event;
    e.target = e.target || e.srcElement;
    e.preventDefault = e.preventDefault || function preventDefault () { e.returnValue = false; };
    e.stopPropagation = e.stopPropagation || function stopPropagation () { e.cancelBubble = true; };
    e.which = e.which || e.keyCode;
    fn.call(el, e);
  };
}

function wrap (el, type, fn) {
  var wrapper = unwrap(el, type, fn) || wrapperFactory(el, type, fn);
  hardCache.push({
    wrapper: wrapper,
    element: el,
    type: type,
    fn: fn
  });
  return wrapper;
}

function unwrap (el, type, fn) {
  var i = find(el, type, fn);
  if (i) {
    var wrapper = hardCache[i].wrapper;
    hardCache.splice(i, 1); // free up a tad of memory
    return wrapper;
  }
}

function find (el, type, fn) {
  var i, item;
  for (i = 0; i < hardCache.length; i++) {
    item = hardCache[i];
    if (item.element === el && item.type === type && item.fn === fn) {
      return i;
    }
  }
}

module.exports = {
  add: addEvent,
  remove: removeEvent,
  fabricate: fabricateEvent
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"custom-event":63}],63:[function(require,module,exports){
(function (global){

var NativeCustomEvent = global.CustomEvent;

function useNative () {
  try {
    var p = new NativeCustomEvent('cat', { detail: { foo: 'bar' } });
    return  'cat' === p.type && 'bar' === p.detail.foo;
  } catch (e) {
  }
  return false;
}

/**
 * Cross-browser `CustomEvent` constructor.
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent.CustomEvent
 *
 * @public
 */

module.exports = useNative() ? NativeCustomEvent :

// IE >= 9
'function' === typeof document.createEvent ? function CustomEvent (type, params) {
  var e = document.createEvent('CustomEvent');
  if (params) {
    e.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
  } else {
    e.initCustomEvent(type, false, false, void 0);
  }
  return e;
} :

// IE <= 8
function CustomEvent (type, params) {
  var e = document.createEventObject();
  e.type = type;
  if (params) {
    e.bubbles = Boolean(params.bubbles);
    e.cancelable = Boolean(params.cancelable);
    e.detail = params.detail;
  } else {
    e.bubbles = false;
    e.cancelable = false;
    e.detail = void 0;
  }
  return e;
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],64:[function(require,module,exports){
'use strict';

var poser = require('poser');
var Dominus = poser.Array();

module.exports = Dominus;

},{"poser":90}],65:[function(require,module,exports){
'use strict';

var $ = require('./public');
var flatten = require('./flatten');
var dom = require('./dom');
var custom = require('./custom');
var classes = require('./classes');
var Dominus = require('./Dominus.ctor');

function equals (selector) {
  return function equals (elem) {
    return dom.matches(elem, selector);
  };
}

function straight (prop, one) {
  return function domMapping (selector) {
    var result = this.map(function (elem) {
      return dom[prop](elem, selector);
    });
    var results = flatten(result);
    return one ? results[0] : results;
  };
}

Dominus.prototype.prev = straight('prev');
Dominus.prototype.next = straight('next');
Dominus.prototype.parent = straight('parent');
Dominus.prototype.parents = straight('parents');
Dominus.prototype.children = straight('children');
Dominus.prototype.find = straight('qsa');
Dominus.prototype.findOne = straight('qs', true);

Dominus.prototype.where = function (selector) {
  return this.filter(equals(selector));
};

Dominus.prototype.is = function (selector) {
  return this.some(equals(selector));
};

Dominus.prototype.i = function (index) {
  return this[index] ? new Dominus(this[index]) : new Dominus();
};

function compareFactory (fn) {
  return function compare () {
    $.apply(null, arguments).forEach(fn, this);
    return this;
  };
}

Dominus.prototype.and = compareFactory(function addOne (elem) {
  if (this.indexOf(elem) === -1) {
    this.push(elem);
  }
  return this;
});

Dominus.prototype.but = compareFactory(function addOne (elem) {
  var index = this.indexOf(elem);
  if (index !== -1) {
    this.splice(index, 1);
  }
  return this;
});

Dominus.prototype.css = function (name, value) {
  var props;
  var many = name && typeof name === 'object';
  var getter = !many && !value;
  if (getter) {
    return this.length ? dom.getCss(this[0], name) : null;
  }
  if (many) {
    props = name;
  } else {
    props = {};
    props[name] = value;
  }
  this.forEach(dom.setCss(props));
  return this;
};

function eventer (method) {
  return function (types, filter, fn) {
    var typelist = types.split(' ');
    if (typeof fn !== 'function') {
      fn = filter;
      filter = null;
    }
    this.forEach(function (elem) {
      typelist.forEach(function (type) {
        var handler = custom.handlers[type];
        if (handler) {
          dom[method](elem, handler.event, filter, handler.wrap(fn));
        } else {
          dom[method](elem, type, filter, fn);
        }
      });
    });
    return this;
  };
}

Dominus.prototype.once = eventer('once');
Dominus.prototype.on = eventer('on');
Dominus.prototype.off = eventer('off');
Dominus.prototype.emit = eventer('emit');

[
  ['addClass', classes.add],
  ['removeClass', classes.remove],
  ['setClass', classes.set],
  ['removeClass', classes.remove],
  ['remove', dom.remove]
].forEach(mapMethods);

function mapMethods (data) {
  Dominus.prototype[data[0]] = function (value) {
    this.forEach(function (elem) {
      data[1](elem, value);
    });
    return this;
  };
}

[
  'append',
  'appendTo',
  'prepend',
  'prependTo',
  'before',
  'beforeOf',
  'after',
  'afterOf'
].forEach(mapManipulation);

function mapManipulation (method) {
  Dominus.prototype[method] = function (value) {
    dom[method](this, value);
    return this;
  };
}

Dominus.prototype.hasClass = function (value) {
  return this.some(function (elem) {
    return classes.contains(elem, value);
  });
};

Dominus.prototype.attr = function (name, value) {
  var hash = name && typeof name === 'object';
  var set = hash ? setMany : setSingle;
  var setter = hash || arguments.length > 1;
  if (setter) {
    this.forEach(set);
    return this;
  } else {
    return this.length ? dom.getAttr(this[0], name) : null;
  }
  function setMany (elem) {
    dom.manyAttr(elem, name);
  }
  function setSingle (elem) {
    dom.attr(elem, name, value);
  }
};

function keyValue (key, value) {
  var getter = arguments.length < 2;
  if (getter) {
    return this.length ? dom[key](this[0]) : '';
  }
  this.forEach(function (elem) {
    dom[key](elem, value);
  });
  return this;
}

function keyValueProperty (prop) {
  Dominus.prototype[prop] = function accessor (value) {
    var getter = arguments.length < 1;
    if (getter) {
      return keyValue.call(this, prop);
    }
    return keyValue.call(this, prop, value);
  };
}

['html', 'text', 'value'].forEach(keyValueProperty);

Dominus.prototype.clone = function () {
  return this.map(function (elem) {
    return dom.clone(elem);
  });
};

Dominus.prototype.focus = function () {
  if (this.length) {
    this[0].focus();
  }
  return this;
};

module.exports = require('./public');

},{"./Dominus.ctor":64,"./classes":68,"./custom":69,"./dom":70,"./flatten":72,"./public":73}],66:[function(require,module,exports){
'use strict';

var Dominus = require('./Dominus.ctor');
var proto = Dominus.prototype;

function Applied (args) {
  return Dominus.apply(this, args);
}

Applied.prototype = proto;

function apply (a) {
  return new Applied(a);
}

['map', 'filter', 'concat', 'slice'].forEach(ensure);

function ensure (key) {
  var original = proto[key];
  proto[key] = function applied () {
    return apply(original.apply(this, arguments));
  };
}

module.exports = apply;

},{"./Dominus.ctor":64}],67:[function(require,module,exports){
(function (global){
'use strict';

var test = require('./test');
var apply = require('./apply');
var Dominus = require('./Dominus.ctor');

function cast (a) {
  if (a === global) {
    return new Dominus(a);
  }
  if (a instanceof Dominus) {
    return a;
  }
  if (!a) {
    return new Dominus();
  }
  if (test.isElement(a)) {
    return new Dominus(a);
  }
  if (!test.isArray(a)) {
    return new Dominus();
  }
  return apply(a).filter(function (i) {
    return test.isElement(i);
  });
}

module.exports = cast;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./Dominus.ctor":64,"./apply":66,"./test":74}],68:[function(require,module,exports){
'use strict';

var trim = /^\s+|\s+$/g;
var whitespace = /\s+/g;
var test = require('./test');

function interpret (input) {
  return typeof input === 'string' ? input.replace(trim, '').split(whitespace) : input;
}

function classes (el) {
  if (test.isElement(el)) {
    return el.className.replace(trim, '').split(whitespace);
  }
  return [];
}

function set (el, input) {
  if (test.isElement(el)) {
    el.className = interpret(input).join(' ');
  }
}

function add (el, input) {
  var current = remove(el, input);
  var values = interpret(input);
  current.push.apply(current, values);
  set(el, current);
  return current;
}

function remove (el, input) {
  var current = classes(el);
  var values = interpret(input);
  values.forEach(function (value) {
    var i = current.indexOf(value);
    if (i !== -1) {
      current.splice(i, 1);
    }
  });
  set(el, current);
  return current;
}

function contains (el, input) {
  var current = classes(el);
  var values = interpret(input);

  return values.every(function (value) {
    return current.indexOf(value) !== -1;
  });
}

module.exports = {
  add: add,
  remove: remove,
  contains: contains,
  set: set,
  get: classes
};

},{"./test":74}],69:[function(require,module,exports){
'use strict';

var handlers = {};

function register (name, type, filter) {
  handlers[name] = {
    event: type,
    filter: filter,
    wrap: wrap
  };

  function wrap (fn) {
    return wrapper(name, fn);
  }
}

function wrapper (name, fn) {
  if (!fn) {
    return fn;
  }
  var key = '__dce_' + name;
  if (fn[key]) {
    return fn[key];
  }
  fn[key] = function customEvent (e) {
    var match = handlers[name].filter(e);
    if (match) {
      return fn.apply(this, arguments);
    }
  };
  return fn[key];
}

register('left-click', 'click', function (e) {
  return e.which === 1 && !e.metaKey && !e.ctrlKey;
});

module.exports = {
  register: register,
  wrapper: wrapper,
  handlers: handlers
};

},{}],70:[function(require,module,exports){
(function (global){
'use strict';

var sektor = require('sektor');
var crossvent = require('crossvent');
var Dominus = require('./Dominus.ctor');
var cast = require('./cast');
var apply = require('./apply');
var text = require('./text');
var test = require('./test');
var api = module.exports = {};
var delegates = {};

function castContext (context) {
  if (typeof context === 'string') {
    return api.qs(null, context);
  }
  if (test.isElement(context)) {
    return context;
  }
  if (context instanceof Dominus) {
    return context[0];
  }
  return null;
}

api.qsa = function (el, selector) {
  var results = new Dominus();
  return sektor(selector, castContext(el), results);
};

api.qs = function (el, selector) {
  return api.qsa(el, selector)[0];
};

api.matches = function (el, selector) {
  return test.isElement(el) && sektor.matchesSelector(el, selector);
};

function relatedFactory (prop) {
  return function related (el, selector) {
    var relative = el[prop];
    if (relative) {
      if (!selector || api.matches(relative, selector)) {
        return cast(relative);
      }
    }
    return new Dominus();
  };
}

api.prev = relatedFactory('previousElementSibling');
api.next = relatedFactory('nextElementSibling');
api.parent = relatedFactory('parentElement');

function matches (el, value) {
  if (!value) {
    return true;
  }
  if (value instanceof Dominus) {
    return value.indexOf(el) !== -1;
  }
  if (test.isElement(value)) {
    return el === value;
  }
  return api.matches(el, value);
}

api.parents = function (el, value) {
  var elements = [];
  var current = el;
  while (current.parentElement) {
    if (matches(current.parentElement, value)) {
      elements.push(current.parentElement);
    }
    current = current.parentElement;
  }
  return apply(elements);
};

api.children = function (el, value) {
  var elements = [];
  var children = el.children;
  var child;
  var i;
  for (i = 0; children && i < children.length; i++) {
    child = children[i];
    if (matches(child, value)) {
      elements.push(child);
    }
  }
  return apply(elements);
};

// this method caches delegates so that .off() works seamlessly
function delegate (root, filter, fn) {
  if (delegates[fn._dd]) {
    return delegates[fn._dd];
  }
  fn._dd = Date.now();
  delegates[fn._dd] = delegator;
  function delegator (e) {
    var el = e.target;
    while (el && el !== root) {
      if (api.matches(el, filter)) {
        fn.apply(this, arguments); return;
      }
      el = el.parentElement;
    }
  }
  return delegator;
}

function evented (method, el, type, filter, fn) {
  if (filter === null) {
    crossvent[method](el, type, fn);
  } else {
    crossvent[method](el, type, delegate(el, filter, fn));
  }
}

function once (el, type, filter, fn) {
  var things = [el, type, filter, disposable];
  api.on.apply(api, things);
  function disposable () {
    api.off.apply(api, things);
    return fn.apply(this, arguments);
  }
}

api.once = once;
api.on = evented.bind(null, 'add');
api.off = evented.bind(null, 'remove');
api.emit = evented.bind(null, 'fabricate');

api.html = function (elem, html) {
  var getter = arguments.length < 2;
  if (getter) {
    return elem.innerHTML;
  } else {
    elem.innerHTML = html;
  }
};

api.text = function (elem, text) {
  var checkable = test.isCheckable(elem);
  var getter = arguments.length < 2;
  if (getter) {
    return checkable ? elem.value : elem.innerText || elem.textContent;
  } else if (checkable) {
    elem.value = text;
  } else {
    elem.innerText = elem.textContent = text;
  }
};

api.value = function (el, value) {
  var checkable = test.isCheckable(el);
  var getter = arguments.length < 2;
  if (getter) {
    return checkable ? el.checked : el.value;
  } else if (checkable) {
    el.checked = value;
  } else {
    el.value = value;
  }
};

api.attr = function (el, name, value) {
  if (!test.isElement(el)) {
    return;
  }
  if (value === null || value === void 0) {
    el.removeAttribute(name); return;
  }
  var camel = text.hyphenToCamel(name);
  if (camel in el) {
    el[camel] = value;
  } else {
    el.setAttribute(name, value);
  }
};

api.getAttr = function (el, name) {
  var camel = text.hyphenToCamel(name);
  if (camel in el) {
    return el[camel];
  } else if (el.getAttribute) {
    return el.getAttribute(name);
  }
  return null;
};

api.manyAttr = function (elem, attrs) {
  Object.keys(attrs).forEach(function (attr) {
    api.attr(elem, attr, attrs[attr]);
  });
};

api.make = function (type) {
  return new Dominus(document.createElement(type));
};

api.clone = function (el) {
  if (el.cloneNode) {
    return el.cloneNode(true);
  }
  return el;
};

api.remove = function (el) {
  if (el.parentElement) {
    el.parentElement.removeChild(el);
  }
};

api.append = function (el, target) {
  if (manipulationGuard(el, target, api.append)) {
    return;
  }
  if (el.appendChild) {
    el.appendChild(target);
  }
};

api.prepend = function (el, target) {
  if (manipulationGuard(el, target, api.prepend)) {
    return;
  }
  if (el.insertBefore) {
    el.insertBefore(target, el.firstChild);
  }
};

api.before = function (el, target) {
  if (manipulationGuard(el, target, api.before)) {
    return;
  }
  if (el.parentElement) {
    el.parentElement.insertBefore(target, el);
  }
};

api.after = function (el, target) {
  if (manipulationGuard(el, target, api.after)) {
    return;
  }
  if (el.parentElement) {
    el.parentElement.insertBefore(target, el.nextSibling);
  }
};

function manipulationGuard (el, target, fn) {
  var right = target instanceof Dominus;
  var left = el instanceof Dominus;
  if (left) {
    el.forEach(manipulateMany);
  } else if (right) {
    manipulate(el, true);
  }
  return !el || !target || left || right;

  function manipulate (el, precondition) {
    if (right) {
      target.forEach(function (target, j) {
        fn(el, cloneUnless(target, precondition && j === 0));
      });
    } else {
      fn(el, cloneUnless(target, precondition));
    }
  }

  function manipulateMany (el, i) {
    manipulate(el, i === 0);
  }
}

function cloneUnless (target, condition) {
  return condition ? target : api.clone(target);
}

['appendTo', 'prependTo', 'beforeOf', 'afterOf'].forEach(flip);

function flip (key) {
  var original = key.split(/[A-Z]/)[0];
  api[key] = function (el, target) {
    api[original](target, el);
  };
}

var numericCssProperties = {
  'column-count': true,
  'fill-opacity': true,
  'flex-grow': true,
  'flex-shrink': true,
  'font-weight': true,
  'line-height': true,
  'opacity': true,
  'order': true,
  'orphans': true,
  'widows': true,
  'z-index': true,
  'zoom': true
};
var numeric = /^\d+$/;
var canFloat = 'float' in document.body.style;

api.getCss = function (el, prop) {
  if (!test.isElement(el)) {
    return null;
  }
  var hprop = text.hyphenate(prop);
  var fprop = !canFloat && hprop === 'float' ? 'cssFloat' : hprop;
  var result = global.getComputedStyle(el)[hprop];
  if (prop === 'opacity' && result === '') {
    return 1;
  }
  if (result.substr(-2) === 'px' || numeric.test(result)) {
    return parseFloat(result, 10);
  }
  return result;
};

api.setCss = function (props) {
  var mapped = Object.keys(props).filter(bad).map(expand);
  function bad (prop) {
    var value = props[prop];
    return value !== null && value === value;
  }
  function expand (prop) {
    var hprop = text.hyphenate(prop);
    var value = props[prop];
    if (typeof value === 'number' && !numericCssProperties[hprop]) {
      value += 'px';
    }
    return {
      name: hprop, value: value
    };
  }
  return function (el) {
    if (!test.isElement(el)) {
      return;
    }
    mapped.forEach(function (prop) {
      el.style[prop.name] = prop.value;
    });
  };
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./Dominus.ctor":64,"./apply":66,"./cast":67,"./test":74,"./text":75,"crossvent":62,"sektor":98}],71:[function(require,module,exports){
'use strict';

module.exports = require('./Dominus.prototype');

},{"./Dominus.prototype":65}],72:[function(require,module,exports){
'use strict';

var Dominus = require('./Dominus.ctor');

function flatten (a, cache) {
  return a.reduce(function (current, item) {
    if (Dominus.isArray(item)) {
      return flatten(item, current);
    } else if (current.indexOf(item) === -1) {
      return current.concat(item);
    }
    return current;
  }, cache || new Dominus());
}

module.exports = flatten;

},{"./Dominus.ctor":64}],73:[function(require,module,exports){
'use strict';

var dom = require('./dom');
var cast = require('./cast');
var custom = require('./custom');
var Dominus = require('./Dominus.ctor');
var tag = /^\s*<([a-z]+(?:-[a-z]+)?)\s*\/?>\s*$/i;

function api (selector, context) {
  var notText = typeof selector !== 'string';
  if (notText && arguments.length < 2) {
    return cast(selector);
  }
  if (notText) {
    return new Dominus();
  }
  var matches = selector.match(tag);
  if (matches) {
    return dom.make(matches[1]);
  }
  return api.find(selector, context);
}

api.find = function (selector, context) {
  return dom.qsa(context, selector);
};

api.findOne = function (selector, context) {
  return dom.qs(context, selector);
};

api.custom = custom.register;

module.exports = api;

},{"./Dominus.ctor":64,"./cast":67,"./custom":69,"./dom":70}],74:[function(require,module,exports){
'use strict';

var elementObjects = typeof HTMLElement === 'object';

function isElement (o) {
  return elementObjects ? o instanceof HTMLElement : isElementObject(o);
}

function isElementObject (o) {
  return o &&
    typeof o === 'object' &&
    typeof o.nodeName === 'string' &&
    o.nodeType === 1;
}

function isArray (a) {
  return Object.prototype.toString.call(a) === '[object Array]';
}

function isCheckable (elem) {
  return 'checked' in elem && elem.type === 'radio' || elem.type === 'checkbox';
}

module.exports = {
  isElement: isElement,
  isArray: isArray,
  isCheckable: isCheckable
};

},{}],75:[function(require,module,exports){
'use strict';

function hyphenToCamel (hyphens) {
  var part = /-([a-z])/g;
  return hyphens.replace(part, function (g, m) {
    return m.toUpperCase();
  });
}

function hyphenate (text) {
  var camel = /([a-z])([A-Z])/g;
  return text.replace(camel, '$1-$2').toLowerCase();
}

module.exports = {
  hyphenToCamel: hyphenToCamel,
  hyphenate: hyphenate
};

},{}],76:[function(require,module,exports){
'use strict';

// jshint scripturl:true

var $ = require('dominus');
var queso = require('queso');
var safeson = require('safeson');
var state = require('./lib/state');
var transformers = [];
var formium = {
  submit: submit,
  transform: transform,
  configure: state.configure
};

function noop () {}

function transform (fn) {
  transformers.push(fn);
}

/* AJAX form submissions use an intermediary <iframe> to help browsers remember
 * autocompletion suggestions. We submit the form against the <iframe> and then
 * grab the response as plain-text JSON that we need to parse into JSON.
 * Afterwards we can hand that JSON to the response handler, business as usual.
 * Since we've submitted the form "organically", the browser stores suggestions.
 */
function frame (form) {
  var name = 'ff-' + new Date().valueOf();
  $(form)
    .attr('autocomplete', 'on')
    .attr('target', name);
  return $('<iframe>')
    .css('display', 'none')
    .attr('id', name)
    .attr('name', name)
    .attr('src', 'javascript:void 0')
    .afterOf(form);
}

function submit (form, done) {
  var textareaCloneValue = 'data-clone-value';
  var iframe = frame(form);
  var content = iframe[0].contentWindow;
  var restore = transformers.map(run);
  var textareas = $('textarea', form);
  textareas.forEach(preserveValue);
  var formClone = form.cloneNode(true);
  var textareaClones = $('textarea', formClone);
  disable(form);
  $('button', form).forEach(disable);
  $('[autofocus]', formClone).attr('autofocus', null);
  textareaClones.forEach(updateValue);
  textareas.forEach(restoreTextarea);
  var formCloneId = 'f' + iframe[0].id;
  formClone.id = formCloneId;
  iframe.once('load', grabResponse);
  content.document.body.appendChild(formClone);
  var frameForm = content.document.getElementById(formCloneId);
  var amp;
  if (state.qs) {
    amp = frameForm.action.indexOf('?') !== -1;
    frameForm.action += queso.stringify(state.qs(form), amp);
  }
  frameForm.onsubmit = null;
  frameForm.submit();
  restore.forEach(run);
  function preserveValue (textarea) {
    var ta = $(textarea);
    ta.attr(textareaCloneValue, ta.value());
  }
  function updateValue (textarea) {
    var ta = $(textarea);
    ta.value(ta.attr(textareaCloneValue)).attr(textareaCloneValue, null);
  }
  function restoreTextarea (textarea) {
    $(textarea).attr(textareaCloneValue, null);
  }
  function grabResponse () {
    var html = readResponse(content);
    if (!html) {
      gotResponse(new Error('Internal Server Error')); return;
    }
    var json = decodeResponse(html);
    var err = json ? null : new Error('Malformed response');
    gotResponse(err, json);
    function gotResponse (err, data) {
      $('button', form).forEach(enable);
      enable(form);
      iframe.remove();
      (done || noop).call(form, err, data);
      $(form).emit('formium', { error: err, data: data });
    }
  }
  function readResponse (content) {
    try {
      return content.document.body.innerHTML;
    } catch (e) { // failure to read (most likely) means server crashed or response timed out
    }
  }
  function decodeResponse (html) {
    try {
      return safeson.decode(html);
    } catch (e) {
    }
  }
  function run (fn) {
    return (fn || noop)(form);
  }
  function disable (el) {
    el.disabled = true;
  }
  function enable (el) {
    el.disabled = false;
  }
}

module.exports = formium;

},{"./lib/state":77,"dominus":71,"queso":92,"safeson":96}],77:[function(require,module,exports){
'use strict';

var state = {
  configure: configure
};

function configure (options) {
  state.qs = options.qs;
}

module.exports = state;

},{}],78:[function(require,module,exports){
'use strict';

function formulario (form) {
  var boundary = 'GradualFormBoundary' + Math.random().toString(2).substr(2);
  var formData = form.tagName === 'FORM' ? readForm(form) : form;
  var body = encode(formData, boundary);
  var headers = {
    'Accept': 'application/json',
    'Content-Type': 'multipart/form-data; boundary=' + boundary
  };
  return { headers: headers, body: body };
}

function cast (collection) {
  var casted = [];
  for (var i = 0; i < collection.length; i++) {
    casted.push(collection[i]);
  }
  return casted;
}

function readForm (form) {
  var inputs = form.getElementsByTagName('input');
  var textareas = form.getElementsByTagName('textarea');
  return cast(inputs).concat(cast(textareas)).reduce(merge, {});
}

function merge (data, input) {
  var choice = input.type === 'checkbox' || input.type === 'radio';
  var value = input.value;
  var key = input.name;
  if (choice) {
    if (input.checked) {
      data[key] = value;
    } else if (!(key in data)) {
      data[key] = '';
    }
  } else if (key in data) {
    if (typeof data[key] === 'string') {
      data[key] = [data[key], value];
    } else {
      data[key].push(value);
    }
  } else {
    data[key] = value;
  }
  return data;
}

function encode (formData, boundary) {
  return Object.keys(formData).reduce(append, []).concat('--' + boundary + '--').join('\r\n');

  function append (encoded, key) {
    var name = key;
    var item = formData[key];
    var items = Array.isArray(item) ? item : [item];

    items.forEach(appendOne);

    function appendOne (value) {
      encoded.push('--' + boundary);
      encoded.push('content-disposition: form-data; name="' + name + '"');
      encoded.push('');
      encoded.push(value);
    }

    // TODO: handle file uploads

    return encoded;
  }
}

formulario.encode = encode;
module.exports = formulario;

},{}],79:[function(require,module,exports){
'use strict';

var emitter = require('contra/emitter');
var formium = require('formium');
var formulario = require('formulario');
var formResponseHandler = require('./lib/formResponseHandler');
var state = require('./lib/state');
var transformers = [];
var gradual = emitter({
  hijack: hijack,
  transform: formium.transform,
  submit: submit,
  configure: state.configure
});

function noop () {}

function hijack (e) {
  var form = e.target;
  submitForm(form);
  e.preventDefault();
}

function submitForm (form, done) {
  formium.submit(form, handler);
  function handler (err, data) {
    raise(err, data, form, done);
  }
}

function submit (options, done) {
  var form = options.form;
  if (form) {
    submitForm(form, done); return;
  }
  var formData = formulario(options.data);
  var req = {
    method: options.method,
    headers: formData.headers,
    body: formData.body
  };
  return state.taunus.xhr(options.action, req, handler);
  function handler (err, data) {
    raise(err, data, null, done);
  }
}

function raise (err, data, context, done) {
  if (err) {
    gradual.emit.call(context, 'error', err);
  } else {
    gradual.emit.call(context, 'data', data);
  }
  gradual.emit.call(context, 'response', err, data);
  formResponseHandler(err, data, context, done);
}

module.exports = gradual;

},{"./lib/formResponseHandler":80,"./lib/state":81,"contra/emitter":61,"formium":76,"formulario":78}],80:[function(require,module,exports){
'use strict';

var $ = require('dominus');
var state = require('./state');

function noop () {}

function formResponseHandler (err, data, form, done) {
  var end = done || noop;
  if (err) {
    end(err); return;
  }
  var host = getNotificationHost(data);
  if (host) {
    messages(form, host);
  } else if (data.redirect) {
    data.redirect.force = true;
    state.taunus.redirect(data.redirect); return;
  }
  end(null, data);
}

function hasItems (host, prop) {
   return Array.isArray(host[prop]) ? host[prop].length : host[prop];
}

function getNotificationHost (host) {
  if (!host) {
    return false;
  }
  if (hasItems(host, 'errors') || hasItems(host, 'validation') || hasItems(host, 'messages')) {
    return host;
  }
  return getNotificationHost(host.model) || getNotificationHost(host.flash);
}

function messages (form, model) {
  var partial = 'partials/form-validation';
  var dialog = $('<div>');
  var dialogElement = dialog[0];
  var show = form ? attachToForm : displayInDialog;

  $('.fv-dialog').remove();

  if (form) {
    $('.ss-container,.fv-container', form).remove();
  }

  state.taunus.partial(dialogElement, partial, model).on('render', show);

  function attachToForm () {
    var contents = dialog.children();
    $(form).addClass('ff-validated').prepend(contents);
    dialog.remove();
  }

  function displayInDialog () {
    var body = $(document.body);

    dialog.appendTo(body).addClass('fv-dialog');
    body.on('click', dialogClose);
  }

  function dialogClose (e) {
    var body = $(document.body);
    var target = $(e.target);
    if (target.is('.fv-dialog-dismiss') || (target.is('.fv-dialog') === false && target.parents('.fv-dialog').length === 0)) {
      body.off('click', dialogClose);
      dialog.remove();
    }
  }
}

module.exports = formResponseHandler;

},{"./state":81,"dominus":71}],81:[function(require,module,exports){
'use strict';

var assign = require('assignment');
var formium = require('formium');
var state = {
  configure: configure
};

function configure (options) {
  formium.configure({ qs: qs });
  state.taunus = options.taunus;
  function qs (form) {
    var jsonText = { json: true, 'as-text': true };
    return assign(jsonText, (options.qs || noop)(form));
  }
}

function noop () {}

module.exports = state;

},{"assignment":58,"formium":76}],82:[function(require,module,exports){
'use strict';

function pad (hash, len) {
  while (hash.length < len) {
    hash = '0' + hash;
  }
  return hash;
}

function fold (hash, text) {
  var i;
  var chr;
  var len;
  if (text.length === 0) {
    return hash;
  }
  for (i = 0, len = text.length; i < len; i++) {
    chr = text.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0;
  }
  return hash < 0 ? hash * -2 : hash;
}

function foldObject (hash, o, seen) {
  return Object.keys(o).sort().reduce(foldKey, hash);
  function foldKey (hash, key) {
    return foldValue(hash, o[key], key, seen);
  }
}

function foldValue (input, value, key, seen) {
  var hash = fold(fold(fold(input, key), toString(value)), typeof value);
  if (value === null) {
    return fold(hash, 'null');
  }
  if (value === undefined) {
    return fold(hash, 'undefined');
  }
  if (typeof value === 'object') {
    if (seen.indexOf(value) !== -1) {
      return fold(hash, '[Circular]' + key);
    }
    seen.push(value);
    return foldObject(hash, value, seen);
  }
  return fold(hash, value.toString());
}

function toString (o) {
  return Object.prototype.toString.call(o);
}

function sum (o) {
  return pad(foldValue(0, o, '', []).toString(16), 8);
}

module.exports = sum;

},{}],83:[function(require,module,exports){
(function (global){
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.jade=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = function merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = merge(attrs, a[i]);
    }
    return attrs;
  }
  var ac = a['class'];
  var bc = b['class'];

  if (ac || bc) {
    ac = ac || [];
    bc = bc || [];
    if (!Array.isArray(ac)) ac = [ac];
    if (!Array.isArray(bc)) bc = [bc];
    a['class'] = ac.concat(bc).filter(nulls);
  }

  for (var key in b) {
    if (key != 'class') {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Filter null `val`s.
 *
 * @param {*} val
 * @return {Boolean}
 * @api private
 */

function nulls(val) {
  return val != null && val !== '';
}

/**
 * join array as classes.
 *
 * @param {*} val
 * @return {String}
 */
exports.joinClasses = joinClasses;
function joinClasses(val) {
  return (Array.isArray(val) ? val.map(joinClasses) :
    (val && typeof val === 'object') ? Object.keys(val).filter(function (key) { return val[key]; }) :
    [val]).filter(nulls).join(' ');
}

/**
 * Render the given classes.
 *
 * @param {Array} classes
 * @param {Array.<Boolean>} escaped
 * @return {String}
 */
exports.cls = function cls(classes, escaped) {
  var buf = [];
  for (var i = 0; i < classes.length; i++) {
    if (escaped && escaped[i]) {
      buf.push(exports.escape(joinClasses([classes[i]])));
    } else {
      buf.push(joinClasses(classes[i]));
    }
  }
  var text = joinClasses(buf);
  if (text.length) {
    return ' class="' + text + '"';
  } else {
    return '';
  }
};


exports.style = function (val) {
  if (val && typeof val === 'object') {
    return Object.keys(val).map(function (style) {
      return style + ':' + val[style];
    }).join(';');
  } else {
    return val;
  }
};
/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = function attr(key, val, escaped, terse) {
  if (key === 'style') {
    val = exports.style(val);
  }
  if ('boolean' == typeof val || null == val) {
    if (val) {
      return ' ' + (terse ? key : key + '="' + key + '"');
    } else {
      return '';
    }
  } else if (0 == key.indexOf('data') && 'string' != typeof val) {
    if (JSON.stringify(val).indexOf('&') !== -1) {
      console.warn('Since Jade 2.0.0, ampersands (`&`) in data attributes ' +
                   'will be escaped to `&amp;`');
    };
    if (val && typeof val.toISOString === 'function') {
      console.warn('Jade will eliminate the double quotes around dates in ' +
                   'ISO form after 2.0.0');
    }
    return ' ' + key + "='" + JSON.stringify(val).replace(/'/g, '&apos;') + "'";
  } else if (escaped) {
    if (val && typeof val.toISOString === 'function') {
      console.warn('Jade will stringify dates in ISO form after 2.0.0');
    }
    return ' ' + key + '="' + exports.escape(val) + '"';
  } else {
    if (val && typeof val.toISOString === 'function') {
      console.warn('Jade will stringify dates in ISO form after 2.0.0');
    }
    return ' ' + key + '="' + val + '"';
  }
};

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} escaped
 * @return {String}
 */
exports.attrs = function attrs(obj, terse){
  var buf = [];

  var keys = Object.keys(obj);

  if (keys.length) {
    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i]
        , val = obj[key];

      if ('class' == key) {
        if (val = joinClasses(val)) {
          buf.push(' ' + key + '="' + val + '"');
        }
      } else {
        buf.push(exports.attr(key, val, false, terse));
      }
    }
  }

  return buf.join('');
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

exports.escape = function escape(html){
  var result = String(html)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
  if (result === '' + html) return html;
  else return result;
};

/**
 * Re-throw the given `err` in context to the
 * the jade in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @api private
 */

exports.rethrow = function rethrow(err, filename, lineno, str){
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  try {
    str = str || require('fs').readFileSync(filename, 'utf8')
  } catch (ex) {
    rethrow(err, null, lineno)
  }
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Jade') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};

},{"fs":2}],2:[function(require,module,exports){

},{}]},{},[1])(1)
});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"fs":149}],84:[function(require,module,exports){
module.exports = require('jade/runtime');

},{"jade/runtime":83}],85:[function(require,module,exports){
(function (global){
'use strict';

var characters = ['<', '>', '"', '`', ' ', '\r', '\n', '\t', '{', '}', '|', '\\', '^', '`', '\''];
var map = [];
var i;
var ch;
var esc;
var len;
for (i = 0, len = characters.length; i < len; ++i) {
  ch = characters[i];
  esc = encodeURIComponent(ch);
  if (esc === ch) {
    esc = global.escape(ch);
  }
  map[ch.charCodeAt(0)] = esc;
}

module.exports = map;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],86:[function(require,module,exports){
'use strict';

var autoescape = require('./autoescape');

function getComponentEscaped (text, start, end) {
  var i = start;
  var current = start;
  var result = '';
  var ch;
  var escaped;
  for (; i <= end; ++i) {
    ch = text.charCodeAt(i);
    escaped = autoescape[ch];
    if (escaped) {
      if (current < i) {
        result += text.slice(current, i);
      }
      result += escaped;
      current = i + 1;
    }
  }
  if (current < i + 1) {
    result += text.slice(current, i);
  }
  return result;
}

module.exports = getComponentEscaped;

},{"./autoescape":85}],87:[function(require,module,exports){
'use strict';

var querystring = require('./querystring');
var autoescape = require('./autoescape');
var getComponentEscaped = require('./getComponentEscaped');

function parse (input) {
  var start = 0;
  var end = input.length - 1;
  var _protocol;
  var _hostname;
  var _host;
  var _port;
  var _prependSlash;
  var _pathname;
  var _path;
  var _query;
  var _search;
  var _hash;
  var ch;

  while (input.charCodeAt(start) <= 0x20 /*' '*/) { start++; }
  while (input.charCodeAt(end) <= 0x20 /*' '*/) { end--; }

  start = parseProtocol(input, start, end);
  start = parseHost(input, start, end);

  if (start <= end) {
    ch = input.charCodeAt(start);
    if (ch === 0x2F /*'/'*/) {
      parsePath(input, start, end);
    } else if (ch === 0x3F /*'?'*/) {
      parseQuery(input, start, end);
    } else if (ch === 0x23 /*'#'*/) {
      parseHash(input, start, end);
    } else {
      parsePath(input, start, end);
    }
  }

  if (!_pathname) { _pathname = '/'; }
  if (!_query) { _query = ''; }
  if (!_search) { _search = ''; }

  _path = parseFullPath();

  parseQueryString();

  return {
    protocol: _protocol,
    hostname: _hostname,
    host: _host,
    port: _port,
    pathname: _pathname,
    path: _path,
    search: _search,
    hash: _hash,
    query: _query
  };

  function parseProtocol (input, start, end) {
    for (var i = start; i <= end; ++i) {
      if (input.charCodeAt(i) === 0x3A /*':'*/) {
        _protocol = input.slice(start, i).toLowerCase();
        return i + 1;
      }
    }
    return start;
  }

  function parseHost (input, start, end) {
    if (input.charCodeAt(start) !== 0x2F /*'/'*/ ||
        input.charCodeAt(start + 1) !== 0x2F /*'/'*/) {
      return start;
    }

    start += 2; // assume slashes

    var lower = false;
    var hostNameStart = start;
    var hostNameEnd = end;
    var portLength = 0;
    var charsAfterDot = 0;
    var hostname;

    for (var i = start; i <= end; ++i) {
      if (charsAfterDot > 62) {
        _hostname = _host = input.slice(start, i);
        return i;
      }
      var ch = input.charCodeAt(i);
      if (ch === 0x3A /*':'*/) {
        portLength = parsePort(input, i + 1, end) + 1;
        hostNameEnd = i - 1;
        break;
      } else if (ch < 0x61 /*'a'*/) {
        if (ch === 0x2E /*'.'*/) {
          charsAfterDot = -1;
        } else if (0x41 /*'A'*/ <= ch && ch <= 0x5A /*'Z'*/) {
          lower = true;
        } else if (!(ch === 0x2D /*'-'*/ || ch === 0x5F /*'_'*/ || (0x30 /*'0'*/ <= ch && ch <= 0x39 /*'9'*/))) {
          if (ch !== 0x2F /*'/'*/ && ch !== 0x3F /*'?'*/ && ch !== 0x23 /*'#'*/) {
            _prependSlash = true;
          }
          hostNameEnd = i - 1;
          break;
        }
      }
      charsAfterDot++;
    }
    if (hostNameEnd + 1 !== start && hostNameEnd - hostNameStart <= 256) {
      hostname = input.slice(hostNameStart, hostNameEnd + 1);
      if (lower) {
        hostname = hostname.toLowerCase();
      }
      _hostname = hostname;
      _host = _port > 0 ? hostname + ':' + _port : hostname;
    }
    return hostNameEnd + 1 + portLength;
  }

  function parsePort (text, start, end) {
    var port = 0;
    var any = false;

    for (var i = start; i <= end; ++i) {
      var ch = text.charCodeAt(i);
      if (ch >= 0x30 /*'0'*/ && ch <= 0x39 /*'9'*/) {
        port = (10 * port) + (ch - 0x30 /*'0'*/);
        any = true;
      } else {
        break;
      }
    }
    if (port === 0 && !any) {
      return 0;
    }
    _port = port;
    return i - start;
  }

  function parsePath (text, start, end) {
    var pathStart = start;
    var pathEnd = end;
    var escape = false;
    var path;
    var i;
    var ch;
    for (i = start; i <= end; ++i) {
      ch = text.charCodeAt(i);
      if (ch === 0x23 /*'#'*/) {
        parseHash(text, i, end);
        pathEnd = i - 1;
        break;
      } else if (ch === 0x3F /*'?'*/) {
        parseQuery(text, i, end);
        pathEnd = i - 1;
        break;
      } else if (!escape && autoescape[ch]) {
        escape = true;
      }
    }
    if (pathStart > pathEnd) {
      _pathname = '/'; return;
    }
    if (escape) {
      path = getComponentEscaped(text, pathStart, pathEnd);
    } else {
      path = text.slice(pathStart, pathEnd + 1);
    }
    _pathname = _prependSlash ? '/' + path : path;
  }

  function parseQuery (text, start, end) {
    var queryStart = start;
    var queryEnd = end;
    var escape = false;
    var i;
    var ch;
    var query;

    for (i = start; i <= end; ++i) {
      ch = text.charCodeAt(i);
      if (ch === 0x23 /*'#'*/) {
        parseHash(text, i, end);
        queryEnd = i - 1;
        break;
      } else if (!escape && autoescape[ch]) {
        escape = true;
      }
    }
    if (queryStart > queryEnd) {
      _search = ''; return;
    }
    if (escape) {
      query = getComponentEscaped(text, queryStart, queryEnd);
    } else {
      query = text.slice(queryStart, queryEnd + 1);
    }
    _search = query;
  }

  function parseQueryString () {
    var search = _search;
    if (search.charCodeAt(0) === 0x3F /*'?'*/) {
      search = search.slice(1);
    }
    _query = querystring.parse(search);
  }

  function parseHash (text, start, end) {
    if (start > end) {
      _hash = ''; return;
    }
    _hash = getComponentEscaped(text, start, end);
  }

  function parseFullPath () {
    if (_pathname || _search) {
      return _pathname + _search;
    }
    if (!_pathname && _search) {
      return '/' + _search;
    }
    return '';
  }
}

module.exports = {
  parse: parse
};

},{"./autoescape":85,"./getComponentEscaped":86,"./querystring":88}],88:[function(require,module,exports){
'use strict';

var separator = '&';
var equals = '=';
var plus = '%20';
var maxKeys = 1000;
var isArray = Array.isArray || function isArray (input) {
  return Object.prototype.toString.call(input) === '[object Array]';
};

function hasOwnProperty (input, prop) {
  return Object.prototype.hasOwnProperty.call(input, prop);
}

function parse (qs) {
  var map = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return map;
  }

  var rplus = /\+/g;
  var x;
  var idx;
  var kstr;
  var vstr;
  var k;
  var v;
  var i;
  var parts = qs.split(separator);
  var len = parts.length;
  if (len > maxKeys) {
    len = maxKeys;
  }

  for (i = 0; i < len; i++) {
    x = parts[i].replace(rplus, plus);
    idx = x.indexOf(equals);

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(map, k)) {
      map[k] = v;
    } else if (isArray(map[k])) {
      map[k].push(v);
    } else {
      map[k] = [map[k], v];
    }
  }

  return map;
}

module.exports = {
  parse: parse
};

},{}],89:[function(require,module,exports){
(function (process){
// Generated by CoffeeScript 1.6.3
(function() {
  var getNanoSeconds, hrtime, loadTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - loadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    loadTime = getNanoSeconds();
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(this);

/*
//@ sourceMappingURL=performance-now.map
*/

}).call(this,require('_process'))

},{"_process":150}],90:[function(require,module,exports){
var poser = require('./src/node');

module.exports = poser;

['Array', 'Function', 'Object', 'Date', 'String'].forEach(pose);

function pose (type) {
  poser[type] = function poseComputedType () { return poser(type); };
}

},{"./src/node":91}],91:[function(require,module,exports){
(function (global){
'use strict';

var d = global.document;

function poser (type) {
  var iframe = d.createElement('iframe');

  iframe.style.display = 'none';
  d.body.appendChild(iframe);

  return map(type, iframe.contentWindow);
}

function map (type, source) { // forward polyfills to the stolen reference!
  var original = window[type].prototype;
  var value = source[type];
  var prop;

  for (prop in original) {
    value.prototype[prop] = original[prop];
  }

  return value;
}

module.exports = poser;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],92:[function(require,module,exports){
'use strict';

function stringify (query, amp) {
  return Object.keys(query).reduce(pairs, '');
  function pairs (q, key) {
    var prefix = amp !== true && q.length === 0 ? '?' : '&';
    var left = q + prefix + key;
    var value = query[key];
    if (value === true) {
      return left;
    }
    var encoded = encodeURIComponent(value);
    return left + '=' + encoded;
  }
}

module.exports = {
  stringify: stringify
};

},{}],93:[function(require,module,exports){
var now = require('performance-now')
  , global = typeof window === 'undefined' ? {} : window
  , vendors = ['moz', 'webkit']
  , suffix = 'AnimationFrame'
  , raf = global['request' + suffix]
  , caf = global['cancel' + suffix] || global['cancelRequest' + suffix]
  , native = true

for(var i = 0; i < vendors.length && !raf; i++) {
  raf = global[vendors[i] + 'Request' + suffix]
  caf = global[vendors[i] + 'Cancel' + suffix]
      || global[vendors[i] + 'CancelRequest' + suffix]
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  native = false

  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = now()
        , next = Math.max(0, frameDuration - (_now - last))
      last = next + _now
      setTimeout(function() {
        var cp = queue.slice(0)
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last)
            } catch(e) {
              setTimeout(function() { throw e }, 0)
            }
          }
        }
      }, Math.round(next))
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    })
    return id
  }

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true
      }
    }
  }
}

module.exports = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  if(!native) {
    return raf.call(global, fn)
  }
  return raf.call(global, function() {
    try{
      fn.apply(this, arguments)
    } catch(e) {
      setTimeout(function() { throw e }, 0)
    }
  })
}
module.exports.cancel = function() {
  caf.apply(global, arguments)
}

},{"performance-now":89}],94:[function(require,module,exports){
'use strict';

var pathToRegExp = require('./pathToRegExp');

function match (routes, uri, startAt) {
  var captures;
  var i = startAt || 0;

  for (var len = routes.length; i < len; ++i) {
    var route = routes[i];
    var re = route.re;
    var keys = route.keys;
    var splats = [];
    var params = {};

    if (captures = uri.match(re)) {
      for (var j = 1, len = captures.length; j < len; ++j) {
        var value = typeof captures[j] === 'string' ? unescape(captures[j]) : captures[j];
        var key = keys[j - 1];
        if (key) {
          params[key] = value;
        } else {
          splats.push(value);
        }
      }

      return {
        params: params,
        splats: splats,
        route: route.src,
        next: i + 1,
        index: route.index
      };
    }
  }
}

function routeInfo (path, index) {
  var src;
  var re;
  var keys = [];

  if (path instanceof RegExp) {
    re = path;
    src = path.toString();
  } else {
    re = pathToRegExp(path, keys);
    src = path;
  }

  return {
     re: re,
     src: path.toString(),
     keys: keys,
     index: index
  };
}

function Router () {
  if (!(this instanceof Router)) {
    return new Router();
  }

  this.routes = [];
  this.routeMap = [];
}

Router.prototype.addRoute = function (path, action) {
  if (!path) {
    throw new Error(' route requires a path');
  }
  if (!action) {
    throw new Error(' route ' + path.toString() + ' requires an action');
  }

  var route = routeInfo(path, this.routeMap.length);
  route.action = action;
  this.routes.push(route);
  this.routeMap.push([path, action]);
}

Router.prototype.match = function (uri, startAt) {
  var route = match(this.routes, uri, startAt);
  if (route) {
    route.action = this.routeMap[route.index][1];
    route.next = this.match.bind(this, uri, route.next);
  }
  return route;
}

module.exports = Router;

},{"./pathToRegExp":95}],95:[function(require,module,exports){
'use strict';

function pathToRegExp (path, keys) {
  path = path
    .concat('/?')
    .replace(/\/\(/g, '(?:/')
    .replace(/(\/)?(\.)?:(\w+)(?:(\(.*?\)))?(\?)?|\*/g, tweak)
    .replace(/([\/.])/g, '\\$1')
    .replace(/\*/g, '(.*)');

  return new RegExp('^' + path + '$', 'i');

  function tweak (match, slash, format, key, capture, optional) {
    if (match === '*') {
      keys.push(void 0);
      return match;
    }

    keys.push(key);

    slash = slash || '';

    return ''
      + (optional ? '' : slash)
      + '(?:'
      + (optional ? slash : '')
      + (format || '')
      + (capture ? capture.replace(/\*/g, '{0,}').replace(/\./g, '[\\s\\S]') : '([^/]+?)')
      + ')'
      + (optional || '');
  }
}

module.exports = pathToRegExp;

},{}],96:[function(require,module,exports){
'use strict';

var unescape = require('./unescape');

function safeson (data, spaces) {
  return JSON.stringify(data, null, spaces)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function decode (data) {
  return JSON.parse(unescape(data));
}

module.exports = safeson;
safeson.decode = decode;

},{"./unescape":97}],97:[function(require,module,exports){
'use strict';

var reEscapedHtml = /&(?:amp|lt|gt|quot|#39|#96);/g;
var htmlUnescapes = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': '\'',
  '&#96;': '`'
};

function unescapeHtmlChar (c) {
  return htmlUnescapes[c];
}

function unescape (input) {
  var data = input == null ? '' : String(input);
  if (data && (reEscapedHtml.lastIndex = 0, reEscapedHtml.test(data))) {
    return data.replace(reEscapedHtml, unescapeHtmlChar);
  }
  return data;
}

module.exports = unescape;

},{}],98:[function(require,module,exports){
(function (global){
'use strict';

var expando = 'sektor-' + Date.now();
var rsiblings = /[+~]/;
var document = global.document;
var del = document.documentElement || {};
var match = (
  del.matches ||
  del.webkitMatchesSelector ||
  del.mozMatchesSelector ||
  del.oMatchesSelector ||
  del.msMatchesSelector ||
  never
);

module.exports = sektor;

sektor.matches = matches;
sektor.matchesSelector = matchesSelector;

function qsa (selector, context) {
  var existed, id, prefix, prefixed, adapter, hack = context !== document;
  if (hack) { // id hack for context-rooted queries
    existed = context.getAttribute('id');
    id = existed || expando;
    prefix = '#' + id + ' ';
    prefixed = prefix + selector.replace(/,/g, ',' + prefix);
    adapter = rsiblings.test(selector) && context.parentNode;
    if (!existed) { context.setAttribute('id', id); }
  }
  try {
    return (adapter || context).querySelectorAll(prefixed || selector);
  } catch (e) {
    return [];
  } finally {
    if (existed === null) { context.removeAttribute('id'); }
  }
}

function sektor (selector, ctx, collection, seed) {
  var element;
  var context = ctx || document;
  var results = collection || [];
  var i = 0;
  if (typeof selector !== 'string') {
    return results;
  }
  if (context.nodeType !== 1 && context.nodeType !== 9) {
    return []; // bail if context is not an element or document
  }
  if (seed) {
    while ((element = seed[i++])) {
      if (matchesSelector(element, selector)) {
        results.push(element);
      }
    }
  } else {
    results.push.apply(results, qsa(selector, context));
  }
  return results;
}

function matches (selector, elements) {
  return sektor(selector, null, null, elements);
}

function matchesSelector (element, selector) {
  return match.call(element, selector);
}

function never () { return false; }

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],99:[function(require,module,exports){
(function (global){
'use strict';

var raf = require('raf');
var clone = require('./clone');
var emitter = require('./emitter');
var fetcher = require('./fetcher');
var prefetcherIntent = require('./prefetcherIntent');
var view = require('./view');
var router = require('./router');
var state = require('./state');
var redirector = require('./redirector');
var doc = require('./global/document');
var location = require('./global/location');
var history = require('./global/history');
var versionCheck = require('./versionCheck');
var hardRedirect = require('./hardRedirect');

function modern () { // needs to be a function because testing
  return history && history.modern !== false;
}

function go (url, options) {
  if (state.hardRedirect) {
    global.DEBUG && global.DEBUG('[activator] hard redirect in progress, aborting');
    return;
  }

  var o = options || {};
  var direction = o.replaceState ? 'replaceState' : 'pushState';
  var context = o.context || null;
  var route = router(url);
  if (!route) {
    if (o.strict !== true) {
      global.DEBUG && global.DEBUG('[activator] redirecting to %s', url);
      hardRedirect(url);
    }
    return;
  }

  global.DEBUG && global.DEBUG('[activator] route matches %s', route.route);

  if (o.dry) {
    global.DEBUG && global.DEBUG('[activator] history update only');
    navigation(route, state.model, direction); return;
  }

  var notForced = o.force !== true;
  var same = router.equals(route, state.route);
  if (same && notForced) {
    if (route.hash) {
      global.DEBUG && global.DEBUG('[activator] same route and hash, updating scroll position');
      scrollInto(id(route.hash), o.scroll);
      navigation(route, state.model, direction);
    } else {
      global.DEBUG && global.DEBUG('[activator] same route, resolving');
      resolved(state.model);
    }
    return;
  }

  global.DEBUG && global.DEBUG('[activator] %s', notForced ? 'not same route as before' : 'forced to fetch same route');

  if (!modern()) {
    global.DEBUG && global.DEBUG('[activator] not modern, redirecting to %s', url);
    hardRedirect(url);
    return;
  }

  global.DEBUG && global.DEBUG('[activator] fetching %s', route.url);
  prefetcherIntent.abort();
  fetcher.abortPending();
  fetcher(route, { element: context, source: 'intent' }, maybeResolved);

  function maybeResolved (err, data) {
    if (err) {
      return;
    }
    if (versionCheck(data.version, url) === false) {
      return;
    }
    if ('redirect' in data) {
      global.DEBUG && global.DEBUG('[activator] redirect detected in response');
      redirector.redirect(data.redirect);
      return;
    }
    resolved(data.model);
  }

  function resolved (model) {
    var same = router.equals(route, state.route);
    navigation(route, model, same ? 'replaceState' : direction);
    view(state.container, null, model, route);
    scrollInto(id(route.hash), o.scroll);
  }
}

function start (data) {
  if (data.version !== state.version) {
    global.DEBUG && global.DEBUG('[activator] version change, reloading browser');
    location.reload(); // version may change between Taunus loading and a model becoming available
    return;
  }
  var model = data.model;
  var route = router(location.href);
  navigation(route, model, 'replaceState');
  emitter.emit('start', state.container, model, route);
  global.DEBUG && global.DEBUG('[activator] started, executing client-side controller');
  view(state.container, null, model, route, { render: false });
  global.onpopstate = back;
}

function back (e) {
  var s = e.state;
  var empty = !s || !s.__taunus;
  if (empty) {
    return;
  }
  global.DEBUG && global.DEBUG('[activator] backwards history navigation with state', s);
  var model = s.model;
  var route = router(location.href);
  navigation(route, model, 'replaceState');
  view(state.container, null, model, route);
  scrollInto(id(route.hash));
}

function scrollInto (id, enabled) {
  if (enabled === false) {
    return;
  }
  global.DEBUG && global.DEBUG('[activator] scrolling into "%s"', id || '#document');

  var elem = id && doc.getElementById(id) || doc.documentElement;
  if (elem && elem.scrollIntoView) {
    raf(scrollSoon);
  }

  function scrollSoon () {
    elem.scrollIntoView();
  }
}

function id (hash) {
  return orEmpty(hash).substr(1);
}

function orEmpty (value) {
  return value || '';
}

function navigation (route, model, direction) {
  var data;

  global.DEBUG && global.DEBUG('[activator] history :%s %s', direction.replace('State', ''), route.url);
  state.route = route;
  state.model = clone(model);
  if (model.title) {
    doc.title = model.title;
  }
  if (modern() && history[direction]) {
    data = {
      __taunus: true,
      model: model
    };
    history[direction](data, model.title, route.url);
    setTimeout(emit, 0);
  }
  function emit () {
    emitter.emit('router', route);
  }
}

module.exports = {
  start: start,
  go: go
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./clone":102,"./emitter":105,"./fetcher":106,"./global/document":109,"./global/history":110,"./global/location":111,"./hardRedirect":112,"./prefetcherIntent":122,"./redirector":123,"./router":124,"./state":125,"./versionCheck":132,"./view":133,"raf":93}],100:[function(require,module,exports){
'use strict';

var clone = require('./clone');
var once = require('./once');
var state = require('./state');
var raw = require('./stores/raw');
var idb = require('./stores/idb');
var stores = [raw, idb];

function get (type, key, done) {
  var i = 0;

  function next () {
    var gotOnce = once(got);
    var store = stores[i++];
    if (store) {
      store.get(type, key, gotOnce);
      setTimeout(gotOnce, store === idb ? 35 : 5); // at worst, spend 40ms on caching layers
    } else {
      done(true);
    }

    function got (err, item) {
      if (err) {
        next();
      } else if (valid(item)) {
        done(false, blob(item)); // always return a unique copy
      } else {
        next();
      }
    }

    function valid (item) {
      if (!item) {
        return false; // cache must have item
      }
      var mismatch = typeof item.version !== 'string' || item.version !== state.version;
      if (mismatch) {
        return false; // cache must match current version
      }
      var stale = typeof item.expires !== 'number' || Date.now() >= item.expires;
      if (stale) {
        return false; // cache must be fresh
      }
      return true;
    }

    function blob (item) {
      var singular = type.substr(0, type.length - 1);
      var data = clone(item.data);
      var response = {
        version: item.version
      };
      response[singular] = data;
      return response;
    }
  }

  next();
}

function set (type, key, data, duration, v) {
  if (duration < 1) { // sanity
    return;
  }
  var version = arguments.length === 5 ? v : state.version;
  var cloned = clone(data); // freeze a copy for our records
  stores.forEach(store);
  function store (s) {
    s.set(type, key, {
      data: cloned,
      version: version,
      expires: Date.now() + duration
    });
  }
}

module.exports = {
  get: get,
  set: set
};

},{"./clone":102,"./once":119,"./state":125,"./stores/idb":127,"./stores/raw":128}],101:[function(require,module,exports){
(function (global){
'use strict';

var cache = require('./cache');
var idb = require('./stores/idb');
var state = require('./state');
var emitter = require('./emitter');
var interceptor = require('./interceptor');
var defaults = 15;
var baseline;

function e (value) {
  return value || '';
}

function setup (duration, route) {
  baseline = parseDuration(duration);
  if (baseline < 1) {
    state.cache = false;
    return;
  }
  interceptor.add(intercept);
  emitter.on('fetch.done', persist);
  state.cache = true;
}

function intercept (e) {
  global.DEBUG && global.DEBUG('[cache] attempting to intercept %s', e.route.url);
  cache.get('models', e.route.path, result);

  function result (err, data) {
    global.DEBUG && global.DEBUG('[cache] interception for %s %s', e.route.url, err || !data ? 'failed' : 'succeeded');
    if (!err && data) {
      e.preventDefault(data);
    }
  }
}

function parseDuration (value) {
  if (value === true) {
    return baseline || defaults;
  }
  if (typeof value === 'number') {
    return value;
  }
  return 0;
}

function persist (route, context, data) {
  if (!state.cache) {
    return;
  }
  if (route.cache === false) {
    return;
  }
  var d = baseline;
  if (typeof route.cache === 'number') {
    d = route.cache;
  }
  var target = context.hijacker || route.action;
  var freshness = parseDuration(d) * 1000;
  if ('model' in data) {
    global.DEBUG && global.DEBUG('[cache] saving model for %s', route.path);
    cache.set('models', route.path, data.model, freshness, data.version);
  }
  if ('template' in data) {
    global.DEBUG && global.DEBUG('[cache] saving template for %s', target);
    cache.set('templates', target, data.template, Infinity);
  }
  if ('controller' in data) {
    global.DEBUG && global.DEBUG('[cache] saving controller for %s', target);
    cache.set('controllers', target, data.controller, Infinity);
  }
}

function ready (fn) {
  if (state.cache) {
    idb.tested(fn); // wait on idb compatibility tests
  } else {
    fn(false); // caching is a no-op
  }
}

module.exports = {
  setup: setup,
  persist: persist,
  ready: ready
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./cache":100,"./emitter":105,"./interceptor":115,"./state":125,"./stores/idb":127}],102:[function(require,module,exports){
'use strict';

function clone (value) {
  return JSON.parse(JSON.stringify(value));
}

module.exports = clone;

},{}],103:[function(require,module,exports){
(function (global){
'use strict';

var state = require('./state');
var caching = require('./caching');
var unstrictEval = require('./unstrictEval');
var idb = require('./stores/idb');
var deferred = require('../lib/deferred');

function set (action, data) {
  store('template');
  store('controller');

  function store (key) {
    var type = key + 's';

    if (key in data) {
      push(type, action, data[key], data.version);
    }
  }
}

function refill () {
  caching.ready(pullComponents);
}

function pullComponents (enabled) {
  if (!enabled) { // bail if caching is turned off
    return;
  }
  idb.get('controllers', pull.bind(null, 'controllers'));
  idb.get('templates', pull.bind(null, 'templates'));
}

function pull (type, err, items) {
  if (err) {
    return;
  }
  items.forEach(pullItem);

  function pullItem (item) {
    push(type, item.key, item.data, item.version);
  }
}

function push (type, action, value, version) {
  var singular = type.substr(0, type.length - 1);
  var is = deferred(action, state.deferrals);
  if (is === false) {
    global.DEBUG && global.DEBUG('[componentCache] action "%s" is not deferred, not storing %s', action, singular);
    return;
  }
  global.DEBUG && global.DEBUG('[componentCache] storing %s for %s in state', singular, action);
  state[type][action] = state[type][action] || {};
  state[type][action][version] = {
    fn: parse(singular, value)
  };
}

function parse (type, value) {
  if (value) {
    try {
      return unstrictEval(value);
    } catch (e) {
      global.DEBUG && global.DEBUG('[componentCache] %s eval failed', type, e);
    }
  }
}

module.exports = {
  set: set,
  refill: refill
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../lib/deferred":135,"./caching":101,"./state":125,"./stores/idb":127,"./unstrictEval":131}],104:[function(require,module,exports){
(function (global){
'use strict';

var state = require('./state');
var deferred = require('../lib/deferred');

function needs (action) {
  var demands = [];
  var is = deferred(action, state.deferrals);
  if (is) {
    if (invalid('templates')) {
      demands.push('template');
    }
    if (invalid('controllers')) {
      demands.push('controller');
    }
  }

  function invalid (type) {
    var store = state[type];
    var fail = !store[action] || !store[action][state.version];
    if (fail) {
      global.DEBUG && global.DEBUG('[deferral] deferred %s %s not found', action, type.substr(0, type.length - 1));
    }
    return !!fail;
  }

  return demands;
}

module.exports = {
  needs: needs
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../lib/deferred":135,"./state":125}],105:[function(require,module,exports){
'use strict';

var emitter = require('contra/emitter');

module.exports = emitter({}, { throws: false });

},{"contra/emitter":61}],106:[function(require,module,exports){
(function (global){
'use strict';

var xhr = require('./xhr');
var state = require('./state');
var router = require('./router');
var emitter = require('./emitter');
var deferral = require('./deferral');
var interceptor = require('./interceptor');
var componentCache = require('./componentCache');
var lastXhr = {};

function e (value) {
  return value || '';
}

function negotiate (route, context) {
  var qs = e(route.search);
  var p = qs ? '&' : '?';
  var target = context.hijacker || route.action;
  var demands = ['json'].concat(deferral.needs(target));
  if (context.hijacker && context.hijacker !== route.action) {
    demands.push('hijacker=' + context.hijacker);
  }
  return route.pathname + qs + p + demands.join('&');
}

function abort (source) {
  if (lastXhr[source]) {
    lastXhr[source].abort();
  }
}

function abortPending () {
  Object.keys(lastXhr).forEach(abort);
  lastXhr = {};
}

function fetcher (route, context, done) {
  var url = route.url;
  if (lastXhr[context.source]) {
    lastXhr[context.source].abort();
    lastXhr[context.source] = null;
  }

  global.DEBUG && global.DEBUG('[fetcher] requested %s', route.url);

  interceptor.execute(route, afterInterceptors);

  function afterInterceptors (err, result) {
    if (!err && result.defaultPrevented && !context.hijacker) {
      global.DEBUG && global.DEBUG('[fetcher] prevented %s with data', route.url, result.data);
      done(null, result.data);
    } else {
      emitter.emit('fetch.start', route, context);
      lastXhr[context.source] = xhr(negotiate(route, context), notify);
    }
  }

  function notify (err, data, res) {
    if (err) {
      global.DEBUG && global.DEBUG('[fetcher] failed for %s', route.url);
      if (err.message === 'aborted') {
        emitter.emit('fetch.abort', route, context);
      } else {
        emitter.emit('fetch.error', route, context, err);
      }
    } else {
      global.DEBUG && global.DEBUG('[fetcher] succeeded for %s', route.url);
      if (data && data.version) {
        componentCache.set(router(res.url).query.hijacker || route.action, data);
      }
      emitter.emit('fetch.done', route, context, data);
    }
    done(err, data);
  }
}

fetcher.abortPending = abortPending;

module.exports = fetcher;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./componentCache":103,"./deferral":104,"./emitter":105,"./interceptor":115,"./router":124,"./state":125,"./xhr":134}],107:[function(require,module,exports){
(function (global){
'use strict';

var gradual = require('gradual');
var crossvent = require('crossvent');
var state = require('./state');
var document = require('./global/document');
var body = document.body;

function setup () {
  if (state.forms === false) {
    global.DEBUG && global.DEBUG('[gradual] disabled');
    return;
  }
  global.DEBUG && global.DEBUG('[gradual] enabled');
  gradual.configure({
    taunus: global.taunus,
    qs: state.qs
  });
  crossvent.add(body, 'submit', maybeHijack);
}

function maybeHijack (e) {
  if (e.target.tagName === 'FORM') {
    global.DEBUG && global.DEBUG('[gradual] hijacking form submission');
    gradual.hijack(e);
  }
}

module.exports = {
  setup: setup
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./global/document":109,"./state":125,"crossvent":62,"gradual":79}],108:[function(require,module,exports){
'use strict';

var document = require('./global/document');
var emitter = require('./emitter');
var body = document.body;
var tracker = [];

function enable () {
  emitter.on('render', collect);
}

function track (el, destroyable, options) {
  var o = options || {};
  if (o.implodes !== true) { o.implodes = false; }
  tracker.push({ el: el, destroyable: destroyable, options: o });
}

function collect (container) {
  tracker.filter(removables).forEach(remove);
  tracker = tracker.filter(not(removables));
  function removables (context) {
    if (context.el === container && context.options.implodes) {
      return true; // not typically what we want. may unbind events and never rebind
    }
    if (body.contains(context.el) === false) {
      return true;
    }
  }
}

function not (fn) {
  return function negated () {
    return !fn.apply(this, arguments);
  };
}

function remove (context) {
  context.destroyable.destroy();
}

module.exports = {
  enable: enable,
  track: track,
  collect: collect
};

},{"./emitter":105,"./global/document":109}],109:[function(require,module,exports){
(function (global){
'use strict';

module.exports = global.document;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],110:[function(require,module,exports){
(function (global){
'use strict';

var modern = 'history' in global && 'pushState' in global.history;
var api = modern && global.history;

// Google Chrome 38 on iOS makes weird changes to history.replaceState, breaking it
var nativeFn = require('../nativeFn');
var nativeReplaceBroken = modern && !nativeFn(api.replaceState);
if (nativeReplaceBroken) {
  api = {
    pushState: api.pushState.bind(api)
  };
}

module.exports = api;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../nativeFn":118}],111:[function(require,module,exports){
(function (global){
'use strict';

module.exports = global.location;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],112:[function(require,module,exports){
'use strict';

var state = require('./state');
var location = require('./global/location');

function hardRedirect (href) {
  location.href = href;
  state.redirecting = true;
}

module.exports = hardRedirect;

},{"./global/location":111,"./state":125}],113:[function(require,module,exports){
'use strict';

var emitter = require('./emitter');
var links = require('./links');

function attach () {
  emitter.on('start', links);
}

module.exports = {
  attach: attach
};

},{"./emitter":105,"./links":116}],114:[function(require,module,exports){
(function (global){
'use strict';

global.DEBUG && global.DEBUG('[index] loading taunus');

if (global.taunus !== void 0) {
  throw new Error('Use require(\'taunus/global\') after the initial require(\'taunus\') statement!');
}

var gradual = require('gradual');
var state = require('./state');
var stateClear = require('./stateClear');
var interceptor = require('./interceptor');
var activator = require('./activator');
var emitter = require('./emitter');
var hooks = require('./hooks');
var view = require('./view');
var mount = require('./mount');
var router = require('./router');
var xhr = require('./xhr');
var gc = require('./gc');
var prefetcher = require('./prefetcher');
var redirector = require('./redirector');
var resolve = require('../lib/resolve');
var version = require('../version.json');
var versionCheck = require('./versionCheck');

state.clear = stateClear;
hooks.attach();

function bind (method) {
  return function () {
    return emitter[method].apply(emitter, arguments);
  };
}

module.exports = global.taunus = {
  mount: mount,
  partial: view.partial,
  on: bind('on'),
  once: bind('once'),
  off: bind('off'),
  track: gc.track,
  intercept: interceptor.add,
  navigate: activator.go,
  prefetch: prefetcher.start,
  gradual: gradual,
  state: state,
  route: router,
  resolve: resolve,
  redirect: redirector.redirect,
  xhr: xhr,
  version: version,
  versionCheck: versionCheck
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../lib/resolve":137,"../version.json":138,"./activator":99,"./emitter":105,"./gc":108,"./hooks":113,"./interceptor":115,"./mount":117,"./prefetcher":121,"./redirector":123,"./router":124,"./state":125,"./stateClear":126,"./versionCheck":132,"./view":133,"./xhr":134,"gradual":79}],115:[function(require,module,exports){
(function (global){
'use strict';

var emitter = require('contra/emitter');
var once = require('./once');
var router = require('./router');
var interceptors = emitter({ count: 0 }, { async: true });

function getInterceptorEvent (route) {
  var e = {
    url: route.url,
    route: route,
    data: null,
    canPreventDefault: true,
    defaultPrevented: false,
    preventDefault: once(preventDefault)
  };

  function preventDefault (data) {
    if (!e.canPreventDefault) {
      return;
    }
    e.canPreventDefault = false;
    e.defaultPrevented = true;
    e.data = data;
  }

  return e;
}

function add (action, fn) {
  if (arguments.length === 1) {
    fn = action;
    action = '*';
  }
  interceptors.count++;
  interceptors.on(action, fn);
}

function execute (route, done) {
  var e = getInterceptorEvent(route);
  if (interceptors.count === 0) { // fail fast
    end(); return;
  }
  var fn = once(end);
  var preventDefaultBase = e.preventDefault;

  e.preventDefault = once(preventDefaultEnds);

  global.DEBUG && global.DEBUG('[interceptor] executing for %s', route.url);

  interceptors.emit('*', e);
  interceptors.emit(route.action, e);

  setTimeout(fn, 50); // at worst, spend 50ms waiting on interceptors

  function preventDefaultEnds () {
    preventDefaultBase.apply(null, arguments);
    fn();
  }

  function end () {
    global.DEBUG && global.DEBUG('[interceptor] %s for %s', interceptors.count === 0 && 'skipped' || e.defaultPrevented && 'prevented' || 'timed out', route.url);
    e.canPreventDefault = false;
    done(null, e);
  }
}

module.exports = {
  add: add,
  execute: execute
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./once":119,"./router":124,"contra/emitter":61}],116:[function(require,module,exports){
(function (global){
'use strict';

var crossvent = require('crossvent');
var state = require('./state');
var router = require('./router');
var prefetcher = require('./prefetcher');
var prefetcherIntent = require('./prefetcherIntent');
var activator = require('./activator');
var document = require('./global/document');
var location = require('./global/location');
var origin = require('./origin');
var body = document.body;
var leftClick = 1;
var prefetching = [];
var clicksOnHold = [];

function links () {
  if (state.links === false) {
    return;
  }
  if (state.prefetch && state.cache) { // prefetch without cache makes no sense
    global.DEBUG && global.DEBUG('[links] listening for prefetching opportunities');
    crossvent.add(body, 'mouseover', maybePrefetch);
    crossvent.add(body, 'touchstart', maybePrefetch);
  }
  global.DEBUG && global.DEBUG('[links] listening for rerouting opportunities');
  crossvent.add(body, 'click', maybeReroute);
}

function so (anchor) {
  return anchor.origin === origin;
}

function leftClickOnAnchor (e, anchor) {
  return anchor.pathname && e.which === leftClick && !e.metaKey && !e.ctrlKey;
}

function targetOrAnchor (e) {
  var anchor = e.target;
  while (anchor) {
    if (anchor.tagName === 'A') {
      return anchor;
    }
    anchor = anchor.parentElement;
  }
}

function maybeReroute (e) {
  var anchor = targetOrAnchor(e);
  if (anchor && so(anchor) && notjusthashchange(anchor) && leftClickOnAnchor(e, anchor) && routable(anchor)) {
    reroute(e, anchor);
  }
}

function attr (el, name) {
  var value = el.getAttribute(name);
  return typeof value === 'string' ? value : null;
}

function routable (anchor) {
  return attr(anchor, 'download') === null && attr(anchor, 'target') !== '_blank' && attr(anchor, 'data-taunus-ignore') === null;
}

function notjusthashchange (anchor) {
  return (
    anchor.pathname !== location.pathname ||
    anchor.search !== location.search ||
    anchor.hash === location.hash
  );
}

function maybePrefetch (e) {
  var anchor = targetOrAnchor(e);
  if (anchor && so(anchor)) {
    prefetch(e, anchor);
  }
}

function noop () {}

function parse (anchor) {
  return anchor.pathname + anchor.search + anchor.hash;
}

function reroute (e, anchor) {
  var url = parse(anchor);
  var route = router(url);
  if (!route) {
    return;
  }

  prevent();

  if (state.hardRedirect) {
    global.DEBUG && global.DEBUG('[links] hard redirect in progress, aborting');
    return;
  }

  if (prefetcher.busy(url)) {
    global.DEBUG && global.DEBUG('[links] navigation to %s blocked by prefetcher', route.url);
    prefetcherIntent.set(url);
    return;
  }

  global.DEBUG && global.DEBUG('[links] navigating to %s', route.url);
  activator.go(route.url, { context: anchor });

  function prevent () { e.preventDefault(); }
}

function prefetch (e, anchor) {
  prefetcher.start(parse(anchor), anchor);
}

module.exports = links;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./activator":99,"./global/document":109,"./global/location":111,"./origin":120,"./prefetcher":121,"./prefetcherIntent":122,"./router":124,"./state":125,"crossvent":62}],117:[function(require,module,exports){
(function (global){

'use strict';

var safeson = require('safeson');
var state = require('./state');
var router = require('./router');
var activator = require('./activator');
var caching = require('./caching');
var componentCache = require('./componentCache');
var fetcher = require('./fetcher');
var forms = require('./forms');
var gc = require('./gc');
var versioning = require('../versioning');
var document = require('./global/document');
var location = require('./global/location');
var resolve = require('../lib/resolve');
var g = global;
var mounted;
var booted;

function mount (container, wiring, options) {
  var o = options || {};
  if (mounted) {
    throw new Error('Taunus already mounted!');
  }
  if (!container || !container.tagName) { // naïve is enough
    throw new Error('You must define an application root container!');
  }
  if (!o.bootstrap) { o.bootstrap = 'auto'; }

  mounted = true;

  global.DEBUG && global.DEBUG('[mount] mountpoint invoked using "%s" strategy', o.bootstrap);

  state.container = container;
  state.controllers = wiring.controllers;
  state.templates = wiring.templates;
  state.routes = wiring.routes;
  state.deferrals = wiring.deferrals || [];
  state.prefetch = !!o.prefetch;
  state.version = versioning.get(o.version || '1');
  state.qs = o.qs || noop;
  state.links = 'links' in o ? !!o.links : true;
  state.forms = 'forms' in o ? !!o.forms : true;

  resolve.set(state.routes);
  router.setup(state.routes);
  forms.setup();
  gc.enable();

  var route = router(location.href);

  caching.setup(o.cache, route);
  caching.ready(kickstart);
  componentCache.refill();

  function kickstart () {
    if (o.bootstrap === 'auto') {
      autoboot();
    } else if (o.bootstrap === 'inline') {
      inlineboot();
    } else if (o.bootstrap === 'manual') {
      manualboot();
    } else {
      throw new Error(o.bootstrap + ' is not a valid bootstrap mode!');
    }
  }

  function autoboot () {
    fetcher(route, { element: container, source: 'boot' }, fetched);
  }

  function fetched (err, data) {
    if (err) {
      throw new Error('Fetching JSON data model failed at mountpoint.');
    }
    boot(data);
  }

  function inlineboot () {
    var id = container.getAttribute('data-taunus');
    var script = document.getElementById(id);
    var data = safeson.decode(script.innerText || script.textContent);
    boot(data);
  }

  function manualboot () {
    if (typeof g.taunusReady === 'function') {
      g.taunusReady = boot; // not yet an object? turn it into the boot method
    } else if (g.taunusReady && typeof g.taunusReady === 'object') {
      boot(g.taunusReady); // already an object? boot with that as the data object
    } else {
      throw new Error('Did you forget to add the taunusReady global?');
    }
  }

  function boot (data) {
    if (booted) { // sanity
      return;
    }

    global.DEBUG && global.DEBUG('[mount] mountpoint booted with data', data);

    if (!data) {
      throw new Error('Taunus data is required! Boot failed');
    }
    if (!data.version) {
      throw new Error('Version data is missing! Boot failed');
    }
    if (!data.model || typeof data.model !== 'object') {
      throw new Error('Taunus model must be an object! Boot failed');
    }
    booted = true;
    caching.persist(route, state.container, data);
    activator.start(data);
  }
}

function noop () {}

module.exports = mount;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../lib/resolve":137,"../versioning":139,"./activator":99,"./caching":101,"./componentCache":103,"./fetcher":106,"./forms":107,"./gc":108,"./global/document":109,"./global/location":111,"./router":124,"./state":125,"safeson":96}],118:[function(require,module,exports){
'use strict';

// source: https://gist.github.com/jdalton/5e34d890105aca44399f
// thanks @jdalton!

var toString = Object.prototype.toString; // used to resolve the internal `[[Class]]` of values
var fnToString = Function.prototype.toString; // used to resolve the decompiled source of functions
var host = /^\[object .+?Constructor\]$/; // used to detect host constructors (Safari > 4; really typed array specific)

// Escape any special regexp characters.
var specials = /[.*+?^${}()|[\]\/\\]/g;

// Replace mentions of `toString` with `.*?` to keep the template generic.
// Replace thing like `for ...` to support environments, like Rhino, which add extra
// info such as method arity.
var extras = /toString|(function).*?(?=\\\()| for .+?(?=\\\])/g;

// Compile a regexp using a common native method as a template.
// We chose `Object#toString` because there's a good chance it is not being mucked with.
var fnString = String(toString).replace(specials, '\\$&').replace(extras, '$1.*?');
var reNative = new RegExp('^' + fnString + '$');

function nativeFn (value) {
  var type = typeof value;
  if (type === 'function') {
    // Use `Function#toString` to bypass the value's own `toString` method
    // and avoid being faked out.
    return reNative.test(fnToString.call(value));
  }

  // Fallback to a host object check because some environments will represent
  // things like typed arrays as DOM methods which may not conform to the
  // normal native pattern.
  return (value && type === 'object' && host.test(toString.call(value))) || false;
}

module.exports = nativeFn;

},{}],119:[function(require,module,exports){
'use strict';

module.exports = function disposable (fn) {
  var used;
  var result;
  return function once () {
    if (used) { return result; } used = true;
    return (result = fn.apply(this, arguments));
  };
};

},{}],120:[function(require,module,exports){
'use strict';

var l = require('./global/location');
var origin = l.origin || (l.protocol + '//' + l.hostname + (l.port ? ':' + l.port: ''));

module.exports = origin;

},{"./global/location":111}],121:[function(require,module,exports){
(function (global){
'use strict';

var state = require('./state');
var router = require('./router');
var fetcher = require('./fetcher');
var activator = require('./activator');
var prefetcherIntent = require('./prefetcherIntent');
var jobs = [];
var intent;

function busy (url) {
  return jobs.indexOf(url) !== -1;
}

function start (url, element) {
  if (state.hardRedirect) {
    return; // no point in prefetching if location.href has changed
  }
  if (state.cache !== true) {
    return; // can't prefetch if caching is disabled
  }
  if (prefetcherIntent.is(null) === false) {
    return; // don't prefetch if the human wants to navigate: it'd abort the previous attempt
  }
  var route = router(url);
  if (route === null) {
    return; // only prefetch taunus view routes
  }
  if (busy(url)) {
    return; // already prefetching this url
  }

  global.DEBUG && global.DEBUG('[prefetcher] prefetching %s', route.url);
  jobs.push(url);
  fetcher(route, { element: element, source: 'prefetch' }, fetched);

  function fetched () {
    jobs.splice(jobs.indexOf(url), 1);
    if (prefetcherIntent.is(url)) {
      prefetcherIntent.abort();
      global.DEBUG && global.DEBUG('[prefetcher] resumed navigation for %s', route.url);
      activator.go(route.url, { context: element });
    }
  }
}

module.exports = {
  busy: busy,
  start: start
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./activator":99,"./fetcher":106,"./prefetcherIntent":122,"./router":124,"./state":125}],122:[function(require,module,exports){
'use strict';

var intent = null;
var prefetcherIntent = {
  is: is,
  set: set,
  abort: abort
};

function is (url) {
  return intent === url;
}

function set (url) {
  intent = url;
}

function abort (url) {
  intent = null;
}

module.exports = prefetcherIntent;

},{}],123:[function(require,module,exports){
(function (global){
'use strict';

var location = require('./global/location');
var hardRedirect = require('./hardRedirect');

function redirect (options) {
  var activator = require('./activator');
  var o = options || {};
  if (o.hard === true) { // hard redirects are safer but slower
    global.DEBUG && global.DEBUG('[redirector] hard, to', o.href);
    hardRedirect(o.href);
  } else { // soft redirects are faster but may break expectations
    global.DEBUG && global.DEBUG('[redirector] soft, to', o.href);
    activator.go(o.href, { force: o.force === true });
  }
}

module.exports = {
  redirect: redirect
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./activator":99,"./global/location":111,"./hardRedirect":112}],124:[function(require,module,exports){
(function (global){
'use strict';

var omnibox = require('omnibox');
var ruta3 = require('ruta3');
var location = require('./global/location');
var queryparser = require('../lib/queryparser');
var origin = require('./origin');
var matcher = ruta3();
var protocol = /^[a-z]+?:\/\//i;

function getFullUrl (raw) {
  var base = location.href.substr(origin.length);
  var hashless;
  if (!raw) {
    return base;
  }
  if (raw[0] === '#') {
    hashless = base.substr(0, base.length - location.hash.length);
    return hashless + raw;
  }
  if (protocol.test(raw)) {
    if (raw.indexOf(origin) === 0) {
      return raw.substr(origin.length);
    }
    return null;
  }
  return raw;
}

function router (raw) {
  var full = getFullUrl(raw);
  if (full === null) {
    return null;
  }
  var parts = omnibox.parse(full);
  var info = matcher.match(parts.pathname);

  global.DEBUG && global.DEBUG('[router] %s produces %o', raw, info);

  var route = info ? merge(info) : null;
  if (route === null || route.ignore) {
    return null;
  }

  route.url = full;
  route.hash = parts.hash || '';
  route.query = queryparser(parts.query);
  route.path = parts.path;
  route.pathname = parts.pathname;
  route.search = parts.search;

  global.DEBUG && global.DEBUG('[router] %s yields %s', raw, route.route);

  return route;
}

function merge (info) {
  var route = Object.keys(info.action).reduce(copyOver, {
    params: info.params
  });
  info.params.args = info.splats;

  return route;

  function copyOver (route, key) {
    route[key] = info.action[key]; return route;
  }
}

function setup (definitions) {
  definitions.forEach(define);
}

function define (definition) {
  if (typeof definition.action !== 'string') {
    definition.action = null;
  }
  matcher.addRoute(definition.route, definition);
}

function equals (left, right) {
  return left && right && left.path === right.path;
}

router.setup = setup;
router.equals = equals;

module.exports = router;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../lib/queryparser":136,"./global/location":111,"./origin":120,"omnibox":87,"ruta3":94}],125:[function(require,module,exports){
'use strict';

module.exports = {
  container: null
};

},{}],126:[function(require,module,exports){
'use strict';

var state = require('./state');
var raw = require('./stores/raw');
var idb = require('./stores/idb');

function clear () {
  raw.clear();
  idb.clear('models');
  idb.clear('controllers');
  idb.clear('templates');
  clearStore('controllers');
  clearStore('templates');
}

function clearStore (type) {
  var store = state[type];
  Object.keys(store).filter(o).forEach(rm);

  function o (action) {
    return store[action] && typeof store[action] === 'object';
  }
  function rm (action) {
    delete store[action];
  }
}


module.exports = clear;

},{"./state":125,"./stores/idb":127,"./stores/raw":128}],127:[function(require,module,exports){
(function (global){
'use strict';

var api = {};
var once = require('../once');
var idb = require('./underlying_idb');
var supports;
var db;
var dbVersion = 3;
var dbName = 'taunus';
var keyPath = 'key';
var setQueue = [];
var testedQueue = [];

function noop () {}

function test () {
  var key = 'indexed-db-feature-detection';
  var req;
  var db;

  if (!idb || !('deleteDatabase' in idb)) {
    support(false); return;
  }

  try {
    idb.deleteDatabase(key).onsuccess = transactionalTest;
  } catch (e) {
    support(false);
  }

  function transactionalTest () {
    req = idb.open(key, 1);
    req.onupgradeneeded = upgneeded;
    req.onerror = error;
    req.onsuccess = success;

    function upgneeded () {
      req.result.createObjectStore('store');
    }

    function success () {
      db = req.result;
      try {
        db.transaction('store', 'readwrite').objectStore('store').add(new global.Blob(), 'key');
      } catch (e) {
        support(false);
      } finally {
        db.close();
        idb.deleteDatabase(key);
        if (supports !== false) {
          open();
        }
      }
    }

    function error () {
      support(false);
    }
  }
}

function open () {
  var req = idb.open(dbName, dbVersion);
  req.onerror = error;
  req.onupgradeneeded = upgneeded;
  req.onsuccess = success;

  function upgneeded (e) {
    var db = req.result;
    var v = e.oldVersion;
    if (v === 1) {
      db.deleteObjectStore('wildstore');
    }
    if (v < 2) {
      db.createObjectStore('models', { keyPath: keyPath });
      db.createObjectStore('templates', { keyPath: keyPath });
      db.createObjectStore('controllers', { keyPath: keyPath });
    }
  }

  function success () {
    db = req.result;
    api.name = 'IndexedDB';
    api.get = get;
    api.set = set;
    api.clear = clear;
    support(true);
  }

  function error () {
    support(false);
  }
}

function fallback () {
  api.name = 'IndexedDB-fallbackStore';
  api.get = undefinedGet;
  api.set = enqueueSet;
  api.clear = noop;
}

function undefinedGet (store, key, done) {
  (done || key)(null, done ? null : []);
}

function enqueueSet (store, key,  value, done) {
  var next = done || noop;
  if (supports === false) {
    next(null); return;
  }
  if (setQueue.length > 10) { // let's not waste any more memory
    next(new Error('EFULLQUEUE')); return;
  }
  setQueue.push({ store: store, key: key, value: value, done: next });
}

function drainSet () {
  if (supports === false) {
    setQueue = [];
    return;
  }
  global.DEBUG && global.DEBUG('[idb] draining setQueue (%s items)', setQueue.length);
  while (setQueue.length) {
    var item = setQueue.shift();
    set(item.store, item.key, item.value, item.done);
  }
}

function query (op, store, value, done) {
  var next = done || noop;
  var req = db.transaction(store, 'readwrite').objectStore(store)[op](value);

  req.onsuccess = success;
  req.onerror = error;

  function success () {
    next(null, req.result);
  }

  function error () {
    next(new Error('Taunus cache query failed at IndexedDB!'));
  }
}

function queryCollection (store, done) {
  var next = done || noop;
  var tx = db.transaction(store, 'readonly');
  var s = tx.objectStore(store);
  var req = s.openCursor();
  var items = [];

  req.onsuccess = success;
  req.onerror = error;
  tx.oncomplete = complete;

  function complete () {
    next(null, items);
  }

  function success (e) {
    var cursor = e.target.result;
    if (cursor) {
      items.push(cursor.value);
      cursor.continue();
    }
  }

  function error () {
    next(new Error('Taunus cache queryCollection failed at IndexedDB!'));
  }
}

function clear (store, done) {
  var next = done || noop;
  var tx = db.transaction(store, 'readwrite');
  var s = tx.objectStore(store);
  var req = s.clear();
  var items = [];

  req.onerror = error;
  tx.oncomplete = complete;

  function complete () {
    next(null, items);
  }

  function error () {
    next(new Error('Taunus cache clear failed at IndexedDB!'));
  }
}

function get (store, key, done) {
  if (done === void 0) {
    queryCollection(store, key);
  } else {
    query('get', store, key, done);
  }
}

function set (store, key, value, done) {
  var next = once(done || noop);
  global.DEBUG && global.DEBUG('[idb] storing %s, in %s db', key, store, value);
  value[keyPath] = key;
  query('add', store, value, next); // attempt to insert
  query('put', store, value, next); // attempt to update
}

function drainTested () {
  while (testedQueue.length) {
    testedQueue.shift()(supports);
  }
}

function tested (fn) {
  if (supports !== void 0) {
    fn(supports);
  } else {
    testedQueue.push(fn);
  }
}

function support (value) {
  if (supports !== void 0) {
    return; // sanity
  }
  global.DEBUG && global.DEBUG('[idb] test result %s, db %s', value, value ? 'ready' : 'unavailable');
  supports = value;
  drainTested();
  drainSet();
}

function failed () {
  support(false);
}

fallback();
test();
setTimeout(failed, 600); // the test can take somewhere near 300ms to complete

module.exports = api;

api.tested = tested;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../once":119,"./underlying_idb":129}],128:[function(require,module,exports){
'use strict';

var raw = {};

function noop () {}

function ensure (store) {
  if (!raw[store]) { raw[store] = {}; }
}

function get (store, key, done) {
  ensure(store);
  done(null, raw[store][key]);
}

function set (store, key, value, done) {
  ensure(store);
  raw[store][key] = value;
  (done || noop)(null);
}

function clear () {
  raw = {};
}

module.exports = {
  name: 'memoryStore',
  get: get,
  set: set,
  clear: clear
};

},{}],129:[function(require,module,exports){
(function (global){
'use strict';

var g = global;

// fallback to empty object because tests
module.exports = g.indexedDB || g.mozIndexedDB || g.webkitIndexedDB || g.msIndexedDB || {};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],130:[function(require,module,exports){
'use strict';

var resolve = require('../lib/resolve');

module.exports = {
  resolve: resolve,
  toJSON: function () {}
};

},{"../lib/resolve":137}],131:[function(require,module,exports){
/* jshint strict:false */
// this module doesn't use strict, so eval is unstrict.

module.exports = function (code) {
  /* jshint evil:true */
  return eval(code);
};

},{}],132:[function(require,module,exports){
(function (global){
'use strict';

var state = require('./state');
var hardRedirect = require('./hardRedirect');
var location = require('./global/location');

function versionCheck (version, href) {
  var match = version === state.version;
  if (match === false) {
    global.DEBUG && global.DEBUG('[activator] version change (is "%s", was "%s"), redirecting to %s', version, state.version, href);
    hardRedirect(href || location.href); // version change demands fallback to strict navigation
  }
  return match;
}

module.exports = versionCheck;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./global/location":111,"./hardRedirect":112,"./state":125}],133:[function(require,module,exports){
(function (global){
'use strict';

var clone = require('./clone');
var state = require('./state');
var ee = require('contra/emitter');
var emitter = require('./emitter');
var fetcher = require('./fetcher');
var deferral = require('./deferral');
var templatingAPI = require('./templatingAPI');
var doc = require('./global/document');

function noop () {}

function view (container, enforcedAction, model, route, options) {
  var action = enforcedAction || model && model.action || route && route.action;
  var demands = deferral.needs(action);
  var api = ee();

  global.DEBUG && global.DEBUG('[view] rendering view %s with [%s] demands', action, demands.join(','));

  if (demands.length) {
    pull();
  } else {
    ready();
  }

  return api;

  function pull () {
    var victim = route || state.route;
    var context = {
      source: 'hijacking',
      hijacker: action,
      element: container
    };
    global.DEBUG && global.DEBUG('[view] hijacking %s for action %s', victim.url, action);
    fetcher(victim, context, ready);
  }

  function ready () {
    var html;
    var controller = getComponent('controllers', action);
    var internals = options || {};
    if (internals.render !== false) {
      html = render(action, model, route, container);
      container = (internals.draw || insert)(container, html) || container;
      setTimeout(done, 0);
    } else {
      global.DEBUG && global.DEBUG('[view] not rendering %s', action);
    }
    if (container === state.container) {
      emitter.emit('change', route, model);
    }
    emitter.emit('render', container, model, route);
    global.DEBUG && global.DEBUG('[view] %s client-side controller for %s', controller ? 'executing' : 'no', action);
    if (typeof controller === 'function') {
      controller(model, container, route);
    }

    function done () {
      api.emit('render', html, container);
    }
  }
}

function render (action, model, route, container) {
  global.DEBUG && global.DEBUG('[view] rendering %s with model', action, model);
  var template = getComponent('templates', action);
  if (typeof template !== 'function') {
    throw new Error('Client-side "' + action + '" view template not found');
  }
  var cloned = clone(model);
  cloned.taunus = templatingAPI;
  cloned.route = route || state.route;
  cloned.route.toJSON = noop;
  try {
    return template(cloned);
  } catch (e) {
    var message = 'Error rendering "' + action + '" view template';
    emitter.emit('render.error', e, container, model, route);
    throw new Error(message + '\n' + e.stack);
  }
}

function getComponent (type, action) {
  var component = state[type][action];
  var transport = typeof component;
  if (transport === 'function') {
    return component;
  }
  if (component && component[state.version]) {
    return component[state.version].fn; // deferreds are stored as {v1:{fn},v2:{fn}}
  }
  return null;
}

function mode (draw) {
  return function partial (container, action, model) {
    global.DEBUG && global.DEBUG('[view] rendering partial %s', action);
    return view(container, action, model, null, { draw: draw });
  };
}

function insert (container, html) {
  container.innerHTML = html;
}

function replacer (html, next) {
  var placeholder = doc.createElement('div');
  placeholder.innerHTML = html;
  while (placeholder.children.length) {
    next(placeholder);
  }
}

function replace (container, html) {
  var first;
  replacer(html, before);
  container.parentElement.removeChild(container);
  return first;
  function before (placeholder) {
    var el = placeholder.children[0];
    if (!first) { first = el; }
    container.parentElement.insertBefore(el, container);
  }
}

function appendTo (container, html) {
  replacer(html, function append (placeholder) {
    container.appendChild(placeholder.children[0]);
  });
}

function prependTo (container, html) {
  replacer(html, function append (p) {
    container.insertBefore(p.children[p.children.length - 1], container.firstChild);
  });
}

view.partial = mode();
view.partial.replace = mode(replace);
view.partial.appendTo = mode(appendTo);
view.partial.prependTo = mode(prependTo);

module.exports = view;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./clone":102,"./deferral":104,"./emitter":105,"./fetcher":106,"./global/document":109,"./state":125,"./templatingAPI":130,"contra/emitter":61}],134:[function(require,module,exports){
(function (global){
'use strict';

var xhr = require('xhr');
var sum = require('hash-sum');
var temporize = require('temporize');

function request (url, options, end) {
  var displaced = typeof options === 'function';
  var hasUrl = typeof url === 'string';
  var user;
  var done = displaced ? options : end;

  if (hasUrl) {
    if (displaced) {
      user = { url: url };
    } else {
      user = options;
      user.url = url;
    }
  } else {
    user = url;
  }

  var o = {
    headers: { Accept: 'application/json' }
  };
  Object.keys(user).forEach(overwrite);

  var req;
  var hash = sum(o) + ':' + o.url;
  var cached = true;

  temporize({
    name: hash,
    seconds: 1,
    load: load
  }, loaded);

  return req;

  function overwrite (prop) {
    o[prop] = user[prop];
  }

  function load (done) {
    global.DEBUG && global.DEBUG('[xhr] %s %s', o.method || 'GET', o.url);
    cached = false;
    var result = xhr(o, handle);
    done(null, result);
    return result;
  }

  function loaded (result) {
    if (cached) {
      global.DEBUG && global.DEBUG('[xhr] %s %s (cache)', o.method || 'GET', o.url);
    }
    req = result;
  }

  function handle (err, res, body) {
    if (err && req && !req.getAllResponseHeaders()) {
      global.DEBUG && global.DEBUG('[xhr] %s %s (aborted)', o.method || 'GET', o.url);
      done(new Error('aborted'), null, res);
    } else {
      try  {
        res.body = body = JSON.parse(body);
      } catch (e) {
        // suppress
      }
      global.DEBUG && global.DEBUG('[xhr] %s %s (done)', o.method || 'GET', o.url);
      done(err, body, res);
    }
  }
}

module.exports = request;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"hash-sum":82,"temporize":140,"xhr":142}],135:[function(require,module,exports){
'use strict';

module.exports = function deferred (action, rules) {
  return rules.some(failed);
  function failed (challenge) {
    var left = challenge.split('/');
    var right = action.split('/');
    var lpart, rpart;
    while (left.length) {
      lpart = left.shift();
      rpart = right.shift();
      if (lpart !== '?' && lpart !== rpart) {
        return false;
      }
    }
    return true;
  }
};

},{}],136:[function(require,module,exports){
'use strict';

var rdigits = /^[+-]?\d+$/;

function queryparser (query) {
  return Object.keys(query).reduce(parsed, {});
  function parsed (result, key) {
    result[key] = field(query[key]);
    return result;
  }
}

function field (value) {
  if (rdigits.test(value)) {
    return parseInt(value, 10);
  }
  if (value === '' || value === 'true') {
    return true;
  }
  if (value === 'false') {
    return false;
  }
  return value;
}

queryparser.field = field;
module.exports = queryparser;

},{}],137:[function(require,module,exports){
'use strict';

/*
 * # a named parameter in the ':name' format
 * :([a-z]+)
 *
 * # matches a regexp that constraints the possible values for this parameter
 * # e.g ':name([a-z+])'
 * (?:\((?![*+?])(?:[^\r\n\[/\\]|\\.|\[(?:[^\r\n\]\\]|\\.)*\])+\))?
 *
 * # the parameter may be optional, e.g ':name?'
 * (\?)?
 *
 * - i: routes are typically lower-case but they may be mixed case as well
 * - g: routes may have zero or more named parameters
 *
 * regexper: http://regexper.com/#%2F%3A(%5Ba-z%5D%2B)(%3F%3A%5C((%3F!%5B*%2B%3F%5D)(%3F%3A%5B%5E%5Cr%5Cn%5C%5B%2F%5C%5C%5D%7C%5C%5C.%7C%5C%5B(%3F%3A%5B%5E%5Cr%5Cn%5C%5D%5C%5C%5D%7C%5C%5C.)*%5C%5D)%2B%5C))%3F(%5C%3F)%3F%2Fig
 */

var defaultMatcher = /:([a-z]+)(?:\((?![*+?])(?:[^\r\n\[/\\]|\\.|\[(?:[^\r\n\]\\]|\\.)*\])+\))?(\?)?/ig;
var rtrailingslash = /\/$/;
var routes;
var matcher;

function find (action) {
  var i;
  for (i = 0; i < routes.length; i++) {
    if (routes[i].action === action) {
      return routes[i].route;
    }
  }
  return null;
}

function use (m) {
  matcher = m || defaultMatcher;
}

function set (r) {
  routes = r || [];
}

function resolve (action, data) {
  var props = data || {};
  var route = find(action);
  if (route === null) {
    return null;
  }
  var qs = queryString(props.args);
  var pathname = route.replace(matcher, replacer);
  if (pathname.length > 1) {
    return pathname.replace(rtrailingslash, '') + qs;
  }
  return pathname + qs;

  function replacer (match, key, optional) {
    var value = props[key];
    if (value !== void 0 && value !== null) {
      return props[key];
    }
    if (key in props || optional) {
      return '';
    }
    throw new Error('Route ' + route + ' expected "' + key + '" parameter.');
  }

  function queryString (args) {
    var parts = args || {};
    var query = Object.keys(parts).map(keyValuePair).join('&');
    if (query) {
      return '?' + query;
    }
    return '';

    function keyValuePair (prop) {
      var value = parts[prop];
      if (value === void 0 || value === null || value === '') {
        return prop;
      }
      return prop + '=' + value;
    }
  }
}

use();
set();

resolve.use = use;
resolve.set = set;

module.exports = resolve;

},{}],138:[function(require,module,exports){
module.exports="7.1.6"

},{}],139:[function(require,module,exports){
'use strict';

var t = require('./version.json');

function get (v) {
  return 't' + t + ';v' + v;
}

module.exports = {
  get: get
};

},{"./version.json":138}],140:[function(require,module,exports){
'use strict';

var cache = {};

function temporize (options, done) {
  var store = cache[options.name];
  if (store === void 0) {
    store = cache[options.name] = {
      callbacks: [],
      expires: -Infinity
    };
  }
  store.callbacks.push(done);
  if (store.loading) {
    return;
  }
  var now = new Date();
  if (now > store.expires) {
    reload();
  } else {
    cached();
  }
  function reload () {
    store.loading = true;
    options.load(loaded);
  }
  function loaded () {
    var expires = new Date();
    expires.setSeconds(expires.getSeconds() + options.seconds);
    store.expires = expires;
    store.context = this;
    store.args = arguments;
    cached();
  }
  function cached () {
    store.loading = false;
    store.callbacks.forEach(callback);
    store.callbacks = [];
    function callback (fn) {
      setTimeout(go, 0);
      function go () {
        fn.apply(store.context, store.args);
      }
    }
  }
}

module.exports = temporize;

},{}],141:[function(require,module,exports){
var si = typeof setImmediate === 'function', tick;
if (si) {
  tick = function (fn) { setImmediate(fn); };
} else {
  tick = function (fn) { setTimeout(fn, 0); };
}

module.exports = tick;
},{}],142:[function(require,module,exports){
"use strict";
var window = require("global/window")
var once = require("once")
var parseHeaders = require("parse-headers")


var XHR = window.XMLHttpRequest || noop
var XDR = "withCredentials" in (new XHR()) ? XHR : window.XDomainRequest

module.exports = createXHR

function createXHR(options, callback) {
    function readystatechange() {
        if (xhr.readyState === 4) {
            loadFunc()
        }
    }

    function getBody() {
        // Chrome with requestType=blob throws errors arround when even testing access to responseText
        var body = undefined

        if (xhr.response) {
            body = xhr.response
        } else if (xhr.responseType === "text" || !xhr.responseType) {
            body = xhr.responseText || xhr.responseXML
        }

        if (isJson) {
            try {
                body = JSON.parse(body)
            } catch (e) {}
        }

        return body
    }
    
    var failureResponse = {
                body: undefined,
                headers: {},
                statusCode: 0,
                method: method,
                url: uri,
                rawRequest: xhr
            }
    
    function errorFunc(evt) {
        clearTimeout(timeoutTimer)
        if(!(evt instanceof Error)){
            evt = new Error("" + (evt || "unknown") )
        }
        evt.statusCode = 0
        callback(evt, failureResponse)
    }

    // will load the data & process the response in a special response object
    function loadFunc() {
        clearTimeout(timeoutTimer)
        
        var status = (xhr.status === 1223 ? 204 : xhr.status)
        var response = failureResponse
        var err = null
        
        if (status !== 0){
            response = {
                body: getBody(),
                statusCode: status,
                method: method,
                headers: {},
                url: uri,
                rawRequest: xhr
            }
            if(xhr.getAllResponseHeaders){ //remember xhr can in fact be XDR for CORS in IE
                response.headers = parseHeaders(xhr.getAllResponseHeaders())
            }
        } else {
            err = new Error("Internal XMLHttpRequest Error")
        }
        callback(err, response, response.body)
        
    }
    
    if (typeof options === "string") {
        options = { uri: options }
    }

    options = options || {}
    if(typeof callback === "undefined"){
        throw new Error("callback argument missing")
    }
    callback = once(callback)

    var xhr = options.xhr || null

    if (!xhr) {
        if (options.cors || options.useXDR) {
            xhr = new XDR()
        }else{
            xhr = new XHR()
        }
    }

    var key
    var uri = xhr.url = options.uri || options.url
    var method = xhr.method = options.method || "GET"
    var body = options.body || options.data
    var headers = xhr.headers = options.headers || {}
    var sync = !!options.sync
    var isJson = false
    var timeoutTimer

    if ("json" in options) {
        isJson = true
        headers["Accept"] || (headers["Accept"] = "application/json") //Don't override existing accept header declared by user
        if (method !== "GET" && method !== "HEAD") {
            headers["Content-Type"] = "application/json"
            body = JSON.stringify(options.json)
        }
    }

    xhr.onreadystatechange = readystatechange
    xhr.onload = loadFunc
    xhr.onerror = errorFunc
    // IE9 must have onprogress be set to a unique function.
    xhr.onprogress = function () {
        // IE must die
    }
    xhr.ontimeout = errorFunc
    xhr.open(method, uri, !sync)
    //has to be after open
    xhr.withCredentials = !!options.withCredentials
    
    // Cannot set timeout with sync request
    // not setting timeout on the xhr object, because of old webkits etc. not handling that correctly
    // both npm's request and jquery 1.x use this kind of timeout, so this is being consistent
    if (!sync && options.timeout > 0 ) {
        timeoutTimer = setTimeout(function(){
            xhr.abort("timeout");
        }, options.timeout+2 );
    }

    if (xhr.setRequestHeader) {
        for(key in headers){
            if(headers.hasOwnProperty(key)){
                xhr.setRequestHeader(key, headers[key])
            }
        }
    } else if (options.headers) {
        throw new Error("Headers cannot be set on an XDomainRequest object")
    }

    if ("responseType" in options) {
        xhr.responseType = options.responseType
    }
    
    if ("beforeSend" in options && 
        typeof options.beforeSend === "function"
    ) {
        options.beforeSend(xhr)
    }

    xhr.send(body)

    return xhr


}


function noop() {}

},{"global/window":143,"once":144,"parse-headers":148}],143:[function(require,module,exports){
(function (global){
if (typeof window !== "undefined") {
    module.exports = window;
} else if (typeof global !== "undefined") {
    module.exports = global;
} else if (typeof self !== "undefined"){
    module.exports = self;
} else {
    module.exports = {};
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],144:[function(require,module,exports){
module.exports = once

once.proto = once(function () {
  Object.defineProperty(Function.prototype, 'once', {
    value: function () {
      return once(this)
    },
    configurable: true
  })
})

function once (fn) {
  var called = false
  return function () {
    if (called) return
    called = true
    return fn.apply(this, arguments)
  }
}

},{}],145:[function(require,module,exports){
var isFunction = require('is-function')

module.exports = forEach

var toString = Object.prototype.toString
var hasOwnProperty = Object.prototype.hasOwnProperty

function forEach(list, iterator, context) {
    if (!isFunction(iterator)) {
        throw new TypeError('iterator must be a function')
    }

    if (arguments.length < 3) {
        context = this
    }
    
    if (toString.call(list) === '[object Array]')
        forEachArray(list, iterator, context)
    else if (typeof list === 'string')
        forEachString(list, iterator, context)
    else
        forEachObject(list, iterator, context)
}

function forEachArray(array, iterator, context) {
    for (var i = 0, len = array.length; i < len; i++) {
        if (hasOwnProperty.call(array, i)) {
            iterator.call(context, array[i], i, array)
        }
    }
}

function forEachString(string, iterator, context) {
    for (var i = 0, len = string.length; i < len; i++) {
        // no such thing as a sparse string.
        iterator.call(context, string.charAt(i), i, string)
    }
}

function forEachObject(object, iterator, context) {
    for (var k in object) {
        if (hasOwnProperty.call(object, k)) {
            iterator.call(context, object[k], k, object)
        }
    }
}

},{"is-function":146}],146:[function(require,module,exports){
module.exports = isFunction

var toString = Object.prototype.toString

function isFunction (fn) {
  var string = toString.call(fn)
  return string === '[object Function]' ||
    (typeof fn === 'function' && string !== '[object RegExp]') ||
    (typeof window !== 'undefined' &&
     // IE8 and below
     (fn === window.setTimeout ||
      fn === window.alert ||
      fn === window.confirm ||
      fn === window.prompt))
};

},{}],147:[function(require,module,exports){

exports = module.exports = trim;

function trim(str){
  return str.replace(/^\s*|\s*$/g, '');
}

exports.left = function(str){
  return str.replace(/^\s*/, '');
};

exports.right = function(str){
  return str.replace(/\s*$/, '');
};

},{}],148:[function(require,module,exports){
var trim = require('trim')
  , forEach = require('for-each')
  , isArray = function(arg) {
      return Object.prototype.toString.call(arg) === '[object Array]';
    }

module.exports = function (headers) {
  if (!headers)
    return {}

  var result = {}

  forEach(
      trim(headers).split('\n')
    , function (row) {
        var index = row.indexOf(':')
          , key = trim(row.slice(0, index)).toLowerCase()
          , value = trim(row.slice(index + 1))

        if (typeof(result[key]) === 'undefined') {
          result[key] = value
        } else if (isArray(result[key])) {
          result[key].push(value)
        } else {
          result[key] = [ result[key], value ]
        }
      }
  )

  return result
}
},{"for-each":145,"trim":147}],149:[function(require,module,exports){

},{}],150:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;

function drainQueue() {
    if (draining) {
        return;
    }
    draining = true;
    var currentQueue;
    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        var i = -1;
        while (++i < len) {
            currentQueue[i]();
        }
        len = queue.length;
    }
    draining = false;
}
process.nextTick = function (fun) {
    queue.push(fun);
    if (!draining) {
        setTimeout(drainQueue, 0);
    }
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}]},{},[53])