/* eslint-disable react/display-name */
import { useRouter } from 'next/router';
import React from 'react';
import dynamic from 'next/dynamic';
import Loader from '../../layout/Loader';

import { Section } from '../../layout/Section';
import { Article, DomainInfo } from '../../lib/cms/types';
import { toGermanDate } from '../../lib/utils';
import { AppConfig } from '../../utils/AppConfig';
import { isPdf } from './isPdf';
import { Image as ArticleImage } from './Image';
import { Pdf as ArticlePdf } from './Pdf';

const Meta = dynamic(() => import('../../layout/Meta'), {
  loading: () => <Loader />,
});
const NavHeader = dynamic(() => import('../../navigation/NavHeader'), {
  loading: () => <Loader />,
});
const Footer = dynamic(() => import('../Footer'), {
  loading: () => <Loader />,
});

type ArticleSectionProps = {
  article: Article;
};

export const ArticleSection = (props: ArticleSectionProps) => {
  return (
    <Section id="article" yPadding="py-16">
      <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
        <div className="relative max-w-7xl mx-auto">
          <h1>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {props.article.title}
            </span>
          </h1>
          <p className="text-center text-gray-600 mb-8">
            {toGermanDate(props.article.date)}
          </p>
          {props.article.images.map((image, i) =>
            isPdf(image.url) ? (
              <ArticlePdf key={i} url={image.url} />
            ) : (
              <ArticleImage
                key={i}
                url={image.url}
                title={props.article.title}
              />
            )
          )}
        </div>
      </div>
    </Section>
  );
};

type ArticleProps = {
  article: Article;
  domainInfos: DomainInfo[];
};

export const ArticleTemplate = (props: ArticleProps) => {
  const router = useRouter();
  return (
    <div className="flex flex-col h-screen justify-between">
      <Meta
        title={`${props.article.title} ⇒ Presse - gniw.de`}
        description={AppConfig.description}
        canonical={`${AppConfig.canonical}${router.asPath}`}
      />
      <NavHeader domainInfos={props.domainInfos} />
      <ArticleSection article={props.article} />
      <Footer />
    </div>
  );
};

export default ArticleTemplate;
