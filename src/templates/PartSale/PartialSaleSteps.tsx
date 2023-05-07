import React from 'react';

const PartialSaleSteps = () => {
  return (
    <div className="partial-sale-steps-container text-center">
      <div className="sec-content-container max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        <h2 className="sec-main-title">So einfach geht&apos;s</h2>
        <ol className="steps-container">
          <li className="steps-item mt-20">
            <div className="number-abs">1</div>
            <h3>Teilverkauf der Immobilie</h3>
            <p>
              Ein unabhängiger Gutachter ermittelt den Marktwert Ihrer Immobilie
              und Sie veräußern bis zu 50 % davon. Im Gegenzug erhalten Sie eine
              Sofortauszahlung und behalten den Restanteil Ihres Hauses. So
              schaffen Sie sich zu fairen Bedingungen ein finanzielles Polster
              und profitieren weiterhin von der Entwicklung des
              Immobilienmarkts.
            </p>
          </li>
          <li className="steps-item mt-20">
            <div className="number-abs">2</div>
            <h3>Lebenslanges Wohnrecht</h3>
            <p>
              Beim Verkauf der Immobilie wird ein sogenannter Nießbrauch ins
              Grundbuch eingetragen. Das bedeutet, Sie können Ihr Leben lang in
              Ihrem Haus leben und haben volle Kontrolle darüber, z.B. auch bei
              fälligen Umbaumaßnahmen. Der Teilkäufer Ihrer Immobilie wird
              lediglich stiller Teilhaber Ihrer Immobilie und erhält von Ihnen
              eine anteilige Mietzahlung.
            </p>
          </li>
          <li className="steps-item mt-20">
            <div className="number-abs">3</div>
            <h3>Flexibel weiter planen</h3>
            <p>
              Falls sich Ihre Pläne ändern, können Sie die Immobilie
              zurückkaufen oder auch vollständig veräußern. Hierbei können
              zusätzliche Kosten auf Seiten des Teilverkäufers anfallen.
              Ansonsten geht Ihr Anteil des Hauses selbstverständlich irgendwann
              an Ihre Erben über.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default PartialSaleSteps;
