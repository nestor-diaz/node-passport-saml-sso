module.exports = {
  passport: {
    saml: {
      path: '/login/callback',
      failureRedirect: '/login/failure',
      entryPoint: '',
      issuer: '',
      cert: '',
      identifierFormat: '',
    }
  },
  session: {
    secret: '',
    cookie: {
      secure: false
    }
  },
  uri: {
    port: 8080,
    hostname: '0.0.0.0'
  }
};
