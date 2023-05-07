import {
  GOOGLE_SEO_SOURCE,
  ReferrerSources,
  REFERRER_ORIGINS,
} from './onlineSources';

export const getReferrerSource = (): ReferrerSources | null => {
  if (document.referrer) {
    const referrer = document.referrer.toLowerCase();
    for (let index = 0; index < REFERRER_ORIGINS.length; index += 1) {
      const referrerOrigin = REFERRER_ORIGINS[index]!;
      if (referrer.includes(referrerOrigin)) {
        return referrerOrigin === 'google'
          ? GOOGLE_SEO_SOURCE
          : (referrerOrigin as ReferrerSources);
      }
    }
  }
  return null;
};
