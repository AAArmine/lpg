(() => {
var exports = {};
exports.id = "pages/hausverkauf-mit-wohnrecht";
exports.ids = ["pages/hausverkauf-mit-wohnrecht"];
exports.modules = {

/***/ "./node_modules/next/dist/shared/lib/dynamic.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/dynamic.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.noSSR = noSSR;
exports.default = dynamic;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _loadable = _interopRequireDefault(__webpack_require__(/*! ./loadable */ "./loadable"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const isServerSide = true;

function noSSR(LoadableInitializer, loadableOptions) {
  // Removing webpack and modules means react-loadable won't try preloading
  delete loadableOptions.webpack;
  delete loadableOptions.modules; // This check is necessary to prevent react-loadable from initializing on the server

  if (!isServerSide) {
    return LoadableInitializer(loadableOptions);
  }

  const Loading = loadableOptions.loading; // This will only be rendered on the server side

  return () => /*#__PURE__*/_react.default.createElement(Loading, {
    error: null,
    isLoading: true,
    pastDelay: false,
    timedOut: false
  });
}

function dynamic(dynamicOptions, options) {
  let loadableFn = _loadable.default;
  let loadableOptions = {
    // A loading component is not required, so we default it
    loading: ({
      error,
      isLoading,
      pastDelay
    }) => {
      if (!pastDelay) return null;

      if (true) {
        if (isLoading) {
          return null;
        }

        if (error) {
          return /*#__PURE__*/_react.default.createElement("p", null, error.message, /*#__PURE__*/_react.default.createElement("br", null), error.stack);
        }
      }

      return null;
    }
  }; // Support for direct import(), eg: dynamic(import('../hello-world'))
  // Note that this is only kept for the edge case where someone is passing in a promise as first argument
  // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))
  // To make sure we don't execute the import without rendering first

  if (dynamicOptions instanceof Promise) {
    loadableOptions.loader = () => dynamicOptions; // Support for having import as a function, eg: dynamic(() => import('../hello-world'))

  } else if (typeof dynamicOptions === 'function') {
    loadableOptions.loader = dynamicOptions; // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})
  } else if (typeof dynamicOptions === 'object') {
    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), dynamicOptions);
  } // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})


  loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), options);
  const suspenseOptions = loadableOptions;

  if (true) {
    // Error if react root is not enabled and `suspense` option is set to true
    if ( true && suspenseOptions.suspense) {
      // TODO: add error doc when this feature is stable
      throw new Error(`Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense`);
    }
  }

  if (suspenseOptions.suspense) {
    return loadableFn(suspenseOptions);
  } // coming from build/babel/plugins/react-loadable-plugin.js


  if (loadableOptions.loadableGenerated) {
    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), loadableOptions.loadableGenerated);
    delete loadableOptions.loadableGenerated;
  } // support for disabling server side rendering, eg: dynamic(import('../hello-world'), {ssr: false})


  if (typeof loadableOptions.ssr === 'boolean') {
    if (!loadableOptions.ssr) {
      delete loadableOptions.ssr;
      return noSSR(loadableFn, loadableOptions);
    }

    delete loadableOptions.ssr;
  }

  return loadableFn(loadableOptions);
}

/***/ }),

/***/ "./src/layout/Loader.tsx":
/*!*******************************!*\
  !*** ./src/layout/Loader.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\layout\\Loader.tsx";


const Loader = () => {
  const circleCommonClasses = 'h-2.5 w-2.5 bg-current rounded-full inline-block';
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "flex justify-center h-screen items-center",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: `${circleCommonClasses} mr-1 animate-bounce inline`,
      children: ` `
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: `${circleCommonClasses} mr-1 animate-bounce200 inline`,
      children: ` `
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: `${circleCommonClasses} animate-bounce400 inline`,
      children: ` `
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);

/***/ }),

/***/ "./src/lib/cms/datoCms/datoCmsClient.ts":
/*!**********************************************!*\
  !*** ./src/lib/cms/datoCms/datoCmsClient.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "datoCmsClient": () => (/* binding */ datoCmsClient)
/* harmony export */ });
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-request */ "graphql-request");
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);

function datoCmsClient({
  query,
  variables,
  preview
}) {
  const endpoint = preview ? `https://graphql.datocms.com/preview` : `https://graphql.datocms.com/`;
  const client = new graphql_request__WEBPACK_IMPORTED_MODULE_0__.GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`
    }
  });
  return client.request(query, variables);
}

/***/ }),

/***/ "./src/lib/cms/datoCms/getArticles.ts":
/*!********************************************!*\
  !*** ./src/lib/cms/datoCms/getArticles.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getArticles": () => (/* binding */ getArticles)
/* harmony export */ });
/* harmony import */ var _datoCmsClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datoCmsClient */ "./src/lib/cms/datoCms/datoCmsClient.ts");

const ARTICLES_QUERY = `query ArticlesQuery {
  allArticles(first: 100) {
    date
    title
    pressLogo {
      url
    }
    images {
      url
    }
    url
  }
}`;
const getArticles = async () => (0,_datoCmsClient__WEBPACK_IMPORTED_MODULE_0__.datoCmsClient)({
  query: ARTICLES_QUERY,
  preview: true
}).then(({
  allArticles
}) => allArticles);

/***/ }),

/***/ "./src/lib/cms/datoCms/getDomainInfos.ts":
/*!***********************************************!*\
  !*** ./src/lib/cms/datoCms/getDomainInfos.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDomainInfos": () => (/* binding */ getDomainInfos)
/* harmony export */ });
/* harmony import */ var _datoCmsClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datoCmsClient */ "./src/lib/cms/datoCms/datoCmsClient.ts");

const DOMAINS_QUERY = `query DomainsQuery {
	allDomains {
    domainName
    phoneNumber
  }
}
`;
const getDomainInfos = async () => (0,_datoCmsClient__WEBPACK_IMPORTED_MODULE_0__.datoCmsClient)({
  query: DOMAINS_QUERY,
  preview: true
}).then(({
  allDomains
}) => allDomains);

/***/ }),

/***/ "./src/lib/cms/datoCms/getFaqs.ts":
/*!****************************************!*\
  !*** ./src/lib/cms/datoCms/getFaqs.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFaqs": () => (/* binding */ getFaqs)
/* harmony export */ });
/* harmony import */ var _datoCmsClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datoCmsClient */ "./src/lib/cms/datoCms/datoCmsClient.ts");

const FAQS_QUERY = `query faqs {
  allFaqs {
    question
    answer
  }
}
`;
const getFaqs = async () => (0,_datoCmsClient__WEBPACK_IMPORTED_MODULE_0__.datoCmsClient)({
  query: FAQS_QUERY,
  preview: true
}).then(({
  allFaqs
}) => allFaqs);

/***/ }),

/***/ "./src/lib/cms/datoCms/getHouseSaleInfo.ts":
/*!*************************************************!*\
  !*** ./src/lib/cms/datoCms/getHouseSaleInfo.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getHouseSaleInfo": () => (/* binding */ getHouseSaleInfo),
/* harmony export */   "getHouseSaleMeta": () => (/* binding */ getHouseSaleMeta)
/* harmony export */ });
/* harmony import */ var _datoCmsClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datoCmsClient */ "./src/lib/cms/datoCms/datoCmsClient.ts");

const HOUSE_SALE_QUERY = `query allSalesInfo {
  allHausverkaufMitWohnrechtSections {
    body {
      value
    }
    title
    image {
      url
      alt
    }
  }
}
`;
const META_QUERY = `query allMeta {
   allHausverkaufMitWohnrechtSeos {
    seo {
      description
      title
    }
  }
}
`;
const getHouseSaleInfo = async () => (0,_datoCmsClient__WEBPACK_IMPORTED_MODULE_0__.datoCmsClient)({
  query: HOUSE_SALE_QUERY,
  preview: true
}).then(({
  allHausverkaufMitWohnrechtSections
}) => allHausverkaufMitWohnrechtSections);
const getHouseSaleMeta = async () => (0,_datoCmsClient__WEBPACK_IMPORTED_MODULE_0__.datoCmsClient)({
  query: META_QUERY,
  preview: true
}).then(({
  allHausverkaufMitWohnrechtSeos
}) => allHausverkaufMitWohnrechtSeos);

/***/ }),

/***/ "./src/lib/cms/datoCms/getRealEstateSales.ts":
/*!***************************************************!*\
  !*** ./src/lib/cms/datoCms/getRealEstateSales.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRealEstateSales": () => (/* binding */ getRealEstateSales)
/* harmony export */ });
/* harmony import */ var _datoCmsClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datoCmsClient */ "./src/lib/cms/datoCms/datoCmsClient.ts");

const REAL_ESTATE_SALES = `query realSales {
  allImmobilienverkaufMitWohnrechtSchrittens {
    title
    body {
      value
    }
  }
}
`;
const getRealEstateSales = async () => (0,_datoCmsClient__WEBPACK_IMPORTED_MODULE_0__.datoCmsClient)({
  query: REAL_ESTATE_SALES,
  preview: true
}).then(({
  allImmobilienverkaufMitWohnrechtSchrittens
}) => allImmobilienverkaufMitWohnrechtSchrittens);

/***/ }),

/***/ "./src/lib/cms/datoCms/getSalesFAQs.ts":
/*!*********************************************!*\
  !*** ./src/lib/cms/datoCms/getSalesFAQs.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSalesFAQs": () => (/* binding */ getSalesFAQs)
/* harmony export */ });
/* harmony import */ var _datoCmsClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datoCmsClient */ "./src/lib/cms/datoCms/datoCmsClient.ts");

const SALES_FAQS = `query salesFaqs {
  allHausverkaufMitWohnrechtFaqs {
    question
    answer {
      value
    }
  }
}
`;
const getSalesFAQs = async () => (0,_datoCmsClient__WEBPACK_IMPORTED_MODULE_0__.datoCmsClient)({
  query: SALES_FAQS,
  preview: true
}).then(({
  allHausverkaufMitWohnrechtFaqs
}) => allHausverkaufMitWohnrechtFaqs);

/***/ }),

/***/ "./src/lib/cms/index.ts":
/*!******************************!*\
  !*** ./src/lib/cms/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDomainInfos": () => (/* binding */ getDomainInfos),
/* harmony export */   "getArticles": () => (/* binding */ getArticles),
/* harmony export */   "getFaqs": () => (/* binding */ getFaqs),
/* harmony export */   "getHouseSaleInfo": () => (/* binding */ getHouseSaleInfo),
/* harmony export */   "getRealEstateSales": () => (/* binding */ getRealEstateSales),
/* harmony export */   "getSalesFAQs": () => (/* binding */ getSalesFAQs),
/* harmony export */   "getHouseSaleMeta": () => (/* binding */ getHouseSaleMeta)
/* harmony export */ });
/* harmony import */ var _datoCms_getDomainInfos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datoCms/getDomainInfos */ "./src/lib/cms/datoCms/getDomainInfos.ts");
/* harmony import */ var _datoCms_getArticles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datoCms/getArticles */ "./src/lib/cms/datoCms/getArticles.ts");
/* harmony import */ var _datoCms_getFaqs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datoCms/getFaqs */ "./src/lib/cms/datoCms/getFaqs.ts");
/* harmony import */ var _datoCms_getHouseSaleInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datoCms/getHouseSaleInfo */ "./src/lib/cms/datoCms/getHouseSaleInfo.ts");
/* harmony import */ var _datoCms_getRealEstateSales__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./datoCms/getRealEstateSales */ "./src/lib/cms/datoCms/getRealEstateSales.ts");
/* harmony import */ var _datoCms_getSalesFAQs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datoCms/getSalesFAQs */ "./src/lib/cms/datoCms/getSalesFAQs.ts");






const getDomainInfos = _datoCms_getDomainInfos__WEBPACK_IMPORTED_MODULE_0__.getDomainInfos;
const getArticles = _datoCms_getArticles__WEBPACK_IMPORTED_MODULE_1__.getArticles;
const getFaqs = _datoCms_getFaqs__WEBPACK_IMPORTED_MODULE_2__.getFaqs;
const getHouseSaleInfo = _datoCms_getHouseSaleInfo__WEBPACK_IMPORTED_MODULE_3__.getHouseSaleInfo;
const getRealEstateSales = _datoCms_getRealEstateSales__WEBPACK_IMPORTED_MODULE_4__.getRealEstateSales;
const getSalesFAQs = _datoCms_getSalesFAQs__WEBPACK_IMPORTED_MODULE_5__.getSalesFAQs;
const getHouseSaleMeta = _datoCms_getHouseSaleInfo__WEBPACK_IMPORTED_MODULE_3__.getHouseSaleMeta;

/***/ }),

/***/ "./src/pages/hausverkauf-mit-wohnrecht.tsx":
/*!*************************************************!*\
  !*** ./src/pages/hausverkauf-mit-wohnrecht.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout/Loader */ "./src/layout/Loader.tsx");
/* harmony import */ var _lib_cms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/cms */ "./src/lib/cms/index.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
const _excluded = ["salesSEO"];
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\pages\\hausverkauf-mit-wohnrecht.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable react/display-name */





const SaleWithResidenceLayout = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/*! import() */ "src_templates_SaleWithResidenceLayout_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../templates/SaleWithResidenceLayout */ "./src/templates/SaleWithResidenceLayout.tsx")), {
  loading: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_layout_Loader__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 20
  }, undefined),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../templates/SaleWithResidenceLayout */ "./src/templates/SaleWithResidenceLayout.tsx")],
    modules: ["hausverkauf-mit-wohnrecht.tsx -> " + '../templates/SaleWithResidenceLayout']
  }
});
const SaleWithResidenceTemplate = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/*! import() */ "src_templates_SaleWithResidence_index_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../templates/SaleWithResidence */ "./src/templates/SaleWithResidence/index.tsx")), {
  loading: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_layout_Loader__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 20
  }, undefined),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../templates/SaleWithResidence */ "./src/templates/SaleWithResidence/index.tsx")],
    modules: ["hausverkauf-mit-wohnrecht.tsx -> " + '../templates/SaleWithResidence']
  }
});

const SaleWithResidence = staticProps => {
  // eslint-disable-next-line no-console
  const {
    salesSEO
  } = staticProps,
        Others = _objectWithoutProperties(staticProps, _excluded);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(SaleWithResidenceLayout, _objectSpread(_objectSpread({}, salesSEO), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(SaleWithResidenceTemplate, _objectSpread({}, Others), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, undefined)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, undefined);
};

const getStaticProps = async () => {
  try {
    const [infos, realEstateInfo, salesFAQs, salesSEO] = await Promise.all([(0,_lib_cms__WEBPACK_IMPORTED_MODULE_3__.getHouseSaleInfo)(), (0,_lib_cms__WEBPACK_IMPORTED_MODULE_3__.getRealEstateSales)(), (0,_lib_cms__WEBPACK_IMPORTED_MODULE_3__.getSalesFAQs)(), (0,_lib_cms__WEBPACK_IMPORTED_MODULE_3__.getHouseSaleMeta)()]);
    return {
      props: {
        infos,
        realEstateInfo,
        salesFAQs,
        salesSEO
      }
    };
  } catch {
    /* */
  }

  return {
    props: {
      infos: [],
      realEstateInfo: [],
      salesFAQs: [],
      salesSEO: []
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SaleWithResidence);

/***/ }),

/***/ "./node_modules/next/dynamic.js":
/*!**************************************!*\
  !*** ./node_modules/next/dynamic.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/shared/lib/dynamic */ "./node_modules/next/dist/shared/lib/dynamic.js")


/***/ }),

/***/ "@headlessui/react":
/*!************************************!*\
  !*** external "@headlessui/react" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@headlessui/react");

/***/ }),

/***/ "graphql-request":
/*!**********************************!*\
  !*** external "graphql-request" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("graphql-request");

/***/ }),

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-seo");

/***/ }),

/***/ "../../../server/denormalize-page-path":
/*!************************************************************!*\
  !*** external "next/dist/server/denormalize-page-path.js" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ "../server/image-config":
/*!***************************************************!*\
  !*** external "next/dist/server/image-config.js" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ "../shared/lib/head":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/head.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ "../i18n/normalize-locale-path":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/i18n/normalize-locale-path.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ "./loadable":
/*!***************************************************!*\
  !*** external "next/dist/shared/lib/loadable.js" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ "../mitt":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/mitt.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ "../shared/lib/router-context":
/*!*********************************************************!*\
  !*** external "next/dist/shared/lib/router-context.js" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ "../shared/lib/router/utils/get-asset-path-from-route":
/*!*********************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/get-asset-path-from-route.js" ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./utils/is-dynamic":
/*!******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/is-dynamic.js" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ "./utils/parse-relative-url":
/*!**************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/parse-relative-url.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ "./utils/querystring":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/querystring.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ "./utils/resolve-rewrites":
/*!************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/resolve-rewrites.js" ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ "./utils/route-matcher":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-matcher.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ "./utils/route-regex":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-regex.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ "../shared/lib/to-base-64":
/*!*****************************************************!*\
  !*** external "next/dist/shared/lib/to-base-64.js" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "next/script":
/*!******************************!*\
  !*** external "next/script" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/script");

/***/ }),

/***/ "rc-slider":
/*!****************************!*\
  !*** external "rc-slider" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("rc-slider");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-is");

/***/ }),

/***/ "react-modal":
/*!******************************!*\
  !*** external "react-modal" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-modal");

/***/ }),

/***/ "react-responsive-carousel":
/*!********************************************!*\
  !*** external "react-responsive-carousel" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-responsive-carousel");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-jsx/style");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("uuid");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/hausverkauf-mit-wohnrecht.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0MsUUFBQUEsY0FBVDtBQUF5QkMsUUFBQUEsU0FBekI7QUFBb0NMLFFBQUFBO0FBQXBDO0FBREYsS0FBUDtBQUdELEdBVkQsQ0FVRSxNQUFNO0FBQ047QUFDRDs7QUFFRCxTQUFPO0FBQ0xPLElBQUFBLEtBQUssRUFBRTtBQUFFSixNQUFBQSxLQUFLLEVBQUUsRUFBVDtBQUFhQyxNQUFBQSxjQUFjLEVBQUUsRUFBN0I7QUFBaUNDLE1BQUFBLFNBQVMsRUFBRSxFQUE1QztBQUFnREwsTUFBQUEsUUFBUSxFQUFFO0FBQTFEO0FBREYsR0FBUDtBQUdELENBbEJNO0FBb0JQLGlFQUFlRixpQkFBZjs7Ozs7Ozs7OztBQ25EQSx1SEFBcUQ7Ozs7Ozs7Ozs7OztBQ0FyRDs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2duaXctd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2hhcmVkL2xpYi9keW5hbWljLmpzIiwid2VicGFjazovL2duaXctd2Vic2l0ZS8uL3NyYy9sYXlvdXQvTG9hZGVyLnRzeCIsIndlYnBhY2s6Ly9nbml3LXdlYnNpdGUvLi9zcmMvbGliL2Ntcy9kYXRvQ21zL2RhdG9DbXNDbGllbnQudHMiLCJ3ZWJwYWNrOi8vZ25pdy13ZWJzaXRlLy4vc3JjL2xpYi9jbXMvZGF0b0Ntcy9nZXRBcnRpY2xlcy50cyIsIndlYnBhY2s6Ly9nbml3LXdlYnNpdGUvLi9zcmMvbGliL2Ntcy9kYXRvQ21zL2dldERvbWFpbkluZm9zLnRzIiwid2VicGFjazovL2duaXctd2Vic2l0ZS8uL3NyYy9saWIvY21zL2RhdG9DbXMvZ2V0RmFxcy50cyIsIndlYnBhY2s6Ly9nbml3LXdlYnNpdGUvLi9zcmMvbGliL2Ntcy9kYXRvQ21zL2dldEhvdXNlU2FsZUluZm8udHMiLCJ3ZWJwYWNrOi8vZ25pdy13ZWJzaXRlLy4vc3JjL2xpYi9jbXMvZGF0b0Ntcy9nZXRSZWFsRXN0YXRlU2FsZXMudHMiLCJ3ZWJwYWNrOi8vZ25pdy13ZWJzaXRlLy4vc3JjL2xpYi9jbXMvZGF0b0Ntcy9nZXRTYWxlc0ZBUXMudHMiLCJ3ZWJwYWNrOi8vZ25pdy13ZWJzaXRlLy4vc3JjL2xpYi9jbXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZ25pdy13ZWJzaXRlLy4vc3JjL3BhZ2VzL2hhdXN2ZXJrYXVmLW1pdC13b2hucmVjaHQudHN4Iiwid2VicGFjazovL2duaXctd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9uZXh0L2R5bmFtaWMuanMiLCJ3ZWJwYWNrOi8vZ25pdy13ZWJzaXRlL2V4dGVybmFsIFwiQGhlYWRsZXNzdWkvcmVhY3RcIiIsIndlYnBhY2s6Ly9nbml3LXdlYnNpdGUvZXh0ZXJuYWwgXCJncmFwaHFsLXJlcXVlc3RcIiIsIndlYnBhY2s6Ly9nbml3LXdlYnNpdGUvZXh0ZXJuYWwgXCJuZXh0LXNlb1wiIiwid2VicGFjazovL2duaXctd2Vic2l0ZS9leHRlcm5hbCBcIm5leHQvZGlzdC9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzXCIiLCJ3ZWJwYWNrOi8vZ25pdy13ZWJzaXRlL2V4dGVybmFsIFwibmV4dC9kaXN0L3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly9nbml3LXdlYnNpdGUvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vZ25pdy13ZWJzaXRlL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanNcIiIsIndlYnBhY2s6Ly9nbml3LXdlYnNpdGUvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9sb2FkYWJsZS5qc1wiIiwid2VicGFjazovL2duaXctd2Vic2l0ZS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL21pdHQuanNcIiIsIndlYnBhY2s6Ly9nbml3LXdlYnNpdGUvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL2duaXctd2Vic2l0ZS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vZ25pdy13ZWJzaXRlL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanNcIiIsIndlYnBhY2s6Ly9nbml3LXdlYnNpdGUvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzXCIiLCJ3ZWJwYWNrOi8vZ25pdy13ZWJzaXRlL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzXCIiLCJ3ZWJwYWNrOi8vZ25pdy13ZWJzaXRlL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMuanNcIiIsIndlYnBhY2s6Ly9nbml3LXdlYnNpdGUvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qc1wiIiwid2VicGFjazovL2duaXctd2Vic2l0ZS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qc1wiIiwid2VicGFjazovL2duaXctd2Vic2l0ZS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly9nbml3LXdlYnNpdGUvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovL2duaXctd2Vic2l0ZS9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2duaXctd2Vic2l0ZS9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vZ25pdy13ZWJzaXRlL2V4dGVybmFsIFwibmV4dC9zY3JpcHRcIiIsIndlYnBhY2s6Ly9nbml3LXdlYnNpdGUvZXh0ZXJuYWwgXCJyYy1zbGlkZXJcIiIsIndlYnBhY2s6Ly9nbml3LXdlYnNpdGUvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2duaXctd2Vic2l0ZS9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vZ25pdy13ZWJzaXRlL2V4dGVybmFsIFwicmVhY3QtbW9kYWxcIiIsIndlYnBhY2s6Ly9nbml3LXdlYnNpdGUvZXh0ZXJuYWwgXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsXCIiLCJ3ZWJwYWNrOi8vZ25pdy13ZWJzaXRlL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vZ25pdy13ZWJzaXRlL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIiwid2VicGFjazovL2duaXctd2Vic2l0ZS9leHRlcm5hbCBcInV1aWRcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMubm9TU1IgPSBub1NTUjtcbmV4cG9ydHMuZGVmYXVsdCA9IGR5bmFtaWM7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9sb2FkYWJsZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbG9hZGFibGVcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3QgaXNTZXJ2ZXJTaWRlID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCc7XG5mdW5jdGlvbiBub1NTUihMb2FkYWJsZUluaXRpYWxpemVyLCBsb2FkYWJsZU9wdGlvbnMpIHtcbiAgICAvLyBSZW1vdmluZyB3ZWJwYWNrIGFuZCBtb2R1bGVzIG1lYW5zIHJlYWN0LWxvYWRhYmxlIHdvbid0IHRyeSBwcmVsb2FkaW5nXG4gICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy53ZWJwYWNrO1xuICAgIGRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMubW9kdWxlcztcbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBwcmV2ZW50IHJlYWN0LWxvYWRhYmxlIGZyb20gaW5pdGlhbGl6aW5nIG9uIHRoZSBzZXJ2ZXJcbiAgICBpZiAoIWlzU2VydmVyU2lkZSkge1xuICAgICAgICByZXR1cm4gTG9hZGFibGVJbml0aWFsaXplcihsb2FkYWJsZU9wdGlvbnMpO1xuICAgIH1cbiAgICBjb25zdCBMb2FkaW5nID0gbG9hZGFibGVPcHRpb25zLmxvYWRpbmc7XG4gICAgLy8gVGhpcyB3aWxsIG9ubHkgYmUgcmVuZGVyZWQgb24gdGhlIHNlcnZlciBzaWRlXG4gICAgcmV0dXJuICgpPT4vKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTG9hZGluZywge1xuICAgICAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICAgICAgICBpc0xvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICBwYXN0RGVsYXk6IGZhbHNlLFxuICAgICAgICAgICAgdGltZWRPdXQ6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgO1xufVxuZnVuY3Rpb24gZHluYW1pYyhkeW5hbWljT3B0aW9ucywgb3B0aW9ucykge1xuICAgIGxldCBsb2FkYWJsZUZuID0gX2xvYWRhYmxlLmRlZmF1bHQ7XG4gICAgbGV0IGxvYWRhYmxlT3B0aW9ucyA9IHtcbiAgICAgICAgLy8gQSBsb2FkaW5nIGNvbXBvbmVudCBpcyBub3QgcmVxdWlyZWQsIHNvIHdlIGRlZmF1bHQgaXRcbiAgICAgICAgbG9hZGluZzogKHsgZXJyb3IgLCBpc0xvYWRpbmcgLCBwYXN0RGVsYXkgIH0pPT57XG4gICAgICAgICAgICBpZiAoIXBhc3REZWxheSkgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgZXJyb3IubWVzc2FnZSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksIGVycm9yLnN0YWNrKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIFN1cHBvcnQgZm9yIGRpcmVjdCBpbXBvcnQoKSwgZWc6IGR5bmFtaWMoaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKVxuICAgIC8vIE5vdGUgdGhhdCB0aGlzIGlzIG9ubHkga2VwdCBmb3IgdGhlIGVkZ2UgY2FzZSB3aGVyZSBzb21lb25lIGlzIHBhc3NpbmcgaW4gYSBwcm9taXNlIGFzIGZpcnN0IGFyZ3VtZW50XG4gICAgLy8gVGhlIHJlYWN0LWxvYWRhYmxlIGJhYmVsIHBsdWdpbiB3aWxsIHR1cm4gZHluYW1pYyhpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJykpIGludG8gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJykpXG4gICAgLy8gVG8gbWFrZSBzdXJlIHdlIGRvbid0IGV4ZWN1dGUgdGhlIGltcG9ydCB3aXRob3V0IHJlbmRlcmluZyBmaXJzdFxuICAgIGlmIChkeW5hbWljT3B0aW9ucyBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgbG9hZGFibGVPcHRpb25zLmxvYWRlciA9ICgpPT5keW5hbWljT3B0aW9uc1xuICAgICAgICA7XG4gICAgLy8gU3VwcG9ydCBmb3IgaGF2aW5nIGltcG9ydCBhcyBhIGZ1bmN0aW9uLCBlZzogZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJykpXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZHluYW1pY09wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgbG9hZGFibGVPcHRpb25zLmxvYWRlciA9IGR5bmFtaWNPcHRpb25zO1xuICAgIC8vIFN1cHBvcnQgZm9yIGhhdmluZyBmaXJzdCBhcmd1bWVudCBiZWluZyBvcHRpb25zLCBlZzogZHluYW1pYyh7bG9hZGVyOiBpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJyl9KVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGR5bmFtaWNPcHRpb25zID09PSAnb2JqZWN0Jykge1xuICAgICAgICBsb2FkYWJsZU9wdGlvbnMgPSB7XG4gICAgICAgICAgICAuLi5sb2FkYWJsZU9wdGlvbnMsXG4gICAgICAgICAgICAuLi5keW5hbWljT3B0aW9uc1xuICAgICAgICB9O1xuICAgIH1cbiAgICAvLyBTdXBwb3J0IGZvciBwYXNzaW5nIG9wdGlvbnMsIGVnOiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSwge2xvYWRpbmc6ICgpID0+IDxwPkxvYWRpbmcgc29tZXRoaW5nPC9wPn0pXG4gICAgbG9hZGFibGVPcHRpb25zID0ge1xuICAgICAgICAuLi5sb2FkYWJsZU9wdGlvbnMsXG4gICAgICAgIC4uLm9wdGlvbnNcbiAgICB9O1xuICAgIGNvbnN0IHN1c3BlbnNlT3B0aW9ucyA9IGxvYWRhYmxlT3B0aW9ucztcbiAgICBpZiAoIXByb2Nlc3MuZW52Ll9fTkVYVF9DT05DVVJSRU5UX0ZFQVRVUkVTKSB7XG4gICAgICAgIC8vIEVycm9yIGlmIHJlYWN0IHJvb3QgaXMgbm90IGVuYWJsZWQgYW5kIGBzdXNwZW5zZWAgb3B0aW9uIGlzIHNldCB0byB0cnVlXG4gICAgICAgIGlmICghcHJvY2Vzcy5lbnYuX19ORVhUX1JFQUNUX1JPT1QgJiYgc3VzcGVuc2VPcHRpb25zLnN1c3BlbnNlKSB7XG4gICAgICAgICAgICAvLyBUT0RPOiBhZGQgZXJyb3IgZG9jIHdoZW4gdGhpcyBmZWF0dXJlIGlzIHN0YWJsZVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHN1c3BlbnNlIG9wdGlvbiB1c2FnZSBpbiBuZXh0L2R5bmFtaWMuIFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1keW5hbWljLXN1c3BlbnNlYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHN1c3BlbnNlT3B0aW9ucy5zdXNwZW5zZSkge1xuICAgICAgICByZXR1cm4gbG9hZGFibGVGbihzdXNwZW5zZU9wdGlvbnMpO1xuICAgIH1cbiAgICAvLyBjb21pbmcgZnJvbSBidWlsZC9iYWJlbC9wbHVnaW5zL3JlYWN0LWxvYWRhYmxlLXBsdWdpbi5qc1xuICAgIGlmIChsb2FkYWJsZU9wdGlvbnMubG9hZGFibGVHZW5lcmF0ZWQpIHtcbiAgICAgICAgbG9hZGFibGVPcHRpb25zID0ge1xuICAgICAgICAgICAgLi4ubG9hZGFibGVPcHRpb25zLFxuICAgICAgICAgICAgLi4ubG9hZGFibGVPcHRpb25zLmxvYWRhYmxlR2VuZXJhdGVkXG4gICAgICAgIH07XG4gICAgICAgIGRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMubG9hZGFibGVHZW5lcmF0ZWQ7XG4gICAgfVxuICAgIC8vIHN1cHBvcnQgZm9yIGRpc2FibGluZyBzZXJ2ZXIgc2lkZSByZW5kZXJpbmcsIGVnOiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSwge3NzcjogZmFsc2V9KVxuICAgIGlmICh0eXBlb2YgbG9hZGFibGVPcHRpb25zLnNzciA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIGlmICghbG9hZGFibGVPcHRpb25zLnNzcikge1xuICAgICAgICAgICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5zc3I7XG4gICAgICAgICAgICByZXR1cm4gbm9TU1IobG9hZGFibGVGbiwgbG9hZGFibGVPcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLnNzcjtcbiAgICB9XG4gICAgcmV0dXJuIGxvYWRhYmxlRm4obG9hZGFibGVPcHRpb25zKTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZHluYW1pYy5qcy5tYXAiLCJjb25zdCBMb2FkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgY2lyY2xlQ29tbW9uQ2xhc3NlcyA9XHJcbiAgICAnaC0yLjUgdy0yLjUgYmctY3VycmVudCByb3VuZGVkLWZ1bGwgaW5saW5lLWJsb2NrJztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBoLXNjcmVlbiBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17YCR7Y2lyY2xlQ29tbW9uQ2xhc3Nlc30gbXItMSBhbmltYXRlLWJvdW5jZSBpbmxpbmVgfVxyXG4gICAgICA+e2AgYH08L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NpcmNsZUNvbW1vbkNsYXNzZXN9IG1yLTEgYW5pbWF0ZS1ib3VuY2UyMDAgaW5saW5lYH0+XHJcbiAgICAgICAge2AgYH1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2Ake2NpcmNsZUNvbW1vbkNsYXNzZXN9IGFuaW1hdGUtYm91bmNlNDAwIGlubGluZWB9XHJcbiAgICAgID57YCBgfTwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRlcjtcclxuIiwiaW1wb3J0IHsgR3JhcGhRTENsaWVudCB9IGZyb20gJ2dyYXBocWwtcmVxdWVzdCc7XHJcblxyXG5leHBvcnQgdHlwZSBSZXF1ZXN0UHJvcHMgPSB7XHJcbiAgcXVlcnk6IHN0cmluZztcclxuICB2YXJpYWJsZXM/OiBhbnk7XHJcbiAgcHJldmlldz86IGJvb2xlYW47XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGF0b0Ntc0NsaWVudCh7IHF1ZXJ5LCB2YXJpYWJsZXMsIHByZXZpZXcgfTogUmVxdWVzdFByb3BzKSB7XHJcbiAgY29uc3QgZW5kcG9pbnQgPSBwcmV2aWV3XHJcbiAgICA/IGBodHRwczovL2dyYXBocWwuZGF0b2Ntcy5jb20vcHJldmlld2BcclxuICAgIDogYGh0dHBzOi8vZ3JhcGhxbC5kYXRvY21zLmNvbS9gO1xyXG4gIGNvbnN0IGNsaWVudCA9IG5ldyBHcmFwaFFMQ2xpZW50KGVuZHBvaW50LCB7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIGF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtwcm9jZXNzLmVudi5ORVhUX0RBVE9DTVNfQVBJX1RPS0VOfWAsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIHJldHVybiBjbGllbnQucmVxdWVzdChxdWVyeSwgdmFyaWFibGVzKTtcclxufVxyXG4iLCJpbXBvcnQgeyBBcnRpY2xlIH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5pbXBvcnQgeyBkYXRvQ21zQ2xpZW50IH0gZnJvbSAnLi9kYXRvQ21zQ2xpZW50JztcclxuXHJcbmNvbnN0IEFSVElDTEVTX1FVRVJZID0gYHF1ZXJ5IEFydGljbGVzUXVlcnkge1xyXG4gIGFsbEFydGljbGVzKGZpcnN0OiAxMDApIHtcclxuICAgIGRhdGVcclxuICAgIHRpdGxlXHJcbiAgICBwcmVzc0xvZ28ge1xyXG4gICAgICB1cmxcclxuICAgIH1cclxuICAgIGltYWdlcyB7XHJcbiAgICAgIHVybFxyXG4gICAgfVxyXG4gICAgdXJsXHJcbiAgfVxyXG59YDtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRBcnRpY2xlcyA9IGFzeW5jICgpOiBQcm9taXNlPEFydGljbGVbXT4gPT5cclxuICBkYXRvQ21zQ2xpZW50KHtcclxuICAgIHF1ZXJ5OiBBUlRJQ0xFU19RVUVSWSxcclxuICAgIHByZXZpZXc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnLFxyXG4gIH0pLnRoZW4oKHsgYWxsQXJ0aWNsZXMgfSkgPT4gYWxsQXJ0aWNsZXMpO1xyXG4iLCJpbXBvcnQgeyBEb21haW5JbmZvIH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5pbXBvcnQgeyBkYXRvQ21zQ2xpZW50IH0gZnJvbSAnLi9kYXRvQ21zQ2xpZW50JztcclxuXHJcbmNvbnN0IERPTUFJTlNfUVVFUlkgPSBgcXVlcnkgRG9tYWluc1F1ZXJ5IHtcclxuXHRhbGxEb21haW5zIHtcclxuICAgIGRvbWFpbk5hbWVcclxuICAgIHBob25lTnVtYmVyXHJcbiAgfVxyXG59XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RG9tYWluSW5mb3MgPSBhc3luYyAoKTogUHJvbWlzZTxEb21haW5JbmZvW10+ID0+XHJcbiAgZGF0b0Ntc0NsaWVudCh7XHJcbiAgICBxdWVyeTogRE9NQUlOU19RVUVSWSxcclxuICAgIHByZXZpZXc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnLFxyXG4gIH0pLnRoZW4oKHsgYWxsRG9tYWlucyB9KSA9PiBhbGxEb21haW5zKTtcclxuIiwiaW1wb3J0IHsgRkFRIH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5pbXBvcnQgeyBkYXRvQ21zQ2xpZW50IH0gZnJvbSAnLi9kYXRvQ21zQ2xpZW50JztcclxuXHJcbmNvbnN0IEZBUVNfUVVFUlkgPSBgcXVlcnkgZmFxcyB7XHJcbiAgYWxsRmFxcyB7XHJcbiAgICBxdWVzdGlvblxyXG4gICAgYW5zd2VyXHJcbiAgfVxyXG59XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RmFxcyA9IGFzeW5jICgpOiBQcm9taXNlPEZBUVtdPiA9PlxyXG4gIGRhdG9DbXNDbGllbnQoe1xyXG4gICAgcXVlcnk6IEZBUVNfUVVFUlksXHJcbiAgICBwcmV2aWV3OiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyxcclxuICB9KS50aGVuKCh7IGFsbEZhcXMgfSkgPT4gYWxsRmFxcyk7XHJcbiIsImltcG9ydCB7IEluZm9zLCBTRU8gfSBmcm9tICcuLi90eXBlcyc7XHJcbmltcG9ydCB7IGRhdG9DbXNDbGllbnQgfSBmcm9tICcuL2RhdG9DbXNDbGllbnQnO1xyXG5cclxuY29uc3QgSE9VU0VfU0FMRV9RVUVSWSA9IGBxdWVyeSBhbGxTYWxlc0luZm8ge1xyXG4gIGFsbEhhdXN2ZXJrYXVmTWl0V29obnJlY2h0U2VjdGlvbnMge1xyXG4gICAgYm9keSB7XHJcbiAgICAgIHZhbHVlXHJcbiAgICB9XHJcbiAgICB0aXRsZVxyXG4gICAgaW1hZ2Uge1xyXG4gICAgICB1cmxcclxuICAgICAgYWx0XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmA7XHJcblxyXG5jb25zdCBNRVRBX1FVRVJZID0gYHF1ZXJ5IGFsbE1ldGEge1xyXG4gICBhbGxIYXVzdmVya2F1Zk1pdFdvaG5yZWNodFNlb3Mge1xyXG4gICAgc2VvIHtcclxuICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgdGl0bGVcclxuICAgIH1cclxuICB9XHJcbn1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRIb3VzZVNhbGVJbmZvID0gYXN5bmMgKCk6IFByb21pc2U8SW5mb3NbXT4gPT5cclxuICBkYXRvQ21zQ2xpZW50KHtcclxuICAgIHF1ZXJ5OiBIT1VTRV9TQUxFX1FVRVJZLFxyXG4gICAgcHJldmlldzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcsXHJcbiAgfSkudGhlbihcclxuICAgICh7IGFsbEhhdXN2ZXJrYXVmTWl0V29obnJlY2h0U2VjdGlvbnMgfSkgPT5cclxuICAgICAgYWxsSGF1c3ZlcmthdWZNaXRXb2hucmVjaHRTZWN0aW9uc1xyXG4gICk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0SG91c2VTYWxlTWV0YSA9IGFzeW5jICgpOiBQcm9taXNlPFNFT1tdPiA9PlxyXG4gIGRhdG9DbXNDbGllbnQoe1xyXG4gICAgcXVlcnk6IE1FVEFfUVVFUlksXHJcbiAgICBwcmV2aWV3OiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyxcclxuICB9KS50aGVuKFxyXG4gICAgKHsgYWxsSGF1c3ZlcmthdWZNaXRXb2hucmVjaHRTZW9zIH0pID0+IGFsbEhhdXN2ZXJrYXVmTWl0V29obnJlY2h0U2Vvc1xyXG4gICk7XHJcbiIsImltcG9ydCB7IEluZm9zIH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5pbXBvcnQgeyBkYXRvQ21zQ2xpZW50IH0gZnJvbSAnLi9kYXRvQ21zQ2xpZW50JztcclxuXHJcbmNvbnN0IFJFQUxfRVNUQVRFX1NBTEVTID0gYHF1ZXJ5IHJlYWxTYWxlcyB7XHJcbiAgYWxsSW1tb2JpbGllbnZlcmthdWZNaXRXb2hucmVjaHRTY2hyaXR0ZW5zIHtcclxuICAgIHRpdGxlXHJcbiAgICBib2R5IHtcclxuICAgICAgdmFsdWVcclxuICAgIH1cclxuICB9XHJcbn1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRSZWFsRXN0YXRlU2FsZXMgPSBhc3luYyAoKTogUHJvbWlzZTxJbmZvc1tdPiA9PlxyXG4gIGRhdG9DbXNDbGllbnQoe1xyXG4gICAgcXVlcnk6IFJFQUxfRVNUQVRFX1NBTEVTLFxyXG4gICAgcHJldmlldzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcsXHJcbiAgfSkudGhlbihcclxuICAgICh7IGFsbEltbW9iaWxpZW52ZXJrYXVmTWl0V29obnJlY2h0U2Nocml0dGVucyB9KSA9PlxyXG4gICAgICBhbGxJbW1vYmlsaWVudmVya2F1Zk1pdFdvaG5yZWNodFNjaHJpdHRlbnNcclxuICApO1xyXG4iLCJpbXBvcnQgeyBJbmZvcyB9IGZyb20gJy4uL3R5cGVzJztcclxuaW1wb3J0IHsgZGF0b0Ntc0NsaWVudCB9IGZyb20gJy4vZGF0b0Ntc0NsaWVudCc7XHJcblxyXG5jb25zdCBTQUxFU19GQVFTID0gYHF1ZXJ5IHNhbGVzRmFxcyB7XHJcbiAgYWxsSGF1c3ZlcmthdWZNaXRXb2hucmVjaHRGYXFzIHtcclxuICAgIHF1ZXN0aW9uXHJcbiAgICBhbnN3ZXIge1xyXG4gICAgICB2YWx1ZVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNhbGVzRkFRcyA9IGFzeW5jICgpOiBQcm9taXNlPEluZm9zW10+ID0+XHJcbiAgZGF0b0Ntc0NsaWVudCh7XHJcbiAgICBxdWVyeTogU0FMRVNfRkFRUyxcclxuICAgIHByZXZpZXc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnLFxyXG4gIH0pLnRoZW4oXHJcbiAgICAoeyBhbGxIYXVzdmVya2F1Zk1pdFdvaG5yZWNodEZhcXMgfSkgPT4gYWxsSGF1c3ZlcmthdWZNaXRXb2hucmVjaHRGYXFzXHJcbiAgKTtcclxuIiwiaW1wb3J0IHsgZ2V0RG9tYWluSW5mb3MgYXMgZGF0b0Ntc0dldERvbWFpbkluZm9zIH0gZnJvbSAnLi9kYXRvQ21zL2dldERvbWFpbkluZm9zJztcclxuaW1wb3J0IHsgZ2V0QXJ0aWNsZXMgYXMgZGF0b0Ntc0dldEFydGljbGVzIH0gZnJvbSAnLi9kYXRvQ21zL2dldEFydGljbGVzJztcclxuaW1wb3J0IHsgZ2V0RmFxcyBhcyBkYXRvQ21zR2V0RmFxcyB9IGZyb20gJy4vZGF0b0Ntcy9nZXRGYXFzJztcclxuaW1wb3J0IHtcclxuICBnZXRIb3VzZVNhbGVJbmZvIGFzIGRhdG9DbXNHZXRIb3VzZVNhbGVJbmZvLFxyXG4gIGdldEhvdXNlU2FsZU1ldGEgYXMgZGF0b0Ntc0dldEhvdXNlU2FsZU1ldGEsXHJcbn0gZnJvbSAnLi9kYXRvQ21zL2dldEhvdXNlU2FsZUluZm8nO1xyXG5pbXBvcnQgeyBnZXRSZWFsRXN0YXRlU2FsZXMgYXMgZGF0b0Ntc0dldFJlYWxFc3RhdGVTYWxlcyB9IGZyb20gJy4vZGF0b0Ntcy9nZXRSZWFsRXN0YXRlU2FsZXMnO1xyXG5pbXBvcnQgeyBnZXRTYWxlc0ZBUXMgYXMgZGF0b0Ntc0dldFNhbGVzRkFRcyB9IGZyb20gJy4vZGF0b0Ntcy9nZXRTYWxlc0ZBUXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldERvbWFpbkluZm9zID0gZGF0b0Ntc0dldERvbWFpbkluZm9zO1xyXG5leHBvcnQgY29uc3QgZ2V0QXJ0aWNsZXMgPSBkYXRvQ21zR2V0QXJ0aWNsZXM7XHJcbmV4cG9ydCBjb25zdCBnZXRGYXFzID0gZGF0b0Ntc0dldEZhcXM7XHJcbmV4cG9ydCBjb25zdCBnZXRIb3VzZVNhbGVJbmZvID0gZGF0b0Ntc0dldEhvdXNlU2FsZUluZm87XHJcbmV4cG9ydCBjb25zdCBnZXRSZWFsRXN0YXRlU2FsZXMgPSBkYXRvQ21zR2V0UmVhbEVzdGF0ZVNhbGVzO1xyXG5leHBvcnQgY29uc3QgZ2V0U2FsZXNGQVFzID0gZGF0b0Ntc0dldFNhbGVzRkFRcztcclxuZXhwb3J0IGNvbnN0IGdldEhvdXNlU2FsZU1ldGEgPSBkYXRvQ21zR2V0SG91c2VTYWxlTWV0YTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZGlzcGxheS1uYW1lICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vbGF5b3V0L0xvYWRlcic7XHJcbmltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCB7XHJcbiAgZ2V0UmVhbEVzdGF0ZVNhbGVzLFxyXG4gIGdldFNhbGVzRkFRcyxcclxuICBnZXRIb3VzZVNhbGVJbmZvLFxyXG4gIGdldEhvdXNlU2FsZU1ldGEsXHJcbn0gZnJvbSAnLi4vbGliL2Ntcyc7XHJcblxyXG5jb25zdCBTYWxlV2l0aFJlc2lkZW5jZUxheW91dCA9IGR5bmFtaWMoXHJcbiAgKCkgPT4gaW1wb3J0KCcuLi90ZW1wbGF0ZXMvU2FsZVdpdGhSZXNpZGVuY2VMYXlvdXQnKSxcclxuICB7IGxvYWRpbmc6ICgpID0+IDxMb2FkZXIgLz4gfVxyXG4pO1xyXG5jb25zdCBTYWxlV2l0aFJlc2lkZW5jZVRlbXBsYXRlID0gZHluYW1pYyhcclxuICAoKSA9PiBpbXBvcnQoJy4uL3RlbXBsYXRlcy9TYWxlV2l0aFJlc2lkZW5jZScpLFxyXG4gIHsgbG9hZGluZzogKCkgPT4gPExvYWRlciAvPiB9XHJcbik7XHJcblxyXG5jb25zdCBTYWxlV2l0aFJlc2lkZW5jZSA9IChzdGF0aWNQcm9wczogYW55KSA9PiB7XHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcclxuICBjb25zdCB7IHNhbGVzU0VPLCAuLi5PdGhlcnMgfSA9IHN0YXRpY1Byb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8U2FsZVdpdGhSZXNpZGVuY2VMYXlvdXQgey4uLnNhbGVzU0VPfT5cclxuICAgICAgPFNhbGVXaXRoUmVzaWRlbmNlVGVtcGxhdGUgey4uLk90aGVyc30gLz5cclxuICAgIDwvU2FsZVdpdGhSZXNpZGVuY2VMYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IFtpbmZvcywgcmVhbEVzdGF0ZUluZm8sIHNhbGVzRkFRcywgc2FsZXNTRU9dID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICBnZXRIb3VzZVNhbGVJbmZvKCksXHJcbiAgICAgIGdldFJlYWxFc3RhdGVTYWxlcygpLFxyXG4gICAgICBnZXRTYWxlc0ZBUXMoKSxcclxuICAgICAgZ2V0SG91c2VTYWxlTWV0YSgpLFxyXG4gICAgXSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczogeyBpbmZvcywgcmVhbEVzdGF0ZUluZm8sIHNhbGVzRkFRcywgc2FsZXNTRU8gfSxcclxuICAgIH07XHJcbiAgfSBjYXRjaCB7XHJcbiAgICAvKiAqL1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IGluZm9zOiBbXSwgcmVhbEVzdGF0ZUluZm86IFtdLCBzYWxlc0ZBUXM6IFtdLCBzYWxlc1NFTzogW10gfSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2FsZVdpdGhSZXNpZGVuY2U7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3NoYXJlZC9saWIvZHluYW1pYycpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAaGVhZGxlc3N1aS9yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXJlcXVlc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1zZW9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9sb2FkYWJsZS5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9taXR0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi90by1iYXNlLTY0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3NjcmlwdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyYy1zbGlkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbW9kYWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dWlkXCIpOyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIm5vU1NSIiwiZGVmYXVsdCIsImR5bmFtaWMiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9sb2FkYWJsZSIsIm9iaiIsIl9fZXNNb2R1bGUiLCJpc1NlcnZlclNpZGUiLCJMb2FkYWJsZUluaXRpYWxpemVyIiwibG9hZGFibGVPcHRpb25zIiwid2VicGFjayIsIm1vZHVsZXMiLCJMb2FkaW5nIiwibG9hZGluZyIsImNyZWF0ZUVsZW1lbnQiLCJlcnJvciIsImlzTG9hZGluZyIsInBhc3REZWxheSIsInRpbWVkT3V0IiwiZHluYW1pY09wdGlvbnMiLCJvcHRpb25zIiwibG9hZGFibGVGbiIsIm1lc3NhZ2UiLCJzdGFjayIsIlByb21pc2UiLCJsb2FkZXIiLCJzdXNwZW5zZU9wdGlvbnMiLCJwcm9jZXNzIiwiZW52IiwiX19ORVhUX0NPTkNVUlJFTlRfRkVBVFVSRVMiLCJfX05FWFRfUkVBQ1RfUk9PVCIsInN1c3BlbnNlIiwiRXJyb3IiLCJsb2FkYWJsZUdlbmVyYXRlZCIsInNzciIsIkxvYWRlciIsImNpcmNsZUNvbW1vbkNsYXNzZXMiLCJHcmFwaFFMQ2xpZW50IiwiZGF0b0Ntc0NsaWVudCIsInF1ZXJ5IiwidmFyaWFibGVzIiwicHJldmlldyIsImVuZHBvaW50IiwiY2xpZW50IiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJORVhUX0RBVE9DTVNfQVBJX1RPS0VOIiwicmVxdWVzdCIsIkFSVElDTEVTX1FVRVJZIiwiZ2V0QXJ0aWNsZXMiLCJ0aGVuIiwiYWxsQXJ0aWNsZXMiLCJET01BSU5TX1FVRVJZIiwiZ2V0RG9tYWluSW5mb3MiLCJhbGxEb21haW5zIiwiRkFRU19RVUVSWSIsImdldEZhcXMiLCJhbGxGYXFzIiwiSE9VU0VfU0FMRV9RVUVSWSIsIk1FVEFfUVVFUlkiLCJnZXRIb3VzZVNhbGVJbmZvIiwiYWxsSGF1c3ZlcmthdWZNaXRXb2hucmVjaHRTZWN0aW9ucyIsImdldEhvdXNlU2FsZU1ldGEiLCJhbGxIYXVzdmVya2F1Zk1pdFdvaG5yZWNodFNlb3MiLCJSRUFMX0VTVEFURV9TQUxFUyIsImdldFJlYWxFc3RhdGVTYWxlcyIsImFsbEltbW9iaWxpZW52ZXJrYXVmTWl0V29obnJlY2h0U2Nocml0dGVucyIsIlNBTEVTX0ZBUVMiLCJnZXRTYWxlc0ZBUXMiLCJhbGxIYXVzdmVya2F1Zk1pdFdvaG5yZWNodEZhcXMiLCJkYXRvQ21zR2V0RG9tYWluSW5mb3MiLCJkYXRvQ21zR2V0QXJ0aWNsZXMiLCJkYXRvQ21zR2V0RmFxcyIsImRhdG9DbXNHZXRIb3VzZVNhbGVJbmZvIiwiZGF0b0Ntc0dldEhvdXNlU2FsZU1ldGEiLCJkYXRvQ21zR2V0UmVhbEVzdGF0ZVNhbGVzIiwiZGF0b0Ntc0dldFNhbGVzRkFRcyIsIlJlYWN0IiwiU2FsZVdpdGhSZXNpZGVuY2VMYXlvdXQiLCJTYWxlV2l0aFJlc2lkZW5jZVRlbXBsYXRlIiwiU2FsZVdpdGhSZXNpZGVuY2UiLCJzdGF0aWNQcm9wcyIsInNhbGVzU0VPIiwiT3RoZXJzIiwiZ2V0U3RhdGljUHJvcHMiLCJpbmZvcyIsInJlYWxFc3RhdGVJbmZvIiwic2FsZXNGQVFzIiwiYWxsIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9