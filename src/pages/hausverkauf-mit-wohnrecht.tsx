/* eslint-disable react/display-name */
import React from 'react';
import dynamic from 'next/dynamic';
import Loader from '../layout/Loader';
import { GetStaticProps } from 'next';
import {
  getRealEstateSales,
  getSalesFAQs,
  getHouseSaleInfo,
  getHouseSaleMeta,
} from '../lib/cms';

const SaleWithResidenceLayout = dynamic(
  () => import('../templates/SaleWithResidenceLayout'),
  { loading: () => <Loader /> }
);
const SaleWithResidenceTemplate = dynamic(
  () => import('../templates/SaleWithResidence'),
  { loading: () => <Loader /> }
);

const SaleWithResidence = (staticProps: any) => {
  // eslint-disable-next-line no-console
  const { salesSEO, ...Others } = staticProps;
  return (
    <SaleWithResidenceLayout {...salesSEO}>
      <SaleWithResidenceTemplate {...Others} />
    </SaleWithResidenceLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const [infos, realEstateInfo, salesFAQs, salesSEO] = await Promise.all([
      getHouseSaleInfo(),
      getRealEstateSales(),
      getSalesFAQs(),
      getHouseSaleMeta(),
    ]);
    return {
      props: { infos, realEstateInfo, salesFAQs, salesSEO },
    };
  } catch {
    /* */
  }

  return {
    props: { infos: [], realEstateInfo: [], salesFAQs: [], salesSEO: [] },
  };
};

export default SaleWithResidence;
