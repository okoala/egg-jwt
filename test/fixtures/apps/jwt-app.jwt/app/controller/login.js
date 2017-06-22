'use strict';

module.exports = app => {
  class LoginController extends app.Controller {
    * index() {
      this.ctx.body = 'hello admin';
    }
  }
  return LoginController;
};
