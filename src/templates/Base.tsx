/* eslint-disable react/display-name */
import React from 'react';
import Script from 'next/script';
import dynamic from 'next/dynamic';
import Loader from '../layout/Loader';

import AssCompactLogo from '../../public/assets/images/AssCompact-Logo.svg';
import BskImmobilienLogo from '../../public/assets/images/BskImmobilien-Logo.svg';
import CapitalLogo from '../../public/assets/images/Capital-Logo.webp';
import FAZLogo from '../../public/assets/images/FAZ-Logo.webp';
import FinanceFwdLogo from '../../public/assets/images/FinanceFwd-Logo.svg';
import FinanzweltLogo from '../../public/assets/images/Finanzwelt-Logo.png';
import HamburgerVolksbankImmobilienLogo from '../../public/assets/images/HamburgerVolksbankImmobilien-Logo.webp';
import HandelsblattLogo from '../../public/assets/images/Handelsblatt-Logo.png';
import ImmobilienScout24Logo from '../../public/assets/images/ImmobilienScout24-Logo.webp';
import PlanetHomeLogo from '../../public/assets/images/PlanetHome-Logo.webp';
import RbbInfoRadioLogo from '../../public/assets/images/RbbInforadio-Logo.webp';
import HamburgerLogo from '../../public/assets/images/Hamburger-abendblatt.webp';
import WirtschaftsWocheLogo from '../../public/assets/images/WirtschaftsWoche-Logo.webp';

import { DomainInfo, FAQ } from '../lib/cms/types';

import { AppConfig } from '../utils/AppConfig';
import { Contact } from './Contact';
// import TrustPilotCarousel from './TrustPilotCarousel';

const Meta = dynamic(() => import('../layout/Meta'), {
  loading: () => <Loader />,
});
const NavHeader = dynamic(() => import('../navigation/NavHeader'), {
  loading: () => <Loader />,
});
const Faq = dynamic(() => import('./Faq'), {
  loading: () => <Loader />,
});
const FeatureSelection = dynamic(() => import('./FeatureSelection'), {
  loading: () => <Loader />,
});
const Footer = dynamic(() => import('./Footer'), {
  loading: () => <Loader />,
});
const Hero = dynamic(() => import('./Hero'), {
  loading: () => <Loader />,
});
const LogoCloud = dynamic(() => import('./LogoCloud'), {
  loading: () => <Loader />,
});

const Process = dynamic(() => import('./Process'), {
  loading: () => <Loader />,
});
const TrustPilotCarousel = dynamic(() => import('./TrustPilotCarousel'), {
  loading: () => <Loader />,
  ssr: false,
});
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

const partner = [
  { name: 'bsk Immobilien', logo: BskImmobilienLogo },
  { name: 'PlanetHome', logo: PlanetHomeLogo },
  { name: 'Immobilienscout24', logo: ImmobilienScout24Logo },
  {
    name: 'Hamburger Volksbank Immobilien',
    logo: HamburgerVolksbankImmobilienLogo,
  },
];

type BaseProps = {
  domainInfos?: DomainInfo[];
  faqs: Array<FAQ>;
};

const Base = (props: BaseProps) => (
  <>
    <Script
      id="adcell"
      src="https://t.adcell.com/js/trad.js"
      onLoad={() => {
        // @ts-ignore
        Adcell.Tracking.track();
      }}
      strategy="lazyOnload"
    />
    <div className="antialiased text-gray-600">
      <Meta
        title={AppConfig.title}
        description={AppConfig.description}
        canonical={AppConfig.canonical}
      />
      <NavHeader domainInfos={props.domainInfos} />
      <Hero />
      <LogoCloud title="Bekannt aus" images={press} showTrust={true} />
      <FeatureSelection />
      {/* <Testimonials /> */}
      <TrustPilotCarousel />
      <Faq faqs={props.faqs} />
      <LogoCloud title="Partner" images={partner} />
      <Process />
      <Contact />
      <Footer />
    </div>
  </>
);

export { Base };
