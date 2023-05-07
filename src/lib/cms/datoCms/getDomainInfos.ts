import { DomainInfo } from '../types';
import { datoCmsClient } from './datoCmsClient';

const DOMAINS_QUERY = `query DomainsQuery {
	allDomains {
    domainName
    phoneNumber
  }
}
`;

export const getDomainInfos = async (): Promise<DomainInfo[]> =>
  datoCmsClient({
    query: DOMAINS_QUERY,
    preview: process.env.NODE_ENV === 'development',
  }).then(({ allDomains }) => allDomains);
