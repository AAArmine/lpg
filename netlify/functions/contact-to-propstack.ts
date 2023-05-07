import { Handler } from '@netlify/functions';

const handler: Handler = async (event) => {
  // TODO: see termin-to-propstack as a reference
  console.log(`contact-to-propstack called with body:${event.body}`);
  return { statusCode: 200 };
};

export { handler };
