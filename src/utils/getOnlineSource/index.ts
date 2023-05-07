import { getAdcellSource } from './getAdcellSource';
import { getGoogleCpcSource } from './getGoogleCpcSource';
import { getOfflineSource } from './getOfflineSource';
import { getReferrerSource } from './getReferrerSource';
import { getUtmSource } from './getUtmSource';
import { OnlineSource } from './onlineSources';

export const getOnlineSource = (): OnlineSource => {
  const adcellSource = getAdcellSource();
  if (adcellSource) {
    return adcellSource;
  }

  const googleAdSource = getGoogleCpcSource();
  if (googleAdSource) {
    return googleAdSource;
  }

  const offlineSource = getOfflineSource();
  if (offlineSource) {
    return offlineSource;
  }

  const utmSource = getUtmSource();
  if (utmSource) {
    return utmSource;
  }

  const referrerSource = getReferrerSource();
  if (referrerSource) {
    return referrerSource;
  }

  return null;
};
