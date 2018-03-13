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

      it('should success if route no use jwt', async () => {
        await app
          .httpRequest()
          .get('/login')
          .expect(200);
      });

      it('should work if authorization header is valid jwt', async () => {
        const token = app.jwt.sign({ foo: 'bar' }, app.config.jwt.secret);
        await app
          .httpRequest()
          .get('/success')
          .set('Authorization', 'Bearer ' + token)
          .expect(200);

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
