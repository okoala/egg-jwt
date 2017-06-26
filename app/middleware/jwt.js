'use strict';

const koajwt = require('koa-jwt');

module.exports = options => {
  return koajwt(options);
};
