export type OnlineSource = string | null;

export const GOOGLE_CPC_SOURCE = 'google-cpc';
export const GOOGLE_SEO_SOURCE = 'google-seo';
export const ADCELL_SOURCE = 'adcell';

export type ReferrerSources =
  | 'facebook'
  | 'google-seo'
  | 'instagram'
  | 'linkedIn'
  | 'xing'
  | 'youtube';

export const REFERRER_ORIGINS: Array<string> = [
  'facebook',
  'google',
  'instagram',
  'linkedIn',
  'xing',
  'youtube',
];

export type OfflineSources =
  | 'bauer'
  | 'chrismon'
  | 'prisma'
  | 'senioren-ratgeber';

export const OFFLINE_SOURCES: Array<{
  referrerDomain: string;
  name: OfflineSources;
}> = [
  { referrerDomain: 'gniw-partner.de', name: 'bauer' },
  { referrerDomain: 'gniw.eu', name: 'chrismon' },
  { referrerDomain: 'gniw.info', name: 'prisma' },
  { referrerDomain: 'gniw.org', name: 'senioren-ratgeber' },
];

export type AdcellSource = 'adcell';

export type GoogleAdSource = 'google-cpc';
