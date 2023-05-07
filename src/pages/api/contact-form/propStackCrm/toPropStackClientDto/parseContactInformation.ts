/* eslint-disable @typescript-eslint/no-use-before-define */
import merge from 'lodash.merge';
import moment from 'moment';
import { wrapCustomField } from './utils/wrapCustomField';

export const parseContactInformation = (
  value: Record<string, any>
): Record<string, any> =>
  merge(
    { is_company: false },
    { email: value.email },
    value.salutation ? { salutation: value.salutation } : null,
    value.firstName ? { first_name: value.firstName } : null,
    value.lastName ? { last_name: value.lastName } : null,
    parseDateOfBirth(value),
    value.numberOfChildren
      ? wrapCustomField({ anzahl_kinder: value.numberOfChildren })
      : null,
    value.maritalStatus
      ? wrapCustomField({
          familienstand: parseMaritalStatus(value.maritalStatus),
        })
      : null,
    value.tel ? { home_cell: value.tel } : null,
    value.street ? { home_street: value.street } : null,
    value.houseNumber ? { home_house_number: value.houseNumber } : null,
    value.zipCode ? { home_zip_code: value.zipCode } : null,
    value.city ? { home_city: value.city } : null,
    parseComments(value),
    parseContactMethod(value),
    parseSubContactAttributes(value),
    parseSubscribeToNewsLetter(value)
  );

const CONTACT_METHOD_POST_AND_EMAIL_PROPSTACK_VALUE = 15253;
const CONTACT_METHOD_EMAIL_ONLY_PROPSTACK_VALUE = 15254;

const parseContactMethod = (
  value: Record<string, string>
): Record<string, any> =>
  wrapCustomField({
    kontaktform: value.receiveInformationViaPostAndEmail
      ? CONTACT_METHOD_POST_AND_EMAIL_PROPSTACK_VALUE
      : CONTACT_METHOD_EMAIL_ONLY_PROPSTACK_VALUE,
  });

const parseComments = (
  value: Record<string, string>
): Record<string, any> | null =>
  value.comment
    ? wrapCustomField({
        comment_2: value.comment,
      })
    : null;

const SUBSCRIBE_TO_NEWSLETTER_TRUE_PROPSTACK_VALUE_ID = 15639;
const SUBSCRIBE_TO_NEWSLETTER_FALSE_PROPSTACK_VALUE_ID = 15640;

const parseSubscribeToNewsLetter = (
  value: Record<string, string>
): Record<string, any> =>
  wrapCustomField({
    einverstandnis_newsletter: value.subscribeToNewsLetter
      ? SUBSCRIBE_TO_NEWSLETTER_TRUE_PROPSTACK_VALUE_ID
      : SUBSCRIBE_TO_NEWSLETTER_FALSE_PROPSTACK_VALUE_ID,
  });

const parseDateOfBirth = (
  value: Record<'dateOfBirth', string>
): Record<'dob', Date> | null => {
  const dateOfBirth = parseDate(value.dateOfBirth);

  if (dateOfBirth) {
    return { dob: dateOfBirth };
  }

  return null;
};

const parseSubContactAttributes = (
  value: Record<string, any>
): Record<'children_attributes', Array<any>> => {
  const partnerDateOfBirth = parseDate(value.partnerDateOfBirth);

  if (partnerDateOfBirth) {
    return {
      children_attributes: [
        {
          last_name: value.lastName,
          dob: partnerDateOfBirth,
        },
      ],
    };
  }
  return {
    children_attributes: [],
  };
};

const CONTACT_INFO_MARITAL_STATUS_SINGLE_FORM_VALUE = 'single';
const CONTACT_INFO_MARITAL_STATUS_SINGLE_PROPSTACK_VALUE = 11008;
const CONTACT_INFO_MARITAL_STATUS_DIVORCED_FORM_VALUE = 'divorced';
const CONTACT_INFO_MARITAL_STATUS_DIVORCED_PROPSTACK_VALUE = 11009;
const CONTACT_INFO_MARITAL_STATUS_MARRIED_FORM_VALUE = 'married';
const CONTACT_INFO_MARITAL_STATUS_PARTNERSHIP_FORM_VALUE = 'partnership';
const CONTACT_INFO_MARITAL_STATUS_MARRIED_PROPSTACK_VALUE = 11006;
const CONTACT_INFO_MARITAL_STATUS_WIDOWED_FORM_VALUE = 'widowed';
const CONTACT_INFO_MARITAL_STATUS_WIDOWED_PROPSTACK_VALUE = 11007;

const parseMaritalStatus = (value: string): number | null => {
  switch (value) {
    case CONTACT_INFO_MARITAL_STATUS_SINGLE_FORM_VALUE:
      return CONTACT_INFO_MARITAL_STATUS_SINGLE_PROPSTACK_VALUE;
    case CONTACT_INFO_MARITAL_STATUS_DIVORCED_FORM_VALUE:
      return CONTACT_INFO_MARITAL_STATUS_DIVORCED_PROPSTACK_VALUE;
    case CONTACT_INFO_MARITAL_STATUS_MARRIED_FORM_VALUE:
    case CONTACT_INFO_MARITAL_STATUS_PARTNERSHIP_FORM_VALUE:
      return CONTACT_INFO_MARITAL_STATUS_MARRIED_PROPSTACK_VALUE;
    case CONTACT_INFO_MARITAL_STATUS_WIDOWED_FORM_VALUE:
      return CONTACT_INFO_MARITAL_STATUS_WIDOWED_PROPSTACK_VALUE;
    default:
  }
  return null;
};

const parseDate = (value: string | null): Date | null => {
  if (value) {
    try {
      let momentDate = moment.utc(value, 'DD.MM.YYYY');
      if (momentDate.isValid() && momentDate.toDate() > new Date(1900, 0, 1)) {
        return momentDate.toDate();
      }

      momentDate = moment.utc(value, 'DD/MM/YYYY');
      if (momentDate.isValid() && momentDate.toDate() > new Date(1900, 0, 1)) {
        return momentDate.toDate();
      }

      momentDate = moment.utc(value);
      if (momentDate.isValid() && momentDate.toDate() > new Date(1900, 0, 1)) {
        return momentDate.toDate();
      }
    } catch {
      // do nothing
    }
  }

  return null;
};
