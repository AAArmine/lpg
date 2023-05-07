import { GetStaticProps } from 'next';

import { getDomainInfos } from '../lib/cms';
import { DomainInfo } from '../lib/cms/types';
import { Termin as TerminTemplate } from '../templates/Termin';

const Termin: React.FC<{ domainInfos: DomainInfo[] }> = ({ domainInfos }) => (
  <TerminTemplate domainInfos={domainInfos} />
);

export const getStaticProps: GetStaticProps = async () => {
  const domainInfos = await getDomainInfos();
  return {
    props: { domainInfos },
  };
};

export default Termin;
