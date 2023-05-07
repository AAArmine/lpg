import React from 'react';

import Doris from '../../public/assets/images/doris.webp';
import Heinrich from '../../public/assets/images/heinrich.webp';
import Inge from '../../public/assets/images/inge.webp';
import { Background } from '../background/Background';
import { Section } from '../layout/Section';

const TestimonialSection = () => {
  return (
    <section className="bg-primary-500 py-12 sm:py-16 lg:pt-16">
      <h2 className="text-center text-3xl lg:text-4xl font-bold text-white my-8">
        Erfahrungen und zufriedene Kundenstimmen mit GNIW
      </h2>
      <div className="max-w-7xl mx-auto md:grid md:grid-cols-3 md:px-6 lg:px-8">
        <div className="py-4 px-4 sm:px-6 md:flex md:flex-col md:pl-0 md:pr-10 md:border-r border-primary-300">
          <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
            <div className="text-center">
              <div className="flex-shrink-0 inline-flex rounded-full border-2 border-white">
                <img
                  className="h-48 w-48 rounded-full"
                  src={Inge.src}
                  alt="Inge S."
                />
              </div>
              <div className="mt-2 mb-10">
                <div className="text-xl font-bold text-white">
                  Inge S. (80) aus Ulm
                </div>
              </div>
            </div>
            <div className="relative text-lg font-medium text-white md:flex-grow">
              <svg
                className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-primary-400"
                fill="currentColor"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="relative tracking-tight">
                Meine Kinder sind lange aus dem Haus und gut versorgt. Jetzt
                muss ich an meine Zukunft denken: Das lebenslange Mietrecht der
                GNIW gibt mir Sicherheit. Wenn ich einmal nicht mehr so mobil
                wie heute sein sollte, kann ich mir durch das Geld aus dem
                Verkauf eine altersgerechte Wohnung leisten. Meinen Mietvertrag
                brauche ich dann nur zu kündigen.
              </p>
            </div>
          </blockquote>
        </div>
        <div className="py-4 px-4 sm:px-6 md:flex md:flex-col md:border-r border-primary-300 border-t-2 md:border-t-0">
          <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
            <div className="text-center">
              <div className="flex-shrink-0 inline-flex rounded-full border-2 border-white">
                <img
                  className="h-48 w-48 rounded-full"
                  src={Heinrich.src}
                  alt="Heinrich D."
                />
              </div>
              <div className="mt-2 mb-4">
                <div className="text-xl font-bold text-white">
                  Heinrich D. (77) aus Münster
                </div>
              </div>
            </div>
            <div className="relative text-lg font-medium text-white md:flex-grow">
              <svg
                className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-primary-400"
                fill="currentColor"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="relative tracking-tight">
                Ich besitze seit über 30 Jahren eine tolle Eigentumswohnung.
                Aber weil meine Rente sehr gering ist, musste ich trotzdem aufs
                Geld gucken. Durch die GNIW bin ich endlich in einer Situation,
                in der ich mich nicht mehr einschränken muss.
              </p>
            </div>
          </blockquote>
        </div>
        <div className="py-4 px-4 border-t-2 md:border-primary-700 sm:px-6 md:pr-0 md:pl-10 md:border-t-0">
          <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
            <div className="text-center">
              <div className="flex-shrink-0 inline-flex rounded-full border-2 border-white">
                <img
                  className="h-48 w-48 rounded-full"
                  src={Doris.src}
                  alt="Doris Z."
                />
              </div>
              <div className="mt-2 mb-10">
                <div className="text-xl font-bold text-white">
                  Doris Z. (69) aus Halle
                </div>
              </div>
            </div>
            <div className="relative text-lg font-medium text-white md:flex-grow">
              <svg
                className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-primary-400"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="relative tracking-tight">
                Mein Mann und ich wollten auf eine Situation vorbereitet sein,
                in der wir auf professionelle Pflege angewiesen sind. Durch den
                Vertrag mit der GNIW wohnen wir weiter zuhause, können uns aber
                auch eine gute und fürsorgliche Betreuung leisten.
              </p>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export const Testimonials = () => {
  return (
    <Background color="bg-primary-500">
      <Section yPadding="py-6" id="kundenstimmen">
        <TestimonialSection />
      </Section>
    </Background>
  );
};

export default Testimonials;
