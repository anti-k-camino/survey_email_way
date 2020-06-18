const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

// 92672626140-u0t1k2nkvm6l24q5qnppthto3t27q524.apps.googleusercontent.com

// VatzstSNOeVJ7WwkqnttPnXa

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://www.example.com/auth/google/callback'
  }, (accessToken, refreshToken, profile, cb) => {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }));

app.get('/', (req, res) => {
  res.send({ msg: 'Hello' }));
};

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Running on ${port}...`));
