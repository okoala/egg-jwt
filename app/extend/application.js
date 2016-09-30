'use strict';

const koajwt = require('koa-jwt');
const JWT = Symbol('Application#jwt');

module.exports = {
  get jwt() {
    if (!this[JWT]) {
      this[JWT] = koajwt(this.config.jwt);
    }
    return this[JWT];
  },
};
