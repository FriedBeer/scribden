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