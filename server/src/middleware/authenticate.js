const jwt = require("jsonwebtoken");
const Register = require("../models/registers")

const Authenticate = async (req,res,next)=>{
    try {
        const token = req.cookies.jwt;
        const verifyUser = jwt.verify(token, process.env.SECRET_KEY);
        // console.log(verifyUser);

        const rootuser = await Register.findOne({_id:verifyUser._id, "tokens.token": token});
        // console.log(user);
        if(!rootuser){
            throw new Error('User not found');
        }
        req.token = token;
        req.rootuser = rootuser;

        next();

    } catch (error) {
        res.status(401).send("Unauthorized: no token provided");
    }
}

module.exports = Authenticate;