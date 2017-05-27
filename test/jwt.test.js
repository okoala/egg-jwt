'use strict';

const mm = require('egg-mock');
const assert = require('assert');

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
    yield app.httpRequest()
      .get('/')
      .expect(401);
  });

  it('should success if route no use jwt', function* () {
    yield app.httpRequest()
      .get('/login')
      .expect(200);
  });

  it('should work if authorization header is valid jwt', function* () {
    const token = app.jwt.sign({ foo: 'bar' }, app.config.jwt.secret);
    yield app.httpRequest()
      .get('/success')
      .set('Authorization', 'Bearer ' + token)
      .expect(200);

    const res = yield app.httpRequest()
      .get('/success')
      .set('Authorization', 'Bearer ' + token);

    assert(res.body.foo === 'bar');
  });
});
