import React from 'react';
import Hero from '../../../public/assets/images/partSale/sec13.webp';
import HeroMob from '../../../public/assets/images/partSale/mob/mob_sec13.webp';

const SaleWithUs = () => {
  return (
    <div id="saleWithUs-container">
      <div className="sec-content-container max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        <div className="sec-about-first-grid">
          <div className="sec-obligations-img">
            <picture>
              <source media="(min-width:768px)" srcSet={Hero.src} />
              <img
                src={HeroMob.src}
                alt="Immobilien-Teilverkauf mit der GNIW"
              />
            </picture>
          </div>
          <div className="sec-about-item-first-content">
            <h2 className="sec-main-title">
              Immobilien-Teilverkauf mit der GNIW
            </h2>
            <p className="mt-2 text-lg text-gray-700 pt-2 line-height-and-padding-content">
              Sie möchten mehr finanzielle Freiheit und trotzdem ihre Wohnung
              oder Ihr Haus nicht verlassen, Der Teilverkauf einer Immobilie an
              die GNIW macht genau das möglich. Sie verkaufen bis zu 50, Ihrer
              Immobilie und bekommen umgehend den kompletten vereinbarten
              Kaufpreis. Dabei übernimmt die GNIW im gesamten Prozess sämtliche
              Kosten. Zeitgleich erhalten Sie ein Mietrecht auf Lebenszeit -
              bzw. bis zu dem Zeitpunkt wann Sie ausziehen wollen. Dadurch
              erhalten Sie die komplette Flexibilität. Mieterhöhungen sind
              langfristig ausgeschlossen, zudem übernimmt die GNIW sämtliche
              Instandhaltungsarbeiten. Für Sie also ein abgesichertes
              Rundum-sorglos-Paket.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleWithUs;
