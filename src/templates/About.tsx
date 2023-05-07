/* eslint-disable react/display-name */
import React from 'react';
import dynamic from 'next/dynamic';
import Loader from '../layout/Loader';
import Link from 'next/link';

import { Section } from '../layout/Section';

const Meta = dynamic(() => import('../layout/Meta'), {
  loading: () => <Loader />,
});
const NavHeader = dynamic(() => import('../navigation/NavHeader'), {
  loading: () => <Loader />,
});
const Footer = dynamic(() => import('./Footer'), {
  loading: () => <Loader />,
});

export const AboutSection = () => {
  return (
    <Section yPadding="py-16">
      <div className="py-16 bg-white overflow-hidden">
        <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Über die GNIW
        </h2>
        <div className="max-w-7xl">
          <div className="relative z-10 mb-8 md:mb-2 md:px-6"></div>
          <div className="relative">
            <svg
              className="hidden md:block absolute top-0 right-0 -mt-20 -mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="95e8f2de-6d30-4b7e-8159-f791729db21b"
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
                height={384}
                fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)"
              />
            </svg>
            <svg
              className="hidden md:block absolute bottom-0 left-0 -mb-20 -ml-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="7a00fe67-0343-4a3c-8e81-c145097a3ce0"
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
                height={384}
                fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)"
              />
            </svg>
            <div className="relative md:bg-white md:py-6">
              <div className="lg:grid lg:grid-cols-2 lg:gap-6">
                <div className="prose prose-lg text-gray-700">
                  <p>
                    Die Gesellschaft für Nachhaltige Immobilienwirtschaft (GNIW)
                    ist ein deutschlandweites Immobilienunternehmen, das
                    Eigenheimbesitzer*innen einen rechtlich abgesicherten
                    Verkauf ihrer Immobilie zum Marktpreis ermöglicht und ihnen
                    gleichzeitig ein Wohnrecht zu fairen Mietkonditionen
                    garantiert. Transparenz, Fairness und Vertrauen sind die
                    Grundprinzipien der GNIW. Deshalb beraten wir unsere Kunden
                    bei jedem Prozessschritt umfassend und transparent.
                  </p>
                  <p className="mt-3">
                    Das neuartige Vertragsmodell der GNIW, das sofort
                    finanzielle Spielräume bei voller Sicherheit der
                    lebenslangen Wohnsituation ermöglicht, ist etwas ganz
                    Besonderes in Deutschland. Um die Chancen, die das Konzept
                    den Immobilienbesitzer*innen bietet, einem breiten
                    Kundenkreis zugänglich zu machen, haben sich u.a die
                    Sparkasse | bsk Immobilien und die Berliner Volksbank
                    Immobilien GmbH der GNIW als Partner angeschlossen.
                  </p>
                </div>
                <div className=" prose prose-lg mt-6 text-gray-700 lg:mt-0">
                  <p>
                    Das erklärte Ziel der GNIW ist es, Menschen die Chance zu
                    bieten, von ihrem Eigenheimbesitz sofort und umfassend zu
                    profitieren. Denn viele Menschen haben ihr Leben lang hart
                    gearbeitet und sparsam gelebt, um ihr Geld in einer
                    Immobilie anzulegen. Nicht selten ist dies Ausdruck einer
                    vorausschauenden Planung für finanzielle Sicherheit im
                    Alter. Doch den finanziellen Spielraum können die
                    Besitzer*innen nicht für sich nutzen, ohne ihr gewohntes
                    Eigenheim durch einen Verkauf aufzugeben. Das muss nicht
                    sein: Die GNIW macht den Wert von Immobilien uneingeschränkt
                    nutzbar, ohne dass das geliebte Heim aufgegeben werden muss.
                  </p>
                  <p className="mt-3">
                    So helfen wir vielen Menschen dabei das Leben im Alter zu
                    genießen, sich besondere Wünsche zu erfüllen und frühzeitig
                    finanzielle Vorsorge (z.B. für die Pflege) zu treffen.
                  </p>
                </div>
              </div>
              <div className="mt-8 inline-flex rounded-md shadow">
                <Link href="/termin" prefetch={false}>
                  <a className="flex items-center justify-center px-5 py-3 border border-transparent text-lg font-bold rounded-md text-white bg-primary-500 hover:bg-primary-700 tracking-normal">
                    Vereinbaren Sie einen Termin
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export const About = () => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Meta
        title="Über uns - GNIW"
        description="Erfahren Sie hier mehr über das Unternehmen und Geschäftsmodell der GNIW Gesellschaft für Nachhaltige Immobilienwirtschaft mbH."
        canonical="https://gniw.de/uber-die-gniw/ "
      />
      <NavHeader />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default About;
