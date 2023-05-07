/* eslint-disable react/display-name */
import dynamic from 'next/dynamic';
import React from 'react';
import Loader from '../layout/Loader';

const Footer = dynamic(() => import('./Footer'), {
  loading: () => <Loader />,
});
const Meta = dynamic(() => import('../layout/Meta'), {
  loading: () => <Loader />,
});
const NavHeader = dynamic(() => import('../navigation/NavHeader'), {
  loading: () => <Loader />,
});

const SaleWithResidenceLayout: React.FC = (props: any) => {
  const { children, ...seo } = props;
  const { description, title } = seo[0].seo;
  return (
    <div className="flex flex-col h-screen justify-between">
      <Meta
        title={title}
        description={description}
        canonical="https://gniw.de/hausverkauf-mit-wohnrecht/"
      />
      <NavHeader />
      {children}
      <Footer />
    </div>
  );
};

export default SaleWithResidenceLayout;
