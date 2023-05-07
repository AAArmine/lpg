/* eslint-disable @typescript-eslint/no-use-before-define */
import { SendMailOptions, createTransport } from 'nodemailer';
import { renderTemplate } from '../../../../locale/email-templates';
import { useTranslations } from '../../../../locale';
import { ContactFormPostData } from '../contactFormPostData';

const transporter = createTransport({
  host: process.env.CONTACT_FORM_EMAIL_SSL_HOST!,
  port: parseInt(process.env.CONTACT_FORM_EMAIL_SSL_PORT!, 10),
  secure: true,
  auth: {
    user: process.env.CONTACT_FORM_AUTOREPLY_EMAIL_SSL_SENDER_USER!,
    pass: process.env.CONTACT_FORM_AUTOREPLY_EMAIL_SSL_SENDER_PWD!,
  },
});

// eslint-disable-next-line react-hooks/rules-of-hooks
const t = useTranslations('contact-form');

export const sendAutoreplyEmail = async (
  postData: ContactFormPostData
): Promise<string> => {
  const { email, lastName, receiveInformationViaEmail } = getClientInfo(
    postData.request
  );
  if (postData.formType === 'information' && receiveInformationViaEmail) {
    return 'Message not sent for this type of form';
  }

  const options: SendMailOptions = {
    from: process.env.CONTACT_FORM_AUTOREPLY_EMAIL_SSL_SENDER_USER!,
    to: email,
    subject: t('autoreplyEmailSubject'),
    html: renderTemplate(
      postData.formType === 'information'
        ? 'contact-form-info-autoreply'
        : 'contact-form-offer-autoreply',
      { lastName }
    ),
  };

  const sendResult = await transporter.sendMail(options);
  return `Message sent ${sendResult.response}`;
};

function getClientInfo(schema: Array<any>): {
  lastName: string;
  email: string;
  receiveInformationViaEmail: boolean;
} {
  const contactInfo = schema.find(({ name }) => name === 'contactInformation');

  if (contactInfo && contactInfo.value) {
    const { lastName, email, receiveInformationViaEmail } = contactInfo.value;

    if (email) {
      return { lastName, email, receiveInformationViaEmail };
    }
  }

  throw Error('Contact info not found');
}
