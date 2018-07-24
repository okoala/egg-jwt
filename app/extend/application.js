'use strict';

const koajwt = require('koa-jwt2');
const UnauthorizedError = require('koa-jwt2/lib/errors/UnauthorizedError');
const jwt = require('jsonwebtoken');
const JWT = Symbol('Application#jwt');

module.exports = {
  get jwt() {
    if (!this[JWT]) {
      const config = this.config.jwt;
      this[JWT] = koajwt(config);

      this[JWT].verify = (token, options) => {
        return jwt.verify(
          token,
          config.secret,
          Object.assign({}, config.verify, options)
        );
      };

      this[JWT].sign = (payload, options) => {
        return jwt.sign(
          payload,
          config.secret,
          Object.assign({}, config.sign, options)
        );
      };

      this[JWT].decode = jwt.decode;
      this[JWT].UnauthorizedError = UnauthorizedError;
    }
    return this[JWT];
  },
};
