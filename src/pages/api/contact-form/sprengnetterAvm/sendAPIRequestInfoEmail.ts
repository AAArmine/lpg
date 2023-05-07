import { SendMailOptions, createTransport } from 'nodemailer';
import { renderTemplate } from '../../../../locale/email-templates';

const transporter = createTransport({
  host: process.env.CONTACT_FORM_EMAIL_SSL_HOST!,
  port: parseInt(process.env.CONTACT_FORM_EMAIL_SSL_PORT!, 10),
  secure: true,
  auth: {
    user: process.env.CONTACT_FORM_EMAIL_SSL_SENDER_USER!,
    pass: process.env.CONTACT_FORM_EMAIL_SSL_SENDER_PWD!,
  },
});

export const sendAPIRequestInfoEmail = async (
  payload: any,
  result: any
): Promise<string> => {
  const options: SendMailOptions = {
    from: process.env.CONTACT_FORM_EMAIL_SSL_SENDER_USER!,
    to: process.env.CONTACT_FORM_EMAIL_OFFER_RECEIVER_USER!,
    subject: 'SprengnetterAtm API request',
    html: renderTemplate('sprengnetter-avm-request-info', {
      payload: JSON.stringify(payload, null, 2),
      result: JSON.stringify(result, null, 2),
    }),
  };

  const sendResult = await transporter.sendMail(options);
  return `Message sent ${sendResult.response}`;
};
