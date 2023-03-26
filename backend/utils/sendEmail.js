const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {

  const transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',    // host: process.env.SMPT_HOST,
    port: 587,
    // secure: true,
    port: 25,
    secure: false,
    logger: true,
    debug: true,
    ignoreTLS: true, // add this
    service: 'gmail',
    auth: {
      user: process.env.SMPT_MAIL,
      pass: 'ihfitagszepqhcbi',
    },
  });

  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;


// For mails to be sent from smtp.gmail.com make sure you have followed these 2 steps:

// In your google account make sure you have 2-Step Verification enabled.
// Then go to https://security.google.com/settings/security/apppasswords. Click Select app and choose Other (custom name) from the dropdown and click Generate. You will get a 16 digit code, this code should be used as password in email configuration and user remains as your email. Also, make sure {secure: true}
// Here is my configuration:

// transport: {
//         host: 'smtp.gmail.com',
//         port: 465,
//         secure: true,
//         auth: {
//           user: '<myemail>',
//           pass: '<16 digit code generated in step 2 above>',         
//         },