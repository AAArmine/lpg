import React from 'react';
import Hero from '../../../public/assets/images/partSale/teilverkauf-immobilie-haus-gruende.webp';
import HeroMob from '../../../public/assets/images/partSale/mob/teilverkauf-immobilie-haus-gruende.webp';

const SuitableSec = () => {
  return (
    <div className="partial-sale-suitable-container w-100 bg-primary-500">
      <div className="sec-content-container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="suitable-main-content">
          <h2 className="sec-main-title text-center">
            Ist der Teilverkauf auch etwas für mich?
          </h2>
          <h4>
            Es gibt viele Gründe, die für einen Teilverkauf von einem selbst
            genutzten Haus oder einer Eigentumswohnung sprechen. Zum Beispiel:
          </h4>
          <p>
            Wenn unerwartet hohe Renovierungs- oder Instandhaltungskosten
            anstehen.
          </p>
          <p>
            Wenn die niedrigen Zinsen die Höhe Ihrer Altersvorsorge
            beeinträchtigen.
          </p>
          <p>
            Wenn Sie Ihr Haus umbauen möchten, z.B. um es barrierefrei zu
            machen.
          </p>
          <p>Wenn Sie die freie Zeit nutzen möchten, z.B. um zu verreisen.</p>
        </div>
        <div className="suitable-abs-image">
          <picture>
            <source media="(min-width:768px)" srcSet={Hero.src} />
            <img
              src={HeroMob.src}
              alt="teilverkauf immobilie haus pro und kontra"
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default SuitableSec;
