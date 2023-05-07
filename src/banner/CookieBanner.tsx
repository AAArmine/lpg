import React, { useEffect, useState } from 'react';

import { InformationCircleIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useCookies } from 'react-cookie';

import { consent, decline, event } from '../lib/gtag';

const YEAR_IN_SECONDS = 365 * 24 * 60 * 60;
const MONTH_IN_SECONDS = 31 * 24 * 60 * 60;

export default function CookieBanner() {
  const [show, setShow] = useState(true);
  const [cookie, setCookie] = useCookies(['gniw-cookie']);
  const close = () => setShow(false);
  const onAccept = () => {
    setCookie('gniw-cookie', 'accepted', {
      path: '/',
      maxAge: YEAR_IN_SECONDS,
    });
    consent();
    event({ action: 'click_consent', category: 'click', label: 'accepted' });
  };
  const onDecline = () => {
    setCookie('gniw-cookie', 'declined', {
      path: '/',
      maxAge: MONTH_IN_SECONDS,
    });
    decline();
    event({ action: 'click_consent', category: 'click', label: 'accepted' });
  };
  useEffect(() => {
    if (
      cookie['gniw-cookie'] === 'accepted' ||
      cookie['gniw-cookie'] === 'declined'
    ) {
      setShow(false);
    }
  }, [cookie]);
  if (!show) {
    return <></>;
  }
  return (
    <div className="fixed bottom-0 inset-x-0 pb-2 sm:pb-5">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="p-2 rounded-lg bg-primary-600 shadow-lg sm:p-3">
          <div className="flex items-center justify-between flex-wrap">
            <div className="flex-1 flex items-center">
              <span className="flex p-2 rounded-lg bg-primary-800">
                <InformationCircleIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </span>
              <p className="ml-3 font-medium text-white">
                <span className="">
                  Wir nutzen Cookies auf unserer Webseite.{' '}
                </span>
                Details finden Sie in unserer{' '}
                <Link href="/datenschutz">
                  <a className="text-white underline">Datenschutzerklärung</a>
                </Link>
                .
              </p>
            </div>
            <div className="flex mt-4 md:mt-0">
              <div className="order-3 mt-2 -0 w-[40%]">
                <button
                  type="button"
                  onClick={() => {
                    onDecline();
                    close();
                  }}
                  className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white hover:underline"
                >
                  Ablehnen
                </button>
              </div>
              <div className="order-3 mt-2 w-[60%]">
                <button
                  type="button"
                  onClick={() => {
                    onAccept();
                    close();
                  }}
                  className="mx-1 flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-bold text-primary-600 bg-white hover:bg-primary-100"
                >
                  Akzeptieren
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
