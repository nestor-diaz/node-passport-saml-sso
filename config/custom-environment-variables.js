module.exports = {
  passport: {
    saml: {
      entryPoint: 'SSO_ENTRYPOINT',
      issuer: 'SSO_ISSUER',
      cert: 'SSO_CERT',
      identifierFormat: 'SAML_IDENTIFIER_FORMAT'
    }
  },
  session: {
    secret: 'SESSION_SECRET'
  }
};
