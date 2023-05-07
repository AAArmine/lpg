import React from 'react';

import { GetStaticProps } from 'next';

import { getArticles, getDomainInfos } from '../../lib/cms';
import { Press } from '../../templates/Press';

const Presse = ({ domainInfos, articles }: any) => (
  <Press domainInfos={domainInfos} articles={articles} />
);

export const getStaticProps: GetStaticProps = async () => {
  const domainInfos = await getDomainInfos();
  const articles = await getArticles();
  return {
    props: { domainInfos, articles },
    revalidate: 2 * 60 * 60, // revalidate in two hours
  };
};

export default Presse;
