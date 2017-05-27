'use strict';

const koajwt = require('koa-jwt');
const jwt = require('jsonwebtoken');
const JWT = Symbol('Application#jwt');

module.exports = {
  get jwt() {
    if (!this[JWT]) {
      this[JWT] = koajwt(this.config.jwt);
      this[JWT].sign = jwt.sign;
      this[JWT].verify = jwt.verify;
      this[JWT].decode = jwt.decode;
    }
    return this[JWT];
  },
};
