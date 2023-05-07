/* eslint-disable react/display-name */
import React, { createRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { Background } from '../../background/Background';
import { Section } from '../../layout/Section';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { event as gTagEvent } from '../../lib/gtag';
import { useTranslations } from '../../locale';
import Loader from '../../layout/Loader';

import { OfferForm } from './OfferForm';
import { withRouter } from 'next/router';
import { WithRouterProps } from 'next/dist/client/with-router';
import { getOnlineSource } from '../../utils/getOnlineSource';

import {
  getGtagEventAction,
  getGtagEventLabel,
  GTAG_EVENT_CATEGORY,
} from './utils/tracking';

const InformationOrOffer = dynamic(() => import('./InformationOrOffer'), {
  loading: () => <Loader />,
});
const InformationForm = dynamic(() => import('./InformationForm'), {
  loading: () => <Loader />,
});
const AdcellTrackingPixel = dynamic(() => import('./AdcellTrackingPixel'), {
  loading: () => <Loader />,
});

type ContactForm = 'information' | 'offer';

const ContactComponent: React.FC<WithRouterProps> = ({ router }) => {
  const [activeForm, setActiveForm] = useState<null | ContactForm>(null);
  const [onlineSource, setOnlineSource] = useState<string | null>(null);
  const containerRef = createRef<HTMLDivElement>();

  const onStepChanged = () => {
    window.setTimeout(
      () =>
        containerRef.current?.scrollIntoView({
          block: 'start',
          behavior: 'smooth',
        }),
      10
    );
  };

  const selectActiveForm = (form: ContactForm) => {
    onStepChanged();
    gTagEvent({
      action: getGtagEventAction('loaded', form),
      category: GTAG_EVENT_CATEGORY,
      label: getGtagEventLabel(form),
    });
    setActiveForm(form);
  };

  React.useEffect(() => {
    if (typeof router.query.ctype === 'string') {
      const type = router.query.ctype as ContactForm;
      if (type !== activeForm) {
        selectActiveForm(type);
      }
    }
    setOnlineSource(getOnlineSource());
    // depend on query 'ctype' only
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.ctype]);

  const t = useTranslations('contact-form');

  const onClose = (isCancelled: boolean) => {
    gTagEvent({
      action: getGtagEventAction(
        isCancelled ? 'cancelled' : 'closed',
        activeForm!
      ),
      category: GTAG_EVENT_CATEGORY,
      label: getGtagEventLabel(activeForm!),
    });
    setActiveForm(null);
  };

  return (
    <Background color="bg-primary-500">
      <Section yPadding="py-12" id="kontakt" ref={containerRef}>
        <h2 className="text-center text-3xl lg:text-4xl font-bold text-white my-8">
          {t('title')}
        </h2>
        <div className="form-container">
          {!activeForm && (
            <InformationOrOffer onValueChange={selectActiveForm} />
          )}
          {activeForm === 'offer' && (
            <OfferForm
              onClose={onClose}
              onStepChanged={onStepChanged}
              onlineSource={onlineSource}
            />
          )}
          {activeForm === 'information' && (
            <InformationForm
              onClose={onClose}
              onStepChanged={onStepChanged}
              onlineSource={onlineSource}
            />
          )}
        </div>
        <AdcellTrackingPixel />
      </Section>
    </Background>
  );
};

export const Contact = withRouter(ContactComponent);
