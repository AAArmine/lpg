import { OfflineSources, OFFLINE_SOURCES } from './onlineSources';

export const getOfflineSource = (): OfflineSources | null => {
  for (let index = 0; index < OFFLINE_SOURCES.length; index += 1) {
    const offlineSource = OFFLINE_SOURCES[index]!;
    if (
      window.location.origin
        .toLowerCase()
        .includes(offlineSource.referrerDomain)
    ) {
      return offlineSource.name;
    }

    if (
      document.referrer &&
      document.referrer.toLowerCase().includes(offlineSource.referrerDomain)
    ) {
      return offlineSource.name;
    }
  }
  return null;
};
