/* eslint-disable react/display-name */
import React from 'react';
import dynamic from 'next/dynamic';
import { Section } from '../layout/Section';
import Loader from '../layout/Loader';

const Meta = dynamic(() => import('../layout/Meta'), {
  loading: () => <Loader />,
});
const NavHeader = dynamic(() => import('../navigation/NavHeader'), {
  loading: () => <Loader />,
});
const Footer = dynamic(() => import('./Footer'), {
  loading: () => <Loader />,
});

const details = [
  {
    id: 1,
    title: 'Name',
    value: 'GNIW Gesellschaft für Nachhaltige Immobilienwirtschaft mbH',
  },
  { id: 2, title: 'Straße', value: 'Kurfürstendamm 194' },
  { id: 3, title: 'Ort', value: '10707 Berlin, Deutschland' },
  {
    id: 4,
    title: 'Handelsregister',
    value: 'Amtsgericht Charlottenburg (Berlin) HRB 204793 B',
  },
  { id: 5, title: 'Geschäftsführer', value: 'Dr. Henryk Seeger' },
  { id: 6, title: 'Telefon', value: '+49 (0)30 / 403 65 79 10' },
  { id: 7, title: 'eMail', value: 'info@gniw.de' },
];
type ImpressumSectionProps = {
  title: string;
};
export const ImpressumSection = (props: ImpressumSectionProps) => {
  return (
    <Section yPadding="py-16">
      <div className="">
        <div className="max-w-7xl py-12 lg:py-16">
          <h2 className="text-3xl font-extrabold text-gray-900">
            {props.title}
          </h2>
          <h3 className="mt-2 text-xl font-extrabold text-gray-800">
            Verantwortlicher
          </h3>
          <div className="mt-8">
            <dl className="divide-y divide-gray-200">
              {details.map((faq) => (
                <div
                  key={faq.id}
                  className="py-2 md:grid md:grid-cols-12 md:gap-8"
                >
                  <dt className="text-lg font-bold text-gray-900 md:col-span-5">
                    {faq.title}
                  </dt>
                  <dd className="mt-2 md:mt-0 md:col-span-7">
                    <p className="text-base text-gray-700">{faq.value}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </Section>
  );
};

export const Impressum = () => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Meta
        title="Impressum GNIW"
        description="Hier finden Sie das Impressum der GNIW Gesellschaft für Nachhaltige Immobilienwirtschaft mbH."
        canonical="https://gniw.de/impressum/"
      />
      <NavHeader />
      <ImpressumSection title="Impressum" />
      <Footer />
    </div>
  );
};

export default Impressum;
