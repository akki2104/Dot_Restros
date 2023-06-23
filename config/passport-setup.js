const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
require("dotenv").config();
const User = require("../models/users-model");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.OAUTH_CLIENT_ID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      callbackURL: "/auth/redirect",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const existingUser = await User.findOne({ googleId: profile.id });
        if (!existingUser) {
          const newUser = await User.create({
            username: profile.displayName,
            googleId: profile.id,
          });
          done(null, newUser);
          console.log("User Created");
        } else {
          console.log("User Already Exists");
          done(null, existingUser);
        }
      } catch (error) {
        console.log(error);
      }
    }
  )
);
