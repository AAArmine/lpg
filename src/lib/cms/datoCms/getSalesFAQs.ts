import { Infos } from '../types';
import { datoCmsClient } from './datoCmsClient';

const SALES_FAQS = `query salesFaqs {
  allHausverkaufMitWohnrechtFaqs {
    question
    answer {
      value
    }
  }
}
`;

export const getSalesFAQs = async (): Promise<Infos[]> =>
  datoCmsClient({
    query: SALES_FAQS,
    preview: process.env.NODE_ENV === 'development',
  }).then(
    ({ allHausverkaufMitWohnrechtFaqs }) => allHausverkaufMitWohnrechtFaqs
  );
