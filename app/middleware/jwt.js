'use strict';

const koajwt = require('koa-jwt');

module.exports = (options, app) => {
  return koajwt(options);
};