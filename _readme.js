/*
  /.bin - compiled views
  /client - client code
  /client/css - css (use sass to compile)
  // client-side controllers export a function that gets executed when the view is rendered
  /client/js/controllers/app - client side business logic for app
  /client/js/controllers/home - client side business logic for login/register
  /client/js/main.js - code for mounting client side code (run browserify to put it all together)
  /controllers - server side business logic
  /controllers/api - server side business logic
  /controllers/app - server side code for setting up corresponding pages
  /controllers/home - server side code for setting up corresponding pages
  /controllers/getDefaultViewModel.js - server side code to be included on every client side page
  /models - ORM DB definitions (holds methods for querying)
  /views - Jade templates for the client (not directly used, compiled with [jadum views/** --output .bin
  
  taunus --output - links server and client side
*/