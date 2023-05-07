import { getUrlSearchParams } from '../getQueryParams';
import { GoogleAdSource, GOOGLE_CPC_SOURCE } from './onlineSources';

export const getGoogleCpcSource = (): GoogleAdSource | null => {
  const searchParams = getUrlSearchParams();
  return searchParams.gclid ? GOOGLE_CPC_SOURCE : null;
};
