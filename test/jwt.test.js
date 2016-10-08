'use strict';

const request = require('supertest');
const mm = require('egg-mock');

// const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE0MjY1NDY5MTl9.ETgkTn8BaxIX4YqvUWVFPmum3moNZ7oARZtSBXb_vP4';

describe('failure tests', () => {
  let app;
  before(done => {
    app = mm.app({
      baseDir: 'jwt',
      plugin: true,
    });
    app.ready(done);
  });

  afterEach(mm.restore);

  it('should throw 401 if no authorization header', function(done) {
    request(app.callback())
      .get('/')
      .expect(401)
      .end(done);
  });

  it('should success if route no use jwt', function(done) {
    request(app.callback())
      .get('/login')
      .expect(200)
      .end(done);
  });

  it('should work if authorization header is valid jwt', function(done) {
    const token = app.jwt.sign({ foo: 'bar' }, app.config.jwt.secret);
    request(app.callback())
      .get('/success')
      .set('Authorization', 'Bearer ' + token)
      .expect(200)
      .expect(function(res) {
        if (!(res.body.foo === 'bar')) return 'Wrong user';
      })
      .end(done);
  });
});
