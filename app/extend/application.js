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

      this[JWT].sign = (payload, secret, options = {}) => {
        if (typeof secret !== 'string') {
          options = secret || {};
          secret = config.secret;
        }

        return jwt.sign(
          payload,
          secret,
          Object.assign({}, config.sign || {}, options)
        );
      };

      this[JWT].verify = (token, secret, options = {}) => {
        if (typeof secret !== 'string') {
          options = secret || {};
          secret = config.secret;
        }

        return jwt.verify(
          token,
          secret,
          Object.assign({}, config.verify || {}, options)
        );
      };

      this[JWT].decode = jwt.decode;
      this[JWT].UnauthorizedError = UnauthorizedError;
    }
    return this[JWT];
  },
};
