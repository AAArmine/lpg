(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
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

/***/ "./src/background/Background.tsx":
/*!***************************************!*\
  !*** ./src/background/Background.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Background": () => (/* binding */ Background)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\background\\Background.tsx";


const Background = props => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
  className: props.color,
  children: props.children
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 9,
  columnNumber: 3
}, undefined);



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

/***/ "./src/layout/Section.tsx":
/*!********************************!*\
  !*** ./src/layout/Section.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Section": () => (/* binding */ Section)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
const _excluded = ["title", "description", "yPadding", "children"];
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\layout\\Section.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const Section = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef((_ref, ref) => {
  let {
    title,
    description,
    yPadding,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", _objectSpread(_objectSpread({
    ref: ref,
    className: `max-w-screen-lg mx-auto px-3 lg:px-0 ${yPadding || 'py-16'}`
  }, props), {}, {
    children: [(title || description) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "mb-12 text-center",
      children: [title && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
        className: "text-4xl text-gray-900 font-bold",
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }, undefined), description && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "mt-4 text-xl md:px-20",
        children: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }, undefined), children]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined);
});
Section.displayName = 'Section';


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

/***/ "./src/lib/gtag.ts":
/*!*************************!*\
  !*** ./src/lib/gtag.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GA_TRACKING_ID": () => (/* binding */ GA_TRACKING_ID),
/* harmony export */   "pageview": () => (/* binding */ pageview),
/* harmony export */   "consent": () => (/* binding */ consent),
/* harmony export */   "event": () => (/* binding */ event),
/* harmony export */   "decline": () => (/* binding */ decline)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const GA_TRACKING_ID = `${process.env.NEXT_GA_TRACKING_ID}`;
const CONTACT_REFERENCE_NUMBER_CUSTOM_DIMENSION_INDEX = 1;
const CONTACT_REFERENCE_NUMBER_CUSTOM_DIMENSION_NAME = 'contact_reference_number'; // https://developers.google.com/analytics/devguides/collection/gtagjs/pages
// https://developers.google.com/analytics/devguides/collection/gtagjs/custom-dims-mets

const pageview = url => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
    custom_map: {
      [`dimension${CONTACT_REFERENCE_NUMBER_CUSTOM_DIMENSION_INDEX}`]: CONTACT_REFERENCE_NUMBER_CUSTOM_DIMENSION_NAME
    }
  });
}; // https://developers.google.com/gtagjs/reference/api#consent

const consent = () => {
  window.gtag('consent', 'update', {
    ad_storage: 'granted',
    analytics_storage: 'granted'
  });
};
// https://developers.google.com/analytics/devguides/collection/gtagjs/events
const event = ({
  action,
  category,
  label,
  value,
  customDimMet
}) => {
  window.gtag('event', action, _objectSpread({
    event_category: category,
    event_label: label,
    value
  }, customDimMet));
};
const decline = () => {
  window.gtag('consent', 'update', {
    ad_storage: 'denied',
    analytics_storage: 'denied'
  });
};

/***/ }),

/***/ "./src/locale/index.ts":
/*!*****************************!*\
  !*** ./src/locale/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useTranslations": () => (/* binding */ useTranslations)
/* harmony export */ });
/* harmony import */ var _contact_form_de_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-form/de.json */ "./src/locale/contact-form/de.json");
/* harmony import */ var _common_de_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/de.json */ "./src/locale/common/de.json");
/* harmony import */ var _calculator_de_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calculator/de.json */ "./src/locale/calculator/de.json");




function getSource(source) {
  switch (source) {
    case 'contact-form':
      return _contact_form_de_json__WEBPACK_IMPORTED_MODULE_0__;

    case 'calculator':
      return _calculator_de_json__WEBPACK_IMPORTED_MODULE_2__;

    default:
      return _common_de_json__WEBPACK_IMPORTED_MODULE_1__;
  }
}

function interpolate(value, obj) {
  if (obj) {
    return value.replace(/\{(.*?)\}/g, (_, key) => obj[key]);
  }

  return value;
}

const useTranslations = source => (key, obj) => {
  if (!key) {
    throw Error('No key provided');
  }

  const tsl = getSource(source);
  const path = key.split('.');
  let tslByPath = tsl[path[0]];

  if (path.length > 1) {
    for (let index = 1; index < path.length; index += 1) {
      tslByPath = tslByPath ? tslByPath[path[index]] : null;
    }
  }

  return typeof tslByPath === 'string' ? interpolate(tslByPath, obj) : `missing-translations: ${key}`;
};

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_cms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/cms */ "./src/lib/cms/index.ts");
/* harmony import */ var _templates_Base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates/Base */ "./src/templates/Base.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\pages\\index.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const Index = staticProps => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_templates_Base__WEBPACK_IMPORTED_MODULE_1__.Base, _objectSpread({}, staticProps), void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 6,
  columnNumber: 37
}, undefined);

const getStaticProps = async () => {
  try {
    const [domainInfos, faqs] = await Promise.all([(0,_lib_cms__WEBPACK_IMPORTED_MODULE_0__.getDomainInfos)(), (0,_lib_cms__WEBPACK_IMPORTED_MODULE_0__.getFaqs)()]);
    return {
      props: {
        domainInfos,
        faqs
      }
    };
  } catch {
    /* */
  }

  return {
    props: {
      domainInfos: [],
      faqs: []
    },
    revalidate: 2 * 60 * 60 // revalidate in two hours

  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

/***/ }),

/***/ "./src/templates/Base.tsx":
/*!********************************!*\
  !*** ./src/templates/Base.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Base": () => (/* binding */ Base)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/script */ "next/script");
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout_Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout/Loader */ "./src/layout/Loader.tsx");
/* harmony import */ var _public_assets_images_AssCompact_Logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/assets/images/AssCompact-Logo.svg */ "./public/assets/images/AssCompact-Logo.svg");
/* harmony import */ var _public_assets_images_BskImmobilien_Logo_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/assets/images/BskImmobilien-Logo.svg */ "./public/assets/images/BskImmobilien-Logo.svg");
/* harmony import */ var _public_assets_images_Capital_Logo_webp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/assets/images/Capital-Logo.webp */ "./public/assets/images/Capital-Logo.webp");
/* harmony import */ var _public_assets_images_FAZ_Logo_webp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/assets/images/FAZ-Logo.webp */ "./public/assets/images/FAZ-Logo.webp");
/* harmony import */ var _public_assets_images_FinanceFwd_Logo_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../public/assets/images/FinanceFwd-Logo.svg */ "./public/assets/images/FinanceFwd-Logo.svg");
/* harmony import */ var _public_assets_images_Finanzwelt_Logo_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../public/assets/images/Finanzwelt-Logo.png */ "./public/assets/images/Finanzwelt-Logo.png");
/* harmony import */ var _public_assets_images_HamburgerVolksbankImmobilien_Logo_webp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../public/assets/images/HamburgerVolksbankImmobilien-Logo.webp */ "./public/assets/images/HamburgerVolksbankImmobilien-Logo.webp");
/* harmony import */ var _public_assets_images_Handelsblatt_Logo_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../public/assets/images/Handelsblatt-Logo.png */ "./public/assets/images/Handelsblatt-Logo.png");
/* harmony import */ var _public_assets_images_ImmobilienScout24_Logo_webp__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../public/assets/images/ImmobilienScout24-Logo.webp */ "./public/assets/images/ImmobilienScout24-Logo.webp");
/* harmony import */ var _public_assets_images_PlanetHome_Logo_webp__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../public/assets/images/PlanetHome-Logo.webp */ "./public/assets/images/PlanetHome-Logo.webp");
/* harmony import */ var _public_assets_images_RbbInforadio_Logo_webp__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../public/assets/images/RbbInforadio-Logo.webp */ "./public/assets/images/RbbInforadio-Logo.webp");
/* harmony import */ var _public_assets_images_Hamburger_abendblatt_webp__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../public/assets/images/Hamburger-abendblatt.webp */ "./public/assets/images/Hamburger-abendblatt.webp");
/* harmony import */ var _public_assets_images_WirtschaftsWoche_Logo_webp__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../public/assets/images/WirtschaftsWoche-Logo.webp */ "./public/assets/images/WirtschaftsWoche-Logo.webp");
/* harmony import */ var _utils_AppConfig__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../utils/AppConfig */ "./src/utils/AppConfig.ts");
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Contact */ "./src/templates/Contact/index.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Base.tsx";

/* eslint-disable react/display-name */


















 // import TrustPilotCarousel from './TrustPilotCarousel';



const Meta = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/*! import() */ "src_layout_Meta_tsx-_93d60").then(__webpack_require__.bind(__webpack_require__, /*! ../layout/Meta */ "./src/layout/Meta.tsx")), {
  loading: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)(_layout_Loader__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 18
  }, undefined),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../layout/Meta */ "./src/layout/Meta.tsx")],
    modules: ["..\\templates\\Base.tsx -> " + '../layout/Meta']
  }
});
const NavHeader = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/*! import() */ "src_navigation_NavHeader_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../navigation/NavHeader */ "./src/navigation/NavHeader.tsx")), {
  loading: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)(_layout_Loader__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 18
  }, undefined),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../navigation/NavHeader */ "./src/navigation/NavHeader.tsx")],
    modules: ["..\\templates\\Base.tsx -> " + '../navigation/NavHeader']
  }
});
const Faq = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/*! import() */ "src_templates_Faq_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ./Faq */ "./src/templates/Faq.tsx")), {
  loading: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)(_layout_Loader__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 18
  }, undefined),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ./Faq */ "./src/templates/Faq.tsx")],
    modules: ["..\\templates\\Base.tsx -> " + './Faq']
  }
});
const FeatureSelection = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/*! import() */ "src_templates_FeatureSelection_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ./FeatureSelection */ "./src/templates/FeatureSelection.tsx")), {
  loading: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)(_layout_Loader__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 18
  }, undefined),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ./FeatureSelection */ "./src/templates/FeatureSelection.tsx")],
    modules: ["..\\templates\\Base.tsx -> " + './FeatureSelection']
  }
});
const Footer = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/*! import() */ "src_templates_Footer_tsx-_92a11").then(__webpack_require__.bind(__webpack_require__, /*! ./Footer */ "./src/templates/Footer.tsx")), {
  loading: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)(_layout_Loader__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 18
  }, undefined),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ./Footer */ "./src/templates/Footer.tsx")],
    modules: ["..\\templates\\Base.tsx -> " + './Footer']
  }
});
const Hero = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/*! import() */ "src_templates_Hero_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ./Hero */ "./src/templates/Hero.tsx")), {
  loading: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)(_layout_Loader__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 18
  }, undefined),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ./Hero */ "./src/templates/Hero.tsx")],
    modules: ["..\\templates\\Base.tsx -> " + './Hero']
  }
});
const LogoCloud = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/*! import() */ "src_templates_LogoCloud_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ./LogoCloud */ "./src/templates/LogoCloud.tsx")), {
  loading: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)(_layout_Loader__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 18
  }, undefined),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ./LogoCloud */ "./src/templates/LogoCloud.tsx")],
    modules: ["..\\templates\\Base.tsx -> " + './LogoCloud']
  }
});
const Process = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/*! import() */ "src_templates_Process_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ./Process */ "./src/templates/Process.tsx")), {
  loading: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)(_layout_Loader__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 18
  }, undefined),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ./Process */ "./src/templates/Process.tsx")],
    modules: ["..\\templates\\Base.tsx -> " + './Process']
  }
});
const TrustPilotCarousel = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/*! import() */ "src_templates_TrustPilotCarousel_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ./TrustPilotCarousel */ "./src/templates/TrustPilotCarousel.tsx")), {
  loading: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)(_layout_Loader__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 18
  }, undefined),
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ./TrustPilotCarousel */ "./src/templates/TrustPilotCarousel.tsx")],
    modules: ["..\\templates\\Base.tsx -> " + './TrustPilotCarousel']
  }
});
const press = [{
  name: 'Spiegel',
  logo: _public_assets_images_Hamburger_abendblatt_webp__WEBPACK_IMPORTED_MODULE_15__.default
}, {
  name: 'FAZ',
  logo: _public_assets_images_FAZ_Logo_webp__WEBPACK_IMPORTED_MODULE_7__.default
}, {
  name: 'RBB Inforadio',
  logo: _public_assets_images_RbbInforadio_Logo_webp__WEBPACK_IMPORTED_MODULE_14__.default
}, {
  name: 'WirtschaftsWoche',
  logo: _public_assets_images_WirtschaftsWoche_Logo_webp__WEBPACK_IMPORTED_MODULE_16__.default
}, {
  name: 'AssCompact',
  logo: _public_assets_images_AssCompact_Logo_svg__WEBPACK_IMPORTED_MODULE_4__.default
}, {
  name: 'Capital',
  logo: _public_assets_images_Capital_Logo_webp__WEBPACK_IMPORTED_MODULE_6__.default
}, {
  name: 'Finance Fwd',
  logo: _public_assets_images_FinanceFwd_Logo_svg__WEBPACK_IMPORTED_MODULE_8__.default
}, {
  name: 'Finanzewelt',
  logo: _public_assets_images_Finanzwelt_Logo_png__WEBPACK_IMPORTED_MODULE_9__.default
}, {
  name: 'Handelsblatt',
  logo: _public_assets_images_Handelsblatt_Logo_png__WEBPACK_IMPORTED_MODULE_11__.default
}];
const partner = [{
  name: 'bsk Immobilien',
  logo: _public_assets_images_BskImmobilien_Logo_svg__WEBPACK_IMPORTED_MODULE_5__.default
}, {
  name: 'PlanetHome',
  logo: _public_assets_images_PlanetHome_Logo_webp__WEBPACK_IMPORTED_MODULE_13__.default
}, {
  name: 'Immobilienscout24',
  logo: _public_assets_images_ImmobilienScout24_Logo_webp__WEBPACK_IMPORTED_MODULE_12__.default
}, {
  name: 'Hamburger Volksbank Immobilien',
  logo: _public_assets_images_HamburgerVolksbankImmobilien_Logo_webp__WEBPACK_IMPORTED_MODULE_10__.default
}];

const Base = props => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.Fragment, {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_1___default()), {
    id: "adcell",
    src: "https://t.adcell.com/js/trad.js",
    onLoad: () => {
      // @ts-ignore
      Adcell.Tracking.track();
    },
    strategy: "lazyOnload"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)("div", {
    className: "antialiased text-gray-600",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)(Meta, {
      title: _utils_AppConfig__WEBPACK_IMPORTED_MODULE_17__.AppConfig.title,
      description: _utils_AppConfig__WEBPACK_IMPORTED_MODULE_17__.AppConfig.description,
      canonical: _utils_AppConfig__WEBPACK_IMPORTED_MODULE_17__.AppConfig.canonical
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)(NavHeader, {
      domainInfos: props.domainInfos
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)(Hero, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)(LogoCloud, {
      title: "Bekannt aus",
      images: press,
      showTrust: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)(FeatureSelection, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)(TrustPilotCarousel, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)(Faq, {
      faqs: props.faqs
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)(LogoCloud, {
      title: "Partner",
      images: partner
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)(Process, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)(_Contact__WEBPACK_IMPORTED_MODULE_18__.Contact, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)(Footer, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 94,
    columnNumber: 5
  }, undefined)]
}, void 0, true);



/***/ }),

/***/ "./src/templates/Contact/CheckBox.tsx":
/*!********************************************!*\
  !*** ./src/templates/Contact/CheckBox.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckBox": () => (/* binding */ CheckBox)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icons_Check__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icons/Check */ "./src/templates/Contact/Icons/Check.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\CheckBox.tsx";



const CheckBox = ({
  text,
  isChecked,
  radio,
  onToggle
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
  className: `check-box ${isChecked ? 'checked' : ''}`,
  onClick: () => radio && isChecked ? undefined : onToggle(),
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
      className: "check-icon",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_Icons_Check__WEBPACK_IMPORTED_MODULE_1__.Check, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
    children: text
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 17,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./src/templates/Contact/FormStepContainer.tsx":
/*!*****************************************************!*\
  !*** ./src/templates/Contact/FormStepContainer.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormStepContainer": () => (/* binding */ FormStepContainer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
const _excluded = ["children", "description", "className"];
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\FormStepContainer.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const FormStepContainer = _ref => {
  let {
    children,
    description,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: `form-step ${description ? 'with-description' : ''}`,
    children: [description && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "description",
      children: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", _objectSpread(_objectSpread({
      className: `form-step-container ${className || ''}`
    }, props), {}, {
      children: children
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 3
  }, undefined);
};

/***/ }),

/***/ "./src/templates/Contact/FormStepSuccess.tsx":
/*!***************************************************!*\
  !*** ./src/templates/Contact/FormStepSuccess.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormStepSuccess": () => (/* binding */ FormStepSuccess)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../locale */ "./src/locale/index.ts");
/* harmony import */ var _FormStepContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormStepContainer */ "./src/templates/Contact/FormStepContainer.tsx");
/* harmony import */ var _OfferForm_Icons_Success__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OfferForm/Icons/Success */ "./src/templates/Contact/OfferForm/Icons/Success.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\FormStepSuccess.tsx";





const FormStepSuccess = () => {
  const t = (0,_locale__WEBPACK_IMPORTED_MODULE_1__.useTranslations)('contact-form');
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_FormStepContainer__WEBPACK_IMPORTED_MODULE_2__.FormStepContainer, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "success-container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "success-icon",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_OfferForm_Icons_Success__WEBPACK_IMPORTED_MODULE_3__.Success, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h3", {
        children: t('successMessage')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/templates/Contact/Icons/Check.tsx":
/*!***********************************************!*\
  !*** ./src/templates/Contact/Icons/Check.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Check": () => (/* binding */ Check)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\Icons\\Check.tsx";


const Check = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  viewBox: "-49 141 512 512",
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
    style: {
      fill: '#044B93'
    },
    d: "M151.777,574.055c-11.376,0-22.323-4.465-30.351-12.578L6.805,446.856c-16.785-16.785-16.785-43.917,0-60.702\r s43.917-16.785,60.702,0l81.437,81.394l191.422-228.856c15.154-18.159,42.157-20.649,60.445-5.366\r c18.202,15.197,20.563,42.242,5.366,60.444L184.661,558.644c-7.727,9.23-18.932,14.811-31.038,15.326\r C153.022,574.055,152.378,574.055,151.777,574.055z"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./src/templates/Contact/OfferForm/FormItemInfoBox.tsx":
/*!*************************************************************!*\
  !*** ./src/templates/Contact/OfferForm/FormItemInfoBox.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormItemInfoBox": () => (/* binding */ FormItemInfoBox)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icons_Help__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icons/Help */ "./src/templates/Contact/OfferForm/Icons/Help.tsx");
/* harmony import */ var _Icons_Check__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icons/Check */ "./src/templates/Contact/OfferForm/Icons/Check.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
const _excluded = ["infoText", "active", "error", "disabled", "children", "className"];
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\OfferForm\\FormItemInfoBox.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const FormItemInfoBox = _ref => {
  let {
    infoText,
    active,
    error,
    disabled,
    children,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", _objectSpread(_objectSpread({
    className: `form-item-container ${className || ''}`
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: `form-item ${disabled ? 'disabled' : ''} ${active ? 'active' : ''} ${error ? 'error' : ''}`,
      children: [children, infoText && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "question-mark",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_Icons_Help__WEBPACK_IMPORTED_MODULE_1__.Help, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "info-text",
          children: infoText
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, undefined)]
      }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "check-mark",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_Icons_Check__WEBPACK_IMPORTED_MODULE_2__.Check, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }, undefined)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 3
  }, undefined);
};

/***/ }),

/***/ "./src/templates/Contact/OfferForm/FormItemMultipleChoice.tsx":
/*!********************************************************************!*\
  !*** ./src/templates/Contact/OfferForm/FormItemMultipleChoice.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormItemMultipleChoice": () => (/* binding */ FormItemMultipleChoice)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../locale */ "./src/locale/index.ts");
/* harmony import */ var _FormItemInfoBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormItemInfoBox */ "./src/templates/Contact/OfferForm/FormItemInfoBox.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\OfferForm\\FormItemMultipleChoice.tsx";




const FormItemMultipleChoice = ({
  value,
  items,
  disabled,
  img,
  text,
  infoText,
  onValueChange,
  errors,
  className
}) => {
  const t = (0,_locale__WEBPACK_IMPORTED_MODULE_1__.useTranslations)('contact-form');
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_FormItemInfoBox__WEBPACK_IMPORTED_MODULE_2__.FormItemInfoBox, {
    infoText: infoText,
    error: !!errors.length,
    className: className,
    disabled: disabled,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "form-item-body multiple-choice",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "img",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "svg-cnt",
          children: img
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
          children: text
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("select", {
        disabled: disabled,
        value: (value === null || value === void 0 ? void 0 : value.toString()) || '',
        className: value == null ? 'default' : '',
        onChange: e => onValueChange(e.target.value === '' ? null : parseInt(e.target.value, 10)),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("option", {
          value: "",
          disabled: true,
          hidden: true,
          children: t('pleaseSelect')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, undefined), items.map((item, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("option", {
          value: index.toString(),
          children: item
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 13
        }, undefined))]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/templates/Contact/OfferForm/FormItemSlider.tsx":
/*!************************************************************!*\
  !*** ./src/templates/Contact/OfferForm/FormItemSlider.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormItemSlider": () => (/* binding */ FormItemSlider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FormItemInfoBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormItemInfoBox */ "./src/templates/Contact/OfferForm/FormItemInfoBox.tsx");
/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-slider/assets/index.css */ "./node_modules/rc-slider/assets/index.css");
/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SliderFlex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../SliderFlex */ "./src/templates/SliderFlex/index.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\OfferForm\\FormItemSlider.tsx";





const FormItemSlider = ({
  disabled,
  value,
  valueIncrement,
  img,
  text,
  infoText,
  minRange,
  maxRange,
  onValueChange,
  errors,
  className,
  renderValue
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_FormItemInfoBox__WEBPACK_IMPORTED_MODULE_1__.FormItemInfoBox, {
    infoText: infoText,
    disabled: disabled,
    error: !!errors.length,
    className: className,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "form-item-body slider",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "img",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "svg-cnt",
          children: img
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h3", {
          children: text
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_SliderFlex__WEBPACK_IMPORTED_MODULE_3__.SliderFlex, {
        disabled: disabled,
        valueIncrement: valueIncrement,
        min: minRange,
        max: maxRange,
        value: value,
        onValueChange: onValueChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
      children: renderValue(value)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/templates/Contact/OfferForm/FormItemYesNo.tsx":
/*!***********************************************************!*\
  !*** ./src/templates/Contact/OfferForm/FormItemYesNo.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormItemYesNo": () => (/* binding */ FormItemYesNo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../locale */ "./src/locale/index.ts");
/* harmony import */ var _FormItemInfoBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormItemInfoBox */ "./src/templates/Contact/OfferForm/FormItemInfoBox.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\OfferForm\\FormItemYesNo.tsx";




const FormItemYesNo = ({
  disabled,
  value,
  img,
  text,
  infoText,
  errors,
  onValueChange
}) => {
  const t = (0,_locale__WEBPACK_IMPORTED_MODULE_1__.useTranslations)('contact-form');
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_FormItemInfoBox__WEBPACK_IMPORTED_MODULE_2__.FormItemInfoBox, {
    infoText: infoText,
    disabled: disabled,
    error: !!errors.length,
    className: "yes-no",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "form-item-body yes-no-body",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "img",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "svg-cnt",
          children: img
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
          children: text
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "yes-no",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
        className: value === 'yes' ? 'active' : '',
        onClick: () => onValueChange('yes'),
        children: t('yes')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
        className: value === 'no' ? 'active' : '',
        onClick: () => onValueChange('no'),
        children: t('no')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/templates/Contact/OfferForm/FormStepApartmentFloors.tsx":
/*!*********************************************************************!*\
  !*** ./src/templates/Contact/OfferForm/FormStepApartmentFloors.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormStepApartmentFloors": () => (/* binding */ FormStepApartmentFloors)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../locale */ "./src/locale/index.ts");
/* harmony import */ var _FormStepContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FormStepContainer */ "./src/templates/Contact/FormStepContainer.tsx");
/* harmony import */ var _FormItemSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormItemSlider */ "./src/templates/Contact/OfferForm/FormItemSlider.tsx");
/* harmony import */ var _NumberRangeInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NumberRangeInput */ "./src/templates/Contact/OfferForm/NumberRangeInput.tsx");
/* harmony import */ var _Icons_HouseWithFloors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Icons/HouseWithFloors */ "./src/templates/Contact/OfferForm/Icons/HouseWithFloors.tsx");
/* harmony import */ var _Icons_HouseWithBasement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Icons/HouseWithBasement */ "./src/templates/Contact/OfferForm/Icons/HouseWithBasement.tsx");
/* harmony import */ var _FormItemMultipleChoice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FormItemMultipleChoice */ "./src/templates/Contact/OfferForm/FormItemMultipleChoice.tsx");
/* harmony import */ var _Icons_HouseWithOneWindowSelected__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Icons/HouseWithOneWindowSelected */ "./src/templates/Contact/OfferForm/Icons/HouseWithOneWindowSelected.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\OfferForm\\FormStepApartmentFloors.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const FormStepApartmentFloors = ({
  value,
  errors,
  onValueChange,
  getMaxValue
}) => {
  const t = (0,_locale__WEBPACK_IMPORTED_MODULE_1__.useTranslations)('contact-form');
  const numberOfFloorsMaxValue = getMaxValue ? getMaxValue() : 20;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_FormStepContainer__WEBPACK_IMPORTED_MODULE_2__.FormStepContainer, {
    className: "multiple-choice-container",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_FormItemSlider__WEBPACK_IMPORTED_MODULE_3__.FormItemSlider, {
      value: value.numberOfFloors,
      errors: errors.filter(e => e.includes('numberOfFloors')),
      img: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Icons_HouseWithFloors__WEBPACK_IMPORTED_MODULE_5__.HouseWithFloors, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 14
      }, undefined),
      text: t('houseFloors.numberOfFloors.title'),
      infoText: t('houseFloors.numberOfFloors.infoText'),
      minRange: 0,
      maxRange: numberOfFloorsMaxValue,
      valueIncrement: 1,
      onValueChange: newValue => onValueChange(_objectSpread(_objectSpread({}, value), {}, {
        numberOfFloors: newValue
      })),
      renderValue: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_NumberRangeInput__WEBPACK_IMPORTED_MODULE_4__.NumberRangeInput, {
        min: 0,
        max: numberOfFloorsMaxValue,
        value: value.numberOfFloors,
        onValueChange: newValue => {
          onValueChange(_objectSpread(_objectSpread({}, value), {}, {
            numberOfFloors: newValue
          }));
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_FormItemSlider__WEBPACK_IMPORTED_MODULE_3__.FormItemSlider, {
      value: value.location,
      errors: errors.filter(e => e.includes('location')),
      img: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Icons_HouseWithOneWindowSelected__WEBPACK_IMPORTED_MODULE_8__.HouseWithOneWindowSelected, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 14
      }, undefined),
      text: t('houseFloors.apartmentLocation.title'),
      minRange: 0,
      maxRange: numberOfFloorsMaxValue,
      valueIncrement: 1,
      onValueChange: newValue => onValueChange(_objectSpread(_objectSpread({}, value), {}, {
        location: newValue
      })),
      renderValue: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_NumberRangeInput__WEBPACK_IMPORTED_MODULE_4__.NumberRangeInput, {
        min: 0,
        max: numberOfFloorsMaxValue,
        value: value.location,
        onValueChange: newValue => {
          onValueChange(_objectSpread(_objectSpread({}, value), {}, {
            location: newValue
          }));
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_FormItemMultipleChoice__WEBPACK_IMPORTED_MODULE_7__.FormItemMultipleChoice, {
      value: value.basement,
      items: [0, 1, 2, 3].map(i => t(`houseFloors.basement.options.${i}`)),
      img: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Icons_HouseWithBasement__WEBPACK_IMPORTED_MODULE_6__.HouseWithBasement, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 14
      }, undefined),
      text: t('houseFloors.basement.title'),
      infoText: t('houseFloors.basement.infoText'),
      errors: [],
      onValueChange: newValue => onValueChange(_objectSpread(_objectSpread({}, value), {}, {
        basement: newValue
      }))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/templates/Contact/OfferForm/FormStepApartmentHeating.tsx":
/*!**********************************************************************!*\
  !*** ./src/templates/Contact/OfferForm/FormStepApartmentHeating.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormStepApartmentHeating": () => (/* binding */ FormStepApartmentHeating)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../locale */ "./src/locale/index.ts");
/* harmony import */ var _FormStepContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FormStepContainer */ "./src/templates/Contact/FormStepContainer.tsx");
/* harmony import */ var _FormItemMultipleChoice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormItemMultipleChoice */ "./src/templates/Contact/OfferForm/FormItemMultipleChoice.tsx");
/* harmony import */ var _Icons_Heating__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Icons/Heating */ "./src/templates/Contact/OfferForm/Icons/Heating.tsx");
/* harmony import */ var _Icons_HouseWithRoof__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Icons/HouseWithRoof */ "./src/templates/Contact/OfferForm/Icons/HouseWithRoof.tsx");
/* harmony import */ var _Icons_Window__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Icons/Window */ "./src/templates/Contact/OfferForm/Icons/Window.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\OfferForm\\FormStepApartmentHeating.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const FormStepApartmentHeating = ({
  value,
  onValueChange
}) => {
  const t = (0,_locale__WEBPACK_IMPORTED_MODULE_1__.useTranslations)('contact-form');
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_FormStepContainer__WEBPACK_IMPORTED_MODULE_2__.FormStepContainer, {
    className: "multiple-choice-container",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_FormItemMultipleChoice__WEBPACK_IMPORTED_MODULE_3__.FormItemMultipleChoice, {
      value: value.roof,
      items: [0, 1, 2, 3].map(i => t(`houseFloors.roof.options.${i}`)),
      img: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_Icons_HouseWithRoof__WEBPACK_IMPORTED_MODULE_5__.HouseWithRoof, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 14
      }, undefined),
      text: t('houseFloors.roof.title'),
      infoText: t('houseFloors.roof.infoText'),
      errors: [],
      onValueChange: newValue => onValueChange(_objectSpread(_objectSpread({}, value), {}, {
        roof: newValue
      }))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_FormItemMultipleChoice__WEBPACK_IMPORTED_MODULE_3__.FormItemMultipleChoice, {
      value: value.heatingAge,
      items: [0, 1, 2, 3].map(i => t(`heating.heatingAge.options.${i}`)),
      img: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        style: {
          height: '9rem'
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_Icons_Heating__WEBPACK_IMPORTED_MODULE_4__.Heating, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }, undefined),
      text: t('heating.heatingAge.title'),
      infoText: t('heating.heatingAge.infoText'),
      errors: [],
      onValueChange: newValue => onValueChange(_objectSpread(_objectSpread({}, value), {}, {
        heatingAge: newValue
      }))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_FormItemMultipleChoice__WEBPACK_IMPORTED_MODULE_3__.FormItemMultipleChoice, {
      value: value.window,
      items: [0, 1, 2, 3, 4, 5, 6].map(i => t(`heating.window.options.${i}`)),
      img: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_Icons_Window__WEBPACK_IMPORTED_MODULE_6__.Window, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 14
      }, undefined),
      text: t('heating.window.title'),
      infoText: t('heating.window.infoText'),
      errors: [],
      onValueChange: newValue => onValueChange(_objectSpread(_objectSpread({}, value), {}, {
        window: newValue
      }))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/templates/Contact/OfferForm/FormStepApartmentNumberOfRooms.tsx":
/*!****************************************************************************!*\
  !*** ./src/templates/Contact/OfferForm/FormStepApartmentNumberOfRooms.tsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormStepApartmentNumberOfRooms": () => (/* binding */ FormStepApartmentNumberOfRooms)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../locale */ "./src/locale/index.ts");
/* harmony import */ var _FormStepContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FormStepContainer */ "./src/templates/Contact/FormStepContainer.tsx");
/* harmony import */ var _Icons_LivingAria__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Icons/LivingAria */ "./src/templates/Contact/OfferForm/Icons/LivingAria.tsx");
/* harmony import */ var _FormItemSlider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormItemSlider */ "./src/templates/Contact/OfferForm/FormItemSlider.tsx");
/* harmony import */ var _Icons_Bathroom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Icons/Bathroom */ "./src/templates/Contact/OfferForm/Icons/Bathroom.tsx");
/* harmony import */ var _NumberRangeInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NumberRangeInput */ "./src/templates/Contact/OfferForm/NumberRangeInput.tsx");
/* harmony import */ var _Icons_Elevator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Icons/Elevator */ "./src/templates/Contact/OfferForm/Icons/Elevator.tsx");
/* harmony import */ var _FormItemYesNo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FormItemYesNo */ "./src/templates/Contact/OfferForm/FormItemYesNo.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\OfferForm\\FormStepApartmentNumberOfRooms.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const FormStepApartmentNumberOfRooms = ({
  value,
  errors,
  onValueChange
}) => {
  const t = (0,_locale__WEBPACK_IMPORTED_MODULE_1__.useTranslations)('contact-form');

  const getItemErrors = itemName => {
    switch (itemName) {
      case 'numberOfRooms':
        return errors.filter(e => e.includes('numberOfRooms'));

      case 'toilets':
        return errors.filter(e => e.includes('toilets'));

      default:
    }

    return [];
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_FormStepContainer__WEBPACK_IMPORTED_MODULE_2__.FormStepContainer, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_FormItemYesNo__WEBPACK_IMPORTED_MODULE_8__.FormItemYesNo, {
      value: value.elevator,
      errors: [],
      img: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
        style: {
          height: '10rem'
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Icons_Elevator__WEBPACK_IMPORTED_MODULE_7__.Elevator, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }, undefined),
      text: t('numberOfRooms.elevator.title'),
      infoText: t('numberOfRooms.elevator.infoText'),
      onValueChange: newValue => {
        onValueChange(_objectSpread(_objectSpread({}, value), {}, {
          elevator: newValue
        }));
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_FormItemSlider__WEBPACK_IMPORTED_MODULE_4__.FormItemSlider, {
      value: value.numberOfRooms,
      errors: getItemErrors('numberOfRooms'),
      img: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Icons_LivingAria__WEBPACK_IMPORTED_MODULE_3__.LivingAria, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 14
      }, undefined),
      text: t('numberOfRooms.numberOfRooms.title'),
      infoText: t('numberOfRooms.numberOfRooms.infoText'),
      minRange: 0,
      maxRange: 20,
      onValueChange: newValue => {
        onValueChange(_objectSpread(_objectSpread({}, value), {}, {
          numberOfRooms: newValue
        }));
      },
      renderValue: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_NumberRangeInput__WEBPACK_IMPORTED_MODULE_6__.NumberRangeInput, {
        min: 0,
        max: 20,
        value: value.numberOfRooms,
        onValueChange: newValue => {
          onValueChange(_objectSpread(_objectSpread({}, value), {}, {
            numberOfRooms: newValue
          }));
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_FormItemSlider__WEBPACK_IMPORTED_MODULE_4__.FormItemSlider, {
      value: value.toilets,
      errors: getItemErrors('toilets'),
      img: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Icons_Bathroom__WEBPACK_IMPORTED_MODULE_5__.Bathroom, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 14
      }, undefined),
      text: t('numberOfRooms.toilets.title'),
      infoText: t('numberOfRooms.toilets.infoText'),
      minRange: 0,
      maxRange: 10,
      onValueChange: newValue => {
        onValueChange(_objectSpread(_objectSpread({}, value), {}, {
          toilets: newValue
        }));
      },
      renderValue: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_NumberRangeInput__WEBPACK_IMPORTED_MODULE_6__.NumberRangeInput, {
        min: 0,
        max: 10,
        value: value.toilets,
        onValueChange: newValue => {
          onValueChange(_objectSpread(_objectSpread({}, value), {}, {
            toilets: newValue
          }));
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/templates/Contact/OfferForm/FormStepApartmentSpaceLiving.tsx":
/*!**************************************************************************!*\
  !*** ./src/templates/Contact/OfferForm/FormStepApartmentSpaceLiving.tsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormStepApartmentSpaceLiving": () => (/* binding */ FormStepApartmentSpaceLiving)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../locale */ "./src/locale/index.ts");
/* harmony import */ var _FormStepContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FormStepContainer */ "./src/templates/Contact/FormStepContainer.tsx");
/* harmony import */ var _Icons_LivingAria__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Icons/LivingAria */ "./src/templates/Contact/OfferForm/Icons/LivingAria.tsx");
/* harmony import */ var _FormItemSlider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormItemSlider */ "./src/templates/Contact/OfferForm/FormItemSlider.tsx");
/* harmony import */ var _NumberRangeInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NumberRangeInput */ "./src/templates/Contact/OfferForm/NumberRangeInput.tsx");
/* harmony import */ var _Icons_AdditionalSpace__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Icons/AdditionalSpace */ "./src/templates/Contact/OfferForm/Icons/AdditionalSpace.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\OfferForm\\FormStepApartmentSpaceLiving.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const FormStepApartmentSpaceLiving = ({
  value,
  errors,
  onValueChange
}) => {
  const t = (0,_locale__WEBPACK_IMPORTED_MODULE_1__.useTranslations)('contact-form');

  const getItemErrors = itemName => {
    switch (itemName) {
      case 'livingArea':
        return errors.filter(e => e.includes('livingArea'));

      case 'additionalArea':
        return errors.filter(e => e.includes('additionalArea'));

      default:
    }

    return [];
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_FormStepContainer__WEBPACK_IMPORTED_MODULE_2__.FormStepContainer, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_FormItemSlider__WEBPACK_IMPORTED_MODULE_4__.FormItemSlider, {
      value: value.livingArea,
      valueIncrement: 10,
      errors: getItemErrors('livingArea'),
      img: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_Icons_LivingAria__WEBPACK_IMPORTED_MODULE_3__.LivingAria, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 14
      }, undefined),
      text: t('spaceLiving.livingArea.title'),
      infoText: t('spaceLiving.livingArea.infoText'),
      minRange: 0,
      maxRange: 1000,
      onValueChange: newValue => {
        onValueChange(_objectSpread(_objectSpread({}, value), {}, {
          livingArea: newValue
        }));
      },
      renderValue: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_NumberRangeInput__WEBPACK_IMPORTED_MODULE_5__.NumberRangeInput, {
        min: 0,
        max: 1000,
        value: value.livingArea,
        unit: t('m2'),
        onValueChange: newValue => {
          onValueChange(_objectSpread(_objectSpread({}, value), {}, {
            livingArea: newValue
          }));
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_FormItemSlider__WEBPACK_IMPORTED_MODULE_4__.FormItemSlider, {
      value: value.additionalArea,
      valueIncrement: 10,
      errors: getItemErrors('additionalArea'),
      img: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_Icons_AdditionalSpace__WEBPACK_IMPORTED_MODULE_6__.AdditionalSpace, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 14
      }, undefined),
      text: t('spaceLiving.additionalArea.title'),
      infoText: t('spaceLiving.additionalArea.infoText'),
      minRange: 0,
      maxRange: 1000,
      onValueChange: newValue => {
        onValueChange(_objectSpread(_objectSpread({}, value), {}, {
          additionalArea: newValue
        }));
      },
      renderValue: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_NumberRangeInput__WEBPACK_IMPORTED_MODULE_5__.NumberRangeInput, {
        min: 0,
        max: 1000,
        value: value.additionalArea,
        unit: t('m2'),
        onValueChange: newValue => {
          onValueChange(_objectSpread(_objectSpread({}, value), {}, {
            additionalArea: newValue
          }));
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/templates/Contact/OfferForm/FormStepCarParking.tsx":
/*!****************************************************************!*\
  !*** ./src/templates/Contact/OfferForm/FormStepCarParking.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormStepCarParking": () => (/* binding */ FormStepCarParking)
/* harmony export */ });
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../locale */ "./src/locale/index.ts");
/* harmony import */ var _FormStepContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FormStepContainer */ "./src/templates/Contact/FormStepContainer.tsx");
/* harmony import */ var _FormItemSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormItemSlider */ "./src/templates/Contact/OfferForm/FormItemSlider.tsx");
/* harmony import */ var _Icons_ParkingSlots__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Icons/ParkingSlots */ "./src/templates/Contact/OfferForm/Icons/ParkingSlots.tsx");
/* harmony import */ var _Icons_UndergroundParking__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Icons/UndergroundParking */ "./src/templates/Contact/OfferForm/Icons/UndergroundParking.tsx");
/* harmony import */ var _NumberRangeInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NumberRangeInput */ "./src/templates/Contact/OfferForm/NumberRangeInput.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\OfferForm\\FormStepCarParking.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const FormStepCarParking = ({
  value,
  errors,
  onValueChange
}) => {
  const t = (0,_locale__WEBPACK_IMPORTED_MODULE_0__.useTranslations)('contact-form');

  const getItemErrors = itemName => {
    switch (itemName) {
      case 'numberOfUndergroundParkings':
        return errors.filter(e => e.includes('numberOfUndergroundParkings'));

      case 'numberOfParkingLots':
        return errors.filter(e => e.includes('numberOfParkingLots'));

      default:
    }

    return [];
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_FormStepContainer__WEBPACK_IMPORTED_MODULE_1__.FormStepContainer, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_FormItemSlider__WEBPACK_IMPORTED_MODULE_2__.FormItemSlider, {
      value: value.numberOfUndergroundParkings,
      errors: getItemErrors('numberOfUndergroundParkings'),
      img: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Icons_UndergroundParking__WEBPACK_IMPORTED_MODULE_4__.UndergroundParking, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 16
      }, undefined),
      text: t('carParking.numberOfUndergroundParkings.title'),
      infoText: t('carParking.numberOfUndergroundParkings.infoText'),
      minRange: 0,
      maxRange: 10,
      onValueChange: newValue => {
        onValueChange(_objectSpread(_objectSpread({}, value), {}, {
          numberOfUndergroundParkings: newValue
        }));
      },
      renderValue: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_NumberRangeInput__WEBPACK_IMPORTED_MODULE_5__.NumberRangeInput, {
        min: 0,
        max: 10,
        value: value.numberOfUndergroundParkings,
        onValueChange: newValue => {
          onValueChange(_objectSpread(_objectSpread({}, value), {}, {
            numberOfUndergroundParkings: newValue
          }));
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_FormItemSlider__WEBPACK_IMPORTED_MODULE_2__.FormItemSlider, {
      value: value.numberOfParkingLots,
      errors: getItemErrors('numberOfParkingLots'),
      img: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Icons_ParkingSlots__WEBPACK_IMPORTED_MODULE_3__.ParkingSlots, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 16
      }, undefined),
      text: t('carParking.numberOfParkingLots.title'),
      infoText: t('carParking.numberOfParkingLots.infoText'),
      minRange: 0,
      maxRange: 10,
      onValueChange: newValue => {
        onValueChange(_objectSpread(_objectSpread({}, value), {}, {
          numberOfParkingLots: newValue
        }));
      },
      renderValue: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_NumberRangeInput__WEBPACK_IMPORTED_MODULE_5__.NumberRangeInput, {
        min: 0,
        max: 10,
        value: value.numberOfParkingLots,
        onValueChange: newValue => {
          onValueChange(_objectSpread(_objectSpread({}, value), {}, {
            numberOfParkingLots: newValue
          }));
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 7
  }, undefined);
};

/***/ }),

/***/ "./src/templates/Contact/OfferForm/FormStepContactInformation.tsx":
/*!************************************************************************!*\
  !*** ./src/templates/Contact/OfferForm/FormStepContactInformation.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormStepContactInformation": () => (/* binding */ FormStepContactInformation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../locale */ "./src/locale/index.ts");
/* harmony import */ var _CheckBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CheckBox */ "./src/templates/Contact/CheckBox.tsx");
/* harmony import */ var _FormStepContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FormStepContainer */ "./src/templates/Contact/FormStepContainer.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\OfferForm\\FormStepContactInformation.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const FormStepContactInformation = ({
  value,
  errors,
  disabledOptions,
  onValueChange
}) => {
  const t = (0,_locale__WEBPACK_IMPORTED_MODULE_1__.useTranslations)('contact-form');
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_FormStepContainer__WEBPACK_IMPORTED_MODULE_3__.FormStepContainer, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "contact-info-container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h3", {
        children: t('contact-info.title.offer')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "contact-container",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "input-container salutation",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("select", {
            value: value.salutation || '',
            className: !value.salutation ? 'default' : '',
            placeholder: t('contact-info.salutation.title'),
            onChange: e => {
              onValueChange(_objectSpread(_objectSpread({}, value), {}, {
                salutation: e.target.value
              }));
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: "",
              disabled: true,
              hidden: true,
              children: t('contact-info.salutation.title')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: "mr",
              children: t('contact-info.salutation.mr')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: "ms",
              children: t('contact-info.salutation.ms')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: "mrms",
              children: t('contact-info.salutation.mrms')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "input-container first-name",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            type: "text",
            value: value.firstName || '',
            placeholder: `${t('contact-info.firstName')}${t('required')}`,
            onChange: e => onValueChange(_objectSpread(_objectSpread({}, value), {}, {
              firstName: e.target.value
            }))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "input-container last-name",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            type: "text",
            value: value.lastName || '',
            placeholder: `${t('contact-info.lastName')}${t('required')}`,
            onChange: e => onValueChange(_objectSpread(_objectSpread({}, value), {}, {
              lastName: e.target.value
            }))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "input-container date-Of-birth",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            type: "text",
            value: value.dateOfBirth || '',
            placeholder: `${t('contact-info.dateOfBirth')}${t('required')}`,
            onChange: e => onValueChange(_objectSpread(_objectSpread({}, value), {}, {
              dateOfBirth: e.target.value
            }))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "input-container kids-number",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            type: "text",
            value: value.numberOfChildren || '',
            placeholder: t('contact-info.children'),
            onChange: e => onValueChange(_objectSpread(_objectSpread({}, value), {}, {
              numberOfChildren: e.target.value
            }))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "input-container marital-status",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("select", {
            value: value.maritalStatus || '',
            className: !value.maritalStatus ? 'default' : '',
            placeholder: t('contact-info.maritalStatus.title'),
            onChange: e => {
              let {
                partnerDateOfBirth
              } = value;
              const maritalStatus = e.target.value;

              if (maritalStatus !== 'married' && maritalStatus !== 'partnership') {
                partnerDateOfBirth = null;
              }

              onValueChange(_objectSpread(_objectSpread({}, value), {}, {
                maritalStatus,
                partnerDateOfBirth
              }));
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: "",
              disabled: true,
              children: t('contact-info.maritalStatus.title')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: "single",
              children: t('contact-info.maritalStatus.single')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: "divorced",
              children: t('contact-info.maritalStatus.divorced')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: "married",
              children: t('contact-info.maritalStatus.married')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: "partnership",
              children: t('contact-info.maritalStatus.partnership')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: "widowed",
              children: t('contact-info.maritalStatus.widowed')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, undefined), !disabledOptions.includes('partnerDateOfBirth') && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "input-container date-Of-birth-partner",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            type: "text",
            value: value.partnerDateOfBirth || '',
            placeholder: t('contact-info.partnerDateOfBirth'),
            onChange: e => onValueChange(_objectSpread(_objectSpread({}, value), {}, {
              partnerDateOfBirth: e.target.value
            }))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "input-container email",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            type: "text",
            className: `contact-info-data ${!!value.email && errors.some(e => e.includes('email')) ? 'error' : ''}`,
            value: value.email || '',
            placeholder: `${t('contact-info.email')}${t('required')}`,
            onChange: e => onValueChange(_objectSpread(_objectSpread({}, value), {}, {
              email: e.target.value
            }))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "input-container phone",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            type: "text",
            value: value.tel || '',
            placeholder: `${t('contact-info.phone')}${t('required')}`,
            onChange: e => onValueChange(_objectSpread(_objectSpread({}, value), {}, {
              tel: e.target.value
            }))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "input-container street",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            type: "text",
            value: value.street || '',
            placeholder: `${t('contact-info.street')}${t('required')}`,
            onChange: e => onValueChange(_objectSpread(_objectSpread({}, value), {}, {
              street: e.target.value
            }))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "input-container building-number",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            type: "text",
            value: value.houseNumber || '',
            placeholder: `${t('contact-info.houseNumber')}${t('required')}`,
            onChange: e => onValueChange(_objectSpread(_objectSpread({}, value), {}, {
              houseNumber: e.target.value
            }))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "input-container zip-code",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            type: "text",
            value: value.zipCode || '',
            placeholder: `${t('contact-info.zipCode')}${t('required')}`,
            onChange: e => onValueChange(_objectSpread(_objectSpread({}, value), {}, {
              zipCode: e.target.value
            }))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "input-container city",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            type: "text",
            value: value.city || '',
            placeholder: `${t('contact-info.city')}${t('required')}`,
            onChange: e => onValueChange(_objectSpread(_objectSpread({}, value), {}, {
              city: e.target.value
            }))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "input-container viaEmailAndPost",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_CheckBox__WEBPACK_IMPORTED_MODULE_2__.CheckBox, {
            radio: true,
            isChecked: value.receiveInformationViaPostAndEmail,
            text: t('contact-info.receiveOfferViaPostAndEmail'),
            onToggle: () => {
              let {
                receiveInformationViaPostAndEmail,
                receiveInformationViaEmail
              } = value;
              receiveInformationViaPostAndEmail = !receiveInformationViaPostAndEmail;
              receiveInformationViaEmail = !receiveInformationViaEmail;
              onValueChange(_objectSpread(_objectSpread({}, value), {}, {
                receiveInformationViaEmail,
                receiveInformationViaPostAndEmail
              }));
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 211,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "input-container viaEmail",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_CheckBox__WEBPACK_IMPORTED_MODULE_2__.CheckBox, {
            radio: true,
            isChecked: value.receiveInformationViaEmail,
            text: t('contact-info.receiveOfferViaEmail'),
            onToggle: () => {
              let {
                receiveInformationViaPostAndEmail,
                receiveInformationViaEmail
              } = value;
              receiveInformationViaPostAndEmail = !receiveInformationViaPostAndEmail;
              receiveInformationViaEmail = !receiveInformationViaEmail;
              onValueChange(_objectSpread(_objectSpread({}, value), {}, {
                receiveInformationViaEmail,
                receiveInformationViaPostAndEmail
              }));
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 233,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "input-container comments",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("textarea", {
            value: value.comment || '',
            placeholder: t('contact-info.comments'),
            onChange: e => onValueChange(_objectSpread(_objectSpread({}, value), {}, {
              comment: e.target.value
            }))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 255,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 254,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "input-container subscribe",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_CheckBox__WEBPACK_IMPORTED_MODULE_2__.CheckBox, {
            isChecked: value.subscribeToNewsLetter,
            text: t('contact-info.subscribeToNewsLetter'),
            onToggle: () => onValueChange(_objectSpread(_objectSpread({}, value), {}, {
              subscribeToNewsLetter: !value.subscribeToNewsLetter
            }))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 264,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/templates/Contact/OfferForm/FormStepHouseCondition.tsx":
/*!********************************************************************!*\
  !*** ./src/templates/Contact/OfferForm/FormStepHouseCondition.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormStepHouseCondition": () => (/* binding */ FormStepHouseCondition)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../locale */ "./src/locale/index.ts");
/* harmony import */ var _FormStepContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FormStepContainer */ "./src/templates/Contact/FormStepContainer.tsx");
/* harmony import */ var _Icons_ConstructionYear__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Icons/ConstructionYear */ "./src/templates/Contact/OfferForm/Icons/ConstructionYear.tsx");
/* harmony import */ var _Icons_Furnish__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Icons/Furnish */ "./src/templates/Contact/OfferForm/Icons/Furnish.tsx");
/* harmony import */ var _Icons_PropertyCondition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Icons/PropertyCondition */ "./src/templates/Contact/OfferForm/Icons/PropertyCondition.tsx");
/* harmony import */ var _FormItemSlider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FormItemSlider */ "./src/templates/Contact/OfferForm/FormItemSlider.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\OfferForm\\FormStepHouseCondition.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const OBJECT_STATE_MIN_VALUE = 0;
const OBJECT_STATE_MAX_VALUE = 4;
const FURNISHING_MIN_VALUE = 0;
const FURNISHING_MAX_VALUE = 3;
const FormStepHouseCondition = ({
  value,
  errors,
  onValueChange,
  getMinValue,
  getMaxValue
}) => {
  const t = (0,_locale__WEBPACK_IMPORTED_MODULE_1__.useTranslations)('contact-form');

  const getObjectStateValue = objectStateValue => t(`houseCondition.objectState.options.${objectStateValue}`);

  const getFurnishingValue = furnishingValue => t(`houseCondition.furnishing.options.${furnishingValue}`);

  const getItemErrors = itemName => {
    switch (itemName) {
      case 'yearOfConstruction':
        return errors.filter(e => e.includes('yearOfConstruction'));

      case 'objectState':
        return errors.filter(e => e.includes('objectState'));

      case 'furnishing':
        return errors.filter(e => e.includes('furnishing'));

      default:
    }

    return [];
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_FormStepContainer__WEBPACK_IMPORTED_MODULE_2__.FormStepContainer, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_FormItemSlider__WEBPACK_IMPORTED_MODULE_6__.FormItemSlider, {
      value: value.yearOfConstruction || getMinValue() - 1,
      errors: getItemErrors('yearOfConstruction'),
      img: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_Icons_ConstructionYear__WEBPACK_IMPORTED_MODULE_3__.ConstructionYear, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 14
      }, undefined),
      text: t('houseCondition.yearOfConstruction.title'),
      infoText: t('houseCondition.yearOfConstruction.infoText'),
      minRange: getMinValue(),
      maxRange: getMaxValue(),
      onValueChange: newValue => {
        onValueChange(_objectSpread(_objectSpread({}, value), {}, {
          yearOfConstruction: newValue
        }));
      },
      renderValue: newValue => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("select", {
        value: newValue >= getMinValue() ? newValue : '',
        className: newValue < getMinValue() ? 'default' : '',
        onChange: e => {
          onValueChange(_objectSpread(_objectSpread({}, value), {}, {
            yearOfConstruction: parseInt(e.target.value, 10)
          }));
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
          value: "",
          disabled: true,
          hidden: true,
          children: t('pleaseSelect')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 13
        }, undefined), new Array(getMaxValue() + 1 - getMinValue()).fill(0).map((_, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
          className: "select-option",
          value: getMinValue() + index,
          children: getMinValue() + index
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 17
        }, undefined))]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_FormItemSlider__WEBPACK_IMPORTED_MODULE_6__.FormItemSlider, {
      value: value.objectState != null ? value.objectState : -1,
      errors: getItemErrors('objectState'),
      img: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_Icons_PropertyCondition__WEBPACK_IMPORTED_MODULE_5__.PropertyCondition, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 14
      }, undefined),
      text: t('houseCondition.objectState.title'),
      infoText: t('houseCondition.objectState.infoText'),
      minRange: OBJECT_STATE_MIN_VALUE,
      maxRange: OBJECT_STATE_MAX_VALUE,
      onValueChange: newValue => {
        onValueChange(_objectSpread(_objectSpread({}, value), {}, {
          objectState: newValue
        }));
      },
      renderValue: newValue => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("select", {
        value: newValue >= 0 ? newValue : '',
        className: newValue < 0 ? 'default' : '',
        onChange: e => {
          onValueChange(_objectSpread(_objectSpread({}, value), {}, {
            objectState: parseInt(e.target.value, 10)
          }));
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
          value: "",
          disabled: true,
          hidden: true,
          children: t('pleaseSelect')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 13
        }, undefined), new Array(OBJECT_STATE_MAX_VALUE + 1).fill(0).map((_, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
          className: "select-option",
          value: index,
          children: getObjectStateValue(index)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 17
        }, undefined))]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_FormItemSlider__WEBPACK_IMPORTED_MODULE_6__.FormItemSlider, {
      value: value.furnishing != null ? value.furnishing : -1,
      errors: getItemErrors('furnishing'),
      img: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_Icons_Furnish__WEBPACK_IMPORTED_MODULE_4__.Furnish, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 14
      }, undefined),
      text: t('houseCondition.furnishing.title'),
      infoText: t('houseCondition.furnishing.infoText'),
      minRange: FURNISHING_MIN_VALUE,
      maxRange: FURNISHING_MAX_VALUE,
      onValueChange: newValue => {
        onValueChange(_objectSpread(_objectSpread({}, value), {}, {
          furnishing: newValue
        }));
      },
      renderValue: newValue => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("select", {
        value: newValue >= 0 ? newValue : '',
        className: newValue < 0 ? 'default' : '',
        onChange: e => {
          onValueChange(_objectSpread(_objectSpread({}, value), {}, {
            furnishing: parseInt(e.target.value, 10)
          }));
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
          value: "",
          disabled: true,
          hidden: true,
          children: t('pleaseSelect')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 13
        }, undefined), new Array(FURNISHING_MAX_VALUE + 1).fill(0).map((_, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
          className: "select-option",
          value: index,
          children: getFurnishingValue(index)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 17
        }, undefined))]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/templates/Contact/OfferForm/FormStepHouseConstruction/HouseConstructionItem.tsx":
/*!*********************************************************************************************!*\
  !*** ./src/templates/Contact/OfferForm/FormStepHouseConstruction/HouseConstructionItem.tsx ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HouseConstructionItem": () => (/* binding */ HouseConstructionItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FormItemInfoBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FormItemInfoBox */ "./src/templates/Contact/OfferForm/FormItemInfoBox.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\OfferForm\\FormStepHouseConstruction\\HouseConstructionItem.tsx";



const HouseConstructionItem = ({
  isActive,
  isValid,
  img,
  text,
  infoText,
  onSelect
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_FormItemInfoBox__WEBPACK_IMPORTED_MODULE_1__.FormItemInfoBox, {
    active: isActive,
    error: !isValid,
    onClick: () => {
      onSelect();
    },
    className: "pointer hover",
    infoText: infoText,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "form-item-body house-type",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "img",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "svg-cnt",
          children: img
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
          children: text
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/templates/Contact/OfferForm/FormStepHouseConstruction/index.tsx":
/*!*****************************************************************************!*\
  !*** ./src/templates/Contact/OfferForm/FormStepHouseConstruction/index.tsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormStepHouseConstruction": () => (/* binding */ FormStepHouseConstruction)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../locale */ "./src/locale/index.ts");
/* harmony import */ var _FormStepContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../FormStepContainer */ "./src/templates/Contact/FormStepContainer.tsx");
/* harmony import */ var _Icons_PrefabricatedMassive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Icons/PrefabricatedMassive */ "./src/templates/Contact/OfferForm/Icons/PrefabricatedMassive.tsx");
/* harmony import */ var _Icons_PrefabricatedWood__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Icons/PrefabricatedWood */ "./src/templates/Contact/OfferForm/Icons/PrefabricatedWood.tsx");
/* harmony import */ var _Icons_SolidConstruction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Icons/SolidConstruction */ "./src/templates/Contact/OfferForm/Icons/SolidConstruction.tsx");
/* harmony import */ var _HouseConstructionItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HouseConstructionItem */ "./src/templates/Contact/OfferForm/FormStepHouseConstruction/HouseConstructionItem.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\OfferForm\\FormStepHouseConstruction\\index.tsx";








// eslint-disable-next-line react-hooks/rules-of-hooks
const t = (0,_locale__WEBPACK_IMPORTED_MODULE_1__.useTranslations)('contact-form');
const items = [{
  img: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_Icons_SolidConstruction__WEBPACK_IMPORTED_MODULE_5__.SolidConstruction, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 10
  }, undefined),
  text: t('houseConstruction.solidConstruction.title'),
  infoText: t('houseConstruction.solidConstruction.infoText'),
  value: 'solidConstruction'
}, {
  img: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_Icons_PrefabricatedMassive__WEBPACK_IMPORTED_MODULE_3__.PrefabricatedMassive, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 10
  }, undefined),
  text: t('houseConstruction.prefabricatedMassive.title'),
  infoText: t('houseConstruction.prefabricatedMassive.infoText'),
  value: 'prefabricatedMassive'
}, {
  img: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_Icons_PrefabricatedWood__WEBPACK_IMPORTED_MODULE_4__.PrefabricatedWood, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 10
  }, undefined),
  text: t('houseConstruction.prefabricatedWood.title'),
  infoText: t('houseConstruction.prefabricatedWood.infoText'),
  value: 'prefabricatedWood'
}];
const FormStepHouseConstruction = ({
  value,
  errors,
  onValueChange
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_FormStepContainer__WEBPACK_IMPORTED_MODULE_2__.FormStepContainer, {
  className: "full-height",
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
    className: "construction-item",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h3", {
      children: t('houseConstruction.title')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: "construction-item-container",
      children: items.map((item, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_HouseConstructionItem__WEBPACK_IMPORTED_MODULE_6__.HouseConstructionItem, {
        img: item.img,
        text: item.text,
        infoText: item.infoText,
        isActive: item.value === value,
        isValid: errors.length === 0,
        onSelect: () => onValueChange(item.value)
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 48,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./src/templates/Contact/OfferForm/FormStepHouseFloors.tsx":
/*!*****************************************************************!*\
  !*** ./src/templates/Contact/OfferForm/FormStepHouseFloors.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormStepHouseFloors": () => (/* binding */ FormStepHouseFloors)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../locale */ "./src/locale/index.ts");
/* harmony import */ var _FormStepContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FormStepContainer */ "./src/templates/Contact/FormStepContainer.tsx");
/* harmony import */ var _FormItemSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormItemSlider */ "./src/templates/Contact/OfferForm/FormItemSlider.tsx");
/* harmony import */ var _NumberRangeInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NumberRangeInput */ "./src/templates/Contact/OfferForm/NumberRangeInput.tsx");
/* harmony import */ var _Icons_HouseWithFloors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Icons/HouseWithFloors */ "./src/templates/Contact/OfferForm/Icons/HouseWithFloors.tsx");
/* harmony import */ var _Icons_HouseWithBasement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Icons/HouseWithBasement */ "./src/templates/Contact/OfferForm/Icons/HouseWithBasement.tsx");
/* harmony import */ var _Icons_HouseWithRoof__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Icons/HouseWithRoof */ "./src/templates/Contact/OfferForm/Icons/HouseWithRoof.tsx");
/* harmony import */ var _FormItemMultipleChoice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FormItemMultipleChoice */ "./src/templates/Contact/OfferForm/FormItemMultipleChoice.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\OfferForm\\FormStepHouseFloors.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const FormStepHouseFloors = ({
  value,
  errors,
  onValueChange,
  getMaxValue
}) => {
  const t = (0,_locale__WEBPACK_IMPORTED_MODULE_1__.useTranslations)('contact-form');
  const numberOfFloorsMaxValue = getMaxValue ? getMaxValue() : 5;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_FormStepContainer__WEBPACK_IMPORTED_MODULE_2__.FormStepContainer, {
    className: "multiple-choice-container",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_FormItemSlider__WEBPACK_IMPORTED_MODULE_3__.FormItemSlider, {
      value: value.numberOfFloors,
      errors: errors.filter(e => e.includes('numberOfFloors')),
      img: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Icons_HouseWithFloors__WEBPACK_IMPORTED_MODULE_5__.HouseWithFloors, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 14
      }, undefined),
      text: t('houseFloors.numberOfFloors.title'),
      infoText: t('houseFloors.numberOfFloors.infoText'),
      minRange: 0,
      maxRange: numberOfFloorsMaxValue,
      valueIncrement: 1,
      onValueChange: newValue => onValueChange(_objectSpread(_objectSpread({}, value), {}, {
        numberOfFloors: newValue
      })),
      renderValue: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_NumberRangeInput__WEBPACK_IMPORTED_MODULE_4__.NumberRangeInput, {
        min: 0,
        max: numberOfFloorsMaxValue,
        value: value.numberOfFloors,
        onValueChange: newValue => {
          onValueChange(_objectSpread(_objectSpread({}, value), {}, {
            numberOfFloors: newValue
          }));
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_FormItemMultipleChoice__WEBPACK_IMPORTED_MODULE_8__.FormItemMultipleChoice, {
      value: value.basement,
      items: [0, 1, 2, 3].map(i => t(`houseFloors.basement.options.${i}`)),
      img: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Icons_HouseWithBasement__WEBPACK_IMPORTED_MODULE_6__.HouseWithBasement, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 14
      }, undefined),
      text: t('houseFloors.basement.title'),
      infoText: t('houseFloors.basement.infoText'),
      errors: [],
      onValueChange: newValue => onValueChange(_objectSpread(_objectSpread({}, value), {}, {
        basement: newValue
      }))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_FormItemMultipleChoice__WEBPACK_IMPORTED_MODULE_8__.FormItemMultipleChoice, {
      value: value.roof,
      items: [0, 1, 2, 3].map(i => t(`houseFloors.roof.options.${i}`)),
      img: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Icons_HouseWithRoof__WEBPACK_IMPORTED_MODULE_7__.HouseWithRoof, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 14
      }, undefined),
      text: t('houseFloors.roof.title'),
      infoText: t('houseFloors.roof.infoText'),
      errors: [],
      onValueChange: newValue => onValueChange(_objectSpread(_objectSpread({}, value), {}, {
        roof: newValue
      }))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/templates/Contact/OfferForm/FormStepHouseNumberOfRooms.tsx":
/*!************************************************************************!*\
  !*** ./src/templates/Contact/OfferForm/FormStepHouseNumberOfRooms.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormStepHouseNumberOfRooms": () => (/* binding */ FormStepHouseNumberOfRooms)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../locale */ "./src/locale/index.ts");
/* harmony import */ var _FormStepContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FormStepContainer */ "./src/templates/Contact/FormStepContainer.tsx");
/* harmony import */ var _Icons_LivingAria__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Icons/LivingAria */ "./src/templates/Contact/OfferForm/Icons/LivingAria.tsx");
/* harmony import */ var _FormItemSlider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormItemSlider */ "./src/templates/Contact/OfferForm/FormItemSlider.tsx");
/* harmony import */ var _Icons_Bathroom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Icons/Bathroom */ "./src/templates/Contact/OfferForm/Icons/Bathroom.tsx");
/* harmony import */ var _NumberRangeInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NumberRangeInput */ "./src/templates/Contact/OfferForm/NumberRangeInput.tsx");
/* harmony import */ var _FormItemMultipleChoice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FormItemMultipleChoice */ "./src/templates/Contact/OfferForm/FormItemMultipleChoice.tsx");
/* harmony import */ var _Icons_Heating__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Icons/Heating */ "./src/templates/Contact/OfferForm/Icons/Heating.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\OfferForm\\FormStepHouseNumberOfRooms.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const FormStepHouseNumberOfRooms = ({
  value,
  errors,
  onValueChange
}) => {
  const getItemErrors = itemName => {
    switch (itemName) {
      case 'numberOfRooms':
        return errors.filter(e => e.includes('numberOfRooms'));

      case 'toilets':
        return errors.filter(e => e.includes('toilets'));

      default:
    }

    return [];
  };

  const t = (0,_locale__WEBPACK_IMPORTED_MODULE_1__.useTranslations)('contact-form');
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_FormStepContainer__WEBPACK_IMPORTED_MODULE_2__.FormStepContainer, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_FormItemMultipleChoice__WEBPACK_IMPORTED_MODULE_7__.FormItemMultipleChoice, {
      value: value.heatingAge,
      items: [0, 1, 2, 3].map(i => t(`heating.heatingAge.options.${i}`)),
      img: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Icons_Heating__WEBPACK_IMPORTED_MODULE_8__.Heating, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 14
      }, undefined),
      text: t('heating.heatingAge.title'),
      infoText: t('heating.heatingAge.infoText'),
      errors: [],
      onValueChange: newValue => onValueChange(_objectSpread(_objectSpread({}, value), {}, {
        heatingAge: newValue
      }))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_FormItemSlider__WEBPACK_IMPORTED_MODULE_4__.FormItemSlider, {
      value: value.numberOfRooms,
      errors: getItemErrors('numberOfRooms'),
      img: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Icons_LivingAria__WEBPACK_IMPORTED_MODULE_3__.LivingAria, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 14
      }, undefined),
      text: t('numberOfRooms.numberOfRooms.title'),
      infoText: t('numberOfRooms.numberOfRooms.infoText'),
      minRange: 0,
      maxRange: 20,
      onValueChange: newValue => {
        onValueChange(_objectSpread(_objectSpread({}, value), {}, {
          numberOfRooms: newValue
        }));
      },
      renderValue: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_NumberRangeInput__WEBPACK_IMPORTED_MODULE_6__.NumberRangeInput, {
        min: 0,
        max: 20,
        value: value.numberOfRooms,
        onValueChange: newValue => {
          onValueChange(_objectSpread(_objectSpread({}, value), {}, {
            numberOfRooms: newValue
          }));
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_FormItemSlider__WEBPACK_IMPORTED_MODULE_4__.FormItemSlider, {
      value: value.toilets,
      errors: getItemErrors('toilets'),
      img: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Icons_Bathroom__WEBPACK_IMPORTED_MODULE_5__.Bathroom, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 14
      }, undefined),
      text: t('numberOfRooms.toilets.title'),
      infoText: t('numberOfRooms.toilets.infoText'),
      minRange: 0,
      maxRange: 10,
      onValueChange: newValue => {
        onValueChange(_objectSpread(_objectSpread({}, value), {}, {
          toilets: newValue
        }));
      },
      renderValue: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_NumberRangeInput__WEBPACK_IMPORTED_MODULE_6__.NumberRangeInput, {
        min: 0,
        max: 20,
        value: value.toilets,
        onValueChange: newValue => {
          onValueChange(_objectSpread(_objectSpread({}, value), {}, {
            toilets: newValue
          }));
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/templates/Contact/OfferForm/FormStepHouseProperty.tsx":
/*!*******************************************************************!*\
  !*** ./src/templates/Contact/OfferForm/FormStepHouseProperty.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormStepHouseProperty": () => (/* binding */ FormStepHouseProperty)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../locale */ "./src/locale/index.ts");
/* harmony import */ var _FormStepContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FormStepContainer */ "./src/templates/Contact/FormStepContainer.tsx");
/* harmony import */ var _Icons_Pool__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Icons/Pool */ "./src/templates/Contact/OfferForm/Icons/Pool.tsx");
/* harmony import */ var _Icons_Sauna__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Icons/Sauna */ "./src/templates/Contact/OfferForm/Icons/Sauna.tsx");
/* harmony import */ var _Icons_SolarPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Icons/SolarPanel */ "./src/templates/Contact/OfferForm/Icons/SolarPanel.tsx");
/* harmony import */ var _FormItemYesNo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FormItemYesNo */ "./src/templates/Contact/OfferForm/FormItemYesNo.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\OfferForm\\FormStepHouseProperty.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









// eslint-disable-next-line react-hooks/rules-of-hooks
const t = (0,_locale__WEBPACK_IMPORTED_MODULE_1__.useTranslations)('contact-form');
const items = [{
  img: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_Icons_Pool__WEBPACK_IMPORTED_MODULE_3__.Pool, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 10
  }, undefined),
  name: 'pool',
  text: t('houseProperties.pool.title'),
  infoText: t('houseProperties.pool.infoText')
}, {
  img: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_Icons_Sauna__WEBPACK_IMPORTED_MODULE_4__.Sauna, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 10
  }, undefined),
  name: 'sauna',
  text: t('houseProperties.sauna.title'),
  infoText: t('houseProperties.sauna.infoText')
}, {
  img: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_Icons_SolarPanel__WEBPACK_IMPORTED_MODULE_5__.SolarPanel, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 10
  }, undefined),
  name: 'solarPanel',
  text: t('houseProperties.solarPanel.title'),
  infoText: t('houseProperties.solarPanel.infoText')
}];
const FormStepHouseProperty = ({
  value,
  errors,
  onValueChange
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_FormStepContainer__WEBPACK_IMPORTED_MODULE_2__.FormStepContainer, {
  children: items.map((item, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_FormItemYesNo__WEBPACK_IMPORTED_MODULE_6__.FormItemYesNo, {
    value: value[item.name],
    errors: errors,
    img: item.img,
    text: item.text,
    infoText: item.infoText,
    onValueChange: newValue => {
      onValueChange(_objectSpread(_objectSpread({}, value), {}, {
        [item.name]: newValue
      }));
    }
  }, index, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 7
  }, undefined))
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 47,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./src/templates/Contact/OfferForm/FormStepHouseSpaceLiving.tsx":
/*!**********************************************************************!*\
  !*** ./src/templates/Contact/OfferForm/FormStepHouseSpaceLiving.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormStepHouseSpaceLiving": () => (/* binding */ FormStepHouseSpaceLiving)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../locale */ "./src/locale/index.ts");
/* harmony import */ var _FormStepContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FormStepContainer */ "./src/templates/Contact/FormStepContainer.tsx");
/* harmony import */ var _Icons_LivingAria__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Icons/LivingAria */ "./src/templates/Contact/OfferForm/Icons/LivingAria.tsx");
/* harmony import */ var _FormItemSlider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormItemSlider */ "./src/templates/Contact/OfferForm/FormItemSlider.tsx");
/* harmony import */ var _NumberRangeInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NumberRangeInput */ "./src/templates/Contact/OfferForm/NumberRangeInput.tsx");
/* harmony import */ var _Icons_LandArea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Icons/LandArea */ "./src/templates/Contact/OfferForm/Icons/LandArea.tsx");
/* harmony import */ var _Icons_RentedArea__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Icons/RentedArea */ "./src/templates/Contact/OfferForm/Icons/RentedArea.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\OfferForm\\FormStepHouseSpaceLiving.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const FormStepHouseSpaceLiving = ({
  value,
  errors,
  disabledOptions,
  getMaxValue,
  onValueChange
}) => {
  const t = (0,_locale__WEBPACK_IMPORTED_MODULE_1__.useTranslations)('contact-form');
  const maxRendedArea = getMaxValue ? getMaxValue() : 0;

  const getItemErrors = itemName => {
    switch (itemName) {
      case 'livingArea':
        return errors.filter(e => e.includes('livingArea'));

      case 'rentedArea':
        return errors.filter(e => e.includes('rented'));

      case 'landArea':
        return errors.filter(e => e.includes('landArea'));

      default:
    }

    return [];
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_FormStepContainer__WEBPACK_IMPORTED_MODULE_2__.FormStepContainer, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_FormItemSlider__WEBPACK_IMPORTED_MODULE_4__.FormItemSlider, {
      value: value.livingArea,
      valueIncrement: 10,
      errors: getItemErrors('livingArea'),
      img: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_Icons_LivingAria__WEBPACK_IMPORTED_MODULE_3__.LivingAria, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 14
      }, undefined),
      text: t('spaceLiving.livingArea.title'),
      infoText: t('spaceLiving.livingArea.infoText'),
      minRange: 0,
      maxRange: 1000,
      onValueChange: newValue => {
        onValueChange(_objectSpread(_objectSpread({}, value), {}, {
          livingArea: newValue
        }));
      },
      renderValue: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_NumberRangeInput__WEBPACK_IMPORTED_MODULE_5__.NumberRangeInput, {
        min: 0,
        max: 1000,
        value: value.livingArea,
        unit: t('m2'),
        onValueChange: newValue => {
          onValueChange(_objectSpread(_objectSpread({}, value), {}, {
            livingArea: newValue
          }));
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_FormItemSlider__WEBPACK_IMPORTED_MODULE_4__.FormItemSlider, {
      value: value.rentedArea,
      disabled: disabledOptions.includes('rentedArea'),
      errors: getItemErrors('rentedArea'),
      img: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_Icons_RentedArea__WEBPACK_IMPORTED_MODULE_7__.RentedArea, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 14
      }, undefined),
      text: t('spaceLiving.rentedArea.title'),
      infoText: t('spaceLiving.rentedArea.infoText'),
      minRange: 0,
      maxRange: maxRendedArea,
      valueIncrement: 10,
      onValueChange: newValue => onValueChange(_objectSpread(_objectSpread({}, value), {}, {
        rentedArea: newValue
      })),
      renderValue: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_NumberRangeInput__WEBPACK_IMPORTED_MODULE_5__.NumberRangeInput, {
        disabled: disabledOptions.includes('rentedArea'),
        min: 0,
        max: maxRendedArea,
        value: value.rentedArea,
        unit: t('m2'),
        onValueChange: newValue => {
          onValueChange(_objectSpread(_objectSpread({}, value), {}, {
            rentedArea: newValue
          }));
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_FormItemSlider__WEBPACK_IMPORTED_MODULE_4__.FormItemSlider, {
      value: value.landArea,
      valueIncrement: 10,
      errors: getItemErrors('landArea'),
      img: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_Icons_LandArea__WEBPACK_IMPORTED_MODULE_6__.LandArea, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 14
      }, undefined),
      text: t('spaceLiving.landArea.title'),
      infoText: t('spaceLiving.landArea.infoText'),
      minRange: 0,
      maxRange: 5000,
      onValueChange: newValue => {
        onValueChange(_objectSpread(_objectSpread({}, value), {}, {
          landArea: newValue
        }));
      },
      renderValue: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_NumberRangeInput__WEBPACK_IMPORTED_MODULE_5__.NumberRangeInput, {
        min: 0,
        max: 5000,
        value: value.landArea,
        unit: t('m2'),
        onValueChange: newValue => {
          onValueChange(_objectSpread(_objectSpread({}, value), {}, {
            landArea: newValue
          }));
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/templates/Contact/OfferForm/FormStepHouseType/HouseTypeItem.tsx":
/*!*****************************************************************************!*\
  !*** ./src/templates/Contact/OfferForm/FormStepHouseType/HouseTypeItem.tsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HouseTypeItem": () => (/* binding */ HouseTypeItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FormItemInfoBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FormItemInfoBox */ "./src/templates/Contact/OfferForm/FormItemInfoBox.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\OfferForm\\FormStepHouseType\\HouseTypeItem.tsx";



const HouseTypeItem = ({
  isActive,
  isValid,
  img,
  text,
  infoText,
  onSelect
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_FormItemInfoBox__WEBPACK_IMPORTED_MODULE_1__.FormItemInfoBox, {
    infoText: infoText,
    active: isActive,
    error: !isValid,
    onClick: () => {
      onSelect();
    },
    className: "pointer hover house-type-item",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "svg-cnt",
      children: img
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
      children: text
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/templates/Contact/OfferForm/FormStepHouseType/index.tsx":
/*!*********************************************************************!*\
  !*** ./src/templates/Contact/OfferForm/FormStepHouseType/index.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormStepHouseType": () => (/* binding */ FormStepHouseType)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../locale */ "./src/locale/index.ts");
/* harmony import */ var _FormStepContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../FormStepContainer */ "./src/templates/Contact/FormStepContainer.tsx");
/* harmony import */ var _Icons_Condominium__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Icons/Condominium */ "./src/templates/Contact/OfferForm/Icons/Condominium.tsx");
/* harmony import */ var _Icons_HouseSemiDetached__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Icons/HouseSemiDetached */ "./src/templates/Contact/OfferForm/Icons/HouseSemiDetached.tsx");
/* harmony import */ var _Icons_HouseSingle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Icons/HouseSingle */ "./src/templates/Contact/OfferForm/Icons/HouseSingle.tsx");
/* harmony import */ var _Icons_HouseTripleMiddle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Icons/HouseTripleMiddle */ "./src/templates/Contact/OfferForm/Icons/HouseTripleMiddle.tsx");
/* harmony import */ var _Icons_HouseTripleLeftSelected__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Icons/HouseTripleLeftSelected */ "./src/templates/Contact/OfferForm/Icons/HouseTripleLeftSelected.tsx");
/* harmony import */ var _HouseTypeItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./HouseTypeItem */ "./src/templates/Contact/OfferForm/FormStepHouseType/HouseTypeItem.tsx");
/* harmony import */ var _Icons_ApartmentBuilding__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Icons/ApartmentBuilding */ "./src/templates/Contact/OfferForm/Icons/ApartmentBuilding.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\OfferForm\\FormStepHouseType\\index.tsx";











// eslint-disable-next-line react-hooks/rules-of-hooks
const t = (0,_locale__WEBPACK_IMPORTED_MODULE_1__.useTranslations)('contact-form');
const items = [{
  img: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_Icons_HouseSingle__WEBPACK_IMPORTED_MODULE_5__.HouseSingle, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 10
  }, undefined),
  text: t('houseTypes.detachedHouse.title'),
  infoText: t('houseTypes.detachedHouse.infoText'),
  value: 'detachedHouse'
}, {
  img: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_Icons_HouseTripleLeftSelected__WEBPACK_IMPORTED_MODULE_7__.HouseTripleLeftSelected, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 10
  }, undefined),
  text: t('houseTypes.endOfTerraceHouse.title'),
  infoText: t('houseTypes.endOfTerraceHouse.infoText'),
  value: 'endOfTerraceHouse'
}, {
  img: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_Icons_HouseTripleMiddle__WEBPACK_IMPORTED_MODULE_6__.HouseTripleMiddle, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 10
  }, undefined),
  text: t('houseTypes.midTerraceHouse.title'),
  infoText: t('houseTypes.midTerraceHouse.infoText'),
  value: 'midTerraceHouse'
}, {
  img: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_Icons_HouseSemiDetached__WEBPACK_IMPORTED_MODULE_4__.HouseSemiDetached, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 10
  }, undefined),
  text: t('houseTypes.semiDetachedHouse.title'),
  infoText: t('houseTypes.semiDetachedHouse.infoText'),
  value: 'semiDetachedHouse'
}, {
  img: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_Icons_ApartmentBuilding__WEBPACK_IMPORTED_MODULE_9__.ApartmentBuilding, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 10
  }, undefined),
  text: t('houseTypes.multiApartmentHouse.title'),
  infoText: t('houseTypes.multiApartmentHouse.infoText'),
  value: 'multiApartmentHouse'
}, {
  img: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_Icons_Condominium__WEBPACK_IMPORTED_MODULE_3__.Condominium, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 10
  }, undefined),
  text: t('houseTypes.condominium.title'),
  infoText: t('houseTypes.condominium.infoText'),
  value: 'condominium'
}];
const FormStepHouseType = ({
  value,
  errors,
  onValueChange
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_FormStepContainer__WEBPACK_IMPORTED_MODULE_2__.FormStepContainer, {
  className: "full-height",
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
    className: "house-types-container",
    children: items.map((item, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_HouseTypeItem__WEBPACK_IMPORTED_MODULE_8__.HouseTypeItem, {
      img: item.img,
      text: item.text,
      infoText: item.infoText,
      isActive: item.value === value,
      isValid: errors.length === 0,
      onSelect: () => onValueChange(item.value)
    }, index, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 70,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./src/templates/Contact/OfferForm/FormStepMisc.tsx":
/*!**********************************************************!*\
  !*** ./src/templates/Contact/OfferForm/FormStepMisc.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormStepMisc": () => (/* binding */ FormStepMisc)
/* harmony export */ });
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../locale */ "./src/locale/index.ts");
/* harmony import */ var _FormStepContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FormStepContainer */ "./src/templates/Contact/FormStepContainer.tsx");
/* harmony import */ var _FormItemYesNo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormItemYesNo */ "./src/templates/Contact/OfferForm/FormItemYesNo.tsx");
/* harmony import */ var _Icons_Asbest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Icons/Asbest */ "./src/templates/Contact/OfferForm/Icons/Asbest.tsx");
/* harmony import */ var _Icons_MonumentProtection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Icons/MonumentProtection */ "./src/templates/Contact/OfferForm/Icons/MonumentProtection.tsx");
/* harmony import */ var _Icons_HouseOnGround__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Icons/HouseOnGround */ "./src/templates/Contact/OfferForm/Icons/HouseOnGround.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\OfferForm\\FormStepMisc.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const FormStepMisc = ({
  value,
  onValueChange
}) => {
  const t = (0,_locale__WEBPACK_IMPORTED_MODULE_0__.useTranslations)('contact-form');
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_FormStepContainer__WEBPACK_IMPORTED_MODULE_1__.FormStepContainer, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_FormItemYesNo__WEBPACK_IMPORTED_MODULE_2__.FormItemYesNo, {
      value: value.asbest,
      errors: [],
      img: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Icons_Asbest__WEBPACK_IMPORTED_MODULE_3__.Asbest, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 14
      }, undefined),
      text: t('misc.asbest.title'),
      infoText: t('misc.asbest.infoText'),
      onValueChange: newValue => {
        onValueChange(_objectSpread(_objectSpread({}, value), {}, {
          asbest: newValue
        }));
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_FormItemYesNo__WEBPACK_IMPORTED_MODULE_2__.FormItemYesNo, {
      value: value.leaseHold,
      errors: [],
      img: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Icons_HouseOnGround__WEBPACK_IMPORTED_MODULE_5__.HouseOnGround, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 14
      }, undefined),
      text: t('misc.leaseHold.title'),
      infoText: t('misc.leaseHold.infoText'),
      onValueChange: newValue => {
        onValueChange(_objectSpread(_objectSpread({}, value), {}, {
          leaseHold: newValue
        }));
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_FormItemYesNo__WEBPACK_IMPORTED_MODULE_2__.FormItemYesNo, {
      value: value.monumentProtection,
      errors: [],
      img: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Icons_MonumentProtection__WEBPACK_IMPORTED_MODULE_4__.MonumentProtection, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 14
      }, undefined),
      text: t('misc.monumentProtection.title'),
      infoText: t('misc.monumentProtection.infoText'),
      onValueChange: newValue => {
        onValueChange(_objectSpread(_objectSpread({}, value), {}, {
          monumentProtection: newValue
        }));
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/templates/Contact/OfferForm/Icons/AdditionalSpace.tsx":
/*!*******************************************************************!*\
  !*** ./src/templates/Contact/OfferForm/Icons/AdditionalSpace.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdditionalSpace": () => (/* binding */ AdditionalSpace)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\OfferForm\\Icons\\AdditionalSpace.tsx";


const AdditionalSpace = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
  version: "1.1",
  id: "Layer_1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  viewBox: "52.8 142.8 506.3 506.3",
  xmlSpace: "preserve",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
    style: {
      fill: '#044B93'
    },
    d: "M559.2,190c0-26-21.2-47.2-47.2-47.2H100c-26,0-47.2,21.2-47.2,47.2v412c0,26,21.2,47.2,47.2,47.2h284.7\r c9.5,0,17.2-7.7,17.2-17.2s-7.7-17.2-17.2-17.2H283.2v-61.5c0-9.5-7.7-17.2-17.2-17.2s-17.2,7.7-17.2,17.2v61.5H100\r c-7.1,0-12.8-5.8-12.8-12.8V413.2h161.7v61.5c0,9.5,7.7,17.2,17.2,17.2s17.2-7.7,17.2-17.2V317.3c0-9.5-7.7-17.2-17.2-17.2\r s-17.2,7.7-17.2,17.2v61.5H87.2V190c0-7.1,5.8-12.8,12.8-12.8h148.9v61.5c0,9.5,7.7,17.2,17.2,17.2s17.2-7.7,17.2-17.2v-61.5H512\r c7.1,0,12.8,5.8,12.8,12.8v189.8H345.3c-9.5,0-17.2,7.7-17.2,17.2s7.7,17.2,17.2,17.2h179.5V602c0,7.1-5.8,12.8-12.8,12.8h-48.7\r c-9.5,0-17.2,7.7-17.2,17.2s7.7,17.2,17.2,17.2H512c26,0,47.2-21.2,47.2-47.2V190z"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
    style: {
      fill: '#044B93'
    },
    d: "M440.7,260c-5.5,0-10-4.5-10-10v-31.8c0-5.5-4.5-10-10-10h-8.3c-5.5,0-10,4.5-10,10V250c0,5.5-4.5,10-10,10\r h-29.8c-5.5,0-10,4.5-10,10v7.4c0,5.5,4.5,10,10,10h29.8c5.5,0,10,4.5,10,10v32.3c0,5.5,4.5,10,10,10h8.3c5.5,0,10-4.5,10-10v-32.3\r c0-5.5,4.5-10,10-10h29.8c5.5,0,10-4.5,10-10V270c0-5.5-4.5-10-10-10H440.7z"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./src/templates/Contact/OfferForm/Icons/ApartmentBuilding.tsx":
/*!*********************************************************************!*\
  !*** ./src/templates/Contact/OfferForm/Icons/ApartmentBuilding.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApartmentBuilding": () => (/* binding */ ApartmentBuilding)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\OfferForm\\Icons\\ApartmentBuilding.tsx";


const ApartmentBuilding = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  viewBox: "5138.029 184.092 260.601 426.972",
  xmlSpace: "preserve",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#004A93'
        },
        d: "M5174.288,270.934h43.421c3.996,0,7.237-3.24,7.237-7.237v-43.421c0-3.997-3.241-7.237-7.237-7.237\r h-43.421c-3.997,0-7.237,3.24-7.237,7.237v43.421C5167.051,267.694,5170.292,270.934,5174.288,270.934z M5181.525,227.513h28.947\r v28.947h-28.947V227.513z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#004A93'
        },
        d: "M5246.656,270.934h43.421c3.997,0,7.237-3.24,7.237-7.237v-43.421c0-3.997-3.24-7.237-7.237-7.237\r h-43.421c-3.996,0-7.236,3.24-7.236,7.237v43.421C5239.419,267.694,5242.66,270.934,5246.656,270.934z M5253.893,227.513h28.947\r v28.947h-28.947V227.513z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#004A93'
        },
        d: "M5319.024,270.934h43.421c3.997,0,7.237-3.24,7.237-7.237v-43.421c0-3.997-3.24-7.237-7.237-7.237\r h-43.421c-3.997,0-7.237,3.24-7.237,7.237v43.421C5311.787,267.694,5315.027,270.934,5319.024,270.934z M5326.261,227.513h28.947\r v28.947h-28.947V227.513z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#004A93'
        },
        d: "M5174.288,343.302h43.421c3.996,0,7.237-3.24,7.237-7.237v-43.421c0-3.997-3.241-7.237-7.237-7.237\r h-43.421c-3.997,0-7.237,3.24-7.237,7.237v43.421C5167.051,340.062,5170.292,343.302,5174.288,343.302z M5181.525,299.881h28.947\r v28.947h-28.947V299.881z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#004A93'
        },
        d: "M5246.656,343.302h43.421c3.997,0,7.237-3.24,7.237-7.237v-43.421c0-3.997-3.24-7.237-7.237-7.237\r h-43.421c-3.996,0-7.236,3.24-7.236,7.237v43.421C5239.419,340.062,5242.66,343.302,5246.656,343.302z M5253.893,299.881h28.947\r v28.947h-28.947V299.881z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#004A93'
        },
        d: "M5319.024,343.302h43.421c3.997,0,7.237-3.24,7.237-7.237v-43.421c0-3.997-3.24-7.237-7.237-7.237\r h-43.421c-3.997,0-7.237,3.24-7.237,7.237v43.421C5311.787,340.062,5315.027,343.302,5319.024,343.302z M5326.261,299.881h28.947\r v28.947h-28.947V299.881z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#004A93'
        },
        d: "M5174.288,415.67h43.421c3.996,0,7.237-3.24,7.237-7.237v-43.421c0-3.997-3.241-7.237-7.237-7.237\r h-43.421c-3.997,0-7.237,3.24-7.237,7.237v43.421C5167.051,412.43,5170.292,415.67,5174.288,415.67z M5181.525,372.249h28.947\r v28.947h-28.947V372.249z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#004A93'
        },
        d: "M5246.656,415.67h43.421c3.997,0,7.237-3.24,7.237-7.237v-43.421c0-3.997-3.24-7.237-7.237-7.237\r h-43.421c-3.996,0-7.236,3.24-7.236,7.237v43.421C5239.419,412.43,5242.66,415.67,5246.656,415.67z M5253.893,372.249h28.947\r v28.947h-28.947V372.249z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#004A93'
        },
        d: "M5319.024,415.67h43.421c3.997,0,7.237-3.24,7.237-7.237v-43.421c0-3.997-3.24-7.237-7.237-7.237\r h-43.421c-3.997,0-7.237,3.24-7.237,7.237v43.421C5311.787,412.43,5315.027,415.67,5319.024,415.67z M5326.261,372.249h28.947\r v28.947h-28.947V372.249z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#004A93'
        },
        d: "M5174.288,488.038h43.421c3.996,0,7.237-3.24,7.237-7.237V437.38c0-3.997-3.241-7.237-7.237-7.237\r h-43.421c-3.997,0-7.237,3.24-7.237,7.237v43.421C5167.051,484.798,5170.292,488.038,5174.288,488.038z M5181.525,444.617h28.947\r v28.947h-28.947V444.617z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#004A93'
        },
        d: "M5246.656,488.038h43.421c3.997,0,7.237-3.24,7.237-7.237V437.38c0-3.997-3.24-7.237-7.237-7.237\r h-43.421c-3.996,0-7.236,3.24-7.236,7.237v43.421C5239.419,484.798,5242.66,488.038,5246.656,488.038z M5253.893,444.617h28.947\r v28.947h-28.947V444.617z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#004A93'
        },
        d: "M5319.024,488.038h43.421c3.997,0,7.237-3.24,7.237-7.237V437.38c0-3.997-3.24-7.237-7.237-7.237\r h-43.421c-3.997,0-7.237,3.24-7.237,7.237v43.421C5311.787,484.798,5315.027,488.038,5319.024,488.038z M5326.261,444.617h28.947\r v28.947h-28.947V444.617z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#004A93'
        },
        d: "M5398.629,249.223v-57.894c0-3.997-3.24-7.237-7.237-7.237h-246.051\r c-3.997,0-7.237,3.24-7.237,7.237v101.315h-0.075v14.474h0.075v296.709c0,3.997,3.24,7.237,7.237,7.237h246.051\r c3.997,0,7.237-3.24,7.237-7.237v-340.13h0.001L5398.629,249.223L5398.629,249.223z M5261.129,596.59h-28.947v-65.131h28.947\r V596.59z M5304.55,596.59h-28.947v-65.131h28.947V596.59z M5384.155,596.59h-65.131v-72.368c0-3.997-3.24-7.237-7.237-7.237\r h-86.841c-3.997,0-7.237,3.24-7.237,7.237v72.368h-65.131V198.566h231.578V596.59z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./src/templates/Contact/OfferForm/Icons/Asbest.tsx":
/*!**********************************************************!*\
  !*** ./src/templates/Contact/OfferForm/Icons/Asbest.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Asbest": () => (/* binding */ Asbest)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\OfferForm\\Icons\\Asbest.tsx";


const Asbest = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  viewBox: "751.075 182.14 429.009 429.086",
  xmlSpace: "preserve",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("defs", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
            x: "751.075",
            y: "182.14",
            width: "429.009",
            height: "429.086",
            style: {
              overflow: 'visible'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("defs", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
            x: "751.075",
            y: "182.14",
            width: "462.925",
            height: "429.753",
            style: {
              overflow: 'visible'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
          style: {
            overflow: 'visible'
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("defs", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
              x: "751.075",
              y: "182.14",
              width: "462.925",
              height: "429.753",
              style: {
                overflow: 'visible'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
          style: {
            overflow: 'visible'
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("defs", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
              x: "751.075",
              y: "182.14",
              width: "462.925",
              height: "429.753",
              style: {
                overflow: 'visible'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#074C93'
      },
      d: "M1116.695,246.168L1116.695,246.168c-40.283-40.282-93.841-62.467-150.81-62.467\r c-56.969,0-110.527,22.185-150.81,62.467c-40.282,40.283-62.467,93.841-62.467,150.81c0,56.969,22.185,110.527,62.467,150.81\r c40.282,40.282,93.841,62.467,150.81,62.467c56.969,0,110.527-22.185,150.81-62.467c40.283-40.283,62.467-93.841,62.467-150.81\r C1179.162,340.009,1156.978,286.45,1116.695,246.168z M819.979,520.092c-29.023-34.352-45.006-78.075-45.006-123.114\r c0-105.27,85.643-190.913,190.912-190.913c45.04,0,88.763,15.984,123.114,45.006l3.825,3.231l-20.638,20.639l-2.253-1.518\r c-8.516-5.735-19.523-5.735-28.04,0.001l-1.441,0.972c-4.188,2.819-9.599,2.82-13.788,0.002l-1.446-0.976\r c-8.517-5.734-19.522-5.734-28.036,0.002l-1.447,0.973c-4.188,2.819-9.599,2.82-13.785,0.004l-1.449-0.98\r c-8.515-5.732-19.524-5.73-28.043,0.005l-1.434,0.969c-4.192,2.821-9.604,2.821-13.791,0.003l-1.447-0.976\r c-8.516-5.735-19.523-5.734-28.042,0.003l-1.435,0.969c-4.191,2.821-9.603,2.821-13.791,0.003l-1.447-0.975\r c-4.257-2.867-9.138-4.301-14.019-4.301s-9.76,1.434-14.019,4.302l-11.529,7.767c-1.648,1.111-2.769,2.804-3.156,4.768\r l-36.871,189.116c-0.585,2.976,0.672,5.982,3.201,7.659c2.481,1.647,5.828,1.636,8.302-0.029l13.903-9.365\r c6.194-4.171,14.197-4.172,20.389-0.001l2.338,1.575c2.688,1.81,5.578,3.152,8.565,4.037l-44.968,44.968L819.979,520.092z\r M1031.989,457.917l-2.265-0.263c-3.002-0.349-6.028-0.253-8.994,0.283l-2.008,0.364l-7.014-91.657l10.456-10.456L1031.989,457.917\r z M1006.403,464.464l-1.009,0.579c-2.808,1.61-5.933,2.413-9.056,2.413c-3.303,0-6.604-0.898-9.526-2.688l-0.861-0.528\r l-0.018-1.009l-1.212-69.599l15.105-15.105L1006.403,464.464z M973.087,458.086l-2.148-0.316c-2.957-0.437-5.953-0.437-8.909,0\r l-2.147,0.317l0.703-40.321l11.596-11.596L973.087,458.086z M876.927,467.453c-2.964,0-5.932-0.722-8.632-2.177l-1.147-0.618\r l3.773-24.137c0.264-1.682-0.144-3.366-1.147-4.742c-1.003-1.377-2.482-2.28-4.164-2.543c-3.469-0.54-6.741,1.846-7.288,5.317\r l-3.116,19.924l-1.897-0.397c-8.023-1.679-16.265-0.096-23.207,4.455l-3.653,2.395l34-174.391l9.711-6.538\r c3.236-2.181,7.364-2.696,11.044-1.38l1.434,0.513l-21.291,136.091c-0.263,1.682,0.145,3.367,1.148,4.742\r c1.004,1.375,2.482,2.277,4.161,2.539c0.332,0.053,0.665,0.079,0.995,0.079c3.16,0,5.807-2.268,6.295-5.391l20.702-132.328\r l1.767,0.216c1.931,0.235,3.889,0.242,5.821,0.02l2.261-0.259L888.06,459.067l-8.126,8.126\r C878.939,467.359,877.934,467.453,876.927,467.453z M982.892,288.638l2.16,0.334c1.999,0.309,4.04,0.37,6.06,0.185l1.862-0.172\r l1.827,23.866c0.251,3.304,3.041,5.892,6.352,5.892c0.162,0,0.33-0.005,0.483-0.017c3.513-0.268,6.148-3.338,5.882-6.847\r l-2.187-28.576l1.246-0.506c2.274-0.923,4.744-1.145,7.138-0.641l1.324,0.278l4.373,45.281l-9.925,9.925l-0.493-6.437\r c-0.27-3.502-3.332-6.128-6.844-5.866c-3.504,0.268-6.138,3.338-5.872,6.843l1.327,17.342l-13.42,13.42L982.892,288.638z\r M948.156,398.971l-17.95,17.95l9.791-127.937l1.863,0.172c2.018,0.187,4.057,0.124,6.06-0.185l2.159-0.333L948.156,398.971z\r M916.356,430.771l-14.115,14.115l15.691-162.453l1.324-0.278c2.396-0.504,4.865-0.282,7.138,0.641l1.246,0.506L916.356,430.771z\r M927.618,450.734l19.984-19.984l-0.584,33.489l-0.861,0.528c-2.921,1.79-6.222,2.687-9.524,2.687\r c-3.123,0-6.248-0.802-9.057-2.412l-1.009-0.578L927.618,450.734z M961.14,385.987l1.807-103.672l1.506-0.256\r c1.351-0.229,2.718-0.229,4.064,0l1.505,0.257l1.624,93.164L961.14,385.987z M1031.095,316.032l-2.626-27.19l2.261,0.26\r c1.93,0.22,3.889,0.214,5.824-0.021l1.766-0.214l2.697,17.242L1031.095,316.032z M1045.242,333.11l20.579,131.548l-1.146,0.618\r c-2.699,1.455-5.668,2.178-8.63,2.178c-3.453,0-6.898-0.98-9.906-2.923l-0.748-0.484l-11.545-119.54L1045.242,333.11z\r M1050.335,283.133l1.434-0.513c3.675-1.314,7.803-0.798,11.041,1.38l0.189,0.127l-10.817,10.817L1050.335,283.133z\r M965.885,587.89c-45.105,0-88.876-16.025-123.251-45.123l-3.818-3.232l3.537-3.537l65.742-65.742\r c3.105,0.225,6.167,1.252,8.881,3.079l2.338,1.576c10.521,7.086,24.121,7.086,34.645-0.003l2.327-1.571\r c6.197-4.173,14.199-4.174,20.391-0.002l2.338,1.576c10.523,7.087,24.122,7.085,34.643-0.002l2.329-1.571\r c6.198-4.173,14.201-4.172,20.391-0.002l2.337,1.575c10.521,7.086,24.12,7.086,34.644-0.002l2.332-1.573\r c6.195-4.17,14.199-4.171,20.392-0.001l13.9,9.363c1.241,0.838,2.683,1.28,4.174,1.28c1.467,0,2.895-0.431,4.13-1.248\r c2.526-1.67,3.783-4.674,3.204-7.653l-10.269-52.677c-0.674-3.451-4.03-5.712-7.479-5.036c-3.453,0.674-5.713,4.029-5.039,7.481\r l7.816,40.086l-3.653-2.396c-6.944-4.553-15.186-6.133-23.207-4.458l-1.897,0.396l-21.358-136.53l18.609-18.609l19.922,102.183\r c0.327,1.674,1.286,3.121,2.703,4.073c1.411,0.949,3.108,1.291,4.774,0.965c1.672-0.327,3.117-1.284,4.069-2.696\r c0.952-1.414,1.296-3.111,0.97-4.781l-21.567-110.615l22.557-22.557l3.232,3.818c29.098,34.374,45.122,78.146,45.122,123.251\r C1156.797,502.247,1071.155,587.89,965.885,587.89z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./src/templates/Contact/OfferForm/Icons/Bathroom.tsx":
/*!************************************************************!*\
  !*** ./src/templates/Contact/OfferForm/Icons/Bathroom.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bathroom": () => (/* binding */ Bathroom)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\OfferForm\\Icons\\Bathroom.tsx";


const Bathroom = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
  version: "1.1",
  id: "Layer_1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  viewBox: "41.2 154.2 539.2 503.7",
  xmlSpace: "preserve",
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      className: "st0",
      d: "M550.9,421h-6.1V237c0-22.3-8.6-43.1-24.2-58.7s-36.4-24.2-58.7-24.2c-40.4,0-69.5,29.3-73.5,72.4\r c-20.9,4.9-36.1,23.4-36.1,46c0,6.9,4.8,11.7,11.7,11.7h71.1c6.9,0,11.7-4.8,11.7-11.7c0-22.2-14.6-40.4-34.9-45.7\r c3.2-25.9,19-49.3,49.9-49.3c33.3,0,59.4,26.1,59.4,59.4V421H258.9c-5-20.3-22.7-35-44.6-35.6c-10-11.5-23.1-17.8-36.9-17.8\r c-16.6,0-32.1,9-40.3,23.1c-7.7-3.5-15.1-5.3-21.9-5.3c-22.5,0-40.8,14.9-45.9,35.6c-15.9,0.7-28.1,13.4-28.1,29.5\r c0,16.5,13,29.5,29.5,29.5h8.5l23.5,93c7.5,29,33.5,49.3,63.2,49.3h2.5l-9.5,18.9c-1.7,2.8-2.1,6.2-1,9.2c0.9,2.7,2.9,5,5.6,6.2\r c1.7,1.3,3.9,1.3,5.1,1.3c4.2,0,7.9-2,10.4-5.7l15-29.9h243.3l14.3,28.7c2.9,5.7,7.3,6.9,10.5,6.9c1.8,0,4,0,5.6-2.5\r c4.4-2.8,6.3-9.3,4.1-14.7l-9.3-18.7c12-1.3,23.7-5.9,33.3-13.3c11.4-8.8,19.6-21.1,23.3-34.7l23.7-93.9h8.3\r c16.5,0,29.5-13,29.5-29.5S567.4,421,550.9,421z M94.5,421c4-7.5,11.7-12.1,20.6-12.1c6.8,0,13.3,3,19.2,8.8\r c1.1,1.5,2.7,2.7,4.5,3.3H94.5z M146.9,421c3.8-1.2,6.3-4.2,7.4-8.9l0-0.1c2.5-12.3,12.3-20.8,23.9-20.8c9.3,0,16.8,4.3,20.6,11.8\r c2.2,4.5,7.7,7,12.6,6h2.3c8.9,0,16.6,4.6,20.6,12.1L146.9,421L146.9,421z M79.6,444.4h169h302.4c3.8,0,6.1,2.3,6.1,6.1\r s-2.3,6.1-6.1,6.1h-17.8H88.5H70.7c-3.8,0-6.1-2.3-6.1-6.1s2.3-6.1,6.1-6.1H79.6z M166.7,598.8c-19,0-35.7-13-40.8-31.7L103.7,480\r H518l-20.5,87.1c-5.1,18.7-21.9,31.7-40.8,31.7L166.7,598.8L166.7,598.8z M379.2,260.9c4.1-7.3,12.4-12.1,21.4-12.1\r c8.9,0,16.6,4.6,20.6,12.1H379.2z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M364.1,324.4c6.9,0,11.7-4.8,11.7-11.7v-4.4c0-6.9-4.8-11.7-11.7-11.7s-11.7,4.8-11.7,11.7v4.4\r C352.4,319.5,357.2,324.4,364.1,324.4z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M364.1,365.3c7.2,0,11.7-6.1,11.7-11.7v-9.8c0-6.9-4.8-11.7-11.7-11.7s-11.7,4.8-11.7,11.7v9.8\r C352.4,360.4,357.2,365.3,364.1,365.3z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M364.1,399.9c6.9,0,11.7-4.8,11.7-11.7v-4.4c0-6.9-4.8-11.7-11.7-11.7s-11.7,4.8-11.7,11.7v4.4\r C352.4,395.1,357.2,399.9,364.1,399.9z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M399.7,324.4c6.9,0,11.7-4.8,11.7-11.7v-4.4c0-6.9-4.8-11.7-11.7-11.7s-11.7,4.8-11.7,11.7v4.4\r C388,319.5,392.8,324.4,399.7,324.4z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M388,353.5c0,6.9,4.8,11.7,11.7,11.7c7.2,0,11.7-6.1,11.7-11.7v-9.8c0-6.9-4.8-11.7-11.7-11.7\r s-11.7,4.8-11.7,11.7V353.5z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M388,388.2c0,6.9,4.8,11.7,11.7,11.7s11.7-4.8,11.7-11.7v-4.4c0-6.9-4.8-11.7-11.7-11.7s-11.7,4.8-11.7,11.7\r V388.2z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M435.3,324.4c6.9,0,11.7-4.8,11.7-11.7v-4.4c0-6.9-4.8-11.7-11.7-11.7s-11.7,4.8-11.7,11.7v4.4\r C423.6,319.5,428.4,324.4,435.3,324.4z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M423.6,353.5c0,6.9,4.8,11.7,11.7,11.7c7.2,0,11.7-6.1,11.7-11.7v-9.8c0-6.9-4.8-11.7-11.7-11.7\r s-11.7,4.8-11.7,11.7V353.5z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M423.6,388.2c0,6.9,4.8,11.7,11.7,11.7s11.7-4.8,11.7-11.7v-4.4c0-6.9-4.8-11.7-11.7-11.7s-11.7,4.8-11.7,11.7\r V388.2z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./src/templates/Contact/OfferForm/Icons/Check.tsx":
/*!*********************************************************!*\
  !*** ./src/templates/Contact/OfferForm/Icons/Check.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Check": () => (/* binding */ Check)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\OfferForm\\Icons\\Check.tsx";


const Check = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  viewBox: "-206 -16 826 826",
  xmlSpace: "preserve",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
    id: "Layer_2",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("circle", {
      style: {
        fill: '#FFFFFF'
      },
      cx: "206",
      cy: "396",
      r: "343"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
    id: "Capa_1",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#47AF58'
        },
        d: "M393.665,224.692L135.207,483.159L20.335,368.287c-15.862-15.862-41.574-15.862-57.436,0\r c-15.862,15.862-15.862,41.574,0,57.436l143.585,143.585c7.926,7.926,18.319,11.899,28.713,11.899\r c10.394,0,20.797-3.963,28.723-11.899l287.171-287.181c15.862-15.852,15.862-41.574,0-57.436\r C435.25,208.83,409.527,208.84,393.665,224.692z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#47AF58'
        },
        d: "M584.164,236.23c-20.673-48.878-50.262-92.768-87.944-130.45\r c-37.682-37.682-81.571-67.271-130.45-87.944C315.146-3.576,261.393-14.433,206-14.433S96.853-3.576,46.23,17.835\r C-2.648,38.509-46.538,68.098-84.22,105.78c-37.682,37.682-67.271,81.572-87.944,130.45\r c-21.412,50.623-32.269,104.377-32.269,159.77s10.857,109.146,32.269,159.77c20.674,48.879,50.263,92.769,87.944,130.45\r c37.682,37.683,81.572,67.271,130.45,87.944c50.623,21.412,104.377,32.269,159.77,32.269s109.146-10.856,159.77-32.269\r c48.879-20.673,92.769-50.262,130.45-87.944c37.683-37.682,67.271-81.571,87.944-130.45\r c21.412-50.623,32.269-104.377,32.269-159.77S605.576,286.853,584.164,236.23z M206,735.567\r c-187.238,0-339.567-152.329-339.567-339.567c0-187.238,152.329-339.567,339.567-339.567\r c187.238,0,339.567,152.329,339.567,339.567C545.567,583.238,393.238,735.567,206,735.567z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./src/templates/Contact/OfferForm/Icons/Condominium.tsx":
/*!***************************************************************!*\
  !*** ./src/templates/Contact/OfferForm/Icons/Condominium.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Condominium": () => (/* binding */ Condominium)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\OfferForm\\Icons\\Condominium.tsx";


const Condominium = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  viewBox: "5420.866 184.968 434.377 427.137",
  xmlSpace: "preserve",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#004A93'
        },
        d: "M5848.003,250.124h-79.636v-57.917c0-3.998-3.242-7.24-7.24-7.24h-246.147\r c-3.998,0-7.239,3.242-7.239,7.24v101.355h-79.636c-3.998,0-7.24,3.242-7.24,7.24v296.824c0,3.998,3.242,7.24,7.24,7.24\r s7.239-3.242,7.239-7.24V308.041h72.396v296.824c0,3.998,3.241,7.24,7.239,7.24h246.147c3.998,0,7.24-3.242,7.24-7.24V264.604\r h72.396v333.022c0,3.998,3.242,7.24,7.24,7.24s7.239-3.242,7.239-7.24V257.364\r C5855.243,253.366,5852.001,250.124,5848.003,250.124z M5630.815,597.626h-28.958v-65.156h28.958V597.626z M5674.252,597.626\r h-28.958v-65.156h28.958V597.626z M5753.888,597.626h-65.156V525.23c0-3.998-3.242-7.24-7.24-7.24h-86.875\r c-3.998,0-7.239,3.242-7.239,7.24v72.396h-65.157V199.447h231.667V597.626z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#004A93'
        },
        d: "M5543.939,271.843h43.438c3.998,0,7.239-3.242,7.239-7.24v-43.438c0-3.998-3.241-7.24-7.239-7.24\r h-43.438c-3.998,0-7.239,3.242-7.239,7.24v43.438C5536.7,268.602,5539.941,271.843,5543.939,271.843z M5551.179,228.406h28.958\r v28.958h-28.958V228.406z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#004A93'
        },
        d: "M5616.336,271.843h43.438c3.998,0,7.24-3.242,7.24-7.24v-43.438c0-3.998-3.242-7.24-7.24-7.24\r h-43.438c-3.998,0-7.24,3.242-7.24,7.24v43.438C5609.096,268.602,5612.338,271.843,5616.336,271.843z M5623.575,228.406h28.958\r v28.958h-28.958V228.406z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#004A93'
        },
        d: "M5688.732,271.843h43.438c3.998,0,7.24-3.242,7.24-7.24v-43.438c0-3.998-3.242-7.24-7.24-7.24\r h-43.438c-3.998,0-7.24,3.242-7.24,7.24v43.438C5681.492,268.602,5684.734,271.843,5688.732,271.843z M5695.972,228.406h28.958\r v28.958h-28.958V228.406z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#004A93'
        },
        d: "M5543.939,344.239h43.438c3.998,0,7.239-3.242,7.239-7.24v-43.438c0-3.998-3.241-7.24-7.239-7.24\r h-43.438c-3.998,0-7.239,3.242-7.239,7.24V337C5536.7,340.998,5539.941,344.239,5543.939,344.239z M5551.179,300.802h28.958\r v28.958h-28.958V300.802z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#004A93'
        },
        d: "M5616.336,344.239h43.438c3.998,0,7.24-3.242,7.24-7.24v-43.438c0-3.998-3.242-7.24-7.24-7.24\r h-43.438c-3.998,0-7.24,3.242-7.24,7.24V337C5609.096,340.998,5612.338,344.239,5616.336,344.239z M5623.575,300.802h28.958\r v28.958h-28.958V300.802z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#004A93'
        },
        d: "M5688.732,344.239h43.438c3.998,0,7.24-3.242,7.24-7.24v-43.438c0-3.998-3.242-7.24-7.24-7.24\r h-43.438c-3.998,0-7.24,3.242-7.24,7.24V337C5681.492,340.998,5684.734,344.239,5688.732,344.239z M5695.972,300.802h28.958\r v28.958h-28.958V300.802z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#004A93'
        },
        d: "M5543.939,416.635h43.438c3.998,0,7.239-3.242,7.239-7.24v-43.438c0-3.998-3.241-7.24-7.239-7.24\r h-43.438c-3.998,0-7.239,3.242-7.239,7.24v43.438C5536.7,413.394,5539.941,416.635,5543.939,416.635z M5551.179,373.198h28.958\r v28.958h-28.958V373.198z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#004A93'
        },
        d: "M5616.336,416.635h43.438c3.998,0,7.24-3.242,7.24-7.24v-43.438c0-3.998-3.242-7.24-7.24-7.24\r h-43.438c-3.998,0-7.24,3.242-7.24,7.24v43.438C5609.096,413.394,5612.338,416.635,5616.336,416.635z M5623.575,373.198h28.958\r v28.958h-28.958V373.198z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#004A93'
        },
        d: "M5688.732,416.635h43.438c3.998,0,7.24-3.242,7.24-7.24v-43.438c0-3.998-3.242-7.24-7.24-7.24\r h-43.438c-3.998,0-7.24,3.242-7.24,7.24v43.438C5681.492,413.394,5684.734,416.635,5688.732,416.635z M5695.972,373.198h28.958\r v28.958h-28.958V373.198z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#004A93'
        },
        d: "M5543.939,489.032h43.438c3.998,0,7.239-3.242,7.239-7.24v-43.438c0-3.998-3.241-7.24-7.239-7.24\r h-43.438c-3.998,0-7.239,3.242-7.239,7.24v43.438C5536.7,485.79,5539.941,489.032,5543.939,489.032z M5551.179,445.594h28.958\r v28.958h-28.958V445.594z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#004A93'
        },
        d: "M5616.336,489.032h43.438c3.998,0,7.24-3.242,7.24-7.24v-43.438c0-3.998-3.242-7.24-7.24-7.24\r h-43.438c-3.998,0-7.24,3.242-7.24,7.24v43.438C5609.096,485.79,5612.338,489.032,5616.336,489.032z M5623.575,445.594h28.958\r v28.958h-28.958V445.594z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#004A93'
        },
        d: "M5688.732,489.032h43.438c3.998,0,7.24-3.242,7.24-7.24v-43.438c0-3.998-3.242-7.24-7.24-7.24\r h-43.438c-3.998,0-7.24,3.242-7.24,7.24v43.438C5681.492,485.79,5684.734,489.032,5688.732,489.032z M5695.972,445.594h28.958\r v28.958h-28.958V445.594z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#004A93'
        },
        d: "M5457.064,322.521h7.239c3.998,0,7.24,3.242,7.24,7.24V337c0,3.998-3.242,7.24-7.24,7.24h-7.239\r c-3.998,0-7.24-3.242-7.24-7.24v-7.24C5449.825,325.762,5453.066,322.521,5457.064,322.521z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#004A93'
        },
        d: "M5486.023,322.521h7.239c3.998,0,7.24,3.242,7.24,7.24V337c0,3.998-3.242,7.24-7.24,7.24h-7.239\r c-3.999,0-7.24-3.242-7.24-7.24v-7.24C5478.783,325.762,5482.024,322.521,5486.023,322.521z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#004A93'
        },
        d: "M5457.064,351.479h7.239c3.998,0,7.24,3.242,7.24,7.24v7.24c0,3.998-3.242,7.24-7.24,7.24h-7.239\r c-3.998,0-7.24-3.242-7.24-7.24v-7.24C5449.825,354.721,5453.066,351.479,5457.064,351.479z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#004A93'
        },
        d: "M5486.023,351.479h7.239c3.998,0,7.24,3.242,7.24,7.24v7.24c0,3.998-3.242,7.24-7.24,7.24h-7.239\r c-3.999,0-7.24-3.242-7.24-7.24v-7.24C5478.783,354.721,5482.024,351.479,5486.023,351.479z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#004A93'
        },
        d: "M5457.064,380.437h7.239c3.998,0,7.24,3.242,7.24,7.24v7.24c0,3.998-3.242,7.24-7.24,7.24h-7.239\r c-3.998,0-7.24-3.242-7.24-7.24v-7.24C5449.825,383.679,5453.066,380.437,5457.064,380.437z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#004A93'
        },
        d: "M5486.023,380.437h7.239c3.998,0,7.24,3.242,7.24,7.24v7.24c0,3.998-3.242,7.24-7.24,7.24h-7.239\r c-3.999,0-7.24-3.242-7.24-7.24v-7.24C5478.783,383.679,5482.024,380.437,5486.023,380.437z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#004A93'
        },
        d: "M5457.064,409.396h7.239c3.998,0,7.24,3.242,7.24,7.24v7.24c0,3.998-3.242,7.24-7.24,7.24h-7.239\r c-3.998,0-7.24-3.242-7.24-7.24v-7.24C5449.825,412.637,5453.066,409.396,5457.064,409.396z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#004A93'
        },
        d: "M5486.023,409.396h7.239c3.998,0,7.24,3.242,7.24,7.24v7.24c0,3.998-3.242,7.24-7.24,7.24h-7.239\r c-3.999,0-7.24-3.242-7.24-7.24v-7.24C5478.783,412.637,5482.024,409.396,5486.023,409.396z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#004A93'
        },
        d: "M5457.064,438.354h7.239c3.998,0,7.24,3.242,7.24,7.24v7.24c0,3.998-3.242,7.24-7.24,7.24h-7.239\r c-3.998,0-7.24-3.242-7.24-7.24v-7.24C5449.825,441.596,5453.066,438.354,5457.064,438.354z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#004A93'
        },
        d: "M5486.023,438.354h7.239c3.998,0,7.24,3.242,7.24,7.24v7.24c0,3.998-3.242,7.24-7.24,7.24h-7.239\r c-3.999,0-7.24-3.242-7.24-7.24v-7.24C5478.783,441.596,5482.024,438.354,5486.023,438.354z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#004A93'
        },
        d: "M5457.064,467.313h7.239c3.998,0,7.24,3.242,7.24,7.24v7.24c0,3.998-3.242,7.24-7.24,7.24h-7.239\r c-3.998,0-7.24-3.242-7.24-7.24v-7.24C5449.825,470.554,5453.066,467.313,5457.064,467.313z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#004A93'
        },
        d: "M5486.023,467.313h7.239c3.998,0,7.24,3.242,7.24,7.24v7.24c0,3.998-3.242,7.24-7.24,7.24h-7.239\r c-3.999,0-7.24-3.242-7.24-7.24v-7.24C5478.783,470.554,5482.024,467.313,5486.023,467.313z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#004A93'
        },
        d: "M5457.064,496.271h7.239c3.998,0,7.24,3.242,7.24,7.24v7.24c0,3.998-3.242,7.24-7.24,7.24h-7.239\r c-3.998,0-7.24-3.242-7.24-7.24v-7.24C5449.825,499.513,5453.066,496.271,5457.064,496.271z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#004A93'
        },
        d: "M5486.023,496.271h7.239c3.998,0,7.24,3.242,7.24,7.24v7.24c0,3.998-3.242,7.24-7.24,7.24h-7.239\r c-3.999,0-7.24-3.242-7.24-7.24v-7.24C5478.783,499.513,5482.024,496.271,5486.023,496.271z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#004A93'
        },
        d: "M5457.064,525.23h7.239c3.998,0,7.24,3.242,7.24,7.24v7.24c0,3.998-3.242,7.24-7.24,7.24h-7.239\r c-3.998,0-7.24-3.241-7.24-7.24v-7.24C5449.825,528.471,5453.066,525.23,5457.064,525.23z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#004A93'
        },
        d: "M5486.023,525.23h7.239c3.998,0,7.24,3.242,7.24,7.24v7.24c0,3.998-3.242,7.24-7.24,7.24h-7.239\r c-3.999,0-7.24-3.241-7.24-7.24v-7.24C5478.783,528.471,5482.024,525.23,5486.023,525.23z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#004A93'
        },
        d: "M5457.064,554.188h7.239c3.998,0,7.24,3.242,7.24,7.24v7.24c0,3.998-3.242,7.24-7.24,7.24h-7.239\r c-3.998,0-7.24-3.242-7.24-7.24v-7.24C5449.825,557.43,5453.066,554.188,5457.064,554.188z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#004A93'
        },
        d: "M5486.023,554.188h7.239c3.998,0,7.24,3.242,7.24,7.24v7.24c0,3.998-3.242,7.24-7.24,7.24h-7.239\r c-3.999,0-7.24-3.242-7.24-7.24v-7.24C5478.783,557.43,5482.024,554.188,5486.023,554.188z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#004A93'
        },
        d: "M5790.086,322.521h28.958c3.998,0,7.24-3.242,7.24-7.24v-28.958c0-3.998-3.242-7.24-7.24-7.24\r h-28.958c-3.998,0-7.24,3.242-7.24,7.24v28.958C5782.847,319.279,5786.088,322.521,5790.086,322.521z M5797.326,293.562h14.479\r v14.479h-14.479V293.562z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#004A93'
        },
        d: "M5782.847,373.198c0,3.998,3.242,7.24,7.24,7.24h28.958c3.998,0,7.24-3.242,7.24-7.24v-28.958\r c0-3.998-3.242-7.24-7.24-7.24h-28.958c-3.998,0-7.24,3.242-7.24,7.24V373.198z M5797.326,351.479h14.479v14.479h-14.479V351.479z\r "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#004A93'
        },
        d: "M5782.847,431.115c0,3.998,3.242,7.24,7.24,7.24h28.958c3.998,0,7.24-3.242,7.24-7.24v-28.958\r c0-3.998-3.242-7.24-7.24-7.24h-28.958c-3.998,0-7.24,3.242-7.24,7.24V431.115z M5797.326,409.396h14.479v14.479h-14.479V409.396z\r "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#004A93'
        },
        d: "M5782.847,489.032c0,3.998,3.242,7.24,7.24,7.24h28.958c3.998,0,7.24-3.242,7.24-7.24v-28.958\r c0-3.998-3.242-7.24-7.24-7.24h-28.958c-3.998,0-7.24,3.242-7.24,7.24V489.032z M5797.326,467.313h14.479v14.479h-14.479V467.313z\r "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#004A93'
        },
        d: "M5782.847,546.948c0,3.998,3.242,7.24,7.24,7.24h28.958c3.998,0,7.24-3.242,7.24-7.24V517.99\r c0-3.998-3.242-7.24-7.24-7.24h-28.958c-3.998,0-7.24,3.241-7.24,7.24V546.948z M5797.326,525.23h14.479v14.479h-14.479V525.23z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./src/templates/Contact/OfferForm/Icons/ConstructionYear.tsx":
/*!********************************************************************!*\
  !*** ./src/templates/Contact/OfferForm/Icons/ConstructionYear.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConstructionYear": () => (/* binding */ ConstructionYear)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\OfferForm\\Icons\\ConstructionYear.tsx";


const ConstructionYear = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
  version: "1.1",
  id: "Layer_1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  viewBox: "45.6 129.6 528 528",
  xmlSpace: "preserve",
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("defs", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
            id: "SVGID_1_",
            x: "45.6",
            y: "129.6",
            width: "528",
            height: "528"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("clipPath", {
          id: "SVGID_2_",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("use", {
            style: {
              overflow: 'visible'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
          style: {
            fill: '#044B93'
          },
          d: "M498,288l58-58v58H498L498,288z M410,640l58-58v58H410L410,640z M455.5,305.6l-58,58v-58H455.5L455.5,305.6z\r M116,247.6V288H75.7L116,247.6L116,247.6z M146.1,217.6h45.5l-58,58V230L146.1,217.6L146.1,217.6z M437.9,147.2l-40.4,40.4\r v-40.4H437.9L437.9,147.2z M468,200h-58l52.8-52.8h5.2L468,200L468,200z M485.6,217.6h58l-58,58V217.6L485.6,217.6z M468,230v58\r h-58L468,230L468,230z M380,230v58h-58L380,230L380,230z M292,230v58h-58L292,230L292,230z M204,288h-58l58-58V288L204,288z\r M279.6,217.6l-58,58v-58L279.6,217.6L279.6,217.6z M205.2,200L380,150.1V200H205.2L205.2,200z M397.6,217.6h58l-58,58V217.6\r L397.6,217.6z M309.6,217.6h58l-58,58V217.6L309.6,217.6z M468,376h-58l58-58V376L468,376z M410,552l58-58v58H410L410,552z\r M397.6,569.6h58l-58,58V569.6L397.6,569.6z M397.6,451.5v-58h58L397.6,451.5L397.6,451.5z M397.6,481.6h58l-58,58V481.6\r L397.6,481.6z M468,464h-58l58-58V464L468,464z M224.2,399.8c2.5,2.5,6.3,3.3,9.6,1.9c3.3-1.4,5.4-4.6,5.4-8.1v-35.2h35.2v88\r c0,2.3,0.9,4.6,2.6,6.2l20.2,20.2H75.7L186.4,362L224.2,399.8L224.2,399.8z M564.8,200h-79.2v-61.6c0-4.9-3.9-8.8-8.8-8.8h-88\r c-0.8,0-1.6,0.3-2.4,0.5l0-0.1L140,200.3l0,0.1c-1.4,0.4-2.8,1-3.8,2.1l-88,88c-2.5,2.5-3.3,6.3-1.9,9.6c1.4,3.3,4.6,5.4,8.1,5.4\r h123.2v40.4L48.2,475.4c-2.5,2.5-3.3,6.3-1.9,9.6c1.4,3.3,4.6,5.4,8.1,5.4h264c3.6,0,6.8-2.1,8.1-5.4c1.4-3.3,0.6-7.1-1.9-9.6\r L292,442.7v-93.1c0-4.9-3.9-8.8-8.8-8.8h-52.8c-4.9,0-8.8,3.9-8.8,8.8v22.8l-26.4-26.4v-40.4H380v343.2c0,4.9,3.9,8.8,8.8,8.8h88\r c4.9,0,8.8-3.9,8.8-8.8V305.6h79.2c4.9,0,8.8-3.9,8.8-8.8v-88C573.6,203.9,569.6,200,564.8,200L564.8,200z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M63.2,543.2h246.4V640h-88v-70.4c0-4.9-3.9-8.8-8.8-8.8H160c-4.9,0-8.8,3.9-8.8,8.8V640h-88V543.2L63.2,543.2z\r M168.8,640v-61.6H204V640H168.8L168.8,640z M54.4,657.6H160h52.8h105.6c4.9,0,8.8-3.9,8.8-8.8V534.4c0-4.9-3.9-8.8-8.8-8.8h-264\r c-4.9,0-8.8,3.9-8.8,8.8v114.4C45.6,653.6,49.5,657.6,54.4,657.6L54.4,657.6z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("polygon", {
      style: {
        fill: '#044B93'
      },
      points: "503.2,323.2 520.8,323.2 520.8,340.8 503.2,340.8 \t"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("polygon", {
      style: {
        fill: '#044B93'
      },
      points: "503.2,358.4 520.8,358.4 520.8,376 503.2,376 \t"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("polygon", {
      style: {
        fill: '#044B93'
      },
      points: "503.2,393.6 520.8,393.6 520.8,411.2 503.2,411.2 \t"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./src/templates/Contact/OfferForm/Icons/Elevator.tsx":
/*!************************************************************!*\
  !*** ./src/templates/Contact/OfferForm/Icons/Elevator.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Elevator": () => (/* binding */ Elevator)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\OfferForm\\Icons\\Elevator.tsx";


const Elevator = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  viewBox: "-73 181.164 463.937 599.97",
  xmlSpace: "preserve",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
    style: {
      display: 'none'
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
      style: {
        display: 'inline'
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#779CC1'
        },
        d: "M315,768.688c-3.863,5.312-16.333,5.285-16.333,5.285H198.508v-19.842h99.579V562.552h19.842\r V754.73C317.929,754.73,319,763.188,315,768.688z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        display: 'inline',
        fill: '#779CC1'
      },
      d: "M343.314,401.906l-28.1-24l-149.7-127.9c-3.7-3.2-9.2-3.2-13,0l-149.7,127.9\r l-28.1,24c-4.2,3.6-4.7,9.9-1.1,14.1c3.5,4.2,9.7,4.7,13.8,1.2l0.1-0.1l12.5-10.8v187.5c0.1,5.6,4.7,10.2,10.3,10.3h297.3\r c5.6-0.1,10.2-4.6,10.3-10.3v-187.5l12.5,10.8c1.8,1.5,4,2.4,6.4,2.4c2.9,0,5.7-1.3,7.6-3.5\r C348.114,411.706,347.514,405.406,343.314,401.906z M20.014,584.006v-194.8l139-118.4l139,118.4v194.8h0"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        display: 'inline',
        fill: '#779CC1'
      },
      d: "M387.414,381.581l-85.6-73.1c0.1-0.5,0.2-1,0.3-1.6v-95.6\r c-0.1-5.7-4.6-10.3-10.3-10.5h-47.8c-5.5,0-10,4.9-10,10.5v39.6l-68.5-58.4c-3.7-3.2-9.2-3.2-13,0l-221.9,189\r c-4.3,3.5-4.8,9.8-1.3,14.1c3.5,4.3,9.8,4.8,14.1,1.3c0.1-0.1,0.1-0.1,0.2-0.2l215.4-183.4l77.1,65.7l46.1,39.2l92.3,78.6\r c4.2,3.6,10.5,3.1,14.1-1.1C392.114,391.481,391.614,385.181,387.414,381.581z M282.014,291.581l-28-23.6v-47.1h28V291.581z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
      style: {
        display: 'inline'
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: 'none',
          stroke: '#779CC1',
          strokeWidth: 19.8425,
          strokeMiterlimit: 10
        },
        d: "M307.99,757.065c0,3.85-3.15,7-7,7H16.959\r c-3.85,0-7-3.15-7-7v-156c0-3.85,3.15-7,7-7H300.99c3.85,0,7,3.15,7,7V757.065z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("polyline", {
      style: {
        display: 'inline',
        fill: 'none',
        stroke: '#779CC1',
        strokeWidth: 19.8425,
        strokeMiterlimit: 10
      },
      points: "9,633.065 \r 73.556,633.065 73.556,665.565 134.79,665.565 134.79,695.065 200.771,695.065 200.771,724.065 261.634,724.065 261.634,759.565 \t\r "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        display: 'inline',
        fill: 'none',
        stroke: '#044B93',
        strokeWidth: 19.8425,
        strokeMiterlimit: 10
      },
      d: "M123.002,491.481h-58\r c-6.6,0-12,5.4-12,12v37.96c0,6.6,5.4,12,12,12h58c6.6,0,12-5.4,12-12v-37.96C135.002,496.881,129.602,491.481,123.002,491.481z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        display: 'inline',
        fill: 'none',
        stroke: '#044B93',
        strokeWidth: 19.8425,
        strokeMiterlimit: 10
      },
      d: "M254.16,491.529h-58\r c-6.6,0-12,5.4-12,12v37.96c0,6.6,5.4,12,12,12h58c6.6,0,12-5.4,12-12v-37.96C266.16,496.929,260.76,491.529,254.16,491.529z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        display: 'inline',
        fill: 'none',
        stroke: '#044B93',
        strokeWidth: 19.8425,
        strokeMiterlimit: 10
      },
      d: "M123,394.4H65\r c-6.6,0-12,5.4-12,12v37.96c0,6.6,5.4,12,12,12h58c6.6,0,12-5.4,12-12V406.4C135,399.8,129.6,394.4,123,394.4z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        display: 'inline',
        fill: 'none',
        stroke: '#044B93',
        strokeWidth: 19.8425,
        strokeMiterlimit: 10
      },
      d: "M254.158,394.448h-58\r c-6.6,0-12,5.4-12,12v37.96c0,6.6,5.4,12,12,12h58c6.6,0,12-5.4,12-12v-37.96C266.158,399.848,260.758,394.448,254.158,394.448z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
    id: "Layer_2",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#044B93'
        },
        d: "M381.424,237.904H-62.902c-5.574,0-10.098,4.524-10.098,10.098v444.325\r c0,5.574,4.524,10.099,10.098,10.099h80.786c5.574,0,10.099-4.524,10.099-10.099v-10.099h262.556v10.099\r c0,5.574,4.524,10.099,10.099,10.099h80.786c5.574,0,10.099-4.524,10.099-10.099V248.003\r C391.522,242.428,386.998,237.904,381.424,237.904z M149.163,662.033H27.983V359.084h121.18V662.033z M290.539,662.033h-121.18\r V359.084h121.18V662.033z M371.325,682.229h-60.59v-10.098V348.985c0-5.574-4.523-10.098-10.098-10.098H17.885\r c-5.574,0-10.098,4.523-10.098,10.098v323.146v10.098h-60.59V258.101h424.129V682.229z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("circle", {
        style: {
          fill: '#044B93'
        },
        cx: "341.03",
        cy: "449.969",
        r: "10.099"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("circle", {
        style: {
          fill: '#044B93'
        },
        cx: "341.03",
        cy: "490.362",
        r: "10.098"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#044B93'
        },
        d: "M85.624,315.742l13.047-13.067l13.048,13.067c1.979,1.959,4.564,2.949,7.15,2.949\r c2.585,0,5.17-0.99,7.15-2.949c3.938-3.938,3.938-10.341,0-14.279l-20.197-20.197c-3.938-3.938-10.34-3.938-14.278,0\r l-20.197,20.197c-3.938,3.938-3.938,10.341,0,14.279C75.283,319.68,81.686,319.68,85.624,315.742z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#044B93'
        },
        d: "M212.701,315.742c1.98,1.959,4.565,2.949,7.15,2.949c2.586,0,5.171-0.99,7.13-2.949l20.196-20.197\r c3.938-3.938,3.938-10.341,0-14.279c-3.938-3.938-10.34-3.938-14.278,0l-13.048,13.047l-13.067-13.047\r c-3.938-3.938-10.341-3.938-14.279,0c-3.938,3.938-3.938,10.341,0,14.279L212.701,315.742z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 103,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./src/templates/Contact/OfferForm/Icons/Furnish.tsx":
/*!***********************************************************!*\
  !*** ./src/templates/Contact/OfferForm/Icons/Furnish.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Furnish": () => (/* binding */ Furnish)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\OfferForm\\Icons\\Furnish.tsx";


const Furnish = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
  version: "1.1",
  id: "Layer_1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  viewBox: "47.1 82 529.9 620",
  xmlSpace: "preserve",
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
      x: "263.6",
      y: "480.2",
      style: {
        fill: '#044B93'
      },
      width: "19.4",
      height: "18.2"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
      x: "302.4",
      y: "480.2",
      style: {
        fill: '#044B93'
      },
      width: "19.4",
      height: "18.2"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
      x: "341.2",
      y: "480.2",
      style: {
        fill: '#044B93'
      },
      width: "19.4",
      height: "18.2"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M577.1,489.3L476.4,388.5V247.5H400v64.7l-87.9-87.9l-106,106C137.5,304.9,69.6,372.9,95,441.5l-47.8,47.8\r l51.6,51.6l29.7-29.7v97l47.9-47.9l47.9,47.9V483.9c51.8-33.5,51.2-112.3-1-145l88.9-88.9l239.3,239.3l-25.9,25.9L312.1,301.9\r L262,351.9l12.9,12.9l37.2-37.2L477.6,493v190.8H369.7V528.7H254.5v155.2H146.7V625h-18.2v77h367.3V511.2l29.7,29.7L577.1,489.3z\r M98.8,515.2l-25.9-25.9l30.7-30.7c6.5,10,15,18.7,25,25.3v1.6L98.8,515.2z M206.1,564.3l-29.7-29.7l-29.7,29.7v-71.2\r c18.3,6.9,41.1,6.9,59.4,0L206.1,564.3L206.1,564.3z M244.8,411.7c0,37.8-30.7,68.5-68.5,68.5c-90.7-3.4-90.7-133.5,0-137\r C214.1,343.2,244.8,373.9,244.8,411.7L244.8,411.7z M418.2,265.6h40v104.7l-40-40V265.6z M272.7,546.8h78.8v137h-78.8V546.8z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M128.5,411.7c0,26.4,21.5,47.9,47.9,47.9c63.4-2.4,63.4-93.4,0-95.8C150,363.8,128.5,385.3,128.5,411.7\r L128.5,411.7z M206.1,411.7c0,16.4-13.3,29.7-29.7,29.7c-39.3-1.5-39.3-57.9,0-59.4C192.7,382,206.1,395.3,206.1,411.7L206.1,411.7\r z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M303,198.4h18.2c0-27.1,22-49.1,49.1-49.1v-18.2c-27.1,0-49.1-22-49.1-49.1H303c0,27.1-22,49.1-49.1,49.1v18.2\r C281,149.3,303,171.3,303,198.4L303,198.4z M312.1,115.7c5.9,10.1,14.3,18.6,24.5,24.5c-10.1,5.9-18.6,14.3-24.5,24.5\r c-5.9-10.1-14.3-18.6-24.5-24.5C297.8,134.3,306.2,125.8,312.1,115.7L312.1,115.7z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M438.8,198.4H457c0-27.1,22-49.1,49.1-49.1v-18.2c-27.1,0-49.1-22-49.1-49.1h-18.2c0,27.1-22,49.1-49.1,49.1\r v18.2C416.8,149.3,438.8,171.3,438.8,198.4L438.8,198.4z M447.9,115.7c5.9,10.1,14.3,18.6,24.5,24.5c-10.1,5.9-18.6,14.3-24.5,24.5\r c-5.9-10.1-14.3-18.6-24.5-24.5C433.5,134.3,442,125.8,447.9,115.7L447.9,115.7z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M167.3,198.4h18.2c0-27.1,22-49.1,49.1-49.1v-18.2c-27.1,0-49.1-22-49.1-49.1h-18.2c0,27.1-22,49.1-49.1,49.1\r v18.2C145.2,149.3,167.3,171.3,167.3,198.4L167.3,198.4z M176.4,115.7c5.9,10.1,14.3,18.6,24.5,24.5c-10.1,5.9-18.6,14.3-24.5,24.5\r c-5.9-10.1-14.3-18.6-24.5-24.5C162,134.3,170.5,125.8,176.4,115.7L176.4,115.7z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./src/templates/Contact/OfferForm/Icons/Heating.tsx":
/*!***********************************************************!*\
  !*** ./src/templates/Contact/OfferForm/Icons/Heating.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Heating": () => (/* binding */ Heating)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\OfferForm\\Icons\\Heating.tsx";


const Heating = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  viewBox: "-72.333 168.73 463.937 471",
  xmlSpace: "preserve",
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M333.666,600.072c0,10.648-8.666,19.314-19.343,19.314c-10.648,0-19.314-8.666-19.314-19.314\r V348.728c0-10.656,8.666-19.336,19.314-19.336c10.677,0,19.343,8.68,19.343,19.336V600.072L333.666,600.072z M256.324,619.386\r c-10.648,0-19.314-8.666-19.314-19.314V348.728c0-10.656,8.666-19.336,19.314-19.336c10.677,0,19.343,8.68,19.343,19.336v251.343\r C275.667,610.72,267.001,619.386,256.324,619.386L256.324,619.386z M198.324,619.386c-10.649,0-19.314-8.666-19.314-19.314V348.728\r c0-10.656,8.666-19.336,19.314-19.336c10.677,0,19.343,8.68,19.343,19.336v251.343C217.667,610.72,209.001,619.386,198.324,619.386\r L198.324,619.386z M140.331,619.386c-10.655,0-19.329-8.666-19.329-19.314V348.728c0-10.656,8.673-19.336,19.329-19.336\r c10.669,0,19.336,8.68,19.336,19.336v251.343C159.667,610.72,151.001,619.386,140.331,619.386L140.331,619.386z M82.331,619.386\r c-10.655,0-19.329-8.666-19.329-19.314V348.728c0-10.656,8.673-19.336,19.329-19.336c10.669,0,19.336,8.68,19.336,19.336v251.343\r C101.666,610.72,93.001,619.386,82.331,619.386L82.331,619.386z M24.331,619.386c-10.655,0-19.329-8.666-19.329-19.314V406.729v-58\r c0-10.656,8.673-19.336,19.329-19.336c10.669,0,19.336,8.68,19.336,19.336v251.343C43.667,610.72,35,619.386,24.331,619.386\r L24.331,619.386z M-33.669,397.064v-38.672h19.336v38.672H-33.669L-33.669,397.064z M382.01,281.064\r c-5.352,0-9.686,4.326-9.686,9.664v77.335h-19.314v-19.336c0-21.318-17.36-38.664-38.686-38.664\r c-11.526,0-21.891,5.083-28.999,13.133c-7.08-8.049-17.445-13.133-29-13.133c-11.526,0-21.891,5.083-28.999,13.133\r c-7.08-8.049-17.445-13.133-29-13.133c-11.527,0-21.892,5.083-28.993,13.133c-7.087-8.049-17.453-13.133-29-13.133\r c-11.533,0-21.905,5.083-29,13.133c-7.087-8.049-17.453-13.133-29-13.133c-11.533,0-21.905,5.083-29,13.133\r c-7.087-8.049-17.453-13.133-29-13.133c-17.976,0-33.142,12.34-37.447,28.999h-30.216c-5.339,0-9.664,4.326-9.664,9.664v19.336\r h-9.672c-5.339,0-9.664,4.326-9.664,9.664s4.326,9.664,9.664,9.664h9.672v19.336c0,5.339,4.326,9.664,9.664,9.664h29v183.678\r c0,21.312,17.347,38.657,38.665,38.657c11.548,0,21.913-5.098,29-13.141c7.094,8.043,17.466,13.141,29,13.141\r c11.548,0,21.913-5.098,29-13.141c7.094,8.043,17.466,13.141,29,13.141c11.548,0,21.913-5.098,29-13.141\r c7.101,8.043,17.466,13.141,28.993,13.141c11.555,0,21.921-5.098,29-13.141c7.109,8.043,17.474,13.141,28.999,13.141\r c11.555,0,21.921-5.098,29-13.141c7.109,8.043,17.474,13.141,28.999,13.141c21.325,0,38.686-17.347,38.686-38.657V387.393h29\r c5.324,0,9.657-4.326,9.657-9.664v-87C391.667,285.39,387.334,281.064,382.01,281.064L382.01,281.064z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("defs", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
          x: "-72.333",
          y: "174.729",
          width: "464.002",
          height: "464",
          style: {
            overflow: 'visible'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#044B93',
          overflow: 'visible'
        },
        d: "M232.493,274.019c2.11,7.342,6.188,12.539,6.641,13.113v-0.007\r c1.784,2.195,4.489,3.604,7.533,3.604c5.339,0,9.657-4.326,9.657-9.664c0-2.301-0.793-4.411-2.124-6.067l0,0\r c-0.028-0.028-2.124-2.797-3.116-6.316c-1.189-4.113-0.453-7.109,2.436-10.019c7.845-7.88,10.45-18.111,7.306-28.83\r c-2.095-7.194-6.173-12.277-6.684-12.914c-0.028,0-0.028-0.007-0.028-0.007v-0.021v0.007c-1.784-2.138-4.446-3.505-7.449-3.505\r c-5.338,0-9.656,4.333-9.656,9.672c0,2.344,0.821,4.496,2.209,6.167l0,0c0.028,0.021,2.067,2.663,3.059,6.032\r c1.147,3.958,0.425,6.875-2.464,9.757C231.997,252.885,229.378,263.187,232.493,274.019L232.493,274.019z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#044B93',
          overflow: 'visible'
        },
        d: "M152.587,267.768c2.875,10.819,8.433,18.331,9.048,19.152l0.014-0.014\r c1.763,2.329,4.546,3.823,7.682,3.823c5.345,0,9.679-4.326,9.679-9.664c0-2.188-0.736-4.199-1.954-5.813l0,0\r c-0.043-0.056-4.071-5.536-5.919-12.97c-2.23-8.914-0.446-16.489,5.438-23.152c10.337-11.683,13.622-26.005,9.516-41.44\r c-2.889-10.819-8.439-18.331-9.063-19.152v0.014c-1.784-2.315-4.552-3.823-7.696-3.823c-5.341,0-9.666,4.326-9.666,9.664\r c0,2.188,0.73,4.199,1.954,5.813h-0.014c0.043,0.056,4.071,5.536,5.933,12.978c2.223,8.906,0.439,16.482-5.452,23.144\r C151.765,238.01,148.48,252.333,152.587,267.768L152.587,267.768z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M77.828,274.019c2.11,7.342,6.188,12.539,6.648,13.113v-0.007c1.777,2.195,4.481,3.604,7.526,3.604\r c5.339,0,9.664-4.326,9.664-9.664c0-2.301-0.807-4.411-2.145-6.067h0.007c-0.021-0.028-2.11-2.797-3.122-6.316\r c-1.183-4.113-0.453-7.109,2.442-10.019c7.852-7.88,10.443-18.111,7.306-28.83c-2.103-7.194-6.153-12.263-6.698-12.914\r c0,0,0-0.007-0.007-0.007l-0.007-0.021v0.007c-1.777-2.138-4.446-3.505-7.441-3.505c-5.339,0-9.672,4.333-9.672,9.672\r c0,2.344,0.836,4.496,2.223,6.167l0,0c0.021,0.021,2.06,2.663,3.044,6.032c1.161,3.958,0.425,6.875-2.45,9.757\r C77.318,252.885,74.712,263.187,77.828,274.019L77.828,274.019z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./src/templates/Contact/OfferForm/Icons/Help.tsx":
/*!********************************************************!*\
  !*** ./src/templates/Contact/OfferForm/Icons/Help.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Help": () => (/* binding */ Help)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\OfferForm\\Icons\\Help.tsx";


const Help = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  viewBox: "-49 141 512 512",
  xmlSpace: "preserve",
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
    style: {
      fill: '#004A93'
    },
    d: "M211,160C81.765,160-23,264.765-23,394S81.765,628,211,628s234-104.765,234-234S340.235,160,211,160z\r M232.047,481.916c0,1.786-0.627,3.305-1.873,4.551c-1.251,1.251-2.857,1.874-4.819,1.874h-25.966c-1.786,0-3.304-0.623-4.551-1.874\r c-1.25-1.246-1.874-2.765-1.874-4.551v-23.289c0-1.962,0.623-3.568,1.874-4.818c1.247-1.247,2.765-1.874,4.551-1.874h25.966\r c1.962,0,3.568,0.627,4.819,1.874c1.246,1.25,1.873,2.856,1.873,4.818V481.916z M278.625,348.339\r c-0.359,6.784-1.873,12.849-4.55,18.203c-2.678,5.354-5.981,10.306-9.905,14.856c-3.928,4.551-7.942,9.014-12.046,13.385\r c-4.107,4.375-7.722,8.792-10.842,13.251c-3.124,4.463-5.22,9.193-6.29,14.187c-0.36,1.606-0.628,3.171-0.804,4.685\r c-0.18,1.519-0.359,2.991-0.535,4.417c-0.715,2.142-1.606,3.794-2.677,4.952c-1.071,1.163-2.589,1.74-4.551,1.74h-26.233\r c-1.431,0-2.677-0.489-3.748-1.473c-1.071-0.979-1.606-2.275-1.606-3.881c0-1.427,0-2.853,0-4.283c0-1.427,0-2.853,0-4.283\r c0.711-6.96,2.631-13.159,5.756-18.604c3.12-5.441,6.78-10.44,10.975-14.991c4.191-4.551,8.387-8.875,12.582-12.983\r c4.191-4.103,7.763-8.165,10.708-12.18c2.944-4.016,4.685-8.165,5.22-12.448c0.535-5.174-0.494-9.545-3.079-13.117\r c-2.589-3.567-6.068-6.291-10.439-8.165c-4.375-1.874-8.968-2.811-13.786-2.811c-8.391,0-15.258,2.054-20.612,6.157\r c-5.354,4.107-9.014,10.708-10.975,19.809c-0.536,2.142-1.431,3.706-2.677,4.685c-1.25,0.983-2.944,1.473-5.086,1.473h-22.754\r c-1.606,0-2.991-0.577-4.149-1.74c-1.163-1.159-1.74-2.719-1.74-4.685c0.176-7.136,1.828-14.054,4.952-20.746\r c3.121-6.692,7.671-12.715,13.652-18.069c5.977-5.354,13.251-9.591,21.817-12.715c8.566-3.121,18.379-4.685,29.446-4.685\r c12.134,0,22.352,1.564,30.65,4.685c8.299,3.125,14.898,7.186,19.81,12.18c4.906,4.999,8.432,10.398,10.573,16.195\r C277.822,337.141,278.801,342.809,278.625,348.339z"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./src/templates/Contact/OfferForm/Icons/HouseOnGround.tsx":
/*!*****************************************************************!*\
  !*** ./src/templates/Contact/OfferForm/Icons/HouseOnGround.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HouseOnGround": () => (/* binding */ HouseOnGround)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\OfferForm\\Icons\\HouseOnGround.tsx";


const HouseOnGround = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  viewBox: "1711.687 183.09 409.427 428.137",
  xmlSpace: "preserve",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("defs", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
            x: "1711.687",
            y: "183.09",
            width: "409.427",
            height: "428.137",
            style: {
              overflow: 'visible'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
          style: {
            overflow: 'visible',
            fill: '#004A93'
          },
          d: "M2011.508,262.751l-21.976-18.522v-36.966h21.976V262.751\r L2011.508,262.751z M2094.23,333.387l-67.182-57.372c0.078-0.392,0.157-0.785,0.235-1.256v-75.031\r c-0.078-4.474-3.61-8.084-8.084-8.241h-37.515c-4.317,0-7.848,3.846-7.848,8.241v31.08l-53.762-45.835\r c-2.904-2.511-7.22-2.511-10.203,0l-174.156,148.335c-3.375,2.747-3.767,7.691-1.02,11.066c2.747,3.375,7.691,3.767,11.066,1.02\r c0.078-0.078,0.078-0.078,0.157-0.157l169.055-143.94l60.511,51.564l36.181,30.766l72.441,61.689\r c3.296,2.825,8.241,2.433,11.066-0.863C2097.918,341.157,2097.526,336.212,2094.23,333.387L2094.23,333.387z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#004A93'
        },
        d: "M2024.065,492.16h-62.002v-92.376c0-4.317-3.218-8.084-7.534-8.084h-79.112\r c-4.317,0-7.534,3.767-7.534,8.084v92.376h-62.003V339.273l109.093-92.925l109.093,92.925V492.16L2024.065,492.16L2024.065,492.16\r z M1946.366,492.16h-62.787v-84.763h62.787V492.16L1946.366,492.16z M2059.618,349.241l-22.054-18.836l-117.491-100.381\r c-2.904-2.512-7.22-2.512-10.203,0L1792.38,330.405l-22.054,18.836c-3.296,2.825-3.689,7.77-0.863,11.066\r c2.747,3.296,7.613,3.689,10.831,0.942l0.078-0.078l9.811-8.476v147.158c0.078,4.395,3.689,8.005,8.084,8.084h233.333\r c4.395-0.078,8.005-3.61,8.084-8.084V352.694l9.811,8.476c1.413,1.177,3.139,1.884,5.023,1.884c2.276,0,4.474-1.02,5.965-2.747\r C2063.385,356.932,2062.915,351.988,2059.618,349.241L2059.618,349.241z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
          style: {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            fill: '#004A93'
          },
          d: "M2113.265,533.115h-394.515\r c-3.885,0-7.064-3.179-7.064-7.064v-3.139c0-3.885,3.179-7.064,7.064-7.064h394.515c3.885,0,7.063,3.179,7.063,7.064v3.139\r C2120.329,529.936,2117.15,533.115,2113.265,533.115L2113.265,533.115z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
          style: {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            fill: '#004A93'
          },
          d: "M1779.715,594.683l-18.541-18.541l18.289-18.288\r c3.13-3.13,3.13-8.251,0-11.38l-2.529-2.53c-3.13-3.129-8.251-3.129-11.38,0l-18.289,18.289l-18.369-18.369\r c-3.13-3.129-8.251-3.129-11.38,0l-2.529,2.529c-3.13,3.13-3.13,8.251,0,11.381l18.369,18.368l-18.621,18.621\r c-3.13,3.13-3.13,8.251,0,11.381l2.529,2.529c3.13,3.13,8.251,3.13,11.38,0l18.621-18.621l18.541,18.541\r c3.13,3.129,8.251,3.129,11.38,0l2.529-2.529C1782.845,602.934,1782.845,597.813,1779.715,594.683L1779.715,594.683z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
          style: {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            fill: '#004A93'
          },
          d: "M1891.772,594.891l-18.541-18.541l18.289-18.288\r c3.129-3.13,3.129-8.251,0-11.381l-2.53-2.529c-3.129-3.13-8.25-3.13-11.38,0l-18.288,18.289l-18.369-18.369\r c-3.13-3.13-8.251-3.13-11.38,0l-2.53,2.529c-3.129,3.13-3.129,8.251,0,11.38l18.369,18.369l-18.621,18.621\r c-3.13,3.13-3.13,8.251,0,11.38l2.529,2.53c3.13,3.129,8.251,3.129,11.381,0l18.621-18.621l18.54,18.541\r c3.13,3.129,8.251,3.129,11.381,0l2.529-2.53C1894.902,603.142,1894.902,598.021,1891.772,594.891L1891.772,594.891z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
          style: {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            fill: '#004A93'
          },
          d: "M2005.75,594.865l-18.541-18.541l18.288-18.289\r c3.13-3.129,3.13-8.25,0-11.38l-2.529-2.529c-3.13-3.13-8.251-3.13-11.38,0l-18.289,18.288l-18.369-18.368\r c-3.129-3.13-8.25-3.13-11.38,0l-2.529,2.529c-3.13,3.13-3.13,8.251,0,11.38l18.369,18.369l-18.621,18.621\r c-3.13,3.13-3.13,8.251,0,11.38l2.529,2.529c3.129,3.13,8.251,3.13,11.38,0l18.621-18.621l18.541,18.541\r c3.13,3.13,8.251,3.13,11.38,0l2.53-2.529C2008.879,603.116,2008.879,597.995,2005.75,594.865L2005.75,594.865z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
          style: {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            fill: '#004A93'
          },
          d: "M2118.767,594.891l-18.541-18.541l18.288-18.288\r c3.13-3.13,3.13-8.251,0-11.381l-2.529-2.529c-3.13-3.13-8.251-3.13-11.38,0l-18.289,18.289l-18.369-18.369\r c-3.129-3.13-8.25-3.13-11.38,0l-2.529,2.529c-3.13,3.13-3.13,8.251,0,11.38l18.369,18.369l-18.621,18.621\r c-3.13,3.13-3.13,8.251,0,11.38l2.529,2.53c3.129,3.129,8.251,3.129,11.38,0l18.621-18.621l18.541,18.541\r c3.13,3.129,8.251,3.129,11.38,0l2.53-2.53C2121.896,603.142,2121.896,598.021,2118.767,594.891L2118.767,594.891z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./src/templates/Contact/OfferForm/Icons/HouseSemiDetached.tsx":
/*!*********************************************************************!*\
  !*** ./src/templates/Contact/OfferForm/Icons/HouseSemiDetached.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HouseSemiDetached": () => (/* binding */ HouseSemiDetached)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\OfferForm\\Icons\\HouseSemiDetached.tsx";


const HouseSemiDetached = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  viewBox: "2128.492 182.664 783.508 426.127",
  xmlSpace: "preserve",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
          style: {
            fill: '#779CC1'
          },
          d: "M2519.299,598.497h-100.19V469.486h-113.913v-82.347l65.878-65.878h148.225\r C2519.299,321.26,2517.842,597.04,2519.299,598.497z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
          style: {
            fill: '#004A93'
          },
          d: "M2908.374,379.781l-88.112-75.245c0.103-0.515,0.206-1.029,0.309-1.647v-98.405\r c-0.103-5.867-4.735-10.602-10.602-10.808h-49.203c-5.661,0-10.293,5.044-10.293,10.808v40.762l-70.51-60.114\r c-2.157-1.865-4.909-2.672-7.6-2.424h-304.065c-2.683-0.248-5.461,0.559-7.676,2.424l-228.411,194.546\r c-4.426,3.603-4.941,10.088-1.338,14.514c3.603,4.426,10.087,4.941,14.514,1.338c0.103-0.103,0.103-0.103,0.206-0.206\r l221.72-188.781l0.051-0.161h141.984v35.191h-142.035v0.175c-2.367,0.009-4.745,0.831-6.691,2.468L2206.53,375.869\r l-28.924,24.704c-4.323,3.706-4.838,10.19-1.132,14.514c3.603,4.323,9.985,4.838,14.205,1.235l0.103-0.103l12.867-11.117v193.002\r c0.103,5.764,4.838,10.499,10.602,10.602h295.097v0.084h21.273v-0.084h295.611c5.764-0.103,10.5-4.735,10.602-10.602V405.102\r l12.867,11.117c1.853,1.544,4.117,2.47,6.588,2.47c2.985,0,5.867-1.338,7.823-3.603c3.809-4.426,3.191-10.911-1.132-14.514\r l-28.925-24.704l-154.093-131.653c-1.429-1.235-6.628-2.643-6.628-2.643h-142.714v-35.191h142.602l0.051,0.161l79.362,67.628\r l47.453,40.35l95.008,80.906c4.323,3.706,10.808,3.191,14.514-1.132C2913.212,389.971,2912.697,383.486,2908.374,379.781z\r M2408.487,588.016h-82.347V476.848h82.347C2408.487,476.848,2408.487,588.016,2408.487,588.016z M2509.347,588.016h-80.273\r V466.863c0-5.661-4.22-10.602-9.882-10.602h-103.758c-5.661,0-9.882,4.941-9.882,10.602v121.154h-81.318V387.501l143.078-121.874\r h142.034C2509.347,265.627,2509.347,588.016,2509.347,588.016z M2714.446,588.016h-82.347V476.848h82.347V588.016z\r M2673.272,265.627l143.078,121.874v200.516h-81.318V466.863c0-5.661-4.22-10.602-9.882-10.602h-103.758\r c-5.661,0-9.882,4.941-9.882,10.602v121.154h-80.892v-322.39H2673.272z M2799.881,287.14l-28.822-24.292v-48.482h28.822V287.14z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
          style: {
            fill: '#779CC1'
          },
          d: "M2908.374,379.781l-88.112-75.245c0.103-0.515,0.206-1.029,0.309-1.647v-98.405\r c-0.103-5.867-4.735-10.602-10.602-10.808h-49.203c-5.661,0-10.293,5.044-10.293,10.808v40.762l-70.51-60.114\r c-2.157-1.865-4.909-2.672-7.6-2.424h-142.085v426.084h0.343v-0.084h295.611c5.764-0.103,10.5-4.735,10.602-10.602V405.103\r l12.867,11.117c1.853,1.544,4.117,2.47,6.588,2.47c2.985,0,5.867-1.338,7.823-3.603c3.809-4.426,3.191-10.911-1.132-14.514\r l-28.925-24.704l-154.093-131.653c-1.429-1.235-6.628-2.643-6.628-2.643h-142.714v-35.191h142.602l0.051,0.161l79.362,67.628\r l47.453,40.35l95.008,80.906c4.323,3.706,10.808,3.191,14.514-1.132C2913.212,389.971,2912.697,383.486,2908.374,379.781z\r M2714.446,588.016h-82.347V476.848h82.347V588.016z M2673.272,265.627l143.078,121.874v200.516h-81.318V466.863\r c0-5.661-4.22-10.602-9.882-10.602h-103.758c-5.661,0-9.882,4.941-9.882,10.602v121.154h-80.892v-322.39H2673.272z\r M2799.881,287.14l-28.822-24.292v-48.482h28.822V287.14z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./src/templates/Contact/OfferForm/Icons/HouseSingle.tsx":
/*!***************************************************************!*\
  !*** ./src/templates/Contact/OfferForm/Icons/HouseSingle.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HouseSingle": () => (/* binding */ HouseSingle)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\OfferForm\\Icons\\HouseSingle.tsx";


const HouseSingle = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  viewBox: "1192.416 183.09 481.299 429.389",
  xmlSpace: "preserve",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("defs", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
            x: "1192.416",
            y: "183.09",
            width: "481.299",
            height: "429.389",
            style: {
              overflow: 'visible'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
          style: {
            overflow: 'visible',
            fill: '#044B93'
          },
          d: "M1560.716,288.388l-29.048-24.483v-48.863h29.048V288.388\r L1560.716,288.388z M1670.06,381.756l-88.803-75.836c0.104-0.519,0.207-1.037,0.311-1.66v-99.178\r c-0.104-5.913-4.772-10.685-10.685-10.893h-49.589c-5.706,0-10.374,5.083-10.374,10.893v41.082l-71.063-60.585\r c-3.839-3.32-9.544-3.32-13.487,0l-230.204,196.073c-4.461,3.631-4.98,10.167-1.349,14.628c3.631,4.461,10.167,4.98,14.628,1.349\r c0.104-0.104,0.104-0.104,0.208-0.207l223.461-190.263l79.985,68.159l47.825,40.667l95.754,81.541\r c4.357,3.735,10.893,3.216,14.628-1.141C1674.936,392.027,1674.417,385.491,1670.06,381.756L1670.06,381.756z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#044B93'
        },
        d: "M1577.314,591.627h-81.956V469.522c0-5.706-4.254-10.685-9.959-10.685h-104.572\r c-5.706,0-9.959,4.98-9.959,10.685v122.105h-81.957v-202.09l144.202-122.831l144.202,122.831V591.627L1577.314,591.627\r L1577.314,591.627z M1474.61,591.627h-82.994V479.585h82.994V591.627L1474.61,591.627z M1624.31,402.712l-29.152-24.898\r l-155.302-132.686c-3.839-3.32-9.544-3.32-13.487,0l-155.302,132.686l-29.152,24.898c-4.357,3.735-4.876,10.271-1.141,14.628\r c3.631,4.357,10.063,4.876,14.316,1.245l0.104-0.104l12.968-11.204v194.517c0.104,5.81,4.876,10.582,10.685,10.685h308.426\r c5.809-0.104,10.582-4.772,10.685-10.685V407.277l12.968,11.204c1.867,1.556,4.15,2.49,6.639,2.49\r c3.009,0,5.913-1.349,7.885-3.631C1629.289,412.879,1628.667,406.343,1624.31,402.712L1624.31,402.712z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("defs", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
            x: "751.075",
            y: "182.14",
            width: "462.925",
            height: "429.753",
            style: {
              overflow: 'visible'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
          style: {
            overflow: 'visible'
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("defs", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
              x: "751.075",
              y: "182.14",
              width: "462.925",
              height: "429.753",
              style: {
                overflow: 'visible'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
          style: {
            overflow: 'visible'
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("defs", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
              x: "751.075",
              y: "182.14",
              width: "462.925",
              height: "429.753",
              style: {
                overflow: 'visible'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./src/templates/Contact/OfferForm/Icons/HouseTripleLeftSelected.tsx":
/*!***************************************************************************!*\
  !*** ./src/templates/Contact/OfferForm/Icons/HouseTripleLeftSelected.tsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HouseTripleLeftSelected": () => (/* binding */ HouseTripleLeftSelected)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\OfferForm\\Icons\\HouseTripleLeftSelected.tsx";


const HouseTripleLeftSelected = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  viewBox: "2925 181.09 1091 430.457",
  xmlSpace: "preserve",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#779CC1'
        },
        d: "M3319.715,601.146h-101.191V470.846h-115.053v-83.171l66.537-66.537h149.708\r C3319.715,321.138,3318.244,599.674,3319.715,601.146z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#779CC1'
        },
        d: "M4012.338,380.242l-88.993-75.997c0.104-0.52,0.208-1.04,0.312-1.663v-99.389\r c-0.104-5.926-4.782-10.708-10.708-10.916h-49.695c-5.718,0-10.396,5.094-10.396,10.916v41.17l-71.215-60.715\r c-2.179-1.884-4.958-2.699-7.676-2.448h-143.507v0.003h-154.483c-2.71-0.251-147.071-0.003-147.071-0.003l-0.193,430.263h298.048\r l-8.323,0.085h19.754v-0.088h291.183c5.822-0.104,10.604-4.782,10.708-10.708V405.818l12.996,11.228\r c1.871,1.559,4.158,2.495,6.654,2.495c3.015,0,5.926-1.352,7.901-3.639c3.846-4.47,3.223-11.02-1.144-14.659l-29.214-24.951\r l-155.634-132.969c-1.443-1.248-6.694-2.67-6.694-2.67h-136.757V205.11h136.642l0.051,0.162l80.156,68.304l47.927,40.754\r l95.958,81.715c4.366,3.743,10.916,3.223,14.659-1.144C4017.224,390.535,4016.704,383.985,4012.338,380.242z M3516.568,590.564\r h-83.171V478.283h83.171V590.564z M3618.437,590.564h-81.076V468.199c0-5.718-4.262-10.708-9.98-10.708h-104.795\r c-5.718,0-9.98,4.99-9.98,10.708v122.365h-82.131l-0.534-325.74l145.044,0.126h143.454V590.564L3618.437,590.564z\r M3618.437,240.656l-288.758-0.003l-0.26-35.608l289.018,0.069V240.656z M3816.47,590.561h-83.171V478.28h83.171V590.561z\r M3774.885,264.947l144.51,123.093v202.521h-82.131V468.196c0-5.718-4.262-10.708-9.98-10.708h-104.795\r c-5.718,0-9.98,4.99-9.98,10.708v122.365h-74.315V264.947H3774.885z M3902.76,286.675l-29.11-24.535v-48.967h29.11V286.675z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#044B93'
        },
        d: "M3207.797,590.561h-83.171V478.28h83.171V590.561z M3228.589,590.561V468.196\r c0-5.718-4.263-10.708-9.981-10.708h-104.795c-5.718,0-9.981,4.99-9.981,10.708v122.365h-82.131V388.04l144.509-123.093h143.454\r v325.614H3228.589L3228.589,590.561z M3329.947,611.543V181.199h-162.741c-2.71-0.251-5.515,0.565-7.753,2.448l-230.695,196.491\r c-4.47,3.639-4.99,10.188-1.352,14.659c3.639,4.47,10.188,4.99,14.659,1.352c0.104-0.104,0.104-0.104,0.208-0.208l223.938-190.669\r l0.051-0.162h143.404v35.543h-143.454v0.177c-2.391,0.009-4.793,0.839-6.758,2.493L3003.82,376.292l-29.214,24.951\r c-4.366,3.743-4.886,10.292-1.144,14.659c3.639,4.366,10.084,4.886,14.347,1.248l0.104-0.104l12.995-11.228v194.932\r c0.104,5.822,4.886,10.604,10.708,10.708h298.048v0.085H3329.947z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./src/templates/Contact/OfferForm/Icons/HouseTripleMiddle.tsx":
/*!*********************************************************************!*\
  !*** ./src/templates/Contact/OfferForm/Icons/HouseTripleMiddle.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HouseTripleMiddle": () => (/* binding */ HouseTripleMiddle)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\OfferForm\\Icons\\HouseTripleMiddle.tsx";


const HouseTripleMiddle = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  viewBox: "4027.009 183.091 1086 428.484",
  xmlSpace: "preserve",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#779CC1'
        },
        d: "M4308.509,590.686h-82.79V478.92h82.79V590.686z M4329.207,590.686V468.881\r c0-5.692-4.243-10.659-9.935-10.659h-104.315c-5.692,0-9.935,4.967-9.935,10.659v121.804h-81.755V389.093l143.847-122.529h142.797\r v324.122H4329.207L4329.207,590.686z M4430.1,611.572V183.2h-161.996c-2.698-0.249-5.49,0.562-7.717,2.437l-229.638,195.591\r c-4.45,3.622-4.968,10.142-1.345,14.592c3.622,4.45,10.142,4.967,14.592,1.345c0.104-0.103,0.104-0.103,0.207-0.207\r l222.911-189.795l0.051-0.161h142.747v35.38h-142.797v0.176c-2.38,0.009-4.771,0.835-6.727,2.482l-154.92,132.36l-29.08,24.837\r c-4.346,3.726-4.864,10.245-1.138,14.592c3.622,4.346,10.038,4.864,14.281,1.242l0.104-0.103l12.936-11.177v194.038\r c0.104,5.795,4.864,10.556,10.659,10.659h296.682v0.085H4430.1z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#779CC1'
        },
        d: "M5109.363,381.331l-88.585-75.649c0.104-0.517,0.207-1.035,0.311-1.656v-98.934\r c-0.104-5.899-4.76-10.659-10.659-10.866h-49.467c-5.692,0-10.349,5.071-10.349,10.866v40.981l-70.889-60.437\r c-2.169-1.875-4.935-2.687-7.64-2.437h-135.499v428.376h0.345v-0.088h289.849c5.795-0.104,10.555-4.76,10.659-10.659V406.79\r l12.936,11.177c1.863,1.552,4.14,2.484,6.624,2.484c3.001,0,5.898-1.345,7.865-3.622c3.829-4.45,3.208-10.97-1.138-14.592\r l-29.08-24.837l-154.92-132.36c-1.437-1.242-6.664-2.658-6.664-2.658h-136.129v-35.38h136.016l0.051,0.161l79.789,67.991\r l47.708,40.567l95.519,81.341c4.346,3.726,10.866,3.208,14.591-1.138C5114.227,391.576,5113.71,385.057,5109.363,381.331z\r M4914.394,590.686h-82.79V478.92h82.79V590.686z M4872.999,266.564l143.847,122.529v201.593h-81.755V468.881\r c0-5.692-4.243-10.659-9.935-10.659h-104.315c-5.691,0-9.935,4.967-9.935,10.659v121.804h-73.975V266.564H4872.999z\r M5000.288,288.193l-28.976-24.423v-48.742h28.976V288.193z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("polygon", {
        style: {
          fill: '#779CC1'
        },
        points: "4421.296,369.412 4418.191,600.188 4514.955,601.165 4521.681,601.233 4526.594,467.207 \r 4620.25,468.501 4624.909,602.276 4628.531,602.313 4725.548,603.293 4726.583,376.656 4429.575,376.656 \t\t"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#044B93'
        },
        d: "M4736.586,611.575V183.2h-7.351v0.003H4575.46c-2.698-0.249-165.04-0.003-165.04-0.003\r l-0.192,428.291h315.325l-8.285,0.085h19.318V611.575z M4615.866,590.689h-82.79V478.923h82.79V590.689z M4717.268,590.689\r h-80.705V468.884c0-5.692-4.243-10.659-9.935-10.659h-104.315c-5.692,0-9.935,4.967-9.935,10.659v121.804h-81.755l-0.532-324.247\r l144.379,0.125h142.797V590.689L4717.268,590.689z M4717.268,242.384l-287.435-0.003l-0.259-35.444l287.693,0.068V242.384z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./src/templates/Contact/OfferForm/Icons/HouseWithBasement.tsx":
/*!*********************************************************************!*\
  !*** ./src/templates/Contact/OfferForm/Icons/HouseWithBasement.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HouseWithBasement": () => (/* binding */ HouseWithBasement)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\OfferForm\\Icons\\HouseWithBasement.tsx";


const HouseWithBasement = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  viewBox: "-73 180.063 463.937 600",
  xmlSpace: "preserve",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#779CC1'
      },
      d: "M315,768.688c-3.863,5.312-16.333,5.285-16.333,5.285H198.508v-19.842h99.579V562.552h19.842V754.73\r C317.929,754.73,319,763.188,315,768.688z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
    style: {
      fill: '#779CC1'
    },
    d: "M343.314,401.906l-28.1-24l-149.7-127.9c-3.7-3.2-9.2-3.2-13,0l-149.7,127.9l-28.1,24\r c-4.2,3.6-4.7,9.9-1.1,14.1c3.5,4.2,9.7,4.7,13.8,1.2l0.1-0.1l12.5-10.8v187.5c0.1,5.6,4.7,10.2,10.3,10.3h297.3\r c5.6-0.1,10.2-4.6,10.3-10.3v-187.5l12.5,10.8c1.8,1.5,4,2.4,6.4,2.4c2.9,0,5.7-1.3,7.6-3.5\r C348.114,411.706,347.514,405.406,343.314,401.906z M199.014,584.006h-80v-108h80V584.006z M298.014,584.006h-79v-117.7\r c0-5.5-4.1-10.3-9.6-10.3h-100.8c-5.5,0-9.6,4.8-9.6,10.3v117.7h-79v-194.8l139-118.4l139,118.4L298.014,584.006L298.014,584.006z"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
    style: {
      fill: '#779CC1'
    },
    d: "M387.414,381.581l-85.6-73.1c0.1-0.5,0.2-1,0.3-1.6v-95.6c-0.1-5.7-4.6-10.3-10.3-10.5h-47.8\r c-5.5,0-10,4.9-10,10.5v39.6l-68.5-58.4c-3.7-3.2-9.2-3.2-13,0l-221.9,189c-4.3,3.5-4.8,9.8-1.3,14.1s9.8,4.8,14.1,1.3\r c0.1-0.1,0.1-0.1,0.2-0.2l215.4-183.4l77.1,65.7l46.1,39.2l92.3,78.6c4.2,3.6,10.5,3.1,14.1-1.1\r C392.114,391.481,391.614,385.181,387.414,381.581z M282.014,291.581l-28-23.6v-47.1h28V291.581z"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: 'none',
        stroke: '#044B93',
        strokeWidth: 19.8425,
        strokeMiterlimit: 10
      },
      d: "M309,757.065c0,3.85-3.15,7-7,7H16.642\r c-3.85,0-7-3.15-7-7v-156c0-3.85,3.15-7,7-7H302c3.85,0,7,3.15,7,7V757.065z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("polyline", {
    style: {
      fill: 'none',
      stroke: '#044B93',
      strokeWidth: 19.8425,
      strokeMiterlimit: 10
    },
    points: "9,633.065 74.103,633.065 \r 74.103,665.565 135.856,665.565 135.856,695.065 202.395,695.065 202.395,724.065 263.773,724.065 263.773,759.565 "
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./src/templates/Contact/OfferForm/Icons/HouseWithFloors.tsx":
/*!*******************************************************************!*\
  !*** ./src/templates/Contact/OfferForm/Icons/HouseWithFloors.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HouseWithFloors": () => (/* binding */ HouseWithFloors)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\OfferForm\\Icons\\HouseWithFloors.tsx";


const HouseWithFloors = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  viewBox: "-73 181.164 463.937 599.97",
  xmlSpace: "preserve",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#779CC1'
      },
      d: "M315,768.688c-3.863,5.312-16.333,5.285-16.333,5.285H198.508v-19.842h99.579V562.552h19.842V754.73\r C317.929,754.73,319,763.188,315,768.688z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
    style: {
      fill: '#779CC1'
    },
    d: "M343.314,401.906l-28.1-24l-149.7-127.9c-3.7-3.2-9.2-3.2-13,0l-149.7,127.9l-28.1,24\r c-4.2,3.6-4.7,9.9-1.1,14.1c3.5,4.2,9.7,4.7,13.8,1.2l0.1-0.1l12.5-10.8v187.5c0.1,5.6,4.7,10.2,10.3,10.3h297.3\r c5.6-0.1,10.2-4.6,10.3-10.3v-187.5l12.5,10.8c1.8,1.5,4,2.4,6.4,2.4c2.9,0,5.7-1.3,7.6-3.5\r C348.114,411.706,347.514,405.406,343.314,401.906z M20.014,584.006v-194.8l139-118.4l139,118.4v194.8h0"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
    style: {
      fill: '#779CC1'
    },
    d: "M387.414,381.581l-85.6-73.1c0.1-0.5,0.2-1,0.3-1.6v-95.6c-0.1-5.7-4.6-10.3-10.3-10.5h-47.8\r c-5.5,0-10,4.9-10,10.5v39.6l-68.5-58.4c-3.7-3.2-9.2-3.2-13,0l-221.9,189c-4.3,3.5-4.8,9.8-1.3,14.1c3.5,4.3,9.8,4.8,14.1,1.3\r c0.1-0.1,0.1-0.1,0.2-0.2l215.4-183.4l77.1,65.7l46.1,39.2l92.3,78.6c4.2,3.6,10.5,3.1,14.1-1.1\r C392.114,391.481,391.614,385.181,387.414,381.581z M282.014,291.581l-28-23.6v-47.1h28V291.581z"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: 'none',
        stroke: '#779CC1',
        strokeWidth: 19.8425,
        strokeMiterlimit: 10
      },
      d: "M307.99,757.065c0,3.85-3.15,7-7,7H16.959\r c-3.85,0-7-3.15-7-7v-156c0-3.85,3.15-7,7-7H300.99c3.85,0,7,3.15,7,7V757.065z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("polyline", {
    style: {
      fill: 'none',
      stroke: '#779CC1',
      strokeWidth: 19.8425,
      strokeMiterlimit: 10
    },
    points: "9,633.065 73.556,633.065 \r 73.556,665.565 134.79,665.565 134.79,695.065 200.771,695.065 200.771,724.065 261.634,724.065 261.634,759.565 "
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
    style: {
      fill: 'none',
      stroke: '#044B93',
      strokeWidth: 19.8425,
      strokeMiterlimit: 10
    },
    d: "M123.002,491.481h-58c-6.6,0-12,5.4-12,12\r v37.96c0,6.6,5.4,12,12,12h58c6.6,0,12-5.4,12-12v-37.96C135.002,496.881,129.602,491.481,123.002,491.481z"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
    style: {
      fill: 'none',
      stroke: '#044B93',
      strokeWidth: 19.8425,
      strokeMiterlimit: 10
    },
    d: "M254.16,491.529h-58c-6.6,0-12,5.4-12,12\r v37.96c0,6.6,5.4,12,12,12h58c6.6,0,12-5.4,12-12v-37.96C266.16,496.929,260.76,491.529,254.16,491.529z"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
    style: {
      fill: 'none',
      stroke: '#044B93',
      strokeWidth: 19.8425,
      strokeMiterlimit: 10
    },
    d: "M123,394.4H65c-6.6,0-12,5.4-12,12v37.96\r c0,6.6,5.4,12,12,12h58c6.6,0,12-5.4,12-12V406.4C135,399.8,129.6,394.4,123,394.4z"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
    style: {
      fill: 'none',
      stroke: '#044B93',
      strokeWidth: 19.8425,
      strokeMiterlimit: 10
    },
    d: "M254.158,394.448h-58c-6.6,0-12,5.4-12,12\r v37.96c0,6.6,5.4,12,12,12h58c6.6,0,12-5.4,12-12v-37.96C266.158,399.848,260.758,394.448,254.158,394.448z"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./src/templates/Contact/OfferForm/Icons/HouseWithOneWindowSelected.tsx":
/*!******************************************************************************!*\
  !*** ./src/templates/Contact/OfferForm/Icons/HouseWithOneWindowSelected.tsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HouseWithOneWindowSelected": () => (/* binding */ HouseWithOneWindowSelected)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\OfferForm\\Icons\\HouseWithOneWindowSelected.tsx";


const HouseWithOneWindowSelected = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  viewBox: "-73 181.164 463.937 599.97",
  xmlSpace: "preserve",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#779CC1'
      },
      d: "M315,768.688c-3.863,5.312-16.333,5.285-16.333,5.285H198.508v-19.842h99.579V562.552h19.842V754.73\r C317.929,754.73,319,763.188,315,768.688z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
    style: {
      fill: '#779CC1'
    },
    d: "M343.314,401.906l-28.1-24l-149.7-127.9c-3.7-3.2-9.2-3.2-13,0l-149.7,127.9l-28.1,24\r c-4.2,3.6-4.7,9.9-1.1,14.1c3.5,4.2,9.7,4.7,13.8,1.2l0.1-0.1l12.5-10.8v187.5c0.1,5.6,4.7,10.2,10.3,10.3h297.3\r c5.6-0.1,10.2-4.6,10.3-10.3v-187.5l12.5,10.8c1.8,1.5,4,2.4,6.4,2.4c2.9,0,5.7-1.3,7.6-3.5\r C348.114,411.706,347.514,405.406,343.314,401.906z M20.014,584.006v-194.8l139-118.4l139,118.4v194.8h0"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
    style: {
      fill: '#779CC1'
    },
    d: "M387.414,381.581l-85.6-73.1c0.1-0.5,0.2-1,0.3-1.6v-95.6c-0.1-5.7-4.6-10.3-10.3-10.5h-47.8\r c-5.5,0-10,4.9-10,10.5v39.6l-68.5-58.4c-3.7-3.2-9.2-3.2-13,0l-221.9,189c-4.3,3.5-4.8,9.8-1.3,14.1c3.5,4.3,9.8,4.8,14.1,1.3\r c0.1-0.1,0.1-0.1,0.2-0.2l215.4-183.4l77.1,65.7l46.1,39.2l92.3,78.6c4.2,3.6,10.5,3.1,14.1-1.1\r C392.114,391.481,391.614,385.181,387.414,381.581z M282.014,291.581l-28-23.6v-47.1h28V291.581z"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: 'none',
        stroke: '#779CC1',
        strokeWidth: 19.8425,
        strokeMiterlimit: 10
      },
      d: "M307.99,757.065c0,3.85-3.15,7-7,7H16.959\r c-3.85,0-7-3.15-7-7v-156c0-3.85,3.15-7,7-7H300.99c3.85,0,7,3.15,7,7V757.065z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("polyline", {
    style: {
      fill: 'none',
      stroke: '#779CC1',
      strokeWidth: 19.8425,
      strokeMiterlimit: 10
    },
    points: "9,633.065 73.556,633.065 \r 73.556,665.565 134.79,665.565 134.79,695.065 200.771,695.065 200.771,724.065 261.634,724.065 261.634,759.565 "
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
    style: {
      fill: 'none',
      stroke: '#044B93',
      strokeWidth: 19.8425,
      strokeMiterlimit: 10
    },
    d: "M123.002,491.481h-58c-6.6,0-12,5.4-12,12\r v37.96c0,6.6,5.4,12,12,12h58c6.6,0,12-5.4,12-12v-37.96C135.002,496.881,129.602,491.481,123.002,491.481z"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
    style: {
      fill: 'none',
      stroke: '#779CC1',
      strokeWidth: 19.8425,
      strokeMiterlimit: 10
    },
    d: "M254.16,491.529h-58c-6.6,0-12,5.4-12,12\r v37.96c0,6.6,5.4,12,12,12h58c6.6,0,12-5.4,12-12v-37.96C266.16,496.929,260.76,491.529,254.16,491.529z"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
    style: {
      fill: 'none',
      stroke: '#779CC1',
      strokeWidth: 19.8425,
      strokeMiterlimit: 10
    },
    d: "M123,394.4H65c-6.6,0-12,5.4-12,12v37.96\r c0,6.6,5.4,12,12,12h58c6.6,0,12-5.4,12-12V406.4C135,399.8,129.6,394.4,123,394.4z"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
    style: {
      fill: 'none',
      stroke: '#779CC1',
      strokeWidth: 19.8425,
      strokeMiterlimit: 10
    },
    d: "M254.158,394.448h-58c-6.6,0-12,5.4-12,12\r v37.96c0,6.6,5.4,12,12,12h58c6.6,0,12-5.4,12-12v-37.96C266.158,399.848,260.758,394.448,254.158,394.448z"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./src/templates/Contact/OfferForm/Icons/HouseWithRoof.tsx":
/*!*****************************************************************!*\
  !*** ./src/templates/Contact/OfferForm/Icons/HouseWithRoof.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HouseWithRoof": () => (/* binding */ HouseWithRoof)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\OfferForm\\Icons\\HouseWithRoof.tsx";


const HouseWithRoof = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  viewBox: "-73 181.164 463.937 430.231",
  xmlSpace: "preserve",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#779CC1'
      },
      d: "M343.314,401.906l-28.1-24l-149.7-127.9c-3.7-3.2-9.2-3.2-13,0l-149.7,127.9l-28.1,24\r c-4.2,3.6-4.7,9.9-1.1,14.1c3.5,4.2,9.7,4.7,13.8,1.2l0.1-0.1l12.5-10.8v187.5c0.1,5.6,4.7,10.2,10.3,10.3h297.3\r c5.6-0.1,10.2-4.6,10.3-10.3v-187.5l12.5,10.8c1.8,1.5,4,2.4,6.4,2.4c2.9,0,5.7-1.3,7.6-3.5\r C348.114,411.706,347.514,405.406,343.314,401.906z M159.021,292.396c19.145,0,34.665,15.52,34.665,34.665\r c0,19.145-15.52,34.665-34.665,34.665c-19.145,0-34.665-15.52-34.665-34.665C124.356,307.916,139.876,292.396,159.021,292.396z\r M199.014,584.006h-80v-108h80V584.006z M219.014,584.006v-117.7c0-5.5-4.1-10.3-9.6-10.3h-100.8c-5.5,0-9.6,4.8-9.6,10.3v117.7\r h-79v-194.8h278v194.8H219.014z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M387.414,381.581l-85.6-73.1c0.1-0.5,0.2-1,0.3-1.6v-95.6c-0.1-5.7-4.6-10.3-10.3-10.5h-47.8\r c-5.5,0-10,4.9-10,10.5v39.6l-68.5-58.4c-3.7-3.2-9.2-3.2-13,0l-221.9,189c-4.3,3.5-4.8,9.8-1.3,14.1c3.5,4.3,9.8,4.8,14.1,1.3\r c0.1-0.1,0.1-0.1,0.2-0.2l215.4-183.4l77.1,65.7l46.1,39.2l92.3,78.6c4.2,3.6,10.5,3.1,14.1-1.1\r C392.114,391.481,391.614,385.181,387.414,381.581z M282.014,291.581l-28-23.6v-47.1h28V291.581z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
      x: "20",
      y: "386.561",
      style: {
        fill: '#044B93'
      },
      width: "278.031",
      height: "20.417"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#044B93'
        },
        d: "M159.021,373.899c-24.907,0-45.17-20.263-45.17-45.17c0-24.907,20.263-45.17,45.17-45.17\r c24.906,0,45.169,20.263,45.169,45.17C204.19,353.636,183.927,373.899,159.021,373.899z M159.021,299.183\r c-16.292,0-29.546,13.254-29.546,29.546s13.254,29.546,29.546,29.546c16.291,0,29.545-13.254,29.545-29.546\r S175.312,299.183,159.021,299.183z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
    style: {
      display: 'none'
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
      style: {
        display: 'inline'
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: 'none',
          stroke: '#044B93',
          strokeWidth: 19.8425,
          strokeMiterlimit: 10
        },
        d: "M209.333,757.065c0,3.85-3.15,7-7,7H16.642\r c-3.85,0-7-3.15-7-7v-156c0-3.85,3.15-7,7-7h185.691c3.85,0,7,3.15,7,7V757.065z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("polyline", {
      style: {
        display: 'inline',
        fill: 'none',
        stroke: '#044B93',
        strokeWidth: 19.8425,
        strokeMiterlimit: 10
      },
      points: "9,633.065 \r 52.255,633.065 52.255,665.565 93.284,665.565 93.284,695.065 137.493,695.065 137.493,724.065 178.273,724.065 178.273,759.565 \t\r "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
      style: {
        display: 'inline'
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#779CC1'
        },
        d: "M315,768.688c-3.863,5.312-16.333,5.285-16.333,5.285H198.508v-19.842h99.579V562.552h19.842\r V754.73C317.929,754.73,319,763.188,315,768.688z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./src/templates/Contact/OfferForm/Icons/LandArea.tsx":
/*!************************************************************!*\
  !*** ./src/templates/Contact/OfferForm/Icons/LandArea.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandArea": () => (/* binding */ LandArea)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\OfferForm\\Icons\\LandArea.tsx";


const LandArea = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
  version: "1.1",
  id: "Layer_1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  viewBox: "55 190 500 412",
  xmlSpace: "preserve",
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("defs", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
              id: "SVGID_1_",
              x: "55",
              y: "190",
              width: "500",
              height: "412"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("clipPath", {
            id: "SVGID_2_",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("use", {
              style: {
                overflow: 'visible'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
            style: {
              fill: '#044B93'
            },
            d: "M495.2,198c-0.9-4.7-5-8-9.8-8c-4.8,0-8.8,3.3-9.8,8L416,490.5c-0.6,2.9,0.2,6,2.1,8.3\r c1.9,2.3,4.7,3.7,7.7,3.7h51.5v33.1c-22.8-14.1-52.7-7.8-67.9,14.3c-17.3,2-31.4,14.6-35.3,31.6h-17.6V465.9h38.3\r c4,0,7.7-2.4,9.2-6.2c1.6-3.7,0.7-8-2.2-10.9l-45.6-45.6V311c0-5.5-4.5-10-10-10h-34.9c-5.5,0-10,4.5-10,10v37.3L237,283.9\r c-3.9-3.9-10.2-3.9-14.1,0L57.9,448.8c-2.9,2.9-3.7,7.2-2.2,10.9c1.5,3.7,5.2,6.2,9.2,6.2h38.3v115.5H69.6c-5.5,0-10,4.5-10,10\r c0,5.5,4.5,10,10,10h456.3c5.5,0,10-4.5,10-10c0-5.5-4.5-10-10-10h-28.5v-79H545c3,0,5.8-1.4,7.8-3.7c1.9-2.3,2.7-5.4,2.1-8.3\r L495.2,198z M321.4,321h14.9v15.9h-14.9V321z M321.4,356.9h14.9v26.3l-14.9-14.9V356.9z M258.8,581.4h-57.6v-96.7h57.6V581.4z\r M336.6,455.9v125.5h-57.8V474.7c0-5.5-4.5-10-10-10h-77.6c-5.5,0-10,4.5-10,10v106.7h-57.8V455.9c0-5.5-4.5-10-10-10H89.1\r l140.8-140.8l140.8,140.8h-24.2C341,445.9,336.6,450.4,336.6,455.9L336.6,455.9z M477.3,581.4h-82.1\r c3.5-7.2,10.8-11.8,18.8-11.8c0.3,0,0.5,0,0.8,0c3.9,0.2,7.5-1.9,9.3-5.3c5.2-9.8,15.3-16,26.4-16.2s21.4,5.6,27,15.2\r L477.3,581.4L477.3,581.4z M485.4,250.1l15.5,76.2h-31L485.4,250.1z M465.8,346.3H505l3.8,18.8H462L465.8,346.3z M457.9,385.1\r h55l3.8,18.8h-62.7L457.9,385.1z M450,423.9h70.8l3.8,18.8h-78.5L450,423.9z M438.1,482.5l4-19.8h86.6l4,19.8H438.1z"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("defs", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
              id: "SVGID_3_",
              x: "55",
              y: "190",
              width: "500",
              height: "412"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("clipPath", {
            id: "SVGID_4_",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("use", {
              style: {
                overflow: 'visible'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
            style: {
              fill: '#044B93'
            },
            d: "M495.2,198c-0.9-4.7-5-8-9.8-8c-4.8,0-8.8,3.3-9.8,8L416,490.5c-0.6,2.9,0.2,6,2.1,8.3\r c1.9,2.3,4.7,3.7,7.7,3.7h51.5v33.1c-22.8-14.1-52.7-7.8-67.9,14.3c-17.3,2-31.4,14.6-35.3,31.6h-17.6V465.9h38.3\r c4,0,7.7-2.4,9.2-6.2c1.6-3.7,0.7-8-2.2-10.9l-45.6-45.6V311c0-5.5-4.5-10-10-10h-34.9c-5.5,0-10,4.5-10,10v37.3L237,283.9\r c-3.9-3.9-10.2-3.9-14.1,0L57.9,448.8c-2.9,2.9-3.7,7.2-2.2,10.9c1.5,3.7,5.2,6.2,9.2,6.2h38.3v115.5H69.6c-5.5,0-10,4.5-10,10\r c0,5.5,4.5,10,10,10h456.3c5.5,0,10-4.5,10-10c0-5.5-4.5-10-10-10h-28.5v-79H545c3,0,5.8-1.4,7.8-3.7c1.9-2.3,2.7-5.4,2.1-8.3\r L495.2,198z M321.4,321h14.9v15.9h-14.9V321z M321.4,356.9h14.9v26.3l-14.9-14.9V356.9z M258.8,581.4h-57.6v-96.7h57.6V581.4z\r M336.6,455.9v125.5h-57.8V474.7c0-5.5-4.5-10-10-10h-77.6c-5.5,0-10,4.5-10,10v106.7h-57.8V455.9c0-5.5-4.5-10-10-10H89.1\r l140.8-140.8l140.8,140.8h-24.2C341,445.9,336.6,450.4,336.6,455.9L336.6,455.9z M477.3,581.4h-82.1\r c3.5-7.2,10.8-11.8,18.8-11.8c0.3,0,0.5,0,0.8,0c3.9,0.2,7.5-1.9,9.3-5.3c5.2-9.8,15.3-16,26.4-16.2s21.4,5.6,27,15.2\r L477.3,581.4L477.3,581.4z M485.4,250.1l15.5,76.2h-31L485.4,250.1z M465.8,346.3H505l3.8,18.8H462L465.8,346.3z M457.9,385.1\r h55l3.8,18.8h-62.7L457.9,385.1z M450,423.9h70.8l3.8,18.8h-78.5L450,423.9z M438.1,482.5l4-19.8h86.6l4,19.8H438.1z"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./src/templates/Contact/OfferForm/Icons/LivingAria.tsx":
/*!**************************************************************!*\
  !*** ./src/templates/Contact/OfferForm/Icons/LivingAria.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LivingAria": () => (/* binding */ LivingAria)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\OfferForm\\Icons\\LivingAria.tsx";


const LivingAria = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
  version: "1.1",
  id: "Layer_1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  viewBox: "118.9 201.9 373.8 388.3",
  xmlSpace: "preserve",
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M475.1,201.9H208.6c-4.3,0-7.8,3.5-7.8,7.8s3.5,7.8,7.8,7.8h266.5c1.1,0,2.1,0.9,2.1,2.1v90.6h-8.5v-76.4\r c0-4.3-3.5-7.8-7.8-7.8H150.6c-4.3,0-7.8,3.5-7.8,7.8v247.6c0,4.3,3.5,7.8,7.8,7.8h37.7v8.5h-51.8c-1.1,0-2.1-0.9-2.1-2.1V219.4\r c0-1.1,0.9-2.1,2.1-2.1h49.6c4.3,0,7.8-3.5,7.8-7.8s-3.5-7.8-7.8-7.8h-49.6c-9.7,0-17.6,7.9-17.6,17.6v275.9\r c0,9.7,7.9,17.6,17.6,17.6h202.1c1.1,0,2.1,0.9,2.1,2.1v57.5c0,9.7,7.9,17.6,17.6,17.6H402c3.6,0,6.6-2.5,7.5-5.8\r c0.9,3.3,3.9,5.8,7.5,5.8h58.1c9.7,0,17.6-7.9,17.6-17.6V219.4C492.7,209.8,484.8,201.9,475.1,201.9z M266.5,488.9v8.5h-62.7v-8.5\r H266.5z M191.5,250.8v-9.5h53.9v9.5H191.5z M427.7,245.6c0,4.3-3.5,7.7-7.7,7.7h-22.4c-4.3,0-7.7-3.5-7.7-7.7v-4.2h37.8\r L427.7,245.6L427.7,245.6z M247.4,414.1v31.4h-64.1v-31.4H247.4z M262.9,448.8v-38.1c0-6.7-5.5-12.2-12.2-12.2h-92.4v-9.7h98.8\r c0.4,3.9,3.7,7,7.7,7c4.3,0,7.8-3.5,7.8-7.8v-14.2c0-4.3-3.5-7.8-7.8-7.8c-4.1,0-7.5,3.2-7.7,7.2h-98.8v-132H176v92.4\r c0,6.7,5.5,12.2,12.2,12.2h60.6c6.7,0,12.2-5.5,12.2-12.2v-92.4h25.8v89.1c-3.9,0.4-7,3.7-7,7.7c0,4.3,3.5,7.8,7.8,7.8h14.2\r c4.3,0,7.8-3.5,7.8-7.8c0-4.1-3.2-7.5-7.2-7.7v-89.1h12.6v28.7c0,13.6,11.1,24.7,24.7,24.7s24.7-11.1,24.7-24.7v-28.7h10.2v4.2\r c0,12.8,10.4,23.2,23.2,23.2H420c12.8,0,23.2-10.4,23.2-23.2v-4.2h9.9v191.1h-21c-10.1,0-18.3,8.2-18.3,18.3v64.1\r c0,10.1,8.2,18.3,18.3,18.3h21v17.6h-73V515c0-22.9-18.6-41.6-41.6-41.6h-13.7v-76.3h64.7c0.1,4.2,3.5,7.6,7.7,7.6\r c4.3,0,7.8-3.5,7.8-7.8V381c0-4.3-3.5-7.8-7.8-7.8s-7.8,3.5-7.8,7.8v0.6h-72.4c-4.3,0-7.8,3.5-7.8,7.8v84.1H158.4V461h92.4\r C257.5,461,262.9,455.5,262.9,448.8z M429.4,514.8v-64.1c0-1.5,1.2-2.7,2.7-2.7h21v69.6h-21C430.6,517.6,429.4,516.3,429.4,514.8z\r M348.7,270.1c0,5.1-4.1,9.2-9.2,9.2s-9.2-4.1-9.2-9.2v-27.2h18.4V270.1z M191.5,330.4v-64.1h53.9v64.1H191.5z M158.4,445.5v-31.4\r h9.5v31.4H158.4z M468.7,388.2v-62.7h8.5v62.7H468.7z M409.5,580.4c-0.9-3.3-3.9-5.8-7.5-5.8h-43.8c-1.1,0-2.1-0.9-2.1-2.1V515\r c0-9.7-7.9-17.6-17.6-17.6H282v-8.5h56.6c14.4,0,26.1,11.7,26.1,26.1v43.4c0,4.3,3.5,7.8,7.8,7.8h88.5c4.3,0,7.8-3.5,7.8-7.8V403.8\r h8.5v168.8c0,1.1-0.9,2.1-2.1,2.1H417C413.4,574.6,410.4,577.1,409.5,580.4z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M410.8,344.5c12.2,0,22.2-10,22.2-22.2c0-12.2-10-22.2-22.2-22.2s-22.2,10-22.2,22.2\r C388.6,334.5,398.6,344.5,410.8,344.5z M404.1,322.3c0-3.7,3-6.7,6.7-6.7c3.7,0,6.7,3,6.7,6.7c0,3.7-3,6.7-6.7,6.7\r C407.1,329,404.1,326,404.1,322.3z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./src/templates/Contact/OfferForm/Icons/MonumentProtection.tsx":
/*!**********************************************************************!*\
  !*** ./src/templates/Contact/OfferForm/Icons/MonumentProtection.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonumentProtection": () => (/* binding */ MonumentProtection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\OfferForm\\Icons\\MonumentProtection.tsx";


const MonumentProtection = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  viewBox: "0 0 654.708 644.06",
  xmlSpace: "preserve",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#054B93'
      },
      d: "M645.365,364.035l-126.821-52.654c-3.175-1.321-6.747-1.321-9.921,0l-126.821,52.654\r c-4.833,2.005-7.98,6.72-7.98,11.95v64.011c0,88.136,53.27,167.416,134.872,200.722c3.134,1.28,6.646,1.28,9.78,0\r c81.599-33.306,134.872-112.586,134.872-200.722v-64.011C653.345,370.755,650.198,366.04,645.365,364.035L645.365,364.035z\r M627.463,439.996c0,74.925-43.999,143.897-113.88,174.685c-68.014-29.966-113.88-97.731-113.88-174.685v-55.37l113.88-47.282\r l113.88,47.282V439.996z M499.28,483.614l55.623-55.619c5.051-5.055,13.247-5.055,18.299,0c5.056,5.052,5.056,13.248,0,18.299\r l-64.772,64.772c-5.055,5.056-13.247,5.056-18.303,0l-36.163-36.163c-5.056-5.056-5.056-13.248,0-18.303\r c5.051-5.052,13.247-5.056,18.298,0L499.28,483.614z M499.28,483.614"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
          style: {
            fill: '#054B93'
          },
          d: "M244.486,139.156c0,23.832,19.32,43.152,43.159,43.152c23.832,0,43.152-19.32,43.152-43.152\r c0-23.838-19.32-43.159-43.152-43.159C263.82,96.025,244.513,115.332,244.486,139.156z M287.644,117.577\r c11.905,0.013,21.56,9.668,21.573,21.579c0,11.918-9.661,21.58-21.573,21.58c-11.918,0-21.579-9.661-21.579-21.58\r C266.065,127.238,275.726,117.577,287.644,117.577z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
          style: {
            fill: '#054B93'
          },
          d: "M572.148,172.394c-0.539-0.537-1.141-1.017-1.795-1.415L292.46,1.404\r c-3.059-1.872-6.913-1.872-9.972,0L4.597,170.979c-4.514,2.749-5.947,8.639-3.198,13.159c0.397,0.65,0.872,1.258,1.415,1.795\r l27.641,27.641l17.458,34.928v16.896c0.041,12.143,7.714,22.951,19.166,26.98v147.268c-11.452,4.037-19.125,14.839-19.166,26.986\r v11.422c-11.417,4.035-19.084,14.791-19.16,26.903v9.587C12.879,514.557,0.018,527.417,0,543.291v19.166\r c0,5.287,4.287,9.579,9.58,9.579h0.006h393.019c-4.742-6.371-8.975-12.781-12.75-19.166H19.166v-9.579\r c0.006-5.293,4.292-9.579,9.585-9.579H229.98c5.292,0,9.585-4.294,9.585-9.587s-4.293-9.579-9.585-9.579H47.918v-9.581\r c0.111-5.392,4.562-9.678,9.954-9.585h308.215c-1.746-6.77-3.074-13.198-4.074-19.166h-26.623v-9.579\r c0.006-5.293,4.287-9.581,9.58-9.587h14.683c-0.676-8.665-0.649-15.295-0.522-19.165h-4.58V294.146h38.331v48.845\r c5.975-2.271,12.457-4.737,19.167-7.293v-43.313c3.538-1.258,6.79-3.2,9.581-5.714c2.79,2.514,6.047,4.456,9.58,5.708v36.01\r c6.482-2.477,12.945-4.951,19.166-7.339v-26.904h38.331v12.039c5.219-2.067,8.819-3.537,10.129-4.158\r c2.566-1.216,5.753-1.294,9.038-0.77v-8.872c11.453-4.035,19.126-14.838,19.166-26.986v-16.896l17.458-34.928l27.641-27.641\r C575.879,182.196,575.885,176.137,572.148,172.394z M143.736,476.212H67.078v-9.579c0.006-5.293,4.293-9.581,9.585-9.587h57.493\r c5.292,0.006,9.579,4.294,9.579,9.587V476.212z M76.663,274.985c-5.292-0.006-9.579-4.293-9.579-9.587v-9.579h76.657v9.579\r c-0.006,5.294-4.292,9.581-9.585,9.587H76.663z M124.576,294.146v143.736H86.244V294.146H124.576z M143.742,439.647V292.385\r c3.538-1.258,6.79-3.2,9.58-5.714c2.791,2.514,6.043,4.456,9.581,5.708v147.268c-3.538,1.258-6.79,3.2-9.581,5.715\r C150.532,442.846,147.274,440.904,143.742,439.647z M239.566,476.212h-76.664v-9.579c0.006-5.293,4.292-9.581,9.585-9.587h57.493\r c5.292,0.006,9.58,4.294,9.585,9.587V476.212z M172.488,274.985c-5.293-0.006-9.58-4.293-9.585-9.587v-9.579h76.664v9.579\r c-0.006,5.294-4.293,9.581-9.585,9.587H172.488z M220.399,294.146v143.736h-38.331V294.146H220.399z M335.389,439.647\r c-11.453,4.037-19.13,14.839-19.167,26.986v9.579h-57.491v-9.579c-0.042-12.143-7.715-22.95-19.166-26.986V292.385\r c11.451-4.035,19.124-14.838,19.166-26.986v-9.579h57.491v9.579c0.036,12.143,7.714,22.951,19.167,26.98V439.647z\r M412.047,265.398c-0.006,5.294-4.293,9.581-9.585,9.587h-57.493c-5.293-0.006-9.58-4.293-9.58-9.587v-9.579h76.658V265.398z\r M507.871,265.398c-0.006,5.294-4.292,9.581-9.58,9.587h-57.499c-5.287-0.006-9.574-4.293-9.58-9.587v-9.579h76.658V265.398z\r M511.532,236.653H63.422l-9.585-19.166h467.276L511.532,236.653z M72.19,198.328L287.477,65.844l215.282,132.484H72.19z\r M535.196,195.776L292.501,46.426c-3.082-1.9-6.971-1.9-10.052,0L39.753,195.776l-14.785-14.785L287.477,20.804l262.503,160.188\r L535.196,195.776z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#054B93'
        },
        d: "M335.389,524.124c0,5.293,4.287,9.587,9.58,9.587h34.808c-3.023-6.513-5.612-12.925-7.829-19.166\r h-26.979C339.676,514.545,335.389,518.832,335.389,524.124z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./src/templates/Contact/OfferForm/Icons/ParkingSlots.tsx":
/*!****************************************************************!*\
  !*** ./src/templates/Contact/OfferForm/Icons/ParkingSlots.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParkingSlots": () => (/* binding */ ParkingSlots)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\OfferForm\\Icons\\ParkingSlots.tsx";


const ParkingSlots = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
  version: "1.1",
  id: "Layer_1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  viewBox: "21.6 152.1 573 447.7",
  xmlSpace: "preserve",
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M585.6,599.8h-555c-5,0-9-4-9-9s4-9,9-9h555c5,0,9,4,9,9S590.6,599.8,585.6,599.8L585.6,599.8z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M585.6,599.8c-4.9,0-9-4-9-9V313.2c0-5,4-9,9-9c5,0,9,4,9,9v277.6C594.6,595.8,590.6,599.8,585.6,599.8\r L585.6,599.8z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M406.6,599.8c-4.9,0-9-4-9-9V313.2c0-5,4-9,9-9c5,0,9,4,9,9v277.6C415.5,595.8,411.5,599.8,406.6,599.8\r L406.6,599.8z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M209.6,599.8c-5,0-9-4-9-9V313.2c0-5,4-9,9-9c4.9,0,9,4,9,9v277.6C218.6,595.8,214.6,599.8,209.6,599.8\r L209.6,599.8z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M30.6,599.8c-5,0-9-4-9-9V313.2c0-5,4-9,9-9c4.9,0,9,4,9,9v277.6C39.5,595.8,35.5,599.8,30.6,599.8L30.6,599.8\r z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M585.6,322.1h-17.9c-4.9,0-9-4-9-9c0-5,4-9,9-9h17.9c5,0,9,4,9,9C594.6,318.1,590.6,322.1,585.6,322.1\r L585.6,322.1z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M48.5,322.1H30.6c-4.9,0-9-4-9-9c0-5,4-9,9-9h17.9c4.9,0,9,4,9,9C57.4,318.1,53.4,322.1,48.5,322.1L48.5,322.1\r z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M424.5,322.1h-35.8c-4.9,0-9-4-9-9c0-5,4-9,9-9h35.8c4.9,0,9,4,9,9C433.4,318.1,429.4,322.1,424.5,322.1\r L424.5,322.1z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M227.5,322.1h-35.8c-4.9,0-9-4-9-9c0-5,4-9,9-9h35.8c4.9,0,9,4,9,9C236.5,318.1,232.5,322.1,227.5,322.1\r L227.5,322.1z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M442.4,528.1c-5,0-9-4-9-9V367.1c0-5,4-9,9-9c4.9,0,9,4,9,9v152.1C451.4,524.1,447.4,528.1,442.4,528.1\r L442.4,528.1z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M442.4,376c-5,0-9-4-9-9c0-14.8,12.1-26.9,26.9-26.9c4.9,0,9,4,9,9c0,5-4,9-9,9c-4.9,0-9,4-9,9\r C451.4,372,447.3,376,442.4,376L442.4,376z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M478.2,563.9c-12,0-23.2-4.7-31.7-13.1c-8.5-8.5-13.1-19.7-13.1-31.7c0-5,4-9,9-9c4.9,0,9,4,9,9\r c0,7.2,2.8,13.9,7.9,19c5.1,5.1,11.8,7.9,19,7.9c4.9,0,9,4,9,9C487.2,559.9,483.2,563.9,478.2,563.9L478.2,563.9z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M549.8,528.1c-4.9,0-9-4-9-9V367.1c0-5,4-9,9-9s9,4,9,9v152.1C558.8,524.1,554.8,528.1,549.8,528.1\r L549.8,528.1z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M549.8,376c-4.9,0-9-4-9-9c0-4.9-4-9-9-9c-4.9,0-9-4-9-9c0-5,4-9,9-9c14.8,0,26.9,12.1,26.9,26.9\r C558.8,372,554.8,376,549.8,376L549.8,376z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M514,563.9c-4.9,0-9-4-9-9c0-5,4-9,9-9c14.8,0,26.9-12.1,26.9-26.9c0-5,4-9,9-9s9,4,9,9\r C558.8,543.8,538.7,563.9,514,563.9L514,563.9z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M531.9,358.1h-71.6c-5,0-9-4-9-9c0-5,4-9,9-9h71.6c4.9,0,9,4,9,9C540.9,354.1,536.9,358.1,531.9,358.1\r L531.9,358.1z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M523.1,474.4c0,0-0.1,0-0.2,0h-53.7c-2.4,0-4.7-0.9-6.3-2.6c-1.7-1.7-2.6-4-2.6-6.3l0-80.5c0-5,4-9,9-9H523\r c4.9,0,9,4,9,9l0,78.7c0.1,0.6,0.2,1.2,0.2,1.8C532.1,470.4,528.1,474.4,523.1,474.4L523.1,474.4z M478.2,456.5H514l0-62.6h-35.8\r L478.2,456.5z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M531.9,501.3c-3.8,0-7.2-2.4-8.5-6.1l-9-26.9c-1.6-4.7,1-9.8,5.7-11.3c4.7-1.6,9.8,1,11.3,5.7l9,26.9\r c1.6,4.7-1,9.8-5.7,11.3C533.8,501.1,532.8,501.3,531.9,501.3L531.9,501.3z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M460.3,501.3c-0.9,0-1.9-0.2-2.8-0.5c-4.7-1.6-7.2-6.6-5.7-11.3l9-26.9c1.6-4.7,6.6-7.2,11.3-5.7\r c4.7,1.6,7.2,6.6,5.7,11.3l-9,26.9C467.5,498.9,464.1,501.3,460.3,501.3L460.3,501.3z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M496.1,510.2c-21.8,0-34.8-3-41-9.4c-3.5-3.6-3.8-7.4-3.8-8.8c0.2-4.8,4.1-8.7,8.9-8.7c0.1,0,0.2,0,0.3,0\r c3.5,0.1,6.5,2.3,7.9,5.3c1.8,1,8.6,3.6,27.6,3.6c19.1,0,25.8-2.7,27.6-3.6c1.4-3,4.4-5.2,7.9-5.3c0.1,0,0.2,0,0.3,0\r c4.8,0,8.8,3.8,8.9,8.7c0.1,1.4-0.2,5.2-3.8,8.8C530.9,507.2,517.9,510.2,496.1,510.2L496.1,510.2z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M514,563.9h-35.8c-5,0-9-4-9-9c0-5,4-9,9-9H514c5,0,9,4,9,9C523,559.9,519,563.9,514,563.9L514,563.9z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M558.8,474.4h-9c-4.9,0-9-4-9-9c0-4.9,4-9,9-9h9c4.9,0,9,4,9,9C567.7,470.4,563.7,474.4,558.8,474.4\r L558.8,474.4z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M442.4,474.4h-9c-5,0-9-4-9-9c0-4.9,4-9,9-9h9c4.9,0,9,4,9,9C451.4,470.4,447.3,474.4,442.4,474.4L442.4,474.4\r z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M469.3,393.9c-2.9,0-5.7-1.4-7.5-4l-20.6-30.8c-2.8-4.1-1.6-9.7,2.5-12.4c4.1-2.7,9.7-1.6,12.4,2.5l20.6,30.8\r c2.8,4.1,1.6,9.7-2.5,12.4C472.7,393.4,471,393.9,469.3,393.9L469.3,393.9z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M523,393.9c-1.7,0-3.4-0.5-5-1.5c-4.1-2.7-5.2-8.3-2.5-12.4l20.6-30.8c2.8-4.1,8.3-5.2,12.4-2.5\r c4.1,2.7,5.2,8.3,2.5,12.4l-20.6,30.8C528.7,392.5,525.8,393.9,523,393.9L523,393.9z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M254.4,340c-5,0-9-4-9-9V179c0-4.9,4-9,9-9c4.9,0,9,4,9,9V331C263.3,336,259.3,340,254.4,340L254.4,340z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M254.4,187.9c-4.9,0-9-4-9-9c0-14.8,12.1-26.8,26.9-26.8c4.9,0,9,4,9,9s-4,9-9,9c-4.9,0-9,4-9,8.9\r C263.3,183.9,259.3,187.9,254.4,187.9L254.4,187.9z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M290.2,375.8c-12,0-23.2-4.7-31.7-13.1c-8.5-8.5-13.1-19.7-13.1-31.7c0-4.9,4-9,9-9c4.9,0,9,4,9,9\r c0,7.2,2.8,13.9,7.9,19c5.1,5.1,11.8,7.9,19,7.9c4.9,0,9,4,9,9C299.1,371.8,295.1,375.8,290.2,375.8L290.2,375.8z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M361.8,340c-4.9,0-9-4-9-9V178.9c0-4.9,4-9,9-9c5,0,9,4,9,9V331C370.8,336,366.8,340,361.8,340L361.8,340z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M361.8,187.9c-4.9,0-9-4-9-9c0-4.9-4-8.9-9-8.9c-4.9,0-9-4-9-9s4-9,9-9c14.8,0,26.9,12,26.9,26.8\r C370.8,183.9,366.8,187.9,361.8,187.9L361.8,187.9z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M326,375.8c-4.9,0-9-4-9-9c0-4.9,4-9,9-9c14.8,0,26.9-12,26.9-26.9c0-4.9,4-9,9-9c5,0,9,4,9,9\r C370.8,355.7,350.7,375.8,326,375.8L326,375.8z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M343.9,170h-71.6c-5,0-9-4-9-9s4-9,9-9h71.6c5,0,9,4,9,9S348.8,170,343.9,170L343.9,170z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M281.2,286.3c-2.4,0-4.7-0.9-6.3-2.6c-1.7-1.7-2.6-4-2.6-6.3l0-80.5c0-4.9,4-9,9-9h53.7c4.9,0,9,4,9,9l0,80.5\r c0,4.9-4,9-9,9L281.2,286.3z M290.2,205.8l0,62.6l35.8,0l0-62.6L290.2,205.8L290.2,205.8z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M343.9,313.1c-3.7,0-7.2-2.4-8.5-6.1l-9-26.9c-1.6-4.7,1-9.8,5.7-11.3c4.7-1.6,9.8,1,11.3,5.7l9,26.9\r c1.6,4.7-1,9.8-5.7,11.3C345.8,313,344.8,313.1,343.9,313.1L343.9,313.1z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M272.3,313.1c-0.9,0-1.9-0.2-2.8-0.5c-4.7-1.6-7.2-6.6-5.7-11.3l9-26.8c1.6-4.7,6.6-7.2,11.3-5.7\r c4.7,1.6,7.2,6.6,5.7,11.3l-9,26.8C279.5,310.8,276,313.1,272.3,313.1L272.3,313.1z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M308.1,322.1c-21.8,0-34.8-3-41-9.4c-3.5-3.6-3.8-7.4-3.8-8.8c0.2-4.9,4.3-9,9.2-8.7c3.5,0.1,6.5,2.3,7.9,5.3\r c1.8,1,8.6,3.6,27.6,3.6c19.1,0,25.8-2.7,27.6-3.6c1.3-3,4.3-5.2,7.9-5.3c4.8-0.3,9.1,3.7,9.2,8.7c0,1.4-0.2,5.2-3.8,8.8\r C342.9,319.1,329.9,322.1,308.1,322.1L308.1,322.1z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M326,375.8h-35.8c-5,0-9-4-9-9c0-4.9,4-9,9-9H326c5,0,9,4,9,9C334.9,371.8,330.9,375.8,326,375.8L326,375.8z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M370.8,286.3h-9c-4.9,0-9-4-9-9c0-4.9,4-9,9-9h9c5,0,9,4,9,9C379.7,282.3,375.7,286.3,370.8,286.3L370.8,286.3\r z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M254.4,286.3h-9c-4.9,0-9-4-9-9c0-4.9,4-9,9-9h9c4.9,0,9,4,9,9C263.3,282.3,259.3,286.3,254.4,286.3\r L254.4,286.3z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M281.2,205.8c-2.9,0-5.7-1.4-7.5-4L253.2,171c-2.7-4.1-1.6-9.7,2.5-12.4c4.1-2.7,9.7-1.6,12.4,2.5l20.6,30.8\r c2.8,4.1,1.6,9.7-2.5,12.4C284.7,205.3,283,205.8,281.2,205.8L281.2,205.8z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M334.9,205.8c-1.7,0-3.4-0.5-5-1.5c-4.1-2.8-5.2-8.3-2.5-12.4l20.6-30.8c2.7-4.1,8.3-5.2,12.4-2.5\r c4.1,2.8,5.2,8.3,2.5,12.4l-20.6,30.8C340.7,204.4,337.8,205.8,334.9,205.8L334.9,205.8z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M66.4,528.1c-4.9,0-9-4-9-9V367.1c0-5,4-9,9-9c5,0,9,4,9,9v152.1C75.3,524.1,71.3,528.1,66.4,528.1L66.4,528.1\r z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M66.4,376c-5,0-9-4-9-9c0-14.8,12.1-26.9,26.9-26.9c5,0,9,4,9,9c0,5-4,9-9,9c-4.9,0-9,4-9,9\r C75.3,372,71.3,376,66.4,376L66.4,376z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M102.2,563.9c-12,0-23.2-4.7-31.7-13.1c-8.5-8.5-13.1-19.7-13.1-31.7c0-5,4-9,9-9c5,0,9,4,9,9\r c0,7.2,2.8,13.9,7.9,19c5.1,5.1,11.8,7.9,19,7.9c5,0,9,4,9,9C111.2,559.9,107.2,563.9,102.2,563.9L102.2,563.9z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M173.8,528.1c-4.9,0-9-4-9-9V367.1c0-5,4-9,9-9c4.9,0,9,4,9,9v152.1C182.8,524.1,178.8,528.1,173.8,528.1\r L173.8,528.1z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M173.8,376c-4.9,0-9-4-9-9c0-4.9-4-9-9-9c-4.9,0-9-4-9-9c0-5,4-9,9-9c14.8,0,26.9,12.1,26.9,26.9\r C182.8,372,178.8,376,173.8,376L173.8,376z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M138,563.9c-5,0-9-4-9-9c0-5,4-9,9-9c14.8,0,26.9-12.1,26.9-26.9c0-5,4-9,9-9c4.9,0,9,4,9,9\r C182.8,543.8,162.7,563.9,138,563.9L138,563.9z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M155.9,358.1H84.3c-4.9,0-9-4-9-9c0-5,4-9,9-9h71.6c4.9,0,9,4,9,9C164.9,354.1,160.9,358.1,155.9,358.1\r L155.9,358.1z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M147.1,474.4c0,0-0.1,0-0.2,0H93.2c-2.4,0-4.7-0.9-6.3-2.6c-1.7-1.7-2.6-4-2.6-6.3l0-80.5c0-5,4-9,9-9h53.7\r c4.9,0,9,4,9,9l0,78.7c0.1,0.6,0.2,1.2,0.2,1.8C156.1,470.4,152.1,474.4,147.1,474.4L147.1,474.4z M102.2,456.5H138l0-62.6h-35.8\r L102.2,456.5z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M155.9,501.3c-3.8,0-7.2-2.4-8.5-6.1l-9-26.9c-1.6-4.7,1-9.8,5.7-11.3c4.7-1.6,9.8,1,11.3,5.7l9,26.9\r c1.6,4.7-1,9.8-5.7,11.3C157.8,501.1,156.8,501.3,155.9,501.3L155.9,501.3z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M84.3,501.3c-0.9,0-1.9-0.2-2.8-0.5c-4.7-1.6-7.2-6.6-5.7-11.3l9-26.9c1.6-4.7,6.6-7.2,11.3-5.7\r c4.7,1.6,7.2,6.6,5.7,11.3l-9,26.9C91.5,498.9,88,501.3,84.3,501.3L84.3,501.3z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M120.1,510.2c-21.8,0-34.8-3-41-9.4c-3.5-3.6-3.8-7.4-3.8-8.8c0.2-4.8,4.1-8.7,8.9-8.7c0.1,0,0.2,0,0.3,0\r c3.5,0.1,6.5,2.3,7.9,5.3c1.8,1,8.6,3.6,27.6,3.6c19.1,0,25.8-2.7,27.6-3.6c1.4-3,4.4-5.2,7.9-5.3c0.1,0,0.2,0,0.3,0\r c4.8,0,8.8,3.8,8.9,8.7c0.1,1.4-0.2,5.2-3.8,8.8C154.9,507.2,141.9,510.2,120.1,510.2L120.1,510.2z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M138,563.9h-35.8c-4.9,0-9-4-9-9c0-5,4-9,9-9H138c4.9,0,9,4,9,9C146.9,559.9,142.9,563.9,138,563.9L138,563.9z\r "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M182.8,474.4h-9c-4.9,0-9-4-9-9c0-4.9,4-9,9-9h9c4.9,0,9,4,9,9C191.7,470.4,187.7,474.4,182.8,474.4\r L182.8,474.4z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M66.4,474.4h-9c-5,0-9-4-9-9c0-4.9,4-9,9-9h9c4.9,0,9,4,9,9C75.3,470.4,71.3,474.4,66.4,474.4L66.4,474.4z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M93.3,393.9c-2.9,0-5.7-1.4-7.5-4l-20.6-30.8c-2.8-4.1-1.6-9.7,2.5-12.4c4.1-2.7,9.7-1.6,12.4,2.5l20.6,30.8\r c2.8,4.1,1.6,9.7-2.5,12.4C96.7,393.4,95,393.9,93.3,393.9L93.3,393.9z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M146.9,393.9c-1.7,0-3.4-0.5-5-1.5c-4.1-2.7-5.2-8.3-2.5-12.4l20.6-30.8c2.8-4.1,8.3-5.2,12.4-2.5\r c4.1,2.7,5.2,8.3,2.5,12.4l-20.6,30.8C152.7,392.5,149.8,393.9,146.9,393.9L146.9,393.9z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M308.1,563.9c-4.9,0-9-4-9-9V402.7c0-5,4-9,9-9s9,4,9,9V555C317,559.9,313,563.9,308.1,563.9L308.1,563.9z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M308.1,563.9c-2.3,0-4.6-0.9-6.3-2.6c-3.5-3.5-3.5-9.2,0-12.7l17.9-17.9c3.5-3.5,9.2-3.5,12.7,0\r c3.5,3.5,3.5,9.2,0,12.7l-17.9,17.9C312.7,563,310.4,563.9,308.1,563.9L308.1,563.9z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M308.1,563.9c-2.3,0-4.6-0.9-6.3-2.6l-17.9-17.9c-3.5-3.5-3.5-9.2,0-12.7c3.5-3.5,9.2-3.5,12.7,0l17.9,17.9\r c3.5,3.5,3.5,9.2,0,12.7C312.7,563,310.4,563.9,308.1,563.9L308.1,563.9z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./src/templates/Contact/OfferForm/Icons/Pool.tsx":
/*!********************************************************!*\
  !*** ./src/templates/Contact/OfferForm/Icons/Pool.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pool": () => (/* binding */ Pool)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\OfferForm\\Icons\\Pool.tsx";


const Pool = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
  version: "1.1",
  id: "Layer_1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  viewBox: "23.5 111.1 565.5 598.1",
  xmlSpace: "preserve",
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("defs", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
          id: "SVGID_1_",
          x: "26.1",
          y: "114.6",
          width: "560.2",
          height: "591"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("clipPath", {
        id: "SVGID_2_"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
          style: {
            fill: '#044B93'
          },
          d: "M434.5,307.8L434.5,307.8c-11.1-0.4-21.1-5.3-28.3-13.9c-3.4-4.1-8.3-6.4-13.6-6.4c0,0,0,0,0,0\r c-5.3,0-10.2,2.3-13.6,6.4c-7.4,8.9-18.1,14-29.6,14c0,0,0,0,0,0c-11.5,0-22.3-5.1-29.6-14c-3.4-4.1-8.3-6.4-13.6-6.4\r c0,0,0,0,0,0c-5.3,0-10.3,2.3-13.6,6.4c-7.3,8.9-18.1,14-29.6,14c-11.5,0-22.3-5.1-29.6-14c-3.4-4.1-8.3-6.4-13.6-6.4\r c-5.3,0-10.2,2.3-13.6,6.4c-7.1,8.6-17.2,13.5-28.3,13.9c-3.3,0.1-6.3,1.5-8.5,3.9s-3.4,5.5-3.3,8.7c0.2,6.7,5.9,12,12.6,11.8\r c15.2-0.5,30-6.8,41-17.2c11.7,11.2,26.9,17.3,43.2,17.3c0,0,0,0,0,0c16.3,0,31.5-6.1,43.2-17.3c11.7,11.2,26.9,17.3,43.2,17.3\r c0,0,0,0,0,0c16.3,0,31.5-6.1,43.2-17.3c11.1,10.4,25.8,16.7,41,17.2c3.2,0.1,6.4-1,8.7-3.3c2.4-2.2,3.8-5.2,3.9-8.5\r c0.1-3.3-1-6.4-3.3-8.7C440.8,309.3,437.8,307.9,434.5,307.8z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
          style: {
            fill: '#044B93'
          },
          d: "M392.6,358.4C392.6,358.4,392.6,358.4,392.6,358.4c-5.3,0-10.2,2.3-13.6,6.4c-7.4,8.9-18.1,14-29.6,14\r c0,0,0,0,0,0c-11.5,0-22.3-5.1-29.6-14c-3.4-4.1-8.3-6.4-13.6-6.4c0,0,0,0,0,0c-5.3,0-10.3,2.3-13.6,6.4\r c-7.3,8.9-18.1,14-29.6,14c-11.5,0-22.3-5.1-29.6-14c-3.4-4.1-8.3-6.4-13.6-6.4c0,0,0,0,0,0c-5.3,0-10.2,2.3-13.6,6.4\r c-8.4,10.2-21.3,15.3-34.5,13.7c-3.2-0.4-6.4,0.5-9,2.5s-4.2,4.9-4.6,8.1c-0.8,6.7,3.9,12.8,10.6,13.6c19,2.4,37.4-3.7,51.1-16.7\r c11.7,11.1,26.9,17.2,43.2,17.2c0,0,0,0,0,0c16.3,0,31.5-6.1,43.2-17.2c11.7,11.1,26.9,17.2,43.2,17.2c16.3,0,31.5-6.1,43.2-17.2\r c13.7,13.1,32.1,19.1,51.1,16.7c6.7-0.8,11.4-7,10.6-13.6c-0.4-3.2-2.1-6.1-4.6-8.1c-2.6-2-5.8-2.9-9-2.5\r c-13.1,1.7-26-3.4-34.5-13.7h0C402.9,360.8,397.9,358.4,392.6,358.4z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
          style: {
            fill: '#044B93'
          },
          d: "M427.9,235.4L427.9,235.4c-8.5-1.8-16-6.3-21.6-13.1c-3.4-4.1-8.3-6.4-13.6-6.4c-5.3,0-10.2,2.3-13.6,6.4\r c-7.4,8.9-18.1,14-29.6,14c0,0,0,0,0,0c-11.5,0-22.3-5.1-29.6-14c-3.4-4.1-8.3-6.4-13.6-6.4c0,0,0,0,0,0\r c-5.3,0-10.3,2.3-13.6,6.4c-7.3,8.9-18.1,14-29.6,14c0,0,0,0,0,0c-11.5,0-22.3-5.1-29.6-14c-3.4-4.1-8.3-6.4-13.6-6.4\r c0,0,0,0,0,0c-5.3,0-10.2,2.3-13.6,6.4c-5.6,6.8-13.1,11.3-21.7,13.1c-6.6,1.4-10.8,7.9-9.4,14.5c0.7,3.2,2.6,5.9,5.3,7.7\r c2.7,1.8,6,2.4,9.2,1.7c11.4-2.4,21.8-7.9,30.2-15.9c11.7,11.1,26.9,17.2,43.2,17.2c0,0,0,0,0,0c16.3,0,31.5-6.1,43.2-17.2\r c11.7,11.2,26.9,17.3,43.2,17.2c16.3,0,31.5-6.1,43.2-17.2c8.4,8,18.8,13.5,30.2,15.9c3.2,0.7,6.4,0.1,9.2-1.7\r c2.7-1.8,4.6-4.5,5.3-7.7C438.7,243.3,434.5,236.8,427.9,235.4z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
          style: {
            fill: '#044B93'
          },
          d: "M588.7,557.8l-15.1-129c-0.4-3.2-2-6.1-4.6-8.2c-2.6-2-5.7-2.9-9-2.5c-3.2,0.4-6.1,2-8.2,4.5\r c-2,2.6-2.9,5.7-2.5,9l15,128.6c0.7,7.4-1.7,14.8-6.7,20.3c-5,5.5-11.9,8.6-19.4,8.6h-60.1v-14.9h48.3c6.2,0,12.2-2.6,16.3-7.3\r c4.2-4.6,6.2-10.8,5.6-17l-44.8-380c-1.2-11.2-10.6-19.7-21.9-19.7H326.4c-6.7,0-12.2,5.5-12.2,12.2c0,6.7,5.5,12.2,12.2,12.2\r h153.2l44.2,375.1h-45.7V527c0-46.7-38-84.7-84.7-84.7c-30,0-57.2,15.5-72.5,41c-15.6-25.6-44-41.5-74.2-40.9\r c-22.1,0.4-42.9,9.4-58.6,25.2c-15.8,16-24.5,37.1-24.5,59.5v22.9h-75l44.2-375.1H286c6.7,0,12.2-5.5,12.2-12.2\r c0-6.7-5.5-12.2-12.2-12.2H130.7c-11.3,0-20.7,8.5-21.9,19.7L64,550l0,0.1c-0.6,6.2,1.4,12.4,5.6,17c4.2,4.6,10.1,7.3,16.3,7.3\r h180.6v14.9H74.2c-7.4,0-14.5-3.2-19.5-8.7c-5-5.5-7.4-12.7-6.6-20.1l46.9-401l0-0.3c1.4-13.5,12.6-23.7,26.2-23.7h370.3\r c13.5,0,24.8,10.1,26.2,23.6c0,0.1,0,0.2,0,0.3l27.1,232c0.4,3.2,2,6.1,4.6,8.2c2.6,2,5.7,2.9,9,2.5c3.2-0.4,6.1-2,8.2-4.5\r c2-2.6,2.9-5.7,2.5-9l-27.1-231.9c-2.7-26-24.3-45.6-50.4-45.6H121.1c-26.1,0-47.8,19.6-50.4,45.5L23.7,557.6c0,0.1,0,0.1,0,0.2\r c-1.4,14.2,3.3,28.5,12.9,39.1c9.6,10.6,23.3,16.7,37.6,16.7h192.4v76.8c0,10.3,8.4,18.7,18.7,18.7h29.1\r c9.7,0,17.7-7.4,18.6-16.9h78.7c0.9,9.5,8.9,16.9,18.6,16.9h29.1c10.3,0,18.7-8.4,18.7-18.7v-76.8h60.1c14.3,0,28-6.1,37.6-16.7\r C585.4,586.3,590.1,572.1,588.7,557.8z M333.1,589.2v-14.9h86.7c2.1,0,4.1,0.9,5.5,2.4c1.4,1.6,2.1,3.6,1.9,5.7\r c-0.4,3.9-3.6,6.8-7.4,6.8H333.1z M375.2,527.8c0-10.3,8-18.8,17.9-18.9c4.9-0.1,9.6,1.8,13.1,5.2c3.5,3.5,5.5,8.1,5.5,13v22.9\r h-36.4V527.8z M451.6,660.4c0-11.3-5.9-21.6-15.6-27.4v-23.8c9.8-5.8,15.6-15.9,15.6-27.4c0-11.3-5.9-21.7-15.6-27.4V527\r c0-12.4-5.4-24.1-14.8-32.3c-9.4-8.1-21.8-11.7-34-9.9c-20.8,3-36.4,21.2-36.4,42.2v22.9h-17.7v-21.7c0-33.6,26.8-61.2,59.8-61.5\r c0.2,0,0.4,0,0.5,0c16,0,31.1,6.2,42.5,17.5c11.6,11.5,17.9,26.7,17.9,42.9v157.7h-13.4C447.4,678.7,451.6,669.9,451.6,660.4z\r M427.2,661.1c-0.4,3.8-3.6,6.8-7.4,6.8h-86.7v-14.9h86.7c2.1,0,4.1,0.9,5.5,2.5C426.7,657,427.4,659,427.2,661.1z M333.1,628.5\r v-14.9h78.6v14.9H333.1z M250.8,484.5c-11.6-0.7-23.2,3.6-31.7,11.6c-8.6,8.1-13.3,19.1-13.3,30.9v22.9H188v-21.7\r c0-17,6.7-32.9,19-44.7c12-11.5,27.5-17.5,43.8-16.8c32.5,1.3,57.9,27.8,57.9,60.3v157.7H291V527\r C291,504.4,273.3,485.7,250.8,484.5z M230.1,527.8c0-9.2,6.6-17.3,15.3-18.7c5.4-0.9,10.6,0.6,14.7,4.1c4.1,3.5,6.4,8.5,6.4,13.8\r v22.9h-36.4L230.1,527.8L230.1,527.8z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./src/templates/Contact/OfferForm/Icons/PrefabricatedMassive.tsx":
/*!************************************************************************!*\
  !*** ./src/templates/Contact/OfferForm/Icons/PrefabricatedMassive.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrefabricatedMassive": () => (/* binding */ PrefabricatedMassive)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\OfferForm\\Icons\\PrefabricatedMassive.tsx";


const PrefabricatedMassive = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
  version: "1.1",
  x: "0px",
  y: "0px",
  viewBox: "-73 180.063 585 482",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#004A93'
      },
      d: "M387.414,381.581l-85.6-73.1c0.1-0.5,0.2-1,0.3-1.6v-95.6c-0.1-5.7-4.6-10.3-10.3-10.5h-47.8\r c-5.5,0-10,4.9-10,10.5v39.6l-68.5-58.4c-3.7-3.2-9.2-3.2-13,0l-221.9,189c-4.3,3.5-4.8,9.8-1.3,14.1s9.8,4.8,14.1,1.3\r c0.1-0.1,0.1-0.1,0.2-0.2l215.4-183.4l77.1,65.7l46.1,39.2l92.3,78.6c4.2,3.6,10.5,3.1,14.1-1.1\r C392.114,391.481,391.614,385.181,387.414,381.581z M282.014,291.581l-28-23.6v-47.1h28V291.581z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#004A93'
      },
      d: "M244.133,581.879h-25.119v-117.7c0-5.5-4.1-10.3-9.6-10.3h-100.8c-5.5,0-9.6,4.8-9.6,10.3v117.7h-79\r v-194.8l139-118.4l139,118.4v51.844l19.9,0.082v-34.826l12.5,10.8c1.8,1.5,4,2.4,6.4,2.4c2.9,0,5.7-1.3,7.6-3.5\r c3.7-4.3,3.1-10.6-1.1-14.1l-28.1-24l-149.7-127.9c-3.7-3.2-9.2-3.2-13,0l-149.7,127.9l-28.1,24c-4.2,3.6-4.7,9.9-1.1,14.1\r c3.5,4.2,9.7,4.7,13.8,1.2l0.1-0.1l12.5-10.8v187.5c0.1,5.6,4.7,10.2,10.3,10.3h233.739L244.133,581.879z M199.014,581.879h-80\r v-108h80V581.879z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "461.78",
        y: "602.609",
        style: {
          fill: '#779CC1'
        },
        width: "35.972",
        height: "24.738"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "376.978",
        y: "602.609",
        style: {
          fill: '#779CC1'
        },
        width: "78.176",
        height: "24.738"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "287.048",
        y: "602.835",
        style: {
          fill: '#779CC1'
        },
        width: "79.99",
        height: "24.738"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "244.766",
        y: "602.911",
        style: {
          fill: '#779CC1'
        },
        width: "35.972",
        height: "24.738"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "418.629",
        y: "572.632",
        style: {
          fill: '#779CC1'
        },
        width: "78.176",
        height: "24.738"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "332.406",
        y: "572.909",
        style: {
          fill: '#779CC1'
        },
        width: "78.176",
        height: "24.738"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "245.397",
        y: "572.948",
        style: {
          fill: '#779CC1'
        },
        width: "78.176",
        height: "24.738"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "461.464",
        y: "542.34",
        style: {
          fill: '#779CC1'
        },
        width: "35.972",
        height: "24.738"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "376.662",
        y: "542.34",
        style: {
          fill: '#779CC1'
        },
        width: "78.176",
        height: "24.738"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "286.733",
        y: "542.567",
        style: {
          fill: '#779CC1'
        },
        width: "79.99",
        height: "24.738"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "244.45",
        y: "542.642",
        style: {
          fill: '#779CC1'
        },
        width: "35.972",
        height: "24.738"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "418.314",
        y: "512.364",
        style: {
          fill: '#779CC1'
        },
        width: "78.176",
        height: "24.738"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "332.091",
        y: "512.64",
        style: {
          fill: '#779CC1'
        },
        width: "78.176",
        height: "24.738"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "245.081",
        y: "512.679",
        style: {
          fill: '#779CC1'
        },
        width: "78.176",
        height: "24.738"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "461.701",
        y: "481.639",
        style: {
          fill: '#779CC1'
        },
        width: "35.972",
        height: "24.738"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "376.899",
        y: "481.639",
        style: {
          fill: '#779CC1'
        },
        width: "78.176",
        height: "24.738"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "286.97",
        y: "481.866",
        style: {
          fill: '#779CC1'
        },
        width: "79.99",
        height: "24.738"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "244.687",
        y: "481.941",
        style: {
          fill: '#779CC1'
        },
        width: "35.972",
        height: "24.738"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "418.551",
        y: "451.663",
        style: {
          fill: '#779CC1'
        },
        width: "78.176",
        height: "24.738"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "332.327",
        y: "451.939",
        style: {
          fill: '#779CC1'
        },
        width: "78.176",
        height: "24.738"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "245.318",
        y: "451.979",
        style: {
          fill: '#779CC1'
        },
        width: "78.176",
        height: "24.738"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
          style: {
            fill: '#004A93'
          },
          d: "M486.5,650.567H254c-10.203,0-18.504-8.301-18.504-18.504v-184\r c0-10.203,8.301-18.504,18.504-18.504h232.5c10.203,0,18.504,8.301,18.504,18.504v184\r C505.004,642.266,496.703,650.567,486.5,650.567z M254,446.567c-0.797,0-1.496,0.699-1.496,1.496v184\r c0,0.797,0.699,1.496,1.496,1.496h232.5c0.797,0,1.496-0.699,1.496-1.496v-184c0-0.797-0.699-1.496-1.496-1.496H254z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
          style: {
            fill: '#004A93'
          },
          d: "M486.5,650.567H254c-10.203,0-18.504-8.301-18.504-18.504v-184\r c0-10.203,8.301-18.504,18.504-18.504h232.5c10.203,0,18.504,8.301,18.504,18.504v184\r C505.004,642.266,496.703,650.567,486.5,650.567z M254,446.567c-0.797,0-1.496,0.699-1.496,1.496v184\r c0,0.797,0.699,1.496,1.496,1.496h232.5c0.797,0,1.496-0.699,1.496-1.496v-184c0-0.797-0.699-1.496-1.496-1.496H254z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./src/templates/Contact/OfferForm/Icons/PrefabricatedWood.tsx":
/*!*********************************************************************!*\
  !*** ./src/templates/Contact/OfferForm/Icons/PrefabricatedWood.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrefabricatedWood": () => (/* binding */ PrefabricatedWood)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\OfferForm\\Icons\\PrefabricatedWood.tsx";


const PrefabricatedWood = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  viewBox: "-73 184.063 591 472.667",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#004A93'
      },
      d: "M387.414,381.581l-85.6-73.1c0.1-0.5,0.2-1,0.3-1.6v-95.6c-0.1-5.7-4.6-10.3-10.3-10.5h-47.8\r c-5.5,0-10,4.9-10,10.5v39.6l-68.5-58.4c-3.7-3.2-9.2-3.2-13,0l-221.9,189c-4.3,3.5-4.8,9.8-1.3,14.1s9.8,4.8,14.1,1.3\r c0.1-0.1,0.1-0.1,0.2-0.2l215.4-183.4l77.1,65.7l46.1,39.2l92.3,78.6c4.2,3.6,10.5,3.1,14.1-1.1\r C392.114,391.481,391.614,385.181,387.414,381.581z M282.014,291.581l-28-23.6v-47.1h28V291.581z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#004A93'
      },
      d: "M244.133,581.879h-25.119v-117.7c0-5.5-4.1-10.3-9.6-10.3h-100.8c-5.5,0-9.6,4.8-9.6,10.3v117.7h-79\r v-194.8l139-118.4l139,118.4v51.844l19.9,0.082v-34.826l12.5,10.8c1.8,1.5,4,2.4,6.4,2.4c2.9,0,5.7-1.3,7.6-3.5\r c3.7-4.3,3.1-10.6-1.1-14.1l-28.1-24l-149.7-127.9c-3.7-3.2-9.2-3.2-13,0l-149.7,127.9l-28.1,24c-4.2,3.6-4.7,9.9-1.1,14.1\r c3.5,4.2,9.7,4.7,13.8,1.2l0.1-0.1l12.5-10.8v187.5c0.1,5.6,4.7,10.2,10.3,10.3h233.739L244.133,581.879z M199.014,581.879h-80\r v-108h80V581.879z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: 'none',
          stroke: '#779CC1',
          strokeWidth: 8.5039,
          strokeMiterlimit: 10
        },
        d: "M291.332,441.063\r c0,0,7.333,13.667,28,29.333c20.667,15.667,57.391,50.561,64,62c17.333,30-3.667,43-15.667,54.667s-34.333,20.333-34.333,20.333\r l-24.333,9.333l-14.333,6.333c0,0-21.333,6.667-25,8.333c-3.667,1.667-22.333,10.667-22.333,10.667"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: 'none',
          stroke: '#779CC1',
          strokeWidth: 8.5039,
          strokeMiterlimit: 10
        },
        d: "M264.332,443.063\r c0,1.333,14.667,20.667,14.667,20.667l43.333,41.333l20.333,17.333c0,0,32.667,35,6,47s-58,16.333-73.667-5.667\r c-15.667-22-30.333-57-30.333-57"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: 'none',
          stroke: '#779CC1',
          strokeWidth: 8.5039,
          strokeMiterlimit: 10
        },
        d: "M245.498,452.813\r c0,0,37.147,49.681,60.167,64.917c28.833,19.083,18.667,48.083,0.333,42.083c-18.333-6-29.667-34.417-43.333-55.083\r c-13.667-20.667-21.667-27-21.667-27"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: 'none',
          stroke: '#779CC1',
          strokeWidth: 8.5039,
          strokeMiterlimit: 10
        },
        d: "M244.748,559.146\r c0,0,4.333,25.583,21.917,30.25c10.086,2.677,40.922,13.385,23.667,18.333C267.665,614.23,243,623.063,243,623.063"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: 'none',
          stroke: '#779CC1',
          strokeWidth: 8.5039,
          strokeMiterlimit: 10
        },
        d: "M336.998,642.396\r c0,0,19.667-28.333,49.333-39c26.148-9.402,48.333-5.333,49-26.333c0.667-21,3.193-26.042-11.473-43.376\r c-14.667-17.333-39.115-20.968-26.115-36.968c13-16,65.255-54.99,65.255-54.99"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: 'none',
          stroke: '#779CC1',
          strokeWidth: 8.5039,
          strokeMiterlimit: 10
        },
        d: "M421.332,440.73c0,0-15.333,31.333-30,36\r c-14.667,4.667-27.333,5.667-38-5.667c-10.667-11.333-27.667-30.667-27.667-30.667"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: 'none',
          stroke: '#779CC1',
          strokeWidth: 8.5039,
          strokeMiterlimit: 10
        },
        d: "M356.665,441.063\r c0,0,5.667,16,13.667,16.667c8,0.667,7.667,1.333,15.333-9.333c7.667-10.667,10.333-14.333,10.333-14.333"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: 'none',
          stroke: '#779CC1',
          strokeWidth: 8.5039,
          strokeMiterlimit: 10
        },
        d: "M460.665,466.73\r c0,0-34.772,16.763-36.468,38.129c-0.527,6.646,16.466,28.886,27.132,32.22c10.667,3.333,28.668-11.016,28.668-23.682\r C479.998,500.73,486.998,449.73,460.665,466.73z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: 'none',
          stroke: '#779CC1',
          strokeWidth: 8.5039,
          strokeMiterlimit: 10
        },
        d: "M372.998,643.396\r c0,0,13.233-13.292,35-22.333c21.667-9,37.333-7,50-33c6.196-12.717,6-21.333,6.667-28.333c0,0-0.333-8.333,8.667-12.667\r s17.667-6.667,17.667-6.667"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: 'none',
          stroke: '#779CC1',
          strokeWidth: 8.5039,
          strokeMiterlimit: 10
        },
        d: "M491.998,582.73\r c0,0-13.333,7.667-15.333,18.333s-5,14-11.667,22.667c-6.667,8.667-42.667,20.667-42.667,20.667"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: 'none',
          stroke: '#779CC1',
          strokeWidth: 8.5039,
          strokeMiterlimit: 10
        },
        d: "M451.332,492.396c0,0-8.167,7.5-4.5,14.333\r c3.667,6.833,9.833,8.167,13.833,6.5c4-1.667,6-6.333,6.167-12.5C466.998,494.563,462.498,481.896,451.332,492.396z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
          style: {
            fill: '#004A93'
          },
          d: "M486.5,650.567H254c-10.203,0-18.504-8.301-18.504-18.504v-184\r c0-10.203,8.301-18.504,18.504-18.504h232.5c10.203,0,18.504,8.301,18.504,18.504v184\r C505.004,642.266,496.703,650.567,486.5,650.567z M254,446.567c-0.797,0-1.496,0.699-1.496,1.496v184\r c0,0.797,0.699,1.496,1.496,1.496h232.5c0.797,0,1.496-0.699,1.496-1.496v-184c0-0.797-0.699-1.496-1.496-1.496H254z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
          style: {
            fill: '#004A93'
          },
          d: "M486.5,650.567H254c-10.203,0-18.504-8.301-18.504-18.504v-184\r c0-10.203,8.301-18.504,18.504-18.504h232.5c10.203,0,18.504,8.301,18.504,18.504v184\r C505.004,642.266,496.703,650.567,486.5,650.567z M254,446.567c-0.797,0-1.496,0.699-1.496,1.496v184\r c0,0.797,0.699,1.496,1.496,1.496h232.5c0.797,0,1.496-0.699,1.496-1.496v-184c0-0.797-0.699-1.496-1.496-1.496H254z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 148,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
    style: {
      display: 'none'
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
      style: {
        display: 'inline'
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "461.78",
        y: "602.609",
        style: {
          fill: '#779CC1'
        },
        width: "35.972",
        height: "24.738"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "376.978",
        y: "602.609",
        style: {
          fill: '#779CC1'
        },
        width: "78.176",
        height: "24.738"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "287.048",
        y: "602.835",
        style: {
          fill: '#779CC1'
        },
        width: "79.99",
        height: "24.738"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "244.766",
        y: "602.911",
        style: {
          fill: '#779CC1'
        },
        width: "35.972",
        height: "24.738"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "418.629",
        y: "572.632",
        style: {
          fill: '#779CC1'
        },
        width: "78.176",
        height: "24.738"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "332.406",
        y: "572.909",
        style: {
          fill: '#779CC1'
        },
        width: "78.176",
        height: "24.738"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "245.397",
        y: "572.948",
        style: {
          fill: '#779CC1'
        },
        width: "78.176",
        height: "24.738"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "461.464",
        y: "542.34",
        style: {
          fill: '#779CC1'
        },
        width: "35.972",
        height: "24.738"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "376.662",
        y: "542.34",
        style: {
          fill: '#779CC1'
        },
        width: "78.176",
        height: "24.738"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "286.733",
        y: "542.567",
        style: {
          fill: '#779CC1'
        },
        width: "79.99",
        height: "24.738"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "244.45",
        y: "542.642",
        style: {
          fill: '#779CC1'
        },
        width: "35.972",
        height: "24.738"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "418.314",
        y: "512.364",
        style: {
          fill: '#779CC1'
        },
        width: "78.176",
        height: "24.738"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "332.091",
        y: "512.64",
        style: {
          fill: '#779CC1'
        },
        width: "78.176",
        height: "24.738"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "245.081",
        y: "512.679",
        style: {
          fill: '#779CC1'
        },
        width: "78.176",
        height: "24.738"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "461.701",
        y: "481.639",
        style: {
          fill: '#779CC1'
        },
        width: "35.972",
        height: "24.738"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "376.899",
        y: "481.639",
        style: {
          fill: '#779CC1'
        },
        width: "78.176",
        height: "24.738"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "286.97",
        y: "481.866",
        style: {
          fill: '#779CC1'
        },
        width: "79.99",
        height: "24.738"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "244.687",
        y: "481.941",
        style: {
          fill: '#779CC1'
        },
        width: "35.972",
        height: "24.738"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 291,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "418.551",
        y: "451.663",
        style: {
          fill: '#779CC1'
        },
        width: "78.176",
        height: "24.738"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "332.327",
        y: "451.939",
        style: {
          fill: '#779CC1'
        },
        width: "78.176",
        height: "24.738"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 305,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "245.318",
        y: "451.979",
        style: {
          fill: '#779CC1'
        },
        width: "78.176",
        height: "24.738"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 312,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 170,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./src/templates/Contact/OfferForm/Icons/PropertyCondition.tsx":
/*!*********************************************************************!*\
  !*** ./src/templates/Contact/OfferForm/Icons/PropertyCondition.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertyCondition": () => (/* binding */ PropertyCondition)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\OfferForm\\Icons\\PropertyCondition.tsx";


const PropertyCondition = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
  version: "1.1",
  id: "Layer_1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  viewBox: "62.6 173.1 488.2 485.6",
  xmlSpace: "preserve",
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("defs", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
            id: "SVGID_1_",
            x: "62.6",
            y: "173.1",
            width: "488.2",
            height: "485.6"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("clipPath", {
          id: "SVGID_2_",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("use", {
            style: {
              overflow: 'visible'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
          style: {
            fill: '#044B93'
          },
          d: "M87,658.7h40.7c6.9,0,13.5-3,18.1-8.1h204.1c11.9,0,23.6-3.3,33.8-9.5l152.5-92.8c7.2-4.3,12.3-11.5,14-19.7\r c1.7-8.2,0-16.8-4.9-23.7c-0.2-0.3-0.4-0.6-0.6-0.8c-7.9-10.5-21.5-14.7-34-10.6l-57.6,19.1V341.4h10.7c6.8,0,12.9-4.2,15.3-10.6\r c2.4-6.4,0.5-13.6-4.6-18l-21.3-18.4v-91.3c0-9-7.3-16.3-16.3-16.3h-40.7c-9,0-16.3,7.3-16.3,16.3v28.1l-62.6-54.1\r c-6.1-5.2-15.1-5.2-21.2,0L138.8,312.8c-5.2,4.5-7,11.6-4.6,18c2.4,6.4,8.5,10.6,15.3,10.6h10.7v113.9h-9.6\r c-3.4-9.7-12.6-16.2-22.9-16.3H87c-13.5,0-24.4,10.9-24.4,24.4v170.9C62.6,647.8,73.5,658.7,87,658.7L87,658.7z M515.7,508.8\r c5.6-1.8,11.7-0.1,15.5,4.5c0.1,0.2,0.3,0.4,0.4,0.6c2.4,3.2,3.3,7.2,2.6,11.2c-0.8,3.9-3.1,7.3-6.6,9.4l-152.5,92.8\r c-7.6,4.7-16.4,7.1-25.4,7.1H152.1V471.6h14.6c15,0,29.6,5.1,41.3,14.5c14.6,11.7,32.7,18,51.4,18H302c11.3,0,21.9,5.9,27.8,15.6\r c0.1,0.2,0.2,0.4,0.3,0.5c5.1,7.4,4.9,17.3-0.6,24.5H280c-16.1,0-31.8,4.8-45.1,13.7l-5.9,4c-3.7,2.5-4.7,7.6-2.2,11.3\r c2.5,3.7,7.6,4.7,11.3,2.2l5.9-4c10.7-7.1,23.3-10.9,36.1-10.9h72.3c4.4,0,8.8-0.7,12.9-2.1L515.7,508.8z M363.6,542.4l-3.6,1.2\r c-2.5,0.8-5.1,1.3-7.7,1.2h-4.4c3.6-10.8,2.3-22.6-3.5-32.4c-0.1-0.3-0.3-0.5-0.4-0.8c-8.8-14.7-24.7-23.7-41.9-23.7h-42.6\r c-3.3,0-6.5-0.3-9.8-0.8v-15.5c0-31.5,25.5-57,57-57s57,25.5,57,57L363.6,542.4L363.6,542.4z M396.1,203.1h40.7v77.2l-40.7-35.1\r V203.1z M192.7,341.4c4.5,0,8.1-3.6,8.1-8.1c0-4.5-3.6-8.1-8.1-8.1h-43.3l157.2-135.7l75.7,65.3l81.4,70.4H355.5\r c-4.5,0-8.1,3.6-8.1,8.1c0,4.5,3.6,8.1,8.1,8.1h81.4V518l-56.9,19v-65.4c0-40.4-32.8-73.2-73.2-73.2s-73.2,32.8-73.2,73.2v10.9\r c-5.5-2.3-10.6-5.4-15.3-9.1c-12-9.6-26.5-15.6-41.7-17.4V341.4H192.7z M78.8,463.5c0-4.5,3.6-8.1,8.1-8.1h40.7\r c4.5,0,8.1,3.6,8.1,8.1v170.9c0,4.5-3.6,8.1-8.1,8.1H87c-4.5,0-8.1-3.6-8.1-8.1C78.8,634.3,78.8,463.5,78.8,463.5z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M160.2,211.2c4.5,0,8.1-3.6,8.1-8.1v-16.3c0-4.5-3.6-8.1-8.1-8.1c-4.5,0-8.1,3.6-8.1,8.1v16.3\r C152.1,207.6,155.7,211.2,160.2,211.2L160.2,211.2z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M160.2,227.5c-4.5,0-8.1,3.6-8.1,8.1v16.3c0,4.5,3.6,8.1,8.1,8.1s8.1-3.6,8.1-8.1v-16.3\r C168.3,231.2,164.7,227.5,160.2,227.5L160.2,227.5z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M176.5,227.5h16.3c4.5,0,8.1-3.6,8.1-8.1c0-4.5-3.6-8.1-8.1-8.1h-16.3c-4.5,0-8.1,3.6-8.1,8.1\r C168.3,223.9,172,227.5,176.5,227.5L176.5,227.5z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M127.6,227.5h16.3c4.5,0,8.1-3.6,8.1-8.1c0-4.5-3.6-8.1-8.1-8.1h-16.3c-4.5,0-8.1,3.6-8.1,8.1\r C119.5,223.9,123.2,227.5,127.6,227.5L127.6,227.5z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M514.1,410.6c2.2,0,4.2-0.9,5.8-2.4l12.2-12.2c3.1-3.2,3-8.3-0.1-11.4c-3.1-3.1-8.2-3.2-11.4-0.1l-12.2,12.2\r c-2.3,2.3-3,5.8-1.8,8.9C507.8,408.6,510.8,410.6,514.1,410.6L514.1,410.6z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M483.9,421.1l-12.2,12.2c-2.1,2-3,5.1-2.2,7.9c0.7,2.8,3,5.1,5.8,5.8c2.8,0.7,5.9-0.1,7.9-2.2l12.2-12.2\r c3.1-3.2,3-8.3-0.1-11.4C492.2,418,487.1,418,483.9,421.1L483.9,421.1z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M520.6,444.8c3.2,3.1,8.3,3,11.4-0.1c3.1-3.1,3.2-8.2,0.1-11.4l-12.2-12.2c-3.2-3.1-8.3-3-11.4,0.1\r c-3.1,3.1-3.2,8.2-0.1,11.4L520.6,444.8z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M471.7,384.5c-3.2,3.2-3.2,8.3,0,11.5l12.2,12.2c3.2,3.1,8.3,3,11.4-0.1c3.1-3.1,3.2-8.2,0.1-11.4l-12.2-12.2\r C480.1,381.3,474.9,381.3,471.7,384.5L471.7,384.5z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M225.3,341.4c22.5,0,40.7,18.2,40.7,40.7c0,4.5,3.6,8.1,8.1,8.1c4.5,0,8.1-3.6,8.1-8.1\r c0-22.5,18.2-40.6,40.7-40.7c4.5,0,8.1-3.6,8.1-8.1c0-4.5-3.6-8.1-8.1-8.1c-22.5,0-40.7-18.2-40.7-40.7c0-4.5-3.6-8.1-8.1-8.1\r c-4.5,0-8.1,3.6-8.1,8.1c0,22.5-18.2,40.6-40.7,40.7c-4.5,0-8.1,3.6-8.1,8.1C217.1,337.8,220.8,341.4,225.3,341.4L225.3,341.4z\r M274.1,313.8c4.8,8,11.5,14.7,19.5,19.5c-8,4.8-14.7,11.5-19.5,19.5c-4.8-8-11.5-14.7-19.5-19.5\r C262.6,328.5,269.3,321.8,274.1,313.8L274.1,313.8z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./src/templates/Contact/OfferForm/Icons/RentedArea.tsx":
/*!**************************************************************!*\
  !*** ./src/templates/Contact/OfferForm/Icons/RentedArea.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RentedArea": () => (/* binding */ RentedArea)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\OfferForm\\Icons\\RentedArea.tsx";


const RentedArea = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
  version: "1.1",
  id: "Layer_1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  viewBox: "52.8 142.8 506.3 506.3",
  xmlSpace: "preserve",
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
    style: {
      fill: '#044B93'
    },
    d: "M559.2,190c0-26-21.2-47.2-47.2-47.2H100c-26,0-47.2,21.2-47.2,47.2v412c0,26,21.2,47.2,47.2,47.2h284.7\r c9.5,0,17.2-7.7,17.2-17.2s-7.7-17.2-17.2-17.2H283.2v-61.5c0-9.5-7.7-17.2-17.2-17.2s-17.2,7.7-17.2,17.2v61.5H100\r c-7.1,0-12.8-5.8-12.8-12.8V413.2h161.7v61.5c0,9.5,7.7,17.2,17.2,17.2s17.2-7.7,17.2-17.2V317.3c0-9.5-7.7-17.2-17.2-17.2\r s-17.2,7.7-17.2,17.2v61.5H87.2V190c0-7.1,5.8-12.8,12.8-12.8h148.9v61.5c0,9.5,7.7,17.2,17.2,17.2s17.2-7.7,17.2-17.2v-61.5H512\r c7.1,0,12.8,5.8,12.8,12.8v189.8H345.3c-9.5,0-17.2,7.7-17.2,17.2s7.7,17.2,17.2,17.2h179.5V602c0,7.1-5.8,12.8-12.8,12.8h-48.7\r c-9.5,0-17.2,7.7-17.2,17.2s7.7,17.2,17.2,17.2H512c26,0,47.2-21.2,47.2-47.2V190z"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./src/templates/Contact/OfferForm/Icons/Sauna.tsx":
/*!*********************************************************!*\
  !*** ./src/templates/Contact/OfferForm/Icons/Sauna.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sauna": () => (/* binding */ Sauna)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\OfferForm\\Icons\\Sauna.tsx";


const Sauna = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
  version: "1.1",
  id: "Layer_1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  viewBox: "24.5 102.5 565.4 565.4",
  xmlSpace: "preserve",
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M589.8,277.7c0-8-4.3-15.5-11.1-19.5L512.8,219c-5.6-3.3-12.8-1.4-16.1,4.1c-3.3,5.6-1.5,12.8,4.1,16.1\r l65.6,38.9v22.6H158.8c-6.5,0-11.7,5.3-11.7,11.7c0,6.5,5.3,11.7,11.7,11.7h361.4c-1.5,4-2.3,8.2-2.3,12.5c0,4.3,0.8,8.5,2.3,12.5\r H94.1c1.5-4,2.3-8.2,2.3-12.5s-0.8-8.5-2.3-12.5h26.5c6.5,0,11.7-5.3,11.7-11.7s-5.3-11.7-11.7-11.7H47.9v-22.6l254-150.7\r c3.2-1.9,7.3-1.9,10.5,0L468,219.7c5.6,3.3,12.8,1.5,16.1-4.1c1.6-2.7,2.1-5.9,1.3-8.9c-0.8-3-2.7-5.6-5.4-7.2l-155.6-92.4\r c-10.6-6.3-23.8-6.3-34.4,0L35.6,258.1c-6.9,4.1-11.1,11.6-11.1,19.5v23.8c0,5.8,2.2,11.2,6,15.4c-3.9,5.9-6,12.8-6,19.9\r c0,9,3.4,17.6,9.4,24.2c-6,6.6-9.4,15.2-9.4,24.2s3.4,17.6,9.4,24.2c-6,6.6-9.4,15.2-9.4,24.2s3.4,17.6,9.4,24.2\r c-6,6.6-9.4,15.2-9.4,24.2s3.4,17.6,9.4,24.2c-6,6.6-9.4,15.2-9.4,24.2c0,9,3.4,17.6,9.4,24.2c-6,6.6-9.4,15.2-9.4,24.2\r c0,5.5,1.3,10.9,3.6,15.8c-2.3,2.2-3.6,5.2-3.6,8.5v52.9c0,6.5,5.3,11.7,11.7,11.7h408.4c6.5,0,11.7-5.3,11.7-11.7\r c0-6.5-5.3-11.7-11.7-11.7H47.9V615h518.5v29.4h-83.7c-6.5,0-11.7,5.3-11.7,11.7c0,6.5,5.3,11.7,11.7,11.7h95.4\r c6.5,0,11.7-5.3,11.7-11.7v-52.9c0-3.2-1.4-6.3-3.6-8.5c2.4-4.9,3.6-10.3,3.6-15.8c0-9-3.4-17.6-9.4-24.2c6-6.6,9.4-15.2,9.4-24.2\r c0-9-3.4-17.6-9.4-24.2c6-6.6,9.4-15.2,9.4-24.2c0-9-3.4-17.6-9.4-24.2c6-6.6,9.4-15.2,9.4-24.2c0-9-3.4-17.6-9.4-24.2\r c6-6.6,9.4-15.2,9.4-24.2c0-9-3.4-17.6-9.4-24.2c6-6.6,9.4-15.2,9.4-24.2c0-7.1-2.1-14-6-19.9c3.9-4.2,6-9.6,6-15.4L589.8,277.7\r L589.8,277.7z M520.2,591.5H277v-25h243.2c-1.5,4-2.3,8.2-2.3,12.5C517.9,583.3,518.7,587.5,520.2,591.5z M277,397.7v-25h18.4v25\r H277z M277,446.1v-25h18.4v25H277z M277,494.6v-25h18.4v25H277z M318.9,494.6v-122h163.8v122H318.9z M520.2,543.1H277v-25h243.2\r c-1.5,4-2.3,8.2-2.3,12.5C517.9,534.8,518.7,539.1,520.2,543.1z M520.2,494.6h-14.1v-25h14.1c-1.5,4-2.3,8.2-2.3,12.5\r S518.7,490.6,520.2,494.6z M520.2,397.7h-14.1v-25h14.1c-1.5,4-2.3,8.2-2.3,12.5C517.9,389.4,518.7,393.7,520.2,397.7z\r M520.2,446.1h-14.1v-25h14.1c-1.5,4-2.3,8.2-2.3,12.5C517.9,437.9,518.7,442.1,520.2,446.1z M253.6,372.6v218.9h-122V372.6H253.6z\r M94.1,566.5h14.1v25H94.1c1.5-4,2.3-8.2,2.3-12.5C96.4,574.7,95.6,570.5,94.1,566.5z M94.1,518h14.1v25H94.1\r c1.5-4,2.3-8.2,2.3-12.5C96.4,526.3,95.6,522,94.1,518z M94.1,372.6h14.1v25H94.1c1.5-4,2.3-8.2,2.3-12.5\r C96.4,380.9,95.6,376.6,94.1,372.6z M94.1,469.6h14.1v25H94.1c1.5-4,2.3-8.2,2.3-12.5C96.4,477.8,95.6,473.6,94.1,469.6z\r M94.1,421.1h14.1v25H94.1c1.5-4,2.3-8.2,2.3-12.5C96.4,429.3,95.6,425.1,94.1,421.1z M60.4,324.2c6.9,0,12.5,5.6,12.5,12.5\r c0,6.9-5.6,12.5-12.5,12.5s-12.5-5.6-12.5-12.5C47.9,329.8,53.5,324.2,60.4,324.2z M60.4,494.6c-6.9,0-12.5-5.6-12.5-12.5\r s5.6-12.5,12.5-12.5s12.5,5.6,12.5,12.5C72.9,489,67.3,494.6,60.4,494.6z M60.4,449.7L60.4,449.7l0-3.5c-6.9,0-12.5-5.6-12.5-12.5\r c0-6.9,5.6-12.5,12.5-12.5s12.5,5.6,12.5,12.5c0,6.9-5.6,12.5-12.5,12.5L60.4,449.7z M60.5,401.2L60.5,401.2l-0.1-3.5l-0.3,0\r c-6.8-0.2-12.2-5.7-12.2-12.5c0-6.9,5.6-12.5,12.5-12.5s12.5,5.6,12.5,12.5c0,6.9-5.6,12.5-12.4,12.5L60.5,401.2z M60.4,543.1\r c-6.9,0-12.5-5.6-12.5-12.5c0-6.9,5.6-12.5,12.5-12.5c6.9,0,12.5,5.6,12.5,12.5C72.9,537.4,67.3,543.1,60.4,543.1z M60.4,566.5\r L60.4,566.5c6.9,0,12.5,5.7,12.5,12.5c0,3.3-1.3,6.5-3.7,8.9c-2.4,2.4-5.5,3.7-8.9,3.7h0c-6.9,0-12.5-5.6-12.5-12.5\r C47.9,572.1,53.5,566.5,60.4,566.5z M553.9,591.5L553.9,591.5C553.9,591.5,553.9,591.5,553.9,591.5c-3.4,0-6.5-1.3-8.9-3.7\r c-2.4-2.4-3.7-5.5-3.7-8.9c0-6.8,5.6-12.5,12.4-12.5h0.1c6.9,0,12.5,5.6,12.5,12.5C566.4,585.9,560.8,591.5,553.9,591.5z\r M553.9,349.2c-6.9,0-12.5-5.6-12.5-12.5c0-6.9,5.6-12.5,12.5-12.5c6.9,0,12.5,5.6,12.5,12.5C566.4,343.6,560.8,349.2,553.9,349.2z\r M553.9,372.6c6.9,0,12.5,5.6,12.5,12.5c0,6.8-5.5,12.4-12.4,12.5c-0.1,0-0.1,0-0.2,0c-6.9,0-12.4-5.6-12.4-12.5\r C541.4,378.2,547,372.6,553.9,372.6z M553.9,421.1c6.9,0,12.5,5.6,12.5,12.5c0,6.9-5.6,12.5-12.5,12.5l0,3.5l0,0l0-3.5\r c-6.9,0-12.5-5.6-12.5-12.5C541.4,426.7,547,421.1,553.9,421.1z M553.9,469.6c6.9,0,12.5,5.6,12.5,12.5c0,6.9-5.6,12.5-12.5,12.5\r c-6.9,0-12.5-5.6-12.5-12.5S547,469.6,553.9,469.6z M553.9,518c6.9,0,12.5,5.6,12.5,12.5c0,6.9-5.6,12.5-12.5,12.5\r c-6.9,0-12.5-5.6-12.5-12.5C541.4,523.7,547,518.1,553.9,518z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M208,493.8h22c6.5,0,11.7-5.3,11.7-11.7c0-6.5-5.3-11.7-11.7-11.7h-22c-6.5,0-11.7,5.3-11.7,11.7\r C196.3,488.5,201.5,493.8,208,493.8z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M251.4,226.5c0,30.8,25,55.8,55.8,55.8c30.8,0,55.8-25,55.8-55.8c0-30.8-25-55.8-55.8-55.8\r C276.4,170.8,251.4,195.8,251.4,226.5z M274.8,226.5c0-17.8,14.5-32.3,32.3-32.3c17.8,0,32.3,14.5,32.3,32.3\r c0,17.8-14.5,32.3-32.3,32.3C289.3,258.9,274.8,244.4,274.8,226.5z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M531.2,209.9c0,6.5,5.3,11.7,11.7,11.7c5.7,0,10.6-4.2,11.5-9.7c0.4-0.3,0.9-0.6,1.6-1.1\r c4.1-2.8,11.8-7.9,11.8-18.6c0-9.5-6.1-14.7-10.4-17.6c4.3-2.9,10.4-8.1,10.4-17.6c0-6.5-5.3-11.7-11.7-11.7\r c-5.8,0-10.6,4.1-11.6,9.7c-0.5,0.4-1.2,0.8-1.6,1.1c-4.1,2.8-11.8,7.9-11.8,18.6c0,9.6,6.2,14.7,10.4,17.6\r C537.3,195.2,531.2,200.3,531.2,209.9z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M462.9,167c0,6.5,5.3,11.7,11.7,11.7c5.7,0,10.6-4.2,11.5-9.7c0.5-0.4,1.2-0.8,1.6-1.1\r c4.1-2.8,11.8-7.9,11.8-18.6c0-9.6-6.2-14.7-10.4-17.6c4.3-2.9,10.4-8.1,10.4-17.6c0-6.5-5.3-11.7-11.7-11.7\r c-5.8,0-10.6,4.1-11.6,9.7c-0.5,0.4-1.2,0.8-1.6,1.1c-4.1,2.8-11.8,7.9-11.8,18.6c0,9.6,6.2,14.7,10.4,17.6\r C469,152.4,462.9,157.5,462.9,167z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M46.5,192.2c0,10.7,7.7,15.8,11.8,18.6c0.7,0.5,1.2,0.8,1.6,1.1c1,5.5,5.8,9.7,11.5,9.7\r c6.5,0,11.7-5.3,11.7-11.7c0-9.6-6.2-14.7-10.4-17.6c4.3-2.9,10.4-8.1,10.4-17.6c0-10.7-7.7-15.8-11.8-18.6\r c-0.6-0.4-1.2-0.8-1.5-1.1c-0.9-5.6-5.7-9.7-11.6-9.7c-6.5,0-11.7,5.3-11.7,11.7c0,9.5,6.1,14.6,10.4,17.6\r C52.7,177.6,46.5,182.7,46.5,192.2z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M114.8,149.4c0,10.7,7.7,15.8,11.9,18.6c0.3,0.2,1,0.7,1.5,1c1,5.5,5.8,9.7,11.5,9.7c6.5,0,11.7-5.3,11.7-11.7\r c0-9.6-6.2-14.7-10.4-17.6c4.3-2.9,10.4-8.1,10.4-17.6c0-10.7-7.7-15.8-11.9-18.6c-0.4-0.2-1-0.7-1.5-1c-1-5.5-5.8-9.7-11.5-9.7\r c-6.5,0-11.7,5.3-11.7,11.7c0,9.6,6.2,14.7,10.4,17.6C121,134.7,114.8,139.9,114.8,149.4z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./src/templates/Contact/OfferForm/Icons/SolarPanel.tsx":
/*!**************************************************************!*\
  !*** ./src/templates/Contact/OfferForm/Icons/SolarPanel.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SolarPanel": () => (/* binding */ SolarPanel)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\OfferForm\\Icons\\SolarPanel.tsx";


const SolarPanel = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
  version: "1.1",
  id: "Layer_1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  viewBox: "26.2 141.7 557.8 557.8",
  xmlSpace: "preserve",
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M584,259.5c0-10-8.3-16.1-15-21l-0.8,1.1l0.8-1.1l-0.1-0.1c-1.7-1.3-4.8-3.6-6-4.9c0.4-1.9,2.1-5.8,2.9-7.8\r c3.2-7.5,7.3-16.8,2.4-25.2c-4.9-8.5-15.1-9.6-23.2-10.6c-1.9-0.2-6.2-0.7-8-1.3c-0.6-1.8-1-5.9-1.3-8c-0.9-8.2-2.1-18.3-10.6-23.2\r c-8.4-4.9-17.7-0.8-25.2,2.4c-2,0.9-5.9,2.5-7.7,2.9c-1.4-1.2-3.8-4.5-5-6.1c-4.9-6.7-11-15-21-15s-16.1,8.3-21,15l-0.1,0.1\r c-1.3,1.7-3.6,4.8-4.9,6c-1.9-0.4-5.8-2.1-7.8-2.9c-7.5-3.2-16.8-7.3-25.2-2.4c-8.5,4.9-9.6,15.1-10.6,23.2c-0.2,1.9-0.7,6.2-1.3,8\r c-1.8,0.6-5.9,1-8,1.3c-8.2,0.9-18.3,2.1-23.2,10.6c-4.9,8.4-0.8,17.7,2.4,25.2c0.9,2,2.6,5.9,2.9,7.7c-1.3,1.4-4.5,3.8-6.1,5\r c-6.7,4.9-15,11-15,21c0,10,8.3,16.1,15,21l0.1,0.1c1.7,1.3,4.8,3.6,6,4.9c-0.4,1.9-2.1,5.8-2.9,7.8c-3.2,7.5-7.3,16.8-2.4,25.2\r c4.9,8.5,15.1,9.6,23.2,10.6c1.9,0.2,6.2,0.7,8,1.3c0.6,1.8,1,5.9,1.3,8l0,0.4H152.9c-3.2,0-6.1,1.4-8.1,3.9h0L28,513.2\r c-1.2,1.7-1.8,3.7-1.8,5.8v170.1c0,5.7,4.7,10.4,10.4,10.4h483.4c5.7,0,10.4-4.7,10.4-10.4v-179c0-1.8-0.5-3.5-1.3-5l0.1-0.1\r L425.6,361.8c2.3-0.8,4.6-1.7,6.9-2.8c2-0.9,5.9-2.6,7.7-2.9c1.3,1.2,3.6,4.3,4.8,6l0.1,0.2c4.9,6.7,11,15,21,15\r c10,0,16.1-8.3,21-15l0.1-0.1c1.3-1.7,3.6-4.8,4.9-6c1.9,0.4,5.8,2.1,7.8,2.9c7.5,3.2,16.8,7.3,25.2,2.4\r c8.5-4.9,9.6-15.1,10.6-23.2c0.2-1.9,0.7-6.2,1.3-8c1.8-0.6,5.9-1,8-1.3c8.2-0.9,18.3-2.1,23.2-10.6c4.9-8.4,0.8-17.7-2.4-25.2\r c-0.9-2-2.6-5.9-2.9-7.7c1.2-1.4,4.5-3.7,6.1-5C575.7,275.6,584,269.4,584,259.5z M398.3,359.3l23.8,33h-55l-23.8-33H398.3z\r M325.3,446l-23.8-33h55l23.8,33H325.3z M395.3,466.8l23.8,33h-55l-23.8-33H395.3z M317.7,359.3l23.8,33h-55l-23.8-33H317.7z\r M299.8,446h-63.9l-23.8-33h63.9L299.8,446z M237.2,359.3l23.8,33H197l-23.8-33H237.2z M178.4,678.8h-50.9V574.2h50.9V678.8z\r M258.9,678.8h-59.8V563.8c0-5.7-4.7-10.4-10.4-10.4h-71.6c-5.7,0-10.4,4.7-10.4,10.4v114.9H46.9V522.3L153.2,367l105.8,146.4\r V678.8z M250.8,466.8h63.9l23.8,33h-63.9L250.8,466.8z M509.6,678.8H279.7V520.5h229.9L509.6,678.8L509.6,678.8z M499.7,499.7h-55\r l-23.8-33h55L499.7,499.7z M437.1,413.1l23.8,33h-55l-23.8-33H437.1z M556.8,263.8L556.8,263.8c-6,4.4-12.1,8.9-14.1,16.2\r c-2,7.4,1.2,14.9,4.1,21.5c0.9,1.9,1.7,3.9,2.4,5.9c-2.2,0.4-4.3,0.8-6.5,0.9c-7.1,0.8-15.1,1.7-20.5,7.1\r c-5.4,5.4-6.3,13.4-7.1,20.5c-0.2,2.2-0.5,4.3-0.9,6.4c-2-0.7-4-1.5-6-2.4c-6.6-2.9-14-6.1-21.5-4.1c-7.3,1.9-11.8,8.1-16.2,14.1\r c-1.3,1.9-2.7,3.7-4.3,5.4c-1.5-1.7-3-3.5-4.3-5.4c-4.4-5.9-8.9-12.1-16.2-14c-1.5-0.4-3.1-0.6-4.7-0.6c0,0,0,0-0.1,0\r c-5.9,0-11.6,2.5-16.7,4.7c-1.9,0.9-3.9,1.7-5.9,2.4c-0.4-2.1-0.8-4.3-0.9-6.5c-0.8-7.1-1.7-15.1-7.1-20.5\r c-5.4-5.4-13.4-6.3-20.5-7.1c-2.2-0.2-4.3-0.5-6.4-0.9c0.7-2,1.5-4,2.4-6c2.9-6.6,6.1-14,4.1-21.5c-1.9-7.3-8.1-11.8-14.1-16.2\r c-1.9-1.3-3.7-2.8-5.4-4.3c1.7-1.6,3.5-3,5.4-4.3c5.9-4.4,12.1-8.9,14-16.2c2-7.5-1.2-14.9-4.1-21.5c-0.9-1.9-1.7-3.9-2.4-5.9\r c2.1-0.4,4.3-0.8,6.5-0.9c7.1-0.8,15.1-1.7,20.5-7.1c5.4-5.4,6.3-13.4,7.1-20.5c0.2-2.2,0.5-4.3,0.9-6.4c2,0.7,4,1.5,5.9,2.4\r c6.6,2.9,14,6.1,21.5,4.1c7.3-1.9,11.8-8.1,16.2-14.1c1.3-1.9,2.7-3.7,4.3-5.4c1.5,1.7,3,3.5,4.3,5.4c4.4,5.9,8.9,12.1,16.2,14\r c7.5,2,14.9-1.2,21.5-4.1c1.9-0.9,3.9-1.7,5.9-2.4c0.4,2.1,0.8,4.3,0.9,6.5c0.8,7.1,1.7,15.1,7.1,20.5c5.4,5.4,13.4,6.3,20.5,7.1\r c2.2,0.2,4.3,0.5,6.4,0.9c-0.7,2-1.5,4-2.4,6c-2.8,6.6-6.1,14-4.1,21.4c1.9,7.3,8.1,11.8,14.1,16.2c1.9,1.3,3.7,2.7,5.4,4.3\r C560.5,261,558.7,262.5,556.8,263.8z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M466.2,195.4L466.2,195.4c-26,0-49.2,15.5-59.2,39.6c-10,24-4.5,51.4,13.9,69.8c12.3,12.3,28.6,18.8,45.2,18.8\r c8.3,0,16.6-1.6,24.6-4.9c24-10,39.6-33.2,39.6-59.2C530.3,224.2,501.5,195.4,466.2,195.4z M466.2,302.8c-17.6,0-33.3-10.5-40-26.8\r c-6.7-16.3-3-34.8,9.4-47.2c8.3-8.3,19.3-12.7,30.6-12.7c5.6,0,11.2,1.1,16.6,3.3c16.3,6.7,26.8,22.4,26.8,40\r C509.5,283.3,490.1,302.8,466.2,302.8z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M125.8,487.9c1.8,3.5,5.3,5.7,9.3,5.7h15.1l-14.4,19.2c-3.4,4.6-2.5,11.1,2.1,14.5c1.9,1.4,4,2.1,6.2,2.1\r c3.2,0,6.3-1.4,8.3-4.1l26.9-35.8c2.4-3.2,2.7-7.3,1-10.9c-1.8-3.5-5.3-5.7-9.3-5.7h-15.1l14.4-19.2c3.4-4.6,2.5-11.1-2.1-14.5\r c-4.6-3.4-11.1-2.5-14.5,2.1L126.7,477C124.4,480.2,124,484.4,125.8,487.9z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M340.9,627.9h107.4c5.7,0,10.4-4.7,10.4-10.4v-53.7c0-5.7-4.7-10.4-10.4-10.4H340.9c-5.7,0-10.4,4.7-10.4,10.4\r v53.7C330.5,623.2,335.2,627.9,340.9,627.9z M405,574.2h33v33h-33V574.2z M351.3,574.2h33v33h-33V574.2z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M63.4,305.6C63.4,305.6,63.4,305.6,63.4,305.6c4.1,0,8.1-0.7,11.9-1.9c9.7,7.2,21.3,10.9,32.9,10.9\r s23.2-3.6,32.9-10.9c12.8,4.3,26.9,1.4,37-7.8c9.8-8.9,14-22.2,11.4-35c3.8-0.1,7.6-0.7,11.2-1.9c19.5,14.5,46.3,14.5,65.8,0\r c10,3.4,21,2.3,30.2-2.9c9.4-5.3,16.1-14.5,18.2-25.1c2.1-10.6-0.5-21.6-7.1-30.2c-6.5-8.3-16.2-13.5-26.7-14.3\r c-9.9-16.6-28-26.9-47.4-26.9s-37.5,10.3-47.4,26.9c-10.6,0.8-20.3,6-26.8,14.4c-5.5,7.1-8.1,15.8-7.7,24.6\r C141,212,124.5,204,107.2,204.4c-19,0.3-36.7,10.6-46.4,26.9c-20,1.4-35.1,18-34.6,38.1C26.7,289.7,43,305.6,63.4,305.6z\r M175.6,213.6c3.1-4,8-6.5,13.1-6.5c0.7,0,1.5,0.1,2.2,0.2c4.6,0.6,9.1-1.9,10.9-6.2c5.4-12.7,17.8-20.8,31.6-20.8\r s26.2,8.2,31.6,20.8c1.8,4.3,6.3,6.8,10.9,6.2c5.9-0.8,11.8,1.7,15.3,6.3c3.1,4.1,4.2,9.4,2.8,14.3c-1.3,4.9-5,9-9.7,10.9\r c-4.7,1.9-10.2,1.5-14.6-1c-4-2.4-9.1-1.8-12.5,1.5c-13.4,13.1-34.5,13.1-47.9,0c-2-1.9-4.6-2.9-7.2-2.9c-1.8,0-3.6,0.5-5.2,1.4\r c-4.4,2.6-9.8,3-14.6,1c-4.7-1.9-8.3-6-9.7-10.9C171.5,223.1,172.5,217.7,175.6,213.6z M50.3,258.4c3.1-4,8-6.5,13.1-6.5\r c0.7,0,1.5,0.1,2.2,0.2c4.6,0.6,9.1-1.9,10.9-6.2c5.4-12.7,17.8-20.8,31.6-20.8s26.2,8.2,31.6,20.8c1.8,4.3,6.3,6.8,10.9,6.2\r c5.9-0.8,11.8,1.7,15.3,6.3c3.1,4.1,4.2,9.4,2.8,14.3c-1.3,4.9-5,9-9.7,10.9c-4.7,1.9-10.2,1.5-14.6-1c-4-2.4-9.1-1.7-12.5,1.5\r c-13.4,13.1-34.5,13.1-47.9,0c-2-1.9-4.6-2.9-7.2-2.9c-1.8,0-3.6,0.5-5.2,1.4c-4.4,2.6-9.8,3-14.6,1c-4.7-1.9-8.3-6-9.7-10.9\r C46.2,267.8,47.2,262.5,50.3,258.4z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./src/templates/Contact/OfferForm/Icons/SolidConstruction.tsx":
/*!*********************************************************************!*\
  !*** ./src/templates/Contact/OfferForm/Icons/SolidConstruction.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SolidConstruction": () => (/* binding */ SolidConstruction)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\OfferForm\\Icons\\SolidConstruction.tsx";


const SolidConstruction = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  viewBox: "-73 165.063 463.937 463.937",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#004A93'
      },
      d: "M387.414,381.581l-85.6-73.1c0.1-0.5,0.2-1,0.3-1.6v-95.6c-0.1-5.7-4.6-10.3-10.3-10.5h-47.8\r c-5.5,0-10,4.9-10,10.5v39.6l-68.5-58.4c-3.7-3.2-9.2-3.2-13,0l-221.9,189c-4.3,3.5-4.8,9.8-1.3,14.1s9.8,4.8,14.1,1.3\r c0.1-0.1,0.1-0.1,0.2-0.2l215.4-183.4l77.1,65.7l46.1,39.2l92.3,78.6c4.2,3.6,10.5,3.1,14.1-1.1\r C392.114,391.481,391.614,385.181,387.414,381.581z M282.014,291.581l-28-23.6v-47.1h28V291.581z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#004A93'
      },
      d: "M343.314,399.779l-28.1-24l-149.7-127.9c-3.7-3.2-9.2-3.2-13,0l-149.7,127.9l-28.1,24\r c-4.2,3.6-4.7,9.9-1.1,14.1c3.5,4.2,9.7,4.7,13.8,1.2l0.1-0.1l12.5-10.8v187.5c0.1,5.6,4.7,10.2,10.3,10.3h297.3\r c5.6-0.1,10.2-4.6,10.3-10.3v-187.5l12.5,10.8c1.8,1.5,4,2.4,6.4,2.4c2.9,0,5.7-1.3,7.6-3.5\r C348.114,409.579,347.514,403.279,343.314,399.779z M199.014,581.879h-80v-108h80V581.879z M298.014,581.879h-79v-117.7\r c0-5.5-4.1-10.3-9.6-10.3h-100.8c-5.5,0-9.6,4.8-9.6,10.3v117.7h-79v-194.8l139-118.4l139,118.4L298.014,581.879L298.014,581.879z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "254.667",
        y: "552.597",
        style: {
          fill: '#779CC1'
        },
        width: "38",
        height: "26.132"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "224.333",
        y: "552.597",
        style: {
          fill: '#779CC1'
        },
        width: "23.333",
        height: "26.132"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "55.666",
        y: "552.597",
        style: {
          fill: '#779CC1'
        },
        width: "38",
        height: "26.132"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "25.333",
        y: "552.597",
        style: {
          fill: '#779CC1'
        },
        width: "23.333",
        height: "26.132"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "224.667",
        y: "520.737",
        style: {
          fill: '#779CC1'
        },
        width: "51",
        height: "26.132"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "42.417",
        y: "520.648",
        style: {
          fill: '#779CC1'
        },
        width: "51",
        height: "26.132"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "25.542",
        y: "520.782",
        style: {
          fill: '#779CC1'
        },
        width: "10.833",
        height: "26.132"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "281.917",
        y: "520.849",
        style: {
          fill: '#779CC1'
        },
        width: "10.833",
        height: "26.132"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "254.917",
        y: "488.43",
        style: {
          fill: '#779CC1'
        },
        width: "38",
        height: "26.132"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "224.583",
        y: "488.43",
        style: {
          fill: '#779CC1'
        },
        width: "23.333",
        height: "26.132"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "54.915",
        y: "488.161",
        style: {
          fill: '#779CC1'
        },
        width: "38",
        height: "26.132"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "24.582",
        y: "488.161",
        style: {
          fill: '#779CC1'
        },
        width: "23.333",
        height: "26.132"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "224.667",
        y: "455.764",
        style: {
          fill: '#779CC1'
        },
        width: "51",
        height: "26.132"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "281.917",
        y: "455.876",
        style: {
          fill: '#779CC1'
        },
        width: "10.833",
        height: "26.132"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "41.667",
        y: "455.809",
        style: {
          fill: '#779CC1'
        },
        width: "51",
        height: "26.132"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "24.792",
        y: "455.943",
        style: {
          fill: '#779CC1'
        },
        width: "10.833",
        height: "26.132"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "254.083",
        y: "423.199",
        style: {
          fill: '#779CC1'
        },
        width: "38",
        height: "26.132"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "164.5",
        y: "423.199",
        style: {
          fill: '#779CC1'
        },
        width: "82.583",
        height: "26.132"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "69.5",
        y: "423.438",
        style: {
          fill: '#779CC1'
        },
        width: "84.5",
        height: "26.132"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "24.833",
        y: "423.518",
        style: {
          fill: '#779CC1'
        },
        width: "38",
        height: "26.133"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "208.5",
        y: "391.532",
        style: {
          fill: '#779CC1'
        },
        width: "82.583",
        height: "26.132"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "117.415",
        y: "391.824",
        style: {
          fill: '#779CC1'
        },
        width: "82.583",
        height: "26.132"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "25.5",
        y: "391.865",
        style: {
          fill: '#779CC1'
        },
        width: "82.583",
        height: "26.132"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "165.167",
        y: "360.198",
        style: {
          fill: '#779CC1'
        },
        width: "82.583",
        height: "26.132"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "70.167",
        y: "360.437",
        style: {
          fill: '#779CC1'
        },
        width: "84.5",
        height: "26.132"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
        x: "117.915",
        y: "328.323",
        style: {
          fill: '#779CC1'
        },
        width: "82.583",
        height: "26.132"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("polygon", {
        style: {
          fill: '#779CC1'
        },
        points: "259.834,360.198 253.251,360.198 253.251,386.33 290.48,386.33 \t\t"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("polygon", {
        style: {
          fill: '#779CC1'
        },
        points: "207.5,354.164 252.758,354.164 222.113,328.031 207.5,328.031 \t\t"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("polygon", {
        style: {
          fill: '#779CC1'
        },
        points: "165.106,322.705 215.867,322.705 185.222,296.573 165.106,296.573 \t\t"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("polygon", {
        style: {
          fill: '#779CC1'
        },
        points: "154.647,296.645 132.902,296.645 102.237,322.778 154.647,322.778 \t\t"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("polygon", {
        style: {
          fill: '#779CC1'
        },
        points: "108.583,328.365 95.681,328.365 65.017,354.497 108.583,354.497 \t\t"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("polygon", {
        style: {
          fill: '#779CC1'
        },
        points: "63.501,360.517 57.953,360.517 27.288,386.649 63.501,386.649 \t\t"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("polygon", {
        style: {
          fill: '#779CC1'
        },
        points: "159.112,274.309 141.045,289.705 177.168,289.705 \t\t"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./src/templates/Contact/OfferForm/Icons/Success.tsx":
/*!***********************************************************!*\
  !*** ./src/templates/Contact/OfferForm/Icons/Success.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Success": () => (/* binding */ Success)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\OfferForm\\Icons\\Success.tsx";


const Success = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  viewBox: "-49 141 512 512",
  xmlSpace: "preserve",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
    style: {
      fill: '#044B93'
    },
    d: "M140.236,642.633c-4.02,0-8.146-0.592-12.314-1.968c-20.777-6.707-29.261-27.696-36.751-46.209\r c-3.026-7.469-8.061-19.91-11.404-22.343s-16.482-3.279-24.332-3.83c-18.894-1.269-42.379-2.835-55.73-20.481\r c-13.689-18.153-7.659-41.258-2.835-59.813c1.989-7.553,5.289-20.206,4.02-24.099c-1.291-3.935-10.833-11.87-17.159-17.117\r C-30.847,434.672-49,419.586-49,396.884c0-22.851,18.513-38.105,33.387-50.377c5.882-4.845,15.741-12.949,17.011-16.609\r c1.185-3.83-2.116-16.651-4.062-24.31c-4.951-19.275-10.558-41.11,1.947-58.819c12.737-18.027,35.397-19.55,55.391-20.904\r c7.998-0.529,21.391-1.418,24.734-3.893c3.428-2.518,8.421-14.874,11.425-22.279c7.469-18.365,15.89-39.227,36.603-46.272\r c21.052-7.151,41.025,5.713,56.999,16.101c7.236,4.697,18.132,11.785,22.554,11.785c4.612,0,15.636-6.982,22.956-11.595\r c16.609-10.515,35.482-22.47,56.132-15.72c20.756,6.686,29.261,27.675,36.73,46.188c3.026,7.469,8.082,19.931,11.446,22.364\r c3.322,2.412,16.482,3.279,24.332,3.83c18.957,1.269,42.549,2.835,55.666,20.714c13.181,18.005,7.299,40.877,2.581,59.263\r c-1.968,7.617-5.247,20.417-3.978,24.395c1.248,3.83,11.214,11.912,17.201,16.757C444.72,359.413,463,374.245,463,396.905\r c0,22.851-18.513,38.127-33.408,50.398c-5.861,4.845-15.72,12.949-16.99,16.609c-1.164,3.808,2.052,16.482,3.978,24.078\r c4.93,19.444,10.515,41.512-2.497,59.348c-12.927,17.751-35.439,19.254-55.286,20.608c-7.955,0.529-21.264,1.418-24.628,3.893\r c-3.428,2.518-8.421,14.895-11.425,22.279c-7.469,18.407-15.89,39.248-36.582,46.293c-21.01,7.194-40.814-5.459-56.682-15.551\r c-7.151-4.57-17.984-11.468-22.491-11.468c-4.612,0-15.615,6.982-22.914,11.595C170.831,633.323,156.147,642.633,140.236,642.633z\r M140.13,193.683c-1.947,1.883-7.046,14.409-10.05,21.92c-6.157,15.191-12.525,30.891-25.665,40.517\r c-13.266,9.711-30.383,10.875-46.907,11.975c-7.871,0.529-21.031,1.418-24.268,3.745c-0.254,2.475,3.089,15.466,5.078,23.231\r c4.105,16.08,8.379,32.71,3.195,48.219c-5.036,15.128-17.836,25.686-30.213,35.884c-5.967,4.887-17.074,14.049-18.027,18.027\r c0.91,3.258,11.721,12.25,17.519,17.074c11.87,9.86,25.305,21.052,30.362,36.645c5.036,15.615,0.571,32.71-3.343,47.796\r c-2.01,7.617-5.332,20.417-4.02,24.162c2.581,1.756,16.821,2.708,24.459,3.216c16.27,1.079,33.07,2.2,46.251,11.7\r c13.266,9.542,19.698,25.432,25.918,40.814c3.004,7.405,7.998,19.804,11.277,22.152c2.327-0.508,13.245-7.448,19.761-11.552\r c13.456-8.505,28.669-18.154,45.553-18.154c16.863,0,31.948,9.627,45.257,18.09c6.453,4.105,17.223,11.023,21.073,11.023\r c2.095-1.904,7.173-14.451,10.177-21.941c6.157-15.191,12.525-30.912,25.665-40.539c13.266-9.733,31.081-10.917,46.801-11.975\r c7.934-0.508,21.2-1.418,24.416-3.83c0.444-2.687-2.856-15.699-4.824-23.485c-4.041-15.953-8.23-32.456-3.089-47.859\r c5.036-15.128,17.836-25.686,30.213-35.863c5.776-4.782,16.419-13.562,17.921-17.688c-1.566-3.935-11.7-12.123-17.201-16.609\r c-12.039-9.754-25.686-20.819-30.785-36.582c-5.057-15.657-0.656-32.816,3.216-47.965c1.989-7.659,5.268-20.523,3.978-24.247\r c-2.518-1.523-15.995-2.433-24.035-2.983c-16.292-1.079-33.112-2.2-46.293-11.721c-13.266-9.542-19.698-25.432-25.918-40.792\r c-3.004-7.405-8.019-19.804-11.277-22.152c-2.327,0.508-13.245,7.426-19.761,11.552c-13.414,8.484-28.669,18.132-45.532,18.132\r c-16.947,0-32.181-9.881-45.595-18.598C154.92,200.813,144.045,193.747,140.13,193.683z M420.748,397.307h0.212H420.748z"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
    style: {
      fill: '#044B93'
    },
    d: "M178.871,485.112c-5.607,0-11.002-2.2-14.959-6.199l-56.492-56.492c-8.273-8.273-8.273-21.645,0-29.917\r s21.645-8.273,29.917,0l40.137,40.115l94.343-112.793c7.469-8.95,20.777-10.177,29.79-2.645c8.971,7.49,10.135,20.819,2.645,29.79\r L195.078,477.516c-3.808,4.549-9.331,7.299-15.297,7.553C179.484,485.112,179.167,485.112,178.871,485.112z"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./src/templates/Contact/OfferForm/Icons/UndergroundParking.tsx":
/*!**********************************************************************!*\
  !*** ./src/templates/Contact/OfferForm/Icons/UndergroundParking.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UndergroundParking": () => (/* binding */ UndergroundParking)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\OfferForm\\Icons\\UndergroundParking.tsx";


const UndergroundParking = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
  version: "1.1",
  id: "Layer_1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  viewBox: "21.6 119.1 571.5 559.5",
  xmlSpace: "preserve",
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("defs", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
            id: "SVGID_1_",
            x: "21.6",
            y: "119.1",
            width: "571.5",
            height: "559.5"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
          style: {
            fill: '#044B93'
          },
          d: "M486.1,586.7c0,7.9-6.4,14.3-14.3,14.2c-0.1,0-0.2,0-0.4,0h-328c-7.9,0.2-14.4-6-14.7-13.8\r c0-0.1,0-0.2,0-0.4v-67.3c0-8.3,3.6-16.3,10-21.6l12-10.2h318.1l8.5,8.1c5.7,5.4,8.9,12.8,8.9,20.6v70.4L486.1,586.7L486.1,586.7\r z M471.5,653.9h-22.5c-8,0.1-14.5-6.3-14.5-14.3c0-0.1,0-0.1,0-0.2v-13.8h37.1c4.9,0.1,10-0.6,14.7-2.3v16.3\r c0,8-6.5,14.5-14.5,14.5C471.6,653.9,471.6,653.9,471.5,653.9L471.5,653.9z M180.6,639.3c0,8-6.4,14.4-14.3,14.5\r c-0.1,0-0.1,0-0.2,0h-22.5c-8,0.1-14.5-6.3-14.7-14.3v-0.1v-16.3c4.7,1.7,9.6,2.5,14.7,2.3h37.1L180.6,639.3L180.6,639.3z\r M421.1,462.9h-71.2c6.8-19.7,28.2-30.1,47.9-23.3C408.6,443.4,417.2,451.9,421.1,462.9L421.1,462.9z M186.3,409.5\r c2.3-5.7,7.9-9.4,14-9.5h219.4c6.2,0.1,11.7,3.8,14,9.5l22.8,53.4h-10.4c-6.8-33.8-39.7-55.6-73.4-48.8\r c-24.6,4.9-43.9,24.1-48.8,48.8H163.5L186.3,409.5L186.3,409.5z M494.3,477.8L487,471c-0.1-0.1-0.1-0.4-0.1-0.5l-30.2-70.6\r c-6.3-14.8-20.7-24.4-36.7-24.5H200.4c-16,0.1-30.4,9.7-36.7,24.5l-29.8,69.6l-11.1,9.5c-11.8,10.1-18.6,24.9-18.6,40.4v120\r c0,21.6,17.5,39.2,39.2,39.2h0.1H166c21.6,0.1,39.2-17.4,39.2-38.9v-0.1v-14h204.5v13.8c0,21.6,17.5,39.1,39.1,39.2h0.1h22.5\r c21.6,0.1,39.2-17.4,39.3-39.1v-0.1V516.2C510.8,501.7,504.7,487.9,494.3,477.8L494.3,477.8z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M207.7,559h-39.4v-19.7h39.4V559L207.7,559z M232.3,526.9c0-6.8-5.5-12.3-12.3-12.3h-64.1\r c-6.8,0-12.3,5.5-12.3,12.3v44.4c0,6.8,5.5,12.3,12.3,12.3H220c6.8,0,12.3-5.5,12.3-12.3L232.3,526.9L232.3,526.9z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M446.7,559h-39.4v-19.7h39.4V559L446.7,559z M471.3,526.9c0-6.8-5.5-12.3-12.3-12.3h-64.1\r c-6.8,0-12.3,5.5-12.3,12.3v44.4c0,6.8,5.5,12.3,12.3,12.3H459c6.8,0,12.3-5.5,12.3-12.3V526.9L471.3,526.9z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M348.7,556.5h-82.4c-6.8,0-12.3,5.5-12.3,12.3c0,6.8,5.5,12.3,12.3,12.3h82.4c6.8,0,12.3-5.5,12.3-12.3\r C361.1,562.1,355.5,556.5,348.7,556.5L348.7,556.5L348.7,556.5z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("defs", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
            id: "SVGID_3_",
            x: "21.6",
            y: "119.1",
            width: "571.5",
            height: "559.5"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
          style: {
            fill: '#044B93'
          },
          d: "M348.7,523.3h-82.4c-6.8,0-12.3,5.5-12.3,12.3s5.5,12.3,12.3,12.3h82.4c6.8,0,12.3-5.5,12.3-12.3\r S355.5,523.3,348.7,523.3L348.7,523.3L348.7,523.3z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("defs", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
            id: "SVGID_5_",
            x: "21.6",
            y: "119.1",
            width: "571.5",
            height: "559.5"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
          style: {
            fill: '#044B93'
          },
          d: "M568.7,653.9h-14.8V143.7h14.8V653.9L568.7,653.9z M85.7,260.8V143.7h443.6v117.1L85.7,260.8L85.7,260.8z\r M61,653.9H46.2V143.7H61L61,653.9L61,653.9z M580.8,119.1H34.2c-6.8-0.1-12.4,5.3-12.6,12.1v535.2c0.1,6.8,5.8,12.2,12.6,12.1\r h38.6c6.8,0,12.8-5.3,12.8-12.1v-381h443.6v381c0,6.8,6,12.1,12.8,12.1h38.6c6.8,0.1,12.4-5.3,12.6-12.1V131.2\r C593.2,124.4,587.5,119,580.8,119.1L580.8,119.1z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./src/templates/Contact/OfferForm/Icons/Window.tsx":
/*!**********************************************************!*\
  !*** ./src/templates/Contact/OfferForm/Icons/Window.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Window": () => (/* binding */ Window)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\OfferForm\\Icons\\Window.tsx";


const Window = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  viewBox: "-73 181.164 463.937 461.899",
  xmlSpace: "preserve",
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#044B93'
        },
        d: "M371.882,576.612h-31.327v-312.82c12.506-2.538,21.985-13.626,22.026-26.862V200.22\r c0-7.016-5.708-12.725-12.725-12.725H-31.919c-7.016,0-12.725,5.709-12.725,12.725v36.726\r c0.042,13.222,9.521,24.308,22.025,26.846v312.82h-31.326c-7.016,0-12.725,5.708-12.725,12.725v36.709\r c0,7.016,5.709,12.725,12.725,12.725h425.826c7.017,0,12.725-5.708,12.725-12.725v-36.709\r C384.606,582.32,378.898,576.612,371.882,576.612z M359.157,602.061v11.26H-41.22v-11.26H359.157z M2.832,576.612V264.338h312.275\r v312.274H2.832z M335.172,238.887H-17.235c-1.08,0-1.958-0.879-1.958-1.958v-23.984h356.325v23.984\r C337.131,238.009,336.252,238.887,335.172,238.887z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#044B93'
        },
        d: "M293.748,273.573H24.189c-6.684,0-12.122,5.438-12.122,12.122v269.558\r c0,6.685,5.438,12.122,12.122,12.122h269.559c6.684,0,12.121-5.437,12.121-12.122V285.695\r C305.869,279.011,300.432,273.573,293.748,273.573z M281.626,425.857v117.276H171.09V425.857H281.626z M281.626,297.817v103.797\r H171.09V297.817H281.626z M146.846,425.857v117.276H36.311V425.857H146.846z M146.846,297.817v103.797H36.311V297.817H146.846z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M37.759,324.461l24.779-24.779l8.762,8.761l-24.779,24.779L37.759,324.461z M37.759,324.461"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#044B93'
      },
      d: "M37.759,355.439l55.753-55.753l8.762,8.761L46.521,364.2L37.759,355.439z M37.759,355.439"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./src/templates/Contact/OfferForm/NumberRangeInput.tsx":
/*!**************************************************************!*\
  !*** ./src/templates/Contact/OfferForm/NumberRangeInput.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NumberRangeInput": () => (/* binding */ NumberRangeInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\OfferForm\\NumberRangeInput.tsx";


const NumberRangeInput = ({
  min,
  max,
  value,
  disabled,
  unit,
  onValueChange
}) => {
  const [focused, setFocused] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: `range-chose ${disabled ? 'disabled' : ''}`,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false),
      disabled: disabled,
      min: min,
      max: max,
      type: "number",
      value: value === min ? min || (focused ? '' : 0) : value.toString(),
      onChange: e => {
        const intValue = e.target.value ? parseInt(e.target.value, 10) : 0;

        if (intValue >= min && intValue <= max) {
          onValueChange(intValue);
        } else if (intValue > max) {
          onValueChange(max);
        }
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined), unit && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
      children: unit
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 16
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/templates/Contact/OfferForm/index.tsx":
/*!***************************************************!*\
  !*** ./src/templates/Contact/OfferForm/index.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OfferForm": () => (/* binding */ OfferForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-responsive-carousel */ "react-responsive-carousel");
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useSchema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useSchema */ "./src/templates/Contact/OfferForm/useSchema.ts");
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../locale */ "./src/locale/index.ts");
/* harmony import */ var _submitContactFormRequest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../submitContactFormRequest */ "./src/templates/Contact/submitContactFormRequest.ts");
/* harmony import */ var _FormStepHouseType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FormStepHouseType */ "./src/templates/Contact/OfferForm/FormStepHouseType/index.tsx");
/* harmony import */ var _FormStepHouseSpaceLiving__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FormStepHouseSpaceLiving */ "./src/templates/Contact/OfferForm/FormStepHouseSpaceLiving.tsx");
/* harmony import */ var _FormStepApartmentSpaceLiving__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FormStepApartmentSpaceLiving */ "./src/templates/Contact/OfferForm/FormStepApartmentSpaceLiving.tsx");
/* harmony import */ var _FormStepHouseCondition__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FormStepHouseCondition */ "./src/templates/Contact/OfferForm/FormStepHouseCondition.tsx");
/* harmony import */ var _FormStepHouseProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FormStepHouseProperty */ "./src/templates/Contact/OfferForm/FormStepHouseProperty.tsx");
/* harmony import */ var _FormStepCarParking__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FormStepCarParking */ "./src/templates/Contact/OfferForm/FormStepCarParking.tsx");
/* harmony import */ var _FormStepContactInformation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./FormStepContactInformation */ "./src/templates/Contact/OfferForm/FormStepContactInformation.tsx");
/* harmony import */ var _FormStepHouseFloors__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./FormStepHouseFloors */ "./src/templates/Contact/OfferForm/FormStepHouseFloors.tsx");
/* harmony import */ var _FormStepSuccess__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../FormStepSuccess */ "./src/templates/Contact/FormStepSuccess.tsx");
/* harmony import */ var _FormStepHouseConstruction__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./FormStepHouseConstruction */ "./src/templates/Contact/OfferForm/FormStepHouseConstruction/index.tsx");
/* harmony import */ var _FormStepHouseNumberOfRooms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./FormStepHouseNumberOfRooms */ "./src/templates/Contact/OfferForm/FormStepHouseNumberOfRooms.tsx");
/* harmony import */ var _FormStepApartmentFloors__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./FormStepApartmentFloors */ "./src/templates/Contact/OfferForm/FormStepApartmentFloors.tsx");
/* harmony import */ var _FormStepApartmentHeating__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./FormStepApartmentHeating */ "./src/templates/Contact/OfferForm/FormStepApartmentHeating.tsx");
/* harmony import */ var _FormStepApartmentNumberOfRooms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./FormStepApartmentNumberOfRooms */ "./src/templates/Contact/OfferForm/FormStepApartmentNumberOfRooms.tsx");
/* harmony import */ var _FormStepMisc__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./FormStepMisc */ "./src/templates/Contact/OfferForm/FormStepMisc.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\OfferForm\\index.tsx";






















const formStepsMapping = {
  houseType: _FormStepHouseType__WEBPACK_IMPORTED_MODULE_5__.FormStepHouseType,
  houseSpaceLiving: _FormStepHouseSpaceLiving__WEBPACK_IMPORTED_MODULE_6__.FormStepHouseSpaceLiving,
  apartmentSpaceLiving: _FormStepApartmentSpaceLiving__WEBPACK_IMPORTED_MODULE_7__.FormStepApartmentSpaceLiving,
  houseCondition: _FormStepHouseCondition__WEBPACK_IMPORTED_MODULE_8__.FormStepHouseCondition,
  houseFloors: _FormStepHouseFloors__WEBPACK_IMPORTED_MODULE_12__.FormStepHouseFloors,
  apartmentFloors: _FormStepApartmentFloors__WEBPACK_IMPORTED_MODULE_16__.FormStepApartmentFloors,
  apartmentHeating: _FormStepApartmentHeating__WEBPACK_IMPORTED_MODULE_17__.FormStepApartmentHeating,
  houseNumberOfRooms: _FormStepHouseNumberOfRooms__WEBPACK_IMPORTED_MODULE_15__.FormStepHouseNumberOfRooms,
  apartmentNumberOfRooms: _FormStepApartmentNumberOfRooms__WEBPACK_IMPORTED_MODULE_18__.FormStepApartmentNumberOfRooms,
  houseProperty: _FormStepHouseProperty__WEBPACK_IMPORTED_MODULE_9__.FormStepHouseProperty,
  carParking: _FormStepCarParking__WEBPACK_IMPORTED_MODULE_10__.FormStepCarParking,
  contactInformation: _FormStepContactInformation__WEBPACK_IMPORTED_MODULE_11__.FormStepContactInformation,
  houseConstruction: _FormStepHouseConstruction__WEBPACK_IMPORTED_MODULE_14__.FormStepHouseConstruction,
  misc: _FormStepMisc__WEBPACK_IMPORTED_MODULE_19__.FormStepMisc
};
const OfferForm = ({
  onClose,
  onStepChanged,
  onlineSource
}) => {
  const t = (0,_locale__WEBPACK_IMPORTED_MODULE_3__.useTranslations)('contact-form');
  const {
    schema,
    activeStepIndex,
    canGoNext,
    numberOfSteps,
    progressPercentage,
    goToPrevStep,
    goToNextStep,
    onValueChange,
    reset
  } = (0,_useSchema__WEBPACK_IMPORTED_MODULE_2__.useSchema)();
  const isLastStep = activeStepIndex === numberOfSteps - 1;
  const {
    0: isSubmitted,
    1: setIsSubmitted
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const closeForm = isCancelled => {
    setIsSubmitted(false);
    reset();
    onClose(isCancelled);
  };

  const submitForm = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
    setIsSubmitted(true);
    await (0,_submitContactFormRequest__WEBPACK_IMPORTED_MODULE_4__.submitContactFormRequest)('offer', onlineSource, schema);
  }, [schema, onlineSource, setIsSubmitted]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
    className: "offer-form rounded",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
      className: "progress",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
        className: "trail",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("i", {
          style: {
            width: `${progressPercentage}%`
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
        className: "status",
        children: t('progress', {
          page: activeStepIndex + 1,
          total: numberOfSteps
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__.Carousel, {
      showThumbs: false,
      autoPlay: false,
      showArrows: false,
      showIndicators: false,
      showStatus: false,
      swipeable: false,
      dynamicHeight: true,
      useKeyboardArrows: false,
      selectedItem: activeStepIndex + (isLastStep && isSubmitted ? 1 : 0),
      children: schema.map(formStep => {
        var _formStep$getMinValue, _formStep$getMaxValue;

        const FormStepComponent = formStepsMapping[formStep.name];
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(FormStepComponent, {
          value: formStep.value,
          errors: formStep.validate(),
          disabledOptions: formStep.disabledOptions,
          onValueChange: (value, forceNextStep) => {
            onValueChange(value);

            if (forceNextStep) {
              goToNextStep();
              onStepChanged();
            }
          },
          getMinValue: (_formStep$getMinValue = formStep.getMinValue) === null || _formStep$getMinValue === void 0 ? void 0 : _formStep$getMinValue.bind(formStep),
          getMaxValue: (_formStep$getMaxValue = formStep.getMaxValue) === null || _formStep$getMaxValue === void 0 ? void 0 : _formStep$getMaxValue.bind(formStep)
        }, formStep.name, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 15
        }, undefined);
      }).concat( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(_FormStepSuccess__WEBPACK_IMPORTED_MODULE_13__.FormStepSuccess, {}, "success", false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 19
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("nav", {
      children: !isSubmitted ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("button", {
          className: "prev",
          type: "button",
          onClick: () => {
            if (activeStepIndex > 0) {
              goToPrevStep();
            } else {
              closeForm(true);
            }

            onStepChanged();
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("span", {
            children: t('prev')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("button", {
          className: `next ${!canGoNext ? 'disabled' : ''}`,
          type: "button",
          disabled: !canGoNext,
          onClick: () => {
            if (!isLastStep) {
              goToNextStep();
            } else {
              submitForm();
            }

            onStepChanged();
          },
          children: t(!isLastStep ? 'next' : 'send')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 13
        }, undefined)]
      }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("span", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("button", {
          type: "button",
          onClick: () => closeForm(false),
          children: t('close')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 13
        }, undefined)]
      }, void 0, true)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 81,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/templates/Contact/OfferForm/useSchema.ts":
/*!******************************************************!*\
  !*** ./src/templates/Contact/OfferForm/useSchema.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSchema": () => (/* binding */ useSchema)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../schema */ "./src/templates/Contact/schema/index.ts");
/* harmony import */ var _lib_gtag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/gtag */ "./src/lib/gtag.ts");
/* harmony import */ var _utils_tracking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/tracking */ "./src/templates/Contact/utils/tracking.ts");




const APARTMENT_TYPES = ['condominium'];
const useSchema = () => {
  const {
    0: schema,
    1: setSchema
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_schema__WEBPACK_IMPORTED_MODULE_1__.getHouseTypeSchema)(null));
  const {
    0: activeStepIndex,
    1: setActiveStepIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);

  const goToPrevStep = () => {
    if (activeStepIndex === 0) {
      throw Error('Cannot go back from the first step');
    }

    setActiveStepIndex(activeStepIndex - 1);
  };

  const goToNextStep = () => {
    if (activeStepIndex < schema.length - 1) {
      const errors = schema[activeStepIndex].validate();

      if (errors.length) {
        throw Error(errors.join('\n'));
      }

      (0,_lib_gtag__WEBPACK_IMPORTED_MODULE_2__.event)({
        action: (0,_utils_tracking__WEBPACK_IMPORTED_MODULE_3__.offerFormStepActionGtagEventName)(schema, activeStepIndex + 1, 'moved_to_next'),
        category: _utils_tracking__WEBPACK_IMPORTED_MODULE_3__.GTAG_EVENT_CATEGORY,
        label: (0,_utils_tracking__WEBPACK_IMPORTED_MODULE_3__.getGtagEventLabel)('offer')
      });
      setActiveStepIndex(activeStepIndex + 1);
    }
  };

  const onValueChange = value => {
    const currentFormStep = schema.find(({
      name
    }) => name === schema[activeStepIndex].name);
    const currentFormStepName = currentFormStep.name;
    const currentFormStepPreviousValue = currentFormStep.value;
    let newSchema = [].concat(...schema);
    newSchema[activeStepIndex].value = value;

    switch (currentFormStepName) {
      case 'houseType':
        if (APARTMENT_TYPES.includes(value)) {
          if (!currentFormStepPreviousValue || !APARTMENT_TYPES.includes(currentFormStepPreviousValue)) {
            newSchema = (0,_schema__WEBPACK_IMPORTED_MODULE_1__.getApartmentTypeSchema)(newSchema);
          }
        } else if (!currentFormStepPreviousValue || APARTMENT_TYPES.includes(currentFormStepPreviousValue)) {
          newSchema = (0,_schema__WEBPACK_IMPORTED_MODULE_1__.getHouseTypeSchema)(newSchema);
        }

        break;

      case 'contactInformation':
        {
          const contactInformation = newSchema.find(({
            name
          }) => name === 'contactInformation');

          if (contactInformation.value.maritalStatus === 'married' || contactInformation.value.maritalStatus === 'partnership') {
            contactInformation.disabledOptions = [];
          } else {
            contactInformation.disabledOptions = ['partnerDateOfBirth'];
          }
        }
        break;

      case 'houseSpaceLiving':
        {
          const {
            livingArea
          } = value;
          const newSchemaStep = newSchema.find(({
            name
          }) => name === currentFormStepName);

          if (newSchemaStep) {
            newSchemaStep.setMaxValue(livingArea || 0);

            if (!livingArea) {
              newSchemaStep.disabledOptions = ['rentedArea'];
            } else {
              newSchemaStep.disabledOptions = [];
            }
          }
        }
        break;

      default:
    }

    setSchema(newSchema);
  };

  const reset = () => {
    setSchema((0,_schema__WEBPACK_IMPORTED_MODULE_1__.getHouseTypeSchema)(null));
    setActiveStepIndex(0);
  };

  return {
    schema,
    activeStepIndex,
    canGoNext: !schema[activeStepIndex].validate().length,
    isLastStep: activeStepIndex === schema.length - 1,
    numberOfSteps: schema.length,
    progressPercentage: (activeStepIndex + 1) / schema.length * 100,
    goToPrevStep,
    goToNextStep,
    onValueChange,
    reset
  };
};

/***/ }),

/***/ "./src/templates/Contact/formStep.ts":
/*!*******************************************!*\
  !*** ./src/templates/Contact/formStep.ts ***!
  \*******************************************/
/***/ (() => {



/***/ }),

/***/ "./src/templates/Contact/index.tsx":
/*!*****************************************!*\
  !*** ./src/templates/Contact/index.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Contact": () => (/* binding */ Contact)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _background_Background__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../background/Background */ "./src/background/Background.tsx");
/* harmony import */ var _layout_Section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../layout/Section */ "./src/layout/Section.tsx");
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ "./node_modules/react-responsive-carousel/lib/styles/carousel.min.css");
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_gtag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/gtag */ "./src/lib/gtag.ts");
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../locale */ "./src/locale/index.ts");
/* harmony import */ var _layout_Loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../layout/Loader */ "./src/layout/Loader.tsx");
/* harmony import */ var _OfferForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./OfferForm */ "./src/templates/Contact/OfferForm/index.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_getOnlineSource__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/getOnlineSource */ "./src/utils/getOnlineSource/index.ts");
/* harmony import */ var _utils_tracking__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/tracking */ "./src/templates/Contact/utils/tracking.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\Contact\\index.tsx";

/* eslint-disable react/display-name */













const InformationOrOffer = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/*! import() */ "src_templates_Contact_InformationOrOffer_index_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ./InformationOrOffer */ "./src/templates/Contact/InformationOrOffer/index.tsx")), {
  loading: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_layout_Loader__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 18
  }, undefined),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ./InformationOrOffer */ "./src/templates/Contact/InformationOrOffer/index.tsx")],
    modules: ["..\\templates\\Contact\\index.tsx -> " + './InformationOrOffer']
  }
});
const InformationForm = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/*! import() */ "src_templates_Contact_InformationForm_index_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ./InformationForm */ "./src/templates/Contact/InformationForm/index.tsx")), {
  loading: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_layout_Loader__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 18
  }, undefined),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ./InformationForm */ "./src/templates/Contact/InformationForm/index.tsx")],
    modules: ["..\\templates\\Contact\\index.tsx -> " + './InformationForm']
  }
});
const AdcellTrackingPixel = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/*! import() */ "src_templates_Contact_AdcellTrackingPixel_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ./AdcellTrackingPixel */ "./src/templates/Contact/AdcellTrackingPixel.tsx")), {
  loading: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_layout_Loader__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 18
  }, undefined),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ./AdcellTrackingPixel */ "./src/templates/Contact/AdcellTrackingPixel.tsx")],
    modules: ["..\\templates\\Contact\\index.tsx -> " + './AdcellTrackingPixel']
  }
});

const ContactComponent = ({
  router
}) => {
  const {
    0: activeForm,
    1: setActiveForm
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: onlineSource,
    1: setOnlineSource
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const containerRef = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();

  const onStepChanged = () => {
    window.setTimeout(() => {
      var _containerRef$current;

      return (_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : _containerRef$current.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
      });
    }, 10);
  };

  const selectActiveForm = form => {
    onStepChanged();
    (0,_lib_gtag__WEBPACK_IMPORTED_MODULE_5__.event)({
      action: (0,_utils_tracking__WEBPACK_IMPORTED_MODULE_11__.getGtagEventAction)('loaded', form),
      category: _utils_tracking__WEBPACK_IMPORTED_MODULE_11__.GTAG_EVENT_CATEGORY,
      label: (0,_utils_tracking__WEBPACK_IMPORTED_MODULE_11__.getGtagEventLabel)(form)
    });
    setActiveForm(form);
  };

  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    if (typeof router.query.ctype === 'string') {
      const type = router.query.ctype;

      if (type !== activeForm) {
        selectActiveForm(type);
      }
    }

    setOnlineSource((0,_utils_getOnlineSource__WEBPACK_IMPORTED_MODULE_10__.getOnlineSource)()); // depend on query 'ctype' only
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.ctype]);
  const t = (0,_locale__WEBPACK_IMPORTED_MODULE_6__.useTranslations)('contact-form');

  const onClose = isCancelled => {
    (0,_lib_gtag__WEBPACK_IMPORTED_MODULE_5__.event)({
      action: (0,_utils_tracking__WEBPACK_IMPORTED_MODULE_11__.getGtagEventAction)(isCancelled ? 'cancelled' : 'closed', activeForm),
      category: _utils_tracking__WEBPACK_IMPORTED_MODULE_11__.GTAG_EVENT_CATEGORY,
      label: (0,_utils_tracking__WEBPACK_IMPORTED_MODULE_11__.getGtagEventLabel)(activeForm)
    });
    setActiveForm(null);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_background_Background__WEBPACK_IMPORTED_MODULE_2__.Background, {
    color: "bg-primary-500",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_layout_Section__WEBPACK_IMPORTED_MODULE_3__.Section, {
      yPadding: "py-12",
      id: "kontakt",
      ref: containerRef,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("h2", {
        className: "text-center text-3xl lg:text-4xl font-bold text-white my-8",
        children: t('title')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("div", {
        className: "form-container",
        children: [!activeForm && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(InformationOrOffer, {
          onValueChange: selectActiveForm
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 13
        }, undefined), activeForm === 'offer' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_OfferForm__WEBPACK_IMPORTED_MODULE_8__.OfferForm, {
          onClose: onClose,
          onStepChanged: onStepChanged,
          onlineSource: onlineSource
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 13
        }, undefined), activeForm === 'information' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(InformationForm, {
          onClose: onClose,
          onStepChanged: onStepChanged,
          onlineSource: onlineSource
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(AdcellTrackingPixel, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 87,
    columnNumber: 5
  }, undefined);
};

const Contact = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.withRouter)(ContactComponent);

/***/ }),

/***/ "./src/templates/Contact/schema/apartmentFloorsFormStep.ts":
/*!*****************************************************************!*\
  !*** ./src/templates/Contact/schema/apartmentFloorsFormStep.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApartmentFloorsFormStep": () => (/* binding */ ApartmentFloorsFormStep)
/* harmony export */ });
/* harmony import */ var _utils_getFormStepValueFromSchema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getFormStepValueFromSchema */ "./src/templates/Contact/schema/utils/getFormStepValueFromSchema.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const MAX_NUMBER_OF_FLOORS = 20;
class ApartmentFloorsFormStep {
  static fromSchema(schema) {
    const apartmentFloorsValue = (0,_utils_getFormStepValueFromSchema__WEBPACK_IMPORTED_MODULE_0__.getFormStepValueFromSchema)('apartmentFloors', schema);

    if (apartmentFloorsValue) {
      return new ApartmentFloorsFormStep(apartmentFloorsValue);
    }

    const houseFloorsValue = (0,_utils_getFormStepValueFromSchema__WEBPACK_IMPORTED_MODULE_0__.getFormStepValueFromSchema)('houseFloors', schema);

    if (houseFloorsValue) {
      return new ApartmentFloorsFormStep({
        basement: houseFloorsValue.basement,
        numberOfFloors: Math.min(houseFloorsValue.numberOfFloors || 0, MAX_NUMBER_OF_FLOORS),
        location: 0
      });
    }

    return new ApartmentFloorsFormStep();
  }

  constructor(value) {
    _defineProperty(this, "value", void 0);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "disabledOptions", void 0);

    this.value = value || {
      basement: null,
      location: 0,
      numberOfFloors: 0
    };
    this.disabledOptions = [];
    this.name = 'apartmentFloors';
  }

  getMaxValue() {
    return MAX_NUMBER_OF_FLOORS;
  }

  validate() {
    const errors = [];

    if (this.value.location < 0 || this.value.location > MAX_NUMBER_OF_FLOORS) {
      errors.push('invalid_location');
    }

    if (this.value.numberOfFloors < 0 || this.value.numberOfFloors > MAX_NUMBER_OF_FLOORS) {
      errors.push('invalid_numberOfFloors');
    }

    return errors;
  }

}

/***/ }),

/***/ "./src/templates/Contact/schema/apartmentHeatingFormStep.ts":
/*!******************************************************************!*\
  !*** ./src/templates/Contact/schema/apartmentHeatingFormStep.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApartmentHeatingFormStep": () => (/* binding */ ApartmentHeatingFormStep)
/* harmony export */ });
/* harmony import */ var _utils_getFormStepValueFromSchema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getFormStepValueFromSchema */ "./src/templates/Contact/schema/utils/getFormStepValueFromSchema.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class ApartmentHeatingFormStep {
  static fromSchema(schema) {
    const apartmentHeatingValue = (0,_utils_getFormStepValueFromSchema__WEBPACK_IMPORTED_MODULE_0__.getFormStepValueFromSchema)('apartmentHeating', schema);

    if (apartmentHeatingValue) {
      return new ApartmentHeatingFormStep(apartmentHeatingValue);
    }

    return new ApartmentHeatingFormStep();
  }

  constructor(value) {
    _defineProperty(this, "value", void 0);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "disabledOptions", void 0);

    this.value = value || {
      roof: null,
      heatingAge: null,
      window: null
    };
    this.disabledOptions = [];
    this.name = 'apartmentHeating';
  }

  validate() {
    return [];
  }

}

/***/ }),

/***/ "./src/templates/Contact/schema/apartmentNumberOfRoomsFormStep.ts":
/*!************************************************************************!*\
  !*** ./src/templates/Contact/schema/apartmentNumberOfRoomsFormStep.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApartmentNumberOfRoomsFormStep": () => (/* binding */ ApartmentNumberOfRoomsFormStep)
/* harmony export */ });
/* harmony import */ var _utils_getFormStepValueFromSchema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getFormStepValueFromSchema */ "./src/templates/Contact/schema/utils/getFormStepValueFromSchema.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class ApartmentNumberOfRoomsFormStep {
  static fromSchema(schema) {
    const apartmentNumberOfRoomsValue = (0,_utils_getFormStepValueFromSchema__WEBPACK_IMPORTED_MODULE_0__.getFormStepValueFromSchema)('apartmentNumberOfRooms', schema);

    if (apartmentNumberOfRoomsValue) {
      return new ApartmentNumberOfRoomsFormStep(apartmentNumberOfRoomsValue);
    }

    const houseNumberOfRoomsValue = (0,_utils_getFormStepValueFromSchema__WEBPACK_IMPORTED_MODULE_0__.getFormStepValueFromSchema)('houseNumberOfRooms', schema);

    if (houseNumberOfRoomsValue) {
      return new ApartmentNumberOfRoomsFormStep({
        numberOfRooms: houseNumberOfRoomsValue.numberOfRooms,
        toilets: houseNumberOfRoomsValue.toilets,
        elevator: null
      });
    }

    return new ApartmentNumberOfRoomsFormStep();
  }

  constructor(value) {
    _defineProperty(this, "value", void 0);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "disabledOptions", void 0);

    this.value = value || {
      elevator: null,
      numberOfRooms: 0,
      toilets: 0
    };
    this.disabledOptions = [];
    this.name = 'apartmentNumberOfRooms';
  }

  validate() {
    const errors = [];

    if (this.value.numberOfRooms === 0) {
      errors.push('required_numberOfRooms');
    } else if (this.value.numberOfRooms < 0 || this.value.numberOfRooms > 20) {
      errors.push('invalid_numberOfRooms');
    }

    if (this.value.toilets < 0 || this.value.toilets > 10) {
      errors.push('invalid_toilets');
    }

    return errors;
  }

}

/***/ }),

/***/ "./src/templates/Contact/schema/apartmentSpaceLivingFormStep.ts":
/*!**********************************************************************!*\
  !*** ./src/templates/Contact/schema/apartmentSpaceLivingFormStep.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApartmentSpaceLivingFormStep": () => (/* binding */ ApartmentSpaceLivingFormStep)
/* harmony export */ });
/* harmony import */ var _utils_getFormStepValueFromSchema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getFormStepValueFromSchema */ "./src/templates/Contact/schema/utils/getFormStepValueFromSchema.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class ApartmentSpaceLivingFormStep {
  static fromSchema(schema) {
    const apartmentValue = (0,_utils_getFormStepValueFromSchema__WEBPACK_IMPORTED_MODULE_0__.getFormStepValueFromSchema)('apartmentSpaceLiving', schema);

    if (apartmentValue) {
      return new ApartmentSpaceLivingFormStep(apartmentValue);
    }

    const houseValue = (0,_utils_getFormStepValueFromSchema__WEBPACK_IMPORTED_MODULE_0__.getFormStepValueFromSchema)('houseSpaceLiving', schema);

    if (houseValue) {
      return new ApartmentSpaceLivingFormStep({
        livingArea: houseValue.livingArea,
        additionalArea: 0
      });
    }

    return new ApartmentSpaceLivingFormStep();
  }

  constructor(value) {
    _defineProperty(this, "value", void 0);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "disabledOptions", void 0);

    this.value = value || {
      livingArea: 0,
      additionalArea: 0
    };
    this.disabledOptions = [];
    this.name = 'apartmentSpaceLiving';
  }

  validate() {
    const errors = [];

    if (this.value.livingArea === 0) {
      errors.push('required_livingArea');
    } else if (this.value.livingArea < 0 || this.value.livingArea > 1000) {
      errors.push('invalid_livingArea');
    }

    if (this.value.additionalArea < 0 || this.value.additionalArea > 1000) {
      errors.push('invalid_landArea');
    }

    return errors;
  }

}

/***/ }),

/***/ "./src/templates/Contact/schema/carParkingFormStep.ts":
/*!************************************************************!*\
  !*** ./src/templates/Contact/schema/carParkingFormStep.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarParkingFormStep": () => (/* binding */ CarParkingFormStep)
/* harmony export */ });
/* harmony import */ var _utils_getFormStepValueFromSchema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getFormStepValueFromSchema */ "./src/templates/Contact/schema/utils/getFormStepValueFromSchema.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class CarParkingFormStep {
  static fromSchema(schema) {
    const carParkingValue = (0,_utils_getFormStepValueFromSchema__WEBPACK_IMPORTED_MODULE_0__.getFormStepValueFromSchema)('carParking', schema);

    if (carParkingValue) {
      return new CarParkingFormStep(carParkingValue);
    }

    return new CarParkingFormStep();
  }

  constructor(value) {
    _defineProperty(this, "value", void 0);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "disabledOptions", void 0);

    this.value = value || {
      numberOfUndergroundParkings: 0,
      numberOfParkingLots: 0
    };
    this.disabledOptions = [];
    this.name = 'carParking';
  }

  validate() {
    const errors = [];

    if (this.value.numberOfUndergroundParkings < 0 || this.value.numberOfUndergroundParkings > 10) {
      errors.push('invalid_numberOfUndergroundParkings');
    }

    if (this.value.numberOfParkingLots < 0 || this.value.numberOfParkingLots > 10) {
      errors.push('invalid_numberOfParkingLots');
    }

    return errors;
  }

}

/***/ }),

/***/ "./src/templates/Contact/schema/contactInformationFormStep.ts":
/*!********************************************************************!*\
  !*** ./src/templates/Contact/schema/contactInformationFormStep.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactInformationFormStep": () => (/* binding */ ContactInformationFormStep)
/* harmony export */ });
/* harmony import */ var _utils_getFormStepValueFromSchema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getFormStepValueFromSchema */ "./src/templates/Contact/schema/utils/getFormStepValueFromSchema.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const isValidEmail = email => !!email && // eslint-disable-next-line no-useless-escape
/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

class ContactInformationFormStep {
  static fromSchema(schema) {
    const contactInformationValue = (0,_utils_getFormStepValueFromSchema__WEBPACK_IMPORTED_MODULE_0__.getFormStepValueFromSchema)('contactInformation', schema);

    if (contactInformationValue) {
      return new ContactInformationFormStep(contactInformationValue);
    }

    return new ContactInformationFormStep();
  }

  constructor(value) {
    _defineProperty(this, "value", void 0);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "disabledOptions", void 0);

    this.value = value || {
      salutation: null,
      firstName: null,
      lastName: null,
      dateOfBirth: null,
      numberOfChildren: null,
      maritalStatus: null,
      partnerDateOfBirth: null,
      email: null,
      tel: null,
      street: null,
      houseNumber: null,
      zipCode: null,
      city: null,
      comment: null,
      receiveInformationViaPostAndEmail: true,
      receiveInformationViaEmail: false,
      subscribeToNewsLetter: false
    };
    this.disabledOptions = ['partnerDateOfBirth'];
    this.name = 'contactInformation';
  }

  validate() {
    const errors = [];

    if (!this.value.firstName) {
      errors.push('required_firstName');
    }

    if (!this.value.lastName) {
      errors.push('required_lastName');
    }

    if (!this.value.dateOfBirth) {
      errors.push('required_dateOfBirth');
    }

    if (!this.value.tel) {
      errors.push('required_telephone');
    }

    if (!isValidEmail(this.value.email)) {
      errors.push('required_email');
    }

    if (!this.value.street) {
      errors.push('required_street');
    }

    if (!this.value.houseNumber) {
      errors.push('required_houseNumber');
    }

    if (!this.value.zipCode) {
      errors.push('required_zipCode');
    }

    if (!this.value.city) {
      errors.push('required_city');
    }

    return errors;
  }

}

/***/ }),

/***/ "./src/templates/Contact/schema/genericFormStep.ts":
/*!*********************************************************!*\
  !*** ./src/templates/Contact/schema/genericFormStep.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenericFormStep": () => (/* binding */ GenericFormStep)
/* harmony export */ });
/* harmony import */ var _utils_getFormStepValueFromSchema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getFormStepValueFromSchema */ "./src/templates/Contact/schema/utils/getFormStepValueFromSchema.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-underscore-dangle */

class GenericFormStep {
  static fromSchema(stepName, schema, defaultValue, defaultOptional) {
    const value = (0,_utils_getFormStepValueFromSchema__WEBPACK_IMPORTED_MODULE_0__.getFormStepValueFromSchema)(stepName, schema);

    if (value) {
      return new GenericFormStep(stepName, value, defaultOptional);
    }

    return new GenericFormStep(stepName, defaultValue, defaultOptional);
  }

  constructor(name, value, optional) {
    _defineProperty(this, "_optional", false);

    _defineProperty(this, "value", void 0);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "disabledOptions", void 0);

    this.value = value;
    this.name = name;
    this.disabledOptions = [];

    if (optional) {
      this._optional = optional;
    }
  }

  get optional() {
    return this._optional;
  }

  validate() {
    return this.value != null || this._optional ? [] : ['invalid_value'];
  }

}

/***/ }),

/***/ "./src/templates/Contact/schema/houseConditionFormStep.ts":
/*!****************************************************************!*\
  !*** ./src/templates/Contact/schema/houseConditionFormStep.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HouseConditionFormStep": () => (/* binding */ HouseConditionFormStep)
/* harmony export */ });
/* harmony import */ var _utils_getFormStepValueFromSchema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getFormStepValueFromSchema */ "./src/templates/Contact/schema/utils/getFormStepValueFromSchema.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const MIN_YEAR_OF_CONSTRUCTION = 1870;
const MAX_OBJECT_STATE_VALUE = 4;
const MAX_FURNISHING_VALUE = 3;
class HouseConditionFormStep {
  static fromSchema(schema) {
    const value = (0,_utils_getFormStepValueFromSchema__WEBPACK_IMPORTED_MODULE_0__.getFormStepValueFromSchema)('houseCondition', schema);

    if (value) {
      return new HouseConditionFormStep(value);
    }

    return new HouseConditionFormStep();
  }

  constructor(value) {
    _defineProperty(this, "value", void 0);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "disabledOptions", void 0);

    _defineProperty(this, "maxConstructionYear", new Date().getFullYear() + 1);

    this.value = value || {
      yearOfConstruction: null,
      objectState: null,
      furnishing: null
    };
    this.disabledOptions = [];
    this.name = 'houseCondition';
  }

  getMinValue() {
    return MIN_YEAR_OF_CONSTRUCTION;
  }

  getMaxValue() {
    return this.maxConstructionYear;
  }

  validate() {
    const errors = [];

    if (!this.value.yearOfConstruction) {
      errors.push('required_yearOfConstruction');
    } else if (this.value.yearOfConstruction < MIN_YEAR_OF_CONSTRUCTION || this.value.yearOfConstruction > this.maxConstructionYear) {
      errors.push('invalid_yearOfConstruction');
    }

    if (this.value.objectState != null && (this.value.objectState < 0 || this.value.objectState > MAX_OBJECT_STATE_VALUE)) {
      errors.push('invalid_objectState');
    }

    if (this.value.furnishing != null && (this.value.furnishing < 0 || this.value.furnishing > MAX_FURNISHING_VALUE)) {
      errors.push('furnishing');
    }

    return errors;
  }

}

/***/ }),

/***/ "./src/templates/Contact/schema/houseFloorsFormStep.ts":
/*!*************************************************************!*\
  !*** ./src/templates/Contact/schema/houseFloorsFormStep.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HouseFloorsFormStep": () => (/* binding */ HouseFloorsFormStep)
/* harmony export */ });
/* harmony import */ var _utils_getFormStepValueFromSchema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getFormStepValueFromSchema */ "./src/templates/Contact/schema/utils/getFormStepValueFromSchema.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const MAX_NUMBER_OF_FLOORS = 5;
class HouseFloorsFormStep {
  static fromSchema(schema) {
    const houseFloorsValue = (0,_utils_getFormStepValueFromSchema__WEBPACK_IMPORTED_MODULE_0__.getFormStepValueFromSchema)('houseFloors', schema);

    if (houseFloorsValue) {
      return new HouseFloorsFormStep(houseFloorsValue);
    }

    const apartmentFloorsValue = (0,_utils_getFormStepValueFromSchema__WEBPACK_IMPORTED_MODULE_0__.getFormStepValueFromSchema)('apartmentFloors', schema);

    if (apartmentFloorsValue) {
      return new HouseFloorsFormStep({
        basement: apartmentFloorsValue.basement,
        numberOfFloors: Math.min(apartmentFloorsValue.numberOfFloors || 0, MAX_NUMBER_OF_FLOORS),
        roof: null
      });
    }

    return new HouseFloorsFormStep();
  }

  constructor(value) {
    _defineProperty(this, "value", void 0);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "disabledOptions", void 0);

    this.value = value || {
      numberOfFloors: 0,
      basement: null,
      roof: null
    };
    this.disabledOptions = [];
    this.name = 'houseFloors';
  }

  getMaxValue() {
    return MAX_NUMBER_OF_FLOORS;
  }

  validate() {
    const errors = [];

    if (this.value.numberOfFloors < 0 || this.value.numberOfFloors > MAX_NUMBER_OF_FLOORS) {
      errors.push('invalid_numberOfFloors');
    }

    return errors;
  }

}

/***/ }),

/***/ "./src/templates/Contact/schema/houseNumberOfRoomsFormStep.ts":
/*!********************************************************************!*\
  !*** ./src/templates/Contact/schema/houseNumberOfRoomsFormStep.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HouseNumberOfRoomsFormStep": () => (/* binding */ HouseNumberOfRoomsFormStep)
/* harmony export */ });
/* harmony import */ var _utils_getFormStepValueFromSchema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getFormStepValueFromSchema */ "./src/templates/Contact/schema/utils/getFormStepValueFromSchema.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class HouseNumberOfRoomsFormStep {
  static fromSchema(schema) {
    const houseNumberOfRoomsValue = (0,_utils_getFormStepValueFromSchema__WEBPACK_IMPORTED_MODULE_0__.getFormStepValueFromSchema)('houseNumberOfRooms', schema);

    if (houseNumberOfRoomsValue) {
      return new HouseNumberOfRoomsFormStep(houseNumberOfRoomsValue);
    }

    const apartmentNumberOfRoomsValue = (0,_utils_getFormStepValueFromSchema__WEBPACK_IMPORTED_MODULE_0__.getFormStepValueFromSchema)('apartmentNumberOfRooms', schema);

    if (apartmentNumberOfRoomsValue) {
      return new HouseNumberOfRoomsFormStep({
        numberOfRooms: apartmentNumberOfRoomsValue.numberOfRooms,
        toilets: apartmentNumberOfRoomsValue.toilets,
        heatingAge: null
      });
    }

    return new HouseNumberOfRoomsFormStep();
  }

  constructor(value) {
    _defineProperty(this, "value", void 0);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "disabledOptions", void 0);

    this.value = value || {
      numberOfRooms: 0,
      toilets: 0,
      heatingAge: null
    };
    this.disabledOptions = [];
    this.name = 'houseNumberOfRooms';
  }

  validate() {
    const errors = [];

    if (this.value.numberOfRooms === 0) {
      errors.push('required_numberOfRooms');
    } else if (this.value.numberOfRooms < 0 || this.value.numberOfRooms > 20) {
      errors.push('invalid_numberOfRooms');
    }

    if (this.value.toilets < 0 || this.value.toilets > 10) {
      errors.push('invalid_toilets');
    }

    return errors;
  }

}

/***/ }),

/***/ "./src/templates/Contact/schema/houseSpaceLivingFormStep.ts":
/*!******************************************************************!*\
  !*** ./src/templates/Contact/schema/houseSpaceLivingFormStep.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HouseSpaceLivingFormStep": () => (/* binding */ HouseSpaceLivingFormStep)
/* harmony export */ });
/* harmony import */ var _utils_getFormStepValueFromSchema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getFormStepValueFromSchema */ "./src/templates/Contact/schema/utils/getFormStepValueFromSchema.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class HouseSpaceLivingFormStep {
  static fromSchema(schema) {
    const houseValue = (0,_utils_getFormStepValueFromSchema__WEBPACK_IMPORTED_MODULE_0__.getFormStepValueFromSchema)('houseSpaceLiving', schema);

    if (houseValue) {
      return new HouseSpaceLivingFormStep(houseValue);
    }

    const apartmentValue = (0,_utils_getFormStepValueFromSchema__WEBPACK_IMPORTED_MODULE_0__.getFormStepValueFromSchema)('apartmentSpaceLiving', schema);

    if (apartmentValue) {
      return new HouseSpaceLivingFormStep({
        livingArea: apartmentValue.livingArea,
        rentedArea: 0,
        landArea: 0
      });
    }

    return new HouseSpaceLivingFormStep();
  }

  constructor(value) {
    _defineProperty(this, "value", void 0);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "disabledOptions", void 0);

    _defineProperty(this, "maxRentedArea", 0);

    this.value = value || {
      livingArea: 0,
      rentedArea: 0,
      landArea: 0
    };
    this.disabledOptions = value !== null && value !== void 0 && value.livingArea ? [] : ['rentedArea'];
    this.maxRentedArea = (value === null || value === void 0 ? void 0 : value.livingArea) || 0;
    this.name = 'houseSpaceLiving';
  }

  setMaxValue(value) {
    this.maxRentedArea = value || 0;

    if (this.value.rentedArea > this.maxRentedArea) {
      this.value.rentedArea = this.maxRentedArea;
    }
  }

  getMaxValue() {
    return this.maxRentedArea;
  }

  validate() {
    const errors = [];

    if (this.value.livingArea === 0) {
      errors.push('required_livingArea');
    } else if (this.value.livingArea < 0 || this.value.livingArea > 1000) {
      errors.push('invalid_livingArea');
    }

    if (this.value.rentedArea < 0 || this.value.rentedArea > this.maxRentedArea) {
      errors.push('invalid_rentedArea');
    }

    if (this.value.landArea === 0) {
      errors.push('required_landArea');
    } else if (this.value.landArea < 0 || this.value.landArea > 5000) {
      errors.push('invalid_landArea');
    }

    return errors;
  }

}

/***/ }),

/***/ "./src/templates/Contact/schema/index.ts":
/*!***********************************************!*\
  !*** ./src/templates/Contact/schema/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFormStepFromItem": () => (/* binding */ getFormStepFromItem),
/* harmony export */   "getInformationSchema": () => (/* binding */ getInformationSchema),
/* harmony export */   "getHouseTypeSchema": () => (/* binding */ getHouseTypeSchema),
/* harmony export */   "getApartmentTypeSchema": () => (/* binding */ getApartmentTypeSchema)
/* harmony export */ });
/* harmony import */ var _genericFormStep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./genericFormStep */ "./src/templates/Contact/schema/genericFormStep.ts");
/* harmony import */ var _carParkingFormStep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carParkingFormStep */ "./src/templates/Contact/schema/carParkingFormStep.ts");
/* harmony import */ var _houseConditionFormStep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./houseConditionFormStep */ "./src/templates/Contact/schema/houseConditionFormStep.ts");
/* harmony import */ var _houseSpaceLivingFormStep__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./houseSpaceLivingFormStep */ "./src/templates/Contact/schema/houseSpaceLivingFormStep.ts");
/* harmony import */ var _apartmentSpaceLivingFormStep__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./apartmentSpaceLivingFormStep */ "./src/templates/Contact/schema/apartmentSpaceLivingFormStep.ts");
/* harmony import */ var _contactInformationFormStep__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contactInformationFormStep */ "./src/templates/Contact/schema/contactInformationFormStep.ts");
/* harmony import */ var _houseFloorsFormStep__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./houseFloorsFormStep */ "./src/templates/Contact/schema/houseFloorsFormStep.ts");
/* harmony import */ var _houseNumberOfRoomsFormStep__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./houseNumberOfRoomsFormStep */ "./src/templates/Contact/schema/houseNumberOfRoomsFormStep.ts");
/* harmony import */ var _apartmentFloorsFormStep__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./apartmentFloorsFormStep */ "./src/templates/Contact/schema/apartmentFloorsFormStep.ts");
/* harmony import */ var _apartmentHeatingFormStep__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./apartmentHeatingFormStep */ "./src/templates/Contact/schema/apartmentHeatingFormStep.ts");
/* harmony import */ var _apartmentNumberOfRoomsFormStep__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./apartmentNumberOfRoomsFormStep */ "./src/templates/Contact/schema/apartmentNumberOfRoomsFormStep.ts");
/* harmony import */ var _miscFormStep__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./miscFormStep */ "./src/templates/Contact/schema/miscFormStep.ts");
/* harmony import */ var _formStep__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../formStep */ "./src/templates/Contact/formStep.ts");
/* harmony import */ var _formStep__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_formStep__WEBPACK_IMPORTED_MODULE_12__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _formStep__WEBPACK_IMPORTED_MODULE_12__) if(["default","getFormStepFromItem","getInformationSchema","getHouseTypeSchema","getApartmentTypeSchema"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _formStep__WEBPACK_IMPORTED_MODULE_12__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _yesNoValue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./yesNoValue */ "./src/templates/Contact/schema/yesNoValue.ts");
/* harmony import */ var _yesNoValue__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_yesNoValue__WEBPACK_IMPORTED_MODULE_13__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _yesNoValue__WEBPACK_IMPORTED_MODULE_13__) if(["default","getFormStepFromItem","getInformationSchema","getHouseTypeSchema","getApartmentTypeSchema"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _yesNoValue__WEBPACK_IMPORTED_MODULE_13__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _genericFormStep__WEBPACK_IMPORTED_MODULE_0__) if(["default","getFormStepFromItem","getInformationSchema","getHouseTypeSchema","getApartmentTypeSchema"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _genericFormStep__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _houseConditionFormStep__WEBPACK_IMPORTED_MODULE_2__) if(["default","getFormStepFromItem","getInformationSchema","getHouseTypeSchema","getApartmentTypeSchema"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _houseConditionFormStep__WEBPACK_IMPORTED_MODULE_2__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _carParkingFormStep__WEBPACK_IMPORTED_MODULE_1__) if(["default","getFormStepFromItem","getInformationSchema","getHouseTypeSchema","getApartmentTypeSchema"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _carParkingFormStep__WEBPACK_IMPORTED_MODULE_1__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _houseNumberOfRoomsFormStep__WEBPACK_IMPORTED_MODULE_7__) if(["default","getFormStepFromItem","getInformationSchema","getHouseTypeSchema","getApartmentTypeSchema"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _houseNumberOfRoomsFormStep__WEBPACK_IMPORTED_MODULE_7__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _apartmentNumberOfRoomsFormStep__WEBPACK_IMPORTED_MODULE_10__) if(["default","getFormStepFromItem","getInformationSchema","getHouseTypeSchema","getApartmentTypeSchema"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _apartmentNumberOfRoomsFormStep__WEBPACK_IMPORTED_MODULE_10__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _apartmentHeatingFormStep__WEBPACK_IMPORTED_MODULE_9__) if(["default","getFormStepFromItem","getInformationSchema","getHouseTypeSchema","getApartmentTypeSchema"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _apartmentHeatingFormStep__WEBPACK_IMPORTED_MODULE_9__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _houseSpaceLivingFormStep__WEBPACK_IMPORTED_MODULE_3__) if(["default","getFormStepFromItem","getInformationSchema","getHouseTypeSchema","getApartmentTypeSchema"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _houseSpaceLivingFormStep__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _contactInformationFormStep__WEBPACK_IMPORTED_MODULE_5__) if(["default","getFormStepFromItem","getInformationSchema","getHouseTypeSchema","getApartmentTypeSchema"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _contactInformationFormStep__WEBPACK_IMPORTED_MODULE_5__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _houseFloorsFormStep__WEBPACK_IMPORTED_MODULE_6__) if(["default","getFormStepFromItem","getInformationSchema","getHouseTypeSchema","getApartmentTypeSchema"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _houseFloorsFormStep__WEBPACK_IMPORTED_MODULE_6__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _apartmentFloorsFormStep__WEBPACK_IMPORTED_MODULE_8__) if(["default","getFormStepFromItem","getInformationSchema","getHouseTypeSchema","getApartmentTypeSchema"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _apartmentFloorsFormStep__WEBPACK_IMPORTED_MODULE_8__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _miscFormStep__WEBPACK_IMPORTED_MODULE_11__) if(["default","getFormStepFromItem","getInformationSchema","getHouseTypeSchema","getApartmentTypeSchema"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _miscFormStep__WEBPACK_IMPORTED_MODULE_11__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _apartmentSpaceLivingFormStep__WEBPACK_IMPORTED_MODULE_4__) if(["default","getFormStepFromItem","getInformationSchema","getHouseTypeSchema","getApartmentTypeSchema"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _apartmentSpaceLivingFormStep__WEBPACK_IMPORTED_MODULE_4__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


























const getFormStepFromItem = (name, schema) => {
  if (schema) {
    const formStep = schema.find(f => f.name === name);

    if (formStep) {
      return formStep;
    }
  }

  return null;
};
const getInformationSchema = () => [_contactInformationFormStep__WEBPACK_IMPORTED_MODULE_5__.ContactInformationFormStep.fromSchema(null)];
const getHouseTypeSchema = schema => [_genericFormStep__WEBPACK_IMPORTED_MODULE_0__.GenericFormStep.fromSchema('houseType', schema, null), _houseSpaceLivingFormStep__WEBPACK_IMPORTED_MODULE_3__.HouseSpaceLivingFormStep.fromSchema(schema), _houseConditionFormStep__WEBPACK_IMPORTED_MODULE_2__.HouseConditionFormStep.fromSchema(schema), _houseFloorsFormStep__WEBPACK_IMPORTED_MODULE_6__.HouseFloorsFormStep.fromSchema(schema), _genericFormStep__WEBPACK_IMPORTED_MODULE_0__.GenericFormStep.fromSchema('houseConstruction', schema, null, true), _houseNumberOfRoomsFormStep__WEBPACK_IMPORTED_MODULE_7__.HouseNumberOfRoomsFormStep.fromSchema(schema), _genericFormStep__WEBPACK_IMPORTED_MODULE_0__.GenericFormStep.fromSchema('houseProperty', schema, {
  pool: null,
  sauna: null,
  solarPanel: null
}), _carParkingFormStep__WEBPACK_IMPORTED_MODULE_1__.CarParkingFormStep.fromSchema(schema), new _miscFormStep__WEBPACK_IMPORTED_MODULE_11__.MiscFormStep(), _contactInformationFormStep__WEBPACK_IMPORTED_MODULE_5__.ContactInformationFormStep.fromSchema(schema)];
const getApartmentTypeSchema = schema => {
  return [_genericFormStep__WEBPACK_IMPORTED_MODULE_0__.GenericFormStep.fromSchema('houseType', schema, null), _apartmentSpaceLivingFormStep__WEBPACK_IMPORTED_MODULE_4__.ApartmentSpaceLivingFormStep.fromSchema(schema), _houseConditionFormStep__WEBPACK_IMPORTED_MODULE_2__.HouseConditionFormStep.fromSchema(schema), _apartmentFloorsFormStep__WEBPACK_IMPORTED_MODULE_8__.ApartmentFloorsFormStep.fromSchema(schema), _apartmentHeatingFormStep__WEBPACK_IMPORTED_MODULE_9__.ApartmentHeatingFormStep.fromSchema(schema), _apartmentNumberOfRoomsFormStep__WEBPACK_IMPORTED_MODULE_10__.ApartmentNumberOfRoomsFormStep.fromSchema(schema), _carParkingFormStep__WEBPACK_IMPORTED_MODULE_1__.CarParkingFormStep.fromSchema(schema), new _miscFormStep__WEBPACK_IMPORTED_MODULE_11__.MiscFormStep(), _contactInformationFormStep__WEBPACK_IMPORTED_MODULE_5__.ContactInformationFormStep.fromSchema(schema)];
};

/***/ }),

/***/ "./src/templates/Contact/schema/miscFormStep.ts":
/*!******************************************************!*\
  !*** ./src/templates/Contact/schema/miscFormStep.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MiscFormStep": () => (/* binding */ MiscFormStep)
/* harmony export */ });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class MiscFormStep {
  constructor(value) {
    _defineProperty(this, "value", void 0);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "disabledOptions", void 0);

    this.value = value || {
      asbest: null,
      leaseHold: null,
      monumentProtection: null
    };
    this.disabledOptions = [];
    this.name = 'misc';
  }

  validate() {
    return new Array().concat(...(!this.value.asbest ? ['asbest'] : [])).concat(...(!this.value.leaseHold ? ['leaseHold'] : [])).concat(...(!this.value.monumentProtection ? ['monumentProtection'] : []));
  }

}

/***/ }),

/***/ "./src/templates/Contact/schema/utils/getFormStepValueFromSchema.ts":
/*!**************************************************************************!*\
  !*** ./src/templates/Contact/schema/utils/getFormStepValueFromSchema.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFormStepValueFromSchema": () => (/* binding */ getFormStepValueFromSchema)
/* harmony export */ });
const getFormStepValueFromSchema = (stepName, schema) => {
  var _find;

  return ((_find = (schema || []).find(({
    name
  }) => name === stepName)) === null || _find === void 0 ? void 0 : _find.value) || null;
};

/***/ }),

/***/ "./src/templates/Contact/schema/yesNoValue.ts":
/*!****************************************************!*\
  !*** ./src/templates/Contact/schema/yesNoValue.ts ***!
  \****************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/templates/Contact/submitContactFormRequest.ts":
/*!***********************************************************!*\
  !*** ./src/templates/Contact/submitContactFormRequest.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "submitContactFormRequest": () => (/* binding */ submitContactFormRequest)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_gtag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/gtag */ "./src/lib/gtag.ts");
/* harmony import */ var _utils_tracking__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/tracking */ "./src/templates/Contact/utils/tracking.ts");



const API_RELATIVE_URL = '/api/contact-form/';
const submitContactFormRequest = (formType, onlineSource, schema) => {
  const requestId = (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)();
  document.dispatchEvent(new CustomEvent('contact-form-submitted', {
    detail: requestId
  }));
  (0,_lib_gtag__WEBPACK_IMPORTED_MODULE_1__.event)({
    action: (0,_utils_tracking__WEBPACK_IMPORTED_MODULE_2__.getGtagEventAction)('submitted', formType),
    category: _utils_tracking__WEBPACK_IMPORTED_MODULE_2__.GTAG_EVENT_CATEGORY,
    label: (0,_utils_tracking__WEBPACK_IMPORTED_MODULE_2__.getGtagEventLabel)(formType),
    customDimMet: {
      contact_reference_number: requestId
    }
  });
  return fetch(`${window.location.origin}/${API_RELATIVE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      formType,
      requestId,
      onlineSource,
      request: schema.map(s => ({
        name: s.name,
        value: s.value
      }))
    })
  });
};

/***/ }),

/***/ "./src/templates/Contact/utils/tracking.ts":
/*!*************************************************!*\
  !*** ./src/templates/Contact/utils/tracking.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getGtagEventAction": () => (/* binding */ getGtagEventAction),
/* harmony export */   "GTAG_EVENT_CATEGORY": () => (/* binding */ GTAG_EVENT_CATEGORY),
/* harmony export */   "getGtagEventLabel": () => (/* binding */ getGtagEventLabel),
/* harmony export */   "offerFormStepActionGtagEventName": () => (/* binding */ offerFormStepActionGtagEventName)
/* harmony export */ });
/* eslint-disable @typescript-eslint/no-use-before-define */
const CONDO_TYPE_VALUES = ['condominium'];
const getGtagEventAction = (action, form) => `${form === 'information' ? 'info' : 'offer'}_form_${action}`;
const GTAG_EVENT_CATEGORY = 'ContactForm';
const getGtagEventLabel = form => form === 'information' ? 'Information' : 'Offer';
const offerFormStepActionGtagEventName = (schema, step, action) => {
  const houseTypeStep = schema.find(({
    name
  }) => name === 'houseType');
  const eventNameMapper = !CONDO_TYPE_VALUES.includes(houseTypeStep.value) ? houseTypeFormStepToGtagEventNamePrefix : condoTypeFormStepToGtagEventNamePrefix;
  return `offer_form_step${formatStepNumber(step)}_${eventNameMapper[step]}_${action}`;
};
const houseTypeFormStepToGtagEventNamePrefix = {
  1: 'Art',
  2: 'Größe',
  3: 'Alter/Zustand',
  4: 'Architektur',
  5: 'Bauweise',
  6: 'Raumaufteilung',
  7: 'Zusatzausstattung',
  8: 'Parkmöglichkeiten',
  9: 'Besonderheiten',
  10: 'Kontaktinformationen'
};
const condoTypeFormStepToGtagEventNamePrefix = {
  1: 'Art',
  2: 'Größe',
  3: 'Alter/Zustand',
  4: 'Architektur',
  5: 'Energetik',
  6: 'Raumaufteilung',
  7: 'Parkmöglichkeiten',
  8: 'Kontaktinformationen'
};

const formatStepNumber = step => `${step < 10 ? '0' : ''}${step.toString()}`;

/***/ }),

/***/ "./src/templates/SliderFlex/Icons/Minus.tsx":
/*!**************************************************!*\
  !*** ./src/templates/SliderFlex/Icons/Minus.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Minus": () => (/* binding */ Minus)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\SliderFlex\\Icons\\Minus.tsx";


const Minus = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  viewBox: "-49 141 512 512",
  xmlSpace: "preserve",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#004A93'
      },
      d: "M211,160C81.765,160-23,264.765-23,394S81.765,628,211,628s234-104.765,234-234S340.235,160,211,160\r z M211,592.461c-109.607,0-198.461-88.854-198.461-198.461S101.393,195.539,211,195.539S409.461,284.393,409.461,394\r S320.607,592.461,211,592.461z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#004A93'
      },
      d: "M125.768,414.767c-4.093,0-7.341-0.904-9.753-2.718c-2.421-1.808-3.623-4.012-3.623-6.602v-25.628\r c0-2.585,1.202-4.787,3.623-6.601c2.412-1.808,5.66-2.719,9.753-2.719h171.098c3.71,0,6.872,0.91,9.475,2.719\r c2.595,1.814,3.901,4.017,3.901,6.601v25.628c0,2.591-1.306,4.794-3.901,6.602c-2.603,1.814-5.766,2.718-9.475,2.718H125.768z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./src/templates/SliderFlex/Icons/Plus.tsx":
/*!*************************************************!*\
  !*** ./src/templates/SliderFlex/Icons/Plus.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Plus": () => (/* binding */ Plus)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\SliderFlex\\Icons\\Plus.tsx";


const Plus = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  viewBox: "-49 141 512 512",
  xmlSpace: "preserve",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#004A93'
      },
      d: "M211,160C81.765,160-23,264.765-23,394S81.765,628,211,628s234-104.765,234-234S340.235,160,211,160\r z M211,592.461c-109.607,0-198.461-88.854-198.461-198.461S101.393,195.539,211,195.539S409.461,284.393,409.461,394\r S320.607,592.461,211,592.461z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#004A93'
        },
        d: "M198.517,512.523c-2.965,0-5.484-1.037-7.551-3.11c-2.073-2.073-3.11-4.592-3.11-7.557v-86.645\r h-85.313c-2.965,0-5.484-1.034-7.551-3.11c-2.079-2.07-3.11-4.734-3.11-7.997v-23.106c0-3.257,1.031-5.846,3.11-7.777\r c2.067-1.923,4.586-2.887,7.551-2.887h85.313v-84.424c0-2.956,1.037-5.475,3.11-7.551c2.067-2.07,4.586-3.113,7.551-3.113h25.776\r c3.254,0,5.846,1.043,7.774,3.113c1.922,2.076,2.887,4.595,2.887,7.551v84.424h85.313c2.959,0,5.478,0.964,7.551,2.887\r c2.073,1.932,3.11,4.52,3.11,7.777v23.106c0,3.263-1.037,5.927-3.11,7.997c-2.073,2.076-4.592,3.11-7.551,3.11h-85.313v86.645\r c0,2.965-0.964,5.484-2.887,7.557c-1.929,2.073-4.52,3.11-7.774,3.11H198.517z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#004A93'
        },
        d: "M198.517,512.523c-2.965,0-5.484-1.037-7.551-3.11c-2.073-2.073-3.11-4.592-3.11-7.557v-86.645\r h-85.313c-2.965,0-5.484-1.034-7.551-3.11c-2.079-2.07-3.11-4.734-3.11-7.997v-23.106c0-3.257,1.031-5.846,3.11-7.777\r c2.067-1.923,4.586-2.887,7.551-2.887h85.313v-84.424c0-2.956,1.037-5.475,3.11-7.551c2.067-2.07,4.586-3.113,7.551-3.113h25.776\r c3.254,0,5.846,1.043,7.774,3.113c1.922,2.076,2.887,4.595,2.887,7.551v84.424h85.313c2.959,0,5.478,0.964,7.551,2.887\r c2.073,1.932,3.11,4.52,3.11,7.777v23.106c0,3.263-1.037,5.927-3.11,7.997c-2.073,2.076-4.592,3.11-7.551,3.11h-85.313v86.645\r c0,2.965-0.964,5.484-2.887,7.557c-1.929,2.073-4.52,3.11-7.774,3.11H198.517z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./src/templates/SliderFlex/index.tsx":
/*!********************************************!*\
  !*** ./src/templates/SliderFlex/index.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SliderFlex": () => (/* binding */ SliderFlex)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-slider */ "rc-slider");
/* harmony import */ var rc_slider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rc_slider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icons_Plus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icons/Plus */ "./src/templates/SliderFlex/Icons/Plus.tsx");
/* harmony import */ var _Icons_Minus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Icons/Minus */ "./src/templates/SliderFlex/Icons/Minus.tsx");
/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-slider/assets/index.css */ "./node_modules/rc-slider/assets/index.css");
/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\SliderFlex\\index.tsx";






const SliderFlex = ({
  disabled,
  value,
  valueIncrement,
  min,
  max,
  onValueChange
}) => {
  const decrement = () => {
    if (value >= min + (valueIncrement || 1)) {
      onValueChange(value - (valueIncrement || 1));
    }
  };

  const increment = () => {
    if (value <= max - (valueIncrement || 1)) {
      onValueChange(value + (valueIncrement || 1));
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    className: "slider-flex",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
      disabled: disabled,
      onClick: decrement,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Icons_Minus__WEBPACK_IMPORTED_MODULE_3__.Minus, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: "slider-item",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((rc_slider__WEBPACK_IMPORTED_MODULE_1___default()), {
        disabled: disabled,
        min: min,
        max: max,
        value: value,
        onChange: onValueChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
      disabled: disabled,
      onClick: increment,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Icons_Plus__WEBPACK_IMPORTED_MODULE_2__.Plus, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/utils/AppConfig.ts":
/*!********************************!*\
  !*** ./src/utils/AppConfig.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppConfig": () => (/* binding */ AppConfig)
/* harmony export */ });
const AppConfig = {
  site_name: 'GNIW',
  title: 'GNIW Rückmietverkauf ⇒ Eigenheim zum Marktpreis verkaufen',
  description: 'Ruhestand ohne finanzielle Sorgen genießen ✚ Lebenslanges Wohnrecht ✓ Eigenheim zum Marktpreis verkaufen und vollen Verkaufspreis sofort erhalten ➤ GNIW',
  locale: 'de',
  canonical: 'https://gniw.de'
};

/***/ }),

/***/ "./src/utils/getOnlineSource/getAdcellSource.ts":
/*!******************************************************!*\
  !*** ./src/utils/getOnlineSource/getAdcellSource.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAdcellSource": () => (/* binding */ getAdcellSource)
/* harmony export */ });
/* harmony import */ var _getQueryParams__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getQueryParams */ "./src/utils/getQueryParams.ts");
/* harmony import */ var _onlineSources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onlineSources */ "./src/utils/getOnlineSource/onlineSources.ts");


const getAdcellSource = () => {
  const searchParams = (0,_getQueryParams__WEBPACK_IMPORTED_MODULE_0__.getUrlSearchParams)();
  return searchParams.bid && searchParams.adcref ? _onlineSources__WEBPACK_IMPORTED_MODULE_1__.ADCELL_SOURCE : null;
};

/***/ }),

/***/ "./src/utils/getOnlineSource/getGoogleCpcSource.ts":
/*!*********************************************************!*\
  !*** ./src/utils/getOnlineSource/getGoogleCpcSource.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getGoogleCpcSource": () => (/* binding */ getGoogleCpcSource)
/* harmony export */ });
/* harmony import */ var _getQueryParams__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getQueryParams */ "./src/utils/getQueryParams.ts");
/* harmony import */ var _onlineSources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onlineSources */ "./src/utils/getOnlineSource/onlineSources.ts");


const getGoogleCpcSource = () => {
  const searchParams = (0,_getQueryParams__WEBPACK_IMPORTED_MODULE_0__.getUrlSearchParams)();
  return searchParams.gclid ? _onlineSources__WEBPACK_IMPORTED_MODULE_1__.GOOGLE_CPC_SOURCE : null;
};

/***/ }),

/***/ "./src/utils/getOnlineSource/getOfflineSource.ts":
/*!*******************************************************!*\
  !*** ./src/utils/getOnlineSource/getOfflineSource.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOfflineSource": () => (/* binding */ getOfflineSource)
/* harmony export */ });
/* harmony import */ var _onlineSources__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onlineSources */ "./src/utils/getOnlineSource/onlineSources.ts");

const getOfflineSource = () => {
  for (let index = 0; index < _onlineSources__WEBPACK_IMPORTED_MODULE_0__.OFFLINE_SOURCES.length; index += 1) {
    const offlineSource = _onlineSources__WEBPACK_IMPORTED_MODULE_0__.OFFLINE_SOURCES[index];

    if (window.location.origin.toLowerCase().includes(offlineSource.referrerDomain)) {
      return offlineSource.name;
    }

    if (document.referrer && document.referrer.toLowerCase().includes(offlineSource.referrerDomain)) {
      return offlineSource.name;
    }
  }

  return null;
};

/***/ }),

/***/ "./src/utils/getOnlineSource/getReferrerSource.ts":
/*!********************************************************!*\
  !*** ./src/utils/getOnlineSource/getReferrerSource.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getReferrerSource": () => (/* binding */ getReferrerSource)
/* harmony export */ });
/* harmony import */ var _onlineSources__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onlineSources */ "./src/utils/getOnlineSource/onlineSources.ts");

const getReferrerSource = () => {
  if (document.referrer) {
    const referrer = document.referrer.toLowerCase();

    for (let index = 0; index < _onlineSources__WEBPACK_IMPORTED_MODULE_0__.REFERRER_ORIGINS.length; index += 1) {
      const referrerOrigin = _onlineSources__WEBPACK_IMPORTED_MODULE_0__.REFERRER_ORIGINS[index];

      if (referrer.includes(referrerOrigin)) {
        return referrerOrigin === 'google' ? _onlineSources__WEBPACK_IMPORTED_MODULE_0__.GOOGLE_SEO_SOURCE : referrerOrigin;
      }
    }
  }

  return null;
};

/***/ }),

/***/ "./src/utils/getOnlineSource/getUtmSource.ts":
/*!***************************************************!*\
  !*** ./src/utils/getOnlineSource/getUtmSource.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getUtmSource": () => (/* binding */ getUtmSource)
/* harmony export */ });
/* harmony import */ var _getQueryParams__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getQueryParams */ "./src/utils/getQueryParams.ts");
/* harmony import */ var _onlineSources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onlineSources */ "./src/utils/getOnlineSource/onlineSources.ts");


const getUtmSource = () => {
  const searchParams = (0,_getQueryParams__WEBPACK_IMPORTED_MODULE_0__.getUrlSearchParams)();
  const utmSource = searchParams.utm_source;

  if (utmSource) {
    const res = utmSource.toLowerCase();
    return res.includes('google') ? _onlineSources__WEBPACK_IMPORTED_MODULE_1__.GOOGLE_SEO_SOURCE : res;
  }

  return null;
};

/***/ }),

/***/ "./src/utils/getOnlineSource/index.ts":
/*!********************************************!*\
  !*** ./src/utils/getOnlineSource/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOnlineSource": () => (/* binding */ getOnlineSource)
/* harmony export */ });
/* harmony import */ var _getAdcellSource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getAdcellSource */ "./src/utils/getOnlineSource/getAdcellSource.ts");
/* harmony import */ var _getGoogleCpcSource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getGoogleCpcSource */ "./src/utils/getOnlineSource/getGoogleCpcSource.ts");
/* harmony import */ var _getOfflineSource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getOfflineSource */ "./src/utils/getOnlineSource/getOfflineSource.ts");
/* harmony import */ var _getReferrerSource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getReferrerSource */ "./src/utils/getOnlineSource/getReferrerSource.ts");
/* harmony import */ var _getUtmSource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getUtmSource */ "./src/utils/getOnlineSource/getUtmSource.ts");





const getOnlineSource = () => {
  const adcellSource = (0,_getAdcellSource__WEBPACK_IMPORTED_MODULE_0__.getAdcellSource)();

  if (adcellSource) {
    return adcellSource;
  }

  const googleAdSource = (0,_getGoogleCpcSource__WEBPACK_IMPORTED_MODULE_1__.getGoogleCpcSource)();

  if (googleAdSource) {
    return googleAdSource;
  }

  const offlineSource = (0,_getOfflineSource__WEBPACK_IMPORTED_MODULE_2__.getOfflineSource)();

  if (offlineSource) {
    return offlineSource;
  }

  const utmSource = (0,_getUtmSource__WEBPACK_IMPORTED_MODULE_4__.getUtmSource)();

  if (utmSource) {
    return utmSource;
  }

  const referrerSource = (0,_getReferrerSource__WEBPACK_IMPORTED_MODULE_3__.getReferrerSource)();

  if (referrerSource) {
    return referrerSource;
  }

  return null;
};

/***/ }),

/***/ "./src/utils/getOnlineSource/onlineSources.ts":
/*!****************************************************!*\
  !*** ./src/utils/getOnlineSource/onlineSources.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GOOGLE_CPC_SOURCE": () => (/* binding */ GOOGLE_CPC_SOURCE),
/* harmony export */   "GOOGLE_SEO_SOURCE": () => (/* binding */ GOOGLE_SEO_SOURCE),
/* harmony export */   "ADCELL_SOURCE": () => (/* binding */ ADCELL_SOURCE),
/* harmony export */   "REFERRER_ORIGINS": () => (/* binding */ REFERRER_ORIGINS),
/* harmony export */   "OFFLINE_SOURCES": () => (/* binding */ OFFLINE_SOURCES)
/* harmony export */ });
const GOOGLE_CPC_SOURCE = 'google-cpc';
const GOOGLE_SEO_SOURCE = 'google-seo';
const ADCELL_SOURCE = 'adcell';
const REFERRER_ORIGINS = ['facebook', 'google', 'instagram', 'linkedIn', 'xing', 'youtube'];
const OFFLINE_SOURCES = [{
  referrerDomain: 'gniw-partner.de',
  name: 'bauer'
}, {
  referrerDomain: 'gniw.eu',
  name: 'chrismon'
}, {
  referrerDomain: 'gniw.info',
  name: 'prisma'
}, {
  referrerDomain: 'gniw.org',
  name: 'senioren-ratgeber'
}];

/***/ }),

/***/ "./src/utils/getQueryParams.ts":
/*!*************************************!*\
  !*** ./src/utils/getQueryParams.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getUrlSearchParams": () => (/* binding */ getUrlSearchParams)
/* harmony export */ });
const getUrlSearchParams = search => {
  const params = new URLSearchParams(search || window.location.search);
  const res = {};
  params.forEach((value, key) => {
    res[key.toLowerCase()] = value;
  });
  return res;
};

/***/ }),

/***/ "./public/assets/images/AssCompact-Logo.svg":
/*!**************************************************!*\
  !*** ./public/assets/images/AssCompact-Logo.svg ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/AssCompact-Logo.4f37c52da79bcd294e1b0f27b2c509a9.svg","height":35,"width":180});

/***/ }),

/***/ "./public/assets/images/BskImmobilien-Logo.svg":
/*!*****************************************************!*\
  !*** ./public/assets/images/BskImmobilien-Logo.svg ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/BskImmobilien-Logo.02aad100e30a5fd5b5401b6723dcfb7d.svg","height":84,"width":336});

/***/ }),

/***/ "./public/assets/images/Capital-Logo.webp":
/*!************************************************!*\
  !*** ./public/assets/images/Capital-Logo.webp ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/Capital-Logo.550818a54360d081727da9c13b4daefb.webp","height":166,"width":422,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fassets%2Fimages%2FCapital-Logo.550818a54360d081727da9c13b4daefb.webp&w=8&q=70"});

/***/ }),

/***/ "./public/assets/images/FAZ-Logo.webp":
/*!********************************************!*\
  !*** ./public/assets/images/FAZ-Logo.webp ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/FAZ-Logo.3ebaa2bce7d414273571b2dd296a113f.webp","height":135,"width":640,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fassets%2Fimages%2FFAZ-Logo.3ebaa2bce7d414273571b2dd296a113f.webp&w=8&q=70"});

/***/ }),

/***/ "./public/assets/images/FinanceFwd-Logo.svg":
/*!**************************************************!*\
  !*** ./public/assets/images/FinanceFwd-Logo.svg ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/FinanceFwd-Logo.0305a89e0798939032ac642f27abbc44.svg","height":166,"width":516});

/***/ }),

/***/ "./public/assets/images/Finanzwelt-Logo.png":
/*!**************************************************!*\
  !*** ./public/assets/images/Finanzwelt-Logo.png ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/Finanzwelt-Logo.41862437f5317f142395d500d6cfc6a7.png","height":117,"width":350,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fassets%2Fimages%2FFinanzwelt-Logo.41862437f5317f142395d500d6cfc6a7.png&w=8&q=70"});

/***/ }),

/***/ "./public/assets/images/Hamburger-abendblatt.webp":
/*!********************************************************!*\
  !*** ./public/assets/images/Hamburger-abendblatt.webp ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/Hamburger-abendblatt.3a5812db1b3d11d0170356db745a4c3b.webp","height":223,"width":2000,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fassets%2Fimages%2FHamburger-abendblatt.3a5812db1b3d11d0170356db745a4c3b.webp&w=8&q=70"});

/***/ }),

/***/ "./public/assets/images/HamburgerVolksbankImmobilien-Logo.webp":
/*!*********************************************************************!*\
  !*** ./public/assets/images/HamburgerVolksbankImmobilien-Logo.webp ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/HamburgerVolksbankImmobilien-Logo.b06f819998c54965c9a2bb6ce2a2c5b5.webp","height":247,"width":640,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fassets%2Fimages%2FHamburgerVolksbankImmobilien-Logo.b06f819998c54965c9a2bb6ce2a2c5b5.webp&w=8&q=70"});

/***/ }),

/***/ "./public/assets/images/Handelsblatt-Logo.png":
/*!****************************************************!*\
  !*** ./public/assets/images/Handelsblatt-Logo.png ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/Handelsblatt-Logo.14930ca83a04802ccc9e1716a538a6b5.png","height":89,"width":566,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fassets%2Fimages%2FHandelsblatt-Logo.14930ca83a04802ccc9e1716a538a6b5.png&w=8&q=70"});

/***/ }),

/***/ "./public/assets/images/ImmobilienScout24-Logo.webp":
/*!**********************************************************!*\
  !*** ./public/assets/images/ImmobilienScout24-Logo.webp ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/ImmobilienScout24-Logo.4e17c8ace1c55fdfea1f89fdad0221e7.webp","height":318,"width":640,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fassets%2Fimages%2FImmobilienScout24-Logo.4e17c8ace1c55fdfea1f89fdad0221e7.webp&w=8&q=70"});

/***/ }),

/***/ "./public/assets/images/PlanetHome-Logo.webp":
/*!***************************************************!*\
  !*** ./public/assets/images/PlanetHome-Logo.webp ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/PlanetHome-Logo.b78c0cc137a66f3c6df517edd6913b8a.webp","height":107,"width":380,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fassets%2Fimages%2FPlanetHome-Logo.b78c0cc137a66f3c6df517edd6913b8a.webp&w=8&q=70"});

/***/ }),

/***/ "./public/assets/images/RbbInforadio-Logo.webp":
/*!*****************************************************!*\
  !*** ./public/assets/images/RbbInforadio-Logo.webp ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/RbbInforadio-Logo.2d1308849463805153cc12e20d716fb9.webp","height":141,"width":640,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fassets%2Fimages%2FRbbInforadio-Logo.2d1308849463805153cc12e20d716fb9.webp&w=8&q=70"});

/***/ }),

/***/ "./public/assets/images/WirtschaftsWoche-Logo.webp":
/*!*********************************************************!*\
  !*** ./public/assets/images/WirtschaftsWoche-Logo.webp ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/images/WirtschaftsWoche-Logo.b0dba5b9ecf18fb42b717d409325deb9.webp","height":341,"width":800,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fassets%2Fimages%2FWirtschaftsWoche-Logo.b0dba5b9ecf18fb42b717d409325deb9.webp&w=8&q=70"});

/***/ }),

/***/ "./node_modules/rc-slider/assets/index.css":
/*!*************************************************!*\
  !*** ./node_modules/rc-slider/assets/index.css ***!
  \*************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/styles/carousel.min.css":
/*!****************************************************************************!*\
  !*** ./node_modules/react-responsive-carousel/lib/styles/carousel.min.css ***!
  \****************************************************************************/
/***/ (() => {



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

/***/ }),

/***/ "./src/locale/calculator/de.json":
/*!***************************************!*\
  !*** ./src/locale/calculator/de.json ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"eurSign":"€","calculator":{"title":"Sofort berechnen","propertyValue":{"title":"Wert der Immobilie im bewohnten Zustand","value":"{worthy}€"},"monthlyFee":{"title":"Mögliche Mietbrandbreite","value":"{minFee}€ - {maxFee}€"}},"graph":{"worthy":"Immobilienwert","fee":"Mietbrandbreite"},"helpCTA":"Beratungstermin vereinbaren","offerCTA":"Angebot anfordern","footnote":"Alle Werte sind indikativ. Für detaillierte Bewertungen kontaktieren Sie bitte unsere Experten und lassen Sie sich unser kostenloses Angebot zusenden"}');

/***/ }),

/***/ "./src/locale/common/de.json":
/*!***********************************!*\
  !*** ./src/locale/common/de.json ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"faqTitle":"Häufige Fragen"}');

/***/ }),

/***/ "./src/locale/contact-form/de.json":
/*!*****************************************!*\
  !*** ./src/locale/contact-form/de.json ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"title":"Kontakt","information":"Ich möchte kostenloses Informationsmaterial erhalten","offer":"Ich möchte ein kostenloses Angebot erhalten","prev":"Zurück","next":"Weiter","send":"Absenden","close":"Schließen","m2":"m²","yes":"Ja","no":"Nein","onlineSource":"Online-Quelle","required":"*","progress":"Seite {page}/{total}","pleaseSelect":"Bitte wählen Sie aus","downloadBrochure":"Laden Sie unsere Broschüre herunter","autoreplyEmailSubject":"Ihre Anfrage bei der GNIW","houseTypes":{"title":"Haustyp","detachedHouse":{"title":"Einfamilienhaus","infoText":"Ein Einfamilienhaus ist ein freistehendes Haus. Es grenzt an keine anderen Häuser und ist von keinen anderen Häusern eingeschlossen."},"endOfTerraceHouse":{"title":"Reihenendhaus","infoText":"Ein Reihenendhaus ist das Haus an einem der äußeren Enden von mindestens drei Reihenhäusern. Es grenzt einseitig an ein anderes Haus und ist nicht von zwei Häusern eingeschlossen."},"midTerraceHouse":{"title":"Reihenmittelhaus","infoText":"Ein Reihenmittelhaus ist das Haus zwischen zwei Häusern von mindestens drei Reihenhäusern. Es grenzt zweiseitig an ein anderes Haus und ist von zwei Häusern eingeschlossen."},"semiDetachedHouse":{"title":"Doppelhaushalfte","infoText":"Eine Doppelhaushälfte ist die Hälfte eines Hauses, das zwei getrennte Eingänge hat und von zwei Familien bewohnt wird. Es grenzt einseitig an die andere Haushälfte und ist nicht von zwei Häusern eingeschlossen."},"multiApartmentHouse":{"title":"Mehrfamilienhaus","infoText":"Ein Mehrfamilienhaus ist ein Wohnhaus mit mehr als 3 Wohneinheiten."},"condominium":{"title":"Eigentumswohnung","infoText":"Eine Eigentumswohnung ist eine rechtlich selbstständige Wohneinheit innerhalb eines Mehrfamilienhauses."}},"houseConstruction":{"title":"Bauweise","solidConstruction":{"title":"Massivbau","infoText":"Von Massivbau wird gesprochen, wenn Ihr Gebäude aus u.a. Beton, Stahlbeton oder Mauerwerk errichtet wurde."},"prefabricatedMassive":{"title":"Fertigbau (Massiv)","infoText":"Ihr Gebäude weißt massive Bodenplatten oder massive Keller auf. Der wichtigste Baustoff ist für die oberen Stockwerke aber meist massives Holz."},"prefabricatedWood":{"title":"Fertigbau (Holz)","infoText":"Ihr Fertighaus hat keine massiven Elemente aus Beton, Stahlbeton oder Mauerwerk. Im Kern ist Ihr Gebäude ein Holzhaus."}},"spaceLiving":{"title":"Wohnbereich","livingArea":{"title":"Wohnfläche","infoText":"Die Wohnfläche bezeichnet die Summe der anrechenbaren Grundflächen der Wohnräume, die ausschließlich zu einer Wohnung gehören. Zur Wohnfläche gehören auch die Grundflächen von Wintergärten, Schwimmbädern und ähnlichen nach allen Seiten geschlossenen Räumen sowie Balkone, Loggien, Dachgärten und Terrassen, wenn sie ausschließlich zu der Wohnung gehören. Achtung: Die Grundflächen von Räumen und Raumteilen mit einer lichten Höhe von mindestens einem Meter und weniger als zwei Metern (z. B. ausgebauter Spitzboden) sind zu 50 % anzurechnen.Unbeheizte Wintergärten, Schwimmbäder und ähnliche nach allen Seiten geschlossenen Räumen sind zu 50 % und Balkone, Loggien, Dachgärten und Terrassen sind in der Regel zu 25 %, höchstens jedoch zu 50 % anzurechnen."},"additionalArea":{"title":"Zusätzliche Nutzfläche","infoText":"Zur Wohnfläche gehören nicht die Grundflächen der Zubehörräume (insbesondere Kellerräume, Abstellräume und Kellerersatzräume außerhalb der Wohnung, Waschküchen, Bodenräume, Trockenräume, Heizungsräume und Garagen sowie Geschäftsräume), welche als zusätzliche Nutzfläche bezeichnet werden."},"rentedArea":{"title":"Vermietete Fläche","infoText":"Bitte geben Sie die Mietfläche der Einliegerwohnung an, welche in der gesamten Wohnfläche der Immobilie enthalten ist."},"landArea":{"title":"Grundstücksgröße","infoText":"Die Grundstücksgröße ist die Fläche eines Grundstückes. Die Grundstücksgröße ist im Bestandsverzeichnis des Grundbuches zu finden oder beim Katasteramt erfasst."}},"houseCondition":{"yearOfConstruction":{"title":"Baujahr","infoText":"Das Baujahr des Gebäudes bezeichnet das Jahr in dem das Gebäude fertig gestellt wurde."},"objectState":{"title":"Objektzustand","infoText":"Bitte geben Sie an in welchem Zustand sich die Immobilie befindet.","options":{"0":"schlecht","1":"mäßig","2":"mittel","3":"gut","4":"sehr gut"}},"furnishing":{"title":"Ausstattung","infoText":"Bitte geben Sie an welche Ausstattung die Immobilie aufweist.","options":{"0":"einfach","1":"durchschnittlich","2":"gehoben","3":"luxuriös"}}},"numberOfRooms":{"elevator":{"title":"Fahrstuhl","infoText":"Verfügt das Gebäude (Haupt- oder Nebengebäude bzw. Seitenflügel) über einen Aufzug? Bitte geben Sie auch \\"ja\\" an, wenn Ihre Wohnung im Erdgeschoss ist oder der Fahrstuhl auf einer halben Etage hält und Sie noch eine Treppe hochlaufen müssen."},"numberOfRooms":{"title":"Anzahl Zimmer","infoText":"Bitte geben Sie die Anzahl der Zimmer bzw. Räume (ohne Flure, Küchen und Bäder) an."},"toilets":{"title":"Anzahl Bäder","infoText":"Bitte geben Sie die Anzahl der Bäder (ohne Gäste-WC) an."}},"houseProperties":{"pool":{"title":"Pool","infoText":"Verfügt die Immobilie über ein innenliegendes Schwimmbad?"},"sauna":{"title":"Sauna","infoText":"Verfügt die Immobilie über eine festeingebaute Sauna?"},"solarPanel":{"title":"Photovoltaikanlage im Eigentum","infoText":"Verfügt die Immobilie über eine Photovoltaikanlage?"}},"heating":{"heatingAge":{"title":"Alter der Heizung","infoText":"Da die Heizung einer der wichtigsten Bestandteile im Innenbereich ist, wollen wir wissen wie alt die Heizung ist. Sie profitieren von einem exakteren Ergebnis.","options":{"0":"1 - 5 Jahre","1":"6 - 15 Jahre","2":"16 - 29 Jahre","3":"30+ Jahre"}},"window":{"title":"Fenster","infoText":"Bitte geben Sie an, welche Fenster in Ihrer Wohnung verbaut sind. Dies beeinflusst die Wertermittlung erheblich.","options":{"0":"einfach verglast","1":"zweifach verglast","2":"dreifach verglast","3":"Kastenfenster","4":"große feststehende Fensterflächen","5":"Spezialverglasung","6":"sonstige"}},"roofing":{"title":"Dacheindeckung","options":{"0":"Dachpappe","1":"Dachpfannen/ziegel","2":"Kunstschiefer","3":"Naturschiefer/Metall","4":"sonstige"}}},"carParking":{"numberOfUndergroundParkings":{"title":"Garagenstellplätze","infoText":"Bitte geben Sie die Anzahl der Gargenstellplätze oder Tiefgaragenstellplätze an."},"numberOfParkingLots":{"title":"Parkplätze","infoText":"Bitte geben Sie die Anzahl an PKW-Außenstellplätze (zur Wohnung) an."}},"misc":{"asbest":{"title":"Asbest","infoText":"Wurde in Ihrer Immobilie Asbest verbaut? Zum Beispiel auf dem Dach oder in der Fassade?"},"leaseHold":{"title":"Erbbaurecht","infoText":"Erbbaurecht bzw. Erbbaupacht bezeichnet den Umstand, dass Ihnen jemand das Grundstück zur Nutzung (gegen Pacht) zur Verfügung stellt. Erbbaurecht beeinflusst die Bewertung sehr stark, sodass wir wissen müssen, ob Erbbaurecht bei Ihnen vorliegt."},"monumentProtection":{"title":"Denkmalschutz","infoText":"Der Denkmalschutz dient der Erhaltung historisch relevanter Bauwerke. Die unter Denkmalschutz stehenden Immobilien gelten als schützenswerte Objekte aufgrund ihrer historischen und kulturellen Bedeutung."}},"contact-info":{"title":{"offer":"Kontaktinformationen / Objektadresse","information":"Kontaktinformationen"},"salutation":{"title":"Anrede","mr":"Herr","ms":"Frau","mrms":"Eheleute"},"firstName":"Vorname","lastName":"Name","dateOfBirth":"Geburtsdatum","children":"Anzahl Kinder","maritalStatus":{"title":"Familienstand","single":"Alleinstehend","divorced":"Geschieden","married":"Verheiratet","partnership":"Partnerschaft","widowed":"Verwitwet"},"partnerDateOfBirth":"Geburtsdatum des Partner","email":"Email","phone":"Telefon","street":"Straße","houseNumber":"Nr.","zipCode":"PLZ","city":"Ort","comments":"Kommentar","receiveInformationViaPostAndEmail":"Das kostenlose Informationsmaterial per Download und Post erhalten","receiveInformationViaEmail":"Das kostenlose Informationsmaterial nur per Download erhalten","receiveOfferViaPostAndEmail":"Das kostenlose Angebot per Email und Post erhalten","receiveOfferViaEmail":"Das kostenlose Angebot nur per Email zusenden","subscribeToNewsLetter":"Ja, ich möchte individuelle Angebote und Neuigkeiten der  GNIW Gesellschaft für Nachhaltige Immobilienwirtschaft mbH erhalten und erteile dazu mein Einverständnis. Ich kann meine Einwilligung jederzeit mit Wirkung für die Zukunft und ohne Angabe von Gründen widerrufen."},"emailRequest":{"information":{"subject":"GNIW.DE || Neue Informationsmaterial Anfrage"},"offer":{"subject":"GNIW.DE || Neue Angebotsanfrage von {lastName}, {address}"}},"houseFloors":{"numberOfFloors":{"title":"Anzahl der Geschosse (ohne Dach/Kellergeschoss)","infoText":"Geben sie bitte alle vollen Wohngeschosse an (ohne Keller, halbe Geschosse oder Geschosse mit Dachschrägen)."},"apartmentLocation":{"title":"Lage der Wohnung (Geschosszahl)"},"basement":{"title":"Keller","infoText":"Wie sehr ist Ihr Gebäude unterkellert?","options":{"0":"Vollunterkellert","1":"Teilweise","2":"unterkellert","3":"Nicht unterkellert"}},"roof":{"title":"Dach","infoText":"Wenn eine Etage Dachschrägen hat, dann gehört diese Etage i.d.R. bereits zum Dachgeschoss. Indem Fall geben sie bitte teilweise/voll \\"ausgebautes Dachgeschoss\\" ein.","options":{"0":"Voll ausgebaut","1":"Teilweise ausgebaut","2":"Nicht ausgebaut","3":"Flachdach"}}},"successMessage":"Vielen Dank für Ihre Anfrage - wir werden uns zeitnah bei Ihnen melden."}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();