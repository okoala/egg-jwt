declare module "egg" {
  interface Application {
    jwt: {
      /**
       *
       * @param payload 待签名的数据
       * @param secretOrPrivateKey 签名秘钥。string or { key, passphrase }
       * @param options jwt 选项。see more details in https://github.com/auth0/node-jsonwebtoken
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
       * @param secretOrPrivateKey 签名秘钥。string or { key, passphrase }
       * @param options jwt 选项。see more details in https://github.com/auth0/node-jsonwebtoken
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
