/* eslint-disable @typescript-eslint/no-use-before-define */
import escapeHtml from 'escape-html';
import { SendMailOptions, createTransport } from 'nodemailer';
import { renderTemplate } from '../../../../locale/email-templates';
import { useTranslations } from '../../../../locale';
import { ContactFormPostData } from '../contactFormPostData';
import { parseOnlineSourceValueForEmail } from '../onlineSources';
import { toPropNameValueDto } from './toPropNameValueDto';

const transporter = createTransport({
  host: process.env.CONTACT_FORM_EMAIL_SSL_HOST!,
  port: parseInt(process.env.CONTACT_FORM_EMAIL_SSL_PORT!, 10),
  secure: true,
  auth: {
    user: process.env.CONTACT_FORM_EMAIL_SSL_SENDER_USER!,
    pass: process.env.CONTACT_FORM_EMAIL_SSL_SENDER_PWD!,
  },
});

export const sendRequestEmail = async (
  postData: ContactFormPostData,
  additionalListItems: Record<string, string>
): Promise<string> => {
  if (postData.formType === 'information') {
    return 'Email not send for info form';
  }

  const propValuesDto = toPropNameValueDto(postData.request, postData.formType);

  const options: SendMailOptions = {
    from: process.env.CONTACT_FORM_EMAIL_SSL_SENDER_USER!,
    to: process.env.CONTACT_FORM_EMAIL_OFFER_RECEIVER_USER!,
    subject: getEmailSubject(postData.request, postData.formType),
    html: renderTemplate('contact-form-request', {
      dealBreaker: Object.entries(propValuesDto.dealBreaker).map(
        ([name, value]) => ({
          name: escapeHtml(name),
          value: escapeHtml(value),
        })
      ),
      main: [
        { name: 'Referenz #', value: postData.requestId },
        {
          name: t('onlineSource'),
          value: parseOnlineSourceValueForEmail(postData.onlineSource),
        },
      ].concat(
        ...Object.entries(propValuesDto.main).map(([name, value]) => ({
          name: escapeHtml(name),
          value: escapeHtml(value),
        }))
      ),
      contact: Object.entries(propValuesDto.contact).map(([name, value]) => ({
        name: escapeHtml(name),
        value: escapeHtml(value),
      })),
      additional: Object.entries(additionalListItems).map(([name, value]) => ({
        name: escapeHtml(name),
        value: escapeHtml(value),
      })),
    }),
  };

  const sendResult = await transporter.sendMail(options);
  return `Message sent ${sendResult.response}`;
};

// eslint-disable-next-line react-hooks/rules-of-hooks
const t = useTranslations('contact-form');

function getEmailSubject(schema: Array<any>, formType: string): string {
  if (formType === 'offer') {
    const contactInfo = schema.find(
      ({ name }) => name === 'contactInformation'
    );

    if (contactInfo && contactInfo.value) {
      const { lastName, street, houseNumber, zipCode, city } =
        contactInfo.value;

      const sender = {
        lastName,
        address: `${street} ${houseNumber}, ${zipCode} ${city}`,
      };

      return t('emailRequest.offer.subject', sender);
    }
  }

  return t('emailRequest.information.subject');
}
