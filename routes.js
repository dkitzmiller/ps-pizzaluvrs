'use strict';

// setup handlers and transfile library
const handlers = require('./handlers'), transfile = require('./lib/transfile');

// register Routes
module.exports.registerRoutes = (server) => {
  const files = transfile(__dirname + '/routes/'),
    routes = [];

  for (let key in files) {
    routes.push(files[key](handlers));
  }

  server.route(routes);
};
