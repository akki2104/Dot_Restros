require('dotenv').config();
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 8000;
const hbs = require("hbs");
const jquery = require("jquery");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const auth = require("./middleware/authenticate")
// google
const session = require("express-session");
const passport = require("passport");
const User = require("./models/userSchema");
const gauth = require("./controllers/gauth");
// require("./db/conn_gauth");

require("./db/conn");
//------------------- google------------------------

app.use(session({secret: "cats",resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(function (user, done) {
    done(null, user.id);
})
passport.deserializeUser(async (id, done)=> {
    try {
        const user = await User.findById(id);
        done(null, user);
      } catch (error) {
        done(error);
      }
})
// -------------------------------------------------

const Register = require("./models/registers")

const static_path = path.join(__dirname,"../public")
const templates_path = path.join(__dirname,"../templates/views")
const partials_path = path.join(__dirname,"../templates/partials")

app.use(express.json());
// link router file
app.use(require("./router/auth"));



app.use(cookieParser());
app.use(express.urlencoded({extended:false}))

app.use(express.static(static_path));
app.set("view engine", "hbs")
app.set("views", templates_path);
hbs.registerPartials(partials_path);
 

// google
app.use("/auth/google", gauth);
// app.get("/",(req,res)=>{
//     res.render("index");
// })
// app.get("/logout",auth, async(req,res)=>{
//     try {
//         req.user.tokens = [];

//         res.clearCookie("jwt");
//         console.log("Logout successful");
//         await req.user.save();
//         res.render("register");
//     } catch (error) {
//         res.status(500).send(error);
//     }
// })
// app.get("/register",(req,res)=>{
//     res.render("register");
// })
// //create a new user in our database
// app.post("/registerform",async(req,res)=>{
//     try {
//         const password = req.body.password;
//         const cpassword = req.body.cpassword;
//         if(password === cpassword){
//             const newuser = new Register({
//                 name: req.body.name,
//                 email: req.body.email,
//                 phoneno: req.body.phoneno,
//                 password: password,
//                 cpassword: cpassword,
//             })
//             const token = await newuser.generateAuthToken();

//             //the res.cookie() function is used to set cookie
//             //name to value.The value paramater may be a string
//             //or object converted to JSON

//             res.cookie("jwt",token,{
//                 expires: new Date(Date.now()+300000),
//                 httpOnly:true
//             });
//             // console.log(cookie);

//             const registered = await newuser.save();
//             res.status(201).render("index");
//         }else{
//             res.send("password are not matching")
//         }
//     } catch (error) {
//         res.status(400).send("error"+error);
//     }
    
// })
// //login page form post
// app.post("/loginform",async(req,res)=>{
//     try {
//         const email = req.body.email;
//         const password = req.body.password;

//         const useremail = await Register.findOne({email:email});
//         const isMatch = await bcrypt.compare(password,useremail.password);
//         const token = await useremail.generateAuthToken();
        
        
//         res.cookie("jwt",token,{
//             expires: new Date(Date.now()+300000),
//             httpOnly:true
//         });
        
//         if(isMatch){
//             res.status(201).render("secret")
//         }else{
//             res.send("invalid password credentials")
//         }

//     } catch (error) {
//         res.status(400).send("invalid credentials");
//     }
// })

app.listen(port,()=>{
    console.log(`server is running on port no ${port}`);
})