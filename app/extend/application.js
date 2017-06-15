'use strict';

const koajwt = require('koa-jwt');
const jwt = require('jsonwebtoken');
const JWT = Symbol('Application#jwt');

module.exports = {
  get jwt() {
    if (!this[JWT]) {
      this[JWT] = jwt;
    }
    return this[JWT];
  },
};
