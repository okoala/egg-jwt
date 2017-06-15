'use strict';

const JWT = Symbol('Application#jwt');
const jwt = require('jsonwebtoken');

module.exports = {
  get jwt() {
    if (!this[JWT]) {
      this[JWT] = jwt;
    }
    return this[JWT];
  },
};
