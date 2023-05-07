/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';

import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';
import Head from 'next/head';
import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { FAQ } from '../lib/cms/types';
import { useTranslations } from '../locale';

interface FaqProps {
  faqs: Array<FAQ>;
  title?: React.ReactNode;
}

export const Faq: React.FC<FaqProps> = ({ faqs, title }) => (
  <Background color="bg-white">
    <Section yPadding="py-12" id="faq">
      <FaqSection faqs={faqs} title={title} />
    </Section>
  </Background>
);

interface FaqEntity {
  '@type': 'Question';
  name: string;
  acceptedAnswer: {
    '@type': 'Answer';
    text: string;
  };
}

const toSchemaData = (faqs: Array<FAQ>) => {
  const faqsEntity: Array<FaqEntity> = faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.answer,
    },
  }));

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqsEntity,
  };
};

const FaqSection: React.FC<{ faqs: Array<FAQ>; title: React.ReactNode }> = ({
  faqs,
  title,
}) => (
  <div className="">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto divide-y-2 divide-gray-200">
        <h2 className="text-center text-3xl font-extrabold text-primary-900 sm:text-4xl">
          {/* eslint-disable-next-line react-hooks/rules-of-hooks */}
          {title || useTranslations()('faqTitle')}
        </h2>
        <FaqList faqs={faqs} />
      </div>
    </div>
  </div>
);

export const FaqList: React.FC<{ faqs: Array<FAQ> }> = ({ faqs }) => (
  <>
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(toSchemaData(faqs)),
        }}
      />
    </Head>
    <dl className="mt-8 space-y-6 divide-y divide-gray-200">
      {faqs.map((faq) => (
        <Disclosure as="div" key={faq.question} className="pt-6">
          {({ open }) => (
            <>
              <dt className="">
                <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-500">
                  <span className="text-2xl font-bold text-gray-900">
                    {faq.question}
                  </span>
                  <span className="ml-6 h-7 flex items-center">
                    <ChevronDownIcon
                      className={classNames(
                        open ? '-rotate-180' : 'rotate-0',
                        'h-6 w-6 transform'
                      )}
                      aria-hidden="true"
                    />
                  </span>
                </Disclosure.Button>
              </dt>
              <Disclosure.Panel as="dd" className="mt-2 pr-12">
                <p className="text-xl text-gray-800">
                  {faq.answer.split(/\n/).map((line, i) =>
                    i === 0 ? (
                      line
                    ) : (
                      <>
                        {line}
                        <br />
                      </>
                    )
                  )}
                </p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </dl>
  </>
);

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

export default Faq;
