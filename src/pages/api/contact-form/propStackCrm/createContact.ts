import { PROPSTACK_CONTACTS_BASE_URL, PROPSTACK_API_KEY } from './config';

export const createContact = (
  contactDto: Record<string, any>
): Promise<Record<'id', number>> =>
  fetch(PROPSTACK_CONTACTS_BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': `${PROPSTACK_API_KEY}`,
    },
    body: JSON.stringify({ client: contactDto }),
  })
    .then((response) => response.json())
    .then((data) => data);
