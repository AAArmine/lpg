import React from 'react';
import Hero from '../../../public/assets/images/partSale/sec8.webp';
import HeroMob from '../../../public/assets/images/partSale/mob/mob_sec8.webp';

const CapitalInvestment = () => {
  return (
    <div id="investment-container" className="pb-24">
      <div className="sec-howFunctions-grid">
        <div className="sec-howFunctions-relContent">
          <div className="houseSaleAbs sm:px-6">
            <h2 className="sec-main-title">
              Vermietete Wohnimmobilien taugen nur zur Kapitalanlage
            </h2>
            <p className="text-lg text-gray-700 pt-2">
              Der wohl wichtigste Grund dafür, dass vermietete Wohnimmobilien am
              Transaktionsmarkt weniger wert sind als unvermietete, liegt daran,
              dass vermietete Objekte in Deutschland beinahe ausschließlich zur
              Kapitalanlage in Betracht kommen. Grund dafür ist der strenge
              Mieterschutz, der zudem in den vergangenen Jahren weiter
              verschärft worden ist. So ist die Eigenbedarfskündigung von
              Mietverträgen heutzutage kaum mehr möglich. Wer also eine
              Wohnimmobilie mit einem Mieter kauft, erwirbt nicht nur die
              Immobilie, sondern übernimmt auch den Mietvertrag. Denn es gilt
              der Grundsatz: Kauf bricht nicht Miete. Die Folge für den
              Immobilienmarkt und die Nachfrage nach vermieteten Wohnungen ist
              klar. Da Selbstnutzer als potenzielle Käufer von Vornherein als
              Kaufinteressenten wegfallen, sinkt die Anzahl der möglichen Käufer
              erheblich - und aufgrund der sinkenden Nachfrage damit auch der
              Preis.
            </p>
          </div>
        </div>
        <div className="w-full sec-houseSale-img">
          <picture>
            <source media="(min-width:768px)" srcSet={Hero.src} />
            <img
              src={HeroMob.src}
              alt="Vermietete Wohnimmobilien taugen nur zur Kapitalanlage"
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default CapitalInvestment;
