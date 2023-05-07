import { getUrlSearchParams } from '../getQueryParams';
import { GOOGLE_SEO_SOURCE } from './onlineSources';

export const getUtmSource = (): string | null => {
  const searchParams = getUrlSearchParams();
  const utmSource = searchParams.utm_source;
  if (utmSource) {
    const res = utmSource.toLowerCase();
    return res.includes('google') ? GOOGLE_SEO_SOURCE : res;
  }

  return null;
};
