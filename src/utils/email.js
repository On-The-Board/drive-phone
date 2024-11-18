
const brevo = require('@getbrevo/brevo');


export async function sendEmail({ to, from, subject, message, img }) {
    let apiInstance = new brevo.TransactionalEmailsApi();
    
    let apiKey = apiInstance.authentications['api-key'];
    apiKey.apiKey = "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";


    const sendSmtpEmail = new brevo.SendSmtpEmail();
    sendSmtpEmail.sender = { name: from, email: from };
    sendSmtpEmail.to = [{ email: to }];
    sendSmtpEmail.subject = subject;
    sendSmtpEmail.htmlContent = message;
    sendSmtpEmail.params = {"img": img}
  
    try {
      await apiInstance.sendTransacEmail(sendSmtpEmail)
      console.log('API called successfully. Returned data: ' + JSON.stringify(data));
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  }