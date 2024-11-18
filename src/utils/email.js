
const brevo = require('@getbrevo/brevo');


export async function sendEmail({ to, from, subject, message, img }) {
    let apiInstance = new brevo.TransactionalEmailsApi();
    
    let apiKey = apiInstance.authentications['apiKey'];
    apiKey.apiKey = process.env.SENDINBLUE_API_KEY;


    const sendSmtpEmail = new brevo.SendSmtpEmail();
    sendSmtpEmail.sender = { name: from, email: from };
    sendSmtpEmail.to = [{ email: to }];
    sendSmtpEmail.subject = subject;
    sendSmtpEmail.htmlContent = message;
    sendSmtpEmail.params = {"img": img}
  
    try {
      await sendinblueClient.sendTransacEmail(sendSmtpEmail);
      console.log('Email sent successfully! WTF2');
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  }