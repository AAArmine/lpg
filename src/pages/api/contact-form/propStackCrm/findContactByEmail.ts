import { PROPSTACK_CONTACTS_BASE_URL, PROPSTACK_API_KEY } from './config';

export const findContactByEmail = async (
  email: string
): Promise<Promise<{
  id: number;
  custom_fields?: { first_contact?: { value?: Date | null } | null } | null;
}> | null> => {
  const findResponse = await fetch(
    `${PROPSTACK_CONTACTS_BASE_URL}?email=${encodeURIComponent(email)}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': `${PROPSTACK_API_KEY}`,
      },
    }
  );
  const findData = await findResponse.json();

  if (findData.length) {
    const existingClientResponse = await fetch(
      `${PROPSTACK_CONTACTS_BASE_URL}/${findData[0].id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-API-KEY': `${PROPSTACK_API_KEY}`,
        },
      }
    );
    const existingClient = await existingClientResponse.json();
    return existingClient;
  }

  return null;
};
