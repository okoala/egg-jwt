'use strict';

module.exports = app => {
  app.get('/login', app.controller.login);
  app.get('/', app.jwt, app.controller.render);
};
