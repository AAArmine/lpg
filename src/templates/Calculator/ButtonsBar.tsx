import React from 'react';
import { useTranslations } from '../../locale';
import Link from 'next/link';
import {
  trackContactButtonClicked,
  trackOfferRequestButtonClicked,
  trackTerminButtonClicked,
} from './utils/tracking';
import { ChevronDownIcon, PhoneIcon } from '@heroicons/react/solid';
import { Popover, Transition } from '@headlessui/react';
import { useRouter } from 'next/router';

export const ButtonsBar = () => {
  const t = useTranslations('calculator');

  const router = useRouter();
  // eslint-disable-next-line unused-imports/no-unused-vars
  const { ctype, ...routerQuery } = router.query;
  const contactOfferUrl = `?${new URLSearchParams({
    ...routerQuery,
    ctype: 'offer',
  }).toString()}#kontakt`;

  return (
    <div className="btn-bar">
      <Popover className="relative">
        {({ close }) => (
          <>
            <Popover.Button
              style={{
                display: 'flex',
                alignItems: 'center',
                fontWeight: 'bold',
              }}
            >
              {t('helpCTA')}
              <ChevronDownIcon
                className="ml-1 h-5 w-5 group-hover:text-gray-500"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={React.Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="contact-popover">
                <a
                  href="tel:030/403-6579-10"
                  className="tel"
                  onClick={() => {
                    close();
                    trackContactButtonClicked();
                  }}
                >
                  <PhoneIcon
                    style={{ width: '1rem', height: '1rem' }}
                    aria-hidden="true"
                  />
                  <span>030/403-6579-10</span>
                </a>
                <Link href="/termin" prefetch={false}>
                  <a
                    onClick={() => {
                      close();
                      trackTerminButtonClicked();
                    }}
                  >
                    <span>Beratungstermin anfordern</span>
                  </a>
                </Link>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
      <Link href={contactOfferUrl} prefetch={false}>
        <a onClick={trackOfferRequestButtonClicked}>{t('offerCTA')}</a>
      </Link>
    </div>
  );
};
