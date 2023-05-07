/* eslint-disable react/display-name */
import React from 'react';
import dynamic from 'next/dynamic';
import Loader from '../layout/Loader';

const PartSaleTemplate = dynamic(() => import('../templates/PartSale'), {
  loading: () => <Loader />,
});
const PartSaleLayout = dynamic(() => import('../templates/PartSaleLayout'), {
  loading: () => <Loader />,
});

const LandingPage = () => {
  return (
    <PartSaleLayout>
      <PartSaleTemplate />
    </PartSaleLayout>
  );
};

export default LandingPage;
