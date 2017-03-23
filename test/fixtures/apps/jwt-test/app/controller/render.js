'use strict';

module.exports = app => {
  class RenderController extends app.Controller {
    * index() {
      this.ctx.body = 'hello World';
    }
  }
  return RenderController;
};
