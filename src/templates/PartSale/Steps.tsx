import React from 'react';
// import Icon1 from '../../../public/assets/images/partSale/Capture1.webp';
import { RequestOffer } from './Icons/RequestOffer';
import { ExpertOpinion } from './Icons/ExpertOpinion';
import { HomeView } from './Icons/HomeView';
import { BindingPurchase } from './Icons/BindingPurchase';
import { NotarialContract } from './Icons/NotarialContract';
import { PaymentPurchase } from './Icons/PaymentPurchase';
import Link from 'next/link';
import { useRouter } from 'next/router';

const RentalSalesItems = [
  {
    title: 'Kostenloses und persönliches Angebot anfordern',
    number: 1,
    img: <RequestOffer />,
  },
  {
    title: 'Erstellung des unverbindlichen Gutachtens durch die GNIW',
    number: 2,
    img: <ExpertOpinion />,
  },
  {
    title: 'Persönlicher Besichtigungstermin bei Ihnen zu Hause',
    number: 3,
    img: <HomeView />,
  },
  {
    title: 'Personalisiertes und verbindliches Kauf- und Mietangebot',
    number: 4,
    img: <BindingPurchase />,
  },
  {
    title: 'Notarieller Vertragsabschluss bei erfolgreicher Angebotsannahme',
    number: 5,
    img: <NotarialContract />,
  },
  {
    title: 'Sofortauszahlung des vollständigen Kaufpreises',
    number: 6,
    img: <PaymentPurchase />,
  },
];

const Steps = () => {
  const router = useRouter();
  // eslint-disable-next-line unused-imports/no-unused-vars
  const { ctype, ...routerQuery } = router.query;
  const contactOfferUrl = `?${new URLSearchParams({
    ...routerQuery,
    ctype: 'offer',
  }).toString()}#kontakt`;
  const contactInfoUrl = `?${new URLSearchParams({
    ...routerQuery,
    ctype: 'information',
  }).toString()}#kontakt`;

  return (
    <div className="steps-container text-center sec-content-container max-w-7xl mx-auto px-4 sm:px-6 pb-24 pt-24">
      <h2 className="sec-main-title">
        Immobilienverkauf an die GNIW in 6 einfachen Schritten
      </h2>
      <ol className="rentalSales-grid">
        {RentalSalesItems.map((item, index) => (
          <li className="rentalSales-grid-item rs-item mt-8" key={index}>
            <div className="steps-grid">
              <h3>{item.title}</h3>
              <div className="steps-icon-cont">
                {/* <img src={item.img.src} alt="" /> */}
                {item.img}
              </div>
            </div>

            <div className="grid-item-abs">{item.number}</div>
          </li>
        ))}
      </ol>
      <div className="step-buttons-grid pt-10">
        <Link href={contactInfoUrl}>
          <a className="step-btn step-btn-lighter">Infomaterial anfordern</a>
        </Link>
        <Link href={contactOfferUrl}>
          <a className="step-btn step-btn-darker">Angebot anfordern</a>
        </Link>
      </div>
    </div>
  );
};

export default Steps;
