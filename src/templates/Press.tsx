/* eslint-disable react/display-name */
import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Loader from '../layout/Loader';

import { ExternalLinkIcon } from '@heroicons/react/outline';
import slugify from '@sindresorhus/slugify';
import { Section } from '../layout/Section';
import { Article, DomainInfo } from '../lib/cms/types';
import { toGermanDate } from '../lib/utils';

const NavHeader = dynamic(() => import('../navigation/NavHeader'), {
  loading: () => <Loader />,
});
const Footer = dynamic(() => import('./Footer'), {
  loading: () => <Loader />,
});
const Meta = dynamic(() => import('../layout/Meta'), {
  loading: () => <Loader />,
});

type PressSectionProps = {
  articles: Article[];
};

export const PressSection = (props: PressSectionProps) => {
  return (
    <Section yPadding="py-16">
      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Presse
            </h2>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {props?.articles.map((article) => (
              <div
                key={article.title}
                className="flex flex-col rounded-lg shadow-lg overflow-hidden"
              >
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-contain"
                    src={article.pressLogo.url}
                    alt=""
                  />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <Link
                      href={
                        article.url
                          ? article.url
                          : `/presse/${slugify(article.title)}`
                      }
                      prefetch={false}
                    >
                      <a
                        className="block mt-2"
                        rel={article.url ? 'nofollow' : ''}
                      >
                        <p className="text-xl font-bold tracking-tight text-primary-500">
                          {article.title}{' '}
                          {article.url && (
                            <ExternalLinkIcon className="inline h-5 w-5" />
                          )}
                        </p>
                      </a>
                    </Link>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex text-base text-gray-500">
                      <time dateTime={article.date}>
                        {toGermanDate(article.date)}
                      </time>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

type PressProps = {
  domainInfos: DomainInfo[];
  articles: Article[];
};
export const Press = (props: PressProps) => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Meta
        title="Presse und Neuigkeiten von GNIW"
        description="Hier finden Sie alle Pressebeiträge ✓ Pressemittteilungen ✚ Erwähnungen aus der Presse von der GNIW Gesellschaft für Nachhaltige Immobilienwirtschaft mbH."
        canonical="https://gniw.de/presse/ "
      />
      <NavHeader domainInfos={props.domainInfos} />
      <PressSection articles={props.articles} />
      <Footer />
    </div>
  );
};

export default Press;
