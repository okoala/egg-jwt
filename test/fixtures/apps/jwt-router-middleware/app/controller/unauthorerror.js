'use strict';

module.exports = app => {
  class UnauthorierrorController extends app.Controller {
    * index() {
      this.ctx.body = this.ctx.state.user;
    }
  }
  return UnauthorierrorController;
};
