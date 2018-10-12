declare module "egg" {
  interface Application {
    jwt: {
      /**
       *
       * @param payload datas. datas to be signed
       * @param secretOrPrivateKey secret key. string or { key, passphrase }
       * @param options jwt options。see more details in https://github.com/auth0/node-jsonwebtoken
       * @param callback callback
       */
      sign(
        payload: any,
        secretOrPrivateKey: string,
        options?: any,
        callback?: function
      ): string;
      /**
       *
       * @param token jwt token. 
       * @param secretOrPrivateKey secret key。string or { key, passphrase }
       * @param options jwt options。see more details in https://github.com/auth0/node-jsonwebtoken
       * @param callback callback
       */
      verify(
        token: any,
        secretOrPrivateKey: string,
        options?: any,
        callback?: function
      ): string;
    };
  }
}
