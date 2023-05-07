import React from 'react';
import Faq from '../Faq';

const faqs = [
  {
    question: 'Was bedeutet Teilverkauf des Hauses bzw. der Immobilie?',
    answer:
      'Beim Teilverkauf wird ein prozentualer Anteil einer Immobilie an einen stillen Teilhaber verkauft. Der Rest verbleibt beim ursprünglichen Eigentümer, der das Haus oder die Wohnung auch weiterhin bewohnt.',
  },
  {
    question: 'Wie funktioniert der Teilverkauf einer Immobilie?',
    answer:
      'Der Ablauf beim Teilverkauf entspricht weitgehend dem eines herkömmlichen Immobilienverkaufs: Er basiert auf einem notariell beglaubigten Kaufvertrag. Nach erfolgreichem Teilverkauf erfolgt ein entsprechender Eintrag im Grundbuch.',
  },
  {
    question: 'Wie wird der Immobilien Teilverkauf berechnet?',
    answer:
      'Der Wert der Immobilie ist natürlich der wichtigste Faktor für die Berechnung des Teilverkaufs. Denn das Objekt wird prozentual veräußert, nicht Zimmer für Zimmer. Dafür wird der Wert des Hauses oder der Wohnung in einem unabhängigen Gutachten ermittelt. Basierend darauf kann dann ein Teilwert festgelegt werden, den der Käufer als Auszahlung erhält. Wenn der Verkäufer weiterhin in der Immobilie lebt, muss er dem Käufer ab dem Zeitpunkt des Teilverkaufs – ähnlich einer Miete – eine monatliche Nutzungsgebühr für den verkauften Teil bezahlen.',
  },
  {
    question: 'Ist ein Teilverkauf seriös?',
    answer:
      'In den vergangenen Jahren hat sich der Teilverkauf am Immobilienmarkt immer stärker durchgesetzt. Er ist eine 100 % legale und mittlerweile etablierte Möglichkeit, aus einer abbezahlten Immobilie Kapital zu ziehen und trotzdem darin weiter zu wohnen. ',
  },
  {
    question: 'Ist ein Teilverkauf steuerpflichtig?',
    answer:
      'Die Einnahmen aus einem Immobilienteilverkauf sind steuerfrei, wenn zwischen Anschaffung und Verkauf mindestens drei Jahre (bei Eigennutzung, sonst zehn Jahre) vergangen sind. Ist dies nicht der Fall, fällt für den Verkauf die so genannte Spekulationssteuer an.',
  },
  {
    question: 'Ist der Teilverkauf auch etwas für mich?',
    answer:
      'Es gibt viele Gründe, die für einen Teilverkauf von einem selbst genutzten Haus oder einer Eigentumswohnung sprechen. Zum Beispiel:\n\n-Wenn unerwartet hohe Renovierungs- oder Instandhaltungskosten anstehen.\n-Wenn die niedrigen Zinsen die Höhe Ihrer Altersvorsorge beeinträchtigen.\n-Wenn Sie Ihr Haus umbauen möchten, z.B. um es barrierefrei zu machen.\n-Wenn Sie die freie Zeit nutzen möchten, z.B. um zu verreisen.',
  },
];

const FaqSection = () => (
  <div className="partial-sale-faq">
    <Faq
      faqs={faqs}
      title={
        <>
          Häufige gestellte Fragen
          <span className="secondary-title">
            Alles Wichtige zum Immobilienteilverkauf
          </span>
        </>
      }
    />
  </div>
);

export default FaqSection;
