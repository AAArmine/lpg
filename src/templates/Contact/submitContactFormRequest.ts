import { v4 } from 'uuid';
import { event as gTagEvent } from '../../lib/gtag';
import {
  getGtagEventAction,
  getGtagEventLabel,
  GTAG_EVENT_CATEGORY,
} from './utils/tracking';

const API_RELATIVE_URL = '/api/contact-form/';

export const submitContactFormRequest = (
  formType: 'information' | 'offer',
  onlineSource: string | null,
  schema: Array<{ name: string; value: any }>
) => {
  const requestId = v4();

  document.dispatchEvent(
    new CustomEvent('contact-form-submitted', { detail: requestId })
  );

  gTagEvent({
    action: getGtagEventAction('submitted', formType),
    category: GTAG_EVENT_CATEGORY,
    label: getGtagEventLabel(formType),
    customDimMet: { contact_reference_number: requestId },
  });

  return fetch(`${window.location.origin}/${API_RELATIVE_URL}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      formType,
      requestId,
      onlineSource,
      request: schema.map((s) => ({ name: s.name, value: s.value })),
    }),
  });
};
