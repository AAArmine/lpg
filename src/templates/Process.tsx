import React from 'react';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';

const processSteps = [
  {
    id: 1,
    name: 'Angebot anfordern',
    description:
      'Sie übermitteln im beigelegten Kundenfragebogen die Eckdaten Ihres Eigenheims.',
  },
  {
    id: 2,
    name: 'Bewertung',
    description:
      'Die GNIW ermittelt anhand von aktuellen Marktdaten den Verkehrswert Ihrer Immobilie und bewertet dann den Wert dieser Immobilie im bewohnten Zustand.',
  },
  {
    id: 3,
    name: 'Angebot erhalten',
    description: `Sie erhalten von uns ein unverbindliches Kaufangebot für Ihr
Eigenheim und gleichzeitig ein Angebot für ein anschließendes
lebenslanges Mietverhältnis. Entspricht unser unverbindliches
Angebot Ihren Vorstellungen, vereinbaren wir gerne gemeinsam
einen Termin für ein persönliches Kennenlernen.`,
  },
  {
    id: 4,
    name: 'Vertragsabschluss',
    description: `Der Verkaufsprozess wird notariell begleitet und unabhängig
geprüft. Bei Angebotsannahme durch Sie übernimmt GNIW
die Abwicklung der Transaktion und die zukünftige Verwaltung
sowie Wartung Ihres Eigenheims. Hierbei entstehen für Sie
keinerlei Kosten.`,
  },
  {
    id: 5,
    name: 'Sofortauszahlung',
    description: `Der Kaufpreis wird nach erfolgreichem Kaufabschluss direkt
und vollständig an Sie ausgezahlt. Sie bleiben in Ihrem Eigen-
heim wohnen und zahlen dann die vereinbarte faire Miete. Den
Kaufpreis können Sie anlegen oder ausgeben. Das lebenslange
Mietverhältnis ist vertraglich garantiert, kann aber von Ihrer
Seite jederzeit gekündigt werde. Die GNIW kann das Mietverhältnis nicht kündigen.`,
  },
];

const ProcessSection = () => {
  return (
    <div className="py-8 overflow-hidden lg:pt-16 lg:pb-12">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="relative">
          <h2 className="text-center text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl">
            Rückmietverkauf Ablauf
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-800">
            Das bewährte Konzept der GNIW für den sicheren Verkauf Ihres
            Eigenheims -{' '}
            <strong className="text-gray-900">
              in 5 einfachen und transparenten Schritten zur Sofortauszahlung
            </strong>
            . Wir beraten Sie eingehend bei jedem der folgenden Prozessschritte.
          </p>
        </div>

        <div className="relative mt-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center">
          <div className="relative col-span-3">
            <dl className="mt-10 space-y-10">
              {processSteps.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-16 w-16 rounded-md bg-primary-500 text-white">
                      <div
                        className="h-8 w-8 text-center font-bold text-4xl"
                        aria-hidden="true"
                      >
                        {item.id}
                      </div>
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
      </div>
    </div>
  );
};

export const Process = () => {
  return (
    <Background color="bg-white">
      <Section yPadding="py-12" id="ablauf">
        <ProcessSection />
      </Section>
    </Background>
  );
};

export default Process;
