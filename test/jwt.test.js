'use strict';

const assert = require('assert');
const request = require('supertest');
const mm = require('egg-mock');

describe('test/jwt.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'apps/jwt-test',
      plugin: true,
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mm.restore);

  it('should throw 401 if no authorization header', function* () {
    yield request(app.callback())
    .get('/')
    .expect(401);
  });

  it('should success if route no use jwt', function* () {
    yield request(app.callback())
    .get('/login')
    .expect(200);
  });

  it('should work if authorization header is valid jwt', function* () {
    const token = app.jwt.sign({ foo: 'bar' }, app.config.jwt.secret);
    yield request(app.callback())
    .get('/success')
    .set('Authorization', 'Bearer ' + token)
    .expect(200);

    const res = yield request(app.callback()).get('/success').set('Authorization', 'Bearer ' + token);
    assert(res.body.foo === 'bar');
  });
});
