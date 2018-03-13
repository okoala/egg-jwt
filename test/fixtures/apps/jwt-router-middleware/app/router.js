'use strict';

module.exports = app => {
  const jwt = app.middlewares.jwt(app.config.jwt);

  app.get('/', jwt, app.controller.render.index);
  app.get('/login', app.controller.login.index);
  app.get('/success', jwt, app.controller.success.index);
  app.get('/unauthorerror', jwt, app.controller.unauthorerror.index);
};
