const passport = require('passport');
const passportSaml = require('passport-saml');
const config = require('config');

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// SAML strategy for passport -- Single IPD
const strategy = new passportSaml.Strategy(
  {
    path: config.passport.saml.path,
    entryPoint: config.passport.saml.entryPoint,
    issuer: config.passport.saml.issuer,
    identifierFormat: config.passport.saml.identifierFormat,
    cert: config.passport.saml.cert
  },
  (profile, done) => done(null, profile),
);

passport.use(strategy);

module.exports = passport;
