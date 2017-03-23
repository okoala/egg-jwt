'use strict';

module.exports = app => {
  app.get('/', app.jwt, 'render.index');
  app.get('/login', 'login.index');
  app.get('/success', app.jwt, 'success.index');
};
