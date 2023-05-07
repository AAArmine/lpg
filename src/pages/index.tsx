import { GetStaticProps } from 'next';

import { getDomainInfos, getFaqs } from '../lib/cms';
import { Base } from '../templates/Base';

const Index = (staticProps: any) => <Base {...staticProps} />;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const [domainInfos, faqs] = await Promise.all([
      getDomainInfos(),
      getFaqs(),
    ]);

    return {
      props: { domainInfos, faqs },
    };
  } catch {
    /* */
  }

  return {
    props: { domainInfos: [], faqs: [] },
    revalidate: 2 * 60 * 60, // revalidate in two hours
  };
};

export default Index;
