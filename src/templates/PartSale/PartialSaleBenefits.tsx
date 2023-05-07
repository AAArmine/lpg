import React from 'react';

const PartialSaleBenefits = () => {
  return (
    <div className="partial-sale-benefits-container w-100 bg-primary-500 mb-20">
      <div className="sec-content-container max-w-7xl mx-auto px-4 sm:px-6 pb-16 pt-10">
        <div className="benefits-grid">
          <div className="item-left">
            <div className="pro-contra">Pro</div>
            <div className="pt-6">
              <ul>
                <li className="font-thin">
                  Sofortige Auszahlung des Verkaufspreises
                </li>
                <li className="font-thin">
                  Verkäufer bleibt weiter in der Immobilie
                </li>
                <li className="font-thin">
                  Verkäufer profitiert weiterhin von der Wertsteigerung
                </li>
              </ul>
            </div>
          </div>
          <div className="item-right  pl-10">
            <div className="pro-contra">Contra</div>
            <div className="pt-6">
              <ul>
                <li className="font-thin">
                  Kleinerer Erlös gegenüber vollständigem Verkauf
                </li>
                <li className="font-thin">
                  Verantwortung für Instandhaltung beim Verkäufer
                </li>
                <li className="font-thin">Wenig Flexibilität</li>
                <li className="font-thin">
                  Hohe Servicegebühren und viel Kleingedrucktes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartialSaleBenefits;
