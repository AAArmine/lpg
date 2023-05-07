export const GA_TRACKING_ID: string = `${process.env.NEXT_GA_TRACKING_ID}`;

const CONTACT_REFERENCE_NUMBER_CUSTOM_DIMENSION_INDEX = 1;
const CONTACT_REFERENCE_NUMBER_CUSTOM_DIMENSION_NAME =
  'contact_reference_number';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
// https://developers.google.com/analytics/devguides/collection/gtagjs/custom-dims-mets
export const pageview = (url: URL) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
    custom_map: {
      [`dimension${CONTACT_REFERENCE_NUMBER_CUSTOM_DIMENSION_INDEX}`]:
        CONTACT_REFERENCE_NUMBER_CUSTOM_DIMENSION_NAME,
    },
  });
};

// https://developers.google.com/gtagjs/reference/api#consent
export const consent = () => {
  window.gtag('consent', 'update', {
    ad_storage: 'granted',
    analytics_storage: 'granted',
  });
};

interface GTagEventCustomMap {
  [CONTACT_REFERENCE_NUMBER_CUSTOM_DIMENSION_NAME]?: string | null;
}

type GTagEvent = {
  action: string;
  category: string;
  label: string;
  value?: number;
  customDimMet?: GTagEventCustomMap;
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({
  action,
  category,
  label,
  value,
  customDimMet,
}: GTagEvent) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
    ...customDimMet,
  });
};

export const decline = () => {
  window.gtag('consent', 'update', {
    ad_storage: 'denied',
    analytics_storage: 'denied',
  });
};
