import { wrapCustomField } from './utils/wrapCustomField';

export const parseReferenceNumber = (
  requestId: string
): Record<string, string> =>
  wrapCustomField({
    reference_number: requestId,
  });
