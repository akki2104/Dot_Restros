const express = require("express");
const passport = require("passport");
const mongoose = require('mongoose');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

const GOOGLE_CLIENT_ID = "759912966496-f10fijamvivn05crurt3uh4gfq7mgigv.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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"
const User = require("../models/userSchema")

// router
const router = express.Router();

passport.use(
    new GoogleStrategy({
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/auth/google/callback",
        passReqToCallback: true
    },
        async (req, accessToken, refreshToken, profile, done) => {
            try {
                let user = await User.findOne({ googleId: profile.id });

                if (user) {
                    return done(null, user);
                } else {
                    const newUser = new User({
                        googleId: profile.id,
                        displayName: profile.displayName,
                        email: profile.emails[0].value
                    });

                    await newUser.save();
                    return done(null, newUser);
                }
            } catch (error) {
                return done(error, false);
            }
        }
    ));


function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);
}


// router.get("/", (req, res) => {
//     res.send('<a href="/auth/google">Authentication with Google</a>')
// })

router.get("/",
    passport.authenticate('google', { scope: ['email', 'profile'] })
)
router.get("/callback",
    passport.authenticate("google", {
        successRedirect: "/auth/google/protected",
        failureRedirect: "/auth/google/failure",
    })
)
router.get("/protected", isLoggedIn, (req, res) => {
    const dynamicUrl = "/auth/google/logout";
    res.render("index",{dynamicUrl});
})

router.get("/secret", isLoggedIn, (req,res)=>{
    res.render("secret");
})





router.get("/failure", (req, res) => {
    res.send("something went wrong");
})

router.get("/logout", (req, res) => {
    // req.logout();
    req.session.destroy(()=>{
        console.log("session destroyed");
    });
    // res.send("goodbye! ");
    // res.render("index");
    res.redirect("http://localhost:3000/")
    
})

module.exports = router;