const express = require('express');
const Saml2js = require('saml2js');
const config = require('config');
const passport = require('./passportHandler');

const router = express.Router();

router.get("/", function(req, res) {
  if(req.isAuthenticated()) {
    res.send('Authenticated');
  } else {
    res.redirect('/login');
  }
});

router.get('/login',
  passport.authenticate('saml', {
    successRedirect: '/',
    failureRedirect: config.passport.saml.failureRedirect,
  }));

router.get('/login/failure', () => {
  res.send('Login unsuccessful');
});

router.post('/login/callback',
  passport.authenticate('saml', { failureRedirect: config.passport.saml.failureRedirect }), (req, res, next) => {
    const xmlResponse = req.body.SAMLResponse;
    const parser = new Saml2js(xmlResponse);
    req.samlUser = parser.toObject();
    next();
  },
  (req, res) => {
    // Save "req.samlUser" user into the User Management service
    console.log(req.samlUser);
    res.redirect('/');
  });

router.get('/logout', function(req, res) {
  req.session.destroy(function (err) {
    res.redirect('/');
  });
});

module.exports = router;
