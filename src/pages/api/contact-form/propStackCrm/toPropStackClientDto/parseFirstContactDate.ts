import { wrapCustomField } from './utils/wrapCustomField';

export const parseFirstContactDate = (): Record<string, string> =>
  wrapCustomField({
    first_contact: new Date(),
  });
