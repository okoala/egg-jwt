'use strict';

module.exports = app => {
  app.get('/', app.controller.render.index);
  app.get('/login', app.controller.login.index);
  app.get('/success', app.controller.success.index);
};
