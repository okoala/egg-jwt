'use strict';

module.exports = app => {
  class SuccessController extends app.Controller {
    * index() {
      this.ctx.body = this.ctx.state.user;
    }
  }
  return SuccessController;
};
