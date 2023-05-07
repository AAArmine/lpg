import { wrapCustomField } from './utils/wrapCustomField';

const FIRST_CONTACT_ONLINE_VALUE = 13168;

export const parseFirstContactOnlineOffline = (): Record<string, string> =>
  wrapCustomField({
    on_off: FIRST_CONTACT_ONLINE_VALUE,
  });
