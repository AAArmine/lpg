import React from 'react';
import FuncImg from '../../../public/assets/images/partSale/immobilien-teilverkauf.webp';
import FuncImgMob from '../../../public/assets/images/partSale/mob/immobilien-teilverkauf.webp';

const WhoBenefits = () => {
  return (
    <div className="whoBenefits-container pb-24">
      <div className="sec-howFunctions-grid">
        <div className="w-full sec-how-functions-img">
          <picture>
            <source media="(min-width:768px)" srcSet={FuncImg.src} />
            <img
              src={FuncImgMob.src}
              alt="immobilien teilverkauf lohnt sich"
              className="obj-fit-img"
            />
          </picture>
        </div>
        <div className="sec-howFunctions-absContent max-w-xl px-4 sm:px-6 sec-padding-left">
          <h2 className="sec-main-title">
            So lohnt sich der Immobilien-Teilverkauf
          </h2>
          <p className="text-lg text-gray-700 pt-2">
            Der Teilverkauf eines Hauses oder einer anderen Immobilie ist eine
            hervorragende Option für alle, die über einen Teil ihres gebundenen
            Vermögens frei verfügen möchten, ohne ihre eigenen vier Wände
            verlassen zu müssen. Interessant ist ein Teilverkauf zum Beispiel
            für Rentner, die ihre freie Zeit nutzen und mehr verreisen und
            vielleicht sogar eine Ferienwohnung kaufen möchten . Oder etwas mehr
            finanziellen Freiraum brauchen, um ihre Kinder zu unterstützen. Es
            gibt aber auch Fälle, in denen unvorhergesehene Investitionen
            anstehen, zum Beispiel ein Umbau oder eine größere Renovierung im
            Haus. Auch zur optimalen Versorgung eines Pflegefalls kann das durch
            den Teilverkauf ausgezahlte Geld sinnvoll eingesetzt werden.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoBenefits;
