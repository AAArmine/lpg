import { ContactFormPostData } from '../contactFormPostData';
import { createContact } from './createContact';
import { findContactByEmail } from './findContactByEmail';
import { toPropStackClientDto } from './toPropStackClientDto';
import { updateContact } from './updateContact';

export const saveContactToPropStack = async (
  postData: ContactFormPostData
): Promise<Record<'id', number>> => {
  const { request: schema, formType, requestId, onlineSource } = postData;

  const clientDto = toPropStackClientDto(
    schema,
    formType,
    requestId,
    onlineSource
  );

  const { email } = clientDto;

  if (!email) {
    throw Error('Contact email is not provided');
  }

  const existingClient = await findContactByEmail(email);

  if (existingClient) {
    return updateContact(existingClient.id, clientDto, {
      ...(existingClient.custom_fields?.first_contact?.value
        ? {
            custom_fields: {
              first_contact: existingClient.custom_fields.first_contact.value,
              zweiter_kontakt: new Date(),
            },
          }
        : {}),
    });
  }

  return createContact(clientDto);
};
