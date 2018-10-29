declare module "egg" {
  interface Application {
    jwt: {
      /**
       * call jsonwebtoken's sign() method
       * @param payload datas. datas to be signed
       * @param secretOrPrivateKey secret key. string or { key, passphrase }
       * @param options jwt options。see more details in https://github.com/auth0/node-jsonwebtoken
       * @param callback callback
       */
      sign(
        payload: any,
        secretOrPrivateKey?: string,
        options?: any,
        callback?: function
      ): string;
      /**
       * call jsonwebtoken's verify() method
       * @param token jwt token. 
       * @param secretOrPrivateKey secret key。string or { key, passphrase }
       * @param options jwt options。see more details in https://github.com/auth0/node-jsonwebtoken
       * @param callback callback
       */
      verify(
        token: any,
        secretOrPrivateKey?: string,
        options?: any,
        callback?: function
      ): string;

      /**
       * call jsonwebtoken's decode() method
       * @param token jwt token
       */
      decode(token: string): string;
    };
  }
}
