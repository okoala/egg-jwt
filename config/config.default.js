'use strict';

/**
 * jwt default config
 * @member Config#jwt
 * @property {String} SOME_KEY - some description
 */
exports.jwt = {
  secret: '123456',
  enable: false,

  // https://github.com/auth0/node-jsonwebtoken#jwtsignpayload-secretorprivatekey-options-callback
  sign: {
    expiresIn: 3600,
  },

  // https://github.com/auth0/node-jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback
  // verify: {},

  // https://eggjs.org/en/basics/middleware.html#match-and-ignore
  // ignore: ''
  // match: ''
};
