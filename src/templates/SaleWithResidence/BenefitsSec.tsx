import React from 'react';
import Logo from '../../../public/assets/images/logo-large.webp';

const BenefitItems = [
  {
    titleTd1: 'Auszahlung des kompletten Wertes der Immobilie',
    titleTd2: 'Ja',
    titleTd3: 'Nein',
    titleTd4: 'Nein',
  },
  {
    titleTd1: 'Verkäufer bleibt in der Immobilie wohnen',
    titleTd2: 'Ja',
    titleTd3: 'Ja',
    titleTd4: 'Ja',
  },
  {
    titleTd1: 'Übernahme aller Kaufnebenkosten',
    titleTd2: 'Ja',
    titleTd3: 'Ja',
    titleTd4: 'Ja',
  },
  {
    titleTd1: 'Wohnrecht im Grundbuch',
    titleTd2: 'Ja',
    titleTd3: 'Nein',
    titleTd4: 'Ja',
  },
  {
    titleTd1:
      'Flexibilität: Mietverhältnis einseitig jederzeit kündbar vom Mieter',
    titleTd2: 'Ja',
    titleTd3: 'Nein',
    titleTd4: 'Nein',
  },
  {
    titleTd1: 'Versteckte Gebühren ',
    titleTd2: 'Nein',
    titleTd3: 'Ja',
    titleTd4: 'Ja',
  },
];

const BenefitsSec = () => {
  return (
    <div className="benefits-container">
      <div className="benefits-content max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        <h3 className="sec-main-title">
          Omelette Auszahlung und volle Flexibilität im Überblick
        </h3>
        <table className="benefitsTable table">
          <thead>
            <tr>
              <th className="columnLarger"></th>
              <th className="columnMedium">
                <div className="right-border pad-col">
                  <img src={Logo.src} alt="logo" />
                </div>
              </th>
              <th className="columnMedium">
                <div className="right-border pad-col">
                  <div className="v-center">Teilverkauf</div>
                </div>
              </th>
              <th className="columnMedium">
                <div className="pad-col">
                  <div className="v-center">Leibrente</div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td className="lighter"></td>
              <td></td>
              <td></td>
            </tr>
            {BenefitItems.map((item, index) => (
              <tr key={index}>
                <td className="text-left">
                  <div className="ml-7">{item.titleTd1}</div>
                </td>
                <td className="lighter border-right">{item.titleTd2}</td>
                <td className="border-right">{item.titleTd3}</td>
                <td>{item.titleTd4}</td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td className="lighter"></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BenefitsSec;
