'use strict';

const mm = require('egg-mock');
const assert = require('assert');

describe('test/jwt.test.js', () => {
  let app;

  afterEach(mm.restore);

  // 'jwt-app.jwt', 'jwt-middleware',
  [ 'jwt-app.jwt', 'jwt-middleware', 'jwt-router-middleware' ].forEach(name => {
    describe(name, () => {
      before(async () => {
        app = mm.app({
          baseDir: `apps/${name}`,
          plugin: true,
          cache: false,
        });
        await app.ready();
      });

      after(() => app.close());

      it('should throw 401 if no authorization header', async () => {
        await app
          .httpRequest()
          .get('/')
          .expect(401);
      });

      it('should success resolve token', async () => {
        const token = app.jwt.sign({ foo: 'bar' });
        const payload = app.jwt.verify(token);

        assert.equal(payload.foo, 'bar');
      });

      it('should success sign use options.expiresIn', async () => {
        const token = app.jwt.sign({ foo: 'bar' }, '123456', { expiresIn: 10 });
        const payload = app.jwt.verify(token, '123456');

        assert.equal(payload.foo, 'bar');
      });

      it('should success if route no use jwt', async () => {
        await app
          .httpRequest()
          .get('/login')
          .expect(200);
      });

      it('should work if authorization header is valid jwt', async () => {
        const token = app.jwt.sign({ foo: 'bar' });

        const res = await app
          .httpRequest()
          .get('/success')
          .set('Authorization', 'Bearer ' + token);

        assert(res.body.foo === 'bar');
      });

      it('jwt.sign should support custom secret', async () => {
        const token = app.jwt.sign({ foo: 'bar' }, app.config.jwt.secret);

        const res = await app
          .httpRequest()
          .get('/success')
          .set('Authorization', 'Bearer ' + token);

        assert(res.body.foo === 'bar');
      });

      it('should success if err instanceof UnauthorizedError ', async () => {
        await app
          .httpRequest()
          .get('/unauthorerror')
          .expect('UnauthorizedError');
      });
    });
  });
});
