'use strict';

const assert = require('assert');

const MIDDLEWARE_NAME_JWT = 'jwt';

module.exports = app => {
  const index = app.config.appMiddleware.indexOf(MIDDLEWARE_NAME_JWT);

  assert.equal(index, -1, `Duplication of middleware name found: ${MIDDLEWARE_NAME_JWT}. Rename your middleware other than "${MIDDLEWARE_NAME_JWT}" please.`);
  app.config.coreMiddleware.unshift(MIDDLEWARE_NAME_JWT);
};
