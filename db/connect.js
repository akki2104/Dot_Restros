const mongoose = require("mongoose");

const dbconnect = async(url) => {
    try{
        await mongoose.connect(url);
        console.log("Connected to database");
    }
    catch(err){
        console.log(err);
    }
};

module.exports = dbconnect;
