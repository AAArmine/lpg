import merge from 'lodash.merge';
import { PROPSTACK_CONTACTS_BASE_URL, PROPSTACK_API_KEY } from './config';

export const updateContact = (
  contactId: number,
  contactDto: Record<string, any>,
  extraData: Record<string, any>
): Promise<Record<'id', number>> =>
  fetch(`${PROPSTACK_CONTACTS_BASE_URL}/${contactId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': `${PROPSTACK_API_KEY}`,
    },
    body: JSON.stringify({ client: merge({}, contactDto, extraData) }),
  })
    .then((response) => response.json())
    .then((data) => data);
