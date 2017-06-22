'use strict';

module.exports = app => {
  app.get('/', app.jwt, app.controller.render.index);
  app.get('/login', app.controller.login.index);
  app.get('/success', app.jwt, app.controller.success.index);
};
