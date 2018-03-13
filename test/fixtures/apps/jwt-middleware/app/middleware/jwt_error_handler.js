module.exports = (options, app) => {
  return async (ctx, next) => {
    try {
      await next();
    } catch (err) {
      if (
        ctx.path.includes('unauthorerror') &&
        err instanceof app.jwt.UnauthorizedError
      ) {
        ctx.status = 200;
        ctx.body = 'UnauthorizedError';
        return;
      }

      throw err;
    }
  };
};
