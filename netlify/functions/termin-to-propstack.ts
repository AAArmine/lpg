import { Handler } from '@netlify/functions';
import fetch from 'node-fetch';

const PROPSTACK_CONTACTS = 'https://api.propstack.de/v1/contacts';

const createContact = async (data: any) => {
  return fetch(PROPSTACK_CONTACTS, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': `${process.env.NEXT_PROPSTACK_API_KEY}`,
    },
    body: JSON.stringify(data),
  });
};

const getTimeslot = (data: any) => {
  const timeKey = Object.keys(data).find((key) => key.includes('Zeit'));
  if (!timeKey) {
    return '';
  }
  return data[timeKey];
};

const toPropStackFormat = (data: any) => {
  const timeSlot = getTimeslot(data);
  const propStackData = {
    client: {
      first_name: data.Vorname || '',
      last_name: data.Nachname,
      home_cell: data.Telefonnummer,
      description: `Datenübermittelt via ${data.domain} (Beratungstermin)
Bevorzugte Zeit für ein Telefonat: ${timeSlot}.`,
      // required fields
      client_source_id: 13742, // source: gniw.de
      client_status_id: 13270, // status: CONTACT
    },
  };
  return propStackData;
};

const getAnswerValue = (answer: any) => {
  const { type } = answer;
  if (type === 'choices') {
    return answer[type].labels;
  }
  return answer[type];
};

const handler: Handler = async (event) => {
  const data: any = JSON.parse(event.body || '{}');
  const formResponse = data.form_response;
  const { definition, answers } = formResponse;
  const responseData: any = {};
  answers.forEach((answer: any) => {
    const { id } = answer.field;
    const def = definition.fields.find((f: any) => f.id === id);
    const fieldName = def.title;
    const fieldValue = getAnswerValue(answer);
    responseData[fieldName] = fieldValue;
  });
  if (formResponse?.hidden?.domain) {
    responseData.domain = formResponse.hidden.domain;
  }
  await createContact(toPropStackFormat(responseData));
  return { statusCode: 200 };
};

export { handler };
