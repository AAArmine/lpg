import {
  SPRENGNETTER_AVM_AUTH_TOKEN,
  SPRENGNETTER_AVM_VALUATION_ENDPOINT,
} from './config';
import { toSprengnetterAvmPayload } from './toSprengnetterAvmPayload';

interface SprengnetterAtmResult {
  value: number;
  meta: {
    range?: {
      min: number;
      max: number;
    };
  };
}

export const saveContactToSprengnetterAvm = async (
  schema: Array<Record<string, any>>
): Promise<SprengnetterAtmResult> => {
  const payload = toSprengnetterAvmPayload(schema);

  const result = await fetch(SPRENGNETTER_AVM_VALUATION_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: SPRENGNETTER_AVM_AUTH_TOKEN,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((value) => value);

  // await sendAPIRequestInfoEmail(payload, result);

  return result;
};
