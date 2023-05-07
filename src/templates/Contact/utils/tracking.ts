/* eslint-disable @typescript-eslint/no-use-before-define */
const CONDO_TYPE_VALUES = ['condominium'];

export const getGtagEventAction = (
  action: string,
  form: 'information' | 'offer'
) => `${form === 'information' ? 'info' : 'offer'}_form_${action}`;

export const GTAG_EVENT_CATEGORY = 'ContactForm';

export const getGtagEventLabel = (form: 'information' | 'offer') =>
  form === 'information' ? 'Information' : 'Offer';

export const offerFormStepActionGtagEventName = (
  schema: Array<{ name: string; value: any }>,
  step: number,
  action: string
): string => {
  const houseTypeStep = schema.find(({ name }) => name === 'houseType')!;
  const eventNameMapper = !CONDO_TYPE_VALUES.includes(houseTypeStep.value)
    ? houseTypeFormStepToGtagEventNamePrefix
    : condoTypeFormStepToGtagEventNamePrefix;

  return `offer_form_step${formatStepNumber(step)}_${
    eventNameMapper[step]
  }_${action}`;
};

const houseTypeFormStepToGtagEventNamePrefix: Record<number, string> = {
  1: 'Art',
  2: 'Größe',
  3: 'Alter/Zustand',
  4: 'Architektur',
  5: 'Bauweise',
  6: 'Raumaufteilung',
  7: 'Zusatzausstattung',
  8: 'Parkmöglichkeiten',
  9: 'Besonderheiten',
  10: 'Kontaktinformationen',
};

const condoTypeFormStepToGtagEventNamePrefix: Record<number, string> = {
  1: 'Art',
  2: 'Größe',
  3: 'Alter/Zustand',
  4: 'Architektur',
  5: 'Energetik',
  6: 'Raumaufteilung',
  7: 'Parkmöglichkeiten',
  8: 'Kontaktinformationen',
};

const formatStepNumber = (step: number): string =>
  `${step < 10 ? '0' : ''}${step.toString()}`;
