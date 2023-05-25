const mongoose = require("mongoose");
//hashing using bcrypt
const bcrypt = require("bcryptjs");
// jwt token
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
    },
    email: {
        type: String,
        required:true,
        unique:true,
    },
    phoneno: {
        type: Number,
        required:true,
        unique:true,
    },
    password: {
        type: String,
        required:true,
    },
    cpassword: {
        type: String,
        required:true,
    },
    tokens:[{
        token:{
            type: String,
            required:true,
        }
    }]
})
// generating tokens
userSchema.methods.generateAuthToken = async function(){
    try {
        const token = jwt.sign({_id:this._id.toString()},process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;
    } catch (error) {
        res.send("the error part" +error);
        console.log("the error part" +error)
    }
}

//this action takes place just before the save 
userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,10);
        this.cpassword = await bcrypt.hash(this.password,10);
    }
    next();
})

//now we need to create a collection

const Register = new mongoose.model("Register",userSchema);

module.exports = Register;