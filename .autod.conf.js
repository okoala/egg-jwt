'use strict';

module.exports = {
  write: true,
  prefix: '^',
   test: [
     'test',
     'benchmark',
   ],
  devdep: [
    'autod',
    'egg',
    'egg-ci',
    'egg-bin',
    'egg-mock',
    'eslint',
    'eslint-config-egg'
  ],
  semver: [
    'koa-jwt@2'
  ],
  exclude: [
    './test/fixtures',
  ],
}
