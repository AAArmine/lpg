import { Infos } from '../types';
import { datoCmsClient } from './datoCmsClient';

const REAL_ESTATE_SALES = `query realSales {
  allImmobilienverkaufMitWohnrechtSchrittens {
    title
    body {
      value
    }
  }
}
`;

export const getRealEstateSales = async (): Promise<Infos[]> =>
  datoCmsClient({
    query: REAL_ESTATE_SALES,
    preview: process.env.NODE_ENV === 'development',
  }).then(
    ({ allImmobilienverkaufMitWohnrechtSchrittens }) =>
      allImmobilienverkaufMitWohnrechtSchrittens
  );
