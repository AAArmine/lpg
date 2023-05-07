import slugify from '@sindresorhus/slugify';
import { GetStaticPaths, GetStaticProps } from 'next';

import { getDomainInfos, getArticles } from '../../lib/cms';
import { Article, DomainInfo } from '../../lib/cms/types';
import { ArticleTemplate } from '../../templates/Article';

type ArticleProps = {
  article: Article;
  domainInfos: DomainInfo[];
};

export const ArticlePage = (props: ArticleProps) => (
  <ArticleTemplate article={props.article} domainInfos={props.domainInfos} />
);

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = await getArticles();
  // select articles which don't have a URL associated, but instead have images attached
  const selfhosted = articles.filter(
    (article) => !article.url && article.images && article.images.length > 0
  );
  const arr: string[] = selfhosted.map((article) => article.title);
  const paths = arr.map((title) => {
    return {
      params: { id: slugify(title) },
    };
  });
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const domainInfos = await getDomainInfos();
  const articles = await getArticles();
  const article = articles.find((a) => slugify(a.title) === params.id);
  return {
    props: { domainInfos, article },
  };
};

export default ArticlePage;
