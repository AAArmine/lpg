import React from 'react';
import Hero from '../../../public/assets/images/partSale/teilverkauf-immobilie.webp';
import HeroMob from '../../../public/assets/images/partSale/mob/teilverkauf-immobilie.webp';

const AboutSec = () => {
  return (
    <div className="lp-first-container part-sale-first-container">
      <div className="sec-content-container max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        <div className="sec-about-first-grid">
          <div className="sec-about-item-first">
            <div className="sec-about-item-first-content">
              <h1 className="sec-main-title">
                Teilverkauf einer Immobilie – ein Weg zu finanzieller
                Unabhängigkeit
              </h1>
              <p className="mt-2 text-lg text-gray-700 pt-2 line-height-and-padding-content">
                Rentnern fehlt häufig die finanzielle Freiheit, die sie sich in
                ihrer aktuellen Lebensphase wünschen. Dabei steckt ein Großteil
                vieler Privatvermögen älterer Menschen in abbezahlten
                Immobilien. Eine Möglichkeit, in diesen Fällen zu mehr
                finanzieller Freiheit zu gelangen, ist der Teilverkauf einer
                Immobilie.
              </p>
            </div>
          </div>
          <div className="sec-about-second-img">
            <picture>
              <source media="(min-width:768px)" srcSet={Hero.src} />
              <img
                src={HeroMob.src}
                alt="teilverkauf einer immobilie"
                className="obj-fit-img img-max-height-25"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSec;
