'use strict';

const koajwt = require('koa-jwt');
const JWT = Symbol('Application#jwt');

module.exports = {
  get jwt() {
    if (!this[JWT]) {
      this[JWT] = koajwt(this.config.jwt);
      this[JWT].sign = koajwt.sign;
      this[JWT].verify = koajwt.verify;
      this[JWT].decode = koajwt.decode;
    }
    return this[JWT];
  },
};
