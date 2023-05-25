const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("../db/conn");
const User = require("../models/userSchema");
const Register = require("../models/registers")
const cookieParser = require("cookie-parser");
router.get("/", (req, res) => {
    res.send("Router Running");
})

router.post("/registerform", async (req, res) => {
    const { name, email, phoneno, password, cpassword } = req.body;
    if(!name || !email || !phoneno || !password || !cpassword){
        console.log("plzz fill fields properly");
        return res.status(422).json({error: "plzz fill fields properly"});
    }
    
    try {
        const userExist = await Register.findOne({email: email});
        const pExist = await Register.findOne({phoneno: phoneno});
        if(userExist || pExist){
            console.log("user already exists")
            return res.status(409).json({error: "Email already Exist"});
        }else if(password !== cpassword){
            return res.status(422).json({error: "Password are not matchinf"});
        }
        else {
            const newuser = new Register({
                name: name,
                email: email,
                phoneno: phoneno,
                password: password,
                cpassword: cpassword,
            })
            const regga = await newuser.save();
            console.log("user registered");
            return res.status(201).json({message: "Registered(client side)"});
        }
    } catch (error) {
        return res.status(422).send("error" + error);
    }

})

router.post("/loginform",async(req,res)=>{
    try {
        const {email,password} = req.body;

        if( !email || !password){
            return res.status(400).json({error:"plzz fill data"});
        }

        const useremail = await Register.findOne({email:email});
        
        
        if(useremail){
            const isMatch = await bcrypt.compare(password,useremail.password);
            const token = await useremail.generateAuthToken();
            console.log(token);
            res.cookie("jwt",token,{
                expires: new Date(Date.now()+300000),
                httpOnly:true
            });

            if(!isMatch){
                return res.status(400).json({error:"user error"});
            }else{
                return res.json({message: "user Signin successfully"});
            }
        }else{
            res.status(400).json({error:"user error"});
        }
    } catch (error) {
        res.status(400).send("invalid credentials");
    }
})

module.exports = router;