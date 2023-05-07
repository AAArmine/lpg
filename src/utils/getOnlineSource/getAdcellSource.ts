import { getUrlSearchParams } from '../getQueryParams';
import { AdcellSource, ADCELL_SOURCE } from './onlineSources';

export const getAdcellSource = (): AdcellSource | null => {
  const searchParams = getUrlSearchParams();
  return searchParams.bid && searchParams.adcref ? ADCELL_SOURCE : null;
};
