import React from 'react';
import Hero from '../../../public/assets/images/partSale/sec12.webp';
import HeroMob from '../../../public/assets/images/partSale/mob/mob_sec12.webp';

const Compensation = () => {
  return (
    <div id="compensation-container">
      <div className="sec-content-container max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        <div className="sec-about-first-grid">
          <div className="sec-about-item-first-content">
            <h2 className="sec-main-title">
              Abstandszahlungen an Meter steigen Rasht
            </h2>
            <p className="mt-2 text-lg text-gray-700 pt-2 line-height-and-padding-content">
              Wenn Vermieter aber doch wollen, dass ihre Mieter ausziehen,
              werden Abstandszahlungen fällig. In manchen Städten sind
              inzwischen Auszugsprämien von 500 bis 1.000 Euro je Quadratmeter
              an der Tagesordnung. Wer also eine Wohnung mit 100 Quadratmetern
              sein Eigen nennt und den Mieter zum Auszug bewegen möchte, muss
              mit zusätzlichen Kosten zwischen 50.000 und 100.000 Euro rechnen,
              Tendenz weiter steigend. Banken indes können solche Zahlungen in
              der Regel nicht finanzieren, so dass auf der einen Seite eine
              Investition in eine vermietete Wohnimmobilie nur etwas für
              Gutbetuchte ist und auf der anderen Seite durchschnittliche Käufer
              noch vorsichtiger sein müssen beim Erwerb vermieteter Wohnungen.
              Beides wirkt sich abermals negativ auf die Preisen aus, die
              potenzielle Käufer vermieteter Wohnimmobilien zu zahlen bereit
              sind.
            </p>
          </div>

          <div className="sec-obligations-img">
            <picture>
              <source media="(min-width:768px)" srcSet={Hero.src} />
              <img
                src={HeroMob.src}
                alt="Abstandszahlungen an Mieter steigen rasant"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compensation;
