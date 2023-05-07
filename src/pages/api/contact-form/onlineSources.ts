export const UNDEFINED_ONLINE_SOURCE_PROPSTACK_ID = 17960;
export const EMPTY_ONLINE_SOURCE_PROPSTACK_ID = 17959;
export const UNDEFINED_ONLINE_SOURCE_LABEL = 'GNIW.de - Sonstige';
export const EMPTY_ONLINE_SOURCE_LABEL = 'GNIW.de - Website';

export const PROPSTACK_ONLINE_SOURCES: Array<{
  propStackId: number;
  name: string;
  label: string;
}> = [
  { propStackId: 17955, name: 'adcell', label: 'GNIW.de - Adcell' },
  { propStackId: 17956, name: 'facebook', label: 'GNIW.de - Facebook' },
  { propStackId: 17957, name: 'google-cpc', label: 'GNIW.de - Google / CPC' },
  { propStackId: 17969, name: 'google-seo', label: 'GNIW.de - Google / SEO' },
  { propStackId: 17958, name: 'instagram', label: 'GNIW.de - Instagram' },
  { propStackId: 17962, name: 'linkedIn', label: 'GNIW.de - LinkedIn' },
  { propStackId: 17963, name: 'xing', label: 'GNIW.de - XING' },
  { propStackId: 17961, name: 'youtube', label: 'GNIW.de - YouTube' },
  { propStackId: 15529, name: 'bauer', label: 'Bauer' },
  { propStackId: 14108, name: 'chrismon', label: 'Chrismon' },
  { propStackId: 14109, name: 'prisma', label: 'Prisma' },
  { propStackId: 13728, name: 'senioren-ratgeber', label: 'Senioren Ratgeber' },
];

export const parseOnlineSourceValueForEmail = (
  onlineSource: string | null
): string => {
  if (onlineSource) {
    const definedOnlineSource = PROPSTACK_ONLINE_SOURCES.find(
      ({ name }) => name === onlineSource
    );
    if (definedOnlineSource) {
      return definedOnlineSource.label;
    }
    return UNDEFINED_ONLINE_SOURCE_LABEL;
  }

  return EMPTY_ONLINE_SOURCE_LABEL;
};
