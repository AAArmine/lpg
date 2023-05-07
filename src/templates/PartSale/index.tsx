/* eslint-disable react/display-name */
import React from 'react';
import dynamic from 'next/dynamic';
import Loader from '../../layout/Loader';
import { Contact } from '../Contact';
import TrustPilotWidget from '../TrustPilotWidget';

const AboutSec = dynamic(() => import('./AboutSec'), {
  loading: () => <Loader />,
});

const ForSellers = dynamic(() => import('./ForSellers'), {
  loading: () => <Loader />,
});

const PartSaleSection = dynamic(() => import('./PartSaleSection'), {
  loading: () => <Loader />,
});

const PartialSaleBenefits = dynamic(() => import('./PartialSaleBenefits'), {
  loading: () => <Loader />,
});

const PartialSaleSteps = dynamic(() => import('./PartialSaleSteps'), {
  loading: () => <Loader />,
});

const SuitableSec = dynamic(() => import('./SuitableSec'), {
  loading: () => <Loader />,
});

const WhoBenefits = dynamic(() => import('./WhoBenefits'), {
  loading: () => <Loader />,
});

const AlternativeSec = dynamic(() => import('./AlternativeSec'), {
  loading: () => <Loader />,
});

const BenefitsSec = dynamic(() => import('./BenefitsSec'), {
  loading: () => <Loader />,
});

const FaqSection = dynamic(() => import('./FaqSection'), {
  loading: () => <Loader />,
});

const Steps = dynamic(() => import('./Steps'), {
  loading: () => <Loader />,
});

const PartSaleBottom = dynamic(() => import('./PartSaleBottom'), {
  loading: () => <Loader />,
});

const CallUs = dynamic(() => import('../SaleWithResidence/CallUs'), {
  loading: () => <Loader />,
});

const Calculator = dynamic(() => import('../Calculator'), {
  loading: () => <Loader />,
});
const TrustPilotCarousel = dynamic(() => import('../TrustPilotCarousel'), {
  loading: () => <Loader />,
  ssr: false,
});
const PartSaleTemplate = () => {
  return (
    <>
      <PartSaleSection>
        <AboutSec />
      </PartSaleSection>
      <PartSaleSection>
        <WhoBenefits />
      </PartSaleSection>
      <PartSaleSection>
        <ForSellers />
      </PartSaleSection>
      <PartSaleSection>
        <PartialSaleSteps />
      </PartSaleSection>
      <PartSaleSection>
        <SuitableSec />
      </PartSaleSection>
      <PartSaleSection>
        <PartialSaleBenefits />
      </PartSaleSection>
      <PartSaleSection>
        <AlternativeSec />
      </PartSaleSection>
      <PartSaleSection>
        <div className="sec-content-container calc max-w-7xl mx-auto px-4 sm:px-6">
          <Calculator
            title="Berechnen Sie den Wert Ihrer Immobilie"
            showOptionsTitle={false}
          />
        </div>
      </PartSaleSection>
      <PartSaleSection>
        <BenefitsSec />
      </PartSaleSection>
      <PartSaleSection>
        <Steps />
      </PartSaleSection>
      <PartSaleSection>
        <CallUs />
      </PartSaleSection>
      <PartSaleSection>
        <TrustPilotCarousel />
      </PartSaleSection>
      <PartSaleSection>
        <FaqSection />
      </PartSaleSection>
      <PartSaleSection>
        <Contact />
      </PartSaleSection>
      <PartSaleSection>
        <PartSaleBottom />
      </PartSaleSection>
      <TrustPilotWidget customStyles="trust-info" hideTrust="xl:block" />
    </>
  );
};

export default PartSaleTemplate;
