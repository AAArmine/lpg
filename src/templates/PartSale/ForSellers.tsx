import React from 'react';
import Hero from '../../../public/assets/images/partSale/teilverkauf-haus.webp';
import HeroMob from '../../../public/assets/images/partSale/mob/teilverkauf-haus.webp';

const ForSellers = () => {
  return (
    <div className="sec-forSellers-third-container sec-content-container max-w-7xl mx-auto px-4 sm:px-6 pb-24">
      <div className="sec-about-first-grid">
        <div className="sec-about-item-first-content">
          <h2 className="sec-main-title">
            Für die Verkäufer bleibt fast alles wie gehabt
          </h2>
          <p className="mt-2 text-lg text-gray-700 pt-2 line-height-and-padding-content">
            Einer der größten Vorteile am Teilverkauf ist die Tatsache, dass die
            Verkäufer in ihrem Haus weiterhin leben können. Für sie ändert sich
            nach dem Teilverkauf fast nichts, außer die Tatsache, dass sie eine
            anteilige Miete – oft auch monatliches Nutzungsentgelt genannt – an
            den Käufer als stillen Teilhaber bezahlen. Die Teilverkäufer müssen
            weiterhin allein für die Instandhaltung der gesamten Immobilie
            aufkommen. Ansonsten werden sie vom (Teil-)Käufer der Immobilie
            nicht viel wahrnehmen und können bei Umbauten und Renovierungen ohne
            Einschränkungen handeln. Gleichzeitig bleibt der Erlös aus dem
            Teilverkauf, mit dem die Verkäufer ihren Lebensstandard halten oder
            sogar heben können.
          </p>
        </div>

        <div className="sec-obligations-img">
          <picture>
            <source media="(min-width:768px)" srcSet={Hero.src} />
            <img
              src={HeroMob.src}
              alt="teilverkauf haus"
              className="obj-fit-img"
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default ForSellers;
