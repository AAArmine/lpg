import { event as gTagEvent } from '../../../lib/gtag';

const GTAG_EVENT_CATEGORY = 'Calculator';

export const trackPropertyValueUpdated = (label: string) =>
  gTagEvent({
    action: 'property_value_updated',
    category: GTAG_EVENT_CATEGORY,
    label,
  });

export const trackContactButtonClicked = () =>
  gTagEvent({
    action: 'contact_button_clicked',
    category: GTAG_EVENT_CATEGORY,
    label: 'CTA',
  });

export const trackTerminButtonClicked = () =>
  gTagEvent({
    action: 'termin_button_clicked',
    category: GTAG_EVENT_CATEGORY,
    label: 'CTA',
  });

export const trackOfferRequestButtonClicked = () =>
  gTagEvent({
    action: 'offer_request_button_clicked',
    category: GTAG_EVENT_CATEGORY,
    label: 'CTA',
  });
