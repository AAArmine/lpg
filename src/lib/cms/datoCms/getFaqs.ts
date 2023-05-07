import { FAQ } from '../types';
import { datoCmsClient } from './datoCmsClient';

const FAQS_QUERY = `query faqs {
  allFaqs {
    question
    answer
  }
}
`;

export const getFaqs = async (): Promise<FAQ[]> =>
  datoCmsClient({
    query: FAQS_QUERY,
    preview: process.env.NODE_ENV === 'development',
  }).then(({ allFaqs }) => allFaqs);
