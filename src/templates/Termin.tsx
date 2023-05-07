/* eslint-disable react/display-name */
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Loader from '../layout/Loader';

import { Widget } from '@typeform/embed-react';

import { Section } from '../layout/Section';
import * as gtag from '../lib/gtag';
import { DomainInfo } from '../lib/cms/types';

const Meta = dynamic(() => import('../layout/Meta'), {
  loading: () => <Loader />,
});
const NavHeader = dynamic(() => import('../navigation/NavHeader'), {
  loading: () => <Loader />,
});
const Footer = dynamic(() => import('./Footer'), {
  loading: () => <Loader />,
});

const ConsultationTypeform = () => {
  const [domain, setDomain] = useState('gniw.de');
  return (
    <Widget
      id="vTtA7zej"
      style={{ width: '100%', height: '550px' }}
      hidden={{ domain }}
      onReady={() => {
        setDomain(window?.location?.hostname);
        gtag.event({
          action: 'form_loaded',
          category: 'EmbeddedTypeform',
          label: 'Termin',
          value: 1,
        });
      }}
      onSubmit={() => {
        gtag.event({
          action: 'form_submitted',
          category: 'EmbeddedTypeform',
          label: 'Termin',
          value: 5,
        });
      }}
    />
  );
};

export const TerminSection = () => {
  return (
    <Section yPadding="py-16">
      <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
        <div className="relative max-w-7xl mx-auto">
          <svg
            className="absolute left-full transform translate-x-1/2"
            width={404}
            height={404}
            fill="none"
            viewBox="0 0 404 404"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={404}
              fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
            />
          </svg>
          <svg
            className="absolute right-full bottom-0 transform -translate-x-1/2"
            width={404}
            height={404}
            fill="none"
            viewBox="0 0 404 404"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={404}
              fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
            />
          </svg>
          <div className="">
            <h2 className="text-center text-3xl font-extrabold tracking-tight text-primary-900 sm:text-4xl">
              Beratungstermin
            </h2>
            <h3 className="mt-4 text-center text-xl font-extrabold tracking-tight text-primary-900 sm:text-3xl">
              Vereinbaren Sie ein Telefonat
            </h3>
            <div className="mt-4 text-lg text-gray-600">
              <p className="mt-4">
                Sie haben Fragen zur GNIW? Gerne besprechen wir mit Ihnen
                telefonisch das Konzept der GNIW und beantworten Ihre Fragen
                einfach und bequem.
              </p>
              <p className="mt-4">
                Füllen Sie einfach das Formular aus inkl. der gewünschten
                Uhrzeit für den Anruf und einer unserer Kundenberater meldet
                sich zeitnah bei Ihnen.
              </p>
              <p className="mt-4">
                Wir antworten Ihnen{' '}
                <strong className="text-gray-800">
                  Mo. bis Fr. von 9–18 Uhr
                </strong>
                .
              </p>
            </div>
          </div>

          <div className="mt-12">
            <ConsultationTypeform />
          </div>
        </div>
      </div>
    </Section>
  );
};

type TerminProps = {
  domainInfos?: DomainInfo[];
};
export const Termin = (props: TerminProps) => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Meta
        title="Beratungstermin Service mit der GNIW vereinbaren"
        description="Haben Sie Fragen? Jetzt Beratungstermin schnell und einfach vereinbaren ✓ Kostenloser Rückruf eines Kundenberaters ➤ GNIW Beratungstermin vereinbaren."
        canonical="https://gniw.de/termin/ "
      />
      <NavHeader domainInfos={props.domainInfos} />
      <TerminSection />
      <Footer />
    </div>
  );
};

export default Termin;
