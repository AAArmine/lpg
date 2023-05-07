"use strict";
exports.id = "src_layout_Meta_tsx";
exports.ids = ["src_layout_Meta_tsx"];
exports.modules = {

/***/ "./src/layout/Meta.tsx":
/*!*****************************!*\
  !*** ./src/layout/Meta.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-seo */ "next-seo");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_AppConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/AppConfig */ "./src/utils/AppConfig.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\layout\\Meta.tsx";







const Meta = props => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("meta", {
        charSet: "UTF-8"
      }, "charset", false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("meta", {
        name: "viewport",
        content: "width=device-width,initial-scale=1"
      }, "viewport", false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("link", {
        rel: "apple-touch-icon",
        href: `${router.basePath}/apple-touch-icon.png`
      }, "apple", false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("link", {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: `${router.basePath}/favicon-32x32.png`
      }, "icon32", false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("link", {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: `${router.basePath}/favicon-16x16.png`
      }, "icon16", false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("link", {
        rel: "icon",
        href: `${router.basePath}/favicon.ico`
      }, "favicon", false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("meta", {
        name: "facebook-domain-verification",
        content: "egxf0pn1kgv2p7w423xxi26nfgu9nu"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("script", {
        type: "text/javascript",
        src: "//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js",
        async: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(next_seo__WEBPACK_IMPORTED_MODULE_0__.NextSeo, {
      title: props.title,
      description: props.description,
      canonical: props.canonical,
      openGraph: {
        title: props.title,
        description: props.description,
        url: props.canonical,
        locale: _utils_AppConfig__WEBPACK_IMPORTED_MODULE_3__.AppConfig.locale,
        site_name: _utils_AppConfig__WEBPACK_IMPORTED_MODULE_3__.AppConfig.site_name
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Meta);

/***/ }),

/***/ "./src/utils/AppConfig.ts":
/*!********************************!*\
  !*** ./src/utils/AppConfig.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2xheW91dF9NZXRhX3RzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7Ozs7QUFRQSxNQUFNSSxJQUFJLEdBQUlDLEtBQUQsSUFBdUI7QUFDbEMsUUFBTUMsTUFBTSxHQUFHSixzREFBUyxFQUF4QjtBQUVBLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw4QkFDRTtBQUFNLGVBQU8sRUFBQztBQUFkLFNBQTBCLFNBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUNFLFlBQUksRUFBQyxVQURQO0FBRUUsZUFBTyxFQUFDO0FBRlYsU0FHTSxVQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFPRTtBQUNFLFdBQUcsRUFBQyxrQkFETjtBQUVFLFlBQUksRUFBRyxHQUFFSSxNQUFNLENBQUNDLFFBQVM7QUFGM0IsU0FHTSxPQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEYsZUFZRTtBQUNFLFdBQUcsRUFBQyxNQUROO0FBRUUsWUFBSSxFQUFDLFdBRlA7QUFHRSxhQUFLLEVBQUMsT0FIUjtBQUlFLFlBQUksRUFBRyxHQUFFRCxNQUFNLENBQUNDLFFBQVM7QUFKM0IsU0FLTSxRQUxOO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWkYsZUFtQkU7QUFDRSxXQUFHLEVBQUMsTUFETjtBQUVFLFlBQUksRUFBQyxXQUZQO0FBR0UsYUFBSyxFQUFDLE9BSFI7QUFJRSxZQUFJLEVBQUcsR0FBRUQsTUFBTSxDQUFDQyxRQUFTO0FBSjNCLFNBS00sUUFMTjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQW5CRixlQTBCRTtBQUNFLFdBQUcsRUFBQyxNQUROO0FBRUUsWUFBSSxFQUFHLEdBQUVELE1BQU0sQ0FBQ0MsUUFBUztBQUYzQixTQUdNLFNBSE47QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkExQkYsZUErQkU7QUFDRSxZQUFJLEVBQUMsOEJBRFA7QUFFRSxlQUFPLEVBQUM7QUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQS9CRixlQW1DRTtBQUNFLFlBQUksRUFBQyxpQkFEUDtBQUVFLFdBQUcsRUFBQyxpRUFGTjtBQUdFLGFBQUs7QUFIUDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQW5DRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUEwQ0UsOERBQUMsNkNBQUQ7QUFDRSxXQUFLLEVBQUVGLEtBQUssQ0FBQ0csS0FEZjtBQUVFLGlCQUFXLEVBQUVILEtBQUssQ0FBQ0ksV0FGckI7QUFHRSxlQUFTLEVBQUVKLEtBQUssQ0FBQ0ssU0FIbkI7QUFJRSxlQUFTLEVBQUU7QUFDVEYsUUFBQUEsS0FBSyxFQUFFSCxLQUFLLENBQUNHLEtBREo7QUFFVEMsUUFBQUEsV0FBVyxFQUFFSixLQUFLLENBQUNJLFdBRlY7QUFHVEUsUUFBQUEsR0FBRyxFQUFFTixLQUFLLENBQUNLLFNBSEY7QUFJVEUsUUFBQUEsTUFBTSxFQUFFVCw4REFKQztBQUtUVSxRQUFBQSxTQUFTLEVBQUVWLGlFQUFtQlU7QUFMckI7QUFKYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTFDRjtBQUFBLGtCQURGO0FBeURELENBNUREOztBQThEQSxpRUFBZVQsSUFBZjs7Ozs7Ozs7Ozs7Ozs7QUMxRU8sTUFBTUQsU0FBUyxHQUFHO0FBQ3ZCVSxFQUFBQSxTQUFTLEVBQUUsTUFEWTtBQUV2QkwsRUFBQUEsS0FBSyxFQUFFLDJEQUZnQjtBQUd2QkMsRUFBQUEsV0FBVyxFQUNULDBKQUpxQjtBQUt2QkcsRUFBQUEsTUFBTSxFQUFFLElBTGU7QUFNdkJGLEVBQUFBLFNBQVMsRUFBRTtBQU5ZLENBQWxCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ25pdy13ZWJzaXRlLy4vc3JjL2xheW91dC9NZXRhLnRzeCIsIndlYnBhY2s6Ly9nbml3LXdlYnNpdGUvLi9zcmMvdXRpbHMvQXBwQ29uZmlnLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRTZW8gfSBmcm9tICduZXh0LXNlbyc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IEFwcENvbmZpZyB9IGZyb20gJy4uL3V0aWxzL0FwcENvbmZpZyc7XHJcblxyXG50eXBlIElNZXRhUHJvcHMgPSB7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIGNhbm9uaWNhbD86IHN0cmluZztcclxufTtcclxuXHJcbmNvbnN0IE1ldGEgPSAocHJvcHM6IElNZXRhUHJvcHMpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJVVEYtOFwiIGtleT1cImNoYXJzZXRcIiAvPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxyXG4gICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIlxyXG4gICAgICAgICAga2V5PVwidmlld3BvcnRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIlxyXG4gICAgICAgICAgaHJlZj17YCR7cm91dGVyLmJhc2VQYXRofS9hcHBsZS10b3VjaC1pY29uLnBuZ2B9XHJcbiAgICAgICAgICBrZXk9XCJhcHBsZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwiaWNvblwiXHJcbiAgICAgICAgICB0eXBlPVwiaW1hZ2UvcG5nXCJcclxuICAgICAgICAgIHNpemVzPVwiMzJ4MzJcIlxyXG4gICAgICAgICAgaHJlZj17YCR7cm91dGVyLmJhc2VQYXRofS9mYXZpY29uLTMyeDMyLnBuZ2B9XHJcbiAgICAgICAgICBrZXk9XCJpY29uMzJcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cImljb25cIlxyXG4gICAgICAgICAgdHlwZT1cImltYWdlL3BuZ1wiXHJcbiAgICAgICAgICBzaXplcz1cIjE2eDE2XCJcclxuICAgICAgICAgIGhyZWY9e2Ake3JvdXRlci5iYXNlUGF0aH0vZmF2aWNvbi0xNngxNi5wbmdgfVxyXG4gICAgICAgICAga2V5PVwiaWNvbjE2XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJpY29uXCJcclxuICAgICAgICAgIGhyZWY9e2Ake3JvdXRlci5iYXNlUGF0aH0vZmF2aWNvbi5pY29gfVxyXG4gICAgICAgICAga2V5PVwiZmF2aWNvblwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgbmFtZT1cImZhY2Vib29rLWRvbWFpbi12ZXJpZmljYXRpb25cIlxyXG4gICAgICAgICAgY29udGVudD1cImVneGYwcG4xa2d2MnA3dzQyM3h4aTI2bmZndTludVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8c2NyaXB0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCJcclxuICAgICAgICAgIHNyYz1cIi8vd2lkZ2V0LnRydXN0cGlsb3QuY29tL2Jvb3RzdHJhcC92NS90cC53aWRnZXQuYm9vdHN0cmFwLm1pbi5qc1wiXHJcbiAgICAgICAgICBhc3luY1xyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPE5leHRTZW9cclxuICAgICAgICB0aXRsZT17cHJvcHMudGl0bGV9XHJcbiAgICAgICAgZGVzY3JpcHRpb249e3Byb3BzLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgIGNhbm9uaWNhbD17cHJvcHMuY2Fub25pY2FsfVxyXG4gICAgICAgIG9wZW5HcmFwaD17e1xyXG4gICAgICAgICAgdGl0bGU6IHByb3BzLnRpdGxlLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IHByb3BzLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgdXJsOiBwcm9wcy5jYW5vbmljYWwsXHJcbiAgICAgICAgICBsb2NhbGU6IEFwcENvbmZpZy5sb2NhbGUsXHJcbiAgICAgICAgICBzaXRlX25hbWU6IEFwcENvbmZpZy5zaXRlX25hbWUsXHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZXRhO1xyXG4iLCJleHBvcnQgY29uc3QgQXBwQ29uZmlnID0ge1xyXG4gIHNpdGVfbmFtZTogJ0dOSVcnLFxyXG4gIHRpdGxlOiAnR05JVyBSw7xja21pZXR2ZXJrYXVmIOKHkiBFaWdlbmhlaW0genVtIE1hcmt0cHJlaXMgdmVya2F1ZmVuJyxcclxuICBkZXNjcmlwdGlvbjpcclxuICAgICdSdWhlc3RhbmQgb2huZSBmaW5hbnppZWxsZSBTb3JnZW4gZ2VuaWXDn2VuIOKcmiBMZWJlbnNsYW5nZXMgV29obnJlY2h0IOKckyBFaWdlbmhlaW0genVtIE1hcmt0cHJlaXMgdmVya2F1ZmVuIHVuZCB2b2xsZW4gVmVya2F1ZnNwcmVpcyBzb2ZvcnQgZXJoYWx0ZW4g4p6kIEdOSVcnLFxyXG4gIGxvY2FsZTogJ2RlJyxcclxuICBjYW5vbmljYWw6ICdodHRwczovL2duaXcuZGUnLFxyXG59O1xyXG4iXSwibmFtZXMiOlsiTmV4dFNlbyIsIkhlYWQiLCJ1c2VSb3V0ZXIiLCJBcHBDb25maWciLCJNZXRhIiwicHJvcHMiLCJyb3V0ZXIiLCJiYXNlUGF0aCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJjYW5vbmljYWwiLCJ1cmwiLCJsb2NhbGUiLCJzaXRlX25hbWUiXSwic291cmNlUm9vdCI6IiJ9