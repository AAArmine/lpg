import mustache from 'mustache';
import contactFormDe from './de/contact-form-request.html';
import contactFormInfoAutoreplyDe from './de/contact-form-info-autoreply.html';
import contactFormOfferAutoreplyDe from './de/contact-form-offer-autoreply.html';
import sprengnetterAvmRequestInfo from './de/sprengnetter-avm-request-info.html';

type TemplateName =
  | 'contact-form-request'
  | 'contact-form-info-autoreply'
  | 'contact-form-offer-autoreply'
  | 'sprengnetter-avm-request-info';

const getTemplate = (name: TemplateName): string => {
  switch (name) {
    case 'contact-form-request':
      return contactFormDe;
    case 'contact-form-info-autoreply':
      return contactFormInfoAutoreplyDe;
    case 'contact-form-offer-autoreply':
      return contactFormOfferAutoreplyDe;
    case 'sprengnetter-avm-request-info':
      return sprengnetterAvmRequestInfo;
    default:
  }
  throw Error(`Html template with name "${name}" not found`);
};

export const renderTemplate = (name: TemplateName, view: any): string => {
  return mustache.render(getTemplate(name), view);
};
