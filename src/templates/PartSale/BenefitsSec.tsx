import React from 'react';

const BenefitItems = [
  {
    titleTd1: 'Auszahlung des kompletten Verkaufspreises der Immobilie',
    titleTd2: 'Ja',
    titleTd3: 'Nein',
  },
  {
    titleTd1: 'Verkäufer bleibt in der Immobilie wohnen',
    titleTd2: 'Ja',
    titleTd3: 'Ja',
  },
  {
    titleTd1: 'Übernahme sämtlicher Transaktionskosten',
    titleTd2: 'Ja',
    titleTd3: 'nicht bei allen Anbietern',
  },
  {
    titleTd1: 'Wohnrecht im Grundbuch eingetragen',
    titleTd2: 'Ja',
    titleTd3: 'Ja',
  },
  {
    titleTd1:
      'Jederzeit vom Mieter kündbar falls sich Lebensbedingungen ändern',
    titleTd2: 'Ja',
    titleTd3: 'Nein',
  },
];

const BenefitsSec = () => {
  return (
    <div className="benefits-container">
      <div className="benefits-content max-w-7xl mx-auto px-4 sm:px-6">
        <h3 className="sec-main-title">
          Die GNIW als flexible Alternative für den Teilverkauf
        </h3>
        <table className="benefitsTable table pt-4">
          <thead>
            <tr className="pb-4">
              <th className="columnLarger"></th>
              <th className="columnMedium  pb-6 min-width-th">
                <div className="right-border pad-col">
                  <div className="v-center pb-6 text-no-wrap ">
                    Immobilienverkauf mit <br />
                    Wohnrecht an die GNIW
                  </div>
                </div>
              </th>
              <th className="columnMedium  pb-6 ">
                <div className="pad-col">
                  <div className="min-width-th v-center pb-6 text-no-wrap">
                    Teilverkauf mit <br /> Wohnrecht
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td className="lighter"></td>
              <td></td>
            </tr>
            {BenefitItems.map((item, index) => (
              <tr key={index}>
                <td className="text-left">
                  <div className="ml-7">{item.titleTd1}</div>
                </td>
                <td className="lighter border-right">{item.titleTd2}</td>
                <td className="border-right">{item.titleTd3}</td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td className="lighter"></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BenefitsSec;
