const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  }, (accessToken, refreshToken, profile, cb) => {
    console.log('Access token c==> ', accessToken);
    console.log('Refresh token c==> ', refreshToken);
    console.log('Profile ==> ', profile);
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
}));

app.get('/', (req, res) => {
  res.send({ msg: 'Hello' });
});

app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

app.get('/auth/google/callback', passport.authenticate('google'));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Running on ${port}...`));
