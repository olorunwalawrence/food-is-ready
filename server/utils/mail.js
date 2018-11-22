const sgMail = require('@sendgrid/mail');
require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const mailer = (email) => {
  const msg = {
    to: email,
    from: 'norepl@gmail.com',
    subject: 'account verification',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };

  return sgMail.send(msg);

};

module.exports = mailer;
