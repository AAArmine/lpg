import { Article } from '../types';
import { datoCmsClient } from './datoCmsClient';

const ARTICLES_QUERY = `query ArticlesQuery {
  allArticles(first: 100) {
    date
    title
    pressLogo {
      url
    }
    images {
      url
    }
    url
  }
}`;

export const getArticles = async (): Promise<Article[]> =>
  datoCmsClient({
    query: ARTICLES_QUERY,
    preview: process.env.NODE_ENV === 'development',
  }).then(({ allArticles }) => allArticles);
