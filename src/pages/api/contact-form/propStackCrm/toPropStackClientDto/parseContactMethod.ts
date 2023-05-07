import { wrapCustomField } from './utils/wrapCustomField';

const CONTACT_METHOD_WEBSITE = 14345;

export const parseContactMethod = (): Record<string, number> =>
  wrapCustomField({
    kontaktweg_2: CONTACT_METHOD_WEBSITE,
  });
