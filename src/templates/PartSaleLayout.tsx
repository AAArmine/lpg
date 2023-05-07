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

const PartSaleLayout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Meta
        title="Immobilien Teilverkauf - Das müssen Sie wissen - gniw.de"
        description="Teilverkauf der eigenen Immobilie erklärt ✓ Eigenheim zum Marktpreis verkaufen und lebenslang weiter bewohnen mit der GNIW ➤ Jetzt kostenlos anfragen."
        canonical="https://gniw.de/teilverkauf-immobilie"
      />
      <NavHeader />
      {children}
      <Footer />
    </div>
  );
};

export default PartSaleLayout;
