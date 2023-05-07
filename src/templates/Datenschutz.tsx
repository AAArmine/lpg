/* eslint-disable react/display-name */
import React from 'react';
import dynamic from 'next/dynamic';
import Loader from '../layout/Loader';

import { Section } from '../layout/Section';
import { ImpressumSection } from './Impressum';

const Meta = dynamic(() => import('../layout/Meta'), {
  loading: () => <Loader />,
});
const NavHeader = dynamic(() => import('../navigation/NavHeader'), {
  loading: () => <Loader />,
});
const Footer = dynamic(() => import('./Footer'), {
  loading: () => <Loader />,
});

export const DatenschutzSection = () => {
  return (
    <Section yPadding="py-16 md:px-10 sm:px-10">
      <div className="overflow-hidden">
        <ImpressumSection title="Datenschutzerklärung" />
        <div className="relative max-w-7xl">
          <div className="text-lg max-w-prose">
            <h1>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Inhalt
              </span>
            </h1>
          </div>
          <div className="mt-4 prose prose-primary prose-lg text-gray-800">
            <ol type="1">
              <li>
                Grundsätzliche Angaben zur Datenverarbeitung und
                Rechtsgrundlagen
              </li>
              <li>
                Arten der verarbeiteten Daten/ Kategorien betroffener Personen
              </li>
              <li>Sicherheitsmaßnahmen</li>
              <li>Weitergabe von Daten an Dritte und Drittanbieter</li>
              <li>Erbringung vertraglicher Leistungen</li>
              <li>Kontaktaufnahme</li>
              <li>Webhosting</li>
              <li>Cookies & Reichweitenmessung</li>
              <li>Einbindung von Diensten und Inhalten Dritter</li>
              <li>Rechte der betroffenen Person</li>
              <li>Löschung von Daten</li>
              <li>Widerspruchsrecht</li>
              <li>Änderungen der Datenschutzerklärung</li>
            </ol>
            <h3>
              1. Grundsätzliche Angaben zur Datenverarbeitung und
              Rechtsgrundlagen
            </h3>
            <p>
              1.1. Diese Datenschutzerklärung klärt Sie über die Art, den Umfang
              und Zweck der Verarbeitung von personenbezogenen Daten innerhalb
              unseres Onlineangebotes und der mit ihm verbundenen Webseiten,
              Funktionen und Inhalte (nachfolgend gemeinsam bezeichnet als
              „Onlineangebot“ oder „Website“) auf. Die Datenschutzerklärung gilt
              unabhängig von den verwendeten Domains, Systemen, Plattformen und
              Geräten (bspw. Desktop oder Mobile) auf denen das Onlineangebot
              ausgeführt wird.
            </p>
            <p>
              1.2. Die verwendeten Begrifflichkeiten, wie bspw.
              „personenbezogene Daten“ oder deren „Verarbeitung“ verweisen auf
              die Definitionen im Art. 4 der Datenschutzgrundverordnung (DSGVO).
            </p>
            <h3>
              2. Arten der verarbeiteten Daten/ Kategorien betroffener Personen
            </h3>
            <p>
              2.1. Zu den im Rahmen dieses Onlineangebotes verarbeiteten
              personenbezogenen Daten der Nutzer gehören:
            </p>
            <ul>
              <li>Bestandsdaten (bspw. Namen und Adressen von Kunden),</li>
              <li>Kontaktdaten (z.B. E-Mail, Telefonnummern),</li>
              <li>Vertragsdaten,</li>
              <li>Nutzungsdaten (bspw. Interesse an unseren Produkten),</li>
              <li>
                Meta-/Kommunikationsdaten (z.B. Geräte-Informationen,
                IP-Adressen) und
              </li>
              <li>Inhaltsdaten (bspw. Eingaben im Kontaktformular).</li>
            </ul>
            <p>
              2.2. Der Begriff „Nutzer“ umfasst alle Kategorien von der
              Datenverarbeitung betroffener Personen. Zu ihnen gehören unsere
              Geschäftspartner, Kunden, Interessenten und sonstige Besucher
              unseres Onlineangebotes. Die verwendeten Begrifflichkeiten sind
              geschlechtsneutral zu verstehen.
            </p>
            <p>
              2.3. Wir verarbeiten personenbezogene Daten der Nutzer nur unter
              Einhaltung der einschlägigen Datenschutzbestimmungen. Das
              bedeutet, die Daten der Nutzer werden nur bei Vorliegen einer
              gesetzlichen Erlaubnis verarbeitet, insbesondere wenn die
              Datenverarbeitung zur Erbringung unserer vertraglichen Leistungen
              (bspw. Bearbeitung von Aufträgen) sowie Online-Services
              erforderlich, bzw. gesetzlich vorgeschrieben ist, eine
              Einwilligung der Nutzer vorliegt, als auch aufgrund unserer
              berechtigten Interessen (d.h. Interesse an der Analyse,
              Optimierung und wirtschaftlichem Betrieb und Sicherheit unseres
              Onlineangebotes im Sinne des Art. 6 Abs. 1 lit. f. DSGVO,
              insbesondere bei der Reichweitenmessung, Erstellung von Profilen
              zu Werbe- und Marketingzwecken sowie Erhebung von Zugriffsdaten
              und Einsatz der Dienste von Drittanbietern.
            </p>
            <p>
              2.4. Wir weisen darauf hin, dass die Rechtsgrundlage der
              Einwilligungen Art. 6 Abs. 1 lit. a. und Art. 7 DSGVO, die
              Rechtsgrundlage für die Verarbeitung zur Erfüllung unserer
              Leistungen und Durchführung vertraglicher Maßnahmen Art. 6 Abs. 1
              lit. b. DSGVO, die Rechtsgrundlage für die Verarbeitung zur
              Erfüllung unserer rechtlichen Verpflichtungen Art. 6 Abs. 1 lit.
              c. DSGVO, und die Rechtsgrundlage für die Verarbeitung zur Wahrung
              unserer berechtigten Interessen Art. 6 Abs. 1 lit. f. DSGVO ist.
            </p>
            <p>
              2.5. Von der Datenverarbeitung sind nachfolgende Personen
              betroffen:
            </p>
            <ul>
              <li>Vertrags- und Geschäftspartner,</li>
              <li>Nutzer unseres Onlineangebots,</li>
              <li>
                Interessenten, die an unserem Onlineangebot interessiert sind
                oder aus sonstigen Gründen mit uns in Kontakt treten und
              </li>
              <li>Kunden.</li>
            </ul>
            <h3>3. Sicherheitsmaßnahmen</h3>
            <p>
              Wir treffen im Sinne des Art. 32 DSGVO geeignete organisatorische,
              vertragliche und technische Sicherheitsmaßnahmen entsprechend dem
              Stand der Technik unter Berücksichtigung der
              Implementierungskosten und der Art, des Umfangs, der Umstände und
              der Zwecke der Datenverarbeitung sowie der unterschiedlichen
              Eintrittswahrscheinlichkeit und Schwere des Risikos für die Rechte
              und Freiheiten, um ein angemessenes Schutzniveau Ihrer Daten
              sicherzustellen. Hiermit stellen wir die Einhaltung der
              Vorschriften der Datenschutzgesetze sicher und schützen diese
              Daten gegen zufällige oder vorsätzliche Manipulationen, Verlust,
              Zerstörung oder gegen den Zugriff unberechtigter Personen zu
              schützen.
            </p>
            <p>
              3.1. Zu den Sicherheitsmaßnahmen gehört insbesondere die
              verschlüsselte Übertragung von Daten zwischen Ihrem Browser und
              unserem Server. Sie erkennen derart verschlüsselte Verbindungen
              daran, dass die URL in der Adressleiste Ihres Browsers mit
              „https://“ beginnt. Es handelt sich hierbei um ein
              Kommunikationsprotokoll, mit dem Daten im Rahmen einer
              Transportverschlüsselung abhörsicher übertragen werden können.
            </p>
            <h3>4. Weitergabe von Daten an Dritte und Drittanbieter</h3>
            <p>
              4.1. Eine Weitergabe von Daten an Dritte erfolgt nur im Rahmen der
              gesetzlichen Vorgaben. Wir geben die Daten der Nutzer an Dritte
              nur dann weiter, wenn dies bspw. auf Grundlage des Art. 6 Abs. 1
              lit. b. DSGVO für Vertragszwecke erforderlich ist oder auf
              Grundlage berechtigter Interessen gem. Art. 6 Abs. 1 lit. f. DSGVO
              an wirtschaftlichem und effektivem Betrieb unseres
              Geschäftsbetriebes.
            </p>
            <p>
              4.2. Subunternehmer setzen zur Bereitstellung unsere Leistungen
              wir nur dann ein, wenn wir geeignete rechtliche Vorkehrungen sowie
              entsprechende technische und organisatorische Maßnahmen ergriffen
              haben, um für den Schutz der verarbeiteten personenbezogenen Daten
              gemäß den einschlägigen gesetzlichen Vorschriften zu sorgen.
            </p>
            <p>
              4.3. Sofern im Rahmen dieser Datenschutzerklärung beschriebene
              Inhalte, Werkzeuge oder sonstige Mittel von anderen Anbietern
              (nachfolgend gemeinsam bezeichnet als „Drittanbieter“) eingesetzt
              werden, beachten wir die gesetzlichen Vorgaben und schließen
              insbesondere entsprechende Verträge bzw. Vereinbarungen, die dem
              Schutz Ihrer Daten dienen, mit den Empfängern Ihrer Daten ab. Zu
              den Empfängern dieser Daten können z.B. Zahlungsinstitute im
              Rahmen von Zahlungsvorgängen oder mit IT-Aufgaben beauftragte
              Dienstleister gehören.
            </p>
            <p>
              4.4. Setzen wir einen Drittanbieter ein, dessen genannter Sitz
              sich in einem Drittland (außerhalb der Europäischen Union (EU)
              oder des Europäischen Wirtschaftsraum) befindet, ist davon
              auszugehen, dass ein Datentransfer in die Sitzstaaten des
              Drittanbieters stattfindet. Die Übermittlung von Daten in
              Drittstaaten erfolgt nur, wenn ein angemessenes Datenschutzniveau,
              eine Einwilligung der Nutzer oder sonst eine gesetzliche Erlaubnis
              vorliegt.
            </p>
            <h3>5. Erbringung vertraglicher Leistungen</h3>
            <p>
              5.1. Wir verarbeiten Bestandsdaten (bspw. Namen und Adressen sowie
              Kontaktdaten von Nutzern), Vertragsdaten (bspw. in Anspruch
              genommene Leistungen, Namen von Kontaktpersonen,
              Zahlungsinformationen) zwecks Erfüllung unserer vertraglichen
              Verpflichtungen und Serviceleistungen gem. Art. 6 Abs. 1 lit b.
              DSGVO. Welche Daten für die vorgenannten Zwecke erforderlich sind,
              teilen wir den Vertragspartnern vor oder im Rahmen der
              Datenerhebung, z.B. in Onlineformularen, durch besondere
              Kennzeichnung (z.B. Farben) bzw. Symbole (z.B. Sternchen o.ä.),
              oder persönlich mit. Im Rahmen des geltenden Rechts geben wir
              diese Daten nur insoweit an Dritte weiter, als dies zu den
              vorgenannten Zwecken oder zur Erfüllung gesetzlicher Pflichten
              erforderlich ist oder mit Ihrer Einwilligung erfolgt (z.B. an
              beteiligte Telekommunikations-, Transport- und sonstige
              Hilfsdienste sowie Subunternehmer, Banken, Steuer- und
              Rechtsberater, Zahlungsdienstleister oder Steuerbehörden).
            </p>
            <p>
              5.2. Wir löschen die Daten nach Ablauf gesetzlicher
              Gewährleistungs- und vergleichbarer Pflichten, d.h., grundsätzlich
              nach Ablauf von vier Jahren, es sei denn, dass die Daten in einem
              Kundenkonto gespeichert werden, z.B., solange sie aus gesetzlichen
              Gründen der Archivierung aufbewahrt werden müssen (z.B. für
              Steuerzwecke im Regelfall 10 Jahre). Daten, die uns im Rahmen
              eines Vertragsverhältnisses durch den Vertragspartner offengelegt
              wurden, löschen wir entsprechend den Vorgaben des Vertrags,
              grundsätzlich nach Erfüllung der vertraglichen Leistungen.
            </p>
            <h3>6. Kontaktaufnahme</h3>
            <p>
              6.1. Bei der Kontaktaufnahme (per Kontaktformular oder E-Mail)
              werden die Angaben des Nutzers zur Bearbeitung der Kontaktanfrage
              und deren Abwicklung gem. Art. 6 Abs. 1 lit. b) DSGVO verarbeitet.
              Hierbei verarbeiten wir lediglich die Daten, die wir zur
              Bearbeitung ihres Anliegens benötigen.
            </p>
            <p>
              6.2. Die Angaben der Nutzer können in unserem
              Customer-Relationship-Management System („CRM System“) oder
              vergleichbarer Anfragenorganisation gespeichert werden.
            </p>
            <h3>7. Webhosting</h3>
            <p>
              7.1. Um unser Onlineangebot sicher und effizient bereitstellen zu
              können, nehmen wir die Leistungen von einem oder mehreren
              Webhosting-Anbietern in Anspruch, von deren Servern (bzw. von
              ihnen verwalteten Servern) das Onlineangebot abgerufen werden
              kann. Zu diesen Zwecken können wir Infrastruktur- und
              Plattformdienstleistungen, Rechenkapazität, Speicherplatz und
              Datenbankdienste sowie Sicherheitsleistungen und technische
              Wartungsleistungen in Anspruch nehmen. In unserem Fall ist es die
              domainfactory GmbH, Oskar-Messter-Str. 33, 85737 Ismaning
            </p>
            <p>
              7.2. Wir erheben auf Grundlage unserer berechtigten Interessen im
              Sinne des Art. 6 Abs. 1 lit. f. DSGVO Daten über jeden Zugriff auf
              den Server, auf dem sich dieser Dienst befindet (sogenannte
              Serverlogfiles). Zu den Zugriffsdaten gehören Name der abgerufenen
              Webseite, Datei, Datum und Uhrzeit des Abrufs, übertragene
              Datenmenge, Meldung über erfolgreichen Abruf, Browsertyp nebst
              Version, das Betriebssystem des Nutzers, Referrer URL (die zuvor
              besuchte Seite), IP-Adresse und der anfragende Provider.
            </p>
            <p>
              7.3. Logfile-Informationen werden aus Sicherheitsgründen (bspw.
              zur Aufklärung von Missbrauchs- oder Betrugshandlungen) für die
              Dauer von maximal sieben Tagen gespeichert und danach gelöscht.
              Daten, deren weitere Aufbewahrung zu Beweiszwecken erforderlich
              ist, sind bis zur endgültigen Klärung des jeweiligen Vorfalls von
              der Löschung ausgenommen.
            </p>
            <p>
              7.4. Die Webhostingleistungen umfassen auch Versand, Empfang sowie
              die Speicherung von E-Mails. Zu diesen Zwecken werden die Adressen
              der Empfänger und Absender, aber auch weitere Informationen zum
              E-Mail-Versand (z.B. die beteiligten Provider), einschließlich
              Inhalte der jeweiligen E-Mails verarbeitet. Auch wenn unsere
              E-Mail-Kommunikation eine Transportwegverschlüsselung aufweist,
              sind diese nicht auf den Servern, von denen sie abgesendet und
              empfangen werden, verschlüsselt. Der Inhalte von E-Mail
              Kommunikation ist daher grundsätzlich Manipulation anfällig.
            </p>
            <h3>8. Cookies & Reichweitenmessung</h3>
            <p>
              8.1. Wenn Sie unsere Website besuchen, kann es sein, dass
              Informationen in Form eines Cookies auf Ihrem Computer abgelegt
              werden. Cookies sind Informationen, die von unserem Webserver oder
              Webservern Dritter an die Web-Browser der Nutzer übertragen und
              dort für einen späteren Abruf gespeichert werden. Die meisten
              Browser sind so eingestellt, dass sie Cookies automatisch
              akzeptieren. Wir möchten Sie darauf hinweisen, dass eine Nutzung
              unseres Onlineangebots ohne Cookies nur eingeschränkt möglich ist.
              Insbesondere ist die Verwendung Ihres Kundenkontos grundsätzlich
              nicht möglich, da hierzu die Verwendung von Cookies technisch
              zwingend notwendig ist. Sie können aber über Ihren Browser auch
              nur das Setzen bestimmter Cookies verhindern (z.B. Cookies von
              Drittanbietern), etwa wenn Sie Webtracking unterbinden möchten.
              Nähere Informationen hierzu finden Sie in der Hilfefunktion Ihres
              Browsers. Weitere Informationen zu Cookies von Drittanbietern, die
              bei dem Besuch unserer Website gesetzt oder verarbeitet werden,
              finden Sie in der nachfolgenden Datenschutzerklärung, sofern wir
              hierauf zurückgreifen. Zu dem Begriff der Cookies zählen wir
              ferner andere Technologien, die die gleichen Funktionen wie
              Cookies erfüllen (z.B., wenn Angaben der Nutzer anhand pseudonymer
              Onlinekennzeichnungen gespeichert werden, auch als „Nutzer-ID“
              bezeichnet).
            </p>
            <ul>
              <li>
                Zu unterscheiden ist zwischen Cookies, die beim Besuch einer
                Website vom Betreiber der Website gesetzt werden (auch
                „First-Party-Cookies“) und Cookies, die von Drittanbietern
                gesetzt werden (auch „Third-Party-Cookies“). Nur über die
                erstgenannten Cookies haben wir die technische Kontrolle. Weiter
                differenzieren wir zwischen nachfolgenden Cookies.
              </li>
              <li>
                Temporäre Cookies (auch: Session- oder Sitzungs-Cookies):
                Temporäre Cookies werden spätestens gelöscht, nachdem ein Nutzer
                ein Online-Angebot verlassen und seinen Browser geschlossen hat.
              </li>
              <li>
                Permanente Cookies: Permanente Cookies bleiben auch nach dem
                Schließen des Browsers gespeichert. So kann beispielsweise der
                Login-Status gespeichert oder bevorzugte Inhalte direkt
                angezeigt werden, wenn der Nutzer eine Website erneut besucht.
                Ebenso können die Interessen von Nutzern, die zur
                Reichweitenmessung oder zu Marketingzwecken verwendet werden, in
                einem solchen Cookie gespeichert werden.
              </li>
              <li>
                Notwendige (auch: essentielle oder unbedingt erforderliche)
                Cookies: Cookies können zum einen für den Betrieb einer Webseite
                unbedingt erforderlich sein (z.B. um Logins oder andere
                Nutzereingaben zu speichern oder aus Gründen der Sicherheit).
              </li>
              <li>
                Statistik-, Marketing- und Personalisierungs-Cookies: Ferner
                werden Cookies im Regelfall auch im Rahmen der
                Reichweitenmessung eingesetzt sowie dann, wenn die Interessen
                eines Nutzers oder sein Verhalten (z.B. Betrachten bestimmter
                Inhalte, Nutzen von Funktionen etc.) auf einzelnen Webseiten in
                einem Nutzerprofil gespeichert werden. Solche Profile dienen
                bspw. dazu, Nutzern Inhalte anzuzeigen, die ihren potentiellen
                Interessen entsprechen. Dieses Verfahren wird auch als
                „Tracking“, d.h., Nachverfolgung der potentiellen Interessen der
                Nutzer bezeichnet. Über den Einsatz von „Tracking“-Technologien
                informieren wir Sie gesondert in unserer Datenschutzerklärung
                oder im Rahmen der Einholung einer Einwilligung.
              </li>
            </ul>
            <p>
              8.2. Falls die Nutzer nicht möchten, dass Cookies auf ihrem
              Rechner gespeichert werden, werden sie gebeten die entsprechende
              Option in den Systemeinstellungen ihres Browsers zu deaktivieren.
              Gespeicherte Cookies können in den Systemeinstellungen des
              Browsers gelöscht werden.
            </p>
            <p>
              8.3. Auf welcher Rechtsgrundlage wir Ihre personenbezogenen Daten
              mit Hilfe von Cookies verarbeiten, hängt davon ab, ob wir Sie um
              eine Einwilligung bitten. Falls dies zutrifft und Sie in die
              Nutzung von Cookies einwilligen, ist die Rechtsgrundlage der
              Verarbeitung Ihrer Daten die erklärte Einwilligung. Andernfalls
              werden die mithilfe von Cookies verarbeiteten Daten auf Grundlage
              unserer berechtigten Interessen (z.B. an einem
              betriebswirtschaftlichen Betrieb unseres Onlineangebotes und
              dessen Verbesserung) verarbeitet oder, wenn der Einsatz von
              Cookies erforderlich ist, um unsere vertraglichen Verpflichtungen
              zu erfüllen. Abhängig davon, ob die Verarbeitung auf Grundlage
              einer Einwilligung oder gesetzlichen Erlaubnis erfolgt, haben Sie
              jederzeit die Möglichkeit, eine erteilte Einwilligung zu
              widerrufen oder der Verarbeitung Ihrer Daten durch
              Cookie-Technologien zu widersprechen („Opt-Out“). Sie können Ihren
              Opt-Out zunächst mittels der Einstellungen Ihres Browsers
              erklären, indem Sie in den Systemeinstellungen ihres Browsers dem
              Setzen von Cookies widersprechen. Ein Widerspruch gegen den
              Einsatz von Cookies zu Zwecken des Onlinemarketings kann auch
              mittels einer Vielzahl von Diensten, vor allem im Fall des
              Trackings, über die Webseiten https://optout.aboutads.info und
              https://www.youronlinechoices.com/ erklärt werden. Daneben können
              Sie weitere Widerspruchshinweise im Rahmen der Angaben zu den
              eingesetzten Dienstleistern und Cookies erhalten. Bevor wir Daten
              im Rahmen der Nutzung von Cookies verarbeiten oder verarbeiten
              lassen, bitten wir die Nutzer um eine jederzeit widerrufbare
              Einwilligung. Bevor die Einwilligung nicht ausgesprochen wurde,
              werden allenfalls Cookies eingesetzt, die für den Betrieb unseres
              Onlineangebotes erforderlich sind. Deren Einsatz erfolgt auf der
              Grundlage unseres Interesses und des Interesses der Nutzer an der
              erwarteten Funktionsfähigkeit unseres Onlineangebots. Hierzu
              zählen Nutzungsdaten (z.B. besuchte Webseiten, Interesse an
              Inhalten, Zugriffszeiten), Meta-/Kommunikationsdaten (z.B.
              Geräte-Informationen, IP-Adressen). Von dieser Verarbeitung Nutzer
              unseres Onlineangebots betroffen. Die Verarbeitung erfolgt auf der
              rechtlichen Grundlage der Einwilligung (Art. 6 Abs. 1 S. 1 lit. a
              DSGVO) oder Berechtigte Interessen iSd. Art. 6 Abs. 1 S. 1 lit. f.
              DSGVO.
            </p>
            <h3>9. Einbindung von Diensten und Inhalten Dritter</h3>
            <p>
              9.1 Wir setzen innerhalb unseres Onlineangebotes auf Grundlage
              unserer berechtigten Interessen (d.h. Interesse an der Analyse,
              Optimierung und wirtschaftlichem Betrieb unseres Onlineangebotes
              im Sinne des Art. 6 Abs. 1 lit. f. DSGVO) oder aufgrund Ihrer
              Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) Inhalts- oder
              Serviceangebote von Drittanbietern ein, um deren Inhalte und
              Services, wie Videos oder Schriftarten einzubinden (nachfolgend
              einheitlich bezeichnet als „Inhalte“). Dies erfolgt zur
              Bereitstellung unseres Onlineangebotes und zur Schaffung einer
              Nutzerfreundlichkeit unseres Onlineangebots. Dies setzt immer
              voraus, dass die Drittanbieter dieser Inhalte, die IP-Adresse der
              Nutzer wahrnehmen, da sie ohne die IP-Adresse die Inhalte nicht an
              deren Browser senden könnten. Die IP-Adresse ist damit für die
              Darstellung dieser Inhalte erforderlich. Wir bemühen uns nur
              solche Inhalte zu verwenden, deren jeweilige Anbieter die
              IP-Adresse lediglich zur Auslieferung der Inhalte verwenden.
              Drittanbieter können ferner so genannte Pixel-Tags (unsichtbare
              Grafiken, auch als „Web Beacons“ bezeichnet) für statistische oder
              Marketingzwecke verwenden. Durch die „Pixel-Tags“ können
              Informationen, wie der Besucherverkehr auf den Seiten dieser
              Website ausgewertet werden. Die pseudonymen Informationen können
              ferner in Cookies auf dem Gerät der Nutzer gespeichert werden und
              unter anderem technische Informationen zum Browser und
              Betriebssystem, verweisende Webseiten, Besuchszeit sowie weitere
              Angaben zur Nutzung unseres Onlineangebotes enthalten, als auch
              mit solchen Informationen aus anderen Quellen verbunden werden
              können.
            </p>
            <p>
              Die nachfolgende Darstellung bietet eine Übersicht von
              Drittanbietern sowie ihrer Inhalte, nebst Links zu deren
              Datenschutzerklärungen, welche weitere Hinweise zur Verarbeitung
              von Daten und, z.T. bereits hier genannt,
              Widerspruchsmöglichkeiten (sog. Opt-Out) enthalten:
            </p>
            <p>
              Externe Schriftarten von Google Ireland Limited, Gordon House,
              Barrow Street, Dublin 4, Irland, https://www.google.com/fonts
              („Google Fonts“). Die Einbindung der Google Fonts erfolgt durch
              einen Serveraufruf bei Google in Irland. Datenschutzerklärung:
              https://www.google.com/policies/privacy/, Opt-Out:
              https://www.google.com/settings/ads/.
            </p>
            <p>
              9.2 Wir haben das &quot;Website Custom Audiences&quot; Pixel von
              Facebook (Facebook Business Tools)(Facebook Ireland Limited, 4
              Square, Dublin 2, Ireland) integriert.
            </p>
            <p>
              Vorbehaltlich Ihrer Einwilligung wird beim Besuch unserer Seiten
              über das Zählpixel eine direkte Verbindung zwischen Ihrem Browser
              Facebook-Server hergestellt. Facebook erhält dadurch u. a. von
              Ihrem Browser die Information, dass von Ihrem Endgerät unsere
              Seite aufgerufen wurde. Wenn Sie Facebook-Nutzer bist, kann
              Facebook den Besuch unserer Seiten Ihrem Benutzerkonto zuordnen.
              Wir weisen darauf hin, dass wir keine nähere Kenntnis vom Inhalt
              der übermittelten Daten sowie deren Nutzung durch Facebook
              erhalten. Wir können lediglich auswählen, welchen Segmenten von
              Facebook-Nutzern (wie Alter, Interessen) unsere Werbung angezeigt
              werden soll. Dabei nutzen wir Custom Audiences auf eine Weise,
              dass keine Datensätze, insbesondere keine E-Mail-Adressen, unserer
              Nutzer – weder verschlüsselt noch unverschlüsselt – an Facebook
              übermittelt werden.
            </p>
            <p>
              Um den Erfolg unserer Werbung auf Facebook zu messen, setzen wir
              zudem das Facebook Conversion-Pixel ein. Durch den Aufruf dieses
              Pixels aus Ihrem Browser kann Facebook in der Folge erkennen, ob
              eine Facebook-Werbeanzeige erfolgreich war, also z. B. zu einem
              Online-Kaufabschluss geführt hat. Wir erhalten von Facebook hierzu
              ausschließlich statistische Daten ohne Bezug zu einer konkreten
              Person. So können wir die Wirksamkeit der Facebook-Werbeanzeigen
              für statistische und Marktforschungszwecke erfassen.
            </p>
            <p>
              Insbesondere falls Sie bei Facebook angemeldet bist, verweisen wir
              im Übrigen auf deren Datenschutzinformationen
              https://www.facebook.com/about/privacy .
            </p>
            <h3>10. Rechte der betroffenen Person</h3>
            <p>
              Werden personenbezogene Daten von Ihnen verarbeitet, sind Sie
              Betroffener i.S.d. DSGVO und es stehen Ihnen folgende Rechte
              gegenüber dem Verantwortlichen zu:
            </p>
            <h4>10.1. Auskunftsrecht</h4>
            <p>
              Sie können von dem Verantwortlichen eine Bestätigung darüber
              verlangen, ob personenbezogene Daten, die Sie betreffen, von uns
              verarbeitet werden.
            </p>
            <p>
              Liegt eine solche Verarbeitung vor, können Sie von dem
              Verantwortlichen über folgende Informationen Auskunft verlangen:
            </p>
            <ul>
              <li>
                die Zwecke, zu denen die personenbezogenen Daten verarbeitet
                werden;
              </li>
              <li>
                die Kategorien von personenbezogenen Daten, welche verarbeitet
                werden;
              </li>
              <li>
                die Empfänger bzw. die Kategorien von Empfängern, gegenüber
                denen die Sie betreffenden personenbezogenen Daten offengelegt
                wurden oder noch offengelegt werden;
              </li>
              <li>
                die geplante Dauer der Speicherung der Sie betreffenden
                personenbezogenen Daten oder, falls konkrete Angaben hierzu
                nicht möglich sind, Kriterien für die Festlegung der
                Speicherdauer;
              </li>
              <li>
                das Bestehen eines Rechts auf Berichtigung oder Löschung der Sie
                betreffenden personenbezogenen Daten, eines Rechts auf
                Einschränkung der Verarbeitung durch den Verantwortlichen oder
                eines Widerspruchsrechts gegen diese Verarbeitung;
              </li>
              <li>
                das Bestehen eines Beschwerderechts bei einer Aufsichtsbehörde;
              </li>
              <li>
                alle verfügbaren Informationen über die Herkunft der Daten, wenn
                die personenbezogenen Daten nicht bei der betroffenen Person
                erhoben werden;
              </li>
              <li>
                das Bestehen einer automatisierten Entscheidungsfindung
                einschließlich Profiling gemäß Art. 22 Abs. 1 und 4 DSGVO und –
                zumindest in diesen Fällen – aussagekräftige Informationen über
                die involvierte Logik sowie die Tragweite und die angestrebten
                Auswirkungen einer derartigen Verarbeitung für die betroffene
                Person.
              </li>
              <p>
                Ihnen steht das Recht zu, Auskunft darüber zu verlangen, ob die
                Sie betreffenden personenbezogenen Daten in ein Drittland oder
                an eine internationale Organisation übermittelt werden. In
                diesem Zusammenhang können Sie verlangen, über die geeigneten
                Garantien gem. Art. 46 DSGVO im Zusammenhang mit der
                Übermittlung unterrichtet zu werden.
              </p>
            </ul>
            <h4>10.2. Recht auf Berichtigung</h4>
            <p>
              Sie haben ein Recht auf Berichtigung und/oder Vervollständigung
              gegenüber dem Verantwortlichen, sofern die verarbeiteten
              personenbezogenen Daten, die Sie betreffen, unrichtig oder
              unvollständig sind. Der Verantwortliche hat die Berichtigung
              unverzüglich vorzunehmen.
            </p>
            <h4>10.3. Recht auf Einschränkung der Verarbeitung</h4>
            <p>
              Unter den folgenden Voraussetzungen können Sie die Einschränkung
              der Verarbeitung der Sie betreffenden personenbezogenen Daten
              verlangen:
            </p>
            <ul>
              <li>
                wenn Sie die Richtigkeit der Sie betreffenden personenbezogenen
                für eine Dauer bestreiten, die es dem Verantwortlichen
                ermöglicht, die Richtigkeit der personenbezogenen Daten zu
                überprüfen;
              </li>
              <li>
                die Verarbeitung unrechtmäßig ist und Sie die Löschung der
                personenbezogenen Daten ablehnen und stattdessen die
                Einschränkung der Nutzung der personenbezogenen Daten verlangen;
              </li>
              <li>
                der Verantwortliche die personenbezogenen Daten für die Zwecke
                der Verarbeitung nicht länger benötigt, Sie diese jedoch zur
                Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen
                benötigen, oder
              </li>
              <li>
                wenn Sie Widerspruch gegen die Verarbeitung gemäß Art. 21 Abs. 1
                DSGVO eingelegt haben und noch nicht feststeht, ob die
                berechtigten Gründe des Verantwortlichen gegenüber Ihren Gründen
                überwiegen.
              </li>
              <p>
                Wurde die Verarbeitung der Sie betreffenden personenbezogenen
                Daten eingeschränkt, dürfen diese Daten – von ihrer Speicherung
                abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung,
                Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz
                der Rechte einer anderen natürlichen oder juristischen Person
                oder aus Gründen eines wichtigen öffentlichen Interesses der
                Union oder eines Mitgliedstaats verarbeitet werden.
              </p>
              <p>
                Wurde die Einschränkung der Verarbeitung nach den o.g.
                Voraussetzungen eingeschränkt, werden Sie von dem
                Verantwortlichen unterrichtet bevor die Einschränkung aufgehoben
                wird.
              </p>
            </ul>
            <h4>10.4. Recht auf Löschung</h4>
            <h5>a) Löschungspflicht</h5>
            <p>
              Sie können von dem Verantwortlichen verlangen, dass die Sie
              betreffenden personenbezogenen Daten unverzüglich gelöscht werden,
              und der Verantwortliche ist verpflichtet, diese Daten unverzüglich
              zu löschen, sofern einer der folgenden Gründe zutrifft:
            </p>
            <ul>
              <li>
                Die Sie betreffenden personenbezogenen Daten sind für die
                Zwecke, für die sie erhoben oder auf sonstige Weise verarbeitet
                wurden, nicht mehr notwendig.
              </li>
              <li>
                Sie widerrufen Ihre Einwilligung, auf die sich die Verarbeitung
                gem. Art. 6 Abs. 1 lit. a oder Art. 9 Abs. 2 lit. a DSGVO
                stützte, und es fehlt an einer anderweitigen Rechtsgrundlage für
                die Verarbeitung.
              </li>
              <li>
                Sie legen gem. Art. 21 Abs. 1 DSGVO Widerspruch gegen die
                Verarbeitung ein und es liegen keine vorrangigen berechtigten
                Gründe für die Verarbeitung vor, oder Sie legen gem. Art. 21
                Abs. 2 DSGVO Widerspruch gegen die Verarbeitung ein.
              </li>
              <li>
                Die Sie betreffenden personenbezogenen Daten wurden unrechtmäßig
                verarbeitet.
              </li>
              <li>
                Die Löschung der Sie betreffenden personenbezogenen Daten ist
                zur Erfüllung einer rechtlichen Verpflichtung nach dem
                Unionsrecht oder dem Recht der Mitgliedstaaten erforderlich, dem
                der Verantwortliche unterliegt.
              </li>
              <li>
                Die Sie betreffenden personenbezogenen Daten wurden in Bezug auf
                angebotene Dienste der Informationsgesellschaft gemäß Art. 8
                Abs. 1 DSGVO erhoben.
              </li>
            </ul>
            <h5>b) Information an Dritte</h5>
            <p>
              Hat der Verantwortliche die Sie betreffenden personenbezogenen
              Daten öffentlich gemacht und ist er gem. Art. 17 Abs. 1 DSGVO zu
              deren Löschung verpflichtet, so trifft er unter Berücksichtigung
              der verfügbaren Technologie und der Implementierungskosten
              angemessene Maßnahmen, auch technischer Art, um für die
              Datenverarbeitung Verantwortliche, die die personenbezogenen Daten
              verarbeiten, darüber zu informieren, dass Sie als betroffene
              Person von ihnen die Löschung aller Links zu diesen
              personenbezogenen Daten oder von Kopien oder Replikationen dieser
              personenbezogenen Daten verlangt haben.
            </p>
            <h5>c) Ausnahmen</h5>
            <p>
              Das Recht auf Löschung besteht nicht, soweit die Verarbeitung
              erforderlich ist
            </p>
            <ul>
              <li>
                zur Ausübung des Rechts auf freie Meinungsäußerung und
                Information;
              </li>
              <li>
                zur Erfüllung einer rechtlichen Verpflichtung, die die
                Verarbeitung nach dem Recht der Union oder der Mitgliedstaaten,
                dem der Verantwortliche unterliegt, erfordert, oder zur
                Wahrnehmung einer Aufgabe, die im öffentlichen Interesse liegt
                oder in Ausübung öffentlicher Gewalt erfolgt, die dem
                Verantwortlichen übertragen wurde;
              </li>
              <li>
                aus Gründen des öffentlichen Interesses im Bereich der
                öffentlichen Gesundheit gemäß Art. 9 Abs. 2 lit. h und i sowie
                Art. 9 Abs. 3 DSGVO;
              </li>
              <li>
                für im öffentlichen Interesse liegende Archivzwecke,
                wissenschaftliche oder historische Forschungszwecke oder für
                statistische Zwecke gem. Art. 89 Abs. 1 DSGVO, soweit das unter
                Abschnitt a) genannte Recht voraussichtlich die Verwirklichung
                der Ziele dieser Verarbeitung unmöglich macht oder ernsthaft
                beeinträchtigt, oder
              </li>
              <li>
                zur Geltendmachung, Ausübung oder Verteidigung von
                Rechtsansprüchen.
              </li>
            </ul>
            <h4>10.5. Recht auf Unterrichtung</h4>
            <p>
              Haben Sie das Recht auf Berichtigung, Löschung oder Einschränkung
              der Verarbeitung gegenüber dem Verantwortlichen geltend gemacht,
              ist dieser verpflichtet, allen Empfängern, denen die Sie
              betreffenden personenbezogenen Daten offengelegt wurden, diese
              Berichtigung oder Löschung der Daten oder Einschränkung der
              Verarbeitung mitzuteilen, es sei denn, dies erweist sich als
              unmöglich oder ist mit einem unverhältnismäßigen Aufwand
              verbunden.
            </p>
            <p>
              Ihnen steht gegenüber dem Verantwortlichen das Recht zu, über
              diese Empfänger unterrichtet zu werden.
            </p>
            <h4>10.6. Recht auf Datenübertragbarkeit</h4>
            <p>
              Sie haben das Recht, die Sie betreffenden personenbezogenen Daten,
              die Sie dem Verantwortlichen bereitgestellt haben, in einem
              strukturierten, gängigen und maschinenlesbaren Format zu erhalten.
              Außerdem haben Sie das Recht diese Daten einem anderen
              Verantwortlichen ohne Behinderung durch den Verantwortlichen, dem
              die personenbezogenen Daten bereitgestellt wurden, zu übermitteln,
              sofern
            </p>
            <ul>
              <li>
                die Verarbeitung auf einer Einwilligung gem. Art. 6 Abs. 1 lit.
                a DSGVO oder Art. 9 Abs. 2 lit. a DSGVO oder auf einem Vertrag
                gem. Art. 6 Abs. 1 lit. b DSGVO beruht und
              </li>
              <li>
                die Verarbeitung mithilfe automatisierter Verfahren erfolgt.
              </li>
            </ul>
            <p>
              n Ausübung dieses Rechts haben Sie ferner das Recht, zu erwirken,
              dass die Sie betreffenden personenbezogenen Daten direkt von einem
              Verantwortlichen einem anderen Verantwortlichen übermittelt
              werden, soweit dies technisch machbar ist. Freiheiten und Rechte
              anderer Personen dürfen hierdurch nicht beeinträchtigt werden.
            </p>
            <p>
              Das Recht auf Datenübertragbarkeit gilt nicht für eine
              Verarbeitung personenbezogener Daten, die für die Wahrnehmung
              einer Aufgabe erforderlich ist, die im öffentlichen Interesse
              liegt oder in Ausübung öffentlicher Gewalt erfolgt, die dem
              Verantwortlichen übertragen wurde.
            </p>
            <h4>10.7. Widerspruchsrecht</h4>
            <p>
              Sie haben das Recht, aus Gründen, die sich aus ihrer besonderen
              Situation ergeben, jederzeit gegen die Verarbeitung der Sie
              betreffenden personenbezogenen Daten, die aufgrund von Art. 6 Abs.
              1 lit. e oder f DSGVO erfolgt, Widerspruch einzulegen; dies gilt
              auch für ein auf diese Bestimmungen gestütztes Profiling.
            </p>
            <p>
              Der Verantwortliche verarbeitet die Sie betreffenden
              personenbezogenen Daten nicht mehr, es sei denn, er kann zwingende
              schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre
              Interessen, Rechte und Freiheiten überwiegen, oder die
              Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung
              von Rechtsansprüchen.
            </p>
            <p>
              Werden die Sie betreffenden personenbezogenen Daten verarbeitet,
              um Direktwerbung zu betreiben, haben Sie das Recht, jederzeit
              Widerspruch gegen die Verarbeitung der Sie betreffenden
              personenbezogenen Daten zum Zwecke derartiger Werbung einzulegen;
              dies gilt auch für das Profiling, soweit es mit solcher
              Direktwerbung in Verbindung steht.
            </p>
            <p>
              Widersprechen Sie der Verarbeitung für Zwecke der Direktwerbung,
              so werden die Sie betreffenden personenbezogenen Daten nicht mehr
              für diese Zwecke verarbeitet.
            </p>
            <p>
              Sie haben die Möglichkeit, im Zusammenhang mit der Nutzung von
              Diensten der Informationsgesellschaft – ungeachtet der Richtlinie
              2002/58/EG – Ihr Widerspruchsrecht mittels automatisierter
              Verfahren auszuüben, bei denen technische Spezifikationen
              verwendet werden.
            </p>
            <h4>
              10.8. Recht auf Widerruf der datenschutzrechtlichen
              Einwilligungserklärung
            </h4>
            <p>
              Sie haben das Recht, Ihre datenschutzrechtliche
              Einwilligungserklärung jederzeit zu widerrufen. Durch den Widerruf
              der Einwilligung wird die Rechtmäßigkeit der aufgrund der
              Einwilligung bis zum Widerruf erfolgten Verarbeitung nicht
              berührt.
            </p>
            <h4>
              10.9. Automatisierte Entscheidung im Einzelfall einschließlich
              Profiling
            </h4>
            <p>
              Sie haben das Recht, nicht einer ausschließlich auf einer
              automatisierten Verarbeitung – einschließlich Profiling –
              beruhenden Entscheidung unterworfen zu werden, die Ihnen gegenüber
              rechtliche Wirkung entfaltet oder Sie in ähnlicher Weise erheblich
              beeinträchtigt. Dies gilt nicht, wenn die Entscheidung
            </p>
            <ul>
              <li>
                für den Abschluss oder die Erfüllung eines Vertrags zwischen
                Ihnen und dem Verantwortlichen erforderlich ist,
              </li>
              <li>
                aufgrund von Rechtsvorschriften der Union oder der
                Mitgliedstaaten, denen der Verantwortliche unterliegt, zulässig
                ist und diese Rechtsvorschriften angemessene Maßnahmen zur
                Wahrung Ihrer Rechte und Freiheiten sowie Ihrer berechtigten
                Interessen enthalten oder
              </li>
              <li>mit Ihrer ausdrücklichen Einwilligung erfolgt.</li>
            </ul>
            <p>
              Allerdings dürfen diese Entscheidungen nicht auf besonderen
              Kategorien personenbezogener Daten nach Art. 9 Abs. 1 DSGVO
              beruhen, sofern nicht Art. 9 Abs. 2 lit. a oder g gilt und
              angemessene Maßnahmen zum Schutz der Rechte und Freiheiten sowie
              Ihrer berechtigten Interessen getroffen wurden.
            </p>
            <p>
              Hinsichtlich der in (1) und (3) genannten Fälle trifft der
              Verantwortliche angemessene Maßnahmen, um die Rechte und
              Freiheiten sowie Ihre berechtigten Interessen zu wahren, wozu
              mindestens das Recht auf Erwirkung des Eingreifens einer Person
              seitens des Verantwortlichen, auf Darlegung des eigenen
              Standpunkts und auf Anfechtung der Entscheidung gehört.
            </p>
            <h4>10.10. Recht auf Beschwerde bei einer Aufsichtsbehörde</h4>
            <p>
              Unbeschadet eines anderweitigen verwaltungsrechtlichen oder
              gerichtlichen Rechtsbehelfs steht Ihnen das Recht auf Beschwerde
              bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat
              ihres Aufenthaltsorts, ihres Arbeitsplatzes oder des Orts des
              mutmaßlichen Verstoßes, zu, wenn Sie der Ansicht sind, dass die
              Verarbeitung der Sie betreffenden personenbezogenen Daten gegen
              die DSGVO verstößt. Die Aufsichtsbehörde, bei der die Beschwerde
              eingereicht wurde, unterrichtet den Beschwerdeführer über den
              Stand und die Ergebnisse der Beschwerde einschließlich der
              Möglichkeit eines gerichtlichen Rechtsbehelfs nach Art. 78 DSGVO.
            </p>
            <h3>11. Löschung von Daten</h3>
            <p>
              11.1. Die bei uns gespeicherten Daten werden gelöscht, sobald sie
              für ihre Zweckbestimmung nicht mehr erforderlich sind und der
              Löschung keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
              Eine Löschung erfolgt insbesondere auch dann, wenn sonstige
              Erlaubnistatbestände entfallen. Sofern die Daten der Nutzer nicht
              gelöscht werden, weil sie für andere und gesetzlich zulässige
              Zwecke erforderlich sind, wird deren Verarbeitung eingeschränkt,
              d.h. die Daten werden gesperrt und nicht für andere Zwecke
              verarbeitet. Das gilt bspw. für Daten der Nutzer, die aus handels-
              oder steuerrechtlichen Gründen aufbewahrt werden müssen.
            </p>
            <p>
              11.2. Nach gesetzlichen Vorgaben erfolgt die Aufbewahrung für 6
              Jahre gemäß § 257 Abs. 1 HGB (Handelsbücher, Inventare,
              Eröffnungsbilanzen, Jahresabschlüsse, Handelsbriefe,
              Buchungsbelege, etc.) sowie für 10 Jahre gemäß § 147 Abs. 1 AO
              (Bücher, Aufzeichnungen, Lageberichte, Buchungsbelege, Handels-
              und Geschäftsbriefe, Für Besteuerung relevante Unterlagen, etc.).
            </p>
            <h3>12. Widerspruchsrecht</h3>
            <p>
              Nutzer können der künftigen Verarbeitung ihrer personenbezogenen
              Daten entsprechend den gesetzlichen Vorgaben jederzeit
              widersprechen. Der Widerspruch kann insbesondere gegen die
              Verarbeitung für Zwecke der Direktwerbung erfolgen.
            </p>
            <h3>13. Änderungen der Datenschutzerklärung</h3>
            <p>
              13.1. Wir behalten uns vor, die Datenschutzerklärung zu ändern, um
              sie an geänderte Rechtslagen, oder bei Änderungen des Dienstes
              sowie der Datenverarbeitung anzupassen. Dies gilt jedoch nur im
              Hinblick auf Erklärungen zur Datenverarbeitung. Sofern
              Einwilligungen der Nutzer erforderlich sind oder Bestandteile der
              Datenschutzerklärung Regelungen des Vertragsverhältnisses mit den
              Nutzern enthalten, erfolgen die Änderungen nur mit Zustimmung der
              Nutzer.
            </p>
            <p>
              13.2. Die Nutzer werden gebeten sich regelmäßig über den Inhalt
              der Datenschutzerklärung zu informieren.
            </p>
            <h3 className="mt-4">
              Auf der Website zu veröffentlichende Erklärung über die Politik
              von GNIW zur Integration von Nachhaltigkeitsrisiken in den
              Anlageentscheidungsprozess (gemäß Artikel 3
              Offenlegungsverordnung)
            </h3>
            <p>
              <strong>Finanzmarktteilnehmer</strong>: GNIW Gesellschaft für
              Nachhaltige Immobilienwirtschaft F1 GmbH & Co. KG
            </p>
            <h4>Zusammenfassung</h4>
            <p>
              GNIW berücksichtigt teilweise nachteilige Auswirkungen seiner
              Anlageentscheidungen auf Nachhaltigkeitsfaktoren. Bei der
              vorliegenden Erklärung handelt es sich um die Aussage zu negativen
              Auswirkungen auf Nachhaltigkeitsfaktoren der GNIW Gesellschaft für
              Nachhaltige Immobilienwirtschaft F1 GmbH & Co. KG (LEI:
              391200TRYA07W9F2SE20).
            </p>
            <p>
              Diese Erklärung zu den wesentlichen nachteiligen Auswirkungen
              bezieht sich auf den Referenzzeitraum vom 1. Januar 2020 bis zum
              31. Dezember 2020.
            </p>
            <h4>
              Beschreibung der wesentlichen nachteiligen Auswirkungen auf die
              Nachhaltigkeit
            </h4>
            <p>
              GNIW berücksichtigt insbesondere den Einfluss der Investitionen
              auf soziale Nachhaltigkeitsfaktoren und schließt einige
              Investitionen aus, die ökologische, soziale, ethische oder
              Governance-Faktoren beeinträchtigen würden. Auswirkungen auf
              Nachhaltigkeitsfaktoren werden teilweise im Due-Diligence-Prozess
              berücksichtigt, wobei die Art und der Umfang unserer Aktivitäten
              (Ankauf von Immobilien von Senioren im Gegenzug zu einem
              unbefristeten Mietvertrag) berücksichtigt werden. GNIW wendet den
              Grundsatz der Verhältnismäßigkeit an.
            </p>
            <p>
              GNIW berücksichtigt teilweise Nachhaltigkeitsrisiken als
              integralen Bestandteil der Risikoanalyse im Prozess der
              Investitionsentscheidung. Die Ergebnisse dieser Due Diligence
              werden bei der Investitionsentscheidung berücksichtigt.
            </p>
            <p>
              GNIW hat sich angesichts des Geschäftsmodells nicht verpflichtet,
              Kodizes für verantwortungsbewusste Investments, international
              anerkannten Standards oder den Zielen des Pariser Abkommens zu
              folgen.
            </p>
            <p>
              Angesichts des Geschäftsmodells von GNIW und der Relevanz der
              Nachhaltigkeitsfaktoren im täglichen Geschäft gibt es keine
              Veranlassung die Berücksichtigung von Nachhaltigkeitsrisiken und
              Nachhaltigkeitswirkungen in unsere Vergütungspolitik aufzunehmen
              (Artikel 5 der Offenlegungsverordnung).
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

const Datenschutz = () => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Meta
        title="Datenschutzinformationen und Datenschutzerklärung von GNIW"
        description="Hier finden Sie die Datenschutzinformationen und Datenschutzerklärung der GNIW Gesellschaft für Nachhaltige Immobilienwirtschaft mbH."
        canonical="https://gniw.de/datenschutz/"
      />
      <NavHeader />
      <DatenschutzSection />
      <Footer />
    </div>
  );
};

export default Datenschutz;
