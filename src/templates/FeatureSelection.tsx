import React from 'react';

import {
  PhoneOutgoingIcon,
  SearchIcon,
  ShieldCheckIcon,
} from '@heroicons/react/outline';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';

const transferFeatures = [
  {
    id: 1,
    name: 'Kontakt',
    description:
      'Treten Sie unverbindlich mit uns in Kontakt und übermitteln Sie uns Details zu Ihrer Immobilie, damit wir Ihnen ein kostenloses Kauf- und Mietangebot zur ersten Orientierung unterbieten können.',
    icon: PhoneOutgoingIcon,
  },
  {
    id: 2,
    name: 'Kaufangebot',
    description:
      'Wenn Ihnen unser vorläufiges Kauf- und Mietangebot zusagt, dann vereinbaren Sie einfach einen Ortstermin mit einem unserer Kollegen zum Kennenlernen und zur Besichtigung Ihrer Immobilie.  Dadurch können wir Ihnen ein konkretes und verbindliches Kauf- und Mietangebot unterbreiten, welches zu Ihrer Lebenssituation passt. Außerdem beantwortet unser Experte Ihnen alle offenen Fragen und bespricht persönlich Ihre individuellen Wünsche, wie z.B. eine kurze Mietdauer oder die Durchführung von anstehenden Instandhaltungsmaßnahmen.',
    icon: SearchIcon,
  },
  {
    id: 3,
    name: 'Verkauf + Miete',
    description:
      'Sie verkaufen Ihre Immobilie als Rückmietverkauf und erhalten umgehend den kompletten vereinbarten Kaufpreis. Zeitgleich erhalten Sie ein Mietrecht auf Lebenszeit - bzw. bis zu dem Zeitpunkt, wann Sie ausziehen wollen. Dadurch erhalten Sie die komplette Flexibilität. Mieterhöhungen sind langfristig ausgeschlossen. Zudem übernimmt die GNIW sämtliche Instandhaltungsarbeiten. Sie erhalten also ein abgesichertes Rundum-sorglos-Paket.',
    icon: ShieldCheckIcon,
  },
];
const Features = () => {
  return (
    <div className="py-8 overflow-hidden lg:pt-16 lg:pb-12">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="relative">
          <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-primary-900 sm:text-4xl">
            So funktioniert die GNIW
          </h2>

          <p className="mt-4 max-w-3xl mx-auto text-center text-2xl text-gray-900">
            Sie besitzen ein Haus oder eine Wohnung?
          </p>
          <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-800">
            Verkaufen Sie Ihr Eigentum, erhalten Sie sofort den vollen
            Verkaufspreis und bewohnen Sie Ihr Eigenheim lebenslang - bzw. so
            lange Sie wollen - weiter. Ihnen enstehen im gesamten Prozess
            keinerlei Kosten. Die GNIW übernimmt alle Kosten.
          </p>
        </div>

        <div className="relative mt-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center">
          <div className="relative col-span-3">
            <dl className="mt-10 space-y-10">
              {transferFeatures.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-16 w-16 rounded-md bg-primary-500 text-white">
                      <item.icon className="h-8 w-8" aria-hidden="true" />
                    </div>
                    <p className="ml-20 text-2xl leading-6 font-bold text-primary-900">
                      {item.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-20 text-lg text-gray-700">
                    {item.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <svg
          className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
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
            height={784}
            fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
          />
        </svg>
      </div>
    </div>
  );
};

export const FeatureSelection = () => {
  return (
    <Background color="bg-white">
      <Section yPadding="py-12" id="funktionsweise">
        <Features />
      </Section>
    </Background>
  );
};

export default FeatureSelection;
