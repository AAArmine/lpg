import { Infos, SEO } from '../types';
import { datoCmsClient } from './datoCmsClient';

const HOUSE_SALE_QUERY = `query allSalesInfo {
  allHausverkaufMitWohnrechtSections {
    body {
      value
    }
    title
    image {
      url
      alt
    }
  }
}
`;

const META_QUERY = `query allMeta {
   allHausverkaufMitWohnrechtSeos {
    seo {
      description
      title
    }
  }
}
`;

export const getHouseSaleInfo = async (): Promise<Infos[]> =>
  datoCmsClient({
    query: HOUSE_SALE_QUERY,
    preview: process.env.NODE_ENV === 'development',
  }).then(
    ({ allHausverkaufMitWohnrechtSections }) =>
      allHausverkaufMitWohnrechtSections
  );

export const getHouseSaleMeta = async (): Promise<SEO[]> =>
  datoCmsClient({
    query: META_QUERY,
    preview: process.env.NODE_ENV === 'development',
  }).then(
    ({ allHausverkaufMitWohnrechtSeos }) => allHausverkaufMitWohnrechtSeos
  );
