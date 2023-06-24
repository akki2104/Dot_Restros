const nodemailer = require("nodemailer");


const SendMail=async(something)=>{
  const transporter = nodemailer.createTransport({
   service:"Gmail",
    auth: {
      user: "process.env.ADMINS_EMAIL",
      pass: "process.env.ADMINS_PASSWORD",
    },
    
  });


  const options = {
    from: "process.env.ADMINS_EMAIL",
    to: 'process.env.SENDERS_EMAIL',
    subject: "Order Details",
    text: `${something}`,
  };


  transporter.sendMail(options, function (err, info) {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Sent" + info.response);
  });

}


module.exports = { SendMail };
