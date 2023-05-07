import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import { Disclosure, Popover, Transition } from '@headlessui/react';
import { FaqIcon } from './Icons/FaqIcon';
import { FunctionIcon } from './Icons/FunctionIcon';

import {
  CalendarIcon,
  ClipboardListIcon,
  MenuIcon,
  XIcon,
  // DesktopComputerIcon,
  // QuestionMarkCircleIcon,
  ChatIcon,
  // HomeIcon,
  UserGroupIcon,
} from '@heroicons/react/outline';
import { ChevronDownIcon, PhoneIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import LargeLogo from '../../public/assets/images/logo-large.svg';
import SmallLogo from '../../public/assets/images/logo-small.svg';
import { DomainInfo } from '../lib/cms/types';
import { ParsedUrlQuery } from 'querystring';

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

const DEFAULT_PHONE_NUMBER = '030/403-6579-10';

const getPhoneNumber = (domainInfos: DomainInfo[] | undefined) => {
  const origin =
    typeof window !== 'undefined' ? window?.location?.origin : null;
  if (origin && domainInfos) {
    const domainInfo = domainInfos.find(({ domainName }) =>
      origin.includes(domainName)
    );
    if (domainInfo) {
      return domainInfo.phoneNumber;
    }
  }

  return DEFAULT_PHONE_NUMBER;
};

type PhoneNumberProps = {
  domainInfos?: DomainInfo[];
};
const PhoneNumber = (props: PhoneNumberProps) => {
  const number = getPhoneNumber(props?.domainInfos);
  return <a href={`tel:${number}`}>{number}</a>;
};

type LpNavHeaderProps = {
  domainInfos?: DomainInfo[];
};

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

  const leasebackSaleUrl = homeUrlWithParams
    ? `https://gniw.de?${homeUrlWithParams}`
    : 'https://gniw.de';

  const saleWithResidenceUrl = homeUrlWithParams
    ? `https://gniw.de/hausverkauf-mit-wohnrecht?${homeUrlWithParams}`
    : 'https://gniw.de/hausverkauf-mit-wohnrecht';

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
    partialSaleUrl,
    leasebackSaleUrl,
  };
}

export default function LpNavHeader(props: LpNavHeaderProps) {
  const router = useRouter();
  const {
    homeUrl,
    contactOfferUrl,
    contactInfoUrl,
    contactUrl,
    faqUrl,
    saleWithResidenceUrl,
    partialSaleUrl,
    leasebackSaleUrl,
  } = getUrls(router.query, router.pathname);

  const resources = [
    {
      name: 'So funktioniert GNIW',
      href: '/#funktionsweise',
      icon: FunctionIcon,
    },
    {
      name: 'Kundenstimmen',
      href: '/#kundenstimmen',
      icon: UserGroupIcon,
    },
    {
      name: 'Häufige Fragen',
      href: faqUrl,
      icon: FaqIcon,
    },
    {
      name: 'Ablauf - Einfach erklärt',
      href: '/#ablauf',
      icon: ClipboardListIcon,
    },
    {
      name: 'Kontakt',
      href: contactUrl,
      icon: ChatIcon,
    },
    {
      name: 'Beratungstermin anfordern',
      href: '/termin',
      icon: CalendarIcon,
    },
  ];

  return (
    <div className="desktopMenu w-full fixed top-0 right-0 z-20">
      <Popover className="relative bg-white">
        {/* DESKTOP */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center border-b-2 border-gray-200 py-2 justify-between md:space-x-2">
            <div className="flex sm:px-2">
              <Link href={homeUrl}>
                <a>
                  <span className="sr-only">GNIW</span>
                  <img className="" src={LargeLogo.src} alt="GNIW" />
                </a>
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-400">
                <span className="sr-only">Menü öffnen</span>
                <MenuIcon className="h-8 w-8" aria-hidden="true" />
              </Popover.Button>
            </div>
            <div className="menuMainFlex flex">
              <div className="menuMainSec">
                <Popover.Group
                  as="nav"
                  className="hidden md:flex sm:flex-nowrap navSpace font-bold tracking-tighter lg:tracking-tight"
                >
                  <Popover className="relative">
                    {({ open, close }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open ? 'text-gray-900' : 'text-gray-500',
                            'group bg-white font-bold rounded-md inline-flex items-center text-base hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-400 mr-2'
                          )}
                        >
                          <span>Immobilienverkauf</span>
                          <ChevronDownIcon
                            className={classNames(
                              open ? 'text-gray-600' : 'text-gray-400',
                              'ml-1 h-5 w-5 group-hover:text-gray-500'
                            )}
                            aria-hidden="true"
                          />
                        </Popover.Button>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                            <div className="font-medium rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 shadow-none">
                                {resources.map((item) => (
                                  <Link key={item.name} href={item.href}>
                                    <a
                                      onClick={() => close()}
                                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-100 nav-link"
                                    >
                                      <item.icon
                                        className="flex-shrink-0 h-6 w-6 text-primary-500"
                                        aria-hidden="true"
                                      />
                                      <div className="ml-4">
                                        <p className="text-base font-medium text-gray-900">
                                          {item.name}
                                        </p>
                                      </div>
                                    </a>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>

                  <Popover className="relative">
                    {({ open, close }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open ? 'text-gray-900' : 'text-gray-500',
                            'group bg-white font-bold rounded-md inline-flex items-center text-base hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-400'
                          )}
                        >
                          <span>Immobilienwissen</span>
                          <ChevronDownIcon
                            className={classNames(
                              open ? 'text-gray-600' : 'text-gray-400',
                              'ml-1 h-5 w-5 group-hover:text-gray-500'
                            )}
                            aria-hidden="true"
                          />
                        </Popover.Button>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                            <div className="font-medium rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 shadow-none">
                                <a href={leasebackSaleUrl}>
                                  <a
                                    onClick={() => close()}
                                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-100"
                                  >
                                    <div className="ml-4">
                                      <p className="text-base font-medium text-gray-900">
                                        Rückmietverkauf
                                      </p>
                                    </div>
                                  </a>
                                </a>
                                <a href={partialSaleUrl}>
                                  <a
                                    onClick={() => close()}
                                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-100"
                                  >
                                    <div className="ml-4">
                                      <p className="text-base font-medium text-gray-900">
                                        Teilverkauf Immobilie
                                      </p>
                                    </div>
                                  </a>
                                </a>
                                <a href={saleWithResidenceUrl}>
                                  <a
                                    onClick={() => close()}
                                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-100"
                                  >
                                    <div className="ml-4">
                                      <p className="text-base font-medium text-gray-900">
                                        Hausverkauf mit Wohnrecht
                                      </p>
                                    </div>
                                  </a>
                                </a>
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                  <Link href={`${homeUrl}presse`}>
                    <a className="text-base text-gray-500 hover:text-gray-900 mr-2">
                      Presse
                    </a>
                  </Link>
                </Popover.Group>
              </div>
              <div className="phoneSec ml-4 p-1 flex justify-center items-center rounded-md xl:text-lg font-bold text-gray-900 hover:bg-gray-100">
                <PhoneIcon
                  className="flex-shrink-0 h-7 w-7 text-primary-800"
                  aria-hidden="true"
                />
                <span className="ml-1 whitespace-nowrap">
                  <PhoneNumber domainInfos={props.domainInfos} />
                </span>
              </div>
            </div>

            <div className="hidden md:flex md:flex-col items-end">
              <div className="flex">
                <Link href={contactOfferUrl}>
                  <a className="w-56 mb-1 whitespace-nowrap inline-flex py-1 border border-transparent rounded-md shadow-sm xl:text-lg font-bold text-white bg-primary-500 hover:bg-primary-700">
                    <div className="text-center m-auto">Angebot anfordern</div>
                  </a>
                </Link>
              </div>
              <div className="flex">
                <Link href={contactInfoUrl}>
                  <a className="w-56 whitespace-nowrap inline-flex py-1 border border-transparent rounded-md shadow-sm xl:text-lg font-bold text-white bg-primary-500 hover:bg-primary-700">
                    <div className="text-center m-auto">
                      Infomaterial anfordern
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE */}
        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute top-0 inset-x-0 transition transform origin-top-right md:hidden"
          >
            {({ close }) => (
              <div className="bg-white divide-y-2 divide-gray-50">
                <div className="pt-2 pb-2 px-5">
                  <div className="flex items-center justify-between">
                    <div className="flex">
                      <Link href="/">
                        <a className="mob-logo">
                          <span className="sr-only">GNIW</span>
                          <img
                            height="40"
                            width="96"
                            src={SmallLogo.src}
                            alt="GNIW Logo"
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-400">
                        <span className="sr-only">Menü schließen</span>
                        <XIcon className="h-8 w-8" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="py-1 px-5 space-y-6 nav-list-overflow">
                  <div className="font-medium overflow-hidden">
                    <div className="grid align-middle bg-white px-5 sm:gap-8 sm:p-8 grid-cols-1 divide-y shadow-none">
                      <Disclosure defaultOpen>
                        {({ open }) => (
                          <>
                            <Disclosure.Button>
                              <Link href="#">
                                <a>
                                  <div className="flex justify-between items-center my-5">
                                    <p className="inline-block text-left text-2xl font-medium text-gray-900">
                                      Immobilienverkauf
                                    </p>
                                    <p className="inline-block">
                                      <ChevronDownIcon
                                        className={`inline-block ${
                                          open
                                            ? 'transform rotate-180 w-5 text-gray-900'
                                            : 'w-5 text-gray-900'
                                        }`}
                                      />
                                    </p>
                                  </div>
                                </a>
                              </Link>
                            </Disclosure.Button>
                            <Transition
                              enter="transition duration-100 ease-out"
                              enterFrom="transform scale-95 opacity-0"
                              enterTo="transform scale-100 opacity-100"
                              leave="transition duration-75 ease-out"
                              leaveFrom="transform scale-100 opacity-100"
                              leaveTo="transform scale-95 opacity-0"
                            ></Transition>
                            <Disclosure.Panel>
                              <div className="leading-2 mx-2 px-2">
                                {resources
                                  .filter((item) => item.name !== 'Kontakt')
                                  .map((item) => (
                                    <Link href={item.href} key={item.name}>
                                      <a
                                        onClick={() => close()}
                                        className="m-1 p-2 flex items-start rounded-lg hover:bg-gray-100 nav-link"
                                      >
                                        <item.icon
                                          className="flex-shrink-0 h-6 w-6 text-primary-500"
                                          aria-hidden="true"
                                        />
                                        <div className="ml-4">
                                          <p className="text-sm font-normal text-gray-700">
                                            {item.name}
                                          </p>
                                        </div>
                                      </a>
                                    </Link>
                                  ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                      <Link href={`${homeUrl}presse`}>
                        <a>
                          <div className="flex justify-start items-center my-5">
                            <p className="inline-block text-left text-2xl font-medium text-gray-900">
                              Presse
                            </p>
                          </div>
                        </a>
                      </Link>
                      <Link href={`${homeUrl}#kontakt`}>
                        <a onClick={() => close()}>
                          <div className="flex justify-start items-center my-5">
                            <p className="inline-block text-left text-2xl font-medium text-gray-900">
                              Kontakt
                            </p>
                          </div>
                        </a>
                      </Link>
                      <Disclosure>
                        {({ open }) => (
                          <>
                            <Disclosure.Button>
                              <Link href="#">
                                <a>
                                  <div className="flex justify-between items-center my-5">
                                    <p className="inline-block text-left text-2xl font-medium text-gray-900">
                                      Immobilienwissen
                                    </p>
                                    <p className="inline-block">
                                      <ChevronDownIcon
                                        className={`${
                                          open
                                            ? 'transform rotate-180 w-5 text-gray-900 text-right'
                                            : 'w-5 text-gray-900'
                                        }`}
                                      />
                                    </p>
                                  </div>
                                </a>
                              </Link>
                            </Disclosure.Button>
                            <Transition
                              enter="transition duration-100 ease-out"
                              enterFrom="transform scale-95 opacity-0"
                              enterTo="transform scale-100 opacity-100"
                              leave="transition duration-75 ease-out"
                              leaveFrom="transform scale-100 opacity-100"
                              leaveTo="transform scale-95 opacity-0"
                            ></Transition>
                            <Disclosure.Panel>
                              <div className="leading-2 mx-2 px-2 mb-4">
                                <Link href={leasebackSaleUrl}>
                                  <a
                                    onClick={() => close()}
                                    className="m-1 p-2 flex items-start rounded-lg hover:bg-gray-100 nav-link"
                                  >
                                    <div>
                                      <p className="text-base font-medium text-gray-900">
                                        Rückmietverkauf
                                      </p>
                                    </div>
                                  </a>
                                </Link>
                                <Link href={partialSaleUrl}>
                                  <a
                                    onClick={() => close()}
                                    className="m-1 p-2 flex items-start rounded-lg hover:bg-gray-100 nav-link"
                                  >
                                    <div>
                                      <p className="text-base font-medium text-gray-900">
                                        Teilverkauf Immobilie
                                      </p>
                                    </div>
                                  </a>
                                </Link>
                                <Link href={saleWithResidenceUrl}>
                                  <a
                                    onClick={() => close()}
                                    className="m-1 p-2 flex items-start rounded-lg hover:bg-gray-100 nav-link"
                                  >
                                    <div>
                                      <p className="text-base font-medium text-gray-900">
                                        Hausverkauf mit Wohnrecht
                                      </p>
                                    </div>
                                  </a>
                                </Link>
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                      <div className="mt-2">
                        <Link href={contactOfferUrl}>
                          <a
                            onClick={() => close()}
                            className="w-full mb-1 flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-500 hover:bg-primary-700"
                          >
                            Angebot anfordern
                          </a>
                        </Link>
                        <Link href={contactInfoUrl}>
                          <a
                            onClick={() => close()}
                            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-500 hover:bg-primary-700"
                          >
                            Infomaterial anfordern
                          </a>
                        </Link>
                        <p className="flex items-center justify-center mt-3 text-center text-base font-medium text-gray-500">
                          <div className="m-1 p-1 flex items-center rounded-md text-lg font-bold text-gray-900 hover:bg-gray-100">
                            <PhoneIcon
                              className="flex-shrink-0 h-8 w-8 text-primary-800"
                              aria-hidden="true"
                            />
                            <span className="ml-2">
                              <PhoneNumber domainInfos={props.domainInfos} />
                            </span>
                          </div>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}
