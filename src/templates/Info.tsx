import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import LargeLogo from '../../public/assets/images/logo-large.svg';
import { Background } from '../background/Background';
import { ParsedUrlQuery } from 'querystring';
import { useRouter } from 'next/router';

function getUrls(
  query: ParsedUrlQuery,
  pathName: string
): {
  homeUrl: string;
  contactOfferUrl: string;
  contactInfoUrl: string;
  faqUrl: string;
  contactUrl: string;
  saleWithResidenceUrl: string;
  partialSaleUrl: string;
  leasebackSaleUrl: string;
} {
  const isPresse = /\/presse/i.test(pathName);
  // eslint-disable-next-line unused-imports/no-unused-vars
  const { ctype, ...routerQuery } = query;
  const homeUrlWithParams = new URLSearchParams({
    ...(routerQuery as any),
  }).toString();
  const homeUrl = homeUrlWithParams ? `/?${homeUrlWithParams}` : '/';
  const contactOfferUrl = `${isPresse ? '/' : ''}?${new URLSearchParams({
    ...routerQuery,
    ctype: 'offer',
  }).toString()}#kontakt`;
  const contactInfoUrl = `${isPresse ? '/' : ''}?${new URLSearchParams({
    ...routerQuery,
    ctype: 'information',
  })}#kontakt`;

  const faqUrl = `${isPresse ? '/' : ''}?${new URLSearchParams(
    routerQuery as any
  ).toString()}#faq`;
  const contactUrl = `${isPresse ? '/' : ''}?${new URLSearchParams(
    routerQuery as any
  ).toString()}#kontakt`;

  const saleWithResidenceUrl = homeUrlWithParams
    ? `https://gniw.de/hausverkauf-mit-wohnrecht?${homeUrlWithParams}`
    : 'https://gniw.de/hausverkauf-mit-wohnrecht';

  const leasebackSaleUrl = homeUrlWithParams
    ? `https://gniw.de?${homeUrlWithParams}`
    : 'https://gniw.de';

  const partialSaleUrl = homeUrlWithParams
    ? `https://gniw.de/teilverkauf-immobilie?${homeUrlWithParams}`
    : 'https://gniw.de/teilverkauf-immobilie';

  return {
    homeUrl,
    contactOfferUrl,
    contactInfoUrl,
    faqUrl,
    contactUrl,
    saleWithResidenceUrl,
    leasebackSaleUrl,
    partialSaleUrl,
  };
}

export default function Info() {
  const ref = useRef(null);
  useEffect(() => {
    // If window.Trustpilot is available it means that we need to load the TrustBox from our ref.
    // If it's not, it means the script you pasted into <head /> isn't loaded  just yet.
    // When it is, it will automatically load the TrustBox.
    if ((window as any).Trustpilot) {
      (window as any).Trustpilot.loadFromElement(ref.current, true);
    }
  }, []);
  const router = useRouter();
  const { saleWithResidenceUrl, leasebackSaleUrl, partialSaleUrl, homeUrl } =
    getUrls(router.query, router.pathname);

  const resources = [
    {
      name: 'So funktioniert GNIW',
      href: 'https://gniw.de/#funktionsweise',
    },
    {
      name: 'Kundenstimmen',
      href: 'https://gniw.de/#kundenstimmen',
    },
    {
      name: 'Häufige Fragen',
      href: 'https://gniw.de/?#faq',
    },
    {
      name: 'Ablauf - Einfach erklärt',
      href: 'https://gniw.de/#ablauf',
    },
    {
      name: 'Angebot anfragen',
      href: 'https://gniw.de/?ctype=offer#kontakt',
    },
    {
      name: 'Informaterial anfordern',
      href: 'https://gniw.de/?ctype=information#kontakt',
    },
  ];

  return (
    <Background color="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 justify-evenly">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
          <div className="flex items-center mb-3">
            <Link href={homeUrl}>
              <a>
                <span className="sr-only">GNIW</span>
                <img className="" src={LargeLogo.src} alt="GNIW" />
              </a>
            </Link>
          </div>
          <div className="flex flex-wrap md:flex-col lg:flex-row lg pl-3 xl:flex-nowrap lg:justify-between gap-2">
            <div>
              <h2 className="text-2xl leading-6 font-bold text-primary-900 py-2">
                Kontakt
              </h2>
              <p className="text-lg">
                Kurfürstendamm 194
                <br />
                10707 Berlin, Deutschland
                <br />
                Handelsregister: Amtsgericht Charlottenburg
                <br />
                (Berlin) HRB 204793 B
                <br />
                <br />
                Telefon:
                <span className="font-semibold"> +49 (0) 30/403-6579-10</span>
                <br />
                E-mail: info@gniw.de
              </p>
            </div>
            <div>
              <h2 className="text-2xl leading-6 font-bold text-primary-900 py-2">
                Immobilienverkauf
              </h2>
              <ul>
                {resources.map((item) => (
                  <li key={item.name} className="py-1 text-lg">
                    <Link href={item.href} key={item.name}>
                      <a>{item.name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl leading-6 font-bold text-primary-900 py-2">
                Immobilienwissen
              </h2>
              <ul>
                <li className="py-1 text-lg">
                  <Link href={leasebackSaleUrl}>
                    <a>Rückmietverkauf</a>
                  </Link>
                </li>
                <li className="py-1 text-lg">
                  <Link href={partialSaleUrl}>
                    <a>Teilverkauf Immobilie</a>
                  </Link>
                </li>
                <li className="py-1 text-lg">
                  <Link href={saleWithResidenceUrl}>
                    <a>Hausverkauf mit Wohnrecht</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl leading-6 font-bold text-primary-900 py-2">
                Über GNIW
              </h2>
              <ul>
                <li className="py-1 text-lg">
                  <Link href="https://gniw.de/uber-die-gniw" prefetch={false}>
                    <a>Über uns</a>
                  </Link>
                </li>
                <li className="py-1 text-lg">
                  <Link href="https://gniw.de/presse">
                    <a>Presse</a>
                  </Link>
                </li>
                <li className="py-1 text-lg">
                  <Link href="https://gniw.de/datenschutz" prefetch={false}>
                    <a>Datenschutz</a>
                  </Link>
                </li>
                <li className="py-1 text-lg">
                  <Link href="https://gniw.de/impressum" prefetch={false}>
                    <a>Impressum</a>
                  </Link>
                </li>
              </ul>
              <div className="mt-4">
                <div
                  ref={ref}
                  className="trustpilot-widget py-1"
                  data-locale="de-DE"
                  data-template-id="53aa8807dec7e10d38f59f32"
                  data-businessunit-id="6183fe7c30372a1e65069f84"
                  data-style-height="110px"
                  data-style-width="80%"
                  data-theme="light"
                >
                  <a
                    href="https://de.trustpilot.com/review/gniw.de"
                    target={`_blank`}
                    rel="noopener"
                  >
                    Trustpilot
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
}
