/* eslint-disable react/display-name */
import React from 'react';
import dynamic from 'next/dynamic';
import Loader from '../../layout/Loader';
import LogoCloud from '../LogoCloud';
import HamburgerLogo from '../../../public/assets/images/Hamburger-abendblatt.webp';
import FAZLogo from '../../../public/assets/images/FAZ-Logo.webp';
import RbbInfoRadioLogo from '../../../public/assets/images/RbbInforadio-Logo.webp';
import WirtschaftsWocheLogo from '../../../public/assets/images/WirtschaftsWoche-Logo.webp';
import AssCompactLogo from '../../../public/assets/images/AssCompact-Logo.svg';
import CapitalLogo from '../../../public/assets/images/Capital-Logo.webp';
import FinanceFwdLogo from '../../../public/assets/images/FinanceFwd-Logo.svg';
import FinanzweltLogo from '../../../public/assets/images/Finanzwelt-Logo.png';
import HandelsblattLogo from '../../../public/assets/images/Handelsblatt-Logo.png';
import { SaleWithResidenceSection } from './SaleWithResidenceSection';
import { Contact } from '../Contact';
import { Infos, RealEstateInfos, SalesFAQs } from '../../lib/cms/types';
import TrustPilotWidget from '../TrustPilotWidget';

const CallUs = dynamic(() => import('./CallUs'), {
  loading: () => <Loader />,
});
const AboutSec = dynamic(() => import('./AboutSec'), {
  loading: () => <Loader />,
});
const HowFunctions = dynamic(() => import('./HowFunctions'), {
  loading: () => <Loader />,
});
const Obligations = dynamic(() => import('./Obligations'), {
  loading: () => <Loader />,
});
const RentalSales = dynamic(() => import('./RentalSales'), {
  loading: () => <Loader />,
});
const HouseSale = dynamic(() => import('./HouseSale'), {
  loading: () => <Loader />,
});
const Functions = dynamic(() => import('./Functions'), {
  loading: () => <Loader />,
});
const BottomImg = dynamic(() => import('./BottomImg'), {
  loading: () => <Loader />,
});
const FaqSecContainer = dynamic(() => import('./FaqSecContainer'), {
  loading: () => <Loader />,
});
const Calculator = dynamic(() => import('../Calculator'), {
  loading: () => <Loader />,
});
const HouseSaleGniw = dynamic(() => import('./HouseSaleGniw'), {
  loading: () => <Loader />,
});
const BenefitsSec = dynamic(() => import('./BenefitsSec'), {
  loading: () => <Loader />,
});
const TrustPilotCarousel = dynamic(() => import('../TrustPilotCarousel'), {
  loading: () => <Loader />,
  ssr: false,
});
// import { TestimonialsSec } from './TestimonialsSec';

const press = [
  { name: 'Spiegel', logo: HamburgerLogo },
  { name: 'FAZ', logo: FAZLogo },
  { name: 'RBB Inforadio', logo: RbbInfoRadioLogo },
  { name: 'WirtschaftsWoche', logo: WirtschaftsWocheLogo },
  { name: 'AssCompact', logo: AssCompactLogo },
  { name: 'Capital', logo: CapitalLogo },
  { name: 'Finance Fwd', logo: FinanceFwdLogo },
  { name: 'Finanzewelt', logo: FinanzweltLogo },
  { name: 'Handelsblatt', logo: HandelsblattLogo },
];
type BaseProps = {
  infos: Infos[];
  realEstateInfo: RealEstateInfos[];
  salesFAQs: SalesFAQs[];
};

const SaleWithResidenceTemplate = ({
  infos,
  realEstateInfo,
  salesFAQs,
}: BaseProps) => {
  return (
    <div>
      <SaleWithResidenceSection>
        <AboutSec info={infos && infos[0]} />
      </SaleWithResidenceSection>
      <SaleWithResidenceSection>
        <HowFunctions info={infos && infos[1]} />
      </SaleWithResidenceSection>
      <SaleWithResidenceSection>
        <Obligations info={infos && infos[2]} />
      </SaleWithResidenceSection>
      <SaleWithResidenceSection>
        <div className="sec-content-container calc max-w-7xl mx-auto px-4 sm:px-6 pb-24">
          <Calculator
            title="Unser Hausverkauf mit Wohnrecht - Rechner"
            showOptionsTitle={true}
          />
        </div>
      </SaleWithResidenceSection>
      <SaleWithResidenceSection>
        <CallUs />
      </SaleWithResidenceSection>
      <SaleWithResidenceSection>
        <LogoCloud title="Bekannt aus" images={press} />
      </SaleWithResidenceSection>
      <SaleWithResidenceSection>
        <HouseSale info={infos && infos[3]} />
      </SaleWithResidenceSection>
      <SaleWithResidenceSection>
        <HouseSaleGniw info={infos && infos[4]} />
      </SaleWithResidenceSection>
      <SaleWithResidenceSection>
        <BenefitsSec />
      </SaleWithResidenceSection>
      <SaleWithResidenceSection>
        <Functions info={infos && infos[5]} />
      </SaleWithResidenceSection>
      <SaleWithResidenceSection>
        <TrustPilotCarousel />
      </SaleWithResidenceSection>
      <SaleWithResidenceSection>
        <FaqSecContainer salesFAQs={salesFAQs} />
      </SaleWithResidenceSection>
      <SaleWithResidenceSection>
        <RentalSales realEstateInfo={realEstateInfo} />
      </SaleWithResidenceSection>
      <SaleWithResidenceSection>
        <Contact />
      </SaleWithResidenceSection>
      <SaleWithResidenceSection>
        <BottomImg />
      </SaleWithResidenceSection>
      <TrustPilotWidget customStyles="trust-info" hideTrust="xl:block" />
    </div>
  );
};

export default SaleWithResidenceTemplate;
